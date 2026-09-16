import { WhatsAppCTA } from '../components/ui/WhatsAppCTA';
import { PhoneCTA } from '../components/ui/PhoneCTA';
import { brandConfig } from '../data/config';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-block mb-6 text-xs font-bold uppercase tracking-widest text-brand-teal border border-brand-teal/20 px-3 py-1 rounded-full bg-brand-teal/5">
              Private Medical Consultation
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-navy leading-[1.1] mb-6">
              Expert Care.<br/>
              <span className="italic text-brand-gold">Thoughtful Medicine.</span><br/>
              Better Decisions.
            </h1>
            
            <p className="text-lg md:text-xl text-brand-slate leading-relaxed mb-10 max-w-lg">
              Personalized medical consultations designed around your health, your concerns, and the right next step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <WhatsAppCTA size="lg" />
              <PhoneCTA variant="outline" size="lg" />
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-brand-slate border-t border-brand-gray-light pt-8">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal mr-3"></div>
                Personalized Care
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal mr-3"></div>
                Confidential Consultations
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal mr-3"></div>
                International Patients
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal mr-3"></div>
                Patient-Centered Approach
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[700px]"
          >
            <div className="absolute inset-0 bg-brand-gold/10 -translate-x-4 translate-y-4 rounded-sm"></div>
            <div className="relative w-full h-full min-h-[500px] flex items-center justify-center bg-[#ebeae5] text-[#525a62] rounded-sm shadow-xl z-10 border-2 border-dashed border-[#525a62]/30">
              <span className="font-serif text-2xl font-medium">Your Image</span>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-5 shadow-xl rounded-sm border border-brand-gray-light">
              <p className="text-3xl font-serif text-brand-navy mb-1">{brandConfig.experienceYears}+</p>
              <p className="text-xs uppercase tracking-widest text-brand-slate">Years Experience</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
