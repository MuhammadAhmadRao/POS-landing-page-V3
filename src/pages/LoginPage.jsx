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
  UtensilsCrossed
} from 'lucide-react';

export default function LoginPage({ onNavigate }) {
  const [email, setEmail] = useState('asad.rao@linsol.com');
  const [password, setPassword] = useState('••••••••••••');
  const [branch, setBranch] = useState('All Authorized Branches');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNavigate('dashboard');
    }, 600);
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
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200/80 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 py-12 sm:py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
          
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-950">
              Sign In to ManageO
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Access your stores, branches, registers, and reports
            </p>
          </div>

          {/* Quick Demo Access Bar */}
          <div className="mb-6 p-3 bg-blue-50/70 rounded-2xl border border-blue-100">
            <div className="text-[11px] font-bold text-blue-800 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>⚡ One-Click Instant Demo Login:</span>
              <span className="text-[10px] text-blue-600 font-semibold">Ready to test</span>
            </div>
            
            <div className="grid grid-cols-1 gap-1.5">
              <button
                onClick={() => handleQuickDemo('Owner', 'asad.rao@linsol.com')}
                className="w-full py-2 px-3 bg-white hover:bg-blue-600 hover:text-white rounded-xl text-xs font-bold text-slate-800 border border-slate-200 transition-colors flex items-center justify-between group text-left"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-3.5 h-3.5 text-blue-600 group-hover:text-white" />
                  <span>Asad Rao (Retail Owner)</span>
                </span>
                <span className="text-[10px] opacity-70">Demo Access →</span>
              </button>

              <button
                onClick={() => handleQuickDemo('Salon', 'elena@luxe-salon.com')}
                className="w-full py-2 px-3 bg-white hover:bg-purple-600 hover:text-white rounded-xl text-xs font-bold text-slate-800 border border-slate-200 transition-colors flex items-center justify-between group text-left"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600 group-hover:text-white" />
                  <span>Elena (Parlor & Beauty)</span>
                </span>
                <span className="text-[10px] opacity-70">Demo Access →</span>
              </button>
            </div>
          </div>

          <div className="relative flex py-2 items-center mb-4">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-3 text-slate-400 text-xs font-bold uppercase">or sign in with email</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address or Username
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@business.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-xs font-semibold text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
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

            {/* Target Branch Option */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Select Initial Branch
              </label>
              <div className="relative">
                <Store className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors cursor-pointer"
                >
                  <option value="All Authorized Branches">All Authorized Branches (Owner View)</option>
                  <option value="Branch 01 — Mall of Islamabad">Branch 01 — Mall of Islamabad</option>
                  <option value="Branch 02 — DHA Phase 5 Galleria">Branch 02 — DHA Phase 5 Galleria</option>
                  <option value="Branch 03 — Gulberg Boulevard">Branch 03 — Gulberg Boulevard</option>
                </select>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                <input type="checkbox" defaultChecked className="rounded text-blue-600 focus:ring-blue-500" />
                <span>Keep me signed in on this POS terminal</span>
              </label>
            </div>

            {/* Sign in Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-70"
              >
                {loading ? (
                  <span>Authenticating Credentials...</span>
                ) : (
                  <>
                    <span>Sign In to Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

        </div>
      </main>

      {/* Footer minimal */}
      <footer className="py-6 border-t border-slate-200/80 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} ManageO POS Technologies. Protected by 256-bit bank-grade encryption.
      </footer>

    </div>
  );
}

