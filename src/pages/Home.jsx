import Hero from '../sections/Hero';
import TrustStrip from '../sections/TrustStrip';
import AboutPreview from '../sections/AboutPreview';
import ServicesGrid from '../sections/ServicesGrid';
import PatientJourney from '../sections/PatientJourney';
import FinalCTA from '../sections/FinalCTA';
import { brandConfig } from '../data/config';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { ArrowRight } from 'lucide-react';

function InternationalSection() {
  return (
    <section className="py-24 bg-white border-y border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy mb-6">
              Healthcare Without Borders
            </h2>
            <p className="text-lg text-brand-slate mb-8 leading-relaxed">
              Our clinic in {brandConfig.location} regularly welcomes patients from around the globe. We provide a frictionless experience from the first digital enquiry to your in-person consultation and post-treatment follow-up.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-brand-charcoal">Initial digital review of your medical history</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-brand-charcoal">Consolidated scheduling for international arrivals</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-brand-charcoal">Remote follow-up communication</span>
              </li>
            </ul>
            <Link to="/services/international-patient-care" className="inline-flex items-center text-brand-navy font-serif text-lg border-b border-brand-navy pb-1 hover:text-brand-teal hover:border-brand-teal transition-colors">
              Explore International Services <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="relative h-[500px]">
             <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200" 
                alt="International Healthcare"
                className="w-full h-full object-cover rounded-sm"
                loading="lazy"
                width="1200"
                height="800"
              />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ServicesGrid limit={4} />
      <InternationalSection />
      <PatientJourney />
      <FinalCTA />
    </>
  );
}
