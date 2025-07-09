import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Order from './components/Order';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou'; // ✅ Add this file in components

function HomePage() {
  return (
    <>
      <Hero />
      <Story />
      <Benefits />
      <Testimonials />
      <Order />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
