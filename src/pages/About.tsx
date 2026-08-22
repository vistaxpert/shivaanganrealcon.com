import React from 'react';
import { CheckCircle2, Award, Users, Calendar, Target, TrendingUp, ShieldCheck, Building2, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/data/companyData';

const About = () => {
  // Timeline events from PDF extract
  const timeline = [
    { year: "2010-11", title: "Dattakala College of Engineering", desc: "Completed 52,000 sq. ft. turnkey institutional civil contract." },
    { year: "2013-14", title: "Kalamb Art & Science College & Ambalika Sugar", desc: "Executed educational campus and heavy industrial foundations." },
    { year: "2014-15", title: "Nirmiti Park & Nirmiti Capital", desc: "Delivered 74 residential flats (74K sq.ft) & 15.3K sq.ft commercial space near VP Engineering College Baramati." },
    { year: "2017-18", title: "Vrundavan Park Phase 1 & Nirmiti Vihar Phase 1", desc: "Delivered 60 flats + 84 flats & commercial shops in Baramati & Rui." },
    { year: "2022-23", title: "Vrundavan Park Phase 2 & Vrundavan Commercial", desc: "Launched Phase 2 development (70 flats) and commercial street." },
    { year: "2023-24", title: "Durga City Mall, K-Square & Nirmiti Vihar Phase 2", desc: "Constructed Baramati's premier 100K sq.ft Durga City Mall, K-Square MIDC commercial complex, and 112 flats." },
    { year: "2024-2026", title: "REGALIA Flagship Landmark", desc: "Unveiling ultra-luxury 2 & 3 BHK residential & commercial icon." }
  ];

  return (
    <div>
      {/* Hero Header */}
      <section className="bg-shivaangan-navy text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-shivaangan-dark via-shivaangan-navy/90 to-shivaangan-dark"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">About Our Developer Brand</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight mt-2">
              Engineering <span className="gold-gradient-text">Excellence</span> & Unshakable Trust
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              {COMPANY_INFO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profile: Er. Rahul Khatmode */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-shivaangan-lightgray">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" 
                  alt={COMPANY_INFO.director.name}
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-shivaangan-gold text-shivaangan-navy p-5 rounded-xl shadow-xl font-bold max-w-xs">
                <p className="text-sm uppercase tracking-wider">CREDAI BARAMATI</p>
                <p className="text-xs font-medium">President Leadership & Oversight</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">Director Spotlight</span>
              <h2 className="section-title mt-2">{COMPANY_INFO.director.name} ({COMPANY_INFO.director.qualification})</h2>
              
              <p className="text-gray-700 mb-4 font-semibold text-lg">
                {COMPANY_INFO.director.title}
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {COMPANY_INFO.director.bio}
              </p>

              <h4 className="font-bold text-shivaangan-navy text-sm uppercase tracking-wider mb-3">Associated Organizations & Sister Concerns:</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {COMPANY_INFO.director.entities.map((entity, index) => (
                  <div key={index} className="flex items-center gap-2.5 p-3.5 bg-shivaangan-lightgray rounded-lg border border-gray-200 text-xs font-bold text-shivaangan-navy">
                    <Building2 className="w-4 h-4 text-shivaangan-gold shrink-0" />
                    <span>{entity}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${COMPANY_INFO.director.phone}`}
                  className="btn-gold py-3 px-6 text-xs uppercase font-bold flex items-center gap-2 shadow-lg"
                >
                  <Phone className="w-4 h-4 text-shivaangan-navy" />
                  Call Office: +91 9767900555
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-6 rounded-md text-xs uppercase font-bold flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="py-16 bg-shivaangan-navy text-white border-y border-shivaangan-gold/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {COMPANY_INFO.stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-3xl md:text-5xl font-black text-shivaangan-gold mb-2">{stat.value}</p>
                <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-shivaangan-lightgray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">Our Proven Track Record</span>
            <h2 className="section-title mt-2 inline-block">15-Year Project Timeline</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 bg-white p-6 rounded-xl shadow-md border border-gray-100 items-start hover:border-shivaangan-gold transition-colors">
                <div className="bg-shivaangan-navy text-shivaangan-gold font-black text-sm px-4 py-2 rounded-lg shrink-0 border border-shivaangan-gold/30">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-shivaangan-navy mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">Guiding Principles</span>
            <h2 className="section-title mt-2 inline-block">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <Award className="w-10 h-10 text-shivaangan-gold mb-4" />
              <h3 className="text-lg font-bold text-shivaangan-navy mb-2">Uncompromising Quality</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Every structural element is inspected under civil engineering standards for earthquake safety and thermal durability.</p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <ShieldCheck className="w-10 h-10 text-shivaangan-gold mb-4" />
              <h3 className="text-lg font-bold text-shivaangan-navy mb-2">100% Legal Transparency</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Clear title deeds, sanctioned building plans, RERA registration compliance, and smooth banking tie-ups.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <Users className="w-10 h-10 text-shivaangan-gold mb-4" />
              <h3 className="text-lg font-bold text-shivaangan-navy mb-2">Customer Commitment</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Over 1,200 satisfied families trust us for timely handovers, transparent pricing, and post-possession maintenance support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
