import React, { useState } from 'react';
import Logo from '../components/Logo';
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  Store, 
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  Eye, 
  EyeOff,
  Sparkles,
  ShoppingBag,
  UtensilsCrossed,
  Fingerprint,
  Receipt,
  WifiOff,
  MessageSquare
} from 'lucide-react';

export default function LoginPage({ onNavigate }) {
  const [email, setEmail] = useState('asad.rao@linsol.com');
  const [password, setPassword] = useState('••••••••••••');
  const [branch, setBranch] = useState('All Authorized Branches');
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [touchIdActive, setTouchIdActive] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNavigate('dashboard');
    }, 600);
  };

  const handleTouchIdLogin = () => {
    setTouchIdActive(true);
    setTimeout(() => {
      setTouchIdActive(false);
      onNavigate('dashboard');
    }, 800);
  };

  const handleQuickDemo = (role, demoEmail) => {
    setEmail(demoEmail);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNavigate('dashboard');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between py-4 sm:py-6 px-4">
      
      {/* Top Header */}
      <header className="max-w-6xl w-full mx-auto flex items-center justify-between py-2 px-2">
        <div 
          onClick={() => onNavigate('landing')}
          className="cursor-pointer flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Back to Overview</span>
        </div>

        <div onClick={() => onNavigate('landing')} className="cursor-pointer">
          <Logo size="md" />
        </div>

        <div className="text-xs sm:text-sm font-semibold text-slate-600">
          Need an account?{' '}
          <button 
            onClick={() => onNavigate('signup')}
            className="text-blue-600 font-bold hover:underline ml-1"
          >
            Sign Up Free
          </button>
        </div>
      </header>

      {/* Main Tablet-Like Frame (Inspired by reference picture) */}
      <main className="flex-1 max-w-5xl w-full mx-auto flex items-center justify-center my-4 sm:my-8">
        <div className="w-full bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Top subtle brand header inside tablet frame */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              ManageO POS
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Cloud & Offline Business Operating System • Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Form Card */}
            <div className="lg:col-span-6 bg-white sm:bg-slate-50/60 rounded-3xl p-4 sm:p-7 sm:border sm:border-slate-200/70 shadow-xs">
              
              <div className="mb-6">
                <h1 className="text-2xl font-black text-slate-950">
                  Login
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Access your counters, inventory, and Khata ledger
                </p>
              </div>

              {/* Instant 1-Click Demo Logins */}
              <div className="mb-5 p-2.5 bg-blue-50/80 rounded-2xl border border-blue-100">
                <div className="text-[10px] font-bold text-blue-800 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>⚡ Instant Demo Access:</span>
                  <span className="text-[10px] text-blue-600 font-bold">1-Click</span>
                </div>
                
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => handleQuickDemo('Retail', 'asad.rao@linsol.com')}
                    className="py-1.5 px-2 bg-white hover:bg-blue-600 hover:text-white rounded-xl text-[11px] font-bold text-slate-800 border border-slate-200 transition-colors flex items-center gap-1.5 group text-left shadow-2xs"
                  >
                    <ShoppingBag className="w-3 h-3 text-blue-600 group-hover:text-white shrink-0" />
                    <span className="truncate">Retail (Asad Rao)</span>
                  </button>

                  <button
                    onClick={() => handleQuickDemo('Salon', 'zainab@luxeglow.com')}
                    className="py-1.5 px-2 bg-white hover:bg-purple-600 hover:text-white rounded-xl text-[11px] font-bold text-slate-800 border border-slate-200 transition-colors flex items-center gap-1.5 group text-left shadow-2xs"
                  >
                    <Sparkles className="w-3 h-3 text-purple-600 group-hover:text-white shrink-0" />
                    <span className="truncate">Salon (Zainab)</span>
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-3.5">
                
                {/* Email / Username */}
                <div>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address / Cashier ID"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="p-1 text-slate-400 hover:text-slate-600 absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Keep me logged in toggle (Exact style from sample image) */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-600 font-medium">Keep me logged in</span>
                  <button
                    type="button"
                    onClick={() => setKeepLoggedIn(!keepLoggedIn)}
                    className={`w-10 h-5 rounded-full p-0.5 transition-colors ${keepLoggedIn ? 'bg-emerald-500' : 'bg-slate-300'}`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${keepLoggedIn ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>

                {/* Primary Log In Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>Log in</span>
                  )}
                </button>

                {/* TouchID / Quick Biometric Button (As shown in reference image!) */}
                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={handleTouchIdLogin}
                    className="inline-flex flex-col items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors p-2 rounded-xl group"
                  >
                    <div className={`w-11 h-11 rounded-2xl border-2 flex items-center justify-center transition-all ${
                      touchIdActive 
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-600 scale-110' 
                        : 'border-blue-200 group-hover:border-blue-600 text-blue-600 group-hover:bg-blue-50'
                    }`}>
                      <Fingerprint className="w-6 h-6 animate-pulse-subtle" />
                    </div>
                    <span className="text-[11px] font-bold">
                      {touchIdActive ? 'Verifying Biometric...' : 'Login With TouchID / PIN'}
                    </span>
                  </button>
                </div>

              </form>
            </div>

            {/* Right Column: Beautiful Cashier Illustration, POS Counter & Animated Receipt */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
              
              {/* Soft circular pastel background backdrop */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-blue-100/70 rounded-full blur-2xl -z-10" />

              {/* Graphic Cashier & Counter Illustration */}
              <div className="w-full max-w-md relative">
                
                {/* Micro Animated Thermal Receipt Slip (floating) */}
                <div className="absolute -top-4 -left-2 sm:-left-6 z-20 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200 text-[11px] font-mono max-w-[200px] animate-float">
                  <div className="flex items-center justify-between pb-1.5 border-b border-dashed border-slate-300 font-bold text-slate-800">
                    <span className="font-sans font-black text-blue-600">ManageO POS</span>
                    <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1 rounded font-sans">PAID</span>
                  </div>
                  <div className="py-1 text-slate-600 space-y-0.5 text-[10px]">
                    <div>INV: #1084 • Branch 01</div>
                    <div className="flex justify-between">
                      <span>Lawn Kurti</span>
                      <span className="font-bold">₨ 4,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Silk Scarf</span>
                      <span className="font-bold">₨ 1,200</span>
                    </div>
                  </div>
                  <div className="pt-1 border-t border-dashed border-slate-300 flex justify-between font-bold text-slate-900">
                    <span>Total (Cash):</span>
                    <span className="text-blue-600">₨ 5,700</span>
                  </div>
                </div>

                {/* Cashier SVG / Graphic Representation */}
                <div className="bg-gradient-to-b from-blue-50/50 to-slate-100/80 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col items-center text-center">
                  
                  {/* Cashier Avatar */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-3xl font-black shadow-lg shadow-blue-500/20">
                      👨‍💼
                    </div>
                    <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
                      ✓
                    </span>
                  </div>

                  <div className="font-bold text-slate-900 text-sm">
                    Counter Ready • Live Terminal
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    100% Offline Capability • Multi-Branch Sync
                  </div>

                  {/* Counter Screen Mockup */}
                  <div className="w-full bg-slate-900 text-white rounded-2xl p-3.5 mt-5 shadow-lg border border-slate-800 text-left font-mono text-xs">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 pb-2 border-b border-slate-800">
                      <span className="flex items-center gap-1.5 font-sans font-bold text-slate-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Counter 01 Active
                      </span>
                      <span className="text-emerald-400 font-sans font-bold">₨ 3.34M Sales</span>
                    </div>
                    <div className="pt-2 text-[11px] text-slate-300 font-sans flex items-center justify-between">
                      <span>Offline Sync Status:</span>
                      <span className="text-emerald-400 font-bold">Zero Queued Orders</span>
                    </div>
                  </div>

                  {/* Trust Pill Tags */}
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-[10px] font-bold text-slate-600">
                    <span className="px-2.5 py-1 bg-white rounded-full border border-slate-200 flex items-center gap-1">
                      <WifiOff className="w-3 h-3 text-emerald-600" />
                      <span>Works Without Internet</span>
                    </span>
                    <span className="px-2.5 py-1 bg-white rounded-full border border-slate-200 flex items-center gap-1">
                      <MessageSquare className="w-3 h-3 text-emerald-600" />
                      <span>WhatsApp Receipts</span>
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-500 py-2">
        ManageO Point of Sale • Built for Pakistan Retail, Beauty & Dining
      </footer>

    </div>
  );
}
