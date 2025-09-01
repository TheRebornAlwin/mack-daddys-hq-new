import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import UpsellPage from './pages/UpsellPage';
import ThankYouPage from './pages/ThankYouPage';
import UpsellThankYouPage from './pages/UpsellThankYouPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';

// Component to handle scroll to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order" element={<CheckoutPage />} />
        <Route path="/special-offer" element={<UpsellPage />} />
        <Route path="/exclusive-upgrade" element={<UpsellPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/success" element={<ThankYouPage />} />
        <Route path="/upsell-success" element={<UpsellThankYouPage />} />
        <Route path="/vip-welcome" element={<UpsellThankYouPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </div>
  );
}

export default App;