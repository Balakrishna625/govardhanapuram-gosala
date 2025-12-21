import Image from 'next/image';
import type { Metadata } from 'next';
import { Calendar, Video, Package, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Ghee Batches | Govardhanapuram Gosala',
  description: 'View our ghee batches and watch the preparation video of the batch you want to buy. Complete transparency in our traditional Bilona process.',
};

// Batch data - easily add new batches here
const batches = [
  {
    id: 'BATCH-001',
    date: '15 December 2025',
    videoUrl: 'https://youtu.be/BsJ8KpagtyU',
    status: 'available',
    quantity: '50 litres',
    description: 'Traditional Bilona process with A2 cow milk from our desi cows.',
  },
  {
    id: 'BATCH-002',
    date: '10 December 2025',
    videoUrl: 'https://youtu.be/BsJ8KpagtyU',
    status: 'low-stock',
    quantity: '10 litres remaining',
    description: 'Hand-churned with wooden bilona, slow-cooked to perfection.',
  },
  {
    id: 'BATCH-003',
    date: '5 December 2025',
    videoUrl: 'https://youtu.be/BsJ8KpagtyU',
    status: 'sold-out',
    quantity: 'Sold out',
    description: 'Premium batch prepared during full moon for enhanced sattva.',
  },
];

export default function BatchesPage() {
  return (
    <main>
      {/* Batches Grid */}
      <section className="section-padding bg-gradient-earth">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Current Batches</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {batches.map((batch, index) => (
              <div 
                key={index} 
                className={`card-organic relative overflow-hidden ${
                  batch.status === 'sold-out' ? 'opacity-75' : ''
                }`}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {batch.status === 'available' && (
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Available
                    </span>
                  )}
                  {batch.status === 'low-stock' && (
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Low Stock
                    </span>
                  )}
                  {batch.status === 'sold-out' && (
                    <span className="bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Sold Out
                    </span>
                  )}
                </div>

                {/* Batch ID */}
                <div className="flex items-center space-x-2 mb-4">
                  <Package className="w-6 h-6 text-primary-600" />
                  <h3 className="heading-sm">{batch.id}</h3>
                </div>

                {/* Date */}
                <div className="flex items-center space-x-2 text-primary-700 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Prepared: {batch.date}</span>
                </div>

                {/* Quantity */}
                <div className="flex items-center space-x-2 text-primary-700 mb-4">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-semibold">{batch.quantity}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-primary-600 mb-6">
                  {batch.description}
                </p>

                {/* Video Button */}
                <a
                  href={batch.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-primary-600 text-white hover:bg-primary-700 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 w-full mb-3"
                >
                  <Video className="w-4 h-4" />
                  <span>Watch Preparation Video</span>
                </a>

                {/* Order Button */}
                {batch.status !== 'sold-out' && (
                  <WhatsAppButton 
                    message={`Hello, I would like to order from ${batch.id} (${batch.date}). Please share price and delivery details.`}
                    className="w-full text-sm"
                  >
                    Order This Batch
                  </WhatsAppButton>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="heading-lg text-center mb-8">How to Order</h2>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Choose Your Batch',
                desc: 'Browse available batches and watch their preparation videos.',
              },
              {
                step: '2',
                title: 'Place Your Order',
                desc: 'Click "Order This Batch" to message us on WhatsApp with your batch number.',
              },
              {
                step: '3',
                title: 'Receive Your Ghee',
                desc: 'We will confirm availability, share pricing, and deliver to your door.',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-1">{item.title}</h3>
                  <p className="text-primary-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Questions About Our Batches?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our batching process and availability
          </p>
          <WhatsAppButton>Get in Touch</WhatsAppButton>
        </div>
      </section>
    </main>
  );
}
