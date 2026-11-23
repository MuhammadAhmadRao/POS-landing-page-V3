import React from 'react';
import Logo from './Logo';
import { COMPANY_CONTACT } from '../data/mockData';
import { 
  ShoppingBag, 
  Sparkles, 
  UtensilsCrossed, 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck,
  MessageSquare,
  Laptop,
  WifiOff
} from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigate('landing')} 
              className="cursor-pointer inline-block"
            >
              <Logo theme="light" size="md" withTagline={true} />
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              ManageO is Pakistan's premier cloud and offline point of sale operating system. Built for retail clothing boutiques, beauty parlors, salons, and dining establishments.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                <WifiOff className="w-3.5 h-3.5 text-emerald-400" />
                100% Offline Capable
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                FBR POS Ready
              </span>
            </div>

            {/* Social Links Bar */}
            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Connect on Social Media:
              </div>
              <div className="flex flex-wrap gap-2">
                {COMPANY_CONTACT.socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 rounded-lg text-xs font-semibold transition-colors"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Modules Col */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Modules
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => {
                    onNavigate('landing');
                    setTimeout(() => {
                      const el = document.getElementById('industries');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-white transition-colors flex items-center justify-between w-full"
                >
                  <span>Shop & Retail</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.2 rounded">Ready</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('landing');
                    setTimeout(() => {
                      const el = document.getElementById('industries');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-white transition-colors flex items-center justify-between w-full"
                >
                  <span>Beauty & Salon</span>
                  <span className="text-[10px] text-purple-400 bg-purple-950/60 px-1.5 py-0.2 rounded">Ready</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('landing');
                    setTimeout(() => {
                      const el = document.getElementById('industries');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-white transition-colors flex items-center justify-between w-full"
                >
                  <span>Restaurant & Hotel</span>
                  <span className="text-[10px] text-amber-400 bg-amber-950/60 px-1.5 py-0.2 rounded">In Beta</span>
                </button>
              </li>
              <li className="pt-2">
                <button 
                  onClick={() => onNavigate('dashboard')}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Interactive Dashboard Demo →
                </button>
              </li>
            </ul>
          </div>

          {/* Capabilities & Pricing Col */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Features & Platform
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => {
                    onNavigate('landing');
                    setTimeout(() => {
                      const el = document.getElementById('devices');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Zero Hardware Lock-In (BYOD)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('landing');
                    setTimeout(() => {
                      const el = document.getElementById('devices');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Offline-First Architecture
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('landing');
                    setTimeout(() => {
                      const el = document.getElementById('pricing');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Pricing in PKR (₨ 4,500/mo)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('landing');
                    setTimeout(() => {
                      const el = document.getElementById('faq');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Pakistan Contact & WhatsApp Col */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Pakistan Contacts
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a
                  href={COMPANY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: {COMPANY_CONTACT.whatsapp}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY_CONTACT.phone}`} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>Helpline: {COMPANY_CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <span>{COMPANY_CONTACT.email}</span>
                </a>
              </li>
              <li className="pt-2 text-[11px] text-slate-500">
                Offices: Islamabad (Blue Area) • Lahore (Gulberg) • Karachi (Clifton)
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 ManageO POS Technologies (SMC-Pvt) Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-400">Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-slate-400">Terms of Service</a>
            
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
