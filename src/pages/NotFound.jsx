import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-ivory px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl md:text-8xl font-serif text-brand-navy mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif text-brand-navy mb-4">Page Not Found</h2>
        <p className="text-brand-slate mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button to="/" variant="primary">
          Return to Homepage
        </Button>
      </div>
    </div>
  );
}
