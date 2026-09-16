import { brandConfig } from '../../data/config';
import { Button } from './Button';

// Simple WhatsApp icon using an SVG path since Lucide doesn't have a perfect match
const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export function WhatsAppCTA({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  showIcon = true, 
  text = 'WhatsApp Consultation',
  message = 'Hello, I would like to enquire about a consultation.'
}) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${brandConfig.whatsapp.replace(/[^+\d]/g, '')}?text=${encodedMessage}`;

  return (
    <Button 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
    >
      {showIcon && <WhatsAppIcon className="w-4 h-4 mr-2" />}
      {text}
    </Button>
  );
}
