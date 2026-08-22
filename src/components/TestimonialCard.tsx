
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  testimonial: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, position, testimonial, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 relative">
      <Quote className="text-construction-orange/20 absolute top-6 right-6" size={48} />
      <div className="mb-6">
        <p className="text-construction-gray italic relative z-10">{testimonial}</p>
      </div>
      <div className="flex items-center mt-4">
        {image ? (
          <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-construction-navy flex items-center justify-center text-white mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-construction-gray text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
