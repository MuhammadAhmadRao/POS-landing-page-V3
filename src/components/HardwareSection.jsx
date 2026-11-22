import React, { useState } from 'react';
import { HARDWARE_PRODUCTS } from '../data/mockData';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  RotateCw, 
  Zap, 
  Monitor, 
  Tablet, 
  Printer, 
  CreditCard 
} from 'lucide-react';

export default function HardwareSection({ onNavigate }) {
  const [selectedProduct, setSelectedProduct] = useState(HARDWARE_PRODUCTS[0]);

  return (
    <section id="hardware" className="py-20 md:py-28 bg-white border-b border-slate-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            Hardware Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Hardware to upgrade <br />
            <span className="text-blue-600">your every day.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Plug-and-play terminals, customer-facing dual registers, and wireless barcode scanners designed for continuous high-traffic operations.
          </p>
        </div>

        {/* Hardware Catalog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {HARDWARE_PRODUCTS.map((item) => {
            const isSelected = selectedProduct.id === item.id;
            
            return (
              <div
                key={item.id}
                onClick={() => setSelectedProduct(item)}
                className={`bg-slate-50 rounded-2xl p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isSelected 
                    ? 'border-blue-600 ring-2 ring-blue-600/20 shadow-md bg-white' 
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80'
                }`}
              >
                <div>
                  {/* Image Container */}
                  <div className="h-44 rounded-xl overflow-hidden mb-4 relative bg-slate-200">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/80 backdrop-blur-sm text-white rounded-md">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 leading-tight mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                    {item.tagline}
                  </p>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-black text-slate-950">{item.price}</span>
                    <span className="text-xs text-slate-500 font-medium">{item.monthlyPrice}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/70">
                  <div className="text-[11px] font-bold text-slate-700 uppercase mb-2">Key Specs:</div>
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-4">
                    {item.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('signup');
                    }}
                    className={`w-full py-2.5 text-xs font-bold rounded-xl transition-colors ${
                      isSelected 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    Select Hardware
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hardware Guarantees Strip */}
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-wrap items-center justify-around gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Free Express Delivery</div>
              <div className="text-[11px] text-slate-500">Fast 2-day delivery with pre-configured software</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">2-Year Hardware Warranty</div>
              <div className="text-[11px] text-slate-500">Overnight replacement guarantee on all devices</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl">
              <RotateCw className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">30-Day Risk-Free Returns</div>
              <div className="text-[11px] text-slate-500">Test on your counters with 100% money back</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

