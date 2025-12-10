import Image from 'next/image';
import type { Metadata } from 'next';
import { Users, GraduationCap, Heart, TrendingUp, Sprout, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Impact | Govardhanapuram Gosala',
  description: 'Learn how Govardhanapuram Gosala empowers rural communities in and around Govardhanapuram villages — Pedda Gujjuwada, Chinna Gujjuwada — through skill development, women empowerment, and sustainable livelihoods.'
};

export default function ImpactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-100 via-ghee-50 to-earth-100">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background circles */}
          <div className="absolute top-16 right-24 w-72 h-72 rounded-full bg-primary-300 opacity-25"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-ghee-300 opacity-20"></div>
          <div className="absolute top-1/3 left-1/4 w-56 h-56 rounded-full bg-earth-300 opacity-20"></div>
          
          {/* People/community illustrations using SVG */}
          <div className="absolute bottom-16 left-20">
            {/* Woman with basket */}
            <svg width="80" height="100" viewBox="0 0 80 100" className="opacity-30 fill-primary-700">
              <circle cx="40" cy="20" r="12"/>
              <path d="M 40 32 L 40 60 M 40 40 L 25 55 M 40 40 L 55 55" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
              <path d="M 25 60 L 25 90 M 55 60 L 55 90" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
              <ellipse cx="58" cy="50" rx="12" ry="8" className="fill-ghee-500 opacity-60"/>
            </svg>
          </div>
          
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            {/* Group of people holding hands */}
            <svg width="120" height="90" viewBox="0 0 120 90" className="opacity-35 fill-primary-600">
              {/* Person 1 */}
              <circle cx="30" cy="18" r="9"/>
              <path d="M 30 27 L 30 50 M 30 35 L 18 45 M 30 35 L 42 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              <path d="M 18 50 L 18 70 M 42 50 L 42 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              
              {/* Person 2 */}
              <circle cx="60" cy="18" r="9"/>
              <path d="M 60 27 L 60 50 M 60 35 L 48 45 M 60 35 L 72 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              <path d="M 48 50 L 48 70 M 72 50 L 72 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              
              {/* Person 3 */}
              <circle cx="90" cy="18" r="9"/>
              <path d="M 90 27 L 90 50 M 90 35 L 78 45 M 90 35 L 102 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              <path d="M 78 50 L 78 70 M 102 50 L 102 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
          
          <div className="absolute bottom-14 right-32">
            {/* Person with heart (care/compassion) */}
            <svg width="70" height="90" viewBox="0 0 70 90" className="opacity-28 fill-earth-700">
              <circle cx="35" cy="18" r="10"/>
              <path d="M 35 28 L 35 55 M 35 38 L 22 48 M 35 38 L 48 48" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
              <path d="M 22 55 L 22 75 M 48 55 L 48 75" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
              <path d="M 25 40 Q 25 32 30 32 Q 35 32 35 38 Q 35 32 40 32 Q 45 32 45 40 Q 45 50 35 55 Q 25 50 25 40 Z" className="fill-pink-400 opacity-70"/>
            </svg>
          </div>
          
          {/* Connecting lines - representing community connection */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <path d="M 100 300 Q 300 200 600 300" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary-500"/>
            <path d="M 600 300 Q 800 350 1000 300" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary-500"/>
          </svg>
          
          {/* Growth/plant symbols */}
          <div className="absolute top-20 left-32 opacity-25">
            <svg width="50" height="60" viewBox="0 0 50 60" className="fill-primary-600">
              <rect x="22" y="40" width="6" height="20"/>
              <path d="M 25 40 Q 15 30 20 20 Q 22 25 25 25" />
              <path d="M 25 35 Q 35 25 30 15 Q 28 20 25 20" />
              <ellipse cx="25" cy="13" rx="8" ry="6" className="fill-primary-500"/>
            </svg>
          </div>
          
          <div className="absolute top-28 right-28 opacity-20">
            <svg width="45" height="55" viewBox="0 0 45 55" className="fill-primary-500">
              <rect x="20" y="35" width="5" height="18"/>
              <path d="M 22 35 Q 14 27 18 18 Q 20 22 22 22" />
              <path d="M 22 30 Q 30 22 26 13 Q 24 18 22 18" />
              <ellipse cx="22" cy="11" rx="7" ry="5" className="fill-primary-400"/>
            </svg>
          </div>
          
          {/* Wave pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,45 Q200,25 400,45 Q600,65 800,45 Q1000,25 1200,45 L1200,100 L0,100 Z" 
                    fill="currentColor" className="text-primary-300 opacity-35" />
              <path d="M0,65 Q300,45 600,65 Q900,85 1200,65 L1200,100 L0,100 Z" 
                    fill="currentColor" className="text-ghee-300 opacity-30" />
            </svg>
          </div>
        </div>
        
        <div className="relative z-20 container-custom text-center px-4">
          <h1 className="heading-xl text-primary-900 mb-6">More Than Just Ghee</h1>
          <p className="text-xl text-primary-800 max-w-2xl mx-auto">
            A Movement for Change • Empowering Communities • Building Futures
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Our Social Mission</h2>
          <p className="text-body mb-8">
            We believe true sustainability comes from uplifting rural communities. Our gosala trains and employs 
            local people to produce cow-based organic products like ghee, cow dung agarbattis, dhoop sticks, 
            organic fertilizers, and more.
          </p>
          <p className="text-xl font-medium text-primary-800">
            Every product you buy directly supports a family in Govindapuram.
          </p>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="section-padding bg-gradient-earth">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Our Impact Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Women Empowerment',
                desc: 'Training and employing rural women in traditional product making',
                stats: 'Creating sustainable income for village women',
                color: 'from-pink-500 to-rose-500',
              },
              {
                icon: GraduationCap,
                title: 'Skill Development',
                desc: 'Teaching traditional methods and modern best practices',
                stats: 'Preserving ancient knowledge for future generations',
                color: 'from-primary-500 to-green-500',
              },
              {
                icon: TrendingUp,
                title: 'Stable Employment',
                desc: 'Creating year-round income opportunities for villagers',
                stats: 'Supporting local families with dignified work',
                color: 'from-ghee-400 to-orange-500',
              },
              {
                icon: Users,
                title: 'Community Building',
                desc: 'Strengthening rural social fabric through collaboration',
                stats: 'Building a self-reliant village economy',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Sprout,
                title: 'Sustainable Practices',
                desc: 'Promoting eco-friendly and chemical-free production',
                stats: 'Protecting environment for future generations',
                color: 'from-green-600 to-teal-500',
              },
              {
                icon: Award,
                title: 'Quality Training',
                desc: 'Professional standards with traditional authenticity',
                stats: 'Industry-grade products with village roots',
                color: 'from-purple-500 to-indigo-500',
              },
            ].map((area, index) => (
              <div key={index} className="card-organic group hover:scale-105 transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-sm mb-3">{area.title}</h3>
                <p className="text-primary-700 mb-4">{area.desc}</p>
                <p className="text-sm text-primary-600 italic">{area.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Women Empowerment - Detailed Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-organic">
              <Image
                src="/womenleddhoopstick.png"
                alt="Indian village women making traditional dhoop sticks"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="heading-lg mb-6">
                Women-Led <span className="gradient-text">Dhoop Stick Production</span>
              </h2>
              <p className="text-body mb-6">
                At Govindapuram Goshala, we strongly believe that true sustainability is achieved when nature is 
                protected and communities are empowered together. As part of this mission, we run a women-led 
                organic dhoop sticks manufacturing initiative using natural cow dung and herbal ingredients.
              </p>
              <p className="text-body mb-6">
                Local women from in and around Govardhanapuram villages — Chinna Gujjuwada and Pedda Gujjuwada — are trained in the traditional process of converting cow 
                dung into eco-friendly dhoop sticks and organic incense products. This initiative not only preserves 
                age-old knowledge but also provides stable income, dignity of work, and financial independence to 
                rural women.
              </p>
              
              <h3 className="font-semibold text-primary-900 mb-4">Impact on Rural Women:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Employment opportunities for village women',
                  'Skill development & traditional craftsmanship',
                  'Monthly income generation',
                  'Self-reliance and entrepreneurship',
                  'Women-led rural micro-enterprises',
                ].map((impact, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2" />
                    <span className="text-primary-700">{impact}</span>
                  </li>
                ))}
              </ul>

              {/* Quote removed as requested */}
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-12">How Dhoop Sticks Are Made</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Collection', desc: 'Fresh cow dung collected from gosala' },
              { step: '02', title: 'Drying', desc: 'Naturally sun-dried and purified' },
              { step: '03', title: 'Mixing', desc: 'Herbal powders and natural binders added' },
              { step: '04', title: 'Rolling', desc: 'Hand-rolled into dhoop sticks' },
              { step: '05', title: 'Curing', desc: 'Shade-dried and naturally cured' },
              { step: '06', title: 'Packing', desc: 'Eco-friendly packaging completed' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                <div className="text-ghee-600 font-bold text-2xl mb-2">Step {item.step}</div>
                <h3 className="font-semibold text-primary-900 mb-2">{item.title}</h3>
                <p className="text-sm text-primary-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-12">Why This Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Environmental Impact',
                points: [
                  'Reduces waste through cow dung recycling',
                  'Promotes eco-friendly alternatives',
                  'Zero chemical usage',
                  'Biodegradable products',
                ],
              },
              {
                title: 'Social Impact',
                points: [
                  'Supports rural women directly',
                  'Creates stable income sources',
                  'Strengthens community bonds',
                  'Preserves traditional practices',
                ],
              },
            ].map((category, index) => (
              <div key={index} className="card-organic">
                <h3 className="heading-sm mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <Sprout className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Support Our Mission
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            When you choose Govindapuram Goshala, you're not just buying a product – you're supporting a family 
            and empowering a community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-secondary">
              Buy Our Products
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
