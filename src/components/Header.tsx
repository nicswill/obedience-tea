import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* ✅ Logo links to Hero section */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 text-left focus:outline-none"
          >
            <Leaf className="h-8 w-8 text-sage-500" />
            <div>
              <h1 className="text-xl font-bold text-earth-800">Obedience Tea</h1>
              <p className="text-xs text-sage-600">by Dishawn</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-earth-700 hover:text-sage-600 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('story')}
              className="text-earth-700 hover:text-sage-600 transition-colors duration-200 font-medium"
            >
              My Story
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-earth-700 hover:text-sage-600 transition-colors duration-200 font-medium"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-earth-700 hover:text-sage-600 transition-colors duration-200 font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('order')}
              className="bg-gold-400 text-white px-6 py-2 rounded-full hover:bg-gold-500 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Order Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-sage-50 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-earth-700 hover:text-sage-600 transition-colors duration-200 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('story')}
                className="text-earth-700 hover:text-sage-600 transition-colors duration-200 font-medium text-left"
              >
                My Story
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-earth-700 hover:text-sage-600 transition-colors duration-200 font-medium text-left"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-earth-700 hover:text-sage-600 transition-colors duration-200 font-medium text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('order')}
                className="bg-gold-400 text-white px-6 py-3 rounded-full hover:bg-gold-500 transition-all duration-200 font-medium shadow-lg w-full"
              >
                Order Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
