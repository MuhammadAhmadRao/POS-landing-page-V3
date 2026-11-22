import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function CTASection({ onNavigate }) {
  return (
    <section className="py-20 md:py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Radiant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>Instant Onboarding & Category Setup</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
          Ready to run your business with <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
            ManageO Point of Sale?
          </span>
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of retailers, salons, and restaurants. Select your business service, verify your branches, and begin ringing up sales in under 5 minutes.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('signup')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-base font-bold text-slate-950 bg-white hover:bg-slate-100 active:scale-[0.98] rounded-xl shadow-xl shadow-white/10 transition-all duration-200"
          >
            <span>Start 14-Day Free Trial</span>
            <ArrowRight className="w-5 h-5 text-blue-600" />
          </button>

          <button
            onClick={() => onNavigate('login')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 active:scale-[0.98] rounded-xl transition-all duration-200"
          >
            <span>Log In to Existing Account</span>
          </button>
        </div>

        {/* Bottom Proof */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Free product catalog migration</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Bank-grade 256-bit encryption</span>
          </div>
        </div>

      </div>
    </section>
  );
}

