import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { WhatsAppCTA } from '../components/ui/WhatsAppCTA';
import { PhoneCTA } from '../components/ui/PhoneCTA';
import { brandConfig } from '../data/config';
import { faqs } from '../data/faqs';
import { ChevronDown, ChevronUp, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { SEO } from '../components/ui/SEO';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0); // First FAQ open by default
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you', { state: { formSubmitted: true } });
  };

  return (
    <>
      <section className="pt-24 pb-16 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block mb-4 text-xs font-bold uppercase tracking-widest text-brand-gold">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-ivory mb-6 leading-tight">
              Let's Start With a Conversation
            </h1>
            <p className="text-xl text-brand-gray-light/80 leading-relaxed mb-10 max-w-2xl">
              Our team is ready to answer your questions and arrange a consultation that fits your schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-12">

              <div className="bg-white p-8 border border-brand-gray-light rounded-sm shadow-sm">
                <h3 className="font-serif text-2xl text-brand-navy mb-8">Direct Contact</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-brand-teal mt-1 mr-4" />
                    <div>
                      <p className="text-sm uppercase tracking-widest text-brand-slate font-medium mb-1">Phone</p>
                      <a href={`tel:${brandConfig.phone.replace(/[^+\d]/g, '')}`} className="text-xl text-brand-navy hover:text-brand-teal transition-colors">
                        {brandConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-brand-teal mt-1 mr-4" />
                    <div>
                      <p className="text-sm uppercase tracking-widest text-brand-slate font-medium mb-1">Email</p>
                      <a href={`mailto:${brandConfig.email}`} className="text-lg text-brand-navy hover:text-brand-teal transition-colors">
                        {brandConfig.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-brand-gray-light space-y-4">
                  <WhatsAppCTA className="w-full justify-center" size="lg" />
                  <PhoneCTA className="w-full justify-center" size="lg" />
                </div>
              </div>

              <div className="bg-white p-8 border border-brand-gray-light rounded-sm shadow-sm">
                <h3 className="font-serif text-2xl text-brand-navy mb-8">Location & Hours</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-brand-teal mt-1 mr-4" />
                    <div>
                      <p className="text-sm uppercase tracking-widest text-brand-slate font-medium mb-1">Clinic Address</p>
                      <p className="text-brand-navy leading-relaxed max-w-xs">
                        {brandConfig.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-brand-teal mt-1 mr-4" />
                    <div>
                      <p className="text-sm uppercase tracking-widest text-brand-slate font-medium mb-1">Consultation Hours</p>
                      <p className="text-brand-navy">
                        {brandConfig.workingHours}
                      </p>
                      <p className="text-sm text-brand-slate mt-2 italic">
                        * Consultations by appointment only.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Front-end Form Demo & FAQs */}
            <div className="lg:col-span-7">

              <div className="bg-white p-8 md:p-12 border border-brand-gray-light rounded-sm shadow-sm mb-16">
                <h3 className="font-serif text-3xl text-brand-navy mb-2">Send an Enquiry</h3>
                <p className="text-brand-slate mb-8">
                  For the fastest response, we recommend using WhatsApp. Alternatively, fill out the form below.
                </p>

                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-2">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" id="name" required className="w-full p-3 border border-brand-gray-light rounded-sm focus:ring-brand-teal focus:border-brand-teal bg-brand-ivory/50" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal mb-2">Phone Number <span className="text-red-500">*</span></label>
                      <input type="tel" id="phone" required pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" maxLength="10" className="w-full p-3 border border-brand-gray-light rounded-sm focus:ring-brand-teal focus:border-brand-teal bg-brand-ivory/50" placeholder="8777202487" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-brand-charcoal mb-2">Area of Interest</label>
                    <select id="service" className="w-full p-3 border border-brand-gray-light rounded-sm focus:ring-brand-teal focus:border-brand-teal bg-brand-ivory/50 text-brand-charcoal">
                      <option>Preventive Health Assessment</option>
                      <option>Specialist Consultation</option>
                      <option>Diagnostic Review</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal mb-2">Brief Message</label>
                    <textarea id="message" rows="4" className="w-full p-3 border border-brand-gray-light rounded-sm focus:ring-brand-teal focus:border-brand-teal bg-brand-ivory/50" placeholder="How can we help you?"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-navy text-white px-8 py-4 font-medium hover:bg-brand-navy-light transition-colors rounded-sm">
                    Submit Enquiry
                  </button>
                  <p className="text-xs text-brand-slate text-center mt-4">
                    Please use the WhatsApp or Call buttons for real contact, this form Active Soon !.
                  </p>
                </form>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="font-serif text-3xl text-brand-navy mb-8">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-brand-gray-light bg-white rounded-sm overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-ivory transition-colors"
                        onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      >
                        <span className="font-serif text-xl text-brand-navy pr-4">{faq.question}</span>
                        <span className="text-brand-teal flex-shrink-0">
                          {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </span>
                      </button>

                      {openFaq === index && (
                        <div className="p-6 pt-0 bg-brand-ivory/50 border-t border-brand-gray-light">
                          <p className="text-brand-slate mt-4 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
