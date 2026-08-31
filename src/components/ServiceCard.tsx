import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-shivaangan-amber hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div className="bg-shivaangan-charcoal group-hover:bg-shivaangan-terracotta text-shivaangan-amber group-hover:text-white p-4 rounded-xl inline-block mb-5 transition-colors duration-300 shadow-sm">
          <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-shivaangan-charcoal group-hover:text-shivaangan-terracotta transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
