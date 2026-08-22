import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import ShivaanganLogo from '@/components/ShivaanganLogo';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you! You have subscribed to Shivaangan Realcon project updates.");
      setEmail('');
    }
  };

  const footerNavs = [
    {
      label: "Navigation",
      items: [
        { path: "/", name: "Home" },
        { path: "/about", name: "About Us" },
        { path: "/regalia", name: "REGALIA Flagship" },
        { path: "/projects", name: "All Projects" },
        { path: "/gallery", name: "Gallery" },
        { path: "/contact", name: "Contact Us" },
      ],
    },
    {
      label: "Landmarks",
      items: [
        { path: "/regalia", name: "REGALIA (Baramati)" },
        { path: "/projects", name: "Vrundavan Park" },
        { path: "/projects", name: "Nirmiti Vihar" },
        { path: "/projects", name: "Durga City Mall" },
        { path: "/projects", name: "K-Square Commercial" },
        { path: "/projects", name: "Nirmiti Capital" },
      ],
    },
    {
      label: "Leadership & HQ",
      items: [
        { path: "/about", name: "Er. Rahul Khatmode" },
        { path: "/about", name: "CREDAI Baramati" },
        { path: "/about", name: "Nirmiti Group" },
        { path: "/about", name: "Shomika Infra" },
        { path: "/contact", name: "Pune Office" },
        { path: "/contact", name: "Baramati HQ" },
      ],
    },
  ];

  return (
    <footer className="text-gray-300 bg-shivaangan-dark border-t-4 border-shivaangan-terracotta pt-16 pb-8">
      <div className="container-custom">
        <div className="gap-10 justify-between md:flex">
          {/* Left Brand Column + Subscribe Form */}
          <div className="flex-1 max-w-lg mb-10 md:mb-0">
            <div className="max-w-md">
              <ShivaanganLogo variant="dark" />
              <p className="leading-relaxed mt-4 text-sm text-gray-400">
                {COMPANY_INFO.description}
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="mt-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-shivaangan-amber pb-2">
                Stay Updated on New Launches & Offers
              </label>
              <div className="max-w-md flex items-center border border-gray-700 bg-shivaangan-charcoal rounded-lg p-1.5 focus-within:border-shivaangan-terracotta transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full p-2 bg-transparent text-sm text-white outline-none placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="py-2 px-5 rounded-md text-xs uppercase font-bold text-white bg-shivaangan-terracotta hover:bg-shivaangan-terracotta-dark transition-colors shadow-md shrink-0 flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Right Navigation Columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 items-start">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-3" key={idx}>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-gray-800 pb-2">
                  {item.label}
                </h4>
                {item.items.map((el, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      to={el.path}
                      className="text-xs text-gray-400 hover:text-shivaangan-amber hover:underline transition-colors"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 items-center justify-between sm:flex">
          <div className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Shivaangan Realcon LLP. All rights reserved.
          </div>
          
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-3">
              <li className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center hover:border-shivaangan-terracotta transition-colors bg-shivaangan-charcoal">
                <a href={`tel:${COMPANY_INFO.director.phone}`} aria-label="Call Developer" title="Call Us">
                  <Phone className="w-4 h-4 text-shivaangan-amber" />
                </a>
              </li>

              <li className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center hover:border-shivaangan-terracotta transition-colors bg-shivaangan-charcoal">
                <a href={`mailto:${COMPANY_INFO.director.email}`} aria-label="Email Us" title="Email Us">
                  <Mail className="w-4 h-4 text-shivaangan-terracotta" />
                </a>
              </li>

              <li className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center hover:border-shivaangan-terracotta transition-colors bg-shivaangan-charcoal">
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Shivaangan%20Realcon%20LLP,%20I%20want%20to%20enquire%20about%20your%20projects.`}
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="WhatsApp" 
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                </a>
              </li>

              <li className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center hover:border-shivaangan-terracotta transition-colors bg-shivaangan-charcoal">
                <Link to="/contact" aria-label="Office Location" title="Our Offices">
                  <MapPin className="w-4 h-4 text-shivaangan-amber" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
