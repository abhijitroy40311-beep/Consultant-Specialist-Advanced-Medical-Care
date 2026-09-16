import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { brandConfig } from '../data/config';
import { motion } from 'motion/react';

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200" 
                alt={brandConfig.doctorName}
                className="w-full h-full object-cover"
                loading="lazy"
                width="900"
                height="1200"
              />
              <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-ivory z-[-1]"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-brand-gold/30 z-[-1]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionHeading 
              eyebrow="Meet Your Doctor"
              title="A More Personal Approach to Modern Healthcare"
            />
            
            <div className="space-y-6 text-brand-slate text-lg mb-10">
              <p>
                Healthcare should not feel like an assembly line. My practice is built on the belief that the most important tool in medicine is time—time to listen, time to understand, and time to explain.
              </p>
              <p>
                With over {brandConfig.experienceYears} years of clinical experience, I focus on evidence-informed decision-making tailored precisely to your unique physiology and lifestyle.
              </p>
              <p>
                Whether you need a preventive health strategy, management for a chronic condition, or a second opinion on a complex diagnosis, the focus remains entirely on you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button to="/about" variant="primary">
                Meet {brandConfig.doctorName}
              </Button>
              <div className="flex items-center text-sm font-medium text-brand-navy uppercase tracking-widest">
                <span className="w-12 h-px bg-brand-gold mr-4"></span>
                {brandConfig.experienceYears}+ Years Experience
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
