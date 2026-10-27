import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBottomNav from './components/MobileBottomNav';

function App() {
  return (
    <div className="min-h-screen bg-automotive-dark text-automotive-light selection:bg-industrial-500 selection:text-white flex flex-col font-sans pb-24 md:pb-0">
      {/* Fixed Navigation Header */}
      <Header />

      {/* Main Content Landmark */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Specialized Services */}
        <Services />

        {/* Social Proof & Google 4.9 Score */}
        <SocialProof />

        {/* Location, Map & Working Hours */}
        <LocationHours />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Desktop Floating High-Conversion WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Action Bar */}
      <MobileBottomNav />
    </div>
  );
}

export default App;

