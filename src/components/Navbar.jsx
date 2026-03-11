import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { cn } from '../utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 text-sm font-medium">
      <nav
        className={cn(
          "flex items-center justify-between px-6 md:px-8 py-3 transition-all duration-500 rounded-full w-full max-w-5xl",
          scrolled
            ? "bg-obsidian/85 backdrop-blur-xl border border-slate/40 shadow-2xl shadow-obsidian/50"
            : "bg-[#252528]/80 backdrop-blur-md"
        )}
      >
        <div className="flex items-center gap-1 font-sans italic font-black text-xl md:text-2xl tracking-tighter">
          <span className="text-white">FESIERI</span>
          <span className="text-champagne">BY FITNEST</span>
        </div>

        <ul className="hidden md:flex items-center gap-10 font-sans font-semibold tracking-widest text-xs">
          {['APLICAȚIE', 'REZULTATE', 'PROGRAME'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace('ă', 'a').replace('ș', 's').replace('ț', 't')}`}
                className="relative block py-2 overflow-hidden group text-gray-300 hover:text-white transition-colors"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1 block">
                  {item}
                </span>
                <span className="absolute bottom-1 left-0 w-full h-[1px] bg-champagne scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left" />
              </a>
            </li>
          ))}
        </ul>

        <a 
          href="#programe"
          className="relative px-6 py-2.5 overflow-hidden text-obsidian bg-champagne rounded-full group hover:scale-[1.03] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        >
          <span className="relative z-10 font-sans font-bold tracking-wider text-xs">ÎNSCRIE-TE</span>
          <span className="absolute inset-0 z-0 bg-white translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
        </a>
      </nav>
    </div>
  );
}
