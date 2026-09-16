import { useParams, Navigate, Link } from 'react-router-dom';
import { services } from '../../data/services';
import { WhatsAppCTA } from '../../components/ui/WhatsAppCTA';
import { PhoneCTA } from '../../components/ui/PhoneCTA';
import FinalCTA from '../../sections/FinalCTA';
import { SEO } from '../../components/ui/SEO';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  
  const service = services.find(s => s.slug === serviceSlug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const Icon = service.icon;

  return (
    <>
      <SEO 
        title={service.title} 
        description={service.shortDescription}
        image={service.image}
      />
      {/* Service Hero */}
      <section className="relative pt-24 pb-32 bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
              loading="eager"
              width="1200"
              height="800"
            />
            <div className="absolute inset-0 bg-brand-navy mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-brand-gold hover:text-brand-ivory mb-8 transition-colors text-sm uppercase tracking-widest">
            <ArrowLeft size={16} className="mr-2" />
            Back to Services
          </Link>
          
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-brand-teal/20 flex items-center justify-center rounded-sm mb-8 text-brand-gold border border-brand-teal/30">
              <Icon size={32} strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-ivory mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-brand-gray-light/80 leading-relaxed mb-10">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <WhatsAppCTA message={`Hello, I would like to enquire about the ${service.title}.`} size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 prose prose-lg prose-headings:font-serif prose-headings:text-brand-navy prose-p:text-brand-slate prose-li:text-brand-slate max-w-none">
              
              <h2 className="text-3xl">Who this service is for</h2>
              <p>{service.whoIsItFor}</p>

              <h2 className="text-3xl mt-12">Why patients choose this service</h2>
              <p>{service.whyChoose}</p>

              <h2 className="text-3xl mt-12">What happens during consultation</h2>
              <p>{service.whatHappens}</p>

              <h2 className="text-3xl mt-12">The Consultation Process</h2>
              <div className="not-prose mt-8 space-y-6">
                {service.process.map((step) => (
                  <div key={step.step} className="flex bg-brand-ivory p-6 border border-brand-gray-light rounded-sm">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center font-serif text-xl border border-brand-gold/30">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-brand-navy mb-2">{step.title}</h4>
                      <p className="text-brand-slate text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-navy/5 border-l-4 border-brand-teal p-6 mt-12 not-prose">
                <h4 className="font-serif text-xl text-brand-navy mb-2">What to prepare</h4>
                <p className="text-brand-slate text-sm">{service.preparation}</p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                
                <div className="bg-brand-ivory p-8 border border-brand-gray-light rounded-sm">
                  <h3 className="font-serif text-2xl text-brand-navy mb-6">Arrange a Consultation</h3>
                  <p className="text-brand-slate text-sm mb-8">
                    Contact our team directly to discuss your requirements and schedule an appointment.
                  </p>
                  <div className="space-y-4">
                    <WhatsAppCTA className="w-full justify-center" message={`Hello, I would like to enquire about the ${service.title}.`} />
                    <PhoneCTA className="w-full justify-center" />
                  </div>
                </div>

                <div className="bg-white p-8 border border-brand-gray-light rounded-sm shadow-sm">
                  <h3 className="font-serif text-xl text-brand-navy mb-4">Important Disclaimer</h3>
                  <p className="text-brand-slate text-xs leading-relaxed">
                    This information is for educational purposes and does not replace an individual medical consultation. Every patient's clinical needs are unique and will be assessed individually.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
