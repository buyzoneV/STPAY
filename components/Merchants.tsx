
import React from 'react';
import { Check } from 'lucide-react';

const Merchants: React.FC = () => {
  return (
    <section id="for-merchants" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 space-y-12">
              <div className="space-y-4">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Enterprise Ready</h2>
                <h3 className="text-4xl font-black text-white leading-tight">Scale Your Business Globally</h3>
                <p className="text-slate-400 text-lg">Join thousands of merchants accepting crypto. Our tools make it simple to manage your digital revenue.</p>
              </div>

              <ul className="space-y-8">
                {[
                  { t: 'Fast Settlement', d: 'Daily payouts to your local bank account in USD, EUR, or KRW.' },
                  { t: 'Lower Processing Fees', d: 'Save up to 80% compared to traditional card networks.' },
                  { t: 'Easy Integration', d: 'Plugins for Shopify, WooCommerce, and custom SDKs available.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.t}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                Apply for Merchant Account
              </button>
            </div>

            <div className="relative bg-[#1a1b15] min-h-[400px] flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
               <img 
                 src="https://picsum.photos/seed/merchant/800/800" 
                 alt="Merchant Shop Dashboard" 
                 className="w-3/4 h-3/4 object-contain drop-shadow-2xl rounded-2xl grayscale opacity-60 hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchants;
