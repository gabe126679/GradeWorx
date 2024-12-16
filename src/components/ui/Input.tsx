import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div>
      <label className="block mb-2">{label}</label>
      <input 
        className={`w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#c5ff00] focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
}