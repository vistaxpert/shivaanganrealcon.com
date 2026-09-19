import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

const Contact = () => {
  // Contact information cards
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & Sales Desk",
      details: [COMPANY_INFO.phone, "+91 7030 255 755"],
      action: {
        text: "Call Us Now",
        href: `tel:${COMPANY_INFO.phone}`
      }
    },
    {
      icon: Mail,
      title: "Email",
      details: [COMPANY_INFO.email],
      action: {
        text: "Send Email",
        href: `mailto:${COMPANY_INFO.email}`
      }
    },
    {
      icon: MapPin,
      title: "Corporate Head Office",
      details: [
        COMPANY_INFO.offices[0].address,
        COMPANY_INFO.offices[0].pincode
      ],
      action: {
        text: "Get Directions",
        href: COMPANY_INFO.mapUrl
      }
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday: 10:00 AM - 7:00 PM", "Sunday: 10:00 AM - 7:00 PM (Site Visits)"],
      action: {
        text: null,
        href: null
      }
    }
  ];

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      {/* Hero Section - Brightened with No Dark Tint */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: 'url(/images/building3.png)' }}
        >
          {/* Bright white gradient overlay instead of a black shadow/tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/30 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 w-full">
          <div className="max-w-2xl text-left">
            <span className="text-sm font-bold text-[#FF6600] uppercase tracking-widest block mb-3 animate-fade-in">
              Connect With Shivaangan Realcon
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              Contact <span className="text-[#FF6600]">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed animate-fade-in max-w-xl" style={{ animationDelay: '200ms' }}>
              Have questions regarding REGALIA, residential bookings, or commercial spaces? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between hover:border-[#FF6600]/50 hover:-translate-y-2 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div>
                  <div className="bg-gray-50 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white p-4 rounded-xl inline-block mb-6 transition-colors duration-300 shadow-sm border border-gray-100 group-hover:border-[#FF6600]">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#FF6600] transition-colors">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm mb-1.5 font-medium leading-relaxed">{detail}</p>
                  ))}
                </div>
                {item.action.text && (
                  <a 
                    href={item.action.href} 
                    className="inline-block mt-6 text-[#FF6600] group-hover:text-gray-900 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    {item.action.text} &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form & Location Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">Send a Message</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
                Fill out the form below and our sales & engineering team will get back to you immediately. We're here to answer any questions about our projects or arrange personalized site visits.
              </p>
              
              <div className="bg-gray-50 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100">
                <ContactForm />
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="sticky top-24">
                <span className="text-xs font-bold text-[#FF6600] uppercase tracking-widest block mb-2">Headquarters</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Location</h2>
                <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
                  Visit our corporate head office at VTP Trade Park, Undri, Pune to discuss your property requirements and investment plans in person.
                </p>
                
                {/* Google Maps iframe */}
                <div className="rounded-2xl overflow-hidden mb-8 h-80 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.538563124853!2d73.9068019!3d18.4592817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb330c6a8f15%3A0xb3ff765df0609355!2sVTP%20Trade%20Park!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shivaangan Realcon VTP Trade Park Undri Location"
                  ></iframe>
                </div>
                
                <div className="bg-[#FF6600] text-white p-8 rounded-3xl shadow-xl transform transition-transform hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
                  <p className="mb-6 text-white/90 text-sm font-medium">Call our direct sales and management hotline for project bookings, floor plans, and site visits.</p>
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`} 
                    className="bg-white text-[#FF6600] hover:bg-gray-100 py-3.5 px-8 rounded-md font-bold transition-colors inline-flex items-center justify-center gap-2 text-sm shadow-md w-full sm:w-auto"
                  >
                    <Phone size={18} />
                    Call Us: {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;