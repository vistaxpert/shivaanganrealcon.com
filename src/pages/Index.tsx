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
import { COMPANY_INFO, REGALIA_PROJECT, PROJECTS_LIST } from '@/data/companyData';

const Index = () => {
  const { openModal } = useModal();

  const featuredProjects = [
    REGALIA_PROJECT,
    ...PROJECTS_LIST.filter(p => p.id !== 'regalia').slice(0, 5)
  ];

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

  const enhancedTestimonials = [
    {
      name: "Rajesh Patil",
      position: "Homeowner – Regalia Row Villas",
      testimonial: "We were looking for a spacious 4.5 BHK that actually felt premium. Shivaangan delivered exactly that. The quality of construction and the attention to detail is outstanding. Highly recommended."
    },
    {
      name: "Priya Deshmukh",
      position: "Investor & Business Owner",
      testimonial: "Clear titles, transparent communication, and on-time delivery. After dealing with many builders, Shivaangan Realcon stands out for their honesty and engineering standards."
    },
    {
      name: "Sandeep Jadhav",
      position: "Resident – Previous Project",
      testimonial: "From the first site visit to handover, the entire process was smooth. The structural quality and finishing is something you rarely see at this price point in Undri."
    }
  ];

  const handleViewDetails = (project: typeof PROJECTS_LIST[0]) => {
    openModal(project);
  };

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      
      {/* ========== ABOUT SECTION ========== */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">
                Leadership & Heritage
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
                About Shivaangan Realcon
              </h2>

              <p className="text-gray-600 mb-5 leading-relaxed font-medium">
                Led by visionary directors <strong className="text-gray-900">Amit Sanas</strong> and <strong className="text-gray-900">Rupesh Hande</strong>, Shivaangan Realcon has established itself as a premier name in delivering high-quality residential communities, commercial landmarks, and turnkey construction projects across Pune and Maharashtra.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With 15+ years of combined industry expertise, we bring architectural precision, ethical transparency, clear legal titles, and timely delivery to every single square foot we build.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-gray-900 font-bold hover:text-[#FF6600] transition-colors group"
                >
                  Meet Our Leadership & Story
                  <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Shivaangan%20Realcon,%20I%20would%20like%20to%20enquire%20about%20your%20projects.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 mr-1.5" />
                  Chat with Us on WhatsApp
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
              <img 
                src="/images/lead.png" 
                alt="About Shivaangan Realcon" 
                className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gray-900 text-white p-8 rounded-3xl shadow-2xl max-w-xs border border-[#FF6600]/30 transform hover:-translate-y-2 transition-transform">
                <p className="font-black text-4xl text-[#FF6600] mb-1">15+</p>
                <p className="text-sm text-gray-300 font-medium leading-snug">
                  Years of Engineering Excellence & CREDAI Leadership
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FLAGSHIP REGALIA BANNER ========== */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF6600]/20 via-gray-900 to-gray-900"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="inline-flex items-center gap-2 bg-[#FF6600]/20 text-[#FF6600] border border-[#FF6600]/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                FLAGSHIP RESIDENTIAL LANDMARK
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                REGALIA ROW VILLAS<br />
                <span className="text-[#FF6600]">BY SHIVAANGAN</span>
              </h2>

              <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
                Experience ultra-luxurious <strong className="text-white">4.5 BHK Row Villas</strong> in Undri. Featuring private gardens, Vastu-compliant layouts, earthquake-resistant RCC frame engineering, and 20+ lifestyle amenities.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10 text-xs font-bold text-[#FF6600]">
                <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm shadow-sm">4.5 BHK Ultra Luxury</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm shadow-sm">Prime Undri Location</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm shadow-sm">Private Gardens</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm shadow-sm">24×7 Smart Security</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/regalia"
                  className="bg-[#FF6600] hover:bg-[#e65c00] text-white py-3.5 px-8 rounded-md text-sm uppercase tracking-wider font-bold flex items-center gap-2 shadow-lg transition-transform hover:-translate-y-1"
                >
                  View REGALIA Details & Brochure
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-md text-sm font-bold flex items-center gap-2 transition-all border border-white/20 hover:border-white/40"
                >
                  <Phone className="w-4 h-4 text-[#FF6600]" />
                  Call Sales Desk: {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 relative group">
                <div className="absolute inset-0 bg-[#FF6600]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src="/images/regalia.png" 
                  alt="REGALIA Row Villas Flagship Project" 
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ========== SERVICES SECTION ========== */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">
              Engineering Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
              A complete suite of construction, real estate development, and turnkey engineering services — designed for homeowners, investors, and institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#FF6600]/50 hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="bg-gray-50 text-[#FF6600] p-4 rounded-xl inline-block mb-6 border border-gray-100">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ========== FEATURED PROJECTS ========== */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 animate-fade-in">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">
                Delivered & Ongoing Landmarks
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
                Featured Projects
              </h2>
              <p className="text-gray-600 mt-4 max-w-lg text-sm md:text-base leading-relaxed">
                Explore our carefully crafted residential and commercial landmarks across Maharashtra.
              </p>
            </div>
            <Link 
              to="/projects" 
              className="inline-flex items-center text-gray-900 font-bold hover:text-[#FF6600] transition-colors group bg-gray-50 px-6 py-3 rounded-full border border-gray-200 hover:border-[#FF6600]/30"
            >
              View All 14+ Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in transition-all duration-500 hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden bg-white border border-gray-100"
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
        </div>
      </section>
      
      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-gray-900"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">
              The Shivaangan Promise
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
              Why Choose Us
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-base leading-relaxed">
              Built on engineering excellence, transparency, and a proven track record of delivering quality homes and commercial spaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "CREDAI Leadership",
                desc: "Headed by Er. Rahul Khatmode, President of CREDAI Undri, ensuring highest industry ethics."
              },
              {
                icon: Shield,
                title: "Structural Precision",
                desc: "Civil engineering expertise ensures IS code seismic compliance and zero material compromises."
              },
              {
                icon: Building2,
                title: "Clear Legal Titles",
                desc: "100% clear titles, RERA compliance, and transparent documentation for hassle-free home loans."
              },
              {
                icon: CheckCircle2,
                title: "Timely Delivery",
                desc: "Proven track record of delivering 1,200+ homes and commercial units on time across 15+ years."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 p-8 rounded-3xl text-center backdrop-blur-md border border-white/10 hover:border-[#FF6600]/50 hover:bg-white/10 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="bg-gray-800 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg transition-colors duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ========== TESTIMONIALS ========== */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
              Real stories from homeowners and partners who trusted Shivaangan Realcon with their biggest investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enhancedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-fade-in hover:-translate-y-2 transition-transform duration-300"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full relative">
                  <div className="text-[#FF6600] mb-4 opacity-20 absolute top-6 right-8">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 relative z-10 italic">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="mt-auto">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs text-[#FF6600] font-bold uppercase tracking-wider mt-1">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ========== CTA STRIP ========== */}
      <section className="py-20 bg-[#FF6600] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-in">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black mb-3">Ready to Start Your Next Project?</h2>
              <p className="text-white/90 text-sm md:text-base font-medium">
                Contact us today to schedule a site visit or discuss your real estate & construction needs.
              </p>
            </div>
            <Link 
              to="/contact"
              className="bg-white text-[#FF6600] hover:bg-gray-100 py-4 px-10 rounded-md font-bold transition-all shadow-xl hover:scale-105 whitespace-nowrap flex-shrink-0"
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
