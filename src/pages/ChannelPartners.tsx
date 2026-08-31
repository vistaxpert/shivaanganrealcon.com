import React, { useState } from 'react';
import { 
  Building2, 
  Handshake, 
  ShieldCheck, 
  Award, 
  Send, 
  CheckCircle2, 
  FileText, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Users, 
  TrendingUp, 
  BadgePercent,
  MapPin
} from 'lucide-react';
import { toast } from 'sonner';
import { COMPANY_INFO, PROJECTS_LIST } from '@/data/companyData';
import { Link } from 'react-router-dom';

interface ChannelPartnerFormData {
  companyName: string;
  officeAddress: string;
  ownerName: string;
  ownerMobile: string;
  executiveName: string;
  executiveMobile: string;
  email: string;
  reraNumber: string;
  operationalRegion: string;
  workingArea: string;
  preferredProject: string;
  gstNumber: string;
  panNumber: string;
  website: string;
  agreedToTerms: boolean;
}

const initialFormData: ChannelPartnerFormData = {
  companyName: '',
  officeAddress: '',
  ownerName: '',
  ownerMobile: '',
  executiveName: '',
  executiveMobile: '',
  email: '',
  reraNumber: '',
  operationalRegion: '',
  workingArea: '',
  preferredProject: 'All Shivaangan Projects',
  gstNumber: '',
  panNumber: '',
  website: '',
  agreedToTerms: false,
};

