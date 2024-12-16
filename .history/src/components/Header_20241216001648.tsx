import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from './Navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/95 text-white z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/images/logo.png" 
              alt="Gradeworx Logo" 
              className="h-16 w-auto"
              style={{ filter: 'brightness(1.1)' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#home">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-6">
            <div className="flex flex-col space-y-4">
              <Link href="#home" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}