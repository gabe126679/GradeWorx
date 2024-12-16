import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Link({ href, children, className = '', onClick }: LinkProps) {
  return (
    <a 
      href={href} 
      className={`text-white hover:text-[#c5ff00] transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}