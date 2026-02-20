import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Ameen Rafi',
    role: 'Freelance Visual Designer',
    location: 'Dubai',
    content: 'VARA UAE has been a turning point in my creative journey. The community gave me a space to connect with like-minded designers, share ideas, and learn practical insights. Through the network, I found new clients and collaborated on projects I never imagined.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974',
  },
  {
    name: 'Akhila Prem',
    role: 'Videographer',
    location: 'Freelance',
    content: 'VARA UAE introduced me to a network of creatives that opened real opportunities. I collaborated on event videos, gained clients, and improved my technical skills. This community truly accelerates growth for anyone in the creative field.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974',
  },
  {
    name: 'Rihan Ahmed',
    role: 'Lifestyle Photographer',
    location: 'Sharjah',
    content: "Joining VARA UAE helped me expand my photography career in the UAE. I met professionals, gained new skills from workshops, and even booked my first commercial shoot through a community referral. It's more than a group — it's a creative family that lifts each other up.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-40 bg-black relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 mb-16 md:mb-24">
          <div className="flex items-center space-x-2 text-primary">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white uppercase leading-none">
            Member <span className="text-primary italic">Stories</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center text-center space-y-10 md:space-y-12"
              >
                <div className="relative">
                  <Quote size={80} className="text-primary/10 absolute -top-8 -left-12 md:-left-16" />
                  <p className="text-xl md:text-3xl text-white/80 font-light leading-relaxed italic relative z-10 px-4 md:px-0">
                    "{testimonials[current].content}"
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <div className="w-20 h-20 rounded-full border-2 border-primary overflow-hidden p-1 bg-black">
                    <img 
                      src={testimonials[current].avatar} 
                      alt={testimonials[current].name} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-display font-bold text-white uppercase">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-sm md:text-base text-white/50 font-medium uppercase tracking-widest">
                      {testimonials[current].role} | {testimonials[current].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-6 mt-12 md:mt-20">
              <Button 
                onClick={prev}
                className="h-12 w-12 rounded-full border border-white/10 bg-transparent hover:bg-white/10 text-white transition-all"
              >
                <ChevronLeft size={24} />
              </Button>
              <div className="flex space-x-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      current === i ? "bg-primary w-8" : "bg-white/20 hover:bg-white/40"
                    )}
                  />
                ))}
              </div>
              <Button 
                onClick={next}
                className="h-12 w-12 rounded-full border border-white/10 bg-transparent hover:bg-white/10 text-white transition-all"
              >
                <ChevronRight size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
