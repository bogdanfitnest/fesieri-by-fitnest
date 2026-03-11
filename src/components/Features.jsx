import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { cn } from '../utils';

// --- Card 1: Diagnostic Shuffler ---
function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 1, label: 'Analiză Țesut', metric: '98%', status: 'Mecanică optimă' },
    { id: 2, label: 'Stimulare Hipertrofică', metric: 'Curba C', status: 'Tensiune Maximă' },
    { id: 3, label: 'Adaptare Volum', metric: 'Fazial', status: 'Răspuns POZITIV' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-64 relative perspective-1000">
      {cards.map((card, idx) => {
        const isFront = idx === 0;
        const isMiddle = idx === 1;
        const isBack = idx === 2;

        return (
          <div
            key={card.id}
            className={cn(
              "absolute w-full max-w-[280px] p-5 rounded-3xl border border-slate/30 bg-obsidian text-ivory/90 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
              isFront ? "z-30 translate-y-4 scale-100 opacity-100" :
              isMiddle ? "z-20 translate-y-0 scale-95 opacity-60" :
              "z-10 -translate-y-4 scale-90 opacity-40 blur-[1px]"
            )}
            style={{ shadowColor: 'rgba(13,13,18,0.8)' }}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono text-xs tracking-wider text-champagne/80">0{card.id} // SYS</span>
              <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
            </div>
            <h4 className="font-sans font-bold mb-1">{card.label}</h4>
            <div className="flex justify-between border-t border-slate/30 pt-3 mt-3 font-mono text-xs">
              <span className="text-ivory/50">{card.status}</span>
              <span className="text-champagne font-bold">{card.metric}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// --- Card 2: Telemetry Typewriter ---
function TelemetryTypewriter() {
  const messages = [
    "INIT: Stabilire baza bio-mecanica...",
    "LOG: Structurare micro-ciclu #01...",
    "DATA: Rata progresie: +12% saptamanal.",
    "WARN: Ajustare cerinte recuperare.",
    "SYS: Modelare tesut fesiere in curs...",
  ];
  
  const [text, setText] = useState('');
  const [msgIdx, setMsgIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (charIdx < messages[msgIdx].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + messages[msgIdx][charIdx]);
        setCharIdx((c) => c + 1);
      }, Math.random() * 50 + 20); // random typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCharIdx(0);
        setMsgIdx((m) => (m + 1) % messages.length);
      }, 2000); // Wait before next message
      return () => clearTimeout(timeout);
    }
  }, [charIdx, msgIdx]);

  return (
    <div className="w-full h-64 p-6 bg-obsidian rounded-3xl border border-slate/30 shadow-2xl flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-champagne/20 to-transparent opacity-50" />
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-champagne rounded-full animate-ping" />
        <span className="font-mono text-xs text-champagne tracking-widest uppercase">Live Feed</span>
      </div>
      
      <div className="flex-1 font-mono text-sm text-ivory/80 leading-relaxed break-words whitespace-pre-wrap flex flex-col justify-end">
        <p>
          {text}
          <span className="inline-block w-2 h-4 ml-1 bg-champagne animate-pulse align-middle" />
        </p>
      </div>
      
      {/* Decorative static traces */}
      <div className="mt-4 pt-4 border-t border-slate/30 font-mono text-[10px] text-ivory/30 flex justify-between">
        <span>MEM: 0x8F9B2</span>
        <span>CPU: OPTIM</span>
      </div>
    </div>
  );
}

