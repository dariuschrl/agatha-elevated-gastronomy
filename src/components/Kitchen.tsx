import { Card } from "@/components/ui/card";
import kitchenImage from "@/assets/kitchen.jpg";
import foodImage from "@/assets/food-plated.jpg";
import { ChefHat, Globe, Star, Clock } from "lucide-react";

export const Kitchen = () => {
  return (
    <section id="kitchen" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-semibold tracking-widest text-sm">
                BUCĂTĂRIA
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Templul Bunului Gust
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bucătăria a fost construită și utilată special după dorințele unei echipe 
              de specialiști în ale gătitului.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                src={kitchenImage} 
                alt="Bucătăria Restaurant AgathA" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                src={foodImage} 
                alt="Preparate culinare" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Specialiști</h3>
              <p className="text-sm text-muted-foreground">Bucătari profesioniști</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Internațional</h3>
              <p className="text-sm text-muted-foreground">Bucătărie românească și internațională</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Calitate</h3>
              <p className="text-sm text-muted-foreground">Ingrediente proaspete și selectate</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Meniu</h3>
              <p className="text-sm text-muted-foreground">Meniu în limba engleză cu timpii de preparare</p>
            </Card>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/10 to-accent/5 border-2">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 italic">
                "Vă invităm să sărbătorim împreună bucuria vieții și răsfățul simțurilor 
                alături de cele mai alese mâncăruri atât din bucătăria tradițională 
                cât și cea internațională!"
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary font-semibold">Restaurant AgathA</span>
                <div className="h-px w-8 bg-primary" />
              </div>
            </blockquote>
          </Card>
        </div>
      </div>
    </section>
  );
};
