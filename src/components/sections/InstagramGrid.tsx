import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1974', likes: '1.2k', comments: '42' },
  { id: 2, image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1964', likes: '850', comments: '18' },
  { id: 3, image: 'https://images.unsplash.com/photo-1611162616484-261bd05e581e?auto=format&fit=crop&q=80&w=1974', likes: '2.1k', comments: '124' },
  { id: 4, image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1964', likes: '1.5k', comments: '64' },
  { id: 5, image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=2070', likes: '3.4k', comments: '210' },
  { id: 6, image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=1932', likes: '1.1k', comments: '36' },
];

export function InstagramGrid() {
  return (
    <section className="py-24 md:py-40 bg-black">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white leading-none uppercase">
              Stay Connected. <span className="text-primary italic">Stay Inspired.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
              Experience the pulse of our creative community through real-time updates, artworks, event highlights, and behind-the-scenes moments.
            </p>
          </div>
          <Button size="lg" className="h-14 px-8 bg-primary text-black hover:bg-white transition-all duration-300 rounded-full font-bold border-none">
            Follow @vara_uae
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="relative group aspect-square overflow-hidden rounded-xl md:rounded-2xl border border-white/10"
            >
              <img 
                src={post.image} 
                alt="Instagram Post" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-4">
                <Instagram size={28} className="text-primary" />
                <div className="flex items-center space-x-4 text-white font-bold text-sm">
                  <div className="flex items-center space-x-1">
                    <Heart size={16} fill="white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle size={16} fill="white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
