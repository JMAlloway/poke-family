import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import shopifyClient from "@/lib/shopify";

// The Shopify Buy SDK checkout object at runtime.
// We use a loose type because @types/shopify-buy has Cart vs Checkout mismatches.
interface ShopifyCheckout {
  id: string;
  webUrl: string;
  completedAt: string | null;
  subtotalPrice: { amount: string; currencyCode: string } | string;
  lineItems: Array<{
    id: string;
    title: string;
    quantity: number;
    variant: {
      id: string;
      title: string;
      price: { amount: string; currencyCode: string } | string;
      image: { src: string; altText: string | null };
      product: { id: string; handle: string };
    };
  }>;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  images: { src: string; altText: string | null }[];
  variants: {
    id: string;
    title: string;
    price: { amount: string; currencyCode: string };
    available: boolean;
  }[];
  productType: string;
  tags: string[];
}

interface CartLineItem {
  id: string;
  title: string;
  quantity: number;
  variant: {
    id: string;
    title: string;
    price: { amount: string; currencyCode: string };
    image: { src: string; altText: string | null };
    product: { id: string; handle: string };
  };
}

interface ShopifyContextValue {
  products: ShopifyProduct[];
  productsLoading: boolean;
  productsError: string | null;
  cart: ShopifyCheckout | null;
  cartLoading: boolean;
  cartItemCount: number;
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
  updateCartItem: (lineItemId: string, quantity: number) => Promise<void>;
  removeCartItem: (lineItemId: string) => Promise<void>;
  getCheckoutUrl: () => string | null;
  isConfigured: boolean;
}

const ShopifyContext = createContext<ShopifyContextValue | null>(null);

const CART_ID_KEY = "pokebundles_cart_id";

function normalizeProduct(product: any): ShopifyProduct {
  return {
    id: String(product.id),
    title: product.title,
    description: (product as any).description || "",
    handle: (product as any).handle || "",
    images: product.images.map((img: any) => ({
      src: img.src || "",
      altText: img.altText || null,
    })),
    variants: product.variants.map((v: any) => ({
      id: String(v.id),
      title: v.title,
      price: {
        amount: v.price?.amount || v.price || "0",
        currencyCode: v.price?.currencyCode || "USD",
      },
      available: v.available !== false,
    })),
    productType: (product as any).productType || "",
    tags: (product as any).tags || [],
  };
}

export function ShopifyProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState<string | null>(null);
  const [cart, setCart] = useState<ShopifyCheckout | null>(null);
  const [cartLoading, setCartLoading] = useState(true);

  const isConfigured = Boolean(
    import.meta.env.VITE_SHOPIFY_DOMAIN &&
      import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN
  );

  // Fetch products
  useEffect(() => {
    if (!isConfigured) {
      setProductsLoading(false);
      return;
    }

    shopifyClient.product
      .fetchAll()
      .then((fetchedProducts) => {
        setProducts(fetchedProducts.map(normalizeProduct));
        setProductsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch Shopify products:", err);
        setProductsError("Failed to load products. Please try again later.");
        setProductsLoading(false);
      });
  }, [isConfigured]);

  // Initialize or restore cart
  useEffect(() => {
    if (!isConfigured) {
      setCartLoading(false);
      return;
    }

    const savedCartId = localStorage.getItem(CART_ID_KEY);
    if (savedCartId) {
      shopifyClient.checkout
        .fetch(savedCartId)
        .then((existingCheckout: any) => {
          if (existingCheckout && !existingCheckout.completedAt) {
            setCart(existingCheckout as ShopifyCheckout);
          } else {
            return createNewCart();
          }
        })
        .catch(() => createNewCart())
        .finally(() => setCartLoading(false));
    } else {
      createNewCart().finally(() => setCartLoading(false));
    }
  }, [isConfigured]);

  async function createNewCart() {
    try {
      const newCheckout: any = await shopifyClient.checkout.create();
      localStorage.setItem(CART_ID_KEY, String(newCheckout.id));
      setCart(newCheckout as ShopifyCheckout);
    } catch (err) {
      console.error("Failed to create Shopify checkout:", err);
    }
  }

  const addToCart = useCallback(
    async (variantId: string, quantity = 1) => {
      if (!cart) return;
      setCartLoading(true);
      try {
        const updatedCheckout: any = await shopifyClient.checkout.addLineItems(
          cart.id,
          [{ variantId, quantity }]
        );
        setCart(updatedCheckout as ShopifyCheckout);
      } catch (err) {
        console.error("Failed to add item to cart:", err);
      } finally {
        setCartLoading(false);
      }
    },
    [cart]
  );

  const updateCartItem = useCallback(
    async (lineItemId: string, quantity: number) => {
      if (!cart) return;
      setCartLoading(true);
      try {
        const updatedCheckout: any = await shopifyClient.checkout.updateLineItems(
          cart.id,
          [{ id: lineItemId, quantity }]
        );
        setCart(updatedCheckout as ShopifyCheckout);
      } catch (err) {
        console.error("Failed to update cart item:", err);
      } finally {
        setCartLoading(false);
      }
    },
    [cart]
  );

  const removeCartItem = useCallback(
    async (lineItemId: string) => {
      if (!cart) return;
      setCartLoading(true);
      try {
        const updatedCheckout: any = await shopifyClient.checkout.removeLineItems(
          cart.id,
          [lineItemId]
        );
        setCart(updatedCheckout as ShopifyCheckout);
      } catch (err) {
        console.error("Failed to remove cart item:", err);
      } finally {
        setCartLoading(false);
      }
    },
    [cart]
  );

  const getCheckoutUrl = useCallback(() => {
    if (!cart) return null;
    return cart.webUrl || null;
  }, [cart]);

  const cartItemCount =
    cart?.lineItems?.reduce(
      (total: number, item: any) => total + item.quantity,
      0
    ) ?? 0;

  return (
    <ShopifyContext.Provider
      value={{
        products,
        productsLoading,
        productsError,
        cart,
        cartLoading,
        cartItemCount,
        addToCart,
        updateCartItem,
        removeCartItem,
        getCheckoutUrl,
        isConfigured,
      }}
    >
      {children}
    </ShopifyContext.Provider>
  );
}

export function useShopify() {
  const context = useContext(ShopifyContext);
  if (!context) {
    throw new Error("useShopify must be used within a ShopifyProvider");
  }
  return context;
}
