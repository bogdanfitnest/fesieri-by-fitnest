import React, { useState } from 'react';
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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <section id="aplicatie" className="relative w-full py-20 md:py-32 bg-[#F1F3F5] text-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Isolated Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-sans font-black italic tracking-tighter uppercase leading-tight">
            Aplicația <span className="text-slate-400">Fitnest.</span>
          </h2>
          <p className="mt-4 text-lg md:text-3xl text-slate-500 font-drama italic tracking-tight">
            14+ ani de experiență într-un singur loc.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Visual Showcase - Stabilized */}
          <div className="order-2 lg:order-1 flex justify-center items-center relative">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full scale-75 pointer-events-none" />
            
            <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[650px] bg-[#0a0a0b] rounded-[3.5rem] p-3 shadow-2xl ring-1 ring-black/10 overflow-hidden z-10 transition-transform duration-500 hover:scale-[1.02]">
              <div className="relative w-full h-full rounded-[2.9rem] overflow-hidden bg-black">
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
                      autoPlay
                      loop
                      muted
                      playsInline
                      key={`${feature.id}-${activeIndex === idx}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel navigation overlay for mobile-like feel */}
            <div className="absolute -bottom-10 flex items-center gap-6 z-30 lg:hidden">
               <button onClick={prevSlide} className="p-4 bg-white rounded-full shadow-lg hover:bg-slate-50 transition-colors">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
               </button>
               <button onClick={nextSlide} className="p-4 bg-white rounded-full shadow-lg hover:bg-slate-50 transition-colors">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
               </button>
            </div>
          </div>

          {/* Content Area - Isolated & Stable */}
          <div className="order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left">
            <div className="space-y-12">
              {features.map((feature, idx) => (
                <div 
                  key={feature.id}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "cursor-pointer transition-all duration-500 p-6 md:p-8 rounded-[2rem] border-2",
                    activeIndex === idx 
                      ? "bg-white border-white shadow-xl scale-100" 
                      : "bg-transparent border-transparent opacity-40 hover:opacity-60 scale-95"
                  )}
                >
                  <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-lg text-slate-500 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination helper for desktop */}
            <div className="hidden lg:flex gap-3 mt-12 px-8">
              {features.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1.5 transition-all duration-300 rounded-full",
                    activeIndex === i ? "w-12 bg-obsidian" : "w-4 bg-slate-300"
                  )}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
