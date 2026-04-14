
import React from 'react';
import { Menu, Wallet } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
              <Wallet size={18} />
            </div>
            <span className="text-xl font-black tracking-tighter text-primary">STARPAY</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'About', 'Services', 'How it Works', 'For Merchants', 'Security', 'News'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium hover:text-primary transition-colors text-slate-600"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 px-3 py-1.5 text-[10px] font-bold border border-primary/20 rounded hover:bg-primary/5 transition-all uppercase text-slate-700">
              EN <span className="text-slate-300">|</span> KR
            </button>
            <button className="hidden md:block bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all">
              Connect Wallet
            </button>
            <button className="lg:hidden text-primary">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
