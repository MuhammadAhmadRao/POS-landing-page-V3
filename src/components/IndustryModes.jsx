import React, { useState } from 'react';
import { INDUSTRY_CATEGORIES } from '../data/mockData';
import { 
  ShoppingBag, 
  Sparkles, 
  UtensilsCrossed, 
  CheckCircle, 
  ArrowRight, 
  Barcode, 
  Clock, 
  Calendar, 
  Users, 
  Coffee,
  Check,
  ChevronRight
} from 'lucide-react';

export default function IndustryModes({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('retail');

  const currentCategory = INDUSTRY_CATEGORIES.find(c => c.id === activeTab) || INDUSTRY_CATEGORIES[0];

  return (
    <section id="industries" className="py-20 md:py-28 bg-white border-b border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            Tailored Industry Modes
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Built for your business. <br />
            <span className="text-blue-600">Whatever you sell.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            One powerful POS engine with dedicated interface workflows designed specifically for retail shops, salons & spas, and restaurants.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80 max-w-full overflow-x-auto">
            {INDUSTRY_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              const IconComponent = cat.id === 'retail' ? ShoppingBag : (cat.id === 'beauty' ? Sparkles : UtensilsCrossed);
              
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2.5 px-5 sm:px-7 py-3 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-md shadow-slate-200/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${
                    isActive 
                      ? (cat.id === 'retail' ? 'text-blue-600' : (cat.id === 'beauty' ? 'text-purple-600' : 'text-emerald-600')) 
                      : 'text-slate-400'
                  }`} />
                  <span>{cat.title}</span>
                  {isActive && (
                    <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-blue-600" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Showcase Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/70 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Details & Features */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100/80 text-blue-700 text-xs font-bold tracking-wide uppercase">
                {currentCategory.heroTag}
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                {currentCategory.title} Mode
              </h3>

              <p className="text-base text-slate-600 leading-relaxed">
                {currentCategory.description}
              </p>

              {/* Feature Grid List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {currentCategory.features.map((feature, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-1">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{feature.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pl-6">
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

              {/* CTA */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('signup')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-colors"
                >
                  <span>Start Free {currentCategory.title} Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Category Simulator Widget */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-200/80 relative">
                
                {/* Header Simulator Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl text-white ${
                      activeTab === 'retail' ? 'bg-blue-600' : (activeTab === 'beauty' ? 'bg-purple-600' : 'bg-emerald-600')
                    }`}>
                      {activeTab === 'retail' && <ShoppingBag className="w-5 h-5" />}
                      {activeTab === 'beauty' && <Sparkles className="w-5 h-5" />}
                      {activeTab === 'restaurant' && <UtensilsCrossed className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        {activeTab === 'retail' && 'ManageO Retail Terminal'}
                        {activeTab === 'beauty' && 'ManageO Salon & Spa Board'}
                        {activeTab === 'restaurant' && 'ManageO Floor & KDS Engine'}
                      </div>
                      <div className="text-xs text-slate-400">Station 01 — Live Register</div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online
                  </span>
                </div>

                {/* Specific UI Mock per Tab */}
                {activeTab === 'retail' && (
                  <div className="space-y-4">
                    {/* Barcode Search bar mockup */}
                    <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 font-mono">
                      <Barcode className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-800 font-semibold">SKU: 890102934812</span>
                      <span className="ml-auto text-[11px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-sans font-bold">Auto-Scanned</span>
                    </div>

                    {/* Product items in current basket */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Scanned Items (3)</div>
                      
                      <div className="flex items-center justify-between p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                        <div>
                          <div className="text-sm font-bold text-slate-900">Premium Cotton Oxford Shirt</div>
                          <div className="text-xs text-slate-400">Qty: 2 • SKU-RET-4091 • Branch Stock: 84</div>
                        </div>
                        <div className="text-sm font-extrabold text-slate-900">Rs. 4,900.00</div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                        <div>
                          <div className="text-sm font-bold text-slate-900">Leather Formal Belt (Dark Brown)</div>
                          <div className="text-xs text-slate-400">Qty: 1 • SKU-RET-1102 • Branch Stock: 14</div>
                        </div>
                        <div className="text-sm font-extrabold text-slate-900">Rs. 1,650.00</div>
                      </div>
                    </div>

                    {/* Total Bar */}
                    <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-blue-700 font-semibold">Total Payable (Taxes Inc.)</div>
                        <div className="text-xs text-slate-500">Gross Margin: 28.4%</div>
                      </div>
                      <div className="text-xl font-black text-blue-700">Rs. 6,550.00</div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="py-2.5 px-3 bg-slate-900 text-white text-xs font-bold text-center rounded-xl">
                        💵 Quick Cash (Rs. 7,000)
                      </div>
                      <div className="py-2.5 px-3 bg-blue-600 text-white text-xs font-bold text-center rounded-xl">
                        💳 Card / QR Tap
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'beauty' && (
                  <div className="space-y-4">
                    {/* Appointment time slot preview */}
                    <div className="p-3.5 bg-purple-50/60 rounded-xl border border-purple-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-600 text-white rounded-lg">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">Today at 02:30 PM (60 Min)</div>
                          <div className="text-xs text-purple-700 font-semibold">Chair #3 • Client: Ayesha Malik</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 rounded-md">
                        In Service
                      </span>
                    </div>

                    {/* Services selected */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service Breakdown</div>
                      
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                        <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                          <span>Balayage Color Treatment + Blowdry</span>
                          <span>Rs. 12,500.00</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>Stylist: Sarah Khan (Senior Specialist)</span>
                          <span className="text-purple-600 font-semibold">Commission: 20% (Rs. 2,500)</span>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                        <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                          <span>Moroccan Argan Hair Oil 100ml (Retail)</span>
                          <span>Rs. 3,200.00</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>Add-on Retail Shelf</span>
                          <span className="text-purple-600 font-semibold">Commission: 10% (Rs. 320)</span>
                        </div>
                      </div>
                    </div>

                    {/* Client Formula Note */}
                    <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900">
                      <strong>Client Note:</strong> Prefers low-ammonia toner 8.1 + 10 vol developer. No allergies.
                    </div>
                  </div>
                )}

                {activeTab === 'restaurant' && (
                  <div className="space-y-4">
                    {/* Table visual map */}
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="p-2.5 bg-emerald-50 border-2 border-emerald-400 rounded-xl text-center">
                        <div className="text-xs font-bold text-emerald-800">Table T-04</div>
                        <div className="text-[11px] text-emerald-600 font-semibold">4 Guests • Bill: Rs. 4,850</div>
                        <span className="mt-1 inline-block px-1.5 py-0.5 text-[9px] bg-emerald-600 text-white rounded">Mains Served</span>
                      </div>

                      <div className="p-2.5 bg-amber-50 border-2 border-amber-400 rounded-xl text-center">
                        <div className="text-xs font-bold text-amber-800">Table T-07</div>
                        <div className="text-[11px] text-amber-600 font-semibold">2 Guests • Bill: Rs. 2,100</div>
                        <span className="mt-1 inline-block px-1.5 py-0.5 text-[9px] bg-amber-600 text-white rounded">Cooking 8m</span>
                      </div>

                      <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center">
                        <div className="text-xs font-bold text-slate-700">Table T-12</div>
                        <div className="text-[11px] text-slate-400 font-medium">Available (6 seats)</div>
                        <span className="mt-1 inline-block px-1.5 py-0.5 text-[9px] bg-slate-200 text-slate-700 rounded">Cleaned</span>
                      </div>
                    </div>

                    {/* Live KDS Ticket Simulation */}
                    <div className="p-3.5 bg-slate-900 text-white rounded-xl space-y-2 font-mono text-xs">
                      <div className="flex justify-between border-b border-slate-800 pb-2">
                        <span className="text-emerald-400 font-bold">KDS Ticket #42 — Table T-04</span>
                        <span className="text-slate-400">Server: Daniyal</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-200">
                        <span>1x Wood-Fired Truffle Pizza</span>
                        <span className="text-[10px] text-amber-400">Extra Crispy Crust</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-200">
                        <span>2x Wagyu Beef Sliders</span>
                        <span className="text-[10px] text-emerald-400">Medium Rare</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                      <span>Recipe Costing: 28% Food Cost Target</span>
                      <span className="text-emerald-600 font-bold">Split Check Ready</span>
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

