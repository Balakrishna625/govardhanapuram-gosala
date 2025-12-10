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
      title: 'The Right Milk - From Traditional Cows',
      description: 'We use milk only from Indian desi cows with humps and long ears — not Jersey cows. These traditional cows, when raised in peaceful, natural environments with freedom of movement, produce lighter, more sattvic milk. The hump contains important nadis (energy channels) that influence milk quality.',
      icon: '🐄',
      image: '/milk.png',
      details: [
        'Traditional Indian A2 cows with humps',
        'Free grazing in open pastures',
        'No hormones, natural feeding',
        'Calves fed first, stress-free environment',
      ],
    },
    {
      number: '02',
      title: 'First Agni Samskāra - Milk to Yogurt',
      description: 'Fresh milk is gently boiled (first Agni samskāra), cooled, and set with natural yogurt culture — never with lemon or vinegar. This creates true yogurt, not just curdled milk. The process takes 8-10 hours (Kala samskāra), allowing beneficial lacto bacilli to work on milk solids.',
      icon: '🥛',
      image: '/curd.png',
      details: [
        'Gentle boiling, not high heat',
        'Natural yogurt culture, no acids',
        'Overnight fermentation (8-10 hours)',
        'Creates beneficial probiotics',
      ],
    },
    {
      number: '03',
      title: 'Traditional Bilona Churning',
      description: 'The yogurt is hand-churned using a wooden bilona with bi-directional motion — clockwise, then anti-clockwise. This gentle, rhythmic churning generates natural warmth, allowing butter and buttermilk to separate naturally.',
      icon: '⚙️',
      image: '/bilona.png',
      details: [
        'Wooden bilona with grooved stick',
        'Bi-directional hand churning',
        'Natural temperature maintained',
        'Gentle separation begins',
      ],
    },
    {
      number: '04',
      title: 'Fresh Butter Collection',
      description: 'Fresh white butter floats to the top and is carefully collected. The remaining buttermilk (takram) stays light and digestible — perfect for Ayurvedic use. This separation is crucial for maintaining the purity of both products.',
      icon: '🧈',
      image: '/butter.png',
      details: [
        'Fresh white makhan (butter) floats up',
        'Careful collection without mixing',
        'Light takram (buttermilk) preserved',
        'Both products remain pure',
      ],
    },
    {
      number: '05',
      title: 'Final Agni Samskāra - Butter to Golden Ghee',
      description: 'Fresh butter is heated slowly on low flame with great patience. As it boils, foam rises, water evaporates, and milk solids settle. We watch carefully for the exact moment — when the foam settles (fena shanti) — that is when pure, aromatic ghee is ready. Stopping at the right moment preserves aroma and prevents burning.',
      icon: '🔥',
      image: '/slowcooking.png',
      details: [
        'Low, steady flame — not too high, not too low',
        'Foam rises and settles naturally',
        'Water evaporates, solids separate',
        'Golden clarity with preserved aroma',
      ],
    },
    {
      number: '06',
      title: 'Pure Ghee - Ready',
      description: 'The golden ghee is filtered and stored in glass containers. This is pure, aromatic ghee made through complete traditional samskāras — ready to nourish and heal.',
      icon: '✨',
      image: '/cowghee.png',
      details: [
        'Filtered for purity',
        'Stored in glass containers',
        'Complete samskāra process',
        'True Ayurvedic quality',
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
          <h1 className="heading-xl text-primary-900 mb-6">The Ayurvedic Soul of Our Ghee</h1>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto">
            From cow to container — every step is transparent, traditional, and crafted with care
          </p>
        </div>
      </section>

      {/* Process Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <blockquote className="mb-4 rounded-md bg-primary-50 border-l-4 border-primary-600 pl-6 py-4">
              <p className="text-xl text-primary-800 italic">
                Prepared slowly, through traditional samskāra
              </p>
            </blockquote>
            <p className="text-body mb-6">
              At our gosala, ghee is not rushed. From milk to ghee, every step passes through gentle Agni (fire), 
              Kala (time), and careful transformation known as samskāra. This slow process is what makes our ghee 
              light, pure, and easy to digest — not just another cooking fat.
            </p>
            <p className="text-body mb-6">
              In Ayurveda, samskāra means "transformation that changes properties." What starts as milk undergoes 
              multiple transformations — each one refining its qualities. The ghee we create is fundamentally different 
              from the milk we began with, lighter and more beneficial for the body.
            </p>
            <p className="text-body text-primary-700 font-medium">
              Our ghee is shaped by Agni, refined by time, and perfected through tradition.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="section-padding bg-gradient-earth">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Our Sacred 6-Step Process</h2>
          
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
            <h2 className="heading-lg text-center mb-12">The Sacred Science Behind Our Ghee</h2>
            
            {/* Special Ayurvedic Understanding */}
            <div className="mb-12 p-8 bg-gradient-to-br from-ghee-50 to-cream-100 rounded-2xl border-2 border-ghee-300">
              <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">Beyond Chemical Analysis</h3>
              <p className="text-body mb-4">
                Modern analysis sees ghee as just saturated fat. But traditional wisdom understands something deeper — 
                the <span className="font-semibold text-primary-800">subtle properties (sattva)</span> generated through 
                proper samskāras cannot be measured by microscopes.
              </p>
              <p className="text-body mb-4">
                When prepared correctly with Agni (fire), Kala (time), and natural churning, ghee becomes light despite 
                being a fat. This is why it doesn't line your arteries like other fats — the transformations have changed 
                its very nature. What started as milk is now fundamentally different.
              </p>
              <div className="bg-white p-6 rounded-lg mt-6">
                <p className="text-lg font-semibold text-primary-900 mb-3 text-center italic">
                    "Snehanām uttamaṁ sarpiḥ, vayasaḥ sthānaṁ param"
                  </p>
                <p className="text-center text-primary-700">
                  Among all fats, ghee is supreme. For maintaining youth and vitality, nothing surpasses it.
                </p>
              </div>
            </div>

            <h3 className="heading-md text-center mb-8">Traditional Method vs Modern Production</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-organic">
                <h3 className="heading-sm mb-4 text-primary-800">Our Traditional Bilona Method</h3>
                <ul className="space-y-3">
                  {[
                    'Yogurt stage with 8-10 hour fermentation',
                    'Bi-directional hand churning',
                    'Preserves lacto bacilli and enzymes',
                    'Low, patient flame heating',
                    'Light takram (buttermilk) as byproduct',
                    'Sheeta-Snigdha properties intact',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span className="text-primary-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-organic bg-primary-50">
                <h3 className="heading-sm mb-4 text-primary-800">Commercial Production</h3>
                <ul className="space-y-3">
                  {[
                    'No yogurt stage - direct from cream',
                    'High-speed industrial churning',
                    'Beneficial cultures destroyed',
                    'Very high heat for maximum yield',
                    'Heavy buttermilk mixed back in',
                    'Just clarified butter, not true ghee',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span className="text-primary-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-ghee-50 rounded-lg border-l-4 border-ghee-500">
              <p className="text-sm text-primary-700 italic">
                Note: Ghee is best enjoyed in moderation. For therapeutic use, guidance from a qualified Vaidya is always advised.
              </p>
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
