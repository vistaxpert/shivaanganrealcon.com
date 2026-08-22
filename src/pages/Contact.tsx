import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'REGALIA',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your enquiry has been sent to Er. Rahul Khatmode & sales team. We will call you back shortly.");
      setFormData({ name: '', phone: '', email: '', project: 'REGALIA', message: '' });
    }, 1000);
  };

  return (
    <div className="pt-28 pb-16 bg-white">
      <div className="container-custom">
        {/* Minimal Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
          <div>
            <span className="text-xs font-bold text-shivaangan-amber uppercase tracking-widest block mb-2">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-shivaangan-charcoal tracking-tight uppercase">
              CONTACT US
            </h1>
          </div>
          <p className="text-gray-500 max-w-lg text-sm sm:text-base leading-relaxed">
            If you have any questions regarding REGALIA, residential bookings, or commercial spaces, feel free to get in touch with us via phone, email, WhatsApp, or the enquiry form below!
          </p>
        </div>

        {/* 2-Column Minimal Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Form Card (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200/70 shadow-sm">
            <h2 className="text-xl font-black text-shivaangan-charcoal uppercase tracking-wider mb-6">
              GET IN TOUCH
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name*"
                    className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-shivaangan-charcoal outline-none focus:border-shivaangan-terracotta focus:ring-1 focus:ring-shivaangan-terracotta transition-all placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-2">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number*"
                    className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-shivaangan-charcoal outline-none focus:border-shivaangan-terracotta focus:ring-1 focus:ring-shivaangan-terracotta transition-all placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email*"
                    className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-shivaangan-charcoal outline-none focus:border-shivaangan-terracotta focus:ring-1 focus:ring-shivaangan-terracotta transition-all placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-2">
                    PROJECT INTEREST
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-shivaangan-charcoal outline-none focus:border-shivaangan-terracotta focus:ring-1 focus:ring-shivaangan-terracotta transition-all"
                  >
                    <option value="REGALIA">REGALIA (2 & 3 BHK Luxury)</option>
                    <option value="Vrundavan Park">Vrundavan Park Phase 2</option>
                    <option value="Nirmiti Vihar">Nirmiti Vihar Phase 2</option>
                    <option value="Durga City Mall">Durga City Mall (Commercial)</option>
                    <option value="K-Square Commercial">K-Square Commercial</option>
                    <option value="General Inquiry">General Real Estate Advisory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-2">
                  YOUR MESSAGE
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you? (e.g. Schedule site visit, pricing, floor plans)..."
                  className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-shivaangan-charcoal outline-none focus:border-shivaangan-terracotta focus:ring-1 focus:ring-shivaangan-terracotta transition-all placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-shivaangan-terracotta hover:bg-shivaangan-terracotta-dark text-white font-bold py-3.5 px-8 rounded-xl uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>

          {/* Right Column: 2 Stacked Cards (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card 1: Contact Information */}
            <div className="bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200/70 shadow-sm">
              <h2 className="text-xl font-black text-shivaangan-charcoal uppercase tracking-wider mb-6">
                CONTACT INFORMATION
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-shivaangan-terracotta/10 text-shivaangan-terracotta rounded-xl shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1">
                      PHONE
                    </span>
                    <a href={`tel:${COMPANY_INFO.director.phone}`} className="text-sm font-semibold text-gray-700 hover:text-shivaangan-terracotta transition-colors">
                      {COMPANY_INFO.director.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-shivaangan-terracotta/10 text-shivaangan-terracotta rounded-xl shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1">
                      EMAIL
                    </span>
                    <a href={`mailto:${COMPANY_INFO.director.email}`} className="text-sm font-semibold text-gray-700 hover:text-shivaangan-terracotta transition-colors break-all">
                      {COMPANY_INFO.director.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-shivaangan-terracotta/10 text-shivaangan-terracotta rounded-xl shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1">
                      BARAMATI HQ & PUNE OFFICE
                    </span>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <strong>Baramati HQ:</strong> {COMPANY_INFO.offices[1].address}, {COMPANY_INFO.offices[1].pincode}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                      <strong>Pune Branch:</strong> {COMPANY_INFO.offices[0].address}, {COMPANY_INFO.offices[0].pincode}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Shivaangan%20Realcon%20LLP,%20I%20want%20to%20enquire%20about%20your%20projects.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-4 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Instant WhatsApp Enquiry
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Business Hours */}
            <div className="bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200/70 shadow-sm">
              <h2 className="text-xl font-black text-shivaangan-charcoal uppercase tracking-wider mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-shivaangan-terracotta" />
                BUSINESS HOURS
              </h2>

              <div className="grid grid-cols-3 gap-3 text-center border-t border-slate-200/80 pt-4">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1">
                    MON - FRI
                  </span>
                  <p className="text-xs text-gray-600 font-medium">9:00 am - 7:00 pm</p>
                </div>

                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1">
                    SATURDAY
                  </span>
                  <p className="text-xs text-gray-600 font-medium">9:30 am - 6:00 pm</p>
                </div>

                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-shivaangan-charcoal mb-1">
                    SUNDAY
                  </span>
                  <p className="text-xs text-gray-600 font-medium">10:00 am - 4:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Map Frame Card */}
        <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200/80 h-96 w-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15160.038475878864!2d74.57790382348002!3d18.1565578761271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a027918cae7d%3A0x868478ff0f71fa84!2sBaramati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1745232072423!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Shivaangan Realcon Headquarters Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
