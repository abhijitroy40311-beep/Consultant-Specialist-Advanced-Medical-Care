import { Helmet } from 'react-helmet-async';
import { brandConfig } from '../../data/config';
import { useLocation } from 'react-router-dom';

export function SEO({ 
  title, 
  description, 
  name = brandConfig.doctorName, 
  type = 'website',
  image = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200'
}) {
  const location = useLocation();
  const currentUrl = `https://your-domain.com${location.pathname}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | ${name}` : `${name} | ${brandConfig.specialty}`}</title>
      <meta name="description" content={description || "Personalized medical consultations designed around your health, your concerns, and the right next step. Expert Care. Thoughtful Medicine."} />
      
      {/* OpenGraph tags */}
      <meta property="og:title" content={title ? `${title} | ${name}` : `${name} | ${brandConfig.specialty}`} />
      <meta property="og:description" content={description || "Personalized medical consultations designed around your health, your concerns, and the right next step."} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={name} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | ${name}` : `${name} | ${brandConfig.specialty}`} />
      <meta name="twitter:description" content={description || "Personalized medical consultations designed around your health, your concerns, and the right next step."} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
}
