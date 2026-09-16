import { SectionHeading } from '../components/ui/SectionHeading';
import ServicesGrid from '../sections/ServicesGrid';
import FinalCTA from '../sections/FinalCTA';
import { SEO } from '../components/ui/SEO';

export default function Services() {
  return (
    <>
      <SEO 
        title="Medical Services" 
        description="Comprehensive, patient-centered consultations tailored to your specific health requirements. Explore our clinical services."
      />
      <section className="pt-20 pb-16 bg-brand-ivory border-b border-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow="Our Services"
            title="Comprehensive Medical Care"
            description="Detailed, unhurried consultations focusing on prevention, accurate diagnosis, and personalized management."
            centered={true}
            className="mb-0"
          />
        </div>
      </section>

      {/* Reusing the ServicesGrid without a limit to show all 8 services */}
      <ServicesGrid />

      <FinalCTA />
    </>
  );
}
