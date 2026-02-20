import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'Vara UAE', 'Vara Events', 'Vara 3.0', 'Vara Velpu', 'Artex', 'Imagine AI', 'Next Level', 'Level Up',
];

export function LogoMarquee() {
  return (
    <section className="py-20 md:py-24 bg-black border-b border-white/10 overflow-hidden">
      <div className="container px-6 mb-12">
        <h3 className="text-xl md:text-3xl font-display font-medium text-white/50 text-center tracking-tight uppercase">
          Empowering the Creative Ecosystem
        </h3>
      </div>
      
      <div className="relative w-full overflow-hidden mask-fade">
        <div className="flex w-fit animate-marquee whitespace-nowrap py-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-16 md:space-x-32 px-10 md:px-20">
              {logos.map((logo) => (
                <span 
                  key={logo} 
                  className="text-4xl md:text-6xl font-display font-black text-white/10 hover:text-primary transition-colors cursor-default tracking-tighter uppercase"
                >
                  {logo}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
