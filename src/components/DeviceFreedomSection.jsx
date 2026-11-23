import React from 'react';
import { 
  Laptop, 
  Smartphone, 
  Tablet, 
  Monitor, 
  WifiOff, 
  Printer, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Sparkles,
  RefreshCw,
  Clock
} from 'lucide-react';

export default function DeviceFreedomSection({ onNavigate }) {
  return (
    <section id="devices" className="py-20 md:py-28 bg-white border-b border-slate-100 scroll-mt-16 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Zero Proprietary Hardware Required
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Run on any device you already own. <br />
            <span className="text-blue-600">No expensive hardware traps.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Unlike legacy POS vendors who lock you into ₨ 150,000+ proprietary terminals, ManageO runs directly in modern web browsers and as an installable app on PC, Mac, iPad, Android tablets, or phones.
          </p>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Windows & Mac PC</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Run on any desktop computer, laptop, or all-in-one touch monitor. Use keyboard shortcuts or touch gestures for high-speed counter checkout.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-blue-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Chrome, Edge, Safari ready</span>
            </div>
          </div>

          <div className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-purple-400 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Tablet className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">iPads & Android Tablets</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sleek, wireless counter setup for luxury boutiques, hair salons, and cafes. Swivel the tablet to let clients review services and tip.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-purple-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Any standard tablet stand</span>
            </div>
          </div>

          <div className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <WifiOff className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">100% Offline Resilient</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Built specifically for Pakistani internet drops and load shedding. Keep scanning, printing, and billing without Wi-Fi. Syncs automatically when back online.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Zero downtime guarantee</span>
            </div>
          </div>

          <div className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Printer className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Universal Peripherals</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Plug in any standard 58mm or 80mm ESC/POS thermal printer, USB/Bluetooth barcode scanner, and RJ11 cash drawer. No proprietary cable kits.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-amber-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Plug-and-play setup</span>
            </div>
          </div>

        </div>

        {/* Offline vs Online Live Comparison Banner */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/60 border border-blue-700/60 rounded-full text-xs font-bold text-blue-300 uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span>Engineered for Pakistani Infrastructure</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                No Internet? No Electricity? <br />
                <span className="text-blue-400">Your Checkout Counter Keeps Ringing.</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                When internet connections fail or generator switchovers happen, ManageO seamlessly stores invoices in encrypted local browser memory. Receipts print normally, barcodes continue scanning, and Khata balances stay accurate.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Local IndexedDB Encrypted Storage</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Instant Multi-Branch Background Sync</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/90 rounded-2xl p-5 border border-slate-700/80 space-y-3 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-700">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-slate-200 font-bold font-sans">Live Counter Status</span>
                </span>
                <span className="text-[11px] text-emerald-400 font-sans font-semibold">Offline Ready</span>
              </div>

              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between p-2 bg-slate-900/60 rounded-lg">
                  <span className="text-slate-400 font-sans">Active Connection:</span>
                  <span className="text-white font-bold font-sans">Simulated Wi-Fi / Local Cache</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-900/60 rounded-lg">
                  <span className="text-slate-400 font-sans">Offline Sales Queued:</span>
                  <span className="text-emerald-400 font-bold font-sans">0 (All Synced to Cloud)</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-900/60 rounded-lg">
                  <span className="text-slate-400 font-sans">Thermal Receipt Printer:</span>
                  <span className="text-cyan-400 font-bold font-sans">Connected (58mm/80mm ESC/POS)</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-900/60 rounded-lg">
                  <span className="text-slate-400 font-sans">FBR Digital Invoice Mode:</span>
                  <span className="text-amber-400 font-bold font-sans">Active (FBR POS Ready)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('signup')}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-sans font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Test ManageO On Your Device Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

