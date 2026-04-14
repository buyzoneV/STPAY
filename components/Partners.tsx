
import React from 'react';

const logos = ['BINANCE', 'COINBASE', 'STRIPE', 'MASTERCARD', 'SAMSUNG', 'NAVER'];

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[10px] font-black text-center uppercase tracking-[0.4em] text-slate-400 mb-16">Trusted by Global Leaders</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-30 grayscale hover:opacity-60 transition-opacity">
          {logos.map((logo) => (
            <div key={logo} className="flex justify-center text-xl font-black italic tracking-tighter text-slate-900">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
