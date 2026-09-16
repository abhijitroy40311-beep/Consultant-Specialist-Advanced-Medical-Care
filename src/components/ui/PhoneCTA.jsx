import { brandConfig } from '../../data/config';
import { Button } from './Button';
import { Phone } from 'lucide-react';

export function PhoneCTA({ variant = 'outline', size = 'md', className = '', showIcon = true, text = 'Call Now' }) {
  return (
    <Button 
      href={`tel:${brandConfig.phone.replace(/[^+\d]/g, '')}`}
      variant={variant}
      size={size}
      className={className}
    >
      {showIcon && <Phone className="w-4 h-4 mr-2" />}
      {text}
    </Button>
  );
}
