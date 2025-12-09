import Image from 'next/image';
import type { Metadata } from 'next';
import { CheckCircle, Leaf, Award, Heart } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Our Products | Govardhanapuram Gosala',
  description: 'Pure A2 Organic Bilona Cow Ghee and upcoming cow-based organic products from Govardhanapuram Gosala.',
};

export default function ProductsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-ghee-100 via-cream-200 to-earth-200">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background circles */}
          <div className="absolute -top-20 right-32 w-80 h-80 rounded-full bg-ghee-300 opacity-25"></div>
          <div className="absolute bottom-10 -left-32 w-96 h-96 rounded-full bg-earth-300 opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-primary-200 opacity-20"></div>
          
          {/* Stylized ghee containers/jars using SVG */}
          <div className="absolute bottom-16 left-24">
            <svg width="80" height="100" viewBox="0 0 80 100" className="opacity-30 fill-ghee-600">
              {/* Jar body */}
              <rect x="15" y="30" width="50" height="60" rx="5" />
              {/* Jar lid */}
              <rect x="10" y="25" width="60" height="8" rx="2" />
              {/* Lid top */}
              <ellipse cx="40" cy="25" rx="32" ry="6" />
              {/* Ghee inside */}
              <rect x="20" y="40" width="40" height="45" rx="3" className="fill-ghee-400 opacity-70"/>
            </svg>
          </div>
          
          <div className="absolute bottom-12 right-28">
            <svg width="70" height="90" viewBox="0 0 70 90" className="opacity-25 fill-earth-600">
              {/* Jar body */}
              <rect x="12" y="25" width="46" height="55" rx="4" />
              {/* Jar lid */}
              <rect x="8" y="20" width="54" height="7" rx="2" />
              {/* Lid top */}
              <ellipse cx="35" cy="20" rx="28" ry="5" />
              {/* Ghee inside */}
              <rect x="16" y="33" width="38" height="42" rx="3" className="fill-ghee-300 opacity-80"/>
            </svg>
          </div>
          
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <svg width="90" height="110" viewBox="0 0 90 110" className="opacity-35 fill-ghee-700">
              {/* Large jar body */}
              <rect x="15" y="30" width="60" height="70" rx="6" />
              {/* Jar lid */}
              <rect x="10" y="24" width="70" height="9" rx="2" />
              {/* Lid top */}
              <ellipse cx="45" cy="24" rx="37" ry="7" />
              {/* Ghee inside */}
              <rect x="20" y="42" width="50" height="53" rx="4" className="fill-ghee-400 opacity-75"/>
              {/* Shine effect */}
              <ellipse cx="35" cy="55" rx="8" ry="12" className="fill-white opacity-30"/>
            </svg>
          </div>
          
          {/* Leaf decorations */}
          <div className="absolute top-16 left-40 opacity-20">
            <svg width="45" height="45" viewBox="0 0 45 45" className="fill-primary-600">
              <path d="M22,5 Q32,18 22,40 Q12,18 22,5 Z"/>
            </svg>
          </div>
          
          <div className="absolute top-20 right-24 opacity-25">
            <svg width="35" height="35" viewBox="0 0 35 35" className="fill-primary-500">
              <path d="M17,3 Q24,13 17,32 Q10,13 17,3 Z"/>
            </svg>
          </div>
          
          {/* Wavy ground */}
          <div className="absolute bottom-0 left-0 right-0 h-28">
            <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,40 Q200,20 400,40 Q600,60 800,40 Q1000,20 1200,40 L1200,100 L0,100 Z" 
                    fill="currentColor" className="text-ghee-300 opacity-35" />
              <path d="M0,60 Q300,40 600,60 Q900,80 1200,60 L1200,100 L0,100 Z" 
                    fill="currentColor" className="text-earth-400 opacity-25" />
            </svg>
          </div>
        </div>
        
        <div className="relative z-20 container-custom text-center px-4">
          <h1 className="heading-xl text-primary-900 mb-6">Our Products</h1>
          <p className="text-xl text-primary-800 max-w-2xl mx-auto">
            Pure, traditional, and crafted with care
          </p>
        </div>
      </section>

      {/* Main Product - A2 Ghee */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?w=800&h=800&fit=crop&q=80"
                alt="Traditional A2 Bilona Cow Ghee in glass jar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-ghee-400 text-primary-900 font-bold text-sm px-4 py-2 rounded-full mb-4">
                AVAILABLE NOW
              </div>
              <h2 className="text-4xl font-display font-bold mb-4 text-primary-900">
                Organic A2 Bilona Cow Ghee
              </h2>
              <p className="text-xl text-primary-600 mb-6">Premium 1 Litre Glass Bottle</p>
              
              <div className="bg-cream-100 border border-primary-200 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-primary-900 mb-4">Product Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-primary-600">Net Quantity</p>
                    <p className="font-semibold text-primary-900">1 Litre</p>
                  </div>
                  <div>
                    <p className="text-primary-600">Ingredients</p>
                    <p className="font-semibold text-primary-900">100% A2 Cow Milk Fat</p>
                  </div>
                  <div>
                    <p className="text-primary-600">Packaging</p>
                    <p className="font-semibold text-primary-900">Glass Bottle</p>
                  </div>
                  <div>
                    <p className="text-primary-600">Storage</p>
                    <p className="font-semibold text-primary-900">Cool & Dry Place</p>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-primary-900 mb-4">Health Benefits</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Improves digestion and gut health',
                  'Boosts immunity naturally',
                  'Enhances memory and brain function',
                  'Rich in vitamins A, D, E, K',
                  'Good for children & elders',
                  'Supports healthy metabolism',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton>Order Now</WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="section-padding bg-gradient-earth">
        <div className="container-custom max-w-6xl mx-auto">
          <h2 className="heading-lg text-center mb-12">Why Choose Our Ghee?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: '100% Natural',
                desc: 'No preservatives, additives, or chemicals. Pure ghee from grass-fed A2 cows.',
                color: 'from-primary-500 to-green-500',
              },
              {
                icon: Award,
                title: 'Traditional Method',
                desc: 'Hand-churned using ancient wooden bilona technique for maximum nutrients.',
                color: 'from-ghee-400 to-orange-500',
              },
              {
                icon: Heart,
                title: 'Ethically Made',
                desc: 'Supporting village communities and treating cows with love and respect.',
                color: 'from-pink-500 to-rose-500',
              },
            ].map((feature, index) => (
              <div key={index} className="card-organic text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-sm mb-3">{feature.title}</h3>
                <p className="text-primary-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Coming Soon</h2>
            <p className="text-body max-w-2xl mx-auto">
              We're expanding our range of authentic cow-based organic products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cow Dung Dhoop Sticks',
                desc: 'Eco-friendly incense made by trained rural women',
                icon: '🪔',
                badge: 'Women-Made',
              },
              {
                title: 'Organic Agarbatti',
                desc: 'Natural incense sticks with herbal fragrances',
                icon: '🌿',
                badge: 'Chemical Free',
              },
              {
                title: 'Panchagavya',
                desc: 'Traditional Ayurvedic preparation from cow products',
                icon: '🌾',
                badge: 'Ayurvedic',
              },
              {
                title: 'Natural Fertilizers',
                desc: 'Organic compost for sustainable farming',
                icon: '🌱',
                badge: 'Eco-Friendly',
              },
              {
                title: 'Vermicompost',
                desc: 'Nutrient-rich organic fertilizer',
                icon: '♻️',
                badge: 'Sustainable',
              },
              {
                title: 'Herbal Dhoop Cones',
                desc: 'Traditional dhoop with natural herbs',
                icon: '✨',
                badge: 'Handcrafted',
              },
            ].map((product, index) => (
              <div key={index} className="card-organic relative overflow-hidden group hover:scale-105 transition-all">
                <div className="absolute top-4 right-4 bg-ghee-400 text-primary-900 text-xs font-bold px-3 py-1 rounded-full">
                  COMING SOON
                </div>
                <div className="text-5xl mb-4">{product.icon}</div>
                <div className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {product.badge}
                </div>
                <h3 className="heading-sm mb-2">{product.title}</h3>
                <p className="text-primary-600 text-sm">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Experience Pure Tradition?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Order our premium A2 Bilona Cow Ghee today
          </p>
          <WhatsAppButton>Place Your Order</WhatsAppButton>
        </div>
      </section>
    </main>
  );
}
