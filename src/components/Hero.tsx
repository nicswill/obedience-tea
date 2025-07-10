import React from 'react';
import teaImage from '../assets/obedience-tea.jpg';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-sage-50 py-20 px-4 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CARD */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <p className="text-base font-semibold text-gold-600 mb-2">✨ Healing Through Faith</p>
          <h1 className="text-6xl font-extrabold text-earth-900 mb-3 leading-tight">
            Obedience Tea <span className="italic text-forest-700">by Dishawn</span>
          </h1>
          <p className="text-xl text-sage-800 italic font-bold mb-2">
            Faithfully blended for healing
          </p>
          <p className="text-sage-700 mb-6 text-lg font-bold">
            <span className="text-gold-600">💛</span> “Trust in the Lord with all your heart.” — Proverbs 3:5
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#order"
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-6 rounded-full shadow text-center"
            >
              Shop the Collection
            </a>
            <a
              href="#story"
              className="border-2 border-sage-400 text-sage-800 hover:border-sage-600 hover:text-sage-900 font-bold py-3 px-6 rounded-full text-center"
            >
              Read My Story
            </a>
          </div>
        </div>

        {/* IMAGE RIGHT */}
        <div className="flex justify-center">
          <img
            src={teaImage}
            alt="Obedience Tea Product Mockup"
            className="w-full max-w-xs rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#story"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-sage-700 text-center hover:text-gold-600 transition"
      >
        <p className="underline">Discover the Story</p>
        <span className="animate-bounce mt-1 text-gold-500 text-xl">↓</span>
      </a>
    </section>
  );
};

export default Hero;
