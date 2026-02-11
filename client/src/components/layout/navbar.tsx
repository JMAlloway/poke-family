import { Link } from "wouter";
import { ShoppingCart, Search, Menu, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useShopify } from "@/hooks/use-shopify";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItemCount } = useShopify();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="font-heading text-2xl font-bold text-primary tracking-tight hover:scale-105 transition-transform">
            Poke<span className="text-accent">Bundles</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/"><a className="text-sm font-medium hover:text-primary transition-colors">Home</a></Link>
          <Link href="/shop"><a className="text-sm font-medium hover:text-primary transition-colors">Shop Bundles</a></Link>
          <Link href="/guide">
            <a className="text-sm font-bold text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
              <BookOpen className="w-4 h-4" /> Parent's Guide
            </a>
          </Link>
          <Link href="/about"><a className="text-sm font-medium hover:text-primary transition-colors">Our Story</a></Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary/50">
            <Search className="w-5 h-5" />
          </Button>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary/50 relative">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {cartItemCount > 99 ? "99+" : cartItemCount}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 mt-8">
                  <Link href="/"><a onClick={() => setIsOpen(false)} className="text-lg font-medium">Home</a></Link>
                  <Link href="/shop"><a onClick={() => setIsOpen(false)} className="text-lg font-medium">Shop Bundles</a></Link>
                  <Link href="/guide"><a onClick={() => setIsOpen(false)} className="text-lg font-bold text-accent">Parent's Guide</a></Link>
                  <Link href="/about"><a onClick={() => setIsOpen(false)} className="text-lg font-medium">Our Story</a></Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
