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
      details: ["Monday - Saturday: 9:30 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM (Site Visits)"],
      action: {
        text: null,
        href: null
      }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-construction-navy text-white py-24 md:py-32 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")' }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest">Connect With Shivaangan Realcon</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white mt-2">Contact Us</h1>
            <p className="text-xl text-white/80">
              Have questions regarding REGALIA, residential bookings, or commercial spaces? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between hover:border-shivaangan-amber transition-colors">
                <div>
                  <div className="bg-construction-navy text-shivaangan-amber p-3.5 rounded-xl inline-block mb-4 shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-shivaangan-charcoal">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-construction-gray text-xs md:text-sm mb-1">{detail}</p>
                  ))}
                </div>
                {item.action.text && (
                  <a 
                    href={item.action.href} 
                    className="inline-block mt-4 text-shivaangan-terracotta hover:underline font-bold text-xs uppercase tracking-wider"
                  >
                    {item.action.text} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form & Location Section */}
      <section className="section-padding bg-construction-lightgray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-construction-gray mb-8 text-sm md:text-base leading-relaxed">
                Fill out the form below and our sales & engineering team will get back to you immediately. We're here to answer any questions about our projects or arrange personalized site visits.
              </p>
              
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100">
                <ContactForm />
              </div>
            </div>
            
            <div>
              <div className="sticky top-24">
                <h2 className="section-title">Our Location</h2>
                <p className="text-construction-gray mb-8 text-sm md:text-base leading-relaxed">
                  Visit our corporate head office at VTP Trade Park, Undri, Pune to discuss your property requirements and investment plans in person.
                </p>
                
                {/* Google Maps iframe */}
                <div className="rounded-xl overflow-hidden mb-8 h-96 shadow-md border border-gray-200">
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
                
                <div className="bg-construction-navy text-white p-6 rounded-xl border border-white/10 shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-white">Need Immediate Assistance?</h3>
                  <p className="mb-4 text-gray-300 text-sm">Call our direct sales and management hotline for project bookings, floor plans, and site visits.</p>
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`} 
                    className="bg-white text-shivaangan-charcoal hover:bg-gray-100 py-3 px-6 rounded-md font-bold transition-colors inline-flex items-center gap-2 text-sm shadow-md"
                  >
                    <Phone size={18} className="text-shivaangan-terracotta" />
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
