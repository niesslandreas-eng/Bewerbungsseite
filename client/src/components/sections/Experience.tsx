import { motion } from "framer-motion";
import { cvData } from "@/data/cv";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Berufliche Erfahrung</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {cvData.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                    <div className="bg-white p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border/50 group-hover:bg-primary/5 transition-colors">
                      <div className="flex items-center gap-3 text-primary mb-2">
                        <Briefcase className="h-5 w-5" />
                        <span className="font-semibold text-sm tracking-wide uppercase">{job.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{job.role}</h3>
                      <p className="text-muted-foreground font-medium">{job.company}</p>
                    </div>
                    
                    <div className="p-6 md:p-8 bg-white/50">
                      <ul className="space-y-2">
                        {job.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
