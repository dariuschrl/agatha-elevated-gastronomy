import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-semibold tracking-widest text-sm">
                CONTACT
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rezervări și Informații
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Suntem aici pentru a vă ajuta să organizați evenimentul perfect
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
                Informații de Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Telefon</h4>
                    <a href="tel:0723204524" className="text-muted-foreground hover:text-primary transition-colors block">
                      0723 204 524
                    </a>
                    <a href="tel:0770554595" className="text-muted-foreground hover:text-primary transition-colors block">
                      0770 554 595
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Program</h4>
                    <p className="text-muted-foreground">Luni - Duminică</p>
                    <p className="text-muted-foreground">10:00 - 23:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Adresă</h4>
                    <p className="text-muted-foreground">
                      Brașov, România
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Facebook className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Social Media</h4>
                    <a 
                      href="https://www.facebook.com/RestaurantAgathA/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Facebook - Restaurant AgathA
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
              <h3 className="font-heading text-2xl font-bold mb-6">
                Faceți o Rezervare
              </h3>
              
              <p className="mb-8 text-primary-foreground/90 leading-relaxed">
                Pentru rezervări sau informații suplimentare despre evenimentul dumneavoastră, 
                vă rugăm să ne contactați telefonic. Echipa noastră vă va răspunde cu plăcere 
                și vă va ajuta să organizați evenimentul perfect.
              </p>

              <div className="space-y-4">
                <a href="tel:0723204524">
                  <Button 
                    size="lg"
                    className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Apelează 0723 204 524
                  </Button>
                </a>
                
                <a href="tel:0770554595">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Apelează 0770 554 595
                  </Button>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/80 text-center">
                  Programați-vă vizita în avans pentru a vă asigura disponibilitatea
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
