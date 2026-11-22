import React from 'react';
import { 
  Boxes, 
  WifiOff, 
  ShieldCheck, 
  Zap, 
  Receipt, 
  Users2, 
  LineChart, 
  Barcode, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function FeaturesBento({ onNavigate }) {
  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/70 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Core Operating Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Everything your business needs <br />
            <span className="text-blue-600">to sell, manage, and scale.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Engineered from day one for multi-branch scale, offline speed, and complete gross-margin visibility.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Large Multi-Branch Inventory Card (Span 8) */}
          <div className="md:col-span-3 lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="inline-flex p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 mb-5">
                <Boxes className="w-6 h-6" />
              </div>
              <span className="ml-3 px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 rounded-md">
                Multi-Branch Real-Time
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3 mb-2">
                Live Inventory Across Every Location & Warehouse
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Never miss a sale due to unexpected stockouts. Track purchase orders, supplier shipments, inter-branch transfers, and automated low-stock triggers with zero manual reconciliation.
              </p>
            </div>

            {/* Visual Micro-Widget inside Card */}
            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="text-xs text-slate-500 font-medium">Branch 01 (Mall)</div>
                <div className="text-lg font-black text-slate-900 mt-1">420 Items</div>
                <span className="text-[11px] text-emerald-600 font-bold">100% In Stock</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="text-xs text-slate-500 font-medium">Branch 02 (Galleria)</div>
                <div className="text-lg font-black text-slate-900 mt-1">390 Items</div>
                <span className="text-[11px] text-amber-600 font-bold">4 Low Stock</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="text-xs text-slate-500 font-medium">Central Hub Depot</div>
                <div className="text-lg font-black text-slate-900 mt-1">12,400 Units</div>
                <span className="text-[11px] text-blue-600 font-bold">Automated Reorder</span>
              </div>
            </div>
          </div>

          {/* Card 2: Offline First Architecture (Span 4) */}
          <div className="md:col-span-3 lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="inline-flex p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 mb-5">
                <WifiOff className="w-6 h-6" />
              </div>
              <span className="ml-3 px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 rounded-md">
                100% Offline-Proof
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-3 mb-2">
                Keep Selling When The Internet Drops
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Network hiccup or power glitch? ManageO queues offline sales, prints receipts, and processes payments without breaking stride. Everything auto-syncs when reconnecting.
              </p>
            </div>

            <div className="mt-6 p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs text-emerald-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Offline queue verified: 0 lost tickets</span>
            </div>
          </div>

          {/* Card 3: Deep Financial Auditing & COGS (Span 4) */}
          <div className="md:col-span-3 lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="inline-flex p-3 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 mb-5">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-2">
                Real-Time Profit & COGS
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Know your real profitability instantly. View gross profit, supplier purchase invoices, discounts, and operating net margins down to the exact percentage.
              </p>
            </div>

            <div className="mt-6 p-3.5 bg-purple-50/50 rounded-xl border border-purple-100">
              <div className="flex justify-between items-center text-xs text-slate-600">
                <span>Calculated Gross Margin</span>
                <span className="font-extrabold text-purple-700">17.19%</span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-600 mt-1">
                <span>Net Profit Generated</span>
                <span className="font-extrabold text-purple-700">Rs. 383,447.68</span>
              </div>
            </div>
          </div>

          {/* Card 4: Lightning Checkout & Barcodes (Span 4) */}
          <div className="md:col-span-3 lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="inline-flex p-3 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-2">
                Sub-Second Barcode Engine
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Keep checkout lines flying. Zero-latency item queries, continuous multi-scan mode, and custom price-embedded barcode labels for fast grocery & retail.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono bg-slate-50 p-3 rounded-xl border border-slate-100 text-slate-700">
              <Barcode className="w-4 h-4 text-amber-600" />
              <span>Avg scan speed: 0.38 seconds</span>
            </div>
          </div>

          {/* Card 5: Team Roles & Staff Commission (Span 4) */}
          <div className="md:col-span-3 lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="inline-flex p-3 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100 mb-5">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-2">
                Granular Roles & Commissions
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Protect sensitive business figures. Assign custom cashier, manager, and stylist permissions with automated tips, commissions, and shift timeclock logs.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-slate-500 bg-cyan-50/50 p-3 rounded-xl border border-cyan-100">
              <span>Audit Log Trail:</span>
              <span className="font-bold text-cyan-800">100% Action Accountability</span>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('signup')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-blue-600 bg-white hover:bg-blue-50 border border-blue-200 rounded-xl shadow-xs transition-colors"
          >
            <span>Explore all 40+ POS modules in free trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

