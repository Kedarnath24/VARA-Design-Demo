import React, { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { LogoMarquee } from './components/sections/LogoMarquee';
import { BentoAbout } from './components/sections/BentoAbout';
import { Events } from './components/sections/Events';
import { Premium } from './components/sections/Premium';
import { Testimonials } from './components/sections/Testimonials';
import { InstagramGrid } from './components/sections/InstagramGrid';
import { Contact } from './components/sections/Contact';
import { Button } from './components/ui/button';
import { ArrowRight } from 'lucide-react';

function App() {
  useEffect(() => {
    // Reveal on scroll functionality
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="reveal-on-scroll">
          <Stats />
        </div>
        
        <div className="reveal-on-scroll">
          <LogoMarquee />
        </div>
        
        <div className="reveal-on-scroll">
          <BentoAbout />
        </div>
        
        <div className="reveal-on-scroll">
          <Events />
        </div>
        
        <div className="reveal-on-scroll">
          <Premium />
        </div>
        
        <div className="reveal-on-scroll">
          <Testimonials />
        </div>
        
        <div className="reveal-on-scroll">
          <InstagramGrid />
        </div>
        
        <div className="reveal-on-scroll">
          <Contact />
        </div>
        
        <section className="py-24 md:py-40 bg-black overflow-hidden relative border-t border-white/10">
          <div className="container px-6 relative z-10 text-center space-y-12">
            <h2 className="text-5xl md:text-9xl font-display font-black text-white/5 uppercase tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap">
              Create Connect Grow
            </h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-8xl font-display font-bold text-white uppercase leading-none">
                Create. Connect. <span className="text-primary italic">Grow. Together.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light max-w-2xl mx-auto">
                VARA UAE is built for every designer who believes in community, collaboration, and continuous growth. This is where ideas rise higher — because we rise together.
              </p>
            </div>

            <Button size="lg" className="h-20 px-16 bg-primary text-black hover:bg-white transition-all duration-300 rounded-full font-bold text-2xl uppercase tracking-tighter group">
              Join the Community <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={28} />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
