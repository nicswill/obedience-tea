import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter, DollarSign, CreditCard, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-center text-center md:text-left md:justify-between md:space-x-10 space-y-10 md:space-y-0">
          {/* Brand Section */}
          <div className="md:w-1/3">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <Leaf className="h-8 w-8 text-gold-400" />
              <div>
                <h3 className="text-xl font-bold">Obedience Tea</h3>
                <p className="text-sm text-sage-200">by Dishawn</p>
              </div>
            </div>
            <p className="text-sage-200 mb-6 leading-relaxed">
              Healing through God's provision. A sacred blend crafted with love, 
              prayer, and the finest herbs to restore your body, mind, and spirit.
            </p>
            <div className="flex justify-center md:justify-start space-x-5">
              <a href="#" className="text-sage-200 hover:text-gold-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-sage-200 hover:text-gold-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-sage-200 hover:text-gold-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h4 className="text-lg font-bold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-sage-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#story" className="text-sage-200 hover:text-white transition-colors">My Story</a></li>
              <li><a href="#benefits" className="text-sage-200 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#testimonials" className="text-sage-200 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#order" className="text-sage-200 hover:text-white transition-colors">Order Now</a></li>
            </ul>
            <hr className="border-sage-600 my-6 md:hidden" />
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3">
            <h4 className="text-lg font-bold mb-4 text-gold-400">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex justify-center md:justify-start items-center space-x-3">
                <Phone className="h-5 w-5 text-sage-400" />
                <span className="text-sage-200">973-517-3382</span>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-3">
                <Mail className="h-5 w-5 text-sage-400" />
                <span className="text-sage-200">Shawn.0778@yahoo.com</span>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-3">
                <MapPin className="h-5 w-5 text-sage-400" />
                <span className="text-sage-200">Atlanta, GA</span>
              </div>
              <div className="pt-3 text-sage-100 text-sm space-y-2">
                <div className="flex justify-center md:justify-start items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-gold-400" />
                  <span><strong>Cash App:</strong> <a href="https://cash.app/$DishawnEvans" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-400">$DishawnEvans</a></span>
                </div>
                <div className="flex justify-center md:justify-start items-center space-x-2">
                  <CreditCard className="h-4 w-4 text-gold-400" />
                  <span><strong>Apple Pay:</strong> <a href="tel:9735173382" className="underline hover:text-gold-400">973-517-3382</a></span>
                </div>
                <div className="flex justify-center md:justify-start items-center space-x-2">
                  <Send className="h-4 w-4 text-gold-400" />
                  <span><strong>Zelle:</strong> <a href="mailto:ggmb2022@gmail.com" className="underline hover:text-gold-400">ggmb2022@gmail.com</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-sage-600 my-6" />

        <div className="md:flex md:items-center md:justify-between text-sm text-center md:text-left">
          <div className="text-sage-200">
            <p>&copy; 2024 Obedience Tea by Dishawn. All rights reserved.</p>
            <p className="mt-1">
              Made with <span className="text-gold-400">♥</span> and blessed with prayer
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sage-200 italic">
              "He sent his word, and healed them" - Psalm 107:20
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
