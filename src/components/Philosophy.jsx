import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../utils';

const features = [
  {
    id: 1,
    title: "Dashboard Personalizat",
    desc: "Obiectivele tale nutriționale, țintele zilnice de recuperare și progresul săptămânal. Totul la o atingere distanță pe dashboard-ul principal.",
    videoUrl: "https://player.vimeo.com/external/536039574.sd.mp4?s=1eb095acbc80a6b4850fa7812eaedd3b10b05b9b&profile_id=165&oauth2_token_id=57447761"
  },
  {
    id: 2,
    title: "Antrenamente Ghidate",
    desc: "Fiecare antrenament detaliat biomecanic. Seturi, repetări, tempo și tutoriale video HD pentru fiecare exercițiu din protocol.",
    videoUrl: "https://player.vimeo.com/external/498835845.sd.mp4?s=d7e366fd61725ab4d5483984bb3e5a3d7bc1a166&profile_id=165&oauth2_token_id=57447761"
  },
  {
    id: 3,
    title: "Nutriție & Food Tracker",
    desc: "Plan nutrițional adaptat zilnic. Adaugă și modifică mese flexibil din sutele de opțiuni pentru a-ți menține caloriile în parametrii optimi.",
    videoUrl: "https://player.vimeo.com/external/494254848.sd.mp4?s=34f59e6617c0b497676fb4bb10c14c35e4eebef4&profile_id=165&oauth2_token_id=57447761"
  },
  {
    id: 4,
    title: "Jurnal de Progresie",
    desc: "Monitorizează-ți greutățile și repetările la fiecare vizită în sală. Aplicația îți calculează curba de progresie pentru supra-compensare.",
    videoUrl: "https://player.vimeo.com/external/384761623.sd.mp4?s=372be3f54bf6d07ab73934fde188c9bb759d5789&profile_id=165&oauth2_token_id=57447761"
  },
  {
    id: 5,
    title: "Evaluare & Check-in",
    desc: "Upload săptămânal cu poze și clipuri pentru analiză. Formular dinamic pentru a raporta biofeedback-ul, somnul și nivelul de energie.",
    videoUrl: "https://player.vimeo.com/external/369796677.sd.mp4?s=0fc032c6b45d2e0eaebbcbc58e2358fbba9adcee&profile_id=165&oauth2_token_id=57447761"
  }
];

export default function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const onTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="aplicatie" className="relative w-full py-24 md:py-32 bg-[#f8f9fa] text-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Header Area - Fixed Mobile Height */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-sans font-black italic tracking-tighter uppercase leading-[0.9] mb-4">
            Aplicația <span className="text-slate-400">Fitnest.</span>
          </h2>
          <p className="text-lg md:text-3xl text-slate-500 font-drama italic tracking-tight">
            14+ ani de experiență într-un singur loc.
          </p>
        </div>

        {/* 2. Main Carousel Component */}
        <div 
          className="relative flex flex-col items-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Mockup + Navigation Arrows Container */}
          <div className="relative w-full flex items-center justify-center mb-12">
            
            {/* Prev Arrow - Refined positioning to avoid overlap */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 md:left-4 lg:left-20 z-30 w-10 h-10 md:w-12 md:h-12 bg-slate-200/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-slate-300 transition-all text-slate-600 shadow-sm"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Premium iPhone Mockup - Resized to match example */}
            <div className="relative w-[220px] md:w-[260px] h-[450px] md:h-[530px] bg-[#0a0a0b] rounded-[2.5rem] md:rounded-[3rem] p-2.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] ring-1 ring-black/5 z-20 overflow-hidden">
              <div className="relative w-full h-full rounded-[2.1rem] md:rounded-[2.6rem] overflow-hidden bg-black">
                {features.map((feature, idx) => (
                  <div
                    key={feature.id}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-700 ease-in-out",
                      activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-10"
                    )}
                  >
                    <video
                      src={feature.videoUrl}
                      className="w-full h-full object-cover"
                      autoPlay={activeIndex === idx}
                      loop
                      muted
                      playsInline
                      key={`video-${feature.id}-${activeIndex === idx}`}
                    />
                    {/* Inner Shadow for Realism */}
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>

            {/* Next Arrow - Refined positioning to avoid overlap */}
            <button 
              onClick={nextSlide}
              className="absolute right-0 md:right-4 lg:right-20 z-30 w-10 h-10 md:w-12 md:h-12 bg-slate-200/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-slate-300 transition-all text-slate-600 shadow-sm"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* 3. Active Feature Text Area - Centered Below */}
          <div className="w-full max-w-3xl text-center px-4">
            <div className="relative h-40 md:h-48">
              {features.map((feature, idx) => (
                <div
                  key={feature.id}
                  className={cn(
                    "absolute inset-0 flex flex-col items-center justify-start transition-all duration-700 ease-out",
                    activeIndex === idx 
                      ? "opacity-100 translate-y-0 scale-100" 
                      : "opacity-0 translate-y-10 scale-95 pointer-events-none"
                  )}
                >
                  <h3 className="text-2xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 text-obsidian">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination Bullets */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "transition-all duration-500 rounded-full",
                    activeIndex === i 
                      ? "w-10 md:w-16 h-1.5 md:h-2 bg-obsidian" 
                      : "w-2 md:w-3 h-1.5 md:h-2 bg-slate-200 hover:bg-slate-300"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
