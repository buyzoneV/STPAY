
import React from 'react';
import { CheckCircle2, QrCode, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 bg-background">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full -mr-24 -mt-24 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Infrastructure
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-slate-900">
              Simple. Fast. <br/><span className="text-primary">Borderless.</span>
            </h1>
            
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              Next generation crypto payments for people and merchants. Bridging crypto and the real economy with fast settlement and low fees.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all">
                Start Payment
              </button>
              <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl text-base font-bold hover:bg-slate-50 transition-colors">
                Become a Merchant
              </button>
            </div>
          </div>

          <div className="relative group perspective-1000">
            <div className="relative rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl transition-transform duration-500 group-hover:rotate-y-2">
              <img 
                className="w-full aspect-[4/5] object-cover" 
                src="https://picsum.photos/seed/starpayhero/800/1000" 
                alt="STARPAY Mobile Interface" 
              />
              <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl border border-white/20 shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Scan to Pay</span>
                  <QrCode className="text-primary w-5 h-5" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    $
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">USDT Payment</p>
                    <p className="text-[10px] text-slate-400 font-medium">Fast Confirmation via Polygon</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-sm font-black text-slate-900">$1,250.00</p>
                    <p className="text-[10px] text-emerald-600 font-bold uppercase flex items-center gap-1">
                      <CheckCircle2 size={10} /> Success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
