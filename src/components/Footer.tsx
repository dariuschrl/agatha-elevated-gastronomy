import { Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                AgathA
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Locul unde Gustul îmbină Arta. O oază de confort și rafinament 
                pentru momentele speciale din viața dumneavoastră.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Telefon: 0723 204 524</p>
                <p>Telefon: 0770 554 595</p>
                <p>Brașov, România</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Urmărește-ne</h4>
              <a 
                href="https://www.facebook.com/RestaurantAgathA/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span>Restaurant AgathA</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              Copyright © SC AgathA For You SRL {new Date().getFullYear()}. 
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
