import { brandConfig } from '../data/config';

export default function Legal({ page }) {
  
  const content = {
    privacy: {
      title: "Privacy Policy",
      body: (
        <>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make an enquiry on this demonstration website.</p>
          
          <h3>Information Collection</h3>
          <p>As this is a portfolio demonstration project, no real patient data is collected or stored via the forms on this site. If you use the WhatsApp or Phone links, you will be directed to standard communication applications outside of this website.</p>
          
          <h3>Data Security</h3>
          <p>In a real production environment for {brandConfig.doctorName}, all medical data and patient enquiries would be handled in accordance with local healthcare data protection regulations (such as GDPR or HIPAA).</p>
        </>
      )
    },
    terms: {
      title: "Terms & Conditions",
      body: (
        <>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Please read these Terms and Conditions carefully before using this website operated by {brandConfig.doctorName}.</p>
          
          <h3>Demonstration Notice</h3>
          <p>This website is a portfolio demonstration. The clinical services, case studies, and doctor credentials presented are placeholder content designed to demonstrate web design capabilities for the medical sector.</p>
          
          <h3>Intellectual Property</h3>
          <p>The design architecture, UI components, and overall layout are part of a demonstration project. Stock imagery used remains the property of their respective copyright holders (e.g., Unsplash).</p>
        </>
      )
    },
    disclaimer: {
      title: "Medical Disclaimer",
      body: (
        <>
          <p><strong>IMPORTANT: This website is a design portfolio demonstration.</strong></p>
          
          <h3>Not Medical Advice</h3>
          <p>The content on this website—including text, graphics, images, case studies, and condition descriptions—is for informational and design demonstration purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>
          
          <h3>Fictional Entity</h3>
          <p>{brandConfig.doctorName} is a fictional persona created for this demonstration. Any resemblance to real medical professionals is coincidental. Do not attempt to seek actual medical treatment from the contact details provided in this demo, as they are placeholder numbers.</p>
          
          <h3>Emergencies</h3>
          <p>If you think you may have a medical emergency, call your doctor, go to the emergency department, or call emergency services immediately.</p>
        </>
      )
    }
  };

  const currentContent = content[page] || content.privacy;

  return (
    <section className="py-24 bg-brand-ivory min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-brand-navy mb-12 pb-6 border-b border-brand-gray-light">
          {currentContent.title}
        </h1>
        
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-navy prose-p:text-brand-slate prose-a:text-brand-teal max-w-none">
          {currentContent.body}
        </div>
      </div>
    </section>
  );
}
