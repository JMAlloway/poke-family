import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import guideHero from "@/assets/images/guide-hero.png";

export default function Guide() {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <div className="bg-secondary/30 pt-20 pb-32 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <Badge className="mb-6 bg-accent text-white hover:bg-accent/90 px-4 py-1 text-base">Parent's Handbook 101</Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-foreground leading-tight">
              Become a <span className="text-primary">Pokémon Pro</span> (Overnight)
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              The jargon-free, stress-free guide to understanding what your kids are talking about.
            </p>
          </div>
          
          <div className="absolute -bottom-16 left-0 right-0 h-32 bg-background transform -skew-y-2 origin-bottom-right" />
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-20 mb-20">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img src={guideHero} alt="Parent and child learning" className="w-full h-[400px] object-cover" />
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 max-w-4xl space-y-24 mb-24">
          
          {/* Section 1: Rarity */}
          <section id="rarity">
            <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl">1</span>
              Rarity Explained
            </h2>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <p className="text-lg text-muted-foreground mb-8">
                Look at the bottom corner of the card. You'll see a tiny symbol. That's the key to everything.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary/20 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">●</div>
                  <h3 className="font-bold text-lg mb-2">Circle = Common</h3>
                  <p className="text-sm text-muted-foreground">These are everywhere. Your kid will have hundreds. Great for filling binders.</p>
                </div>
                <div className="bg-secondary/20 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">◆</div>
                  <h3 className="font-bold text-lg mb-2">Diamond = Uncommon</h3>
                  <p className="text-sm text-muted-foreground">A bit harder to find, usually stronger Pokémon.</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-xl text-center border-2 border-primary/20">
                  <div className="text-4xl mb-4">★</div>
                  <h3 className="font-bold text-lg mb-2">Star = Rare</h3>
                  <p className="text-sm text-muted-foreground">The good stuff! Holos, VMAX, Full Arts. These are the ones to sleeve.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Real vs Fake */}
          <section id="fake-spotting">
            <h2 className="text-3xl font-heading font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-xl">2</span>
              Is It Fake?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                <h3 className="font-bold text-xl text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" /> Real Cards
                </h3>
                <ul className="space-y-3 text-green-700 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    Multi-layered cardboard (you can see a thin dark layer on the edge)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    Texture! Run your finger over a rare card. It should feel textured, like a fingerprint.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    Crisp, clear text with no spelling errors.
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                <h3 className="font-bold text-xl text-red-800 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6" /> Fake Cards
                </h3>
                <ul className="space-y-3 text-red-700 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    Feel smooth and glossy, like cheap plastic.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    If you hold it up to a light, you can see right through it.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    The back of the card looks "washed out" or light blue instead of dark blue.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: FAQ */}
          <section>
             <h2 className="text-3xl font-heading font-bold mb-6">Common Parent Questions</h2>
             <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-bold">What is a "Booster Pack"?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  A booster pack is a sealed packet containing 10 random cards. It's like a lottery ticket! You're guaranteed at least one "Rare" card, but you never know exactly what you'll get. That surprise is half the fun.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-bold">Why are some cards worth thousands?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Scarcity and condition. Some cards are printed in very limited quantities. If a card is rare AND in perfect condition (no scratches, perfectly centered), collectors will pay a premium. But don't worry, 99.9% of cards are just for fun playing!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-bold">How do I keep the cards safe?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  We recommend "Penny Sleeves" (thin plastic covers) for shiny cards, and a Binder for storage. Keeping them loose in a pocket or drawer is the fastest way to ruin them!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

        </div>

        {/* CTA */}
        <section className="bg-primary py-20 text-center text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to apply your knowledge?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Our "Starter Bundles" are the perfect, safe way to start a collection without worrying about fakes or bad deals.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full text-lg h-14 px-10 font-bold text-primary hover:bg-white transition-colors">
              Shop Starter Bundles
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
