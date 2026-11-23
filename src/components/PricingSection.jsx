import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/mockData';
import { Check, ArrowRight, Sparkles, ShieldCheck, CreditCard, Building2, HelpCircle } from 'lucide-react';

export default function PricingSection({ onNavigate }) {
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' | 'yearly'

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            Pakistan Market Pricing (PKR)
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Transparent pricing in PKR. <br />
            <span className="text-blue-600">Zero hidden transaction fees.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Fair, predictable subscription plans tailored for Pakistani businesses. Start with a full-featured 14-day free trial.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly Billing
            </span>

            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-8 bg-slate-200 rounded-full p-1 transition-colors hover:bg-slate-300 focus:outline-none"
              aria-label="Toggle billing cycle"
            >
              <div className={`w-6 h-6 bg-blue-600 rounded-full shadow-md transform transition-transform ${
                billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>

            <span className={`text-sm font-bold flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-14">
          {PRICING_PLANS.map((plan, idx) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
            const periodText = billingCycle === 'yearly' ? plan.periodYearly : plan.periodMonthly;

            return (
              <div
                key={idx}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlighted
                    ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 scale-100 md:scale-[1.03] z-10'
                    : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular in Pakistan</span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-extrabold text-slate-950">{plan.name}</h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-xs font-extrabold text-slate-500">₨</span>
                    <span className="text-4xl sm:text-5xl font-black text-slate-950">
                      {price}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">/ month</span>
                  </div>
                  
                  <div className="text-[11px] text-blue-600 font-medium mb-6">
                    {periodText}
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Included Capabilities:
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onNavigate('signup')}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      plan.highlighted
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 active:scale-[0.98]'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900 active:scale-[0.98]'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2 font-medium">
                    14-day free access • No credit card required
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Pakistan Payment Methods Banner */}
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Pakistani Payment Methods Supported</span>
            </div>
            <p className="text-xs text-slate-500">
              Pay conveniently in PKR via direct Bank Transfer, Raast ID, JazzCash, Easypaisa, or Visa / Mastercard.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-slate-700">
            <span className="px-3 py-1 bg-slate-100 rounded-lg border border-slate-200">Raast ID</span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg border border-slate-200">Bank Transfer</span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg border border-slate-200">JazzCash</span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg border border-slate-200">Easypaisa</span>
            <span className="px-3 py-1 bg-slate-100 rounded-lg border border-slate-200">Visa / MC</span>
          </div>
        </div>

      </div>
    </section>
  );
}
