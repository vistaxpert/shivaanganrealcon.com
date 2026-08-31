import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Building2 } from 'lucide-react';
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
  const categories = ["All", "Ongoing", "Completed"];

  // Filter projects based on selected status
  const filteredProjects = PROJECTS_LIST.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Ongoing') return project.status === 'Ongoing';
    if (activeFilter === 'Completed') return project.status === 'Completed';
    return true;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-construction-navy text-white py-24 md:py-32 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")' }}
        ></div>
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">Our Engineering Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white mt-2">Our Projects</h1>
          <p className="text-lg md:text-xl text-white/80">
            Explore our portfolio of delivered and ongoing landmarks across residential, commercial, and civil contracting sectors.
          </p>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="section-padding bg-construction-lightgray">
        <div className="container-custom">
          {/* Status Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-8 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2.5 text-sm shadow-sm ${
                  activeFilter === category
                    ? 'bg-construction-navy text-white shadow-lg ring-2 ring-shivaangan-amber/40 scale-105'
                    : 'bg-white text-construction-navy hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {category === 'All' && <Building2 className="h-4 w-4 text-shivaangan-amber" />}
                {category === 'Ongoing' && (
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                    <span>Ongoing</span>
                  </span>
                )}
                {category === 'Completed' && (
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span>Completed</span>
                  </span>
                )}
                {category === 'All' && <span>All Projects</span>}
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
            <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100 max-w-md mx-auto">
              <Building2 className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-shivaangan-charcoal">No projects found</h3>
              <p className="text-construction-gray mb-6 text-sm">There are no projects matching your selected filter.</p>
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
      <section className="py-16 bg-gradient-to-r from-shivaangan-terracotta to-shivaangan-amber text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-black">Have a Project or Investment in Mind?</h2>
              <p className="mt-2 text-white/90 text-sm md:text-base">Contact us today to schedule a site tour or discuss your property requirements.</p>
            </div>
            <Link 
              to="/contact"
              className="bg-white text-shivaangan-terracotta hover:bg-white/90 py-3.5 px-8 rounded-md font-bold transition-all shadow-lg hover:scale-105"
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
