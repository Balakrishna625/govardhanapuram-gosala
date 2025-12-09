import Image from 'next/image';
import type { Metadata } from 'next';
import { Droplet, Clock, ThermometerSun, Package } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Our Process - Traditional Bilona Method | Govardhanapuram Gosala',
  description: 'Discover how we craft pure A2 Bilona Cow Ghee using traditional methods. From cow to container – every step is transparent and traditional.',
};

export default function ProcessPage() {
  const steps = [
    {
      number: '01',
      title: 'Fresh A2 Cow Milk',
      description: 'Milk is collected daily from healthy desi cows raised naturally without hormones or chemicals. Our cows graze freely and are treated with love and respect.',
      icon: '🐄',
      image: '/milk.png',
      details: [
        'Morning and evening milk collection',
        'Only from healthy A2 cows',
        'Natural diet with no hormones',
        'Stress-free environment',
      ],
    },
    {
      number: '02',
      title: 'Natural Curd Formation',
      description: 'The fresh milk is naturally fermented to form curd using traditional methods. No synthetic cultures or additives are used in this process.',
      icon: '🥛',
      image: '/curd.png',
      details: [
        'Natural fermentation process',
        'Traditional clay pots',
        'Optimal temperature control',
        'No synthetic cultures',
      ],
    },
    {
      number: '03',
      title: 'Traditional Churning (Bilona)',
      description: 'The curd is hand-churned using a wooden bilona (traditional churner) to separate fresh butter. This ancient method preserves all the natural nutrients.',
      icon: '⚙️',
      image: '/bilona.png',
      details: [
        'Wooden bilona churning',
        'Bi-directional rotation',
        'Preserves nutrients',
        'Traditional technique',
      ],
    },
    {
      number: '04',
      title: 'Butter Extraction',
      description: 'Pure butter is carefully collected from the churned curd. The butter floats to the top and is gently separated, maintaining its purity.',
      icon: '🧈',
      image: '/butter.png',
      details: [
        'Gentle separation',
        'Natural butter collection',
        'No mechanical pressing',
        'Pure & fresh',
      ],
    },
    {
      number: '05',
      title: 'Slow Heating',
      description: 'The butter is slowly heated on a low flame to obtain golden A2 ghee. This slow heating process ensures the ghee retains its aroma and nutritional value.',
      icon: '🔥',
      image: '/slowcooking.png',
      details: [
        'Low flame heating',
        'Constant monitoring',
        'Preserves aroma',
        'Golden color achieved',
      ],
    },
    {
      number: '06',
      title: 'Hygienic Packing',
      description: 'The ghee is filtered and packed in glass bottles under clean, industry-grade conditions. We use glass packaging to maintain purity and freshness.',
      icon: '✨',
      image: '/cowghee.png',
      details: [
        'Glass bottle packaging',
        'Hygienic filtering',
        'Industry-grade facility',
        'Quality sealed',
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-100 via-ghee-100 to-earth-100">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large circle top right */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-ghee-200 opacity-40"></div>
          {/* Medium circle bottom left */}
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-primary-200 opacity-30"></div>
          {/* Small circle center */}
          <div className="absolute top-1/4 left-1/3 w-40 h-40 rounded-full bg-earth-300 opacity-25"></div>
          {/* Decorative cow silhouette */}
          <div className="absolute top-12 left-12 text-8xl opacity-10">🐄</div>
          {/* Decorative leaf pattern */}
          <div className="absolute bottom-20 right-20 text-6xl opacity-15">🌿</div>
          {/* Wave pattern at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" className="text-primary-300" />
            </svg>
          </div>
        </div>
        
        <div className="relative z-20 container-custom text-center px-4">
          <h1 className="heading-xl text-primary-900 mb-6">The Sacred Bilona Method</h1>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto">
            From cow to container — every step is transparent, traditional, and crafted with care
          </p>
        </div>
      </section>

      {/* Process Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">A Timeless Tradition</h2>
            <p className="text-body">
              The Bilona method is an ancient Vedic process of making ghee that has been used in India for thousands 
              of years. Unlike modern industrial methods, this traditional technique preserves all the natural nutrients, 
              aroma, and therapeutic properties of pure cow ghee.
            </p>
          </div>

          {/* Process Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Droplet, title: 'Pure & Natural', desc: 'No chemicals or preservatives' },
              { icon: Clock, title: 'Time-Tested', desc: 'Ancient Vedic method' },
              { icon: ThermometerSun, title: 'Nutrient Rich', desc: 'Preserves all nutrients' },
              { icon: Package, title: 'Authentic', desc: 'Traditional craftsmanship' },
            ].map((benefit, index) => (
              <div key={index} className="card-organic text-center">
                <benefit.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-primary-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-primary-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="section-padding bg-gradient-earth">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Our 6-Step Sacred Process</h2>
          
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-organic bg-cream-100">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="inline-flex items-center space-x-4 mb-6">
                    <div className="text-6xl">{step.icon}</div>
                    <div className="text-ghee-600 font-bold text-5xl">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="heading-md mb-4">{step.title}</h3>
                  <p className="text-body mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full" />
                        <span className="text-primary-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bilona is Special */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Why Bilona Method is Special</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-organic">
                <h3 className="heading-sm mb-4 text-primary-800">Traditional Bilona Method</h3>
                <ul className="space-y-3">
                  {[
                    'Hand-churned in wooden bilona',
                    'Preserves all nutrients & vitamins',
                    'Rich aroma and authentic taste',
                    'Contains beneficial fatty acids',
                    'Ayurvedic therapeutic properties',
                    'Made from A2 cow milk only',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span className="text-primary-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-organic bg-primary-50">
                <h3 className="heading-sm mb-4 text-primary-800">Commercial Method</h3>
                <ul className="space-y-3">
                  {[
                    'Machine-processed in bulk',
                    'Nutrients often degraded by heat',
                    'Lacks authentic aroma',
                    'May contain trans fats',
                    'No traditional benefits',
                    'Mixed A1/A2 milk sources',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span className="text-primary-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Experience the Purity of Traditional Bilona Ghee
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Every jar is crafted with care, following centuries-old traditions.
          </p>
          <WhatsAppButton>
            Order Our Ghee Today
          </WhatsAppButton>
        </div>
      </section>
    </main>
  );
}
