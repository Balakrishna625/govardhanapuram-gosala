'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/process' },
    { name: 'Products', href: '/products' },
    { name: 'Impact', href: '/impact' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-soft border-b border-primary-100">
      <nav className="container-custom">
        <div className="flex items-center justify-start h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group mr-auto">
            <div className="bg-gradient-organic p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🐄</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-primary-800">
                Govardhanapuram Gosala
              </h1>
              <p className="text-xs text-primary-600 font-medium">Pure • Traditional • Sustainable</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-primary-700 hover:text-primary-900 font-medium rounded-lg hover:bg-primary-50 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-ghee-400 hover:bg-ghee-500 text-primary-900 font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-700" />
            ) : (
              <Menu className="w-6 h-6 text-primary-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-100 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-primary-700 hover:text-primary-900 font-medium rounded-lg hover:bg-primary-50 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 mt-2 bg-ghee-400 hover:bg-ghee-500 text-primary-900 font-semibold px-6 py-3 rounded-full text-center transition-all duration-300"
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
