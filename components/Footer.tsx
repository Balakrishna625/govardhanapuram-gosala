import Link from 'next/link';
import { Leaf, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-ghee-400 p-2 rounded-full">
                <Leaf className="w-6 h-6 text-primary-900" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Govardhanapuram Gosala</h3>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed">
              Pure A2 Organic Bilona Cow Ghee, carefully handcrafted at our sustainable gosala in and around Govardhanapuram villages — Pedda Gujjuwada, Chinna Gujjuwada. We support rural livelihoods, preserve ancient traditions, and deliver uncompromised purity to your home.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-primary-800 hover:bg-ghee-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Instagram className="w-5 h-5 text-white group-hover:text-primary-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-800 hover:bg-ghee-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Facebook className="w-5 h-5 text-white group-hover:text-primary-900" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-800 hover:bg-ghee-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <Twitter className="w-5 h-5 text-white group-hover:text-primary-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-ghee-400">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Process', 'Products', 'Impact', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-primary-200 hover:text-ghee-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-ghee-400">Our Products</h4>
            <ul className="space-y-3 text-sm text-primary-200">
              <li>A2 Bilona Cow Ghee</li>
              <li>Cow Dung Dhoop Sticks <span className="text-xs text-ghee-400">(Coming Soon)</span></li>
              <li>Organic Agarbatti <span className="text-xs text-ghee-400">(Coming Soon)</span></li>
              <li>Panchagavya <span className="text-xs text-ghee-400">(Coming Soon)</span></li>
              <li>Natural Fertilizers <span className="text-xs text-ghee-400">(Coming Soon)</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-ghee-400">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ghee-400 flex-shrink-0 mt-1" />
                <span className="text-sm text-primary-200">
                  Govardhanapuram Village<br />
                  District, State - India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ghee-400 flex-shrink-0" />
                <a href="tel:+919999999999" className="text-sm text-primary-200 hover:text-ghee-400 transition-colors">
                  +91-XXXXXXXXXX
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ghee-400 flex-shrink-0" />
                <a href="mailto:info@govardhanapuramgosala.com" className="text-sm text-primary-200 hover:text-ghee-400 transition-colors">
                  info@govardhanapuramgosala.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-primary-300 mb-2">Business Hours:</p>
              <p className="text-sm text-primary-200">Monday – Saturday</p>
              <p className="text-sm text-primary-200">6 AM – 7 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-200">
              © {currentYear} Govardhanapuram Gosala. All Rights Reserved.
            </p>
            <p className="text-sm text-primary-300">
              Designed with care for nature and community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
