import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export function Contact() {
  return (
    <Section id="contact" className="bg-black text-white">
      <SectionTitle>Contact Us</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Phone className="text-[#c5ff00]" />
              <a href="tel:518-477-0158" className="hover:text-[#c5ff00] transition-colors">
                518-477-0158
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-[#c5ff00]" />
              <a href="mailto:info@gradeworxcontracting.com" className="hover:text-[#c5ff00] transition-colors">
                info@gradeworxcontracting.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-[#c5ff00]" />
              <span>Albany, NY and surrounding areas</span>
            </div>
          </div>
        </div>
        
        <form className="space-y-4">
          <Input label="Name" type="text" />
          <Input label="Email" type="email" />
          <div>
            <label className="block mb-2">Message</label>
            <textarea 
              rows={4}
              className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#c5ff00] focus:outline-none"
            ></textarea>
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </Section>
  );
}