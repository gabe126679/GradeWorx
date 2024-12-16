import { Section } from '../components/ui/Section';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';

export function Services() {
  return (
    <Section id="services" className="bg-white">
      <div className="relative mb-16 h-64 rounded-xl overflow-hidden">
        <img 
          src="/images/service1.jpg" 
          alt="Our Services" 
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <SectionTitle className="text-white mb-0">Our Services</SectionTitle>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Section>
  );
}