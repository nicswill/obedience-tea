import React from 'react';
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  DollarSign,
  CreditCard,
  Send,
  BookOpen
} from 'lucide-react';
import TikTokIcon from '../assets/tiktok-icon.jpg'; // 👈 Add this import

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
              <a href="https://www.facebook.com/dishawn.evans?rdid=K0dcSW1rY1vmXOk5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16pxb289NB%2F#" target="_blank" rel="noopener noreferrer" className="text-sage-200 hover:text-gold-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/superfly_d?igsh=cG02N3lxNWljajA5&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-sage-200 hover:text-gold-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@shawn9365?_t=ZT-8xvXTseMX7n&_r=1" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                <img src={TikTokIcon} alt="TikTok" className="w-5 h-5 rounded" />
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
                  <span><strong>Zelle:</strong> <a href="tel:9735173382" className="underline hover:text-gold-400">973-517-3382</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prayer/Testimonial Block */}
        <div className="bg-sage-800 rounded-xl p-6 mt-10 text-center text-sage-100 shadow-inner">
          <p className="text-lg italic font-medium max-w-2xl mx-auto">
            “This tea has been a part of my healing journey—mind, body, and spirit. I pray it blesses you as much as it’s blessed me.”
          </p>
          <p className="mt-4 text-sm font-semibold text-gold-400">— Dishawn</p>
        </div>

        <hr className="border-sage-600 my-6" />

        <div className="md:flex md:items-center md:justify-between text-sm text-center md:text-left">
          <div className="text-sage-200 text-center md:text-left">
            <p className="font-semibold text-base">&copy; 2024 Obedience Tea by Dishawn. All rights reserved.</p>
            <p className="mt-1 font-medium">Made with <span className="text-gold-400">♥</span> and blessed with prayer</p>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p className="text-sage-200 italic flex items-center justify-center md:justify-end">
              <BookOpen className="h-4 w-4 mr-2 text-gold-400" />
              "He sent his word, and healed them" - Psalm 107:20
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
