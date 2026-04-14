
import React from 'react';
import { ShieldAlert, Gavel, ScanSearch, Lock } from 'lucide-react';

const items = [
  { icon: <ShieldAlert className="text-primary w-10 h-10" />, title: 'Anti-Fraud Protection', desc: 'Real-time AI monitoring to prevent suspicious activities and protect your funds.' },
  { icon: <Gavel className="text-primary w-10 h-10" />, title: 'Full Compliance', desc: 'Adhering to global AML/KYC regulations and regional financial standards.' },
  { icon: <ScanSearch className="text-primary w-10 h-10" />, title: 'Transparency', desc: 'Open-source smart contracts audited by top-tier security firms like Certik.' },
  { icon: <Lock className="text-primary w-10 h-10" />, title: 'Secure Custody', desc: 'Multi-signature cold storage solutions for the highest level of asset safety.' }
];

const Security: React.FC = () => {
  return (
    <section id="security" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Safety First</h2>
          <h3 className="text-4xl font-black text-slate-900 tracking-tight">Institutional Grade Security</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="space-y-6 group">
              <div className="transition-transform group-hover:-translate-y-1 duration-300">
                {item.icon}
              </div>
              <h5 className="text-xl font-bold text-slate-900">{item.title}</h5>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
