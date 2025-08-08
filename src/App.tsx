import React from 'react';
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

function App() {
  return (
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
  );
}

export default App;