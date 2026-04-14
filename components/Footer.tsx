
import React from 'react';
import { Wallet, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
                <Wallet size={16} />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">STARPAY</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Leading the future of digital finance. Reliable, secure, and truly borderless payment infrastructure.
            </p>
          </div>

          <div>
            <h6 className="font-bold mb-8 text-white uppercase tracking-widest text-xs">Product</h6>
            <ul className="text-sm text-slate-400 space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">Consumer App</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Merchant Portal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Developer Docs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold mb-8 text-white uppercase tracking-widest text-xs">Resources</h6>
            <ul className="text-sm text-slate-400 space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Legal Documents</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h6 className="font-bold text-white uppercase tracking-widest text-xs">Newsletter</h6>
            <p className="text-sm text-slate-400">Stay updated with our latest releases.</p>
            <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
              <input className="bg-transparent border-none rounded-lg flex-1 text-sm focus:ring-0 focus:border-none px-4 py-2 text-white placeholder:text-slate-600" placeholder="Your email" type="email" />
              <button className="bg-primary p-3 rounded-lg hover:bg-primary-dark transition-all">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-500 font-black tracking-[0.2em] uppercase">
            © 2024 STARPAY LTD. All rights reserved.
          </p>
          <div className="flex gap-10 text-[10px] text-slate-500 font-black tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
