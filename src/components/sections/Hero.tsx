import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4 md:space-y-6"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
            The Creative Designers of UAE
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter text-white uppercase max-w-5xl mx-auto">
            Look Beyond Your <span className="text-primary italic">Creative</span> Horizon.
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Step into a world where your imagination belongs — a community that inspires, supports, and elevates your future.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="group relative px-8 h-14 bg-primary text-black hover:bg-white transition-all duration-300 rounded-full font-bold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore Community <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 border-white/20 text-white hover:bg-white/10 rounded-full font-semibold text-lg backdrop-blur-md"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-medium vertical-text">Scroll</span>
      </motion.div>
    </section>
  );
}
