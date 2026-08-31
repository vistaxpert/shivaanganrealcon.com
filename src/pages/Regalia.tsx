import React, { useState } from 'react';
import { COMPANY_INFO, REGALIA_PROJECT, ProjectItem } from '@/data/companyData';
import { 
  Building2, CheckCircle2, ShieldCheck, Download, MapPin, 
  Sparkles, Phone, MessageCircle, ArrowRight, FileText, Compass, Key
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { toast } from 'sonner';

const Regalia = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'specifications' | 'plans' | 'location'>('overview');
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochurePhone, setBrochurePhone] = useState('');

  const handleBrochureDownload = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! REGALIA E-Brochure download link has been sent to your email & WhatsApp.");
    setShowBrochureModal(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header Banner */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-shivaangan-navy overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: `url(${REGALIA_PROJECT.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-shivaangan-dark via-shivaangan-navy/90 to-shivaangan-dark/80"></div>
        </div>

        <div className="container-custom relative z-10 text-white pt-28 pb-16 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-shivaangan-gold/20 border border-shivaangan-gold/50 text-shivaangan-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              Flagship Luxury Landmark Project
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
              REGALIA <span className="gold-gradient-text">BY SHIVAANGAN</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-200 mb-6 font-light">
              {REGALIA_PROJECT.units} in {REGALIA_PROJECT.location}
            </p>

            <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {REGALIA_PROJECT.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <button
                onClick={() => setShowBrochureModal(true)}
                className="btn-gold py-3.5 px-8 text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20"
              >
                <Download className="w-4 h-4 text-shivaangan-navy" />
                Download E-Brochure
              </button>
              <a
                href="#enquiry-form"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white py-3.5 px-8 rounded-md text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Key className="w-4 h-4 text-shivaangan-gold" />
                Book Priority Site Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Specs Strip */}
      <section className="bg-shivaangan-navy text-white border-y border-shivaangan-gold/30 py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r border-white/10 last:border-0 pr-4">
              <p className="text-xs text-shivaangan-gold uppercase tracking-widest font-bold mb-1">Configuration</p>
              <p className="text-base md:text-lg font-bold text-white">2 & 3 BHK Luxury Residences</p>
            </div>
            <div className="border-r border-white/10 last:border-0 pr-4">
              <p className="text-xs text-shivaangan-gold uppercase tracking-widest font-bold mb-1">Development Area</p>
              <p className="text-base md:text-lg font-bold text-white">{REGALIA_PROJECT.area}</p>
            </div>
            <div className="border-r border-white/10 last:border-0 pr-4">
              <p className="text-xs text-shivaangan-gold uppercase tracking-widest font-bold mb-1">Location</p>
              <p className="text-base md:text-lg font-bold text-white">{REGALIA_PROJECT.location}</p>
            </div>
            <div>
              <p className="text-xs text-shivaangan-gold uppercase tracking-widest font-bold mb-1">Structural Assurance</p>
              <p className="text-base md:text-lg font-bold text-white">IS Code Seismic Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Showcase */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 border-b border-gray-200 pb-4">
            {[
              { id: 'overview', label: 'Overview & Highlights', icon: FileText },
              { id: 'amenities', label: 'Amenities', icon: Building2 },
              { id: 'specifications', label: 'Specifications', icon: ShieldCheck },
              { id: 'plans', label: 'Floor & Master Plan', icon: Compass },
              { id: 'location', label: 'Location Map', icon: MapPin },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-5 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-shivaangan-navy text-shivaangan-gold shadow-lg shadow-shivaangan-navy/20 border-b-2 border-shivaangan-gold'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100 mb-16">
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="section-title">The Essence of REGALIA</h2>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    REGALIA stands as the pinnacle of refined real estate development in Baramati. Built by Er. Rahul Khatmode & Shivaangan Realcon, every inch of REGALIA is planned to maximize natural ventilation, spatial grandeur, structural longevity, and community wellbeing.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {REGALIA_PROJECT.highlights?.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-shivaangan-lightgray rounded-xl border border-gray-200">
                      <div className="w-8 h-8 rounded-full bg-shivaangan-gold text-shivaangan-navy flex items-center justify-center font-bold text-sm shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-shivaangan-navy font-semibold text-sm leading-snug">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'amenities' && (
              <div className="animate-fade-in">
                <h2 className="section-title">World-Class Lifestyle Amenities</h2>
                <p className="text-gray-600 mb-8">Designed to enrich every stage of life for adults, children, and senior citizens.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {REGALIA_PROJECT.amenities?.map((amenity, index) => (
                    <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-shivaangan-gold transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-shivaangan-gold mb-3" />
                      <h4 className="font-bold text-shivaangan-navy text-sm mb-1">{amenity}</h4>
                      <p className="text-xs text-gray-500">Built to international lifestyle standards</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="animate-fade-in">
                <h2 className="section-title">Technical & Engineering Specifications</h2>
                <p className="text-gray-600 mb-8">Er. Rahul Khatmode (B.E. Civil) leadership guarantees structural integrity and zero material compromises.</p>

                <div className="space-y-4">
                  {REGALIA_PROJECT.specifications?.map((spec, index) => {
                    const [title, details] = spec.split(':');
                    return (
                      <div key={index} className="p-5 bg-shivaangan-lightgray rounded-xl border border-gray-200">
                        <h4 className="font-bold text-shivaangan-navy text-base mb-1">{title}</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{details}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'plans' && (
              <div className="animate-fade-in">
                <h2 className="section-title">Floor Plans & Master Layout</h2>
                <p className="text-gray-600 mb-8">Efficient Vastu-compliant architecture with maximum carpet area usability.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {REGALIA_PROJECT.floorPlans.map((plan, index) => (
                    <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <img src={plan.image} alt={plan.name} className="w-full h-64 object-cover rounded-lg mb-4 shadow-md" />
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-bold text-shivaangan-navy text-lg">{plan.name}</h4>
                          <p className="text-sm text-shivaangan-gold font-semibold">{plan.size}</p>
                        </div>
                        <button 
                          onClick={() => setShowBrochureModal(true)}
                          className="btn-primary text-xs py-2 px-4"
                        >
                          Request HD Plan
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-shivaangan-navy text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Master Layout Plan</h3>
                  <img src={REGALIA_PROJECT.masterPlan} alt="REGALIA Master Plan" className="w-full h-80 object-cover rounded-lg border border-shivaangan-gold/30 mb-4" />
                  <p className="text-xs text-gray-300">Layout includes ample green buffer zone, wide internal paved roads, and visitor parking.</p>
                </div>
              </div>
            )}

            {activeTab === 'location' && (
              <div className="animate-fade-in">
                <h2 className="section-title">Location Advantages</h2>
                <p className="text-gray-600 mb-8">Situated in the most desirable residential growth corridor of Baramati.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {REGALIA_PROJECT.locationHighlights.map((point, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <MapPin className="w-5 h-5 text-shivaangan-gold shrink-0" />
                        <span className="text-sm font-semibold text-shivaangan-navy">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl overflow-hidden shadow-lg h-72 border border-gray-300">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15160.038475878864!2d74.57790382348002!3d18.1565578761271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a027918cae7d%3A0x868478ff0f71fa84!2sBaramati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1745232072423!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="REGALIA Location Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Lead Enquiry Form Section */}
          <div id="enquiry-form" className="scroll-mt-32">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-shivaangan-gold uppercase tracking-widest">Priority Booking & Site Visit</span>
              <h2 className="text-3xl md:text-4xl font-black text-shivaangan-navy mt-2">Enquire For REGALIA</h2>
              <p className="text-gray-600 mt-2 max-w-xl mx-auto">Get transparent pricing, floor plan consultation, and home loan assistance from our executive team.</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Download Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 bg-shivaangan-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-shivaangan-gold/30">
            <h3 className="text-2xl font-bold text-shivaangan-navy mb-2">Download REGALIA E-Brochure</h3>
            <p className="text-xs text-gray-600 mb-6">Enter your contact details to instantly receive the PDF brochure and pricing list.</p>
            
            <form onSubmit={handleBrochureDownload} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-shivaangan-navy mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={brochureEmail}
                  onChange={(e) => setBrochureEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-shivaangan-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-shivaangan-navy mb-1">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  value={brochurePhone}
                  onChange={(e) => setBrochurePhone(e.target.value)}
                  placeholder="+91 97679 00555"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-shivaangan-gold"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowBrochureModal(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-gold py-2.5 text-sm uppercase tracking-wider font-bold"
                >
                  Get Brochure
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Regalia;
