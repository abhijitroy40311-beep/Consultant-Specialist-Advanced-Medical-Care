import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const variantStyles = {
  primary: 'bg-brand-navy text-white hover:bg-brand-navy-light',
  secondary: 'bg-brand-teal text-white hover:bg-opacity-90',
  outline: 'border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
  ghost: 'text-brand-navy hover:bg-brand-gray-light',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href, 
  to, 
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-slow duration-300';
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} ref={ref} {...props}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} ref={ref} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
