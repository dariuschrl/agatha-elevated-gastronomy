import { Card } from "@/components/ui/card";
import { Sparkles, Users, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-semibold tracking-widest text-sm">DESPRE NOI</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Restaurant AgathA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Restaurantul AgathA a fost conceput ca o oază de confort și rafinament, 
              fiind un local intim și elegant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                Atmosferă Îmbietoare
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Un decor pregătit special pentru fiecare eveniment, 
                cu o amprentă personalizată pentru dumneavoastră.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                Evenimente Perfecte
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Condiții ideale pentru organizarea celor mai importante 
                evenimente din viața dumneavoastră.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                Ospitalitate
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Echipa noastră este dedicată să vă ofere o experiență 
                memorabilă la fiecare vizită.
              </p>
            </Card>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 border-2">
            <p className="text-lg text-foreground leading-relaxed text-center">
              Cu o atmosferă îmbietoare, un decor pregătit special pentru fiecare eveniment, 
              căutăm să lăsăm o amprentă personalizată pentru dumneavoastră lăsându-vă să vă 
              bucurați de fiecare moment petrecut la noi! <br /><br />
              <span className="font-heading text-xl text-primary font-semibold">
                Eşti oaspetele nostru preferat…
              </span> calcă în restaurantul nostru şi vei deveni{" "}
              <span className="font-heading text-xl text-primary font-semibold">
                oaspete de onoare
              </span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
