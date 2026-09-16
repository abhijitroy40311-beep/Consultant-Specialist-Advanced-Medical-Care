export function SectionHeading({ 
  eyebrow, 
  title, 
  description, 
  centered = false,
  className = ''
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <span className="inline-block mb-4 text-xs font-bold uppercase tracking-widest text-brand-teal">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-navy mb-6 leading-tight">
        {title}
      </h2>
      {description && (
        <p className={`text-brand-slate text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
