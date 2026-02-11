import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ShopifyProvider } from "@/hooks/use-shopify";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Cart from "@/pages/cart";
import About from "@/pages/about";
import Guide from "@/pages/guide";
import { AnnouncementBar } from "@/components/layout/announcement-bar";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shop" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/about" component={About} />
      <Route path="/guide" component={Guide} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ShopifyProvider>
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            <AnnouncementBar />
            <Toaster />
            <Router />
          </div>
        </TooltipProvider>
      </ShopifyProvider>
    </QueryClientProvider>
  );
}

export default App;
