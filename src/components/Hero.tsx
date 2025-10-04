import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";
import { Phone, Calendar } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.7)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-semibold tracking-widest text-sm">RESTAURANT</span>
            <div className="h-px w-12 bg-accent" />
          </div>
          
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            AgathA
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-8 font-light">
            Locul unde Gustul îmbină Arta
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            O oază de confort și rafinament, perfectă pentru nunți, botezuri, 
            aniversări și toate momentele speciale din viața dumneavoastră.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection('contact')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Rezervări
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm"
              onClick={() => scrollToSection('events')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Evenimente
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-primary-foreground">
            <a href="tel:0723204524" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-5 w-5" />
              <span className="text-lg font-medium">0723 204 524</span>
            </a>
            <span className="hidden sm:block text-primary-foreground/50">•</span>
            <a href="tel:0770554595" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-5 w-5" />
              <span className="text-lg font-medium">0770 554 595</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          aria-label="Scroll down"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};
