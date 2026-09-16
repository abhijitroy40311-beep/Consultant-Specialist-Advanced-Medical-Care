import { brandConfig } from '../data/config';
import { Phone } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-brand-navy overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600" 
          alt="Clinic environment" 
          className="w-full h-full object-cover"
          loading="lazy"
          width="1600"
          height="1000"
        />
        <div className="absolute inset-0 bg-brand-navy/90 mix-blend-multiply"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-ivory mb-6 leading-tight">
          Good Healthcare Starts With the Right Conversation.
        </h2>
        
        <p className="text-xl text-brand-gray-light/80 mb-12 max-w-2xl mx-auto">
          Speak directly with the practice about your healthcare needs, arrange a consultation, or ask a question.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`https://wa.me/${brandConfig.whatsapp.replace(/[^+\d]/g, '')}?text=Hello,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#131d2e] text-white font-medium px-8 py-4 text-base rounded-sm min-w-[260px]"
          >
            <WhatsAppIcon className="w-5 h-5 mr-3" />
            WhatsApp Consultation
          </a>
          <a
            href={`tel:${brandConfig.phone.replace(/[^+\d]/g, '')}`}
            className="inline-flex items-center justify-center bg-[#131d2e] text-white font-medium px-8 py-4 text-base rounded-sm min-w-[260px]"
          >
            <Phone className="w-5 h-5 mr-3" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
