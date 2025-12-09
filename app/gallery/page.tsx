import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Govardhanapuram Gosala',
  description: 'Explore our photo gallery showcasing life at Govardhanapuram Gosala, our cows, traditional ghee making process, and community activities.',
};

export default function GalleryPage() {
  const galleryImages = [
    {
      src: '/gallery1.jpg',
      alt: 'Life at Govardhanapuram Gosala',
      category: 'Cows',
    },
    {
      src: '/gallery2.jpg',
      alt: 'Traditional gosala setting',
      category: 'Cows',
    },
    {
      src: '/gallery3.jpeg',
      alt: 'Gosala daily activities',
      category: 'Community',
    },
    {
      src: '/gallery4.jpg',
      alt: 'Gosala environment',
      category: 'Community',
    },
    {
      src: '/lifeatghosala.jpg',
      alt: 'Daily life at gosala',
      category: 'Community',
    },
    {
      src: '/lifeatgosala2.jpg',
      alt: 'Village community at gosala',
      category: 'Community',
    },
    {
      src: '/lifeatgoshala3.jpg',
      alt: 'Gosala activities',
      category: 'Community',
    },
    {
      src: '/womenleddhoopstick.png',
      alt: 'Women-led dhoop stick production',
      category: 'Community',
    },
    {
      src: '/cowghee.png',
      alt: 'Pure A2 cow ghee',
      category: 'Products',
    },
    {
      src: '/butter.png',
      alt: 'Traditional butter from bilona method',
      category: 'Process',
    },
    {
      src: '/curd.png',
      alt: 'Traditional curd making',
      category: 'Process',
    },
    {
      src: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf5?w=800&q=80',
      alt: 'Green pasture for cows',
      category: 'Cows',
    },
  ];

  const categories = ['All', 'Cows', 'Process', 'Products', 'Community'];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-100 via-primary-50 to-ghee-100">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background circles */}
          <div className="absolute top-12 right-28 w-80 h-80 rounded-full bg-primary-200 opacity-25"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-ghee-300 opacity-20"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-earth-200 opacity-20"></div>
          
          {/* Camera/photo frame illustrations */}
          <div className="absolute bottom-20 left-28">
            <svg width="90" height="80" viewBox="0 0 90 80" className="opacity-25 fill-primary-600">
              {/* Camera body */}
              <rect x="10" y="25" width="70" height="50" rx="5" />
              {/* Lens */}
              <circle cx="45" cy="50" r="18" className="fill-primary-700"/>
              <circle cx="45" cy="50" r="12" className="fill-primary-500 opacity-50"/>
              {/* Flash */}
              <rect x="65" y="30" width="10" height="8" rx="2" className="fill-ghee-400"/>
            </svg>
          </div>
          
          <div className="absolute bottom-16 right-32">
            {/* Picture frame */}
            <svg width="70" height="70" viewBox="0 0 70 70" className="opacity-30 fill-earth-600">
              <rect x="5" y="5" width="60" height="60" rx="3" strokeWidth="4" stroke="currentColor" fill="none"/>
              <rect x="12" y="12" width="46" height="46" className="fill-ghee-200 opacity-60"/>
              {/* Simple mountain/landscape inside */}
              <path d="M 12 48 L 25 30 L 35 40 L 48 25 L 58 38 L 58 58 L 12 58 Z" className="fill-primary-400 opacity-70"/>
            </svg>
          </div>
          
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            {/* Photo strip */}
            <svg width="120" height="50" viewBox="0 0 120 50" className="opacity-20 fill-primary-500">
              <rect x="5" y="5" width="30" height="40" rx="2"/>
              <rect x="45" y="5" width="30" height="40" rx="2"/>
              <rect x="85" y="5" width="30" height="40" rx="2"/>
            </svg>
          </div>
          
          {/* Decorative leaves */}
          <div className="absolute top-28 left-20 opacity-20">
            <svg width="45" height="45" viewBox="0 0 45 45" className="fill-primary-500">
              <path d="M22,5 Q32,18 22,40 Q12,18 22,5 Z"/>
            </svg>
          </div>
          
          <div className="absolute top-24 right-20 opacity-25">
            <svg width="40" height="40" viewBox="0 0 40 40" className="fill-primary-600">
              <path d="M20,3 Q28,15 20,37 Q12,15 20,3 Z"/>
            </svg>
          </div>
          
          {/* Wave pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-28">
            <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,45 Q200,25 400,45 Q600,65 800,45 Q1000,25 1200,45 L1200,100 L0,100 Z" 
                    fill="currentColor" className="text-primary-300 opacity-30" />
              <path d="M0,65 Q300,45 600,65 Q900,85 1200,65 L1200,100 L0,100 Z" 
                    fill="currentColor" className="text-cream-300 opacity-35" />
            </svg>
          </div>
        </div>
        
        <div className="relative z-20 container-custom text-center px-4">
          <h1 className="heading-xl text-primary-900 mb-6">Our Gallery</h1>
          <p className="text-xl text-primary-800 max-w-2xl mx-auto">
            A visual journey through life at Govardhanapuram Gosala
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-primary-100 sticky top-20 z-40">
        <div className="container-custom py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  category === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gradient-earth">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative h-[350px] rounded-2xl overflow-hidden shadow-soft hover:shadow-organic transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-ghee-400 text-primary-900 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <p className="text-primary-600 mb-6">Showing {galleryImages.length} images</p>
            <button className="btn-outline">
              Load More Photos
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Video Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2].map((video) => (
              <div key={video} className="relative h-[300px] bg-primary-100 rounded-2xl overflow-hidden shadow-organic flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-primary-600">Video Coming Soon</p>
                </div>
                {/* Replace with actual video embed when ready */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Follow Our Journey
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Stay updated with daily life at our gosala on social media
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center space-x-2 bg-ghee-400 hover:bg-ghee-500 text-primary-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Follow on Instagram</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              <span>Follow on Twitter</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
