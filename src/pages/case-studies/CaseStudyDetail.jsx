import { useParams, Navigate, Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import { WhatsAppCTA } from '../../components/ui/WhatsAppCTA';
import FinalCTA from '../../sections/FinalCTA';
import { SEO } from '../../components/ui/SEO';
import { ArrowLeft } from 'lucide-react';

export default function CaseStudyDetail() {
  const { studySlug } = useParams();
  
  const study = caseStudies.find(s => s.slug === studySlug);

  if (!study) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO 
        title={study.title} 
        description={study.excerpt}
        image={study.image}
      />
      <section className="pt-20 pb-16 bg-brand-ivory border-b border-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/case-studies" className="inline-flex items-center text-brand-gold hover:text-brand-navy mb-8 transition-colors text-sm uppercase tracking-widest">
            <ArrowLeft size={16} className="mr-2" />
            Back to Case Studies
          </Link>
          
          <span className="block text-brand-teal font-bold uppercase tracking-widest text-xs mb-4">
            {study.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-navy leading-tight mb-8">
            {study.title}
          </h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <img 
            src={study.image} 
            alt={study.title} 
            className="w-full aspect-[21/9] object-cover rounded-sm mb-16 shadow-lg"
            loading="eager"
            width="1200"
            height="514"
          />

          <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-navy prose-p:text-brand-slate max-w-none">
            
            <div className="bg-brand-ivory p-8 border-l-4 border-brand-teal mb-12 not-prose">
              <h3 className="text-xl font-serif text-brand-navy mb-4">The Challenge</h3>
              <p className="text-brand-slate text-lg">{study.challenge}</p>
            </div>

            <h2>Patient Context</h2>
            <p>{study.patientContext}</p>

            <h2>Clinical Approach</h2>
            <p>{study.clinicalApproach}</p>

            <h2>Consultation Process</h2>
            <p>{study.consultationProcess}</p>

            <h2>Key Considerations</h2>
            <p>{study.keyConsiderations}</p>

            <h2 className="text-3xl text-brand-teal mt-12 mb-6">Outcome & Follow-up</h2>
            <p className="text-xl font-medium text-brand-charcoal leading-relaxed">{study.outcome}</p>

            <div className="mt-16 pt-8 border-t border-brand-gray-light">
              <p className="text-xs text-brand-slate/70 italic">
                {study.disclaimer}
              </p>
            </div>
            
          </div>
          
          <div className="mt-16 text-center border-t border-brand-gray-light pt-16">
            <h3 className="font-serif text-2xl text-brand-navy mb-6">Discuss Your Healthcare Needs</h3>
             <WhatsAppCTA size="lg" message={`Hello, I read the case study on ${study.title} and would like to enquire about a consultation.`} />
          </div>

        </div>
      </section>

      <FinalCTA />
    </>
  );
}
