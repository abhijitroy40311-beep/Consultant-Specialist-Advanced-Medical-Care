import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { caseStudies } from '../data/caseStudies';
import FinalCTA from '../sections/FinalCTA';
import { SEO } from '../components/ui/SEO';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function CaseStudies() {
  return (
    <>
      <SEO 
        title="Medical Case Studies" 
        description="Explore demonstrative examples of our clinical approach to diagnosis, management, and preventive care."
      />
      <section className="pt-20 pb-16 bg-brand-ivory border-b border-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow="Clinical Excellence"
            title="Medical Case Studies"
            description="Demonstrative examples of our clinical approach to diagnosis, management, and preventive care."
            centered={true}
            className="mb-0" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={`/case-studies/${study.slug}`}
                  className="group block h-full bg-white border border-brand-gray-light rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-navy rounded-sm">
                      {study.category}
                    </div>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="font-serif text-2xl text-brand-navy mb-4 leading-tight group-hover:text-brand-teal transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-brand-slate text-sm leading-relaxed mb-8 flex-grow">
                      {study.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-brand-gold uppercase tracking-widest">
                      Read Case Study
                      <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-brand-ivory border border-brand-gray-light rounded-sm text-center max-w-3xl mx-auto">
            <p className="text-brand-slate text-sm italic">
              <strong>Important Note:</strong> These case studies are demonstrative portfolio examples. Patient details have been completely anonymized or fabricated for structural demonstration purposes. They are intended to show clinical methodology, not to guarantee specific medical outcomes.
            </p>
          </div>

        </div>
      </section>

      <FinalCTA />
    </>
  );
}
