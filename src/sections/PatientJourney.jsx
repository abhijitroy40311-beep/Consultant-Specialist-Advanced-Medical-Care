import { SectionHeading } from '../components/ui/SectionHeading';
import { WhatsAppCTA } from '../components/ui/WhatsAppCTA';

export default function PatientJourney() {
  const steps = [
    {
      number: "01",
      title: "Tell Us What You Need",
      description: "Send a brief message outlining your current health concerns or consultation requirements."
    },
    {
      number: "02",
      title: "Connect With the Practice",
      description: "Our team will reach out to ensure we are the right clinical fit and to gather necessary preliminary information."
    },
    {
      number: "03",
      title: "Discuss Your Health",
      description: "An unhurried, comprehensive consultation focused entirely on your medical history and current symptoms."
    },
    {
      number: "04",
      title: "Plan the Next Step",
      description: "Leave with a clear, actionable medical strategy, arranged diagnostics, or a definitive treatment plan."
    }
  ];

  return (
    <section className="py-24 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <span className="inline-block mb-4 text-xs font-bold uppercase tracking-widest text-brand-gold">
                The Patient Journey
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-ivory mb-6 leading-tight">
                A Clearer Path to Better Health.
              </h2>
              <p className="text-brand-gray-light/70 text-lg mb-10">
                Experience a frictionless process from your first enquiry to your definitive treatment plan.
              </p>
              <WhatsAppCTA variant="primary" size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold-light" />
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[1.1rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-gold/30 before:to-transparent">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                  {/* Icon/Number */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-gold/50 bg-brand-navy text-brand-gold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#0F1C2E] z-10 font-serif text-sm">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 bg-brand-navy-light rounded-sm border border-brand-ivory/5 hover:border-brand-gold/30 transition-colors">
                    <h3 className="font-serif text-xl text-brand-ivory mb-3">{step.title}</h3>
                    <p className="text-brand-gray-light/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
