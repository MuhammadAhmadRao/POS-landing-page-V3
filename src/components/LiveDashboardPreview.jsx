import React, { useState } from 'react';
import { REAL_DASHBOARD_DATA } from '../data/mockData';
import { 
  Wallet, 
  Truck, 
  ShoppingCart, 
  Users, 
  RotateCcw, 
  Package, 
  Boxes, 
  AlertTriangle, 
  Ban, 
  HandCoins, 
  Percent, 
  Tag, 
  TrendingUp, 
  BarChart3, 
  CreditCard, 
  Coins,
  ChevronDown, 
  RefreshCw, 
  Search, 
  Bell, 
  Maximize2,
  Calendar,
  ExternalLink,
  Store,
  Layers,
  ArrowUpRight
} from 'lucide-react';

const iconMap = {
  Wallet,
  Truck,
  ShoppingCart,
  Users,
  RotateCcw,
  Package,
  Boxes,
  AlertTriangle,
  Ban,
  HandCoins,
  Percent,
  Tag,
  TrendingUp,
  BarChart3,
  CreditCard,
  Coins
};

export default function LiveDashboardPreview({ onOpenFullDashboard }) {
  const [selectedBranch, setSelectedBranch] = useState("All Authorized Branches");
  const [activeTabFilter, setActiveTabFilter] = useState("all");

  const filteredMetrics = REAL_DASHBOARD_DATA.metrics.filter(m => {
    if (activeTabFilter === 'all') return true;
    return m.category === activeTabFilter;
  });

  return (
    <section id="dashboard-preview" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden scroll-mt-16">
      
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Interactive Interface Preview
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Real-time control. <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Every rupee & unit accounted for.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
              Experience the actual ManageO dashboard. Switch branches, monitor gross & net profit, track Rs. 6.4M in stock value, and review active sales streams.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenFullDashboard}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-900 bg-white hover:bg-blue-50 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Maximize2 className="w-4 h-4 text-blue-600" />
              <span>Full Dashboard Demo App</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>

        {/* The Dashboard Application Window */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-700/60 overflow-hidden text-slate-900">
          
          {/* Top Bar of the POS System */}
          <div className="bg-white px-4 sm:px-6 py-3.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            
            {/* Left: Organization & Branch Select */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-bold text-slate-700 border border-slate-200">
                <Store className="w-3.5 h-3.5 text-blue-600" />
                <span>{REAL_DASHBOARD_DATA.storeName}</span>
              </div>

              <div className="relative">
                <select 
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-semibold rounded-lg px-3 py-1.5 pr-7 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {REAL_DASHBOARD_DATA.branches.map((b, i) => (
                    <option key={i} value={b}>{b}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Middle: Quick Search */}
            <div className="hidden md:flex items-center flex-1 max-w-sm mx-4">
              <div className="relative w-full">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  readOnly 
                  placeholder="Search anything (SKUs, invoices, customers)..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Right: Notifications & Profile */}
            <div className="flex items-center gap-3">
              <button className="p-2 text-slate-500 hover:text-slate-700 bg-slate-100 rounded-lg relative">
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 bg-blue-600 rounded-full absolute top-1.5 right-1.5" />
              </button>

              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  DU
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-slate-900 leading-tight">{REAL_DASHBOARD_DATA.ownerName}</div>
                  <div className="text-[10px] font-bold text-blue-600 uppercase">{REAL_DASHBOARD_DATA.role}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Subheader Toolbar */}
          <div className="bg-slate-50/90 px-4 sm:px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Dashboard</h3>
                <span className="px-2 py-0.5 text-[11px] font-bold bg-blue-100 text-blue-700 rounded-md">Retail Mode</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Welcome back, {REAL_DASHBOARD_DATA.ownerName}! Here's what's happening with your business today.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 text-xs flex-wrap">
              <div className="flex items-center gap-1.5 bg-white border border-slate-300 px-3 py-1.5 rounded-lg text-slate-700 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>01/11/2026 to 22/11/2026</span>
              </div>

              <button className="px-4 py-1.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-xs">
                Apply
              </button>
              <button className="p-1.5 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 text-slate-600">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Metric Category Tabs */}
          <div className="px-4 sm:px-6 pt-4 pb-2 bg-slate-50 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px] mr-1">Views:</span>
            {[
              { id: 'all', label: 'All 17 Metrics' },
              { id: 'sales', label: 'Sales & Returns' },
              { id: 'inventory', label: 'Inventory & Stock' },
              { id: 'finance', label: 'Profits & Margins' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTabFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors whitespace-nowrap ${
                  activeTabFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 17 Metric Cards Grid */}
          <div className="p-4 sm:p-6 bg-slate-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {filteredMetrics.map((metric) => {
              const Icon = iconMap[metric.icon] || Wallet;

              // Color styles matching the dashboard screenshot
              const colorStyles = {
                blue: 'bg-blue-50 text-blue-600 border-blue-100',
                orange: 'bg-orange-50 text-orange-600 border-orange-100',
                emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
                green: 'bg-green-50 text-green-600 border-green-100',
                purple: 'bg-purple-50 text-purple-600 border-purple-100',
                rose: 'bg-rose-50 text-rose-600 border-rose-100',
                amber: 'bg-amber-50 text-amber-600 border-amber-100',
                cyan: 'bg-cyan-50 text-cyan-600 border-cyan-100',
                yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
                red: 'bg-red-50 text-red-600 border-red-200',
                sky: 'bg-sky-50 text-sky-600 border-sky-100',
                pink: 'bg-pink-50 text-pink-600 border-pink-100',
                indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
                teal: 'bg-teal-50 text-teal-600 border-teal-100',
              }[metric.color] || 'bg-slate-50 text-slate-600 border-slate-100';

              return (
                <div 
                  key={metric.id}
                  className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex items-start gap-3.5"
                >
                  <div className={`p-3 rounded-xl shrink-0 border ${colorStyles}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 truncate">{metric.title}</span>
                      {metric.alert && (
                        <span className="px-1.5 py-0.2 text-[9px] font-extrabold uppercase bg-amber-100 text-amber-800 rounded">
                          Alert
                        </span>
                      )}
                    </div>
                    <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mt-0.5 truncate">
                      {metric.value}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-tight line-clamp-1">
                      {metric.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Insights Section (Sales Trends, Payment Methods Donut, Categories) */}
          <div className="p-4 sm:p-6 bg-slate-100/70 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Sales Trend Chart Preview */}
            <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Sales Trend & Order Volume</h4>
                  <p className="text-xs text-slate-400">Net sales and paid order count for selected period</p>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Daily View</span>
              </div>

              {/* Trend Chart Graphic Simulation */}
              <div className="h-44 flex items-end justify-between gap-2 pt-6 px-2 border-b border-slate-100">
                {[
                  { date: '01 Nov', height: '15%', orders: 2 },
                  { date: '05 Nov', height: '22%', orders: 3 },
                  { date: '09 Nov', height: '18%', orders: 2 },
                  { date: '13 Nov', height: '12%', orders: 1 },
                  { date: '17 Nov', height: '88%', orders: 8, highlight: true },
                  { date: '21 Nov', height: '94%', orders: 11, peak: true },
                  { date: 'Today', height: '35%', orders: 6 }
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer">
                    <span className="text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {bar.orders} ord
                    </span>
                    <div 
                      className={`w-full max-w-[28px] rounded-t-md transition-all duration-300 ${
                        bar.peak ? 'bg-gradient-to-t from-blue-600 to-cyan-400' : 'bg-slate-200 group-hover:bg-blue-400'
                      }`}
                      style={{ height: bar.height }}
                    />
                    <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">{bar.date}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 pt-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  Peak day sales: Rs. 1,480,200.00
                </span>
                <span className="font-semibold text-emerald-600">+22.4% vs prev period</span>
              </div>
            </div>

            {/* Payment Methods Donut */}
            <div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="mb-3">
                <h4 className="text-sm font-bold text-slate-900">Payment Methods</h4>
                <p className="text-xs text-slate-400">Total Rs. 3,337,864.68</p>
              </div>

              {/* Donut Simulation */}
              <div className="flex flex-col items-center my-2">
                <div className="relative w-28 h-28 rounded-full border-8 border-blue-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Cash</div>
                    <div className="text-xs font-black text-slate-900">99.8%</div>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 text-xs">
                {REAL_DASHBOARD_DATA.paymentBreakdown.slice(0, 3).map((pm, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pm.color }} />
                      {pm.method}
                    </span>
                    <span className="font-bold text-slate-900">{pm.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sales by Category & Stock Gauge */}
            <div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Sales by Category</h4>
                <p className="text-xs text-slate-400 mb-4">Net revenue contribution</p>

                <div className="space-y-3">
                  {REAL_DASHBOARD_DATA.categoryBreakdown.map((cat, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-slate-800">
                        <span>{cat.name}</span>
                        <span>{cat.share}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${cat.color} rounded-full`}
                          style={{ width: cat.share }}
                        />
                      </div>
                      <div className="text-[11px] text-slate-400">{cat.amount}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Stock Fulfillment Rate:</span>
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  94.2% In Stock
                </span>
              </div>
            </div>

          </div>

          {/* Live Interactive Footer Callout */}
          <div className="bg-slate-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Ready to test-drive all 17 modules?</div>
                <div className="text-xs text-slate-400">Launch the full interactive dashboard with sample catalog, invoices & branches.</div>
              </div>
            </div>

            <button
              onClick={onOpenFullDashboard}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-md"
            >
              <span>Launch Full Interactive App</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

