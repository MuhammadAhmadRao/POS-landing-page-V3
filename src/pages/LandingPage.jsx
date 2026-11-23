import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import IndustryModes from '../components/IndustryModes';
import LiveDashboardPreview from '../components/LiveDashboardPreview';
import FeaturesBento from '../components/FeaturesBento';
import DeviceFreedomSection from '../components/DeviceFreedomSection';
import PricingSection from '../components/PricingSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import FloatingChatWidget from '../components/FloatingChatWidget';

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar onNavigate={onNavigate} currentPage="landing" />
      <main>
        <Hero 
          onNavigate={onNavigate} 
          onOpenDemo={() => onNavigate('dashboard')} 
        />
        <IndustryModes onNavigate={onNavigate} />
        <LiveDashboardPreview onOpenFullDashboard={() => onNavigate('dashboard')} />
        <DeviceFreedomSection onNavigate={onNavigate} />
        <FeaturesBento onNavigate={onNavigate} />
        <PricingSection onNavigate={onNavigate} />
        <Testimonials />
        <ContactSection />
        <FAQSection onNavigate={onNavigate} />
        <CTASection onNavigate={onNavigate} />
      </main>
      <Footer onNavigate={onNavigate} />
      
      {/* Floating Interactive AI + Real Person WhatsApp Chat Widget */}
      <FloatingChatWidget />
    </div>
  );
}
