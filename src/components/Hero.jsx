import React from 'react';
import heroDashboardImg from '../assets/PHOTO-2026-11-23-15-37-29.jpg';
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  ShoppingBag, 
  Store, 
  ChevronRight,
  UtensilsCrossed
} from 'lucide-react';

export default function Hero({ onNavigate, onOpenDemo }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      
      {/* Radiant Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 shadow-sm hover:border-blue-300 transition-colors cursor-pointer group"
               onClick={() => onNavigate('signup')}>
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-semibold text-blue-900">
              ManageO 3.0 is live — Built for Pakistan Retail, Beauty & Dining
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-blue-600 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>

        {/* Main Hero Typography */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08] mb-6">
            A POS ready for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              what you've got.
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            The next-generation cloud point of sale that adapts to your industry. 
            Ring up sales at lightning speed, audit multi-branch inventory in real time, and maximize profit margins.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mt-8 sm:mt-10">
            <button
              onClick={() => onNavigate('signup')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 active:scale-[0.98] rounded-xl shadow-sm hover:shadow transition-all duration-200"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span>Interactive Live Demo</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 mt-8 text-xs sm:text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Instant approval & setup</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Showcase Mockup */}
        <div className="relative max-w-5xl mx-auto mt-6">
          
          {/* Subtle Frame Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-20 blur-xl -z-10" />

          {/* Device Showcase Container */}
          <div className="relative bg-slate-900 rounded-2xl sm:rounded-3xl p-2 sm:p-4 shadow-2xl border border-slate-800 overflow-hidden">
            
            {/* Top Device Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs text-slate-400 mb-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-[11px] text-slate-400 hidden sm:inline ml-2">app.manageo-pos.com/retail/dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  4 Branches Synced
                </span>
              </div>
            </div>

            {/* Dashboard Screenshot Preview with Interactive Overlay */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 group">
              <img 
                src={heroDashboardImg}
                alt="ManageO Point of Sale Dashboard" 
                className="w-full h-auto object-cover rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />

              {/* Floating Pill Highlights */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-900/90 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-slate-700/80 text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-md">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Real-Time Store Performance</div>
                    <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                      <span>Multi-Branch Cloud & Offline POS</span>
                      <span className="text-xs text-emerald-400 font-semibold bg-emerald-900/50 px-2 py-0.5 rounded-md">
                        +25.27% Gross Margin
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenDemo}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-blue-50 rounded-lg transition-colors shadow-sm"
                >
                  <span>Launch Live Fullscreen Demo</span>
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Switcher Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12 sm:mt-16">
          <div 
            onClick={() => {
              const el = document.getElementById('industries');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer group"
          >
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-2">
                <span>Shop & Retail</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">Ready</span>
              </div>
              <div className="text-xs text-slate-500">Clothing, jewelry, grocery marts, Khata</div>
            </div>
          </div>

          <div 
            onClick={() => {
              const el = document.getElementById('industries');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-purple-400 transition-all cursor-pointer group"
          >
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-purple-600 flex items-center gap-2">
                <span>Beauty & Salon</span>
                <span className="text-[10px] bg-purple-100 text-purple-800 font-bold px-1.5 py-0.2 rounded">Ready</span>
              </div>
              <div className="text-xs text-slate-500">Appointments, stylist commissions & bridal</div>
            </div>
          </div>

          <div 
            onClick={() => {
              const el = document.getElementById('industries');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-400 transition-all cursor-pointer group"
          >
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 flex items-center gap-2">
                <span>Restaurant & Hotel</span>
                <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded">Beta</span>
              </div>
              <div className="text-xs text-slate-500">Table map, KOT tickets & hotel rooms</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

