import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../utils';

const features = [
  {
    id: 1,
    title: "Dashboard Personalizat",
    desc: "Obiectivele tale nutriționale, țintele zilnice de recuperare și progresul săptămânal. Totul la o atingere distanță pe dashboard-ul principal.",
    videoUrl: "https://player.vimeo.com/external/536039574.sd.mp4?s=1eb095acbc80a6b4850fa7812eaedd3b10b05b9b&profile_id=165&oauth2_token_id=57447761" // Vertical fitness mockup placeholder
  },
  {
    id: 2,
    title: "Antrenamente Ghidate",
    desc: "Fiecare antrenament detaliat biomecanic. Seturi, repetări, tempo și tutoriale video HD pentru fiecare exercițiu din protocol.",
    videoUrl: "https://player.vimeo.com/external/498835845.sd.mp4?s=d7e366fd61725ab4d5483984bb3e5a3d7bc1a166&profile_id=165&oauth2_token_id=57447761" // Exercise execution placeholder
  },
  {
    id: 3,
    title: "Nutriție & Food Tracker",
    desc: "Plan nutrițional adaptat zilnic. Adaugă și modifică mese flexibil din sutele de opțiuni pentru a-ți menține caloriile în parametrii optimi.",
    videoUrl: "https://player.vimeo.com/external/494254848.sd.mp4?s=34f59e6617c0b497676fb4bb10c14c35e4eebef4&profile_id=165&oauth2_token_id=57447761" // Food/nutrition prep placeholder
  },
  {
    id: 4,
    title: "Jurnal de Progresie",
    desc: "Monitorizează-ți greutățile și repetările la fiecare vizită în sală. Aplicația îți calculează curba de progresie pentru supra-compensare.",
    videoUrl: "https://player.vimeo.com/external/384761623.sd.mp4?s=372be3f54bf6d07ab73934fde188c9bb759d5789&profile_id=165&oauth2_token_id=57447761" // Graph/stats mockup placeholder
  },
  {
    id: 5,
    title: "Evaluare & Check-in",
    desc: "Upload săptămânal cu poze și clipuri pentru analiză. Formular dinamic pentru a raporta biofeedback-ul, somnul și nivelul de energie.",
    videoUrl: "https://player.vimeo.com/external/369796677.sd.mp4?s=0fc032c6b45d2e0eaebbcbc58e2358fbba9adcee&profile_id=165&oauth2_token_id=57447761" // Camera/video recording placeholder
  }
];

