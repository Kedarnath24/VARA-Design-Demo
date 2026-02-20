import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 95, label: 'Members Growth', suffix: '%' },
  { value: 3000, label: 'Active Members', suffix: '+' },
  { value: 24, label: 'Engages Monthly', suffix: '+' },
  { value: 12000, label: 'Event Participants', suffix: '+' },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-6xl font-display font-bold text-primary">
      {count}{suffix}
    </div>
  );
};

export function Stats() {
  return (
    <section className="py-20 md:py-32 bg-black border-y border-white/10 overflow-hidden">
      <div className="container px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 items-center justify-items-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 relative">
                <Counter value={stat.value} suffix={stat.suffix} />
                <div className="absolute -inset-4 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm md:text-base text-white/40 uppercase tracking-[0.2em] font-medium transition-colors group-hover:text-white/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
