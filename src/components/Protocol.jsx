import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../utils';

export default function Protocol() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current;
      
      cards.forEach((card, index) => {
        // We rely on CSS 'sticky' for the stacking effect.
        // GSAP only handles the scale/opacity animations as the next card covers it.
        // Removed heavy blur and deep opacity drops to keep cards highly visible.
        if (index < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            animation: gsap.to(card, {
                  scale: 0.95, // Softer scale down
                  opacity: 0.8, // Keeps text readable
                  ease: 'none'
                })
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const protocols = [
    {
      step: "01",
      title: "Activare Neurologică",
      desc: "Primul contact neuromuscular. Conectăm impulsul nervos de fibrele profunde înainte de orice mișcare mecanică.",
      visual: (
        // Rotating Geometric Motif
        <div className="relative flex items-center justify-center w-full h-full">
          <svg className="w-64 h-64 animate-spin-slow opacity-80 text-champagne" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 8" />
            <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="1" className="origin-center animate-[spin_10s_linear_reverse_infinite]" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="30 10" />
            <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 8" className="origin-center animate-[spin_8s_linear_infinite]" />
          </svg>
        </div>
      )
    },
    {
      step: "02",
      title: "Hiper-Tensiune Izolată",
      desc: "Execuție milimetrică sub sarcină. Menținem mușchiul în zona de stres mecanic optim pentru a declanșa hipertrofia.",
      visual: (
        // Scanning Laser Grid
        <div className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden p-8">
          <div className="grid grid-cols-10 grid-rows-10 gap-2 w-full h-full max-w-[300px] max-h-[300px] opacity-60">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-500 mx-auto my-auto" />
            ))}
          </div>
          {/* Laser Line */}
          <div className="absolute top-0 w-full max-w-[400px] h-[3px] bg-champagne shadow-[0_0_20px_5px_rgba(212,175,55,0.7)] animate-scan" />
        </div>
      )
    },
    {
      step: "03",
      title: "Recuperare Arhitecturală",
      desc: "Super-compensarea. Faza pasivă devine activă, țesutul se reconstruiește la un calibru superior adaptat cerințelor.",
      visual: (
        // Pulsing Waveform (EKG style)
        <div className="relative flex items-center justify-center w-full h-full">
          <svg className="w-full max-w-md h-32 text-champagne opacity-100" viewBox="0 0 500 100">
            <path 
              d="M0,50 L150,50 L175,20 L200,80 L225,10 L250,90 L275,50 L500,50" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinejoin="round"
              className="waveform-path"
              style={{
                strokeDasharray: '1000',
                strokeDashoffset: '1000',
                animation: 'dash 3s linear infinite'
              }}
            />
          </svg>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes dash {
              0% { stroke-dashoffset: 1000; }
              50% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -1000; }
            }
            @keyframes scan {
              0% { transform: translateY(0) scaleY(1); opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { transform: translateY(300px) scaleY(1); opacity: 0; }
            }
            .animate-scan {
              animation: scan 4s ease-in-out infinite;
            }
            .animate-spin-slow {
              animation: spin 15s linear infinite;
            }
          `}} />
        </div>
      )
    }
  ];

  return (
    <section ref={containerRef} id="rezultate" className="relative w-full bg-[#0d0d12] pb-32 z-10">
      {protocols.map((protocol, index) => (
        <div 
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className={cn(
            "w-full h-[100dvh] flex items-center justify-center p-6 origin-top sticky top-0 bg-[#0d0d12] pt-28",
          )}
          style={{ zIndex: index }}
        >
          <div className="w-full max-w-7xl h-full max-h-[700px] flex flex-col md:flex-row bg-[#15151A] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative">
            
            {/* Visual Canvas Half */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-white/5 bg-[#0f1013] flex items-center justify-center p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-champagne/10 to-transparent mix-blend-overlay" />
              {protocol.visual}
            </div>

            {/* Content Half */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-center bg-[#15151A]">
              <span className="font-mono text-xl md:text-2xl text-champagne font-bold tracking-[0.2em] uppercase mb-6 drop-shadow-md">
                Step-0{protocol.step}
              </span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black italic tracking-tighter text-white mb-6 leading-[0.9]">
                {protocol.title}
              </h3>
              <p className="text-lg md:text-xl font-medium text-slate-300 leading-relaxed max-w-md">
                {protocol.desc}
              </p>
            </div>
            
          </div>
        </div>
      ))}
    </section>
  );
}