export default function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <section id="aplicatie" className="w-full min-h-[100dvh] flex items-center justify-center bg-obsidian text-obsidian px-3 md:px-8 py-6 md:py-12">
      {/* Full-Page Card Overlay Wrapper */}
      <div className="w-full max-w-[1500px] h-[92dvh] md:h-[90dvh] bg-ivory rounded-[2.5rem] md:rounded-[4.5rem] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6)] border border-white/20 relative">

        {/* Futuristic Grid / Background Detail */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />

        {/* Content Container - Grid-based spacing to avoid overlaps */}
        <div className="relative z-10 w-full h-full grid grid-rows-[auto_1fr_auto] py-4 md:py-16 text-center overflow-hidden">

          {/* 1. Header Area */}
          <div className="px-6 flex flex-col items-center flex-shrink-0 z-20 pt-2 md:pt-0">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black italic tracking-tighter mb-0.5 leading-tight uppercase">
              Aplicația <span className="text-champagne drop-shadow-sm">Fitnest.</span>
            </h2>
            <p className="text-lg md:text-3xl text-slate-500 font-drama italic tracking-tight">
              14+ ani de experiență într-un singur loc.
            </p>
          </div>

          {/* 2. Visual Area (Carousel) - Contained in the middle grid row */}
          <div className="relative w-full h-full flex items-center justify-center overflow-visible px-4 z-10">
            <div className="relative w-full h-full max-h-[500px] md:max-h-[550px] flex items-center justify-center">

              {features.map((feature, idx) => {
                let relativeIdx = idx - activeIndex;
                if (relativeIdx < -2) relativeIdx += features.length;
                if (relativeIdx > 2) relativeIdx -= features.length;

                const isActive = relativeIdx === 0;
                const isPrev = relativeIdx === -1;
                const isNext = relativeIdx === 1;
                const isHidden = Math.abs(relativeIdx) > 1;

                return (
                  <div
                    key={feature.id}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "absolute top-1/2 left-1/2 -translate-y-1/2 transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) cursor-pointer",
                      isActive && "-translate-x-1/2 scale-100 md:scale-110 z-30 opacity-100",
                      // Side phones: Subtle slivers on mobile to indicate more content
                      isPrev && "-translate-x-[125%] md:-translate-x-[160%] scale-75 md:scale-80 z-20 opacity-10 blur-[6px] rotate-[-8deg]",
                      isNext && "translate-x-[25%] md:translate-x-[60%] scale-75 md:scale-80 z-20 opacity-10 blur-[6px] rotate-[8deg]",
                      isHidden && "-translate-x-1/2 scale-50 z-10 opacity-0 pointer-events-none"
                    )}
                  >
                    {/* futuristic iPhone Mockup - High Impact Scale */}
                    <div className="relative w-[250px] md:w-[280px] h-[500px] md:h-[580px] bg-gradient-to-br from-[#1a1a1c] to-[#0a0a0b] rounded-[3rem] p-[2px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/20 group/phone">

                      {/* Zero-Bezel Screen */}
                      <div className="relative w-full h-full rounded-[2.9rem] overflow-hidden bg-black">
                        {/* Hardware Glow */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-40" />

                        {/* Screen Content - Video */}
                        <div className="w-full h-full bg-slate-900 relative">
                          <video
                            src={feature.videoUrl}
                            className="w-full h-full object-cover"
                            autoPlay={isActive}
                            loop
                            muted
                            playsInline
                            poster={`https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop`}
                          />
                          <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]" />
                        </div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full rounded-[3rem] border border-white/15 pointer-events-none z-30" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Footer Area (Info + Controls) */}
          <div className="px-5 flex flex-col items-center flex-shrink-0 z-20 pb-2 md:pb-0">

            {/* Dynamic Feature Meta Container (Safe height) */}
            <div className="w-full max-w-4xl relative h-[70px] md:h-[130px] flex items-center justify-center mb-4 md:mb-6">
              {features.map((feature, idx) => (
                <div
                  key={feature.id}
                  className={cn(
                    "absolute w-full transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1)",
                    activeIndex === idx ? "opacity-100 translate-y-0 relative scale-100" : "opacity-0 translate-y-4 pointer-events-none scale-95"
                  )}
                >
                  <h3 className="text-xl md:text-5xl font-black italic font-sans mb-0.5 text-obsidian tracking-tighter uppercase leading-none">{feature.title}</h3>
                  <p className="text-[10px] md:text-lg lg:text-xl text-slate-500 font-medium leading-tight max-w-2xl mx-auto px-4 line-clamp-2 md:line-clamp-none">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Slider controls */}
            <div className="flex items-center gap-8 md:gap-10 mt-2">
              <button
                onClick={prevSlide}
                className="group relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border border-slate-200 flex items-center justify-center transition-all duration-300 hover:border-obsidian"
              >
                <span className="absolute inset-0 bg-obsidian translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <svg className="w-5 h-5 md:w-8 md:h-8 relative z-10 text-obsidian group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
              </button>

              {/* Progress Indicators */}
              <div className="flex gap-2">
                {features.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      "h-0.5 md:h-1 transition-all duration-500 cursor-pointer rounded-full",
                      activeIndex === i ? "w-6 md:w-10 bg-champagne" : "w-3 md:w-5 bg-slate-200 hover:bg-slate-300"
                    )}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="group relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border border-slate-200 flex items-center justify-center transition-all duration-300 hover:border-obsidian"
              >
                <span className="absolute inset-0 bg-obsidian translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <svg className="w-5 h-5 md:w-8 md:h-8 relative z-10 text-obsidian group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
