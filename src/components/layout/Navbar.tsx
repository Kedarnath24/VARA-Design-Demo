import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'The Community', href: '#' },
  { name: 'Vara 3.0', href: '#' },
  { name: 'Eventscape', href: '#' },
  { name: "Let's Connect", href: '#' },
];

const socialLinks = [
  { icon: Instagram, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Youtube, href: '#' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12 md:py-6',
        isScrolled ? 'glass-navbar py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex flex-col">
          <span className="text-2xl md:text-3xl font-display font-bold tracking-tighter leading-none text-primary uppercase">
            Vara UAE
          </span>
          <span className="text-[10px] md:text-xs font-medium text-white/60 tracking-widest uppercase">
            Creative Community
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 pl-4 border-l border-white/20">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="text-white/60 hover:text-primary transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-white/10 px-6 py-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-display font-medium text-white hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-white/10 flex items-center space-x-6">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="text-white/60 hover:text-primary transition-colors"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
