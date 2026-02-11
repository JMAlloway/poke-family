import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import bundleStarter from "@/assets/images/bundle-starter.png";
import bundleRare from "@/assets/images/bundle-rare.png";
import { useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Ultimate Starter Bundle",
      price: 24.99,
      image: bundleStarter,
      quantity: 1
    },
    {
      id: 2,
      title: "Rare Holo Booster Pack",
      price: 12.99,
      image: bundleRare,
      quantity: 2
    }
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold mb-8">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-secondary/20 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Looks like you haven't added any bundles yet!</p>
            <Link href="/shop">
              <Button size="lg" className="rounded-full">Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-6 p-6 bg-card border border-border rounded-2xl shadow-sm items-center">
                  <div className="w-24 h-24 bg-secondary/30 rounded-xl p-2 flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-primary font-bold text-lg">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-white rounded-md transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-white rounded-md transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm sticky top-24">
                <h3 className="font-heading font-bold text-xl mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-green-600 font-bold">FREE</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full rounded-full h-12 text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform mb-4">
                  Checkout <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  Secure Checkout • 100% Satisfaction Guarantee
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
