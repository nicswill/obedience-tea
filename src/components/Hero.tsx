// src/components/Hero.tsx
import React from 'react';
import { ArrowDown, Heart, Sparkles, Leaf } from 'lucide-react';
import TeaImage from '../assets/obedience-tea.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-sage-50 via-white to-gold-50 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="animate-fade-in bg-white p-8 rounded-xl shadow-xl">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-6 w-6 text-gold-400" />
              <span className="text-earth-700 font-medium">Healing Through Faith</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-earth-900 mb-4 leading-tight tracking-tight">
              Obedience Tea
              <span className="block text-4xl lg:text-5xl text-sage-700 font-serif italic mt-2">
                by Dishawn
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-earth-900 italic mb-6">
              Faithfully blended for healing
            </p>

            <div className="flex items-center space-x-2 mb-8">
              <Heart className="h-5 w-5 text-gold-400" />
              <span className="text-earth-800 font-medium italic">
                “Trust in the Lord with all your heart.” — Proverbs 3:5
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('order')}
                className="bg-gold-400 text-white px-8 py-4 rounded-full hover:bg-gold-500 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Shop the Collection
              </button>
              <button
                onClick={() => scrollToSection('story')}
                className="border-2 border-sage-400 text-sage-700 px-8 py-4 rounded-full hover:bg-sage-50 transition-all duration-200 font-semibold text-lg"
              >
                Read My Story
              </button>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative animate-fade-in flex justify-center">
            <div className="relative">
              <img
                src={TeaImage}
                alt="Obedience Tea product"
                className="w-52 md:w-60 rounded-3xl shadow-2xl border border-gold-100"
              />

              {/* Decorative animated leaf icons */}
              <Leaf className="absolute -top-6 -left-6 h-6 w-6 text-sage-400 opacity-70 animate-spin-slow" />
              <Leaf className="absolute -bottom-4 -right-4 h-5 w-5 text-gold-300 opacity-60 animate-pulse delay-300" />
              <Leaf className="absolute top-1/2 -right-6 h-4 w-4 text-sage-300 opacity-50 animate-spin-slow delay-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" className="w-full h-auto text-white">
          <path
            fill="currentColor"
            d="M0,0 C480,100 960,0 1440,100 L1440,00 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center pb-8 relative z-10">
        <button
          onClick={() => scrollToSection('story')}
          className="animate-bounce inline-flex flex-col items-center text-sage-600 hover:text-sage-800 transition-colors"
        >
          <span className="text-sm mb-2">Discover the Story</span>
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
