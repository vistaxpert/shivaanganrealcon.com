import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  ArrowUpRight, 
  Building2, 
  ShieldCheck, 
  Award,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import ShivaanganLogo from '@/components/ShivaanganLogo';
import { toast } from 'sonner';

export interface Footer6Props {
  className?: string;
}

export const Footer6: React.FC<Footer6Props> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      toast.success("Thank you! You have subscribed to Shivaangan Realcon project updates and exclusive launch alerts.");
      setEmail('');
    }
  };

  const navCategories = [
    {
      title: "Explore",
      links: [
        { label: "Home", href: "/" },
        { label: "About Shivaangan", href: "/about" },
        { label: "REGALIA Flagship", href: "/regalia", badge: "Exclusive" },
        { label: "All Landmark Projects", href: "/projects" },
        { label: "Project Gallery", href: "/gallery" },
        { label: "Contact & Site Visit", href: "/contact" },
      ],
    },
    {
      title: "Landmark Developments",
      links: [
        { label: "REGALIA (Baramati)", href: "/regalia" },
        { label: "Durga City Mall", href: "/projects" },
        { label: "Nirmiti Vihar Phase 2", href: "/projects" },
        { label: "Vrundavan Park Phase 2", href: "/projects" },
        { label: "K-Square Commercial", href: "/projects" },
        { label: "Nirmiti Capital", href: "/projects" },
      ],
    },
    {
      title: "Leadership & Group",
      links: [
        { label: "Er. Rahul Khatmode (President, CREDAI)", href: "/about" },
        { label: "Nirmiti Group", href: "/about" },
        { label: "Shomika Infra (Govt. Contractor)", href: "/about" },
        { label: "Khatri-Khatmode Associates", href: "/about" },
        { label: "Quality Assurance & Standards", href: "/about" },
        { label: "Corporate Social Responsibility", href: "/about" },
      ],
    },
    {
      title: "Offices & Presence",
      links: [
        { label: "Pune Headquarters (Kothrud)", href: "/contact" },
        { label: "Baramati Corporate Office", href: "/contact" },
        { label: "Customer Care & Support", href: `tel:${COMPANY_INFO.director.phone}` },
        { label: "Direct WhatsApp Desk", href: `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Shivaangan%20Realcon,%20I%20would%20like%20to%20know%20more%20about%20your%20projects.` },
        { label: "Investor Relations", href: `mailto:${COMPANY_INFO.director.email}` },
      ],
    },
  ];

  // Row 2: Prominent Large Action Links
  const largeActionLinks = [
    {
      title: "REGALIA LUXURY",
      subtitle: "Baramati's Crown Jewel",
      href: "/regalia",
      tag: "Ongoing",
    },
    {
      title: "RESIDENTIAL SPACES",
      subtitle: "Premium 2 & 3 BHK Living",
      href: "/projects",
      tag: "Explore",
    },
    {
      title: "COMMERCIAL HUBS",
      subtitle: "Malls, Retail & Prime Offices",
      href: "/projects",
      tag: "Invest",
    },
    {
      title: "BOOK A SITE VISIT",
      subtitle: "Experience Quality Firsthand",
      href: "/contact",
      tag: "Schedule",
    },
  ];

  return (
    <footer className={`relative bg-gradient-to-b from-[#111827] via-[#0D121F] to-[#080B12] text-gray-300 overflow-hidden border-t-2 border-shivaangan-terracotta/40 ${className}`}>
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-shivaangan-terracotta/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-shivaangan-amber/5 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      {/* =========================================================================
          ROW 1: BRAND, NEWSLETTER, AND STRUCTURED MULTI-COLUMN CATEGORIES
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-gray-800/80">
          
          {/* Brand & Newsletter Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col space-y-3">
              <ShivaanganLogo variant="dark" />
              <p className="text-xs tracking-wider uppercase font-semibold text-shivaangan-amber/90 flex items-center gap-1.5 mt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-shivaangan-amber" />
                {COMPANY_INFO.tagline}
              </p>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>

            {/* Quick Credentials Badge */}
            <div className="p-3.5 rounded-xl bg-gray-900/80 border border-gray-800 text-xs text-gray-300 flex items-start gap-3 shadow-inner">
              <Award className="w-5 h-5 text-shivaangan-terracotta shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Engineering Leadership: </span>
                <span>Led by Er. Rahul Khatmode (B.E. Civil), President CREDAI Baramati. Over 15+ years of delivering benchmark quality.</span>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-200 mb-2 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-shivaangan-amber" />
                Get Priority Launch Alerts
              </h4>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center bg-gray-900/90 border border-gray-700/80 rounded-xl p-1.5 focus-within:border-shivaangan-terracotta transition-all shadow-sm">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 bg-transparent text-sm text-white outline-none placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to updates"
                    className="py-2 px-4 rounded-lg text-xs uppercase font-bold text-white bg-shivaangan-terracotta hover:bg-shivaangan-terracotta-dark transition-all duration-200 shadow-md shrink-0 flex items-center gap-1.5 active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Join</span>
                  </button>
                </div>
                <p className="text-[11px] text-gray-500">
                  Strictly no spam. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>

          {/* Categories Columns (Span 8) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {navCategories.map((cat, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/90 border-b border-gray-800 pb-2.5">
                  {cat.title}
                </h4>
                <ul className="space-y-2.5">
                  {cat.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      {link.href.startsWith('http') || link.href.startsWith('tel:') || link.href.startsWith('mailto:') ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="group inline-flex items-center text-xs text-gray-400 hover:text-shivaangan-amber transition-colors duration-150 leading-snug"
                        >
                          <ChevronRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 text-shivaangan-amber transition-all duration-150 shrink-0" />
                          <span>{link.label}</span>
                          {link.href.startsWith('http') && (
                            <ExternalLink className="w-2.5 h-2.5 ml-1 opacity-60 group-hover:opacity-100" />
                          )}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="group inline-flex items-center text-xs text-gray-400 hover:text-shivaangan-amber transition-colors duration-150 leading-snug"
                        >
                          <ChevronRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 text-shivaangan-amber transition-all duration-150 shrink-0" />
                          <span>{link.label}</span>
                          {link.badge && (
                            <span className="ml-1.5 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-shivaangan-terracotta/20 text-shivaangan-terracotta border border-shivaangan-terracotta/30">
                              {link.badge}
                            </span>
                          )}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            ROW 2: LARGE INTERACTIVE ACTION LINKS
            ========================================================================= */}
        <div className="py-10 border-b border-gray-800/80">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
              Quick Discovery & Projects
            </span>
            <span className="text-[11px] text-shivaangan-amber font-medium">
              Maharashtra • Pune & Baramati
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {largeActionLinks.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="group relative p-5 rounded-2xl bg-gray-900/40 hover:bg-gray-900/90 border border-gray-800/80 hover:border-shivaangan-terracotta/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:shadow-shivaangan-terracotta/5"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-shivaangan-terracotta/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-gray-800 text-gray-300 group-hover:bg-shivaangan-terracotta group-hover:text-white transition-colors duration-300">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-shivaangan-terracotta transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-shivaangan-amber transition-colors duration-200 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM STRIP: COPYRIGHT, DIRECT CONTACT CHANNELS, AND SOCIAL PILLS
            ========================================================================= */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} <span className="text-white font-medium">Shivaangan Realcon LLP</span>. All rights reserved.
            </p>
            <p className="text-[11px] text-gray-500">
              RERA Compliant Developer • Committed to structural integrity & sustainable living.
            </p>
          </div>

          {/* Quick Direct Connect Pills */}
          <div className="flex items-center flex-wrap justify-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.director.phone}`}
              aria-label="Call Developer"
              className="px-3.5 py-1.5 rounded-full bg-gray-900 border border-gray-800 hover:border-shivaangan-amber text-xs text-gray-300 hover:text-white transition-all flex items-center gap-2 group shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-shivaangan-amber group-hover:scale-110 transition-transform" />
              <span>+91 9767900555</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.director.email}`}
              aria-label="Email Us"
              className="px-3.5 py-1.5 rounded-full bg-gray-900 border border-gray-800 hover:border-shivaangan-terracotta text-xs text-gray-300 hover:text-white transition-all flex items-center gap-2 group shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-shivaangan-terracotta group-hover:scale-110 transition-transform" />
              <span>Email Support</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Shivaangan%20Realcon%20LLP,%20I%20want%20to%20enquire%20about%20your%20projects.`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="px-3.5 py-1.5 rounded-full bg-gray-900 border border-gray-800 hover:border-emerald-500 text-xs text-gray-300 hover:text-white transition-all flex items-center gap-2 group shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/contact"
              aria-label="Our Offices"
              className="px-3.5 py-1.5 rounded-full bg-gray-900 border border-gray-800 hover:border-shivaangan-amber text-xs text-gray-300 hover:text-white transition-all flex items-center gap-2 group shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-shivaangan-amber group-hover:scale-110 transition-transform" />
              <span>Pune & Baramati</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer6;
