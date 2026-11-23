import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../data/mockData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Sparkles,
  ShoppingBag,
  UtensilsCrossed
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    city: 'Islamabad',
    module: 'retail',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep success state
    }, 500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-100 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Speak with our team in Pakistan. <br />
            <span className="text-blue-600">We're here to help you get started.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Whether you want a live demo, assistance choosing between Retail, Salon or Restaurant modules, or need custom multi-branch consultation — reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contacts, WhatsApp & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Instant WhatsApp Card */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-6 text-white shadow-xl shadow-emerald-500/15 relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Fastest Response (Avg. 3 mins)
                </div>
                <h3 className="text-2xl font-black">Chat on WhatsApp</h3>
                <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
                  Message our Pakistan onboarding advisors directly on WhatsApp for instant pricing quotes, questions, or a rapid video demo.
                </p>
                <div className="pt-2">
                  <a
                    href={COMPANY_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white text-emerald-800 hover:bg-emerald-50 text-xs sm:text-sm font-bold rounded-xl shadow transition-transform active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Open WhatsApp ({COMPANY_CONTACT.whatsapp})</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone & Email info */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Phone Helpline</div>
                  <a href={`tel:${COMPANY_CONTACT.phone}`} className="text-sm font-bold text-slate-900 hover:text-blue-600">
                    {COMPANY_CONTACT.phone}
                  </a>
                  <div className="text-xs text-slate-500">Mon - Sat, 9:00 AM - 9:00 PM PKT</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/60">
                <div className="p-2.5 rounded-xl bg-purple-100 text-purple-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Email Enquiries</div>
                  <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-sm font-bold text-slate-900 hover:text-blue-600">
                    {COMPANY_CONTACT.email}
                  </a>
                  <div className="text-xs text-slate-500">Responses within 2 business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200/60">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Offices in Pakistan</div>
                  <div className="text-xs text-slate-700 font-semibold space-y-1 mt-1">
                    <div>• <strong>Islamabad:</strong> Blue Area, F-5/1</div>
                    <div>• <strong>Lahore:</strong> Main Boulevard, Gulberg III</div>
                    <div>• <strong>Karachi:</strong> Harbor Front, Clifton Block 4</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Follow Our Official Socials:
              </div>
              <div className="flex flex-wrap gap-2">
                {COMPANY_CONTACT.socials.map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <span>{soc.name}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({soc.handle})</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Thank You, {formData.name}!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your inquiry for <strong>{formData.businessName || 'your business'}</strong> has been received. One of our Pakistani POS specialists will reach out via WhatsApp at <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-blue-600 hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                    Book a Free Demo or Request Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill in your business details and we'll configure a personalized demo sandbox for you.
                  </p>
                </div>

                {/* Module Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Which POS Module Are You Interested In?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, module: 'retail' })}
                      className={`p-3 rounded-xl border text-left flex items-center gap-2 transition-all ${
                        formData.module === 'retail'
                          ? 'border-blue-600 bg-blue-50/80 text-blue-900 font-bold'
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4 text-blue-600 shrink-0" />
                      <div className="text-xs">
                        <div>Shop & Retail</div>
                        <div className="text-[10px] text-emerald-600 font-semibold">Ready to Ship</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, module: 'beauty' })}
                      className={`p-3 rounded-xl border text-left flex items-center gap-2 transition-all ${
                        formData.module === 'beauty'
                          ? 'border-purple-600 bg-purple-50/80 text-purple-900 font-bold'
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                      <div className="text-xs">
                        <div>Beauty & Salon</div>
                        <div className="text-[10px] text-purple-600 font-semibold">Ready to Ship</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, module: 'restaurant' })}
                      className={`p-3 rounded-xl border text-left flex items-center gap-2 transition-all ${
                        formData.module === 'restaurant'
                          ? 'border-amber-600 bg-amber-50/80 text-amber-900 font-bold'
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <UtensilsCrossed className="w-4 h-4 text-amber-600 shrink-0" />
                      <div className="text-xs">
                        <div>Restaurant & Hotel</div>
                        <div className="text-[10px] text-amber-600 font-semibold">In Development</div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Asad Rao"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Business / Store Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Linsol Apparel & Mart"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300 1234567"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      City in Pakistan
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white cursor-pointer"
                    >
                      <option value="Islamabad">Islamabad</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Multan">Multan</option>
                      <option value="Peshawar">Peshawar</option>
                      <option value="Sialkot">Sialkot</option>
                      <option value="Gujranwala">Gujranwala</option>
                      <option value="Other">Other City</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Any Questions or Specific Requirements? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about how many counters, branches or specific needs you have..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-transform active:scale-[0.98] flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry (Free Consultation)</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

