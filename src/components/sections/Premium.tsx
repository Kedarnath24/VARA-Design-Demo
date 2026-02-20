import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Lock, Zap, Shield, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  { icon: Zap, title: 'Exclusive Access', desc: 'Access to exclusive workshops and masterclasses.' },
  { icon: Users, title: 'Connection', desc: 'Private community groups and collaboration hubs.' },
  { icon: Shield, title: 'Signature Benefits', desc: 'Unique Member ID and exclusive discounts.' },
  { icon: Gift, title: 'Direct Impact', desc: 'Collaborative Networking & Member-Only Communities.' },
];

import { Users } from 'lucide-react';

export function Premium() {
  return (
    <section className="py-24 md:py-40 bg-black overflow-hidden relative">
      {/* Decorative side element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-sm">
                <Star size={18} fill="currentColor" />
                <span>Premium Membership</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-display font-bold text-white uppercase leading-none">
                VARA <span className="text-primary italic">Premium</span> Membership
              </h2>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
                Every creative mind deserves a space to grow. VARA Membership opens the doors to a world where ideas rise, talents shine, and dreams evolve into reality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {benefits.map((benefit, i) => (
                <div key={benefit.title} className="group space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <benefit.icon size={28} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl md:text-2xl font-display font-bold text-white uppercase group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-sm md:text-base text-white/40 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="h-16 px-10 bg-primary text-black hover:bg-white transition-all duration-300 rounded-full font-bold text-xl uppercase tracking-tighter">
              Join the Inner Circle
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071" 
                alt="Community Collaboration" 
                className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-primary/20 opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full glass-navbar flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                  <Lock size={40} className="md:size-12" />
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-6 md:-left-12 p-6 md:p-8 glass-card rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center space-x-6">
                <div className="space-y-1">
                  <p className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest">Enrollment Opening</p>
                  <p className="text-xl md:text-2xl font-display font-bold text-primary uppercase">Coming Soon</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black overflow-hidden bg-muted">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Member" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black bg-primary flex items-center justify-center text-black text-xs md:text-sm font-bold">
                    +1k
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
