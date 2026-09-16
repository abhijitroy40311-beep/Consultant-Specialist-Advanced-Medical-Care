import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { SectionHeading } from '../components/ui/SectionHeading';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function ServicesGrid({ limit }) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          eyebrow="Clinical Focus"
          title="Specialist Medical Services"
          description="Comprehensive, patient-centered consultations tailored to your specific health requirements."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={`/services/${service.slug}`}
                  className="group block h-full bg-white p-8 border border-brand-gray-light hover:border-brand-teal/30 transition-all duration-300 hover:shadow-lg rounded-sm"
                >
                  <div className="w-12 h-12 bg-brand-ivory text-brand-teal flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-serif text-xl text-brand-navy mb-3 leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="text-brand-slate text-sm mb-8 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-semibold text-brand-gold group-hover:text-brand-teal transition-colors duration-300 uppercase tracking-widest">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {limit && (
          <div className="mt-16 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center text-brand-navy font-serif text-xl border-b border-brand-navy pb-1 hover:text-brand-teal hover:border-brand-teal transition-colors"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
