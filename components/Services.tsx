
import React from 'react';
import { ArrowRight, Repeat, Store, Layout, Code } from 'lucide-react';

const services = [
  {
    icon: <Repeat className="w-6 h-6" />,
    title: 'P2P Transfer',
    desc: 'Fast and secure peer-to-peer transfers worldwide with near-zero friction.',
  },
  {
    icon: <Store className="w-6 h-6" />,
    title: 'Merchant Payment',
    desc: 'Accept crypto at your business with instant conversion to local fiat currency.',
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Wallet Infrastructure',
    desc: 'Robust MPC-based infrastructure for institutional digital asset management.',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'API / SDK',
    desc: 'Seamless integration for developers and platforms with pre-built components.',
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div className="space-y-3">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Core Ecosystem</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">Unified Payment Services</h3>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-sm group">
            View Full API Docs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 group cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">{s.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">{s.desc}</p>
              <a className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2 group/link" href="#">
                Learn More <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
