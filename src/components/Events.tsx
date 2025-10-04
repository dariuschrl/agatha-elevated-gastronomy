import { Card } from "@/components/ui/card";
import eventsImage from "@/assets/events-wedding.jpg";
import { Heart, Baby, Cake, Music, Briefcase, PartyPopper } from "lucide-react";

export const Events = () => {
  const events = [
    {
      icon: Heart,
      title: "Nunți",
      description: "Ziua perfectă pentru începutul călătoriei voastre împreună",
    },
    {
      icon: Baby,
      title: "Botezuri",
      description: "Celebrează cel mai mic membru al familiei într-un cadru elegant",
    },
    {
      icon: Cake,
      title: "Aniversări",
      description: "Momente speciale pentru sărbătorirea vieții",
    },
    {
      icon: Music,
      title: "Mese Festive",
      description: "Petreceri memorabile cu prietenii și familia",
    },
    {
      icon: PartyPopper,
      title: "Petreceri Copii",
      description: "Distracție și voie bună pentru cei mici",
    },
    {
      icon: Briefcase,
      title: "Evenimente Corporate",
      description: "Conferințe, seminarii și întâlniri de afaceri",
    },
  ];

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-semibold tracking-widest text-sm">
                ORGANIZĂRI EVENIMENTE
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Evenimente Memorabile
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Restaurantul AgathA este gazda ospitalieră pentru toate momentele 
              importante din viața dumneavoastră.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                src={eventsImage} 
                alt="Evenimente Restaurant AgathA" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                <div className="text-primary-foreground">
                  <h3 className="font-heading text-3xl font-bold mb-2">
                    Locul Perfect
                  </h3>
                  <p className="text-lg">Pentru momentele tale speciale</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {events.map((event) => (
                <Card 
                  key={event.title}
                  className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-2"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <event.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-10 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">
              Servicii Complete
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-semibold text-lg mb-2">Amenajare Sală</div>
                <p className="text-primary-foreground/90">Conform cerințelor dumneavoastră</p>
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">Muzică</div>
                <p className="text-primary-foreground/90">Asigurăm atmosfera perfectă</p>
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">Meniu Personalizat</div>
                <p className="text-primary-foreground/90">Bufet suedez sau meniu prestabilit</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
