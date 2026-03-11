import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
// Importing these ahead of time; we will create them next.
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Global smooth scrolling reset or setup can go here
  useEffect(() => {
    // ScrollTrigger refresh on mount
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="relative w-full bg-obsidian selection:bg-champagne selection:text-obsidian">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
