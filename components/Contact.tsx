
import React from 'react';
import { Mail, Send, MapPin, Twitter, Linkedin, Github, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-12 lg:p-20 space-y-10">
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">Get in Touch</h3>
              <p className="text-slate-500 text-lg">Have questions about integrating STARPAY? Our team of experts is here to help.</p>
            </div>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <input className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-slate-50/50" placeholder="Full Name" type="text" />
                <input className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-slate-50/50" placeholder="Email Address" type="email" />
              </div>
              <input className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-slate-50/50" placeholder="Subject" type="text" />
              <textarea className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-slate-50/50" placeholder="Your Message" rows={4}></textarea>
              <button className="w-full bg-primary text-white py-5 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-primary p-12 lg:p-20 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="space-y-12 relative z-10">
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center"><Mail size={20} /></div>
                <div>
                  <h5 className="font-black text-lg">Email Us</h5>
                  <p className="text-white/60 text-sm">support@starpay.global</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center"><Send size={20} /></div>
                <div>
                  <h5 className="font-black text-lg">Telegram Support</h5>
                  <p className="text-white/60 text-sm">@starpay_official</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center"><MapPin size={20} /></div>
                <div>
                  <h5 className="font-black text-lg">Global Offices</h5>
                  <p className="text-white/60 text-sm">Singapore · Seoul · London · New York</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 pt-12 relative z-10">
              <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"><Twitter size={18} /></a>
              <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"><Linkedin size={18} /></a>
              <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"><Github size={18} /></a>
              <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"><Globe size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
