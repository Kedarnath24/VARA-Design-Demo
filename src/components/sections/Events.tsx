import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const events = [
  {
    title: 'VARAVELPU',
    subtitle: 'The First Gathering of VARA UAE',
    description: 'The event that marked the beginning of our creative journey. Designers from across the Emirates met to connect, network, and celebrate creativity.',
    category: 'VARA Events',
    image: 'https://images.unsplash.com/photo-1540575861501-7ad060e39fe1?auto=format&fit=crop&q=80&w=2070',
    stats: { members: '300+', venue: 'Dubai' },
  },
  {
    title: 'ARTEX',
    subtitle: 'A Grand Gala of Arts & Expression',
    description: 'Workshops, sessions, competitions, guest speakers, and a full day of artistic celebration. A creative festival that brought designers and industry leaders together.',
    category: 'Creative Festival',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2069',
    stats: { members: '500+', venue: 'Abu Dhabi' },
  },
  {
    title: 'IMAGINE Ai',
    subtitle: 'Exploring the Future of AI in Design',
    description: 'An innovative AI discussion and workshop featuring industry experts, highlighting the rapidly evolving intersection of technology and creativity.',
    category: 'AI Workshop',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    stats: { members: '200+', venue: 'Sharjah' },
  },
  {
    title: 'LEVEL UP',
    subtitle: 'Elevating Creative Skillsets',
    description: 'A workshop series focused on improving advanced design techniques, creative workflows, and building stronger portfolios.',
    category: 'Offline Workshop',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070',
    stats: { members: '150+', venue: 'VARA Studio' },
  },
];

export function Events() {
  return (
    <section className="py-24 md:py-40 bg-black">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white leading-none uppercase">
              Events & <span className="text-primary italic">Workshops</span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
              At VARA UAE, every event is more than a gathering — it is a celebration of creativity, culture, talent, and community spirit.
            </p>
          </div>
          <Button size="lg" className="h-14 px-8 bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full font-semibold border backdrop-blur-md">
            View All Events
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <Card className="bg-transparent border-none p-0 overflow-hidden relative">
                <CardContent className="p-0 space-y-8">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:rounded-3xl border border-white/10">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full glass-navbar text-[10px] md:text-xs font-bold text-primary tracking-wider uppercase">
                      {event.category}
                    </div>
                    
                    <Button className="absolute bottom-6 right-6 h-12 w-12 rounded-full p-0 bg-primary hover:bg-white text-black transition-all group-hover:scale-110 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <ExternalLink size={20} />
                    </Button>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center space-x-6 text-[10px] md:text-xs font-bold text-white/40 tracking-widest uppercase">
                      <div className="flex items-center space-x-2">
                        <Users size={14} className="text-primary" />
                        <span>{event.stats.members}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={14} className="text-primary" />
                        <span>{event.stats.venue}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 md:space-y-4">
                      <h3 className="text-3xl md:text-5xl font-display font-bold text-white group-hover:text-primary transition-colors leading-none uppercase">
                        {event.title}
                      </h3>
                      <p className="text-base md:text-lg text-white/50 leading-relaxed font-light">
                        {event.subtitle}
                      </p>
                      <p className="text-sm md:text-base text-white/40 leading-relaxed font-light line-clamp-2 md:line-clamp-none">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
