import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Ausbildung</h2>
            </div>

            <div className="space-y-8 relative pl-8 border-l-2 border-primary/20">
              {cvData.education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[39px] top-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                  <div className="mb-2 text-sm text-primary font-semibold uppercase tracking-wider">{edu.period}</div>
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{edu.institution}</p>
                  <ul className="space-y-2 text-muted-foreground">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
             <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
              </div>
              <h2 className="text-3xl font-bold">Fähigkeiten & Kompetenzen</h2>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-border">
              <div className="flex flex-wrap gap-3">
                {cvData.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-white hover:bg-white border-border shadow-sm text-slate-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                   <h4 className="font-semibold mb-3">Sprachen</h4>
                   <ul className="space-y-1 text-muted-foreground">
                     <li>Deutsch (Muttersprache)</li>
                     <li>Englisch (Verhandlungssicher)</li>
                   </ul>
                </div>
                <div>
                   <h4 className="font-semibold mb-3">Auslandserfahrung</h4>
                   <p className="text-muted-foreground">7 Monate USA (Michigan)<br/><span className="text-sm opacity-80">Betriebserweiterung & Outsourcing-Analyse</span></p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
