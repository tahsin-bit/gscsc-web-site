
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';

const Index = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);

  const handlePageChange = (page: string) => {
    navigate(`/${page}`);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-background space-bg flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HomePage onPageChange={handlePageChange} />
      </main>
      
      <Footer onPageChange={handlePageChange} />
    </div>
  );
};

export default Index;
