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
  Users, 
  TrendingUp, 
  BadgePercent,
  MapPin
} from 'lucide-react';
import { toast } from 'sonner';
import { COMPANY_INFO } from '@/data/companyData';
import { Link } from 'react-router-dom';

interface ChannelPartnerFormData {
  companyName: string;
  officeAddress: string;
  ownerName: string;
  ownerMobile: string;
  email: string;
  reraNumber: string;
  operationalRegion: string;
  workingArea: string;
  preferredProject: string;
  website: string;
  agreedToTerms: boolean;
}

const initialFormData: ChannelPartnerFormData = {
  companyName: '',
  officeAddress: '',
  ownerName: '',
  ownerMobile: '',
  email: '',
  reraNumber: '',
  operationalRegion: '',
  workingArea: '',
  preferredProject: 'All Shivaangan Projects',
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
    <div className="bg-gray-50 min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center min-h-[60vh] bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: 'url(/images/building2.png)' }}
        >
          {/* Radial gradient centered exactly behind the text, fading to transparent at the edges so the buildings remain bright and visible */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/50 via-black/40 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF6600]/20 border border-[#FF6600]/50 text-[#FF6600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md animate-fade-in drop-shadow-md">
            <Handshake className="w-4 h-4" />
            Strategic Business Alliance
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight animate-fade-in drop-shadow-lg" style={{ animationDelay: '100ms' }}>
            Join Us as a <span className="text-[#FF6600]">Channel Partner</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium leading-relaxed max-w-2xl mx-auto animate-fade-in drop-shadow-md" style={{ animationDelay: '200ms' }}>
            Partner with <strong className="text-white font-bold">Shivaangan Realcon</strong>. Grow your real estate network and monetize high-demand residential and commercial projects across Pune and Baramati.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-gray-100 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <span className="bg-black/30 px-4 py-2 rounded-full border border-white/20 flex items-center gap-1.5 backdrop-blur-md shadow-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6600]" /> Fast Commission Release
            </span>
            <span className="bg-black/30 px-4 py-2 rounded-full border border-white/20 flex items-center gap-1.5 backdrop-blur-md shadow-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6600]" /> Direct Lead Protection
            </span>
            <span className="bg-black/30 px-4 py-2 rounded-full border border-white/20 flex items-center gap-1.5 backdrop-blur-md shadow-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6600]" /> Flagship Project REGALIA
            </span>
          </div>
        </div>
      </section>

      {/* CP Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">
              Why Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block mt-2">
              Empowering Our Channel Partners
            </h2>
            <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
              We treat our channel partners as integral pillars of our sales growth, providing unmatched support, transparent communication, and industry-best reward systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-[#FF6600]/50 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  <div className="bg-gray-900 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white p-4 rounded-xl inline-block mb-5 transition-colors duration-300 shadow-sm">
                    <benefit.icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#FF6600] transition-colors">
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
      <section className="py-20 bg-gray-100" id="registration-form">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">
              Onboarding Form
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block mt-2">
              Channel Partner Registration
            </h2>
            <p className="text-gray-600 mt-4 text-sm max-w-2xl mx-auto">
              Please provide your agency, MahaRERA, and contact details below. Our Channel Partner Desk will verify and activate your partner portal.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-3xl shadow-xl border border-gray-200 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
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
                    className="bg-[#FF6600] hover:bg-[#e65c00] text-white text-sm py-3 px-8 font-bold rounded-md shadow-md transition-colors"
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
                <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#FF6600]" />
                    Firm & Business Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Company / Agency Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Realtors & Associates"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm transition-shadow"
                      />
                    </div>

                    <div>
                      <label htmlFor="officeAddress" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Office Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="officeAddress"
                        name="officeAddress"
                        required
                        value={formData.officeAddress}
                        onChange={handleChange}
                        placeholder="e.g. Office No. 402, Business Bay, Kothrud, Pune"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm transition-shadow"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Owner & Key Contact Details */}
                <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#FF6600]" />
                    Key Personnel & Contacts
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="ownerName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Owner's / Principal Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="ownerName"
                        name="ownerName"
                        required
                        value={formData.ownerName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm transition-shadow"
                      />
                    </div>

                    <div>
                      <label htmlFor="ownerMobile" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Owner Mobile Number <span className="text-red-500">*</span>
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm transition-shadow"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@apexrealtors.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm transition-shadow"
                      />
                    </div>

                    <div>
                      <label htmlFor="reraNumber" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        MahaRERA Registration No. <span className="text-red-500">*</span>
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm uppercase transition-shadow"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Operational Regions & Focus Projects */}
                <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#FF6600]" />
                    Operations & Target Projects
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="operationalRegion" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Primary Operational Region <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="operationalRegion"
                        name="operationalRegion"
                        required
                        value={formData.operationalRegion}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm text-gray-700 transition-shadow"
                      >
                        <option value="">Select Operational Region</option>
                        <option value="Baramati & Rural Pune">Baramati & Rural Pune</option>
                        <option value="East Of Pune">East Of Pune (Hadapsar, Kharadi, Wagholi)</option>
                        <option value="West Of Pune">West Of Pune (Kothrud, Baner, Wakad, Hinjewadi)</option>
                        <option value="South Of Pune">South Of Pune (Kondhwa, Undri, Katraj)</option>
                        <option value="North Of Pune">North Of Pune (Viman Nagar, Dhanori, Airport)</option>
                        <option value="Complete Pune">Complete Pune Region</option>
                        <option value="Pimpri Chinchwad">PCMC (Pimpri-Chinchwad)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="workingArea" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Specific Localities / Focus Areas <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="workingArea"
                        name="workingArea"
                        required
                        value={formData.workingArea}
                        onChange={handleChange}
                        placeholder="e.g. Baramati MIDC, Kothrud, Katraj, Hadapsar"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm transition-shadow"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredProject" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Preferred Project to Promote <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="preferredProject"
                        name="preferredProject"
                        required
                        value={formData.preferredProject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm text-gray-700 transition-shadow font-medium"
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
                      <label htmlFor="website" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Website or Social Handle (Optional)
                      </label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="e.g. www.apexrealtors.in or Instagram link"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-sm transition-shadow"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 4: Terms & Conditions Agreement */}
                <div className="pt-4 border-t border-gray-200 animate-fade-in" style={{ animationDelay: '600ms' }}>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <input
                      type="checkbox"
                      id="agreedToTerms"
                      name="agreedToTerms"
                      required
                      checked={formData.agreedToTerms}
                      onChange={handleChange}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-[#FF6600] focus:ring-[#FF6600] cursor-pointer"
                    />
                    <label htmlFor="agreedToTerms" className="text-xs text-gray-700 leading-relaxed cursor-pointer select-none">
                      I have read, understood, and agree to the <strong>Channel Partner Terms & Conditions</strong> outlined below. I confirm that all the information provided above is accurate and valid as per MahaRERA norms.
                    </label>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '700ms' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#FF6600] hover:bg-[#e65c00] text-white py-4 px-12 rounded-md text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
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

      {/* Terms & Conditions Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10 animate-fade-in">
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">
              Policies & Norms
            </span>
            <h2 className="text-3xl font-bold text-gray-900 inline-block mt-2">
              Terms &amp; Conditions
            </h2>
          </div>

          <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200 space-y-6 text-sm text-gray-700 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-start gap-4">
              <span className="bg-gray-900 text-[#FF6600] text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                1
              </span>
              <p className="pt-1">
                <strong>Pricing Guidance:</strong> Minimum price of the said Units will be informed to Channel Partners from time to time and they shall arrange to sell the said Units above or at the said minimum prices.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-gray-900 text-[#FF6600] text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                2
              </span>
              <p className="pt-1">
                <strong>Non-Exclusive Engagement:</strong> The arrangement is strictly non-exclusive i.e. there will be other Channel Partners working for us and other group entities of Shivaangan Realcon.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-gray-900 text-[#FF6600] text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                3
              </span>
              <p className="pt-1">
                <strong>Accuracy & Representation:</strong> The channel partner shall be fully responsible and liable for any incorrect information or unauthorized commitments given to clients on our behalf.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-gray-900 text-[#FF6600] text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                4
              </span>
              <p className="pt-1">
                <strong>Brokerage Computation:</strong> Channel Partners will be entitled to commission computed on the basic price of the Unit (i.e. excluding Infrastructure Development Charges, stamp duty, registration fees, GST, legal charges, extra amenities, car parking, society formation charges, maintenance charges or any other statutory/government fees).
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-gray-900 text-[#FF6600] text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                5
              </span>
              <p className="pt-1">
                <strong>Site Visits & Client Attendance:</strong> Channel Partners compulsorily have to accompany their clients right from the initial site visit and all subsequent visits for valid lead logging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Desk Banner */}
      <section className="py-16 bg-[#FF6600] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Need Immediate Channel Partner Assistance?
              </h2>
              <p className="text-white/90 text-sm sm:text-base font-medium">
                Call our direct Channel Partner Relationship desk or reach out to our Baramati / Pune headquarters.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0 justify-center">
              <a
                href={`tel:${COMPANY_INFO.director.phone}`}
                className="bg-white text-[#FF6600] hover:bg-gray-100 py-3.5 px-6 rounded-md font-bold text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Call {COMPANY_INFO.director.phone}
              </a>
              <Link
                to="/contact"
                className="bg-black/20 hover:bg-black/30 border border-white/40 text-white py-3.5 px-6 rounded-md font-bold text-sm transition-colors"
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