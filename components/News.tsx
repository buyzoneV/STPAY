
import React from 'react';

const news = [
  {
    img: 'https://picsum.photos/seed/news1/600/400',
    tag: 'Corporate News',
    title: 'STARPAY Expansion into the Korean Market',
    desc: 'Strategic partnership with local banks to enable seamless KRW-USDT transfers.'
  },
  {
    img: 'https://picsum.photos/seed/news2/600/400',
    tag: 'Product Updates',
    title: 'V2 API Release: 10x Faster Invoicing',
    desc: 'Introducing new bulk payment features and improved dashboard analytics for merchants.'
  },
  {
    img: 'https://picsum.photos/seed/news3/600/400',
    tag: 'Security',
    title: 'Zero-Knowledge Proofs Integration',
    desc: 'Enhancing user privacy while maintaining full compliance with ZK technology.'
  }
];

const News: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <h3 className="text-4xl font-black text-slate-900 tracking-tight">Latest Updates</h3>
          <a href="#" className="text-sm font-bold text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all">Read our blog</a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {news.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-8 aspect-video shadow-lg">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={item.img} 
                  alt={item.title} 
                />
              </div>
              <span className="text-[10px] font-black uppercase text-primary mb-4 block tracking-widest">{item.tag}</span>
              <h4 className="text-xl font-black mb-4 group-hover:text-primary transition-colors leading-tight">
                {item.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
