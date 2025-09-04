
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const navigate = useNavigate();

  const handlePageChange = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <div className="min-h-screen bg-background space-bg flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer onPageChange={handlePageChange} />
    </div>
  );
};

export default PageLayout;
