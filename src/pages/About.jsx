import { SectionHeading } from '../components/ui/SectionHeading';
import FinalCTA from '../sections/FinalCTA';
import { brandConfig } from '../data/config';
import { SEO } from '../components/ui/SEO';

export default function About() {
  return (
    <>
      <SEO 
        title={`About ${brandConfig.doctorName}`} 
        description={`Learn more about ${brandConfig.doctorName}, a consultant specialist with over ${brandConfig.experienceYears} years of clinical experience providing patient-centered care.`} 
      />
      {/* Page Header */}
      <section className="pt-20 pb-16 bg-brand-ivory border-b border-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow="Meet Your Doctor"
            title="Healthcare Should Feel Personal."
            description="Combining clinical excellence with a commitment to unhurried, patient-centered communication."
            centered={true}
            className="mb-0"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Image Col */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200" 
                  alt={brandConfig.doctorName}
                  className="w-full h-auto object-cover rounded-sm shadow-xl"
                  loading="lazy"
                  width="1200"
                  height="1600"
                />
                <div className="mt-8 p-6 bg-brand-ivory border border-brand-gray-light">
                  <h3 className="font-serif text-2xl text-brand-navy mb-2">{brandConfig.doctorName}</h3>
                  <p className="text-brand-slate text-sm mb-4">{brandConfig.specialty}</p>
                  <p className="text-brand-charcoal text-sm font-medium">{brandConfig.experienceYears}+ Years of Clinical Experience</p>
                </div>
              </div>
            </div>

            {/* Text Col */}
            <div className="lg:col-span-7 prose prose-lg prose-headings:font-serif prose-headings:text-brand-navy prose-p:text-brand-slate prose-a:text-brand-teal max-w-none">
              <h2 className="text-3xl font-serif text-brand-navy mb-6">A Different Standard of Care</h2>
              <p>
                I established this practice with a single goal: to provide the standard of medical care that I would want for my own family. In modern healthcare, the most scarce resource is often time. When doctors are rushed, nuances are missed, and patients leave feeling unheard.
              </p>
              <p>
                By limiting the number of patients seen each day, I ensure that every consultation is thorough, every question is answered, and every medical decision is made collaboratively.
              </p>
              
              <h3 className="text-2xl font-serif text-brand-navy mt-12 mb-4">Clinical Philosophy</h3>
              <p>
                My approach is rooted in evidence-based medicine, but applied with an understanding of your unique circumstances. A treatment plan is only effective if it fits into your actual life. 
              </p>
              <ul>
                <li><strong>Preventive Focus:</strong> Identifying risks before they become problems.</li>
                <li><strong>Clear Communication:</strong> Medical information should be empowering, not confusing.</li>
                <li><strong>Holistic View:</strong> Understanding how different symptoms and systems interact.</li>
              </ul>

              <h3 className="text-2xl font-serif text-brand-navy mt-12 mb-4">Experience & Background</h3>
              <p>
                With over {brandConfig.experienceYears} years of experience spanning acute medicine, chronic disease management, and complex diagnostics, I have treated a diverse range of conditions.
              </p>
              <p className="text-sm italic text-brand-slate/70 mt-8 border-l-2 border-brand-gray-light pl-4">
                * Note for portfolio demo: Fictional medical credentials, university degrees, and hospital affiliations have been intentionally omitted here to prevent misleading representations. A real implementation would list verified qualifications here.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeading 
            eyebrow="Journey"
            title={`${brandConfig.experienceYears}+ Years of Experience. One Patient at a Time.`}
            centered={true}
          />
          
          <div className="space-y-12 mt-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-brand-gold/20">
            
            {[
              { year: "Year 05+", title: "Specialist Consulting Practice", desc: "Focusing on personalized, unhurried care and complex diagnostic reviews." },
              { year: "Year 03", title: "Advanced Clinical Fellowships", desc: "Dedicated training in complex condition management and preventive strategies." },
              { year: "Year 01", title: "Core Clinical Training", desc: "Foundational experience across acute and general medical specialties." }
            ].map((item, index) => (
               <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-gold bg-brand-navy text-brand-gold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#0F1C2E] z-10">
                    <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-brand-navy-light rounded-sm border border-brand-ivory/5">
                    <span className="text-brand-gold text-sm font-bold uppercase tracking-wider mb-1 block">{item.year}</span>
                    <h4 className="font-serif text-xl text-brand-ivory mb-2">{item.title}</h4>
                    <p className="text-brand-gray-light/70 text-sm">{item.desc}</p>
                  </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
