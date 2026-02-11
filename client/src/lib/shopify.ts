import Client from "shopify-buy";

const domain = import.meta.env.VITE_SHOPIFY_DOMAIN;
const storefrontAccessToken = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

if (!domain || !storefrontAccessToken) {
  console.warn(
    "Shopify credentials not configured. Set VITE_SHOPIFY_DOMAIN and VITE_SHOPIFY_STOREFRONT_TOKEN environment variables."
  );
}

const shopifyClient = Client.buildClient({
  domain: domain || "",
  storefrontAccessToken: storefrontAccessToken || "",
  apiVersion: "2024-01",
});

export default shopifyClient;
