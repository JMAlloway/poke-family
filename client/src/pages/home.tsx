import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { ProductCard } from "@/components/shop/product-card";
import { TrustSection } from "@/components/home/trust-section";
import { ParentGuidePreview } from "@/components/home/parent-guide-preview";
import { Button } from "@/components/ui/button";
import { useShopify } from "@/hooks/use-shopify";
import { Loader2 } from "lucide-react";
import { Link } from "wouter";

// Fallback images for demo mode
import bundleStarter from "@/assets/images/bundle-starter.png";
import bundleRare from "@/assets/images/bundle-rare.png";
import bundleFamily from "@/assets/images/bundle-family.png";

const fallbackProducts = [
  {
    id: "1",
    title: "Ultimate Starter Bundle",
    price: 24.99,
    rating: 5,
    image: bundleStarter,
    isNew: true,
  },
  {
    id: "2",
    title: "Rare Holo Booster Pack",
    price: 12.99,
    rating: 5,
    image: bundleRare,
    isNew: false,
  },
  {
    id: "3",
    title: "Family Game Night Kit",
    price: 49.99,
    rating: 5,
    image: bundleFamily,
    isNew: true,
  },
  {
    id: "4",
    title: "Mystery Power Box",
    price: 19.99,
    rating: 4,
    image: bundleStarter,
    isNew: false,
  },
];

export default function Home() {
  const { products: shopifyProducts, productsLoading, productsError, addToCart, isConfigured } = useShopify();

  // Map Shopify products to the format ProductCard expects
  const products = isConfigured && shopifyProducts.length > 0
    ? shopifyProducts.map((p) => ({
        id: p.id,
        variantId: p.variants[0]?.id,
        title: p.title,
        price: parseFloat(p.variants[0]?.price.amount || "0"),
        rating: 5,
        image: p.images[0]?.src || bundleStarter,
        isNew: p.tags.includes("new"),
      }))
    : fallbackProducts.map((p) => ({ ...p, variantId: undefined }));

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <main>
        <Hero />

        <TrustSection />

        <ParentGuidePreview />

        {/* Featured Products */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Trending Bundles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular packs, curated to give you the best pulls and the most fun.
            </p>
          </div>

          {productsLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : productsError ? (
            <div className="text-center py-20 text-muted-foreground">
              <p>{productsError}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  isNew={product.isNew}
                  onAddToCart={
                    product.variantId
                      ? () => addToCart(product.variantId!)
                      : undefined
                  }
                />
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link href="/shop">
              <Button size="lg" variant="secondary" className="font-bold text-primary hover:text-primary-foreground px-8 rounded-full">
                View All Products
              </Button>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to Start Your Collection?</h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of families building memories one card at a time.
                Perfect for birthdays, rewards, or just because!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/shop">
                  <Button size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
