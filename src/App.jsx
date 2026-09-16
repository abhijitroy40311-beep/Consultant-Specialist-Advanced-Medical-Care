import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';

// Layout
import PageLayout from './components/layout/PageLayout.jsx';
import PageTransition from './components/layout/PageTransition.jsx';

// Eager load Home page for performance
import Home from './pages/Home.jsx';

// Lazy loaded pages
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const ServiceDetail = lazy(() => import('./pages/services/ServiceDetail.jsx'));
const Conditions = lazy(() => import('./pages/Conditions.jsx'));
const CaseStudies = lazy(() => import('./pages/CaseStudies.jsx'));
const CaseStudyDetail = lazy(() => import('./pages/case-studies/CaseStudyDetail.jsx'));
const PatientStories = lazy(() => import('./pages/PatientStories.jsx'));
const Practice = lazy(() => import('./pages/Practice.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const ThankYou = lazy(() => import('./pages/ThankYou.jsx'));
const Legal = lazy(() => import('./pages/Legal.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-ivory">
      <div className="w-8 h-8 border-4 border-brand-teal/20 border-t-brand-teal rounded-full animate-spin"></div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  // Robustly handle scroll restoration to ensure new pages always start at the very top
  useEffect(() => {
    // Disable native browser scroll restoration for a smoother custom experience
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />

        {/* Lazy Loaded Routes wrapped in Suspense */}
        <Route path="/about" element={<Suspense fallback={<PageLoader />}><PageTransition><About /></PageTransition></Suspense>} />
        <Route path="/services" element={<Suspense fallback={<PageLoader />}><PageTransition><Services /></PageTransition></Suspense>} />
        <Route path="/services/:serviceSlug" element={<Suspense fallback={<PageLoader />}><PageTransition><ServiceDetail /></PageTransition></Suspense>} />
        <Route path="/conditions" element={<Suspense fallback={<PageLoader />}><PageTransition><Conditions /></PageTransition></Suspense>} />
        <Route path="/case-studies" element={<Suspense fallback={<PageLoader />}><PageTransition><CaseStudies /></PageTransition></Suspense>} />
        <Route path="/case-studies/:studySlug" element={<Suspense fallback={<PageLoader />}><PageTransition><CaseStudyDetail /></PageTransition></Suspense>} />
        <Route path="/patient-stories" element={<Suspense fallback={<PageLoader />}><PageTransition><PatientStories /></PageTransition></Suspense>} />
        <Route path="/practice" element={<Suspense fallback={<PageLoader />}><PageTransition><Practice /></PageTransition></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<PageLoader />}><PageTransition><Contact /></PageTransition></Suspense>} />
        <Route path="/thank-you" element={<Suspense fallback={<PageLoader />}><PageTransition><ThankYou /></PageTransition></Suspense>} />

        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<Suspense fallback={<PageLoader />}><PageTransition><Legal page="privacy" /></PageTransition></Suspense>} />
        <Route path="/terms" element={<Suspense fallback={<PageLoader />}><PageTransition><Legal page="terms" /></PageTransition></Suspense>} />
        <Route path="/medical-disclaimer" element={<Suspense fallback={<PageLoader />}><PageTransition><Legal page="disclaimer" /></PageTransition></Suspense>} />

        <Route path="*" element={<Suspense fallback={<PageLoader />}><PageTransition><NotFound /></PageTransition></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <PageLayout>
          <AnimatedRoutes />
        </PageLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
