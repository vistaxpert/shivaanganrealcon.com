
import React, { useState } from 'react';
import { toast } from "sonner";
import { Send, MessageCircle, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'REGALIA 2/3 BHK Booking',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form data submitted for Shivaangan Realcon:', formData);
      toast.success("Thank you! Your enquiry has been received. Our sales team will call you shortly.");
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Shivaangan Realcon,\nName: ${formData.name || 'Interested Customer'}\nPhone: ${formData.phone || 'N/A'}\nSubject: ${formData.subject}\nMessage: ${formData.message || 'Interested in project details.'}`
  );

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-shivaangan-navy mb-2">Enquiry Sent Successfully!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for contacting <strong>Shivaangan Realcon</strong>. Er. Rahul Khatmode and our team will get in touch with you right away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', subject: 'REGALIA 2/3 BHK Booking', message: '' });
              }}
              className="btn-primary text-sm py-2.5"
            >
              Submit Another Enquiry
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-6 rounded-md text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat Instantly on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-navy mb-1.5">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-shivaangan-gold text-sm"
                placeholder="Er. Suresh Patil"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-navy mb-1.5">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-shivaangan-gold text-sm"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-navy mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-shivaangan-gold text-sm"
                placeholder="suresh@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-navy mb-1.5">
                Project / Interest *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-shivaangan-gold text-sm font-medium text-shivaangan-navy"
              >
                <option value="REGALIA 2/3 BHK Booking">REGALIA Flagship Project (Baramati)</option>
                <option value="Schedule Site Visit">Schedule Site Visit</option>
                <option value="Commercial Space Purchase / Rent">Commercial Space (Durga City Mall / K-Square)</option>
                <option value="Vrundavan Park / Nirmiti Vihar">Residential Enquiries (Vrundavan / Nirmiti)</option>
                <option value="General & Investment Advisory">General & Investment Advisory</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-shivaangan-navy mb-1.5">
              Specific Requirements or Questions
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-shivaangan-gold text-sm resize-none"
              placeholder="Tell us your configuration requirements, budget preference, or requested callback time..."
            ></textarea>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 btn-gold py-3.5 px-6 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Send className="w-4 h-4 text-shivaangan-navy" />
              {isSubmitting ? 'Sending Request...' : 'Submit Priority Enquiry'}
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-lg text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
