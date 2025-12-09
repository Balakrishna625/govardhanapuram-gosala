import Image from 'next/image';
import Link from 'next/link';
import { 
  Leaf, 
  Heart, 
  Shield, 
  Users, 
  Droplet,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{backgroundColor: '#2d5016'}}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10" />
          <img
            src="/hero.png"
            alt="Govindapuram Goshala - Traditional Indian goshala"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container-custom text-center px-4">
          <div className="animate-fade-in">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 animate-slide-up drop-shadow-lg">
              Govardhanapuram Gosala
            </h1>
            <p className="text-2xl md:text-3xl text-ghee-300 font-serif italic mb-4 drop-shadow-md">
              Pure. Traditional. Sustainable.
            </p>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md">
              Pure A2 Organic Bilona Cow Ghee, carefully handcrafted at our sustainable gosala in Govardhanapuram. 
              We support rural livelihoods, preserve ancient traditions, and deliver uncompromised purity to your home.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { icon: Leaf, text: '100% Natural' },
                { icon: Shield, text: 'Chemical Free' },
                { icon: Users, text: 'Village-Supported' },
                { icon: Droplet, text: 'Traditional Bilona' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-black/40 backdrop-blur-md border border-ghee-400/50 rounded-full px-6 py-3 shadow-lg"
                >
                  <item.icon className="w-5 h-5 text-ghee-400" />
                  <span className="text-white font-semibold">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton className="w-full sm:w-auto">
                Buy Our Ghee
              </WhatsAppButton>
              <Link
                href="/impact"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Heart className="w-5 h-5" />
                <span>Support Our Goshala</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-y border-primary-100 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, label: 'Premium Quality', sublabel: 'Certified Organic' },
              { icon: Shield, label: 'Chemical Free', sublabel: '100% Natural' },
              { icon: Heart, label: 'Ethical', sublabel: 'Cruelty Free' },
              { icon: Users, label: 'Community', sublabel: 'Village Supported' },
            ].map((badge, index) => (
              <div key={index} className="text-center">
                <badge.icon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-1">{badge.label}</h3>
                <p className="text-sm text-primary-600">{badge.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-gradient-earth">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-organic">
              <img
                src="/village-community.png"
                alt="Village community at Govardhanapuram Goshala"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="heading-lg mb-6">
                Preserving Traditions,<br />
                <span className="gradient-text">Empowering Communities</span>
              </h2>
              <p className="text-body mb-6">
                At Govardhanapuram Gosala, we follow age-old Indian traditions to produce pure A2 Bilona 
                Cow Ghee using natural, sustainable, and ethical methods. Our gosala not only focuses 
                on healthy cows and clean dairy products, but also empowers local villagers with skill 
                development and stable livelihoods.
              </p>
              <p className="text-body mb-8">
                Every jar of our ghee tells a story of tradition, purity, and community support. When 
                you choose Govardhanapuram Gosala, you're not just buying a product – you're supporting 
                a movement towards sustainable rural development.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-800 font-semibold group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              The Sacred <span className="gradient-text">Bilona Method</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              From cow to container — every step is transparent, traditional, and crafted with care. 
              Witness the journey of our pure A2 ghee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: '01', title: 'Fresh Milk', desc: 'A2 cow milk', icon: '🐄' },
              { step: '02', title: 'Curd', desc: 'Natural fermentation', icon: '🥛' },
              { step: '03', title: 'Churning', desc: 'Wooden bilona', icon: '⚙️' },
              { step: '04', title: 'Butter', desc: 'Pure extraction', icon: '🧈' },
              { step: '05', title: 'Heating', desc: 'Slow & gentle', icon: '🔥' },
              { step: '06', title: 'Pure Ghee', desc: 'Golden nectar', icon: '✨' },
            ].map((item, index) => (
              <div key={index} className="card-organic text-center group hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-xs font-bold text-ghee-600 mb-2">STEP {item.step}</div>
                <h3 className="font-semibold text-primary-900 mb-1">{item.title}</h3>
                <p className="text-sm text-primary-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/process"
              className="btn-outline"
            >
              See Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-ghee-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/cowghee.png"
                alt="Pure A2 Bilona Cow Ghee"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-ghee-400 text-primary-900 font-bold text-sm px-4 py-2 rounded-full mb-4">
                OUR FLAGSHIP PRODUCT
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Organic A2 Bilona<br />Cow Ghee
              </h2>
              <p className="text-xl text-primary-100 mb-6">Premium 1 Litre Glass Bottle</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Hand-churned using traditional wooden bilona',
                  'No preservatives or artificial additives',
                  'Rich aroma & authentic taste',
                  'Industry-grade glass packaging',
                  'Ethically sourced from healthy A2 cows',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-ghee-400 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-100">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton>
                  Order Now
                </WhatsAppButton>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Preview */}
      <section className="section-padding bg-gradient-earth">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              More Than Just Ghee –<br />
              <span className="gradient-text">A Movement for Change</span>
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              We believe true sustainability comes from uplifting rural communities. Our goshala trains 
              and employs local people to produce cow-based organic products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Women Empowerment',
                desc: 'Training rural women to produce eco-friendly cow dung dhoop sticks and organic incense products',
                icon: '/women-empowerment.png',
                color: 'from-pink-500 to-rose-500',
              },
              {
                title: 'Skill Development',
                desc: 'Teaching traditional methods of making agarbatti, organic fertilizers, and panchagavya products',
                icon: '/skilldevelopment.webp',
                color: 'from-primary-500 to-green-500',
              },
              {
                title: 'Stable Employment',
                desc: 'Creating sustainable income opportunities for Govardhanapuram villagers and their families',
                icon: '/stableemployment.webp',
                color: 'from-ghee-400 to-orange-500',
              },
            ].map((impact, index) => (
              <div key={index} className="card-organic group hover:scale-105 transition-all">
                <div className="w-24 h-24 mb-4 group-hover:scale-110 transition-transform">
                  <img src={impact.icon} alt={impact.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="heading-sm mb-3">{impact.title}</h3>
                <p className="text-primary-700">{impact.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-primary-800 font-medium mb-6">
              Every product you buy directly supports a family in Govardhanapuram.
            </p>
            <Link
              href="/impact"
              className="btn-primary"
            >
              See Our Social Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Experience Pure, Traditional Ghee?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of families who trust Govardhanapuram Gosala for authentic A2 Bilona Cow Ghee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton>
              Order via WhatsApp
            </WhatsAppButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
