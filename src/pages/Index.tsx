import React from 'react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import { 
  Building, Hammer, PaintBucket, Ruler, Home, Building2, 
  ChevronRight, ArrowRight, Award, CheckCircle2, Shield, Sparkles, Phone, MessageCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '@/context/ModalContext';
import { COMPANY_INFO, REGALIA_PROJECT, PROJECTS_LIST, TESTIMONIALS_LIST, SERVICES_LIST } from '@/data/companyData';

const Index = () => {
  const { openModal } = useModal();

  // Featured Projects list
  const featuredProjects = [
    REGALIA_PROJECT,
    ...PROJECTS_LIST.filter(p => p.id !== 'regalia').slice(0, 5)
  ];

  const handleViewDetails = (project: typeof PROJECTS_LIST[0]) => {
    openModal(project);
  };

  return (
    <div>
      <Hero />
      
      {/* Leadership & About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image & Leadership Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" 
                  alt="Er. Rahul Khatmode & Shivaangan Realcon" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-shivaangan-dark via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 bg-shivaangan-gold text-shivaangan-navy px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
                    <Award className="w-3.5 h-3.5" />
                    CREDAI BARAMATI PRESIDENT
                  </div>
                  <h3 className="text-xl font-black text-white">{COMPANY_INFO.director.name}</h3>
                  <p className="text-xs text-amber-200">{COMPANY_INFO.director.qualification} • {COMPANY_INFO.director.title}</p>
                </div>
              </div>

              {/* Floating Metric Card */}
              <div className="absolute -bottom-6 -right-6 bg-shivaangan-navy text-white p-6 rounded-xl shadow-2xl border border-shivaangan-gold/40 hidden sm:block max-w-xs">
                <p className="font-black text-3xl text-shivaangan-gold mb-1">15+ Years</p>
                <p className="text-xs text-gray-300 font-medium leading-snug">Engineering Excellence across Pune & Baramati</p>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">Leadership & Engineering Legacy</span>
              <h2 className="section-title mt-2">Welcome To Shivaangan Realcon LLP</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Led by <strong>Er. Rahul Khatmode (President - CREDAI Baramati)</strong>, {COMPANY_INFO.name} is built on a strong foundation of civil engineering precision, uncompromising quality standards, and customer-first transparency.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                Our legacy spans across sister concerns including <strong>Nirmiti Group (Baramati)</strong>, <strong>Shomika Infra (Government Contractor)</strong>, and <strong>Khatri-Khatmode Associates</strong>. We specialize in luxury residential complexes, premium commercial malls, and high-footfall business parks.
              </p>

              {/* Entities List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {COMPANY_INFO.director.entities.map((entity, index) => (
                  <div key={index} className="flex items-center gap-2.5 bg-shivaangan-lightgray p-3 rounded-lg border border-gray-200 text-xs font-bold text-shivaangan-navy">
                    <CheckCircle2 className="w-4 h-4 text-shivaangan-gold shrink-0" />
                    <span>{entity}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/about" 
                  className="btn-primary inline-flex items-center gap-2 text-sm font-bold"
                >
                  Read Director Profile & Story
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-md text-sm font-bold flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Connect with Er. Rahul Khatmode
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Showcase Banner: REGALIA */}
      <section className="py-16 bg-gradient-to-r from-shivaangan-dark via-shivaangan-navy to-shivaangan-dark text-white relative overflow-hidden border-y-2 border-shivaangan-gold">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-shivaangan-gold/20 text-shivaangan-gold border border-shivaangan-gold/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                FLAGSHIP RESIDENTIAL LANDMARK
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                REGALIA <span className="gold-gradient-text">BY SHIVAANGAN</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                Experience ultra-luxurious 2 & 3 BHK residences in Baramati. Featuring rooftop sky lounges, Vastu-compliant layouts, earthquake-resistant engineering, and 20+ lifestyle amenities.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8 text-xs font-semibold text-amber-200">
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">2 & 3 BHK Luxury Suite</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">Prime Baramati Location</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">Rooftop Sky Deck</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">24x7 Smart Security</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/regalia"
                  className="btn-gold py-3.5 px-8 text-sm uppercase tracking-wider font-bold flex items-center gap-2 shadow-xl"
                >
                  View REGALIA Details & Brochure
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-shivaangan-gold/40">
                <img 
                  src={REGALIA_PROJECT.image} 
                  alt="REGALIA Flagship Project" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-shivaangan-lightgray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">Engineering Capabilities</span>
            <h2 className="section-title mt-2 inline-block">Our Development Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm mt-2">
              From high-end residential towers to mega commercial malls and institutional civil contracting, we deliver excellence at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-shivaangan-gold transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 rounded-lg bg-shivaangan-navy text-shivaangan-gold flex items-center justify-center mb-4">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-shivaangan-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Portfolio */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">Delivered & Ongoing Landmarks</span>
              <h2 className="section-title mt-2">Featured Projects</h2>
            </div>
            <Link 
              to="/projects" 
              className="mt-4 md:mt-0 inline-flex items-center text-shivaangan-navy font-bold hover:text-shivaangan-gold transition-colors text-sm"
            >
              View All 14+ Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-shivaangan-navy text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">The Shivaangan Promise</span>
            <h2 className="section-title text-white mt-2 inline-block after:bg-shivaangan-gold">Why Choose Shivaangan Realcon</h2>
            <p className="mt-2 max-w-2xl mx-auto text-gray-300 text-sm">
              We stand apart in Maharashtra's real estate market through engineering leadership and ethical transparency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm border border-white/10 hover:border-shivaangan-gold transition-colors">
              <div className="bg-shivaangan-gold text-shivaangan-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">CREDAI Leadership</h3>
              <p className="text-gray-300 text-xs leading-relaxed">Headed by Er. Rahul Khatmode, President of CREDAI Baramati, ensuring strictly audited norms.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm border border-white/10 hover:border-shivaangan-gold transition-colors">
              <div className="bg-shivaangan-gold text-shivaangan-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Structural Precision</h3>
              <p className="text-gray-300 text-xs leading-relaxed">Civil engineering expertise ensures IS code seismic certification and zero material compromises.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm border border-white/10 hover:border-shivaangan-gold transition-colors">
              <div className="bg-shivaangan-gold text-shivaangan-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Legal Title Clarity</h3>
              <p className="text-gray-300 text-xs leading-relaxed">100% clear titles, RERA compliance, and hassle-free home loan approvals across leading nationalized banks.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm border border-white/10 hover:border-shivaangan-gold transition-colors">
              <div className="bg-shivaangan-gold text-shivaangan-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Timely Handover</h3>
              <p className="text-gray-300 text-xs leading-relaxed">Proven track record of delivering 1,200+ flats and commercial units on time over 15+ years.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-shivaangan-lightgray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">Client Testimonials</span>
            <h2 className="section-title mt-2 inline-block">What Homeowners & Partners Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_LIST.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Lead Form CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">Connect With Shivaangan Realcon</span>
              <h2 className="text-3xl md:text-4xl font-black text-shivaangan-navy mt-2">Ready to Invest or Find Your Dream Home?</h2>
              <p className="text-gray-600 mt-2 text-sm">Schedule a direct conversation or site visit with our sales team.</p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
