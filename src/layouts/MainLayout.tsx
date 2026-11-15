import React, { useState } from 'react';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from './Footer';
import { AuthModal } from '../components/ui/AuthModal';

interface MainLayoutProps {
  children: (props: {
    onOpenExplore: () => void;
    onOpenSignIn: () => void;
    onBookDemo: () => void;
  }) => React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleOpenExplore = () => {
    setIsSignInOpen(true);
  };

  const handleOpenSignIn = () => {
    setIsSignInOpen(true);
  };

  const handleBookDemo = () => {
    setIsSignInOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0f1115]">
      <Navbar
        onOpenExplore={handleOpenExplore}
        onOpenSignIn={handleOpenSignIn}
        onBookDemo={handleBookDemo}
      />

      <main className="flex-1">
        {children({
          onOpenExplore: handleOpenExplore,
          onOpenSignIn: handleOpenSignIn,
          onBookDemo: handleBookDemo,
        })}
      </main>

      <Footer />

      <AuthModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />
    </div>
  );
};
