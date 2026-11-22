import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import IndustryModes from '../components/IndustryModes';
import LiveDashboardPreview from '../components/LiveDashboardPreview';
import FeaturesBento from '../components/FeaturesBento';
import HardwareSection from '../components/HardwareSection';
import PricingSection from '../components/PricingSection';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={onNavigate} currentPage="landing" />
      <main>
        <Hero 
          onNavigate={onNavigate} 
          onOpenDemo={() => onNavigate('dashboard')} 
        />
        <IndustryModes onNavigate={onNavigate} />
        <LiveDashboardPreview onOpenFullDashboard={() => onNavigate('dashboard')} />
        <FeaturesBento onNavigate={onNavigate} />
        <HardwareSection onNavigate={onNavigate} />
        <PricingSection onNavigate={onNavigate} />
        <Testimonials />
        <FAQSection onNavigate={onNavigate} />
        <CTASection onNavigate={onNavigate} />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

