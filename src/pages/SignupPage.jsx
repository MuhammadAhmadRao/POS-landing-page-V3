import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import Logo from '../components/Logo';
import { 
  ShoppingBag, 
  Sparkles, 
  UtensilsCrossed, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Store, 
  User, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Building2, 
  ArrowLeft 
} from 'lucide-react';

export default function SignupPage({ onNavigate }) {
  const [category, setCategory] = useState('retail'); // 'retail' | 'beauty' | 'restaurant'
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    password: '',
    branchesCount: '1',
    agreed: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant verification and approval
    setTimeout(() => {
      setIsSubmitting(false);
      setIsApproved(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const getCategoryDetails = () => {
    switch (category) {
      case 'beauty':
        return {
          title: 'Parlor & Beauty',
          icon: Sparkles,
          color: 'purple',
          features: ['Appointment Calendar', 'Stylist Commissions', 'Treatment Formulas']
        };
      case 'restaurant':
        return {
          title: 'Restaurant & Dining',
          icon: UtensilsCrossed,
          color: 'emerald',
          features: ['Visual Floor Table Map', 'Kitchen Display System (KDS)', 'Split Checks']
        };
      default:
        return {
          title: 'Shop & Retail',
          icon: ShoppingBag,
          color: 'blue',
          features: ['Multi-Branch Inventory Sync', 'Barcode Engine', 'Vendor Purchase Orders']
        };
    }
  };

  const catDetails = getCategoryDetails();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      
      {/* Top Simple Navigation */}
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
            Already registered?{' '}
            <button 
              onClick={() => onNavigate('login')}
              className="text-blue-600 font-bold hover:underline ml-1"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* Approved Success Screen */}
        {isApproved ? (
          <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 text-center animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
              Instant Approval Confirmed
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mb-3">
              Welcome to ManageO, {formData.ownerName || 'Asad'}!
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Your business <strong>"{formData.businessName || 'LINSOL Prime'}"</strong> has been authorized for the <strong>{catDetails.title}</strong> service category across <strong>{formData.branchesCount} branch(es)</strong>.
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-8 text-left space-y-2">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Assigned Store ID:</span>
                <span className="font-mono font-bold text-slate-900">MNG-2026-9041</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Configured Industry Mode:</span>
                <span className="font-bold text-blue-600">{catDetails.title} Mode</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Trial Period:</span>
                <span className="font-bold text-emerald-600">14 Days (Full Access)</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('dashboard')}
              className="w-full py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
            >
              <span>Launch Your POS Dashboard</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Brand & Category Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                  Quick Onboarding
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-3 leading-tight">
                  Open your ManageO account in 2 minutes.
                </h1>
                <p className="text-slate-600 text-sm sm:text-base mt-2">
                  Select your primary service category. Our intelligent business operating system configures your menus, stock workflows, and registers automatically.
                </p>
              </div>

              {/* Service Category Selection Cards */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  1. Choose Service Category (For Approval)
                </div>

                {/* Retail Option */}
                <div
                  onClick={() => setCategory('retail')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    category === 'retail'
                      ? 'border-blue-600 bg-blue-50/60 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${category === 'retail' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <ShoppingBag className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Shop & Retail</div>
                        <div className="text-xs text-slate-500">Supermarkets, Boutiques, Electronics, Marts</div>
                      </div>
                    </div>
                    {category === 'retail' && (
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Beauty Option */}
                <div
                  onClick={() => setCategory('beauty')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    category === 'beauty'
                      ? 'border-purple-600 bg-purple-50/60 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${category === 'beauty' ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Parlor & Beauty</div>
                        <div className="text-xs text-slate-500">Salons, Spas, Barbershops, Clinics</div>
                      </div>
                    </div>
                    {category === 'beauty' && (
                      <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Restaurant Option */}
                <div
                  onClick={() => setCategory('restaurant')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    category === 'restaurant'
                      ? 'border-emerald-600 bg-emerald-50/60 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${category === 'restaurant' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <UtensilsCrossed className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Restaurant & Dining</div>
                        <div className="text-xs text-slate-500">Cafes, Fast Food, Dine-In, Bakeries</div>
                      </div>
                    </div>
                    {category === 'restaurant' && (
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Approval Guarantee Box */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Approval Policy</span>
                </div>
                <p>
                  We verify your trade category to pre-load industry-standard units, tax rates, receipt templates, and hardware profiles. Instant demo sandbox unlocks right away!
                </p>
              </div>
            </div>

            {/* Right Column: Account Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/90">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                    2. Business & Owner Details
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Configuring for: <span className="font-bold text-blue-600">{catDetails.title}</span>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Business or Store Legal Name *
                    </label>
                    <div className="relative">
                      <Store className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. LINSOL Retail Flagship"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Owner Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Owner / Admin Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Asad Rao"
                          value={formData.ownerName}
                          onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="+92 300 1234567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Work Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="owner@yourbusiness.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Password & Branch count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Create Secure Password *
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="password"
                          required
                          placeholder="Min 8 characters"
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Initial Store Branches *
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <select
                          value={formData.branchesCount}
                          onChange={(e) => setFormData({ ...formData, branchesCount: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors cursor-pointer"
                        >
                          <option value="1">1 Store / Register</option>
                          <option value="2-5">2 to 5 Branches</option>
                          <option value="6-20">6 to 20 Branches</option>
                          <option value="20+">20+ Enterprise Network</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-xs text-slate-500 leading-normal">
                        I agree to the ManageO POS Terms of Service and acknowledge that category approval will be authorized for my business.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting for Category Verification...</span>
                      ) : (
                        <>
                          <span>Create Account & Request Approval</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-2 font-medium">
                      Instant 14-day full access • No credit card required
                    </p>
                  </div>
                </form>

              </div>
            </div>

          </div>
        )}

      </main>

      {/* Footer minimal */}
      <footer className="py-6 border-t border-slate-200/80 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} ManageO POS Technologies. Safe 256-bit SSL encrypted.
      </footer>

    </div>
  );
}

