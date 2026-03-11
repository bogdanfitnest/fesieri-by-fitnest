import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger fade up for text elements
      gsap.fromTo(
        gsap.utils.toArray('.hero-reveal'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.2
        }
      );

      // Subtle parallax on the background image
      gsap.to('.hero-bg', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-full min-h-[100dvh] overflow-hidden bg-obsidian"
    >
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0 w-full h-[120%] -top-[10%] hero-bg">
        <img
          // Luxury gym/dark marble mood image
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2875&auto=format&fit=crop"
          alt="Dark Luxury Training Facility"
          className="object-cover w-full h-full opacity-60 mix-blend-luminosity"
        />
        {/* Heavy primary-to-black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 pb-20 md:pb-0 pt-32 md:pt-0 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[100dvh]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* Top/Left: VSL Video Placeholder */}
          <div className="hero-reveal w-full order-1">
            <div className="group relative aspect-video w-full bg-[#15151A] rounded-[2.5rem] md:rounded-[3rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden cursor-pointer">

              {/* Video Thumbnail Placeholder */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop"
                  alt="VSL Preview"
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
              </div>

              {/* Play UI Layer */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8">
                <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-champagne flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <div className="w-0 h-0 border-t-[8px] md:border-t-[14px] border-t-transparent border-l-[14px] md:border-l-[24px] border-l-obsidian border-b-[8px] md:border-b-[14px] border-b-transparent ml-2" />
                  <div className="absolute inset-0 rounded-full border-2 border-champagne animate-ping opacity-20" />
                </div>

                <div className="mt-6 md:mt-8 text-center px-4">
                  <span className="block font-mono text-[10px] md:text-xs text-champagne tracking-[0.3em] uppercase mb-1 drop-shadow-lg">Bogdan Drăghici</span>
                  <h4 className="text-ivory font-bold text-base md:text-xl uppercase tracking-tighter">Vezi povestea din spatele programului</h4>
                </div>
              </div>

              {/* Glass Reflection Detail */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-50" />
              <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] md:rounded-[3rem]" />
            </div>
          </div>

          {/* Bottom/Right: Typography & Primary Action */}
          <div ref={textRef} className="flex flex-col order-2">
            <h1 className="flex flex-col mb-8 text-ivory text-center lg:text-left">
              <span className="hero-reveal text-4xl md:text-6xl lg:text-7xl xl:text-[7rem] font-sans font-black tracking-tighter uppercase text-white leading-[0.9] md:leading-[0.85]">
                Performanța
              </span>
              <span className="hero-reveal text-4xl md:text-6xl lg:text-7xl xl:text-[7rem] font-sans font-black tracking-tighter uppercase text-white leading-[0.9] md:leading-[0.85] mt-1 md:-mt-4">
                Întâlnește
              </span>
              <span className="hero-reveal text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-[0.9] md:leading-[0.85] font-drama italic text-champagne pr-4">
                Precizia.
              </span>
            </h1>

            <p className="hero-reveal max-w-lg mb-8 md:mb-12 text-lg font-light leading-relaxed text-ivory/80 md:text-xl font-sans text-center lg:text-left mx-auto lg:mx-0">
              Fesieri by Fitnest. Un program de hipertrofie premium conceput pentru o remodelarea și mărirea fesierilor. Nu promitem scurtături, livrăm rezultate reale.
            </p>

            <div className="hero-reveal flex justify-center lg:justify-start">
              <a
                href="#programe"
                className="inline-block relative px-10 py-5 overflow-hidden text-lg bg-champagne text-obsidian rounded-full group hover:scale-[1.03] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] font-sans font-bold uppercase tracking-wider text-center"
              >
                <span className="relative z-10">Începe Programul</span>
                <span className="absolute inset-0 z-0 bg-white translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
