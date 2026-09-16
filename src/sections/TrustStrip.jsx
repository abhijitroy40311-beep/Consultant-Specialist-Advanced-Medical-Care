export default function TrustStrip() {
  const metrics = [
    { value: "5+", label: "Years Experience" },
    { value: "10K+", label: "Patient Consultations" },
    { value: "4.9/5", label: "Patient Satisfaction" },
    { value: "24/7", label: "Digital Enquiry Access" }
  ];

  return (
    <section className="bg-brand-navy text-brand-ivory py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-brand-ivory/10">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center px-4 relative group">
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif mb-2 text-brand-gold">
                {metric.value}
              </p>
              <p className="text-xs md:text-sm uppercase tracking-widest text-brand-ivory/70">
                {metric.label}
              </p>
              {/* Note: Fictional metrics marked as demo content in comments for developers */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
