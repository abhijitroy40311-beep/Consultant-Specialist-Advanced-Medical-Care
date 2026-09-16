import { Link, useLocation, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SEO } from '../components/ui/SEO';

export default function ThankYou() {
    const location = useLocation();

    if (!location.state?.formSubmitted) {
        return <Navigate to="/contact" replace />;
    }

    return (
        <>
            <SEO
                title="Thank You"
                description="Thank you for contacting us. We will get back to you shortly."
            />
            <section className="min-h-[70vh] flex items-center justify-center py-24 bg-brand-ivory px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl w-full bg-white p-12 text-center rounded-sm shadow-xl border border-brand-gray-light">
                    <div className="mx-auto w-20 h-20 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mb-8">
                        <CheckCircle2 size={40} strokeWidth={1.5} />
                    </div>

                    <h1 className="text-4xl font-serif text-brand-navy mb-6">Thank You</h1>

                    <p className="text-lg text-brand-slate leading-relaxed mb-10 max-w-lg mx-auto">
                        Your enquiry has been successfully received. A member of our team will review your message and get back to you shortly.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/services"
                            className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-navy text-white px-8 py-4 font-medium hover:bg-brand-navy-light transition-colors rounded-sm"
                        >
                            Our Services
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                        <Link
                            to="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-brand-navy text-brand-navy px-8 py-4 font-medium hover:bg-brand-navy hover:text-white transition-colors rounded-sm"
                        >
                            Go Home
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
