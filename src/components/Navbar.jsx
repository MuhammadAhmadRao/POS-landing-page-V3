import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ShoppingBag, 
  Sparkles, 
  UtensilsCrossed, 
  Monitor, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  LayoutDashboard
} from 'lucide-react';

export default function Navbar({ onNavigate, currentPage = 'landing' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    if (currentPage !== 'landing') {
      onNavigate('landing');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav border-b border-slate-200/80 shadow-sm py-3' 
        : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => onNavigate('landing')} 
            className="cursor-pointer transition-opacity hover:opacity-95"
          >
            <Logo size="md" withTagline={false} />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Solutions Mega Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>

              {/* Solutions Dropdown Menu */}
              {solutionsDropdownOpen && (
                <div 
                  onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 animate-fade-in z-50"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                    Tailored Point of Sale Modes
                  </div>

                  <button 
                    onClick={() => { handleNavClick('industries'); }}
                    className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors group text-left"
                  >
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 group-hover:text-blue-600">Shop & Retail</div>
                      <div className="text-xs text-slate-500">Multi-branch inventory, barcode scanner, supplier orders</div>
                    </div>
                  </button>

                  <button 
                    onClick={() => { handleNavClick('industries'); }}
                    className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/80 transition-colors group text-left"
                  >
                    <div className="p-2 bg-purple-100 text-purple-600 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 group-hover:text-purple-600">Parlor & Beauty</div>
                      <div className="text-xs text-slate-500">Appointments, stylist commissions & treatment notes</div>
                    </div>
                  </button>

                  <button 
                    onClick={() => { handleNavClick('industries'); }}
                    className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group text-left"
                  >
                    <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <UtensilsCrossed className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 group-hover:text-emerald-600">Restaurant & Dining</div>
                      <div className="text-xs text-slate-500">Table map, KDS ticket kitchen display & bill splitting</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavClick('features')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Features
            </button>

            <button 
              onClick={() => handleNavClick('hardware')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Hardware
            </button>

            <button 
              onClick={() => handleNavClick('dashboard-preview')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-blue-600" />
              <span>Live Dashboard</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 rounded-full">
                Live
              </span>
            </button>

            <button 
              onClick={() => handleNavClick('pricing')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Pricing
            </button>

            <button 
              onClick={() => handleNavClick('faq')}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={() => onNavigate('login')}
              className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Log in
            </button>

            <button 
              onClick={() => onNavigate('signup')}
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button 
              onClick={() => onNavigate('login')}
              className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-blue-600"
            >
              Log in
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 animate-slide-up space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 pt-2">
            Industries & Modes
          </div>
          <div className="grid grid-cols-1 gap-1">
            <button 
              onClick={() => handleNavClick('industries')}
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg text-left"
            >
              <ShoppingBag className="w-4 h-4 text-blue-600" />
              <span>Shop & Retail Mode</span>
            </button>
            <button 
              onClick={() => handleNavClick('industries')}
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg text-left"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Parlor & Beauty Mode</span>
            </button>
            <button 
              onClick={() => handleNavClick('industries')}
              className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg text-left"
            >
              <UtensilsCrossed className="w-4 h-4 text-emerald-600" />
              <span>Restaurant & Dining Mode</span>
            </button>
          </div>

          <div className="border-t border-slate-100 pt-2 space-y-1">
            <button 
              onClick={() => handleNavClick('features')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Features & Modules
            </button>
            <button 
              onClick={() => handleNavClick('hardware')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Hardware Ecosystem
            </button>
            <button 
              onClick={() => handleNavClick('dashboard-preview')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg"
            >
              Live Interactive Dashboard
            </button>
            <button 
              onClick={() => handleNavClick('pricing')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Pricing & Plans
            </button>
          </div>

          <div className="pt-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onNavigate('signup'); }}
              className="w-full flex items-center justify-center gap-2 py-3 text-center text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

