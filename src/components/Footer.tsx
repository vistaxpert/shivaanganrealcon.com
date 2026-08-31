import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

const Footer = () => {
  return (
    <footer className="bg-construction-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{COMPANY_INFO.name}</h3>
            <p className="mb-4 text-gray-300">
              Building dreams into reality with quality construction services and engineering excellence since {COMPANY_INFO.estYear}.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" className="hover:text-construction-orange transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-construction-orange transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-construction-orange transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-construction-orange transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-construction-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-construction-orange transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/regalia" className="hover:text-construction-orange transition-colors">REGALIA</Link>
              </li>
              <li>
                <Link to="/channel-partners" className="hover:text-construction-orange transition-colors">Channel Partners</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-construction-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-construction-orange transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Residential Construction</li>
              <li>Commercial Buildings</li>
              <li>Turnkey Contracting</li>
              <li>Architecture Planning</li>
              <li>Real Estate Advisory</li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-300">
                <MapPin size={18} className="mr-2 mt-1 text-construction-orange shrink-0" />
                <span>{COMPANY_INFO.offices[0].address}, {COMPANY_INFO.offices[0].pincode}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-construction-orange shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-construction-orange transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-construction-orange shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-construction-orange transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
