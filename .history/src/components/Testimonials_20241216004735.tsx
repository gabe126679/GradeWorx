import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((current) => 
      (current + 1) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Testimonials</h2>
        <p className="text-center text-xl mb-12 text-[#c5ff00]">
          See what people are saying about GradeWorx
        </p>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 text-[#c5ff00] hover:text-white transition-colors"
          >
            <ChevronLeft size={40} />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 text-[#c5ff00] hover:text-white transition-colors"
          >
            <ChevronRight size={40} />
          </button>

          {/* Testimonial Content */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#c5ff00]" fill="#c5ff00" />
              ))}
            </div>
            <blockquote className="text-center mb-6 italic text-lg">
              "{testimonials[currentIndex].text}"
            </blockquote>
            <p className="text-center text-[#c5ff00] font-semibold">
              {testimonials[currentIndex].author}
            </p>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#c5ff00]' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}