import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Twitter, ArrowUpRight, Heart, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = [
  {
    title: 'Community',
    links: ['About Us', 'The Community', 'Eventscape', 'Vara 3.0'],
  },
  {
    title: 'Workshops',
    links: ['Imagine AI', 'Next Level', 'Level Up', 'VARAVELPU'],
  },
  {
    title: 'Support',
    links: ['Privacy Policy', 'Terms of Use', 'Contact Support', 'Let’s Connect'],
  },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'Youtube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 overflow-hidden">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 mb-24 md:mb-32">
          {/* Brand and Newsletter */}
          <div className="space-y-12 md:space-y-16">
            <div className="space-y-6">
              <a href="/" className="flex flex-col max-w-fit">
                <span className="text-4xl md:text-5xl font-display font-bold tracking-tighter leading-none text-primary uppercase">
                  Vara UAE
                </span>
                <span className="text-xs md:text-sm font-medium text-white/60 tracking-[0.4em] uppercase pt-2">
                  Creative Community
                </span>
              </a>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light max-w-md">
                Where ideas evolve, talent grows, and creativity finds its true direction. Welcome to the heart of UAE’s creative movement.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-widest">Join our Newsletter</h4>
              <div className="flex gap-4 max-w-md bg-white/5 p-2 rounded-full border border-white/10 focus-within:border-primary/50 transition-all">
                <Input 
                  placeholder="Email Address" 
                  className="bg-transparent border-none text-white focus-visible:ring-0 placeholder:text-white/30 rounded-full h-12"
                />
                <Button className="h-12 w-12 rounded-full p-0 bg-primary hover:bg-white text-black transition-all">
                  <Send size={20} />
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  className="w-12 h-12 rounded-full glass-navbar flex items-center justify-center text-white/60 hover:text-primary transition-all hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-6 md:space-y-8">
                <h4 className="text-sm md:text-base font-bold text-white uppercase tracking-widest">{group.title}</h4>
                <ul className="space-y-4 md:space-y-6">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="group flex items-center text-sm md:text-base text-white/40 hover:text-primary transition-colors"
                      >
                        {link}
                        <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <p className="text-sm md:text-base text-white/30 font-medium tracking-tight">
            © 2026 VARA UAE. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm md:text-base text-white/30 font-medium">
            <span>Built with</span>
            <Heart size={16} className="text-primary animate-pulse" fill="currentColor" />
            <span>for the Creative Designers of UAE.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
