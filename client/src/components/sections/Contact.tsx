import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full border-[60px] border-white/20"></div>
         <div className="absolute bottom-[10%] -left-[5%] w-[300px] h-[300px] rounded-full bg-white/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Kontaktieren Sie mich</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-md leading-relaxed">
              Ich stehe ab Februar 2026 für neue Herausforderungen zur Verfügung. Lassen Sie uns darüber sprechen, wie ich Ihr Unternehmen unterstützen kann.
            </p>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="rounded-full px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href={`mailto:${cvData.personal.email}`}>
                E-Mail schreiben
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/20"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60 uppercase tracking-wider font-semibold">Telefon</div>
                  <div className="text-xl font-medium">{cvData.personal.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60 uppercase tracking-wider font-semibold">E-Mail</div>
                  <div className="text-xl font-medium">{cvData.personal.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/60 uppercase tracking-wider font-semibold">Anschrift</div>
                  <div className="text-xl font-medium">{cvData.personal.address}</div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <a 
                  href="/Andreas_Niessl_CV.pdf" 
                  download 
                  className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium group"
                >
                  <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform" /> 
                  Lebenslauf als PDF herunterladen
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
