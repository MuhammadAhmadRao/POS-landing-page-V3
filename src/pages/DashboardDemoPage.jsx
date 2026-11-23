import React, { useState } from 'react';
import Logo from '../components/Logo';
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
  Calendar,
  Layers,
  ArrowLeft,
  LayoutDashboard,
  Building,
  Key,
  Shield,
  Bookmark,
  FileText,
  Settings,
  Printer,
  ChevronRight,
  ExternalLink,
  Sliders,
  DollarSign,
  Menu
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

export default function DashboardDemoPage({ onNavigate }) {
  const [selectedBranch, setSelectedBranch] = useState("All Authorized Branches");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeModule, setActiveModule] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      
      {/* Top Utility Nav to Return to Landing */}
      <div className="bg-slate-950 text-white px-4 py-2 flex items-center justify-between text-xs border-b border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-bold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Landing Page</span>
          </button>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-emerald-400 font-medium hidden sm:inline flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Interactive POS Sandbox Mode (Live Data Match)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('signup')}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-colors"
          >
            Create My Store Account Free
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Dark Sidebar (Exact structure from dashboard screenshot) */}
        <aside className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-[#0f172a] text-slate-300 flex flex-col transition-all duration-300 shrink-0 select-none`}>
          
          {/* Logo & Toggle Header */}
          <div className="h-16 px-4 flex items-center justify-between border-b border-slate-800/80">
            {!sidebarCollapsed && (
              <div onClick={() => onNavigate('landing')} className="cursor-pointer">
                <Logo theme="light" size="sm" showBadge={true} />
              </div>
            )}
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors mx-auto"
              title="Toggle Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-4 px-2 space-y-6 text-xs">
            
            {/* Top Primary */}
            <div className="space-y-1">
              <button 
                onClick={() => setActiveModule('Dashboard')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition-colors ${
                  activeModule === 'Dashboard' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <LayoutDashboard className="w-4 h-4 shrink-0" />
                {!sidebarCollapsed && <span>Dashboard</span>}
              </button>
            </div>

            {/* Section: Business Management */}
            <div>
              {!sidebarCollapsed && (
                <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Business Management
                </div>
              )}
              <div className="space-y-0.5">
                {[
                  { name: 'Branches', icon: Building },
                  { name: 'Users', icon: Users },
                  { name: 'Roles & Permissions', icon: Shield }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveModule(item.name)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${
                      activeModule === item.name 
                        ? 'bg-slate-800 text-white' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0 text-slate-400" />
                    {!sidebarCollapsed && <span>{item.name}</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Section: POS Modules */}
            <div>
              {!sidebarCollapsed && (
                <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  POS Modules
                </div>
              )}
              <div className="space-y-0.5">
                {[
                  { name: 'Products', icon: Package, sub: ['Categories', 'Brands & Units'] },
                  { name: 'Inventory', icon: Boxes, sub: ['Stock Audit', 'Stock Adjustment', 'Stock Transfer', 'Low Stock Alerts'] },
                  { name: 'Sales', icon: ShoppingCart },
                  { name: 'Purchases', icon: Truck },
                  { name: 'Customers', icon: Users },
                  { name: 'Finance', icon: DollarSign },
                  { name: 'Reports', icon: BarChart3 },
                  { name: 'Audit Log', icon: FileText }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <button
                      onClick={() => setActiveModule(item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-medium transition-colors ${
                        activeModule === item.name 
                          ? 'bg-slate-800 text-white' 
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 shrink-0 text-slate-400" />
                        {!sidebarCollapsed && <span>{item.name}</span>}
                      </div>
                      {!sidebarCollapsed && item.sub && (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                      )}
                    </button>
                    {!sidebarCollapsed && item.sub && activeModule === item.name && (
                      <div className="pl-9 pr-2 py-1 space-y-1">
                        {item.sub.map((s, si) => (
                          <div key={si} className="text-[11px] text-slate-400 hover:text-white py-1 cursor-pointer">
                            {s}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Settings */}
            <div>
              {!sidebarCollapsed && (
                <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Settings
                </div>
              )}
              <div className="space-y-0.5">
                {[
                  { name: 'Settings', icon: Settings },
                  { name: 'Receipts', icon: Bookmark },
                  { name: 'Hardware & Printing', icon: Printer }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveModule(item.name)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${
                      activeModule === item.name 
                        ? 'bg-slate-800 text-white' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0 text-slate-400" />
                    {!sidebarCollapsed && <span>{item.name}</span>}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Footer of Sidebar */}
          {!sidebarCollapsed && (
            <div className="p-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Display a menu</span>
              <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">workspace</span>
            </div>
          )}

        </aside>

        {/* Right Application Body */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          
          {/* Main Top Header */}
          <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
            
            {/* Left Header Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-lg text-xs font-bold text-slate-800 border border-slate-200">
                <Building className="w-3.5 h-3.5 text-blue-600" />
                <span>LINSOL Account Verification</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>

              <div className="relative">
                <select 
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-semibold rounded-lg px-3 py-1.5 pr-7 cursor-pointer focus:outline-none"
                >
                  {REAL_DASHBOARD_DATA.branches.map((b, i) => (
                    <option key={i} value={b}>{b}</option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-4 hidden md:block">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search anything..." 
                  className="w-full pl-8 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none"
                />
              </div>
            </div>

            {/* Notifications & User */}
            <div className="flex items-center gap-3">
              <button className="p-2 text-slate-500 hover:text-slate-800 bg-slate-100 rounded-lg relative">
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 bg-blue-600 rounded-full absolute top-1.5 right-1.5" />
              </button>

              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  AR
                </div>
                <div className="text-left leading-tight hidden sm:block">
                  <div className="text-xs font-bold text-slate-900">Asad Rao</div>
                  <div className="text-[10px] font-bold text-blue-600 uppercase">BUSINESS OWNER</div>
                </div>
              </div>
            </div>

          </header>

          {/* Subheader & Date Controls */}
          <div className="bg-white px-4 sm:px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-slate-950">Dashboard</h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Welcome back, Asad Rao! Here's what's happening with your business today.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs flex-wrap">
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 px-3 py-1.5 rounded-lg text-slate-700 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Dashboard period: 01/11/2026 to 22/11/2026</span>
              </div>

              <div className="bg-slate-50 border border-slate-300 px-3 py-1.5 rounded-lg text-slate-700 font-medium">
                {selectedBranch}
              </div>

              <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-xs transition-colors">
                Apply
              </button>
              <button className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-600 font-semibold rounded-lg flex items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Refresh</span>
              </button>
            </div>
          </div>

          {/* Metric Cards Grid (17 cards matching screenshot) */}
          <main className="p-4 sm:p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {REAL_DASHBOARD_DATA.metrics.map((metric) => {
                const Icon = iconMap[metric.icon] || Wallet;

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
                    className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex items-start gap-3.5"
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

            {/* Visual Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Sales Trend */}
              <div className="lg:col-span-6 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Sales Trend</h3>
                    <p className="text-xs text-slate-400">Net sales and paid order count for the selected period</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Daily</span>
                </div>

                {/* SVG Line & Bar Combined Chart */}
                <div className="h-48 pt-6 border-b border-slate-100 flex items-end justify-between gap-3 px-2">
                  {[
                    { label: '01 Nov', val: 20, orders: 2 },
                    { label: '05 Nov', val: 30, orders: 3 },
                    { label: '09 Nov', val: 24, orders: 2 },
                    { label: '13 Nov', val: 15, orders: 1 },
                    { label: '17 Nov', val: 82, orders: 8, high: true },
                    { label: '21 Nov', val: 95, orders: 11, peak: true },
                  ].map((pt, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-2 group">
                      <span className="text-[10px] font-mono text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        {pt.orders} orders
                      </span>
                      <div 
                        className={`w-full max-w-[32px] rounded-t-md transition-all ${
                          pt.peak ? 'bg-blue-600' : 'bg-slate-200 group-hover:bg-blue-400'
                        }`}
                        style={{ height: `${pt.val}%` }}
                      />
                      <span className="text-[10px] text-slate-500 font-medium">{pt.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 pt-3">
                  <span>Hover or focus a sales bar to inspect its values.</span>
                  <span className="font-bold text-slate-900">Total Net: Rs. 3,337,864.68</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Payment Methods</h3>
                  <p className="text-xs text-slate-400">Rs. 3,339,757.68 Net Sales</p>

                  <div className="flex flex-col items-center my-4">
                    <div className="w-28 h-28 rounded-full border-8 border-blue-600 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Cash</div>
                        <div className="text-xs font-black text-slate-900">99.8%</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    {REAL_DASHBOARD_DATA.paymentBreakdown.map((pm, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-600">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pm.color }} />
                          {pm.method}
                        </span>
                        <span className="font-bold text-slate-900">{pm.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sales by Category */}
              <div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-slate-900">Sales by Category</h3>
                    <span className="text-xs text-blue-600 font-semibold cursor-pointer">View All</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-4">Net revenue contribution</p>

                  <div className="space-y-3.5">
                    {REAL_DASHBOARD_DATA.categoryBreakdown.map((cat, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs font-bold text-slate-800">
                          <span>{cat.name}</span>
                          <span>{cat.share}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${cat.color} rounded-full`} style={{ width: cat.share }} />
                        </div>
                        <div className="text-[11px] text-slate-400">{cat.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Stock Levels:</span>
                  <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    480 In Stock (94.2%)
                  </span>
                </div>
              </div>

            </div>

            {/* Recent Activities Feed */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-slate-900">Recent Activities & Transactions</h3>
                <span className="text-xs text-blue-600 font-semibold cursor-pointer">View All Transactions</span>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {REAL_DASHBOARD_DATA.recentActivities.map((act, i) => (
                  <div key={i} className="py-2.5 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400 font-mono">{act.time}</span>
                      <span className="font-bold text-slate-900">{act.activity}</span>
                      <span className="text-slate-600">{act.details}</span>
                    </div>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 font-semibold rounded text-[11px]">
                      {act.branch}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </main>

        </div>

      </div>

    </div>
  );
}

