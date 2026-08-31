import React from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import { 
  Building, Hammer, Ruler, Home, Building2, 
  ChevronRight, ArrowRight, Award, Shield, CheckCircle2, 
  TrendingUp, Sparkles, Phone, MessageCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '@/context/ModalContext';
import { COMPANY_INFO, REGALIA_PROJECT, PROJECTS_LIST, TESTIMONIALS_LIST } from '@/data/companyData';

const Index = () => {
  const { openModal } = useModal();

  // Featured Projects list
  const featuredProjects = [
    REGALIA_PROJECT,
    ...PROJECTS_LIST.filter(p => p.id !== 'regalia').slice(0, 5)
  ];

  // Services data with matching icons
  const services = [
    {
      title: "Residential Development",
      description: "Developing luxury high-rise apartments, gated villas, and modern residential townships with world-class amenities.",
      icon: Home
    },
    {
      title: "Commercial & Retail Complexes",
      description: "Creating iconic commercial centers, office towers, shopping malls, and prime retail storefronts.",
      icon: Building
    },
    {
      title: "Turnkey Civil Contracting",
      description: "Executing large-scale educational campuses, government facilities, and industrial civil contracts with precision engineering.",
      icon: Hammer
    },
    {
      title: "Architecture & Urban Planning",
      description: "Transforming urban spaces into modern architectural landmarks with maximum space utilization and Vastu balance.",
      icon: Ruler
    },
    {
      title: "Investment & Real Estate Advisory",
      description: "Guiding investors and homebuyers toward high-appreciation properties backed by clear legal titles and strong yields.",
      icon: TrendingUp
    },
    {
      title: "Quality Civil Engineering",
      description: "Under the leadership of Er. Rahul Khatmode (B.E. Civil), ensuring structural safety, seismic resistance, and IS code compliance.",
      icon: Award
    }
  ];

  const handleViewDetails = (project: typeof PROJECTS_LIST[0]) => {
    openModal(project);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">Leadership & Heritage</span>
              <h2 className="section-title mt-2">About Shivaangan Realcon</h2>
              <p className="text-construction-gray mb-6">
                Led by visionary directors <strong>Amit Sanas</strong> and <strong>Rupesh Hande</strong>, Shivaangan Realcon has established itself as a premier name in delivering high-quality residential communities, commercial landmarks, and turnkey construction projects across Pune and Maharashtra.
              </p>
              <p className="text-construction-gray mb-6">
                With 15+ years of combined industry expertise, we bring architectural precision, ethical transparency, clear legal titles, and timely delivery to every single square foot we build.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-construction-navy font-medium hover:text-shivaangan-terracotta transition-colors group"
                >
                  Meet Our Leadership & Story
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Shivaangan%20Realcon,%20I%20would%20like%20to%20enquire%20about%20your%20projects.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 mr-1.5" />
                  Chat with Us on WhatsApp
                </a>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" 
                alt="About Shivaangan Realcon" 
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-shivaangan-charcoal text-white p-6 rounded-xl shadow-2xl max-w-xs border border-shivaangan-amber/40">
                <p className="font-black text-3xl text-shivaangan-amber mb-1">15+</p>
                <p className="text-xs text-gray-200 font-medium">Years of Engineering Excellence & CREDAI Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Landmark Banner: REGALIA */}
      <section className="py-16 bg-gradient-to-r from-shivaangan-dark via-shivaangan-charcoal to-shivaangan-dark text-white relative overflow-hidden border-y-2 border-shivaangan-amber/40">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-shivaangan-amber/20 text-shivaangan-amber border border-shivaangan-amber/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                FLAGSHIP RESIDENTIAL LANDMARK
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                REGALIA <span className="gold-gradient-text">BY SHIVAANGAN</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                Experience ultra-luxurious 2 & 3 BHK residences in Baramati. Featuring rooftop sky lounges, Vastu-compliant layouts, earthquake-resistant RCC frame engineering, and 20+ lifestyle amenities.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8 text-xs font-semibold text-amber-200">
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">2 & 3 BHK Luxury Suites</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">Prime Baramati Location</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">Rooftop Sky Deck</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">24x7 Smart Security</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/regalia"
                  className="btn-primary py-3.5 px-8 text-sm uppercase tracking-wider font-bold flex items-center gap-2 shadow-xl"
                >
                  View REGALIA Details & Brochure
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-md text-sm font-bold flex items-center gap-2 transition-colors border border-white/20"
                >
                  <Phone className="w-4 h-4 text-shivaangan-amber" />
                  Call Sales Desk: {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-shivaangan-amber/40">
                <img 
                  src={REGALIA_PROJECT.image} 
                  alt="REGALIA Flagship Project" 
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding bg-construction-lightgray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">Engineering Capabilities</span>
            <h2 className="section-title inline-block mt-2">Our Services</h2>
            <p className="text-construction-gray mt-4 max-w-2xl mx-auto text-sm">
              We offer a comprehensive range of construction, real estate development, and turnkey engineering services tailored to meet client and institutional needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">Delivered & Ongoing Landmarks</span>
              <h2 className="section-title mt-2">Featured Projects</h2>
            </div>
            <Link 
              to="/projects" 
              className="mt-6 md:mt-0 inline-flex items-center text-construction-navy font-medium hover:text-shivaangan-terracotta transition-colors group"
            >
              View All 14+ Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
      <section className="section-padding bg-construction-navy text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">The Shivaangan Promise</span>
            <h2 className="section-title text-white inline-block after:bg-shivaangan-amber mt-2">Why Choose Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-sm">
              Shivaangan Realcon is committed to delivering excellence in every project. Here's what sets us apart:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm border border-white/10 hover:border-shivaangan-amber transition-colors">
              <div className="bg-shivaangan-amber text-shivaangan-charcoal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold shadow-md">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">CREDAI Leadership</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Headed by Er. Rahul Khatmode, President of CREDAI Baramati, ensuring highest industry ethics.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm border border-white/10 hover:border-shivaangan-amber transition-colors">
              <div className="bg-shivaangan-amber text-shivaangan-charcoal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Structural Precision</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Civil engineering expertise ensures IS code seismic compliance and zero material compromises.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm border border-white/10 hover:border-shivaangan-amber transition-colors">
              <div className="bg-shivaangan-amber text-shivaangan-charcoal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Clear Legal Titles</h3>
              <p className="text-gray-300 text-sm leading-relaxed">100% clear titles, RERA compliance, and transparent documentation for hassle-free home loans.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-sm border border-white/10 hover:border-shivaangan-amber transition-colors">
              <div className="bg-shivaangan-amber text-shivaangan-charcoal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Timely Delivery</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Proven track record of delivering 1,200+ homes and commercial units on time across 15+ years.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-construction-lightgray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">Client Testimonials</span>
            <h2 className="section-title inline-block mt-2">What Our Clients Say</h2>
            <p className="text-construction-gray mt-4 max-w-2xl mx-auto text-sm">
              Don't just take our word for it. Hear what homeowners, business partners, and clients have to say about Shivaangan Realcon.
            </p>
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
      
      {/* High-Impact CTA Strip */}
      <section className="py-16 bg-gradient-to-r from-shivaangan-terracotta to-shivaangan-amber text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-black">Ready to Start Your Next Project?</h2>
              <p className="mt-2 text-white/90 text-sm md:text-base">Contact us today to schedule a site visit or discuss your real estate & construction needs.</p>
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

export default Index;
