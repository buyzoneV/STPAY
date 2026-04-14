
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ArrowRight, CheckCircle2, QrCode, Repeat, 
  Store, Layout, Code, ShieldAlert, Gavel, ScanSearch, Lock, 
  Mail, Send, MapPin, Twitter, Linkedin, Github, Globe, 
  ChevronUp, MessageSquare, Loader2, FileText
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Logo Component ---
const Logo: React.FC<{ light?: boolean; className?: string }> = ({ light = false, className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-10 h-10 flex-shrink-0">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M40 20C25 25 15 40 15 55C15 75 35 90 55 85" stroke={light ? "white" : "#4d5421"} strokeWidth="4" strokeLinecap="round" />
        <path d="M60 80C75 75 85 60 85 45C85 25 65 10 45 15" stroke={light ? "white" : "#4d5421"} strokeWidth="4" strokeLinecap="round" />
        <circle cx="15" cy="55" r="5" fill={light ? "white" : "#4d5421"} />
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className={`text-2xl font-black tracking-tight ${light ? "text-white" : "text-primary"}`}>STARPAY</span>
      <span className={`text-[8px] font-bold tracking-[0.4em] uppercase ${light ? "text-white/80" : "text-primary/70"}`}>Simple Pay</span>
    </div>
  </div>
);

// --- Types ---
interface NavItem {
  label: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Process', id: 'process' },
  { label: 'Merchants', id: 'merchants' },
  { label: 'Security', id: 'security' },
  { label: 'News', id: 'news' },
  { label: 'Contact', id: 'contact' },
];

// --- AI Assistant Component ---
const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Hello! I am the STARPAY AI Guide. How can I help you understand our crypto payment infrastructure today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleAsk = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the STARPAY AI Assistant. 
          Context: STARPAY is a crypto payment infrastructure. 
          Facts: 0.5s settlement, 0.1% fees, 150+ countries, supports Polygon, USDT, and major chains. 
          Tone: Professional, helpful, concise. Support both English and Korean.`,
        }
      });
      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Error connecting to guide service. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-[350px] overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-bold tracking-tight">STARPAY Guide AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
              <X size={18} />
            </button>
          </div>
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${m.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-slate-100 flex gap-2 bg-white">
            <input 
              className="flex-1 text-sm outline-none bg-slate-100 px-3 py-2 rounded-lg" 
              placeholder="Ask anything..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            />
            <button onClick={handleAsk} className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-all">
              <Send size={16} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageSquare className="group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};

// --- Main App ---
const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const current = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-slate-900 selection:bg-primary/20">
      <AIAssistant />

      {/* Scroll Top */}
      {showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-50 bg-white border border-slate-200 p-3 rounded-full shadow-lg hover:-translate-y-1 transition-all text-primary"
        >
          <ChevronUp size={20} />
        </button>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo />
            </div>
            
            <div className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[11px] font-black uppercase tracking-widest transition-all hover:text-primary ${activeSection === item.id ? 'text-primary' : 'text-slate-400'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://drive.google.com/file/d/1h_6L2318sVsjY7GbQxj3MCBLKuwVZKZR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-all"
              >
                <FileText size={14} /> Whitepaper
              </a>
              <button className="flex items-center gap-1 px-3 py-1.5 text-[10px] font-bold border border-primary/20 rounded hover:bg-primary/5 transition-all uppercase text-slate-700">
                EN <span className="text-slate-300">|</span> KR
              </button>
              <a 
                href="https://starpaycom.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Connect Wallet
              </a>
              <button className="lg:hidden text-primary" onClick={() => setMobileMenuOpen(true)}>
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm lg:hidden animate-in fade-in duration-200">
          <div className="absolute right-0 top-0 h-full w-[280px] bg-white p-8 flex flex-col gap-8 shadow-2xl animate-in slide-in-from-right-4 duration-300">
            <div className="flex justify-between items-center">
              <span className="font-black text-primary">MENU</span>
              <button onClick={() => setMobileMenuOpen(false)}><X /></button>
            </div>
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg font-black text-left uppercase tracking-tighter ${activeSection === item.id ? 'text-primary' : 'text-slate-400'}`}
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="https://drive.google.com/file/d/1h_6L2318sVsjY7GbQxj3MCBLKuwVZKZR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-black text-left uppercase tracking-tighter text-slate-400"
              >
                Whitepaper
              </a>
            </div>
            <a 
              href="https://starpaycom.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-primary text-white py-4 rounded-xl font-bold text-center"
            >
              Connect Wallet
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section id="home" className="relative overflow-hidden pt-12 pb-20 lg:pt-32 lg:pb-48 bg-background">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full -mr-24 -mt-24 pointer-events-none animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Financial Highway of the Future
              </div>
              <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-slate-900">
                Simple. Fast. <br/><span className="text-primary italic">Borderless.</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                The leading institutional-grade crypto payment gateway. Move value as fast as information with 0.1% fees and 0.5s settlements.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://starpaycom.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-5 rounded-2xl text-base font-bold shadow-2xl shadow-primary/30 hover:bg-primary-dark hover:-translate-y-1 transition-all flex items-center gap-2"
                >
                  Launch App <ArrowRight size={18} />
                </a>
                <a 
                  href="https://drive.google.com/file/d/1h_6L2318sVsjY7GbQxj3MCBLKuwVZKZR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-slate-200 text-slate-900 px-8 py-5 rounded-2xl text-base font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
                >
                  Whitepaper <FileText size={18} />
                </a>
                <button className="bg-white border border-slate-200 text-slate-900 px-8 py-5 rounded-2xl text-base font-bold hover:bg-slate-50 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="relative group perspective-1000">
              <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(77,84,33,0.15)] transition-transform duration-700 group-hover:rotate-y-6">
                <img className="w-full aspect-[4/5] object-cover" src="https://picsum.photos/seed/starpay/800/1000" alt="STARPAY App" />
                <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-3xl border border-white/20 shadow-2xl">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[12px] font-black uppercase tracking-[0.3em] text-primary">Secure Scan</span>
                    <QrCode className="text-primary w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold">$</div>
                    <div>
                      <p className="text-lg font-black text-slate-900">Payment Processed</p>
                      <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Confirmed via Polygon Network</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-xl font-black text-slate-900">$2,450.00</p>
                      <div className="text-[11px] text-emerald-600 font-black flex items-center justify-end gap-1 uppercase">
                        <CheckCircle2 size={12} /> Success
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">Who We Are</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                Bridging Digital Assets and the Real Economy
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                STARPAY was founded with a single vision: to make crypto spendable anywhere, by anyone. We provide the infrastructure that turns volatile assets into reliable purchasing power.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-50">
                <div className="space-y-1">
                  <p className="text-4xl font-black text-primary italic">0.5s</p>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Global Settlement</p>
                </div>
                <div className="space-y-1">
                  <p className="text-4xl font-black text-primary italic">0.1%</p>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Base Protocol Fee</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <Globe className="mx-auto text-primary" size={40} />
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">150+ Regions</p>
                </div>
              </div>
              <div className="aspect-square bg-primary text-white rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-8 mt-12">
                <div className="text-center space-y-4">
                  <ShieldAlert className="mx-auto" size={40} />
                  <p className="text-xs font-black uppercase tracking-widest opacity-60">Full Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">Ecosystem</h2>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter">Unified Infrastructure</h3>
            </div>
            <button className="flex items-center gap-2 text-primary font-bold hover:translate-x-1 transition-all text-sm uppercase tracking-widest border-b-2 border-primary/20 pb-2">
              Explore API Reference <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Repeat />, title: 'P2P Transfer', desc: 'Global transfers at the speed of light.' },
              { icon: <Store />, title: 'Merchant POS', desc: 'Hardware and software POS solutions.' },
              { icon: <Layout />, title: 'Custody', desc: 'MPC-based multi-sig asset security.' },
              { icon: <Code />, title: 'SDK/API', desc: 'Embed payments in any platform.' }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] border border-slate-100 hover:border-primary/40 transition-all group cursor-pointer hover:shadow-2xl">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm mb-10">{s.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[200px] -mr-[400px] -mt-[400px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-24 space-y-4">
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">Integration</h2>
            <h3 className="text-5xl font-black tracking-tighter">Simple 4-Step Flow</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-16">
            {[
              { n: '01', t: 'Connect', d: 'Link your vault' },
              { n: '02', t: 'Request', d: 'Create invoice' },
              { n: '03', t: 'Pay', d: 'User scan & confirm' },
              { n: '04', t: 'Settle', d: 'Instant KRW/USD' }
            ].map((step, i) => (
              <div key={i} className="space-y-8 flex flex-col items-center group">
                <div className={`w-28 h-28 rounded-[2.5rem] flex items-center justify-center text-3xl font-black transition-all duration-500 ${i === 3 ? 'bg-primary shadow-[0_0_50px_rgba(77,84,33,0.5)] scale-110' : 'bg-white/5 border border-white/10 group-hover:bg-white/10'}`}>
                  {step.n}
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-black tracking-tight">{step.t}</h4>
                  <p className="text-white/40 text-sm">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merchants */}
      <section id="merchants" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden grid lg:grid-cols-2 border border-slate-100">
            <div className="p-12 lg:p-24 space-y-12">
              <div className="space-y-6">
                <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">For Merchants</h2>
                <h3 className="text-5xl font-black text-slate-900 leading-tight tracking-tighter">Build Your Future <br/>on Crypto Payments</h3>
                <p className="text-slate-500 text-lg leading-relaxed">Don't miss the 200 million user crypto economy. We handle the complexity, you focus on your business.</p>
              </div>
              <div className="space-y-8">
                {[
                  'Real-time Payouts in local fiat',
                  'Zero chargeback risk guaranteed',
                  'Enterprise-grade dashboard & reporting'
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-slate-700 font-bold">{text}</span>
                  </div>
                ))}
              </div>
              <a 
                href="https://starpaycom.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all w-full md:w-auto text-center block"
              >
                Join 5,000+ Merchants
              </a>
            </div>
            <div className="bg-slate-50 flex items-center justify-center p-12 lg:p-24">
              <div className="relative w-full max-w-md aspect-square bg-white rounded-3xl shadow-xl border border-slate-100 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase text-slate-400">Total Volume</p>
                    <p className="text-3xl font-black text-slate-900 tracking-tight">$842,120.50</p>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg text-primary"><Layout size={20} /></div>
                </div>
                <div className="flex-1 flex items-end gap-2 pb-8">
                  {[40, 60, 45, 90, 65, 80, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/20 rounded-t-md hover:bg-primary transition-colors cursor-pointer" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-8 border-t border-slate-100">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />)}
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Recent Transfers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-24 space-y-4">
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">Fortress Security</h2>
            <h3 className="text-5xl font-black text-slate-900 tracking-tighter">Institutional Trust</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { i: <ShieldAlert />, t: 'AI Monitoring', d: 'ML-powered fraud detection.' },
              { i: <Gavel />, t: 'AML/KYC', d: 'Global regulatory compliance.' },
              { i: <ScanSearch />, t: 'Audit Trail', d: 'Publicly verifiable transactions.' },
              { i: <Lock />, t: 'MPC Tech', d: 'Multi-party computation custody.' }
            ].map((item, idx) => (
              <div key={idx} className="space-y-6 text-center lg:text-left">
                <div className="text-primary w-12 h-12 mx-auto lg:mx-0">{item.i}</div>
                <h5 className="text-xl font-black text-slate-900 tracking-tight">{item.t}</h5>
                <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-20">
            <div className="space-y-4">
              <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">Press</h2>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter">Insights & News</h3>
            </div>
            <a href="#" className="hidden md:block text-sm font-black uppercase tracking-widest text-primary border-b-2 border-primary/10 pb-1">View Archive</a>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { t: 'Expansion into South East Asia', d: 'Strategic nodes deployed in Singapore and Jakarta.', img: 'https://picsum.photos/seed/n1/600/400' },
              { t: 'V3 Core Upgrade Live', d: 'Proprietary layer-2 settlement engine achieves 0.1s latency.', img: 'https://picsum.photos/seed/n2/600/400' },
              { t: 'ESG Initiatives in 2024', d: 'Moving towards 100% carbon-neutral transaction relayers.', img: 'https://picsum.photos/seed/n3/600/400' }
            ].map((news, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-[2rem] overflow-hidden shadow-xl mb-8">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={news.img} alt={news.t} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-primary transition-colors">{news.t}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{news.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[4rem] shadow-3xl overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 lg:p-24 space-y-12">
              <div className="space-y-6">
                <h3 className="text-5xl font-black text-white tracking-tighter">Let's Talk Infrastructure.</h3>
                <p className="text-slate-400 text-lg">Custom solutions for high-volume platforms.</p>
              </div>
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 outline-none focus:border-primary transition-colors" placeholder="Name" />
                  <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 outline-none focus:border-primary transition-colors" placeholder="Email" />
                </div>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 outline-none focus:border-primary transition-colors h-32" placeholder="Message" />
                <button className="bg-primary text-white w-full py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-transform">Send Inquiry</button>
              </form>
            </div>
            <div className="bg-primary p-12 lg:p-24 flex flex-col justify-between text-white relative">
              <div className="absolute top-0 right-0 p-8 opacity-20"><Globe size={200} /></div>
              <div className="space-y-12 relative z-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><Mail /></div>
                  <div><p className="font-black text-xl">Email</p><p className="opacity-60">contact@starpay.global</p></div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><Send /></div>
                  <div><p className="font-black text-xl">Telegram</p><p className="opacity-60">@STARPAY_HQ</p></div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><MapPin /></div>
                  <div><p className="font-black text-xl">Offices</p><p className="opacity-60">Singapore · Seoul · New York</p></div>
                </div>
              </div>
              <div className="flex gap-6 relative z-10 pt-12">
                <Twitter className="cursor-pointer hover:text-white/60" />
                <Linkedin className="cursor-pointer hover:text-white/60" />
                <Github className="cursor-pointer hover:text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/5 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 pb-20 border-b border-white/5">
            <div className="space-y-8">
              <Logo light />
              <p className="text-slate-500 text-sm leading-relaxed">Defining the standard for institutional crypto payments since 2021.</p>
            </div>
            {['Product', 'Resources', 'Company'].map((title, i) => (
              <div key={i} className="space-y-8">
                <h6 className="text-[11px] font-black uppercase tracking-[0.5em] text-white">{title}</h6>
                <ul className="space-y-4 text-slate-500 text-sm font-bold">
                  {i === 0 && ['Consumer Wallet', 'Merchant API', 'Pricing'].map(l => <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>)}
                  {i === 1 && (
                    <>
                      <li><a href="https://drive.google.com/file/d/1h_6L2318sVsjY7GbQxj3MCBLKuwVZKZR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Whitepaper</a></li>
                      {['Documentation', 'Security', 'Media Kit'].map(l => <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>)}
                    </>
                  )}
                  {i === 2 && ['About Us', 'Careers', 'Contact'].map(l => <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">© 2024 STARPAY INFRASTRUCTURE LTD.</p>
            <div className="flex gap-8 text-[10px] font-black text-slate-600 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
