
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  { num: '01', title: 'Connect', desc: 'Link your preferred wallet or exchange account safely.' },
  { num: '02', title: 'Enter', desc: 'Input the recipient details or scan a merchant QR code.' },
  { num: '03', title: 'Pay', desc: 'Authorize the transaction with biometric or MFA security.' },
  { num: '04', title: 'Confirm', desc: 'Receive instant settlement confirmation on the chain.', special: true }
];

const Process: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[160px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[160px] -ml-48 -mb-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-20 space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">The Process</h2>
          <h3 className="text-4xl font-black tracking-tight">Four Steps to Global Payment</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-white/20"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-6 flex flex-col items-center">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center relative z-10 shadow-2xl transition-transform hover:scale-105 duration-300 ${step.special ? 'bg-white text-primary' : 'bg-primary/20 backdrop-blur-md border border-white/20 text-white'}`}>
                {step.special ? <CheckCircle2 size={40} /> : <span className="text-2xl font-black">{step.num}</span>}
              </div>
              <div className="max-w-[200px]">
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
