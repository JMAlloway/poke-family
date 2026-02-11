import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Star } from "lucide-react";
import heroImage from "@/assets/images/hero-family.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-20 bg-secondary/30 text-center">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90">Our Mission</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              Bringing Families <span className="text-accent">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We believe in the power of play. PokeBundles was born from a desire to make collecting safe, affordable, and fun for the next generation of trainers.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-accent/10 rounded-3xl transform rotate-3" />
              <img 
                src={heroImage} 
                alt="Our Story" 
                className="relative rounded-3xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            
            <div className="order-1 md:order-2 space-y-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-heading font-bold">More Than Just Cards</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When we started PokeBundles, we saw a problem: fake cards, confusing products, and overpriced packs. We wanted to create a safe haven where parents could shop with confidence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every bundle is hand-curated by our team of experts (and tested by our own kids!) to ensure maximum fun and zero disappointment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-secondary/20 border border-secondary">
                  <div className="font-bold text-2xl text-primary mb-1">50k+</div>
                  <div className="text-sm text-muted-foreground">Bundles Shipped</div>
                </div>
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <div className="font-bold text-2xl text-accent mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Authentic Cards</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
