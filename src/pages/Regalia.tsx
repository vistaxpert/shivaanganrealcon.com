import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, CheckCircle2, ShieldCheck, Download, MapPin, 
  Sparkles, Phone, MessageCircle, ArrowRight, FileText, Compass, Key,
  Maximize2, Zap, Award, Layers, ChevronRight, X
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { toast } from 'sonner';

// Motion animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

interface FloorPlan {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const Regalia = () => {
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [activePlanModal, setActivePlanModal] = useState<FloorPlan | null>(null);
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochurePhone, setBrochurePhone] = useState('');

  // Helper function to trigger browser download of REGALIA.pdf
  const triggerPdfDownload = () => {
    const link = document.createElement('a');
    link.href = '/REGALIA.pdf';
    link.download = 'REGALIA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBrochureDownload = (e: React.FormEvent) => {
    e.preventDefault();
    triggerPdfDownload();
    toast.success("Thank you! REGALIA E-Brochure download has started.");
    setShowBrochureModal(false);
  };

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Specifications', href: '#specifications' },
    { label: 'Floor Plans', href: '#plans' },
    { label: 'Location', href: '#location' },
  ];

  const floorPlansData: FloorPlan[] = [
    {
      title: "Ground Floor Plan",
      description: "Parking, Grand Lobby, Servant Room with Toilet, Multipurpose Room, Pooja Ghar & Verandah.",
      features: ["Parking (12'6\" x 27'0\")", "Lobby (13'0\" x 5'0\")", "Servant Room (5'0\" x 8'2\")", "Multipurpose Room (13'0\" x 12'6\")", "Pooja Ghar (5'0\" x 4'0\")"],
      image: "/images/ground.png" 
    },
    {
      title: "First Floor Plan",
      description: "Elevated Living & Dining experience with Private Deck, Modern Kitchen & Dry Balcony.",
      features: ["Living Room (13'8\" x 22'8\")", "Kitchen (13'8\" x 12')", "Private Deck (13'8\" x 5'0\")", "Dry Balcony (13'8\" x 4'0\")", "Foyer & Powder Toilet"],
      image: "/images/first.png"
    },
    {
      title: "Second Floor Plan",
      description: "Spacious Master Bedrooms with Walk-in Wardrobe (WIW), Attached Toilets and Private Terraces.",
      features: ["Bedroom 1 (13'8\" x 13'0\")", "Bedroom 2 (13'8\" x 15'0\")", "Terrace (13'8\" x 5'0\")", "Walk-in Wardrobe (7'6\" x 8'0\")", "Ensuite Bathrooms"],
      image: "/images/second.png"
    },
    {
      title: "Third Floor Plan",
      description: "Additional Luxury Bedrooms with dedicated study/lounge areas and scenic balconies.",
      features: ["Bedroom 3 (13'8\" x 12'6\")", "Bedroom 4 (13'8\" x 13'0\")", "Walk-In Wardrobes", "Private Terrace & Balcony", "Premium Bath Fittings"],
      image: "/images/third.png"
    },
    {
      title: "Recreational Roof Terrace Plan",
      description: "Open-sky Luxury Lounge with Terrace Garden, Cabana Seating, and Private Jacuzzi.",
      features: ["Terrace Garden (13'8\" x 17'4\")", "Cabana Seating (13'8\" x 21'0\")", "Private Jacuzzi (8'0\" x 8'0\")", "Bar / Outdoor Lounge", "Roof Toilet"],
      image: "/images/roof.png"
    }
  ];

  return (
    <div className="bg-[#fcfdfd] text-gray-800 min-h-screen scroll-smooth">
      
      {/* Dynamic Sticky Header Bar */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all hidden md:block">
        <div className="container-custom py-3 flex items-center justify-between">
          <span className="font-extrabold tracking-wider text-gray-900 text-lg">
            REGALIA <span className="text-[#FF6600]">ROW VILLAS</span>
          </span>
          <nav className="flex items-center gap-6 text-sm font-semibold text-gray-600">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-[#FF6600] transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#enquiry-form"
            className="bg-[#FF6600] hover:bg-[#e65c00] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow"
          >
            Schedule Site Visit
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-start overflow-hidden pt-20 pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transform scale-105 transition-transform duration-10000"
          style={{ 
            backgroundImage: 'url(/images/regalia3.png)',
            backgroundPosition: 'center right'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-xl text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-[#0d382c] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-md">
              <Sparkles className="w-4 h-4 text-[#FF6600]" />
              Ultra-Luxury Row Houses & Villas
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
              INSPIRED BY ROYALTY, <br />
              <span className="text-[#FF6600]">BUILT FOR YOU.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-700 mb-4 font-semibold">
              4 BHK Ultra-Luxury Row Villas in Undri, Pune
            </motion.p>

            <motion.p variants={fadeInUp} className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
              At Regalia, experience a perfect harmony of luxury, privacy, and nature-inspired living. Thoughtfully crafted for those who aspire to live beyond the ordinary with modern architecture and curated amenities.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-start">
              <button
                onClick={() => setShowBrochureModal(true)}
                className="bg-[#FF6600] hover:bg-[#e65c00] text-white py-3.5 px-7 rounded-lg text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <Download className="w-4 h-4" />
                Download E-Brochure
              </button>
              <a
                href="#enquiry-form"
                className="bg-gray-900 hover:bg-gray-800 text-white py-3.5 px-7 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Key className="w-4 h-4 text-[#FF6600]" />
                Book Site Visit
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Specs Highlight Strip */}
      <section className="bg-[#0d382c] text-white py-8 border-y border-emerald-900 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r border-emerald-800/60 last:border-0 pr-4">
              <p className="text-xs text-[#FF6600] uppercase tracking-widest font-bold mb-1">Configuration</p>
              <p className="text-lg font-bold text-white">4.5 BHK Luxury Homes</p>
            </div>
            <div className="border-r border-emerald-800/60 last:border-0 pr-4">
              <p className="text-xs text-[#FF6600] uppercase tracking-widest font-bold mb-1">Total Usable Area</p>
              <p className="text-lg font-bold text-white">Starts From 4,240 Sq. Ft.</p>
            </div>
            <div className="border-r border-emerald-800/60 last:border-0 pr-4">
              <p className="text-xs text-[#FF6600] uppercase tracking-widest font-bold mb-1">Location</p>
              <p className="text-lg font-bold text-white">Undri, Pune</p>
            </div>
            <div>
              <p className="text-xs text-[#FF6600] uppercase tracking-widest font-bold mb-1">Special Features</p>
              <p className="text-lg font-bold text-white">Private Lift & Jacuzzi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Overview & Vision */}
      <section id="overview" className="py-20 md:py-28 bg-white scroll-mt-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest">A New Era Of Luxury</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Where Refinement Meets Reach.
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Enough of luxury being distant. Enough of exclusivity reserved for a few. It’s time for a new era where elegance is accessible, and sophistication becomes a way of life.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  "Modern architecture, intelligent space planning & maximum privacy.",
                  "Wide internal paved roads with seamless access to premium amenities.",
                  "A like-minded elite community defined by peace, prestige, and power."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6600] shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-emerald-50/50 rounded-xl border border-emerald-100 mt-6">
                <p className="text-xs uppercase tracking-wider text-[#0d382c] font-bold mb-1">Philosophy</p>
                <p className="text-sm font-medium italic text-gray-700">
                  "Who says world-class living has to break the bank? At Regalia, unexcelled quality meets unmatchable value."
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                <img 
                  src="/images/living.png" 
                  alt="Regalia Living Room" 
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gray-900 text-white p-6 rounded-xl shadow-xl max-w-xs hidden sm:block border-l-4 border-[#FF6600]">
                <p className="text-2xl font-black text-[#FF6600]">100%</p>
                <p className="text-xs font-medium text-gray-300 uppercase tracking-wider mt-1">Vastu Compliant & IS Code Seismic Safe Architecture</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Exclusive Amenities */}
      <section id="amenities" className="py-20 md:py-28 bg-gray-50 scroll-mt-12 border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest">World-Class Living</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Exclusive Amenities</h2>
            <p className="text-gray-600 mt-2">Crafted with attention to every detail for an elevated lifestyle.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "VRV/VRF Air Conditioning", desc: "Provision in Living Room & All Bedrooms for ideal climate control." },
              { title: "Private Passenger Lift", desc: "Provision for 8-passenger high-speed lift inside every villa." },
              { title: "EV Charging Infrastructure", desc: "Dedicated charging stations for 2 & 4 wheeler electric vehicles." },
              { title: "Smart Home Security", desc: "Digital door lock, Video Door Phone & 24x7 CCTV Surveillance." },
              { title: "Multipurpose Hall & Club", desc: "Ground floor community hall & clubhouse for celebrations." },
              { title: "Renewable Solar Energy", desc: "Solar panel connection for water heating & common area lighting." },
              { title: "Designer Entrance Lobby", desc: "Grand main gates with access control and security cabin." },
              { title: "Piped LPG Gas Bank", desc: "Centralized safe LPG gas bank system piped directly to kitchens." },
              { title: "Smart Parcel Lockers", desc: "Contactless safe delivery lockers at the main entrance." }
            ].map((amenity, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl border border-gray-200/80 hover:border-[#FF6600] hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#FF6600] flex items-center justify-center font-bold mb-4 group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{amenity.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{amenity.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Technical Specifications */}
      <section id="specifications" className="py-20 md:py-28 bg-[#0d382c] text-white scroll-mt-12">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest">Engineering Excellence</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Technical Specifications</h2>
            <p className="text-emerald-200/80 mt-2">Uncompromised material quality and structural integrity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Structure & Masonry",
                items: [
                  "Earthquake Resistant RCC Frame Structure",
                  "Internal & External 6\" AAC Block Masonry",
                  "Gypsum / Smooth Finish Plaster Internally",
                  "Double Coat Sand Faced External Plaster"
                ]
              },
              {
                category: "Flooring & Tiles",
                items: [
                  "Designer Vitrified Flooring in Entrance Lobby",
                  "800mm x 1600mm Premium Vitrified Flooring",
                  "Anti-Skid Flooring in Terraces & Bathrooms",
                  "Granite Flooring for Staircase"
                ]
              },
              {
                category: "Kitchen & Dry Balcony",
                items: [
                  "Granite / Quartz Countertop with Stainless Steel Sink",
                  "Provision for Exhaust Fan & Water Purifier",
                  "Dado Tiles up to Lintel Level",
                  "Provision for Dishwasher & Washing Machine"
                ]
              },
              {
                category: "Doors, Windows & Paint",
                items: [
                  "Laminated Wooden / Granite Door Frames",
                  "UPVC / Aluminum Sliding Doors with Mosquito Mesh",
                  "Internal Luster / Velvet Touch Acrylic Paint",
                  "External Weather-Proof Texture Paint"
                ]
              },
              {
                category: "Electrical & Plumbing",
                items: [
                  "Concealed Fire-Resistant Copper Wiring (Polycab / Finolex)",
                  "Modular Switches (Legrand / Anchor)",
                  "Jaguar / Kohler Wall-Hung WCs & CP Fittings",
                  "Solar Hot Water Connection in Bathrooms"
                ]
              },
              {
                category: "Safety & Security",
                items: [
                  "Glass & MS Railing for Terraces",
                  "Digital Lock for Main Door",
                  "Video Door Phone & Intercom Facility",
                  "Fire Extinguishers in Parking Area"
                ]
              }
            ].map((spec, idx) => (
              <div key={idx} className="bg-emerald-950/60 p-6 rounded-xl border border-emerald-800/80">
                <h3 className="text-lg font-bold text-[#FF6600] mb-4 pb-2 border-b border-emerald-800 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  {spec.category}
                </h3>
                <ul className="space-y-2.5">
                  {spec.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs md:text-sm text-emerald-100/90 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Floor Plans & Area Statement */}
      <section id="plans" className="py-20 md:py-28 bg-white scroll-mt-12">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest">Architectural Layouts</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Floor Plans & Area Statements</h2>
            <p className="text-gray-600 mt-2">Multi-level luxury row villas designed for space optimization.</p>
          </div>

          {/* RERA Area Table Box */}
          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 mb-16 shadow-xl border border-gray-800">
            <h3 className="text-xl font-bold text-[#FF6600] mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5" /> Area Statement As Per RERA (Typical Row Villa)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-800 text-[#FF6600] font-bold">
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">Carpet Area (Sq. Mtr.)</th>
                    <th className="py-3 px-4">Balcony (Sq. Mtr.)</th>
                    <th className="py-3 px-4">Terrace (Sq. Mtr.)</th>
                    <th className="py-3 px-4 font-extrabold text-white">Total RERA Area</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60 text-gray-300">
                  <tr>
                    <td className="py-3 px-4 font-bold text-white">Row Villa Typical</td>
                    <td className="py-3 px-4">195 Sq. Mtr.</td>
                    <td className="py-3 px-4">30 Sq. Mtr.</td>
                    <td className="py-3 px-4">10 Sq. Mtr.</td>
                    <td className="py-3 px-4 font-bold text-[#FF6600]">2,530 Sq. Ft.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-white">Additional Usable Area</td>
                    <td className="py-3 px-4">Garden (52.25 Sq. Mtr.)</td>
                    <td className="py-3 px-4">Parking (45.35 Sq. Mtr.)</td>
                    <td className="py-3 px-4">Top Terrace (61.35 Sq. Mtr.)</td>
                    <td className="py-3 px-4 font-bold text-[#FF6600]">1,710 Sq. Ft.</td>
                  </tr>
                  <tr className="bg-gray-800/40 font-bold text-white">
                    <td colSpan={4} className="py-3 px-4 text-right">Grand Total Usable Villa Area:</td>
                    <td className="py-3 px-4 text-emerald-400 text-base">4,240 Sq. Ft.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Interactive Floor Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {floorPlansData.map((plan, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="relative h-56 bg-white overflow-hidden border-b border-gray-200 cursor-pointer" onClick={() => setActivePlanModal(plan)}>
                    <img 
                      src={plan.image} 
                      alt={plan.title} 
                      className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute top-2 right-2 bg-gray-900/70 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" /> Expand
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider">Level 0{idx + 1}</span>
                    <h4 className="font-extrabold text-gray-900 text-xl mb-2">{plan.title}</h4>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">{plan.description}</p>
                    
                    <div className="space-y-1.5 mb-6">
                      {plan.features.map((feat, fIdx) => (
                        <p key={fIdx} className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                          <ChevronRight className="w-3.5 h-3.5 text-[#FF6600]" /> {feat}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    onClick={() => setActivePlanModal(plan)}
                    className="w-full bg-gray-900 hover:bg-[#FF6600] text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <Maximize2 className="w-3.5 h-3.5" /> View Floor Layout
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Location Advantage */}
      <section id="location" className="py-20 md:py-28 bg-gray-50 scroll-mt-12 border-t border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest">Prime Connectivity</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-6">
                Connected to Everything That Matters
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Situated in Undri — Pune’s most vibrant residential corridor with top-tier international schools, healthcare centers, and shopping hubs nearby.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Bishop's School, Undri – 3 Mins",
                  "VIBGYOR High School – 5 Mins",
                  "Dorabjee Royale Heritage Mall – 7 Mins",
                  "Corinthians Resort & Club – 5 Mins",
                  "NIBM Road Hub – 8 Mins",
                  "Magarpatta IT City – 20 Mins"
                ].map((loc, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <MapPin className="w-4 h-4 text-[#FF6600] shrink-0" />
                    <span className="text-xs md:text-sm font-bold text-gray-800">{loc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-300 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.538563124853!2d73.9068019!3d18.4592817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb330c6a8f15%3A0xb3ff765df0609355!2sUndri%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Regalia Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Enquiry & Booking Form */}
      <section id="enquiry-form" className="py-20 md:py-28 bg-white scroll-mt-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6600]/10 rounded-full filter blur-3xl pointer-events-none"></div>

            <div className="text-center mb-10 relative z-10">
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest">Priority Site Visit</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Book An Exclusive Site Visit</h2>
              <p className="text-gray-400 text-sm mt-2">Get exact pricing, availability & customized payment schedules from our team.</p>
            </div>

            <div className="relative z-10 bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan Modal Viewer */}
      {activePlanModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 relative">
            <button 
              onClick={() => setActivePlanModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{activePlanModal.title}</h3>
            
            <div className="bg-gray-50 rounded-lg p-2 h-[450px] flex items-center justify-center border border-gray-200 mb-4 overflow-hidden">
              <img 
                src={activePlanModal.image} 
                alt={activePlanModal.title} 
                className="w-full h-full object-contain"
              />
            </div>
            
            <button
              onClick={() => {
                triggerPdfDownload();
                toast.success("Downloading REGALIA Brochure PDF...");
              }}
              className="w-full bg-[#FF6600] hover:bg-[#e65c00] text-white py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Full Brochure PDF
            </button>
          </div>
        </div>
      )}

      {/* Brochure Download Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200 relative">
            <button 
              onClick={() => setShowBrochureModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-1">Download E-Brochure</h3>
            <p className="text-xs text-gray-600 mb-6">Enter your contact details to instantly download the PDF brochure and cost sheet.</p>
            
            <form onSubmit={handleBrochureDownload} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-900 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={brochureEmail}
                  onChange={(e) => setBrochureEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#FF6600] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-900 mb-1">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  value={brochurePhone}
                  onChange={(e) => setBrochurePhone(e.target.value)}
                  placeholder="+91 97679 00555"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#FF6600] outline-none"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowBrochureModal(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-lg py-2.5 text-sm uppercase tracking-wider font-bold shadow-md flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> Get Brochure
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