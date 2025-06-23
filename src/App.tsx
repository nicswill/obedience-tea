import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Order from './components/Order';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Story />
      <Benefits />
      <Testimonials />
      <Order />
      <Footer />
    </div>
  );
}

export default App;