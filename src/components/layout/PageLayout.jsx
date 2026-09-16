import Header from './Header';
import Footer from './Footer';
import { PhoneCTA } from '../ui/PhoneCTA';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';
import { SEO } from '../ui/SEO';
import { brandConfig } from '../../data/config';

export default function PageLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": brandConfig.doctorName,
    "url": "https://your-domain.com",
    "logo": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200",
    "image": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200",
    "description": "Personalized medical consultations designed around your health, your concerns, and the right next step. Expert Care. Thoughtful Medicine. Better Decisions.",
    "telephone": brandConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 Medical Harley Street",
      "addressLocality": "London",
      "postalCode": "W1G 9XX",
      "addressCountry": "UK"
    },
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory">
      <SEO />
      {/* Inject JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <Header />
      
      <main className="flex-grow pt-24 lg:pt-28">
        {children}
      </main>

      <Footer />

      {/* Mobile Sticky Contact Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-ivory border-t border-brand-gray-light shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-40 lg:hidden flex gap-3">
        <PhoneCTA className="flex-1" variant="outline" size="sm" />
        <WhatsAppCTA className="flex-1" variant="primary" size="sm" />
      </div>
      {/* Spacer to prevent content from hiding behind mobile sticky bar */}
      <div className="h-20 lg:hidden block" aria-hidden="true" />
    </div>
  );
}