// --- Card 3: Cursor Protocol Scheduler ---
function CursorProtocolScheduler() {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const cursorRef = useRef(null);
  const mTargetRef = useRef(null); // element to click, let's pick Wednesday (M, idx 2)
  const btnTargetRef = useRef(null);
  const [activeDay, setActiveDay] = useState(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Reset state at start of loop
      tl.call(() => {
        setActiveDay(null);
        setSaved(false);
      });

      // Move to day
      tl.to(cursorRef.current, {
        x: 100, // Approx to middle M
        y: 40,
        duration: 1.2,
        ease: 'power2.inOut',
      })
      // Click day
      .to(cursorRef.current, { scale: 0.8, duration: 0.15 })
      .call(() => setActiveDay(2))
      .to(cursorRef.current, { scale: 1, duration: 0.15 })
      // Move to save btn
      .to(cursorRef.current, {
        x: 160,
        y: 110,
        duration: 1,
        ease: 'power2.inOut',
        delay: 0.3
      })
      // Click save
      .to(cursorRef.current, { scale: 0.8, duration: 0.15 })
      .call(() => setSaved(true))
      .to(cursorRef.current, { scale: 1, duration: 0.15 })
      // Move off screen
      .to(cursorRef.current, {
        x: 300,
        y: 150,
        opacity: 0,
        duration: 1,
        delay: 0.5
      })
      // Reset position instantly
      .set(cursorRef.current, { x: -20, y: 150, opacity: 1 });
      
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-64 p-6 bg-obsidian rounded-3xl border border-slate/30 shadow-2xl relative overflow-hidden">
      <div className="mb-4">
        <span className="font-mono text-xs text-champagne tracking-widest uppercase">System // Schedule</span>
      </div>
      
      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-8 relative z-10">
        {days.map((d, i) => (
          <div 
            key={i} 
            className={cn(
              "aspect-square rounded-full flex items-center justify-center text-xs font-mono transition-colors duration-300",
              activeDay === i ? "bg-champagne text-obsidian font-bold" : "bg-slate/40 text-ivory/50"
            )}
          >
            {d}
          </div>
        ))}
      </div>

      <div className="flex justify-end relative z-10 mt-12">
        <div 
          ref={btnTargetRef}
          className={cn(
            "px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300",
            saved ? "bg-green-500/20 text-green-400 border border-green-500/50" : "bg-slate/50 text-ivory/70 border border-transparent"
          )}
        >
          {saved ? "CONFIRMAT" : "SALVEAZĂ"}
        </div>
      </div>

      {/* SVG Animated Cursor */}
      <svg 
        ref={cursorRef}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="white" 
        stroke="black" 
        strokeWidth="1.5"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="absolute top-0 left-0 z-50 pointer-events-none drop-shadow-md origin-top-left"
        style={{ transform: 'translate(-20px, 150px)' }}
      >
        <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
        <path d="m13 13 6 6"/>
      </svg>
    </div>
  );
}

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="program" className="relative z-20 w-full py-24 md:py-32 bg-ivory text-obsidian px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 feature-card">
          <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4">
            Instrumente Funcționale.<br />
            <span className="text-slate/60 font-drama italic">Progresie Calculată.</span>
          </h2>
          <p className="max-w-xl text-lg text-slate/80 font-light">
            Programul transformă anatomia într-o știință exactă. Trei piloni centrali stau la baza arhitecturii corporale: execuție biomecanică, date precise și recuperare ghidată.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="feature-card flex flex-col">
            <DiagnosticShuffler />
            <div className="mt-8 px-2">
              <h3 className="text-xl font-bold font-sans mb-2">Hipertrofie Mecanică</h3>
              <p className="text-sm text-slate/70 leading-relaxed font-light">
                Adaptare tisulară precisă. Fiecare mișcare este calibrată pentru a maximiza tensiunea intramusculară în zona fesierilor.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="feature-card flex flex-col">
            <TelemetryTypewriter />
            <div className="mt-8 px-2">
              <h3 className="text-xl font-bold font-sans mb-2">Monitorizare Date</h3>
              <p className="text-sm text-slate/70 leading-relaxed font-light">
                O evoluție nu se ghicește, se măsoară. Urmărim curba de progresie cu precizia unui instrument de laborator.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="feature-card flex flex-col">
            <CursorProtocolScheduler />
            <div className="mt-8 px-2">
              <h3 className="text-xl font-bold font-sans mb-2">Sculptare Arhitecturală</h3>
              <p className="text-sm text-slate/70 leading-relaxed font-light">
                Recuperarea integrată ca fază de creștere activă. Structurăm micro-ciclurile pentru a garanta reparația și super-compensarea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
