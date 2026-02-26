import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from '@/contexts/DarkModeContext.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackToTopButton from '@/components/BackToTopButton.jsx';
import ExitIntentPopup from '@/components/ExitIntentPopup.jsx';
import CookieConsentBanner from '@/components/CookieConsentBanner.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import HomePage from '@/pages/HomePage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import ServicesPage from '@/pages/ServicesPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Blog Coming Soon</h1></div>} />
            </Routes>
          </main>
          <Footer />
          <BackToTopButton />
          <ExitIntentPopup />
          <CookieConsentBanner />
          <WhatsAppButton />
          <Toaster />
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;