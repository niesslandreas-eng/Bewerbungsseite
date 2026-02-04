import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ChevronRight } from "lucide-react";
import { cvData } from "@/data/cv";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-50 rounded-bl-[100px] -z-10 hidden md:block" />
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
              Verfügbar ab {cvData.personal.availability}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
              {cvData.personal.name}
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              {cvData.personal.title}
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Erfahrener Projektkoordinator mit Fokus auf Logistik, Prozessoptimierung und Schnittstellenmanagement. Wirtschaftsingenieur mit internationaler Erfahrung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 text-base h-12" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Kontakt aufnehmen <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 text-base h-12" asChild>
                <a href="/Andreas_Niessl_CV.pdf" download>
                  Lebenslauf herunterladen <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
              <img 
                src="/Bewerbungsseite/profile-hero.jpg"
                alt="Andreas Nießl" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
