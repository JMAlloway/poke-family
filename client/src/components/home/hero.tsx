import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/hero-family.png";
import avatar1 from "../../assets/images/avatar-1.png";
import avatar2 from "../../assets/images/avatar-2.png";
import avatar3 from "../../assets/images/avatar-3.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground font-bold text-sm mb-4">
              #1 Family Card Shop
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-[1.1] text-foreground">
              Catch the Joy of <span className="text-accent">Collecting</span> Together
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Curated Pokemon card bundles designed for kids and families. 100% Authentic, safe, and ready for game night.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="rounded-full text-base px-8 h-12 shadow-lg shadow-primary/20 hover:scale-105 transition-transform bg-primary text-primary-foreground font-bold hover:bg-primary/90">
              Shop Bundles <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full text-base px-8 h-12 bg-white/50 backdrop-blur-sm border-2 hover:bg-white hover:text-accent hover:border-accent font-bold">
              How it Works
            </Button>
          </motion.div>

          <div className="flex items-center gap-4 pt-4 text-sm text-muted-foreground">
            <div className="flex -space-x-3">
              <img src={avatar1} alt="User" className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-black/5 object-cover" />
              <img src={avatar2} alt="User" className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-black/5 object-cover" />
              <img src={avatar3} alt="User" className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-black/5 object-cover" />
            </div>
            <div className="flex flex-col">
               <div className="flex text-yellow-400">★★★★★</div>
               <span className="font-medium text-foreground">Trusted by 10,000+ Families</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform rotate-12 scale-90" />
          <img 
            src={heroImage} 
            alt="Happy family playing cards" 
            className="relative z-10 rounded-3xl shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 w-full"
          />
        </motion.div>

      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-0" />
    </section>
  );
}
