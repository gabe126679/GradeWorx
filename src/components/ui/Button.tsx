import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-lg font-semibold transition-colors';
  const variants = {
    primary: 'bg-[#c5ff00] text-black hover:bg-[#a3d600]',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}