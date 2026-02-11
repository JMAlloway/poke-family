import { ShieldCheck, Heart, Zap, Truck } from "lucide-react";

export function TrustSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Authentic",
      description: "Every card is verified real. No fakes, ever."
    },
    {
      icon: Heart,
      title: "Family Friendly",
      description: "Curated content safe for kids of all ages."
    },
    {
      icon: Zap,
      title: "Perfect Condition",
      description: "Cards are mint or near-mint quality."
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Orders ship within 24 hours from USA."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold font-heading text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
