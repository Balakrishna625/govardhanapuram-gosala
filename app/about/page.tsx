import Image from 'next/image';
import type { Metadata } from 'next';
import { Heart, Target, Eye, Award, Users, Sprout } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Govardhanapuram Gosala',
  description: 'Learn about Govardhanapuram Gosala mission to protect desi cows, preserve ancient bilona ghee making traditions, and create sustainable livelihood opportunities.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-earth-200 via-primary-100 to-cream-200">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background circles */}
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-primary-300 opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-earth-300 opacity-25"></div>
          <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-ghee-200 opacity-30"></div>
          
          {/* Stylized cow silhouettes using SVG */}
          <div className="absolute bottom-12 left-20">
            <svg width="120" height="80" viewBox="0 0 120 80" className="opacity-25 fill-primary-700">
              <ellipse cx="40" cy="50" rx="35" ry="25"/>
              <circle cx="20" cy="35" r="12"/>
              <rect x="35" y="70" width="6" height="15" rx="3"/>
              <rect x="50" y="70" width="6" height="15" rx="3"/>
              <path d="M 15 30 Q 10 25 12 28 Q 8 30 10 32" />
              <path d="M 25 30 Q 30 25 28 28 Q 32 30 30 32" />
            </svg>
          </div>
          
          <div className="absolute bottom-8 right-32">
            <svg width="100" height="70" viewBox="0 0 100 70" className="opacity-30 fill-earth-700">
              <ellipse cx="35" cy="40" rx="30" ry="20"/>
              <circle cx="18" cy="28" r="10"/>
              <rect x="30" y="55" width="5" height="12" rx="2"/>
              <rect x="42" y="55" width="5" height="12" rx="2"/>
            </svg>
          </div>
          
          {/* Rolling hills/ground */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,50 Q200,30 400,50 Q600,70 800,50 Q1000,30 1200,50 L1200,120 L0,120 Z" 
                    fill="currentColor" className="text-primary-300 opacity-40" />
              <path d="M0,70 Q300,50 600,70 Q900,90 1200,70 L1200,120 L0,120 Z" 
                    fill="currentColor" className="text-primary-400 opacity-30" />
            </svg>
          </div>
          
          {/* Tree silhouette */}
          <div className="absolute top-8 right-16">
            <svg width="100" height="120" viewBox="0 0 100 120" className="opacity-20 fill-primary-600">
              <rect x="42" y="70" width="16" height="50"/>
              <ellipse cx="50" cy="50" rx="45" ry="40"/>
              <ellipse cx="30" cy="60" rx="25" ry="30"/>
              <ellipse cx="70" cy="60" rx="25" ry="30"/>
            </svg>
          </div>
          
          {/* Simple leaf decorations */}
          <div className="absolute top-24 left-32 opacity-25">
            <svg width="40" height="40" viewBox="0 0 40 40" className="fill-primary-500">
              <path d="M20,5 Q30,15 20,35 Q10,15 20,5 Z"/>
            </svg>
          </div>
          
          <div className="absolute bottom-32 right-48 opacity-20">
            <svg width="50" height="50" viewBox="0 0 50 50" className="fill-primary-600">
              <path d="M25,5 Q35,20 25,45 Q15,20 25,5 Z"/>
            </svg>
          </div>
        </div>
        
        <div className="relative z-20 container-custom text-center px-4">
          <h1 className="heading-xl text-primary-900 mb-6">Our Story</h1>
          <p className="text-xl text-primary-800 max-w-2xl mx-auto">
            A journey of tradition, compassion, and community empowerment
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Who We Are</h2>
            <div className="text-body space-y-6">
              <p>
                Govardhanapuram Gosala was established with a simple yet powerful mission — to protect desi cows, 
                preserve ancient bilona ghee making traditions, and create sustainable livelihood opportunities 
                for the local rural community of Govardhanapuram.
              </p>
              <p>
                We operate entirely using natural and chemical-free methods, ensuring the highest quality of 
                products while respecting nature and animal welfare. Every step of our process, from caring for 
                our cows to packaging our ghee, is done with utmost care and traditional wisdom passed down 
                through generations.
              </p>
              <p>
                At the heart of our gosala is a commitment to authenticity. We believe that true quality comes 
                from staying true to traditional methods while creating positive impact in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gradient-earth">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="card-organic">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-green-500 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="heading-md mb-6">Our Vision</h2>
              <p className="text-body mb-4">
                To become a trusted name in organic cow-based products that:
              </p>
              <ul className="space-y-3">
                {[
                  'Promotes traditional Indian dairy practices',
                  'Supports rural employment and dignity of work',
                  'Encourages sustainable and ethical living',
                  'Delivers pure, healthy products to every household',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Sprout className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span className="text-primary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission */}
            <div className="card-organic">
              <div className="w-16 h-16 bg-gradient-to-br from-ghee-400 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="heading-md mb-6">Our Mission</h2>
              <ul className="space-y-3">
                {[
                  'Ethical care of cows with respect and compassion',
                  '100% natural production methods',
                  'Zero chemical processing or preservatives',
                  'Skill development for local villagers',
                  'Fair and transparent product pricing',
                  'Preserve traditional knowledge for future generations',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-ghee-600 flex-shrink-0 mt-1" />
                    <span className="text-primary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Compassion',
                desc: 'Deep respect for animals, nature, and people',
                color: 'from-pink-500 to-rose-500',
              },
              {
                icon: Award,
                title: 'Quality',
                desc: 'Uncompromising standards in every product',
                color: 'from-ghee-400 to-orange-500',
              },
              {
                icon: Users,
                title: 'Community',
                desc: 'Empowering local villagers through meaningful work',
                color: 'from-primary-500 to-green-500',
              },
              {
                icon: Sprout,
                title: 'Sustainability',
                desc: 'Preserving traditions while protecting the environment',
                color: 'from-green-600 to-teal-500',
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="heading-sm mb-3">{value.title}</h3>
                <p className="text-primary-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Life at Our Gosala</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: '/lifeatghosala.jpg', alt: 'Daily life at Govardhanapuram Gosala' },
              { src: '/lifeatgosala2.jpg', alt: 'Village community at gosala' },
              { src: '/lifeatgoshala3.jpg', alt: 'Traditional practices at gosala' },
            ].map((image, index) => (
              <div key={index} className="relative h-[300px] rounded-2xl overflow-hidden shadow-organic hover:scale-105 transition-transform">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Join Us in Our Mission
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Be part of a movement that values tradition, purity, and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-secondary">
              Explore Our Products
            </Link>
            <Link href="/impact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              See Our Impact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
