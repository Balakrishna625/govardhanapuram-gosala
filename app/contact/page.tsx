'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, redirect to WhatsApp with the message
    const message = `Hello, I'm ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden" style={{backgroundColor: '#8b6647'}}>
        <div className="absolute inset-0 z-0">
          {/* Rangoli-inspired pattern background */}
          <div className="absolute inset-0 bg-gradient-to-br from-earth-800 to-earth-600" />
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="rangoli" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <circle cx="100" cy="100" r="3" fill="#facc15"/>
                  <circle cx="50" cy="50" r="2" fill="#fbbf24"/>
                  <circle cx="150" cy="50" r="2" fill="#fbbf24"/>
                  <circle cx="50" cy="150" r="2" fill="#fbbf24"/>
                  <circle cx="150" cy="150" r="2" fill="#fbbf24"/>
                  <path d="M 100 80 Q 80 100 100 120 Q 120 100 100 80" fill="none" stroke="#f59e0b" strokeWidth="1"/>
                  <path d="M 80 100 Q 100 80 120 100 Q 100 120 80 100" fill="none" stroke="#f59e0b" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#rangoli)"/>
            </svg>
          </div>
          {/* Vintage phone icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
        </div>
        <div className="relative z-20 container-custom text-center px-4">
          <h1 className="heading-xl text-white mb-6 drop-shadow-2xl">Get In Touch</h1>
          <p className="text-xl text-white max-w-2xl mx-auto drop-shadow-lg">
            We'd love to hear from you. Reach out for orders or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="heading-lg mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">Address</h3>
                    <p className="text-primary-700">
                      Govardhanapuram Village<br />
                      District, State - PIN<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ghee-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-ghee-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">Phone</h3>
                    <a href="tel:+919999999999" className="text-primary-700 hover:text-primary-900">
                      +91-XXXXXXXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">Email</h3>
                    <a href="mailto:info@govardhanapuramgosala.com" className="text-primary-700 hover:text-primary-900">
                      info@govardhanapuramgosala.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ghee-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-ghee-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">Business Hours</h3>
                    <p className="text-primary-700">
                      Monday – Saturday<br />
                      6:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-earth rounded-2xl p-6 border border-primary-100">
                <h3 className="font-semibold text-primary-900 mb-4">Quick Order via WhatsApp</h3>
                <p className="text-primary-700 mb-4">
                  For fastest response, send us a message on WhatsApp and we'll get back to you immediately.
                </p>
                <WhatsAppButton className="w-full" />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card-organic">
                <h2 className="heading-md mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-sm text-primary-600 text-center">
                    We typically respond within 24 hours during business hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gradient-earth">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Visit Our Gosala</h2>
          <div className="rounded-2xl overflow-hidden shadow-organic h-[450px] bg-primary-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <p className="text-primary-600">Google Maps Embed Coming Soon</p>
              <p className="text-sm text-primary-500 mt-2">Govardhanapuram Village, District, State</p>
            </div>
            {/* Replace above with actual Google Maps embed when ready */}
            {/* <iframe
              src="YOUR_GOOGLE_MAPS_EMBED_URL"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
        </div>
      </section>
    </main>
  );
}
