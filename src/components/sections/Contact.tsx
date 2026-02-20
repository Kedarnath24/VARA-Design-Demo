import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  return (
    <section className="py-24 md:py-40 bg-black overflow-hidden relative" id="connect">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12 md:space-y-16"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-8xl font-display font-bold text-white leading-none uppercase">
                Let's <span className="text-primary italic">Connect</span>
              </h2>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light max-w-lg">
                Have a question? Want to collaborate? Or just want to say hi? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Email Us</p>
                  <p className="text-xl md:text-2xl font-display font-bold text-white uppercase group-hover:text-primary transition-colors">hello@varauae.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Our Studio</p>
                  <p className="text-xl md:text-2xl font-display font-bold text-white uppercase group-hover:text-primary transition-colors">Dubai, UAE</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Call Us</p>
                  <p className="text-xl md:text-2xl font-display font-bold text-white uppercase group-hover:text-primary transition-colors">+971 50 123 4567</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full glass-navbar flex items-center justify-center text-white/60 hover:text-primary transition-all hover:scale-110">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 glass-card rounded-[2.5rem] md:rounded-[4rem] border border-white/10 relative"
          >
            <div className="absolute top-0 right-12 -translate-y-1/2 bg-primary text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Send a Message
            </div>

            <form className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-4">Full Name</label>
                  <Input placeholder="John Doe" className="bg-white/5 border-white/10 h-14 rounded-2xl focus-visible:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-4">Email Address</label>
                  <Input placeholder="john@example.com" className="bg-white/5 border-white/10 h-14 rounded-2xl focus-visible:ring-primary/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-4">Subject</label>
                <Input placeholder="Collaboration" className="bg-white/5 border-white/10 h-14 rounded-2xl focus-visible:ring-primary/50" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-4">Message</label>
                <Textarea placeholder="Tell us more about your inquiry..." className="bg-white/5 border-white/10 min-h-[160px] rounded-2xl focus-visible:ring-primary/50 resize-none" />
              </div>

              <Button className="w-full h-16 bg-primary text-black hover:bg-white transition-all duration-300 rounded-2xl font-bold text-lg uppercase tracking-widest">
                Send Message <Send className="ml-2" size={20} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
