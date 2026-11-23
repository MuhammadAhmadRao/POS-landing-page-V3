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
  ArrowLeft,
  Receipt,
  WifiOff,
  MessageSquare
} from 'lucide-react';

export default function SignupPage({ onNavigate }) {
  const [category, setCategory] = useState('retail'); // 'retail' | 'beauty' | 'restaurant'
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    password: '',
    city: 'Lahore',
    branchesCount: '1',
    agreed: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsApproved(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  const getCategoryDetails = () => {
    switch (category) {
      case 'beauty':
        return {
          title: 'Beauty & Salon',
          status: 'Ready to Ship',
          icon: Sparkles,
          color: 'purple',
          features: ['Visual Appointment Calendar', 'Stylist Commissions (15-20%)', 'Bridal & Service Packages']
        };
      case 'restaurant':
        return {
          title: 'Restaurant & Hotel',
          status: 'Under Development (Beta)',
          icon: UtensilsCrossed,
          color: 'amber',
          features: ['Interactive Floor & Table Map', 'Kitchen Order Ticket (KOT) Routing', 'Room Billing Integration']
        };
      default:
        return {
          title: 'Shop & Retail',
          status: 'Ready to Ship',
          icon: ShoppingBag,
          color: 'blue',
          features: ['Multi-Branch Inventory Sync', 'Rapid Barcode Scanning', 'Customer Khata & WhatsApp Receipts']
        };
    }
  };

  const catDetails = getCategoryDetails();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between py-4 sm:py-6 px-4">
      
      {/* Top Simple Navigation */}
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
          Already registered?{' '}
          <button 
            onClick={() => onNavigate('login')}
            className="text-blue-600 font-bold hover:underline ml-1"
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Main Content Area in Modern Tablet Frame */}
      <main className="flex-1 max-w-6xl w-full mx-auto flex items-center justify-center my-4 sm:my-8">
        
        {isApproved ? (
          <div className="max-w-xl w-full mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 text-center animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
              Instant Authorization Confirmed
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mb-3">
              Welcome to ManageO, {formData.ownerName || 'Asad'}!
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Your business <strong>"{formData.businessName || 'LINSOL Prime'}"</strong> in <strong>{formData.city}</strong> has been configured for the <strong>{catDetails.title}</strong> module.
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-8 text-left space-y-2 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Assigned Store ID:</span>
                <span className="font-mono font-bold text-slate-900">MNG-PK-2026-9041</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Selected Module:</span>
                <span className="font-bold text-blue-600">{catDetails.title}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Free Trial Access:</span>
                <span className="font-bold text-emerald-600">14 Days Full Access (₨ 0 Charged)</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Offline Billing:</span>
                <span className="font-bold text-slate-800">Enabled on all your devices</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('dashboard')}
              className="w-full py-4 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
            >
              <span>Launch Your POS Dashboard</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="w-full bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Module Selection & Brand Graphics */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider">
                    2-Minute Setup
                  </span>
                  <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight mt-3 leading-tight">
                    Start your ManageO trial in Pakistan.
                  </h1>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2">
                    Select your primary business module. Our platform automatically configures your stock workflows, registers, and receipts.
                  </p>
                </div>

                {/* 3 Module Choice Cards */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    1. Choose Primary POS Module:
                  </div>

                  {/* Retail Card */}
                  <div
                    onClick={() => setCategory('retail')}
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                      category === 'retail'
                        ? 'border-blue-600 bg-blue-50/70 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${category === 'retail' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <ShoppingBag className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                            <span>Shop & Retail</span>
                            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.5 rounded">Ready to Ship</span>
                          </div>
                          <div className="text-xs text-slate-500">Boutiques, Jewelry, Grocery Marts, Electronics</div>
                        </div>
                      </div>
                      {category === 'retail' && (
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Salon Card */}
                  <div
                    onClick={() => setCategory('beauty')}
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                      category === 'beauty'
                        ? 'border-purple-600 bg-purple-50/70 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${category === 'beauty' ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                            <span>Beauty & Salon</span>
                            <span className="text-[10px] bg-purple-100 text-purple-800 font-extrabold px-1.5 py-0.5 rounded">Ready to Ship</span>
                          </div>
                          <div className="text-xs text-slate-500">Parlors, Hair Salons, Spas & Barbershops</div>
                        </div>
                      </div>
                      {category === 'beauty' && (
                        <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Restaurant Card */}
                  <div
                    onClick={() => setCategory('restaurant')}
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                      category === 'restaurant'
                        ? 'border-amber-600 bg-amber-50/70 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${category === 'restaurant' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                          <UtensilsCrossed className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                            <span>Restaurant & Hotel</span>
                            <span className="text-[10px] bg-amber-100 text-amber-800 font-extrabold px-1.5 py-0.5 rounded">In Dev (Beta)</span>
                          </div>
                          <div className="text-xs text-slate-500">Dine-in, Cafes, Bakeries & Boutique Hotels</div>
                        </div>
                      </div>
                      {category === 'restaurant' && (
                        <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>

                </div>

                {/* Floating Micro Receipt Graphic Box */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Receipt className="w-4 h-4 text-blue-600" />
                    <span>Included in 14-Day Free Trial:</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 pl-1">
                    {catDetails.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t border-slate-200 flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <WifiOff className="w-3 h-3 text-emerald-600" />
                      100% Offline
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3 text-emerald-600" />
                      WhatsApp Invoices
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: Account Creation Form */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    2. Business & Owner Credentials:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Business / Store Name
                      </label>
                      <div className="relative">
                        <Store className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. LINSOL Fabrics"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Owner / Manager Full Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.ownerName}
                          onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                          placeholder="e.g. Asad Rao"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="owner@business.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        WhatsApp / Mobile Number
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0300 1234567"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        City in Pakistan
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white cursor-pointer"
                      >
                        <option value="Lahore">Lahore</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Rawalpindi">Rawalpindi</option>
                        <option value="Faisalabad">Faisalabad</option>
                        <option value="Multan">Multan</option>
                        <option value="Peshawar">Peshawar</option>
                        <option value="Sialkot">Sialkot</option>
                        <option value="Gujranwala">Gujranwala</option>
                        <option value="Other">Other City</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Create Password
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="password"
                          required
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          placeholder="At least 8 characters"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600">
                      <input
                        type="checkbox"
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>I agree to the Terms of Service & 14-day free trial conditions</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreed}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm mt-4"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Activate 14-Day Free Account</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-400 mt-2 font-medium">
                    No hardware purchase needed • Instant branch setup
                  </div>
                </form>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-500 py-2">
        ManageO Point of Sale • Built for Pakistan Retail, Beauty & Dining
      </footer>

    </div>
  );
}