const ChannelPartners: React.FC = () => {
  const [formData, setFormData] = useState<ChannelPartnerFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      toast.error('Please accept the Channel Partner Terms & Conditions to proceed.');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Channel Partner Registration submitted:', formData);
      toast.success('Registration submitted successfully! Our Channel Partner Desk will connect with you shortly.');
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Shivaangan Realcon CP Desk,\nI have registered as a Channel Partner.\nAgency: ${formData.companyName || 'N/A'}\nOwner: ${formData.ownerName || 'N/A'}\nMobile: ${formData.ownerMobile || 'N/A'}\nRERA: ${formData.reraNumber || 'N/A'}\nRegion: ${formData.operationalRegion || 'N/A'}`
  );

  // Benefits list
  const benefits = [
    {
      icon: BadgePercent,
      title: "Attractive & Timely Brokerage",
      desc: "Lucrative commission slabs with transparent and predictable payout release schedules."
    },
    {
      icon: Award,
      title: "CREDAI Baramati Backing",
      desc: "Direct leadership of Er. Rahul Khatmode, President CREDAI Baramati, guaranteeing utmost ethical dealing."
    },
    {
      icon: Users,
      title: "Dedicated CP Desk & RM",
      desc: "Single-point relationship managers for priority site visits, customer pick-ups, and negotiation support."
    },
    {
      icon: FileText,
      title: "High-Impact Marketing Kit",
      desc: "Instant access to digital brochures, 3D renders, video walkthroughs, and customized co-branded collaterals."
    },
    {
      icon: ShieldCheck,
      title: "100% Clear Titles & Bank Tie-ups",
      desc: "RERA registered projects with leading national bank approvals ensuring fast loan sanctioning for your clients."
    },
    {
      icon: TrendingUp,
      title: "Exclusive Launch Access",
      desc: "First-look inventory and pre-launch pricing advantages on flagship developments like REGALIA."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-construction-navy text-white pt-28 md:pt-36 pb-20 md:pb-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-shivaangan-dark/95 via-shivaangan-navy/90 to-shivaangan-dark/80"></div>
        
        <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-shivaangan-amber/20 border border-shivaangan-amber/40 text-shivaangan-amber px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
            <Handshake className="w-4 h-4 text-shivaangan-amber" />
            Strategic Business Alliance
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
            Join Us as a <span className="gold-gradient-text">Channel Partner</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Partner with <strong className="text-white font-semibold">Shivaangan Realcon</strong>. Grow your real estate network and monetize high-demand residential and commercial projects across Pune and Baramati.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-gray-300">
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/20 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-shivaangan-amber" /> Fast Commission Release
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/20 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-shivaangan-amber" /> Direct Lead Protection
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full border border-white/20 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-shivaangan-amber" /> Flagship Project REGALIA
            </span>
          </div>
        </div>
      </section>

      {/* CP Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">
              Why Partner With Us
            </span>
            <h2 className="section-title inline-block mt-2">
              Empowering Our Channel Partners
            </h2>
            <p className="text-construction-gray mt-4 text-sm md:text-base leading-relaxed">
              We treat our channel partners as integral pillars of our sales growth, providing unmatched support, transparent communication, and industry-best reward systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-slate-50 p-8 rounded-2xl border border-gray-200/80 hover:border-shivaangan-amber/60 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="bg-construction-navy text-shivaangan-amber group-hover:bg-shivaangan-terracotta group-hover:text-white p-4 rounded-xl inline-block mb-5 transition-colors duration-300 shadow-sm">
                    <benefit.icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-shivaangan-charcoal group-hover:text-shivaangan-terracotta transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Partner Form Section */}
      <section className="section-padding bg-construction-lightgray" id="registration-form">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">
              Onboarding Form
            </span>
            <h2 className="section-title inline-block mt-2">
              Channel Partner Registration
            </h2>
            <p className="text-construction-gray mt-4 text-sm max-w-2xl mx-auto">
              Please provide your agency, MahaRERA, and contact details below. Our Channel Partner Desk will verify and activate your partner portal.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-3xl shadow-xl border border-gray-200">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-shivaangan-charcoal mb-3">
                  Registration Received Successfully!
                </h3>
                <p className="text-gray-600 max-w-lg mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                  Thank you for registering with <strong>Shivaangan Realcon</strong>. Our dedicated Channel Partner Manager will reach out to you within 24 hours with project kits and agreement documentation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData(initialFormData);
                    }}
                    className="btn-primary text-sm py-3 px-8 font-bold"
                  >
                    Register Another Agency / Firm
                  </button>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-md text-sm flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Connect via WhatsApp Desk
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section 1: Firm / Agency Information */}
                <div>
                  <h3 className="text-lg font-bold text-shivaangan-charcoal mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-shivaangan-terracotta" />
                    Firm & Business Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        Company / Agency Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Realtors & Associates"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="officeAddress" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        Office Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="officeAddress"
                        name="officeAddress"
                        required
                        value={formData.officeAddress}
                        onChange={handleChange}
                        placeholder="e.g. Office No. 402, Business Bay, Kothrud, Pune"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Owner & Key Contact Details */}
                <div>
                  <h3 className="text-lg font-bold text-shivaangan-charcoal mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                    <Users className="w-5 h-5 text-shivaangan-terracotta" />
                    Key Personnel & Contacts
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="ownerName" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        Owner's / Principal Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="ownerName"
                        name="ownerName"
                        required
                        value={formData.ownerName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="ownerMobile" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        Owner Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="ownerMobile"
                        name="ownerMobile"
                        required
                        pattern="[6-9][0-9]{9}"
                        maxLength={10}
                        value={formData.ownerMobile}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="executiveName" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        Executive / Manager Name
                      </label>
                      <input
                        type="text"
                        id="executiveName"
                        name="executiveName"
                        value={formData.executiveName}
                        onChange={handleChange}
                        placeholder="e.g. Amit Patil"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="executiveMobile" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        Executive Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="executiveMobile"
                        name="executiveMobile"
                        pattern="[6-9][0-9]{9}"
                        maxLength={10}
                        value={formData.executiveMobile}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@apexrealtors.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="reraNumber" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        MahaRERA Registration No. <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="reraNumber"
                        name="reraNumber"
                        required
                        maxLength={16}
                        value={formData.reraNumber}
                        onChange={handleChange}
                        placeholder="e.g. A52100012345"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm uppercase transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Operational Regions & Focus Projects */}
                <div>
                  <h3 className="text-lg font-bold text-shivaangan-charcoal mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-shivaangan-terracotta" />
                    Operations & Target Projects
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="operationalRegion" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        Primary Operational Region <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="operationalRegion"
                        name="operationalRegion"
                        required
                        value={formData.operationalRegion}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm text-shivaangan-charcoal transition-all"
                      >
                        <option value="">Select Operational Region</option>
                        <option value="Baramati & Rural Pune">Baramati & Rural Pune</option>
                        <option value="East Of Pune">East Of Pune (Hadapsar, Kharadi, Wagholi)</option>
                        <option value="West Of Pune">West Of Pune (Kothrud, Baner, Wakad, Hinjewadi)</option>
                        <option value="South Of Pune">South Of Pune (Kondhwa, Undri, Katraj)</option>
                        <option value="North Of Pune">North Of Pune (Viman Nagar, Dhanori, Airport)</option>
                        <option value="Complete Pune">Complete Pune Region</option>
                        <option value="Pimpri Chinchwad">PCMC (Pimpri-Chinchwad)</option>
                        <option value="Solapur & Rest of Maharashtra">Solapur / Satara / Rest of Maharashtra</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="workingArea" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        Specific Localities / Focus Areas <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="workingArea"
                        name="workingArea"
                        required
                        value={formData.workingArea}
                        onChange={handleChange}
                        placeholder="e.g. Baramati MIDC, Kothrud, Katraj, Hadapsar"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredProject" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        Preferred Project to Promote <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="preferredProject"
                        name="preferredProject"
                        required
                        value={formData.preferredProject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm text-shivaangan-charcoal transition-all font-medium"
                      >
                        <option value="All Shivaangan Projects">All Shivaangan Realcon Projects</option>
                        <option value="REGALIA (Baramati) - Ultra Luxury 2 & 3 BHK">
                          REGALIA (Baramati) - Ultra Luxury 2 & 3 BHK
                        </option>
                        <option value="Durga City Mall - Commercial Retail & Food Court">
                          Durga City Mall - Mega Commercial Hub
                        </option>
                        <option value="Nirmiti Vihar Phase 2 - 112 Luxury Flats">
                          Nirmiti Vihar Phase 2 (MIDC Baramati)
                        </option>
                        <option value="Vrundavan Park Phase 2 - 70 Premium Flats">
                          Vrundavan Park Phase 2 (Kasaba Baramati)
                        </option>
                        <option value="K-Square Commercial Building">
                          K-Square Commercial (MIDC Baramati)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        Website or Social Handle (Optional)
                      </label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="e.g. www.apexrealtors.in or Instagram link"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="gstNumber" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        GST Number (Optional)
                      </label>
                      <input
                        type="text"
                        id="gstNumber"
                        name="gstNumber"
                        maxLength={15}
                        value={formData.gstNumber}
                        onChange={handleChange}
                        placeholder="15-digit GSTIN (if registered)"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm uppercase transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="panNumber" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1.5">
                        PAN Number (Optional)
                      </label>
                      <input
                        type="text"
                        id="panNumber"
                        name="panNumber"
                        maxLength={10}
                        value={formData.panNumber}
                        onChange={handleChange}
                        placeholder="10-digit PAN (Firm or Individual)"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-shivaangan-amber text-sm uppercase transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 4: Terms & Conditions Agreement */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-gray-200">
                    <input
                      type="checkbox"
                      id="agreedToTerms"
                      name="agreedToTerms"
                      required
                      checked={formData.agreedToTerms}
                      onChange={handleChange}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-shivaangan-terracotta focus:ring-shivaangan-amber cursor-pointer"
                    />
                    <label htmlFor="agreedToTerms" className="text-xs text-gray-700 leading-relaxed cursor-pointer select-none">
                      I have read, understood, and agree to the <strong>Channel Partner Terms & Conditions</strong> outlined below. I confirm that all the information provided above is accurate and valid as per MahaRERA norms.
                    </label>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto btn-primary py-4 px-12 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Submitting Registration...' : 'Submit Channel Partner Application'}
                  </button>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Shivaangan%20Realcon,%20I%20want%20to%20enquire%20about%20Channel%20Partner%20Tie-up.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-md text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Instant CP Desk WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section (From Template HTML) */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">
              Policies & Norms
            </span>
            <h2 className="section-title inline-block mt-2">
              Terms &amp; Conditions
            </h2>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-gray-200/80 space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="bg-construction-navy text-shivaangan-amber text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <p>
                <strong>Pricing Guidance:</strong> Minimum price of the said Units will be informed to Channel Partners from time to time and they shall arrange to sell the said Units above or at the said minimum prices.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-construction-navy text-shivaangan-amber text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <p>
                <strong>Non-Exclusive Engagement:</strong> The arrangement is strictly non-exclusive i.e. there will be other Channel Partners working for us and other group entities of Shivaangan Realcon.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-construction-navy text-shivaangan-amber text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <p>
                <strong>Accuracy & Representation:</strong> The channel partner shall be fully responsible and liable for any incorrect information or unauthorized commitments given to clients on our behalf.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-construction-navy text-shivaangan-amber text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                4
              </span>
              <p>
                <strong>Brokerage Computation:</strong> Channel Partners will be entitled to commission computed on the basic price of the Unit (i.e. excluding Infrastructure Development Charges, stamp duty, registration fees, GST, legal charges, extra amenities, car parking, society formation charges, maintenance charges or any other statutory/government fees).
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-construction-navy text-shivaangan-amber text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                5
              </span>
              <p>
                <strong>Site Visits & Client Attendance:</strong> Channel Partners compulsorily have to accompany their clients right from the initial site visit and all subsequent visits for valid lead logging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Desk Banner */}
      <section className="py-16 bg-gradient-to-r from-shivaangan-terracotta to-shivaangan-amber text-white">
        <div className="container-custom max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black mb-2">
                Need Immediate Channel Partner Assistance?
              </h2>
              <p className="text-white/90 text-sm sm:text-base">
                Call our direct Channel Partner Relationship desk or reach out to our Baramati / Pune headquarters.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href={`tel:${COMPANY_INFO.director.phone}`}
                className="bg-white text-shivaangan-charcoal hover:bg-gray-100 py-3.5 px-6 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
              >
                <Phone className="w-4 h-4 text-shivaangan-terracotta" />
                Call {COMPANY_INFO.director.phone}
              </a>
              <Link
                to="/contact"
                className="bg-black/20 hover:bg-black/30 border border-white/40 text-white py-3.5 px-6 rounded-lg font-bold text-sm transition-colors"
              >
                Visit Our Offices
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChannelPartners;
