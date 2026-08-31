import React, { useState } from 'react';
import { PROJECTS_LIST, REGALIA_PROJECT } from '@/data/companyData';
import { Image as ImageIcon, MapPin, X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; subtitle: string } | null>(null);
  const [filter, setFilter] = useState<string>('All');

  // Combined gallery items
  const galleryItems = [
    {
      url: REGALIA_PROJECT.image,
      title: "REGALIA Flagship Exterior Render",
      subtitle: "Baramati Prime Residential Landmark",
      category: "REGALIA"
    },
    ...REGALIA_PROJECT.floorPlans.map(plan => ({
      url: plan.image,
      title: `REGALIA - ${plan.name}`,
      subtitle: plan.size,
      category: "REGALIA"
    })),
    ...PROJECTS_LIST.map(p => ({
      url: p.image,
      title: p.title,
      subtitle: `${p.location} • ${p.category} (${p.status})`,
      category: p.category === 'Commercial' ? 'Commercial' : p.status === 'Ongoing' ? 'Ongoing' : 'Completed'
    }))
  ];

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <section className="bg-shivaangan-navy text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-shivaangan-dark via-shivaangan-navy/90 to-shivaangan-dark"></div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">Architectural Showcase</span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-white tracking-tight mt-2">
            Project & Construction <span className="gold-gradient-text">Gallery</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Visual highlights of Shivaangan Realcon landmarks, REGALIA architectural renders, completed townships, and ongoing site developments.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All', 'REGALIA', 'Ongoing', 'Completed', 'Commercial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all ${
                  filter === cat
                    ? 'bg-shivaangan-navy text-shivaangan-gold shadow-lg border-b-2 border-shivaangan-gold'
                    : 'bg-white text-shivaangan-navy hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage({ url: item.url, title: item.title, subtitle: item.subtitle })}
                className="group relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white cursor-pointer hover:shadow-2xl hover:border-shivaangan-gold/50 transition-all duration-300 h-64"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-shivaangan-dark/90 via-shivaangan-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between text-shivaangan-gold mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider">{item.category}</span>
                    <ZoomIn className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-base leading-tight">{item.title}</h3>
                  <p className="text-gray-300 text-xs mt-1">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-shivaangan-dark/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-shivaangan-navy rounded-2xl overflow-hidden border border-shivaangan-gold/40 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-contain bg-black/40"
            />
            <div className="p-6 bg-shivaangan-navy text-white border-t border-shivaangan-gold/20">
              <h3 className="text-xl font-bold text-white mb-1">{selectedImage.title}</h3>
              <p className="text-sm text-shivaangan-gold">{selectedImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
