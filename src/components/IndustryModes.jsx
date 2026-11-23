import React, { useState } from 'react';
import { INDUSTRY_CATEGORIES } from '../data/mockData';
import { 
  ShoppingBag, 
  Sparkles, 
  UtensilsCrossed, 
  CheckCircle2, 
  ArrowRight, 
  Barcode, 
  Clock, 
  Calendar, 
  Users, 
  Coffee,
  Check,
  ChevronRight,
  Send,
  MessageSquare,
  Receipt,
  FileCheck,
  HelpCircle,
  Building,
  Store,
  Scissors
} from 'lucide-react';

export default function IndustryModes({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('retail');
  const [scannedFeedback, setScannedFeedback] = useState(false);
  const [whatsappSent, setWhatsappSent] = useState(false);

  const currentCategory = INDUSTRY_CATEGORIES.find(c => c.id === activeTab) || INDUSTRY_CATEGORIES[0];

  const handleSimulateScan = () => {
    setScannedFeedback(true);
    setTimeout(() => setScannedFeedback(false), 1400);
  };

  const handleSendWhatsapp = () => {
    setWhatsappSent(true);
    setTimeout(() => setWhatsappSent(false), 2000);
  };

  return (
    <section id="industries" className="py-20 md:py-28 bg-white border-b border-slate-100 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            3 Specialized Core Modules
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Tailored for Pakistan’s Markets. <br />
            <span className="text-blue-600">Built for how you do business.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            One powerful, unified platform with dedicated interface workflows designed specifically for retail shops, salons & parlors, and restaurants.
          </p>
        </div>

        {/* 3 Main Module Tabs with Live Status Badges */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 max-w-full overflow-x-auto gap-1">
            {INDUSTRY_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              const IconComponent = cat.id === 'retail' ? ShoppingBag : (cat.id === 'beauty' ? Sparkles : UtensilsCrossed);
              
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap relative ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-md shadow-slate-200/70 border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${
                    isActive 
                      ? (cat.id === 'retail' ? 'text-blue-600' : (cat.id === 'beauty' ? 'text-purple-600' : 'text-amber-500')) 
                      : 'text-slate-400'
                  }`} />
                  <span>{cat.title}</span>
                  
                  {/* Status Pill */}
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    cat.status === 'ready' 
                      ? (cat.id === 'beauty' ? 'bg-purple-100 text-purple-700' : 'bg-emerald-100 text-emerald-700')
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {cat.status === 'ready' ? 'Ready to Ship' : 'In Dev (Beta)'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Showcase Card */}
        <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/70 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Details, Target Pakistan Shops & Features */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Status Header Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  currentCategory.status === 'ready'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${currentCategory.status === 'ready' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
                  {currentCategory.statusLabel}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {currentCategory.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                {currentCategory.title} Module
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentCategory.description}
              </p>

              {/* Where It Works in Pakistan (Pill tags) */}
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  Designed Specifically For These Pakistan Businesses:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentCategory.shopTypes.map((type, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-white text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 shadow-xs flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-blue-600" />
                      <span>{type}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentCategory.features.map((feature, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{feature.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pl-5">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
                {currentCategory.stats.map((st, idx) => (
                  <div key={idx}>
                    <div className="text-xl sm:text-2xl font-black text-slate-900">{st.value}</div>
                    <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5">{st.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('signup')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 transition-all active:scale-[0.98]"
                >
                  <span>
                    {currentCategory.status === 'ready' 
                      ? `Start 14-Day Free ${currentCategory.title} Trial`
                      : 'Join Restaurant & Hotel Waitlist'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Dynamic Interactive Micro-Terminal Simulator */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-200/80 relative">
                
                {/* Floating Micro-Badge */}
                <div className="absolute -top-3.5 right-6 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1.5 animate-float">
                  <Receipt className="w-3.5 h-3.5" />
                  <span>Interactive Live Preview</span>
                </div>

                {/* Header Simulator Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2.5 rounded-xl text-white ${
                      activeTab === 'retail' ? 'bg-blue-600' : (activeTab === 'beauty' ? 'bg-purple-600' : 'bg-amber-500')
                    }`}>
                      {activeTab === 'retail' && <ShoppingBag className="w-5 h-5" />}
                      {activeTab === 'beauty' && <Sparkles className="w-5 h-5" />}
                      {activeTab === 'restaurant' && <UtensilsCrossed className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        {activeTab === 'retail' && 'ManageO Retail Register'}
                        {activeTab === 'beauty' && 'ManageO Salon & Chair Terminal'}
                        {activeTab === 'restaurant' && 'ManageO Table & KOT Dispatch'}
                      </div>
                      <div className="text-[11px] text-slate-400">Offline Ready • Counter 01 (Pakistan)</div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                </div>

                {/* 1. RETAIL SIMULATOR */}
                {activeTab === 'retail' && (
                  <div className="space-y-3.5 animate-fade-in">
                    {/* Simulated barcode scanner bar */}
                    <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono">
                      <Barcode className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-800 font-semibold">SKU: 890102934812</span>
                      <button 
                        onClick={handleSimulateScan}
                        className="ml-auto text-[11px] bg-blue-100 hover:bg-blue-200 text-blue-700 px-2.5 py-1 rounded-md font-sans font-bold transition-colors"
                      >
                        {scannedFeedback ? '✓ Scanned!' : 'Click to Scan Barcode'}
                      </button>
                    </div>

                    {/* Basket items */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                        <span>Cart Items (2)</span>
                        <span className="text-blue-600 font-semibold">Tax: FBR Included</span>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900">Embroidered Lawn 3-Piece Suite</div>
                          <div className="text-[11px] text-slate-400">Qty: 1 • Size: M • In Stock: 42 pcs</div>
                        </div>
                        <div className="text-sm font-extrabold text-slate-900">₨ 4,850</div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900">Pure Silk Chiffon Dupatta</div>
                          <div className="text-[11px] text-slate-400">Qty: 1 • Navy Blue • In Stock: 18 pcs</div>
                        </div>
                        <div className="text-sm font-extrabold text-slate-900">₨ 1,650</div>
                      </div>
                    </div>

                    {/* Total & Khata Option */}
                    <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-100 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-blue-800 font-bold">Total Bill: ₨ 6,500.00</div>
                        <div className="text-[11px] text-slate-500">Customer: Tariq Mahmood (VIP Khata)</div>
                      </div>
                      <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                        Cash / Raast
                      </span>
                    </div>

                    {/* WhatsApp Invoice Action */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button 
                        onClick={handleSendWhatsapp}
                        className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{whatsappSent ? '✓ Sent to WhatsApp!' : 'Send WhatsApp Receipt'}</span>
                      </button>

                      <div className="py-2.5 px-3 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5">
                        <Receipt className="w-3.5 h-3.5" />
                        <span>Print Thermal Receipt</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. BEAUTY & SALON SIMULATOR */}
                {activeTab === 'beauty' && (
                  <div className="space-y-3.5 animate-fade-in">
                    
                    {/* Active Appointment Card */}
                    <div className="p-3 bg-purple-50/80 rounded-xl border border-purple-100 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold">
                          SK
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900">Sana Khan (Bridal Package)</div>
                          <div className="text-[11px] text-slate-500">Stylist: Ayesha Noor • Chair #02</div>
                        </div>
                      </div>
                      <span className="text-[11px] bg-purple-200 text-purple-900 font-bold px-2 py-0.5 rounded-full">
                        In Service (3:00 PM)
                      </span>
                    </div>

                    {/* Treatment Breakdown */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Services Performed</div>
                      
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800">Bridal HD Glam Makeup + Lashes</span>
                        <span className="font-bold text-slate-900">₨ 18,000</span>
                      </div>

                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800">Hydra-Facial Glow Treatment</span>
                        <span className="font-bold text-slate-900">₨ 6,500</span>
                      </div>
                    </div>

                    {/* Stylist Commission Box */}
                    <div className="p-3 bg-slate-900 text-white rounded-xl space-y-1.5 text-xs">
                      <div className="flex justify-between font-medium text-slate-300">
                        <span>Total Service Value:</span>
                        <span className="font-bold text-white">₨ 24,500.00</span>
                      </div>
                      <div className="flex justify-between text-purple-300">
                        <span>Ayesha Noor Stylist Commission (18%):</span>
                        <span className="font-bold text-purple-300">₨ 4,410.00</span>
                      </div>
                      <div className="flex justify-between text-emerald-400 font-bold pt-1 border-t border-slate-800">
                        <span>Salon Net Revenue:</span>
                        <span>₨ 20,090.00</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button 
                        onClick={() => onNavigate('signup')}
                        className="py-2.5 px-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold text-center transition-colors"
                      >
                        Book Appointment
                      </button>
                      <button 
                        onClick={handleSendWhatsapp}
                        className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold text-center transition-colors"
                      >
                        {whatsappSent ? '✓ Sent SMS/WA' : 'WhatsApp Client Note'}
                      </button>
                    </div>

                  </div>
                )}

                {/* 3. RESTAURANT & HOTEL SIMULATOR */}
                {activeTab === 'restaurant' && (
                  <div className="space-y-3.5 animate-fade-in">
                    
                    {/* Beta Banner */}
                    <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between text-xs text-amber-900 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        Under Active Development (Early Beta Preview)
                      </span>
                      <span className="text-[10px] bg-amber-200/80 px-2 py-0.5 rounded font-bold uppercase">
                        Q1 2027
                      </span>
                    </div>

                    {/* Interactive Table Layout Preview */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Floor & Table Status</div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                          <div className="text-xs font-extrabold text-emerald-800">Table T-01</div>
                          <div className="text-[10px] text-emerald-600 font-semibold">Available</div>
                        </div>

                        <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-center">
                          <div className="text-xs font-extrabold text-blue-900">Table T-04</div>
                          <div className="text-[10px] text-blue-700 font-semibold">KOT In Kitchen</div>
                        </div>

                        <div className="p-2.5 bg-purple-50 border border-purple-200 rounded-xl text-center">
                          <div className="text-xs font-extrabold text-purple-900">Room 302</div>
                          <div className="text-[10px] text-purple-700 font-semibold">Folio Billing</div>
                        </div>
                      </div>
                    </div>

                    {/* KOT Preview */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono space-y-1">
                      <div className="flex justify-between font-bold text-slate-800">
                        <span>KOT #42 • Table T-04</span>
                        <span className="text-blue-600 font-sans">Kitchen Routing</span>
                      </div>
                      <div className="text-slate-600">1x Dum Pukht Mutton Karahi [Mild Spice]</div>
                      <div className="text-slate-600">4x Roghani Naan • 2x Mint Margaritas</div>
                      <div className="text-[11px] text-slate-400 font-sans">Sent to Kitchen Screen: 2 mins ago</div>
                    </div>

                    <div className="pt-1">
                      <button 
                        onClick={() => onNavigate('signup')}
                        className="w-full py-2.5 px-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Join Restaurant & Hotel Waitlist</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
