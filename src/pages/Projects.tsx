import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Building, Building2, Home, Warehouse, Hammer, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '@/context/ModalContext';
import { PROJECTS_LIST, ProjectItem } from '@/data/companyData';

const Projects = () => {
  const { openModal } = useModal();
  const [activeFilter, setActiveFilter] = useState('All');
  
  const handleViewDetails = (project: ProjectItem) => {
    openModal(project);
  };

  // Filter categories
  const categories = ["All", "Ongoing", "Completed", "Residential", "Commercial", "Contracting"];

  // Filter logic
  const filteredProjects = PROJECTS_LIST.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Ongoing') return project.status === 'Ongoing';
    if (activeFilter === 'Completed') return project.status === 'Completed';
    return project.category === activeFilter;
  });

  return (
    <div>
      {/* Hero Header */}
      <section className="bg-shivaangan-navy text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-shivaangan-dark via-shivaangan-navy/90 to-shivaangan-dark"></div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">Our Engineering Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-white tracking-tight mt-2">
            Delivered & Ongoing <span className="gold-gradient-text">Landmarks</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Explore 14+ benchmark projects by Er. Rahul Khatmode & Shivaangan Realcon LLP spanning luxury residential apartments, commercial plazas, shopping malls, and institutional civil contracts.
          </p>
        </div>
      </section>
      
      {/* Projects Showcase */}
      <section className="section-padding bg-shivaangan-lightgray">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
                  activeFilter === category
                    ? 'bg-shivaangan-navy text-shivaangan-gold shadow-lg shadow-shivaangan-navy/20 border-b-2 border-shivaangan-gold'
                    : 'bg-white text-shivaangan-navy hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {category === 'All' && <Building2 className="h-4 w-4" />}
                {category === 'Ongoing' && <Filter className="h-4 w-4 text-amber-500" />}
                {category === 'Completed' && <Filter className="h-4 w-4 text-emerald-600" />}
                {category === 'Residential' && <Home className="h-4 w-4" />}
                {category === 'Commercial' && <Warehouse className="h-4 w-4" />}
                {category === 'Contracting' && <Hammer className="h-4 w-4" />}
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                status={project.status}
                location={project.location}
                image={project.image}
                description={project.description}
                onViewDetails={() => handleViewDetails(project)}
              />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Building2 className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">There are no projects matching your selected filter.</p>
              <button
                onClick={() => setActiveFilter('All')}
                className="btn-primary text-sm py-2.5 px-6 font-bold"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-shivaangan-dark via-shivaangan-navy to-shivaangan-dark text-white border-t border-shivaangan-gold/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold">Have a Project or Joint Development Inquiry?</h2>
              <p className="mt-2 text-gray-300 text-sm">Consult directly with Er. Rahul Khatmode & our engineering board.</p>
            </div>
            <Link 
              to="/contact"
              className="btn-gold py-3.5 px-8 text-sm uppercase tracking-wider font-bold shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
