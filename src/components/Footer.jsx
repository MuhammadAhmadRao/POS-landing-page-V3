import React from 'react';
import Logo from './Logo';
import { 
  ShoppingBag, 
  Sparkles, 
  UtensilsCrossed, 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck 
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
              ManageO is the all-in-one smart Cloud Point of Sale system built specifically for modern retail stores, hair & beauty salons, and dining establishments.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                PCI-DSS Level 1 Compliant
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                99.99% Uptime SLA
              </span>
            </div>
          </div>

          {/* Solutions Col */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Industry Modes
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
                  className="hover:text-white transition-colors"
                >
                  Shop & Retail Mode
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
                  className="hover:text-white transition-colors"
                >
                  Parlor & Beauty Mode
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
                  className="hover:text-white transition-colors"
                >
                  Restaurant & Dining Mode
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('dashboard')}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Explore Interactive Dashboard →
                </button>
              </li>
            </ul>
          </div>

          {/* Product & Hardware Col */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Hardware & Modules
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => {
                    onNavigate('landing');
                    setTimeout(() => {
                      const el = document.getElementById('hardware');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Mobile Handheld Terminal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('landing');
                    setTimeout(() => {
                      const el = document.getElementById('hardware');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Dual-Screen Register
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('landing');
                    setTimeout(() => {
                      const el = document.getElementById('hardware');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Rotating Tablet Stand
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onNavigate('landing');
                    setTimeout(() => {
                      const el = document.getElementById('hardware');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-white transition-colors"
                >
                  Kitchen Display Hub (KDS)
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
                  Pricing & Subscriptions
                </button>
              </li>
            </ul>
          </div>

          {/* Account & Support Col */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get Started
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigate('signup')}
                  className="text-white font-bold hover:text-blue-400 transition-colors"
                >
                  Create Account (14-Day Free)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('login')}
                  className="hover:text-white transition-colors"
                >
                  Account Login & Branch Portal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('dashboard')}
                  className="hover:text-white transition-colors"
                >
                  Demo Live Experience
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  System Requirements & Help
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} ManageO POS Technologies Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Safeguards</span>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

