import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Users, Target, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const bentoItems = [
  {
    title: 'A Creative Network',
    desc: 'VARA UAE was born with one purpose — to build a strong, supportive platform where Malayali creators living in the UAE can connect, learn, collaborate, and celebrate their unique artistic journey.',
    icon: Users,
    size: 'lg:col-span-2 lg:row-span-2',
    color: 'bg-primary/10 text-primary',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'Beginners Confidence',
    desc: 'Beginners gain confidence and learn modern industry trends.',
    icon: Rocket,
    size: 'lg:col-span-1 lg:row-span-1',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    title: 'Professionals Upgrade',
    desc: 'Professionals upgrade their skills and build stronger portfolios.',
    icon: Zap,
    size: 'lg:col-span-1 lg:row-span-1',
    color: 'bg-amber-500/10 text-amber-500',
  },
  {
    title: 'Our Purpose',
    desc: 'Because designers grow stronger together — and together, we shape the future of creativity in the UAE.',
    icon: Target,
    size: 'lg:col-span-2 lg:row-span-1',
    color: 'bg-emerald-500/10 text-emerald-500',
  },
];

export function BentoAbout() {
  return (
    <section className="py-24 md:py-40 bg-black">
      <div className="container px-6">
        <div className="max-w-3xl space-y-6 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white uppercase leading-none">
            Built by <span className="text-primary italic">Designers</span>, for Designers.
          </h2>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
            VARA UAE is a fast-growing artistic community committed to building a powerful platform for Malayali creatives in the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {bentoItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={item.size}
            >
              <Card className="h-full glass-card border-white/5 hover:border-primary/20 transition-all group overflow-hidden">
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                      <item.icon size={28} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/40 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                  {item.image && (
                    <div className="mt-8 relative aspect-video overflow-hidden rounded-2xl border border-white/10">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
