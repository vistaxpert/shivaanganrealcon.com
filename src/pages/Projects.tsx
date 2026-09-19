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

  const categories = ["All", "Ongoing", "Completed"];

  // Custom sorting logic based on the requested specific order
  const getSortOrder = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('durga')) return 1;
    if (t.includes('k-square') || t.includes('k square')) return 2;
    if (t.includes('vrundavan commercial') || t.includes('vrindawan commercial')) return 3;
    if (t.includes('nirmiti') && (t.includes('1') || t.includes('park'))) return 4; // Nirmiti Phase 1
    if (t.includes('vrundavan') && t.includes('1')) return 5; // Vrundavan Park Phase 1
    if (t.includes('vrundavan') && t.includes('2')) return 6; // Vrundavan Park Phase 2
    if (t.includes('nirmiti') && t.includes('2')) return 7; // Nirmiti Vihar Phase 2
    return 99; // Remaining projects (e.g., Regalia) go to the end
  };

  // Sort projects first, then apply the active filter
  const sortedProjects = [...PROJECTS_LIST].sort((a, b) => getSortOrder(a.title) - getSortOrder(b.title));

  const filteredProjects = sortedProjects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Ongoing') return project.status === 'Ongoing';
    if (activeFilter === 'Completed') return project.status === 'Completed';
    return true;
  });

  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in">
      {/* Premium Hero Section with Left White Gradient */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[60vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url(/images/building4.png)',
            backgroundPosition: 'center right'
          }}
        >
          {/* Elegant left-to-right white gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/10 to-transparent"></div>
        </div>
        
        {/* Left-aligned content */}
        <div className="container-custom relative z-10 w-full">
          <div className="max-w-lg lg:max-w-xl text-left pr-4">
            <span className="text-sm font-bold text-[#FF6600] uppercase tracking-widest block mb-4 animate-fade-in">
              Our Engineering Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              Our <span className="text-[#FF6600]">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium animate-fade-in" style={{ animationDelay: '200ms' }}>
              Explore our portfolio of delivered and ongoing landmarks across residential, commercial, and civil contracting sectors.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          {/* Status Filters - Upgraded for a Premium Feel */}
          <div className="flex flex-wrap justify-start gap-4 mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-8 py-3.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2.5 text-sm shadow-sm ${
                  activeFilter === category
                    ? 'bg-[#FF6600] text-white shadow-lg shadow-[#FF6600]/30 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-[#FF6600]/40'
                }`}
              >
                {category === 'All' && <Building2 className={`h-4 w-4 ${activeFilter === 'All' ? 'text-white' : 'text-[#FF6600]'}`} />}
                {category === 'Ongoing' && (
                  <span className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${activeFilter === 'Ongoing' ? 'bg-white' : 'bg-[#FF6600]'}`}></span>
                    <span>Ongoing</span>
                  </span>
                )}
                {category === 'Completed' && (
                  <span className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${activeFilter === 'Completed' ? 'bg-white' : 'bg-emerald-500'}`}></span>
                    <span>Completed</span>
                  </span>
                )}
                {category === 'All' && <span>All Projects</span>}
              </button>
            ))}
          </div>
          
          {/* Projects Grid with Staggered Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-fade-in transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-2xl overflow-hidden bg-white border border-gray-100"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <ProjectCard 
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  status={project.status}
                  location={project.location}
                  image={project.image}
                  description={project.description}
                  onViewDetails={() => handleViewDetails(project)}
                />
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl shadow-md border border-gray-100 max-w-md mx-auto animate-fade-in">
              <Building2 className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900">No projects found</h3>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">There are no projects matching your selected filter.</p>
              <button
                onClick={() => setActiveFilter('All')}
                className="bg-[#FF6600] hover:bg-[#e65c00] text-white text-sm py-3 px-8 font-bold rounded-md transition-colors shadow-lg"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Premium CTA Section */}
      <section className="py-20 bg-[#FF6600] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="mb-6 md:mb-0 max-w-2xl text-center md:text-left animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">Have a Project or Investment in Mind?</h2>
              <p className="text-white/90 text-sm md:text-base font-medium">Contact us today to schedule a site tour or discuss your property requirements.</p>
            </div>
            <Link 
              to="/contact"
              className="bg-white text-[#FF6600] hover:bg-gray-100 py-4 px-10 rounded-md font-bold transition-all shadow-xl hover:scale-105 whitespace-nowrap animate-fade-in flex-shrink-0"
              style={{ animationDelay: '200ms' }}
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