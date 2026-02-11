import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold">Poke<span className="text-accent">Bundles</span></h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bringing the joy of Pokemon to families everywhere with safe, authentic, and fun curated bundles.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/shop"><a className="hover:text-primary">All Bundles</a></Link></li>
              <li><Link href="/shop"><a className="hover:text-primary">Starter Packs</a></Link></li>
              <li><Link href="/shop"><a className="hover:text-primary">Rare Cards</a></Link></li>
              <li><Link href="/shop"><a className="hover:text-primary">Gift Cards</a></Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/faq"><a className="hover:text-primary">FAQ</a></Link></li>
              <li><Link href="/shipping"><a className="hover:text-primary">Shipping & Returns</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary">Contact Us</a></Link></li>
              <li><Link href="/privacy"><a className="hover:text-primary">Privacy Policy</a></Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Stay in the loop!</h4>
            <p className="text-sm text-muted-foreground mb-4">Get special offers and new bundle alerts.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold hover:brightness-110 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 PokeBundles. All rights reserved.</p>
          <div className="flex gap-4 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
