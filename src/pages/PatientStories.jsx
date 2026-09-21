import { SectionHeading } from '../components/ui/SectionHeading';
import { testimonials } from '../data/testimonials';
import FinalCTA from '../sections/FinalCTA';
import { Quote } from 'lucide-react';

export default function PatientStories() {
  return (
    <>
      <section className="pt-20 pb-16 bg-brand-ivory border-b border-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="Experiences" title="Patient Stories"
            description="Read what our patients say about their consultation experience and the care they received."
            centered={true} className="mb-0" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-brand-ivory p-10 border border-brand-gray-light rounded-sm relative" >
                <Quote className="absolute top-8 right-8 text-brand-gold/20 w-16 h-16" />

                <p className="text-xl md:text-2xl font-serif text-brand-navy leading-relaxed mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-brand-gray-light/50 pt-6 mt-auto">
                  <p className="font-medium text-brand-charcoal">{testimonial.author}</p>
                  <p className="text-sm text-brand-teal mt-1">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-brand-navy text-center max-w-3xl mx-auto rounded-sm">
            <p className="text-brand-ivory/80 text-sm">
              <span className="text-brand-gold font-bold">Important Notice:</span> Patient experiences vary. The testimonials shown on this portfolio demonstration are placeholders designed to be replaced by verified client content in a live production environment.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
