
import React from 'react';

const Mission: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Our Mission</h2>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              Bridging Crypto and the Real Economy
            </h3>
          </div>
          <p className="text-lg text-slate-500 leading-relaxed">
            STARPAY is dedicated to making digital assets spendable everywhere. We've built an institutional-grade payment gateway that combines the speed of blockchain with the reliability of traditional finance.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-10">
            <div className="space-y-1">
              <p className="text-3xl font-black text-primary">0.5s</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. Settlement</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-primary">0.1%</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Transaction Fee</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-primary">150+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Countries Supported</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
