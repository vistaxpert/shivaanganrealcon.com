import React from 'react';
import { X, MapPin, Calendar, Building, CheckCircle2, MessageCircle } from 'lucide-react';
import { ProjectItem, COMPANY_INFO } from '@/data/companyData';

interface ProjectDetailsModalProps {
  project: ProjectItem;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Shivaangan Realcon LLP, I am interested in details regarding ${project.title} (${project.location}).`
  )}`;

  return (
    <div className="fixed inset-0 bg-shivaangan-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-shivaangan-gold/30 animate-fade-in">
        {/* Header */}
        <div className="sticky top-0 bg-shivaangan-navy p-5 text-white flex justify-between items-center z-10 border-b border-shivaangan-gold/30">
          <div>
            <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">{project.category} • {project.status}</span>
            <h2 className="text-2xl font-black text-white">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Main Image */}
          <div className="mb-6 relative rounded-xl overflow-hidden shadow-lg border border-gray-100 max-h-[360px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-shivaangan-navy/90 text-white px-4 py-2 rounded-lg text-xs font-semibold backdrop-blur-md border border-shivaangan-gold/30 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-shivaangan-gold" />
              {project.location}
            </div>
          </div>

          {/* Key Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-shivaangan-lightgray p-4 rounded-xl mb-6 text-center border border-gray-200">
            <div>
              <p className="text-xs text-gray-500 uppercase">Status</p>
              <p className="text-sm font-bold text-shivaangan-navy">{project.status}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Built Area</p>
              <p className="text-sm font-bold text-shivaangan-navy">{project.area}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Year / Timeline</p>
              <p className="text-sm font-bold text-shivaangan-navy">{project.year}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Category</p>
              <p className="text-sm font-bold text-shivaangan-navy">{project.category}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-shivaangan-navy mb-3">Project Description</h3>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>

          {/* Highlights & Amenities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {project.highlights && project.highlights.length > 0 && (
              <div className="bg-amber-50/60 p-5 rounded-xl border border-amber-200/60">
                <h4 className="text-sm font-bold text-shivaangan-navy mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-shivaangan-gold" /> Key Project Highlights
                </h4>
                <ul className="space-y-2 text-xs text-gray-700">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-shivaangan-gold font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.amenities && project.amenities.length > 0 && (
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="text-sm font-bold text-shivaangan-navy mb-3 flex items-center gap-2">
                  <Building className="w-4 h-4 text-shivaangan-navy" /> Amenities & Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                  {project.amenities.map((a, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-end">
            <a
              href={`tel:${COMPANY_INFO.director.phone}`}
              className="btn-primary text-center text-sm py-3 px-6 font-bold"
            >
              Call Developer: +91 9767900555
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-center text-sm font-bold py-3 px-6 rounded-md flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal; 