import { Link } from "wouter";
import { ArrowRight, BookOpen, Search, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import iconRarity from "@/assets/images/icon-rarity.png";
import iconFake from "@/assets/images/icon-fake.png";
import iconRules from "@/assets/images/icon-rules.png";

export function ParentGuidePreview() {
  const guides = [
    {
      title: "Is My Kid's Card Fake?",
      desc: "3 simple signs to spot a fake card in seconds.",
      icon: iconFake,
      color: "bg-red-50 hover:bg-red-100 border-red-100",
      textColor: "text-red-600"
    },
    {
      title: "What Do The Symbols Mean?",
      desc: "Circles, diamonds, and stars explained simply.",
      icon: iconRarity,
      color: "bg-blue-50 hover:bg-blue-100 border-blue-100",
      textColor: "text-blue-600"
    },
    {
      title: "How Do You Actually Play?",
      desc: "The game rules stripped down to the basics.",
      icon: iconRules,
      color: "bg-green-50 hover:bg-green-100 border-green-100",
      textColor: "text-green-600"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground font-bold text-sm tracking-wide">
            FOR PARENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Confused by Pokémon? <br />
            <span className="text-primary">We've Got You Covered.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You don't need to be a Pokémon Master to be a hero to your kids. 
            We break down the complex world of TCG into simple, bite-sized guides.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, idx) => (
            <div 
              key={idx} 
              className={`group p-8 rounded-3xl border-2 transition-all duration-300 ${guide.color} cursor-pointer`}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <img src={guide.icon} alt={guide.title} className="w-20 h-20 object-contain drop-shadow-md" />
              </div>
              <h3 className={`font-heading font-bold text-xl mb-3 ${guide.textColor}`}>
                {guide.title}
              </h3>
              <p className="text-muted-foreground font-medium leading-relaxed mb-6">
                {guide.desc}
              </p>
              <div className={`flex items-center font-bold text-sm ${guide.textColor}`}>
                Read Guide <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/guide">
            <Button size="lg" variant="outline" className="rounded-full border-2 text-lg h-14 px-8 font-bold text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              View The Parent's Handbook
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3" />
    </section>
  );
}
