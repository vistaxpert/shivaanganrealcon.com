import React from 'react';
import { Building2, Home, Warehouse, ArrowRight, MapPin } from 'lucide-react';

interface ProjectCardProps {
  id: string | number;
  title: string;
  category: string;
  status?: string;
  location?: string;
  image: string;
  description: string;
  onViewDetails: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  status,
  location,
  image,
  description,
  onViewDetails
}) => {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Residential':
        return <Home className="h-3.5 w-3.5" />;
      case 'Commercial':
        return <Warehouse className="h-3.5 w-3.5" />;
      default:
        return <Building2 className="h-3.5 w-3.5" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-shivaangan-gold/50 transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-shivaangan-dark/80 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-shivaangan-navy/90 text-shivaangan-gold px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-md border border-shivaangan-gold/30">
            {getCategoryIcon(category)}
            {category}
          </span>
          {status && (
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
              status === 'Ongoing' ? 'bg-amber-500/90 text-white' : 'bg-emerald-600/90 text-white'
            }`}>
              {status}
            </span>
          )}
        </div>
        {location && (
          <div className="absolute bottom-3 left-4 text-white text-xs font-medium flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-shivaangan-gold" />
            <span>{location}</span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold text-shivaangan-navy mb-2 group-hover:text-shivaangan-gold transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">{description}</p>
        </div>
        <button
          onClick={onViewDetails}
          className="w-full btn-primary py-2.5 text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-shivaangan-gold group-hover:text-shivaangan-navy transition-all"
        >
          <span>View Project Details</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
