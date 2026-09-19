import React from 'react';
import { 
  CheckCircle2, Award, Users, Calendar, Target, 
  TrendingUp, ShieldCheck, Building2, Phone, MessageCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/data/companyData';

const About = () => {
  // Company stats
  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Sq. Ft. Built & Delivered", value: "10L+" },
    { label: "Happy Families", value: "1,200+" },
    { label: "Landmark Projects", value: "14+" }
  ];

  // Core values
  const coreValues = [
    {
      title: "Quality Engineering",
      description: "We are committed to delivering the highest structural quality, using IS code certified materials and seismic-resistant techniques.",
      icon: Award
    },
    {
      title: "Integrity & Transparency",
      description: "We conduct our business with 100% legal clarity, RERA compliance, and ethical practices in all our dealings.",
      icon: CheckCircle2
    },
    {
      title: "Client Centricity",
      description: "We believe in working closely with homebuyers and business investors, understanding their needs, and bringing their vision to life.",
      icon: Users
    },
    {
      title: "Innovative Architecture",
      description: "We continuously integrate modern elevation aesthetics, rooftop lifestyle amenities, and green building techniques.",
      icon: TrendingUp
    },
    {
      title: "Reliability & Timelines",
      description: "We take pride in our consistent delivery on time, maintaining our 15-year reputation for timely project handovers.",
      icon: Calendar
    },
    // {
    //   title: "CREDAI Leadership",
    //   description: "Under the leadership of Er. Rahul Khatmode, President of CREDAI Undri, we uphold the highest industry benchmarks.",
    //   icon: Target
    // }
  ];

  // Timeline events
  const timeline = [
    { year: "2010-11", title: "Dattakala College of Engineering", desc: "Completed 52,000 sq. ft. turnkey institutional civil contracting milestone." },
    { year: "2013-14", title: "Kalamb Art & Science College & Ambalika Sugar", desc: "Executed educational campus and heavy industrial foundations." },
    { year: "2014-15", title: "Nirmiti Park & Nirmiti Capital", desc: "Delivered 74 residential flats (74K sq.ft) & 15.3K sq.ft commercial space near VP Engineering College Undri." },
    { year: "2017-18", title: "Vrundavan Park Phase 1 & Nirmiti Vihar Phase 1", desc: "Delivered 60 flats + 84 flats & commercial shops in Undri & Rui." },
    { year: "2022-23", title: "Vrundavan Park Phase 2 & Vrundavan Commercial", desc: "Launched Phase 2 development (70 flats) and commercial shopping arcade." },
    { year: "2023-24", title: "Durga City Mall, K-Square & Nirmiti Vihar Phase 2", desc: "Constructed Undri's premier 100K sq.ft Durga City Mall, K-Square MIDC commercial complex, and 112 flats." },
    { year: "2024-2026", title: "REGALIA Flagship Landmark", desc: "Unveiling ultra-luxury 2 & 3 BHK residential & commercial icon." },
    { year: "2026-2027", title: "Shree Heights", desc: "Constructing Fine 2 & 3 BHK residential icon in Baramati." }
  ];

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Hero Section - Enlarged and Brightened */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[65vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: 'url(/images/building5.png)' }}
        >
          {/* Bright white gradient overlay instead of a black shadow/tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/10 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 w-full">
          <div className="max-w-2xl text-left">
            <span className="text-sm font-bold text-[#FF6600] uppercase tracking-widest block mb-3 animate-fade-in">
              About Shivaangan Realcon
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              About <span className="text-[#FF6600]">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed animate-fade-in max-w-xl" style={{ animationDelay: '200ms' }}>
              Building excellence through civil engineering precision, quality construction, and 15+ years of dedicated client trust.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">Leadership & Heritage</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a strong commitment to quality and transparency, <strong className="text-gray-900">Shivaangan Realcon</strong> has established itself as a premier name in delivering residential communities, commercial hubs, and turnkey civil infrastructure across Pune and Undri.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the past 15+ years, our leadership has built a formidable reputation based on structural engineering integrity, clear legal titles, timely project completions, and deep-rooted customer trust.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, operating from our central Pune corporate office at VTP Trade Park, Undri, we continue to craft architectural landmarks that elevate urban living and business growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${COMPANY_INFO.director.phone}`}
                  className="bg-[#FF6600] hover:bg-[#e65c00] text-white px-6 py-3.5 rounded-md text-sm font-bold flex items-center gap-2 shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Office: {COMPANY_INFO.director.phone}
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Shivaangan%20Realcon,%20I%20would%20like%20to%20connect%20with%20your%20team.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-md text-sm font-bold flex items-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Direct
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '400ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" 
                alt="Shivaangan Realcon Story" 
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-gray-900 text-white p-6 rounded-xl shadow-2xl border border-[#FF6600]/40 transform hover:-translate-y-2 transition-transform">
                <p className="font-black text-3xl text-[#FF6600] mb-1">15+ Years</p>
                <p className="text-xs font-medium text-gray-300 uppercase tracking-wider">Excellence in Real Estate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors & Leadership Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">
              Executive Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block mt-2">
              Board of Directors
            </h2>
            <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
              Meet the visionary minds driving Shivaangan Realcon's strategic excellence, architectural innovation, and customer-first ethos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {COMPANY_INFO.directors?.map((director, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-[#FF6600]/50 transition-all duration-300 flex flex-col group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Increased height to h-[22rem] md:h-96 and changed object position to top to fix "zoomed-in" look */}
                <div className="relative h-[22rem] md:h-96 overflow-hidden bg-gray-200">
                  <img 
                    src={index === 0 ? '/images/a2.png' : index === 1 ? '/images/b2.png' : director.image} 
                    alt={director.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80"></div>
                  <div className="absolute bottom-5 left-6">
                    <span className="bg-[#FF6600] text-white text-xs uppercase tracking-wider font-bold px-4 py-1.5 rounded-full shadow-md">
                      {director.title}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6600] transition-colors">
                      {director.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {director.bio}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span>Shivaangan Realcon</span>
                    <a
                      href={`tel:${COMPANY_INFO.director.phone}`}
                      className="text-[#FF6600] hover:text-gray-900 font-bold transition-colors"
                    >
                      Connect: {COMPANY_INFO.director.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="text-4xl md:text-5xl font-black mb-3 text-[#FF6600] drop-shadow-md">{stat.value}</p>
                <p className="text-gray-300 text-sm font-semibold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">Guiding Principles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block mt-2">Our Core Values</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              These principles guide every engineering decision we make and every project we undertake, ensuring consistent quality and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#FF6600]/50 hover:-translate-y-2 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gray-900 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white p-4 rounded-xl inline-block mb-6 shadow-sm transition-colors duration-300">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#FF6600] transition-colors">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15-Year Project Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">Track Record</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block mt-2">15-Year Development Milestone</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col sm:flex-row gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-200 items-start hover:border-[#FF6600]/50 hover:shadow-lg transition-all animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-900 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors font-black text-sm px-5 py-2.5 rounded-lg shrink-0 shadow-sm">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF6600] transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#FF6600] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-in">
            <div className="mb-6 md:mb-0 max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Ready to Work With Us?</h2>
              <p className="mt-3 text-white/90 text-sm md:text-base font-medium">Let's discuss how we can bring your construction or property investment vision to life.</p>
            </div>
            <Link 
              to="/contact"
              className="bg-white text-[#FF6600] hover:bg-gray-100 py-4 px-10 rounded-md font-bold transition-all shadow-lg hover:scale-105 whitespace-nowrap"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;