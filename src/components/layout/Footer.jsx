import { Link } from 'react-router-dom';
import { brandConfig } from '../../data/config';
import { footerLinks } from '../../data/navigation';
import { Phone } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-brand-ivory pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-wide block">{brandConfig.doctorName}</span>
              <span className="text-xs uppercase tracking-widest text-brand-gold mt-1 block">
                {brandConfig.specialty}
              </span>
            </Link>
            <p className="text-sm text-brand-gray-light/70 leading-relaxed max-w-sm mb-8">
              Personalized medical consultations designed around your health, your concerns, and the right next step. Expert Care. Thoughtful Medicine.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <a 
                  href={`https://wa.me/${brandConfig.whatsapp.replace(/[^+\d]/g, '')}?text=Hello,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-brand-teal text-white font-medium px-4 py-2.5 text-sm rounded-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2" />
                  WhatsApp Consultation
                </a>
                <a 
                  href={`tel:${brandConfig.phone.replace(/[^+\d]/g, '')}`}
                  className="inline-flex items-center justify-center text-white font-medium text-sm"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Links Cols */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-serif text-lg mb-6 text-brand-gold">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-brand-gray-light/80 hover:text-brand-ivory transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg mb-6 text-brand-gold">Practice</h4>
            <ul className="space-y-4">
              {footerLinks.clinic.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-brand-gray-light/80 hover:text-brand-ivory transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg mb-6 text-brand-gold">Contact & Location</h4>
            <address className="not-italic text-sm text-brand-gray-light/80 space-y-4">
              <p>{brandConfig.address}</p>
              <p>{brandConfig.workingHours}</p>
              <p className="pt-2 border-t border-brand-gray-light/20 inline-block">
                T: {brandConfig.phoneDisplay}
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-brand-gray-light/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-brand-gray-light/50">
            &copy; {year} {brandConfig.doctorName}. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-xs text-brand-gray-light/50">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} to={link.href} className="hover:text-brand-ivory transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-8 text-center text-[10px] text-brand-gray-light/30 uppercase tracking-widest">
          Registered Medical Practitioner • Evidence-Based Care • Confidential Consultations
        </div>
      </div>
    </footer>
  );
}
