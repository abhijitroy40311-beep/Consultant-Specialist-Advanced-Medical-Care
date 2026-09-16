import { SectionHeading } from '../components/ui/SectionHeading';
import FinalCTA from '../sections/FinalCTA';
import { brandConfig } from '../data/config';
import { SEO } from '../components/ui/SEO';

export default function Practice() {
  const reasons = [
    {
      title: "Personalized Attention",
      description: "Every consultation focuses on the individual rather than a one-size-fits-all approach. We limit patient volume to ensure time is never a constraint."
    },
    {
      title: "Clear Communication",
      description: "Medical information explained in a way patients can understand, empowering you to make informed decisions about your health."
    },
    {
      title: "Modern Experience",
      description: "A smooth digital experience from your first WhatsApp enquiry to receiving your consultation summary."
    },
    {
      title: "Continuity of Care",
      description: "We aim to build a long-term clinical relationship rather than providing just a single, isolated interaction."
    }
  ];

  return (
    <>
      <SEO 
        title="The Practice" 
        description={`A modern medical environment located in ${brandConfig.location}. Designed for comfort, confidentiality, and clinical excellence.`} 
      />
      <section className="pt-20 pb-16 bg-brand-ivory border-b border-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow="The Practice"
            title="A Modern Medical Environment"
            description="Designed for comfort, confidentiality, and clinical excellence."
            centered={true}
            className="mb-0"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-serif text-brand-navy mb-6">Why Choose Our Practice</h2>
              <div className="space-y-8">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-teal"></div>
                    </div>
                    <div className="ml-6">
                      <h3 className="font-serif text-xl text-brand-navy mb-2">{reason.title}</h3>
                      <p className="text-brand-slate leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Clinic Environment" 
                className="w-full h-auto object-cover rounded-sm shadow-lg"
                loading="lazy"
                width="1200"
                height="800"
              />
            </div>
          </div>

        </div>
      </section>
      
      {/* International Focus */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1555529733-0e67056058e1?auto=format&fit=crop&q=80&w=1200" 
                  alt="London Skyline" 
                  className="w-full h-[400px] object-cover rounded-sm opacity-80"
                  loading="lazy"
                  width="1200"
                  height="800"
                />
              </div>
              <div>
                 <SectionHeading 
                  eyebrow="Global Reach"
                  title="International Patient Support"
                  description={`Located in the heart of ${brandConfig.location.split(',')[0]}, our practice is designed to support patients traveling from outside the region.`}
                />
                <p className="text-brand-gray-light/80 mb-6">
                  We understand the complexities of seeking medical care abroad. Our digital-first enquiry system allows for comprehensive pre-travel planning.
                </p>
                <ul className="space-y-3 text-brand-ivory mb-8">
                  <li>• Secure sharing of previous medical records</li>
                  <li>• Preliminary video consultations</li>
                  <li>• Consolidated scheduling of scans and visits</li>
                </ul>
              </div>
           </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
