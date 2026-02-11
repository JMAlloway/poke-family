import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, ShoppingBag, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProductProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  isNew?: boolean;
  onAddToCart?: () => Promise<void>;
}

export function ProductCard({ title, price, image, rating, isNew, onAddToCart }: ProductProps) {
  const [adding, setAdding] = useState(false);

  const handleAdd = async () => {
    if (!onAddToCart) return;
    setAdding(true);
    try {
      await onAddToCart();
    } finally {
      setAdding(false);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {isNew && (
        <Badge className="absolute top-4 left-4 z-10 bg-accent text-white border-0 shadow-sm">
          New Arrival
        </Badge>
      )}

      <div className="aspect-square overflow-hidden bg-secondary/30 p-8 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-current" : "opacity-30"}`} />
            ))}
            <span className="text-xs text-muted-foreground ml-1">(42)</span>
          </div>
          <h3 className="font-heading font-bold text-lg leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold font-heading text-foreground">
            ${price.toFixed(2)}
          </span>
          <Button
            size="sm"
            className="rounded-full px-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            onClick={handleAdd}
            disabled={adding}
          >
            {adding ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>Add <ShoppingBag className="w-4 h-4 ml-1.5" /></>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
