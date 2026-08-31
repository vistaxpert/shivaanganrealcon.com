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
    {
      title: "CREDAI Leadership",
      description: "Under the leadership of Er. Rahul Khatmode, President of CREDAI Baramati, we uphold the highest industry benchmarks.",
      icon: Target
    }
  ];

  // Timeline events
  const timeline = [
    { year: "2010-11", title: "Dattakala College of Engineering", desc: "Completed 52,000 sq. ft. turnkey institutional civil contracting milestone." },
    { year: "2013-14", title: "Kalamb Art & Science College & Ambalika Sugar", desc: "Executed educational campus and heavy industrial foundations." },
    { year: "2014-15", title: "Nirmiti Park & Nirmiti Capital", desc: "Delivered 74 residential flats (74K sq.ft) & 15.3K sq.ft commercial space near VP Engineering College Baramati." },
    { year: "2017-18", title: "Vrundavan Park Phase 1 & Nirmiti Vihar Phase 1", desc: "Delivered 60 flats + 84 flats & commercial shops in Baramati & Rui." },
    { year: "2022-23", title: "Vrundavan Park Phase 2 & Vrundavan Commercial", desc: "Launched Phase 2 development (70 flats) and commercial shopping arcade." },
    { year: "2023-24", title: "Durga City Mall, K-Square & Nirmiti Vihar Phase 2", desc: "Constructed Baramati's premier 100K sq.ft Durga City Mall, K-Square MIDC commercial complex, and 112 flats." },
    { year: "2024-2026", title: "REGALIA Flagship Landmark", desc: "Unveiling ultra-luxury 2 & 3 BHK residential & commercial icon." }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-construction-navy text-white py-24 md:py-32 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")' }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">About Shivaangan Realcon</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white mt-2">About Us</h1>
            <p className="text-xl text-white/80">
              Building excellence through civil engineering precision, quality construction, and 15+ years of dedicated client trust.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">Leadership & Heritage</span>
              <h2 className="section-title mt-2">Our Story</h2>
              <p className="text-construction-gray mb-6">
                Founded with a strong commitment to quality and transparency, <strong>Shivaangan Realcon</strong> has established itself as a premier name in delivering residential communities, commercial hubs, and turnkey civil infrastructure across Pune and Baramati.
              </p>
              <p className="text-construction-gray mb-6">
                Over the past 15+ years, our leadership has built a formidable reputation based on structural engineering integrity, clear legal titles, timely project completions, and deep-rooted customer trust.
              </p>
              <p className="text-construction-gray mb-6">
                Today, operating from our central Pune corporate office at VTP Trade Park, Undri, we continue to craft architectural landmarks that elevate urban living and business growth.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.director.phone}`}
                  className="btn-primary inline-flex items-center gap-2 text-sm font-bold"
                >
                  <Phone className="w-4 h-4" />
                  Call Office: {COMPANY_INFO.director.phone}
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Shivaangan%20Realcon,%20I%20would%20like%20to%20connect%20with%20your%20team.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-md text-sm font-bold flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Direct
                </a>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" 
                alt="Shivaangan Realcon Story" 
                className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-construction-navy text-white p-5 rounded-xl shadow-lg border border-shivaangan-amber/40">
                <p className="font-black text-2xl text-shivaangan-amber">15+ Years</p>
                <p className="text-xs font-semibold text-gray-200">Excellence in Real Estate & Construction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors & Leadership Section */}
      <section className="section-padding bg-slate-50 border-y border-gray-200">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">
              Executive Leadership
            </span>
            <h2 className="section-title inline-block mt-2">
              Board of Directors
            </h2>
            <p className="text-construction-gray mt-4 text-sm md:text-base leading-relaxed">
              Meet the visionary minds driving Shivaangan Realcon's strategic excellence, architectural innovation, and customer-first ethos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {COMPANY_INFO.directors?.map((director, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-shivaangan-amber/60 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-80 overflow-hidden bg-slate-100">
                  <img 
                    src={director.image} 
                    alt={director.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-6">
                    <span className="bg-shivaangan-amber text-shivaangan-charcoal text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-md">
                      {director.title}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-shivaangan-charcoal mb-2">
                      {director.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {director.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-semibold">
                    <span>Shivaangan Realcon</span>
                    <a
                      href={`tel:${COMPANY_INFO.director.phone}`}
                      className="text-shivaangan-terracotta hover:underline font-bold"
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
      <section className="py-16 bg-construction-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                <p className="text-3xl md:text-4xl font-black mb-2 text-shivaangan-amber">{stat.value}</p>
                <p className="text-white/90 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="section-padding bg-construction-lightgray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">Guiding Principles</span>
            <h2 className="section-title inline-block mt-2">Our Core Values</h2>
            <p className="text-construction-gray mt-4 max-w-2xl mx-auto text-sm">
              These principles guide every engineering decision we make and every project we undertake, ensuring consistent quality and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-shivaangan-amber transition-all">
                  <div className="bg-construction-navy text-shivaangan-amber p-4 rounded-xl inline-block mb-4 shadow-sm">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-shivaangan-charcoal">{value.title}</h3>
                  <p className="text-construction-gray text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15-Year Project Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">Track Record</span>
            <h2 className="section-title inline-block mt-2">15-Year Development Milestone</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 p-6 bg-construction-lightgray rounded-xl border border-gray-200 items-start hover:border-shivaangan-amber transition-colors">
                <div className="bg-construction-navy text-shivaangan-amber font-black text-sm px-4 py-2 rounded-lg shrink-0">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-shivaangan-charcoal mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-shivaangan-terracotta to-shivaangan-amber text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-black">Ready to Work With Us?</h2>
              <p className="mt-2 text-white/90 text-sm md:text-base">Let's discuss how we can bring your construction or property investment vision to life.</p>
            </div>
            <Link 
              to="/contact"
              className="bg-white text-shivaangan-terracotta hover:bg-white/90 py-3.5 px-8 rounded-md font-bold transition-all shadow-lg hover:scale-105"
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
