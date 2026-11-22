import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardDemoPage from './pages/DashboardDemoPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing' | 'signup' | 'login' | 'dashboard'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full min-h-screen">
      {currentPage === 'landing' && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === 'signup' && <SignupPage onNavigate={handleNavigate} />}
      {currentPage === 'login' && <LoginPage onNavigate={handleNavigate} />}
      {currentPage === 'dashboard' && <DashboardDemoPage onNavigate={handleNavigate} />}
    </div>
  );
}

