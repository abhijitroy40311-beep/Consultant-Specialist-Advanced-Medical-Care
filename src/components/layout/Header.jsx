import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { brandConfig } from '../../data/config';
import { PhoneCTA } from '../ui/PhoneCTA';
import { WhatsAppCTA } from '../ui/WhatsAppCTA';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
    isScrolled || !isHome || mobileMenuOpen
      ? 'bg-brand-ivory/95 backdrop-blur-md border-brand-gray-light py-4 shadow-sm'
      : 'bg-transparent border-transparent py-6'
  }`;

  const linkClasses = `text-sm font-medium transition-colors hover:text-brand-gold ${
    isScrolled || !isHome || mobileMenuOpen ? 'text-brand-charcoal' : 'text-brand-charcoal'
  }`;

  const logoClasses = `font-serif text-xl md:text-2xl font-medium tracking-wide ${
    isScrolled || !isHome || mobileMenuOpen ? 'text-brand-navy' : 'text-brand-navy'
  }`;

  return (
    <>
      <header className={headerClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col z-50">
            <span className={logoClasses}>{brandConfig.doctorName}</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-slate hidden sm:block mt-0.5">
              Consultant Specialist
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className={linkClasses}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <WhatsAppCTA variant="primary" size="sm" text="WhatsApp" showIcon={false} />
            <PhoneCTA variant="outline" size="sm" text="Call" showIcon={false} />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2 text-brand-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu (Moved outside header to escape backdrop-filter containing block context) */}
      <div 
        className={`fixed inset-0 bg-brand-ivory z-40 transition-transform duration-500 ease-in-out transform lg:hidden flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex-1 overflow-y-auto pt-28 px-6 pb-24">
          <nav className="flex flex-col space-y-6">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className="font-serif text-3xl text-brand-navy"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-12 space-y-4">
            <WhatsAppCTA className="w-full justify-center" size="lg" />
            <PhoneCTA className="w-full justify-center" size="lg" />
          </div>

          <div className="mt-12 pt-8 border-t border-brand-gray-light">
            <p className="text-sm text-brand-slate">{brandConfig.address}</p>
            <p className="text-sm text-brand-slate mt-2">{brandConfig.workingHours}</p>
          </div>
        </div>
      </div>
    </>
  );
}
