import React, { useState, useEffect } from 'react';
import { cn } from '../utils';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 72,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Initial target: 72 hours from now
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 72);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center md:items-end gap-2">
      <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] uppercase text-slate-400">Oferta Early Bird expiră în:</span>
      <div className="flex items-center gap-3 font-mono text-obsidian bg-white/50 px-5 py-2 rounded-2xl border border-obsidian/5 backdrop-blur-sm shadow-sm group">
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-black">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="text-[8px] uppercase tracking-tighter opacity-60 font-bold">Ore</span>
        </div>
        <span className="text-xl md:text-2xl font-black mb-3 opacity-30">:</span>
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-black">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="text-[8px] uppercase tracking-tighter opacity-60 font-bold">Min</span>
        </div>
        <span className="text-xl md:text-2xl font-black mb-3 opacity-30">:</span>
        <div className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-black text-rose-600 animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="text-[8px] uppercase tracking-tighter opacity-60 font-bold">Sec</span>
        </div>
      </div>
    </div>
  );
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const tiers = [
    {
      name: "Esențial",
      desc: "Antrenamente specifice. Pentru implementare independentă.",
      priceMonthly: "97",
      priceYearly: "690",
      calcYearly: "57",
      savings: "474",
      benefit: "Plătești 7 luni, primești 12. Practic, te antrenezi aproape jumătate de an GRATIS dacă te decizi acum.",
      features: ["Program specific obiectivului setat", "Jurnal de antrenament și progresie", "Check-in Independent", "Acces secțiune de rețete", "Acces comunitate Fitnest"],
      isPopular: false
    },
    {
      name: "Performanță",
      desc: "Antrenamente specifice cu nutriție inclusă.",
      priceMonthly: "147",
      priceYearly: "990",
      calcYearly: "82",
      savings: "770",
      benefit: "Economisești peste 770 RON. Îți optimizezi complet metabolismul și forma fizică la un cost imbatabil.",
      features: ["Tot din Esențial +", "Plan nutrițional specific obiectivului", "Ajustări proprii ale alimentelor", "Food Tracker pentru modificarea meselor", "Ghid nutrițional pentru progres"],
      isPopular: true
    },
    {
      name: "Elită",
      desc: "Sistemul complet inclus și ghidat de Bogdan.",
      priceMonthly: "347",
      priceYearly: null,
      features: ["Tot din Performanță +", "Verificare check-in lunar de Bogdan", "Analiză amănunțită a progresiei", "Asistență prioritară", "Chat privat"],
      isPopular: false
    }
  ];

  return (
    <section id="programe" className="relative w-full py-32 bg-ivory text-obsidian px-6 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with Timer */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 mb-20">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black italic tracking-tighter">
              Programe Fitnest.
            </h2>
            <p className="mt-2 text-2xl md:text-3xl text-slate-500 font-drama italic max-w-xl md:mr-auto tracking-tight">
              Alege programul care consideri că este cel mai potrivit pentru tine.
            </p>
          </div>
          
          <CountdownTimer />
        </div>

        {/* Monthly/Yearly Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-100 p-1.5 rounded-full flex items-center gap-1 shadow-inner relative">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 relative z-10",
                !isYearly ? "text-white" : "text-slate-500 hover:text-obsidian"
              )}
            >
              Lunar
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 relative z-10",
                isYearly ? "text-white" : "text-slate-500 hover:text-obsidian"
              )}
            >
              Anual
              <span className="absolute -top-2 -right-4 bg-rose-600 text-white text-[8px] py-0.5 px-1.5 rounded-full font-black animate-bounce">
                -40%
              </span>
            </button>
            <div 
              className={cn(
                "absolute top-1.5 bottom-1.5 left-1.5 right-1.5 w-[calc(50%-6px)] bg-obsidian rounded-full transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                isYearly ? "translate-x-full" : "translate-x-0"
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center lg:items-stretch">
          {tiers.map((tier, idx) => {
            const hasYearly = tier.priceYearly !== null;
            const currentPrice = isYearly && hasYearly ? tier.priceYearly : tier.priceMonthly;
            const subtext = isYearly && hasYearly ? `(aprox. ${tier.calcYearly} RON/lună)` : null;
            
            return (
              <div
                key={idx}
                className={cn(
                  "group relative p-8 md:p-10 rounded-[3rem] border transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col h-full",
                  tier.isPopular
                    ? "bg-obsidian text-ivory border-slate/30 shadow-2xl scale-100 md:scale-105 z-10"
                    : "bg-transparent text-obsidian border-obsidian/10 shadow-sm hover:shadow-xl hover:border-obsidian/30 hover:bg-white z-0",
                  isYearly && !hasYearly && "opacity-50 grayscale pointer-events-none"
                )}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 right-12 -translate-y-1/2 z-20">
                    <span className="bg-champagne text-obsidian text-[10px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                      Recomandat
                    </span>
                  </div>
                )}

                <h3 className="text-2xl md:text-3xl font-black italic font-sans mb-2">{tier.name}</h3>
                <p className={cn("text-xs font-medium mb-6 h-12", tier.isPopular ? "text-slate-400" : "text-slate-500")}>
                  {tier.desc}
                </p>

                <div className="mb-8 flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-xs font-bold align-top mr-1 font-mono mt-2">RON</span>
                    <span className="text-5xl md:text-6xl font-black font-sans tracking-tighter">{currentPrice}</span>
                  </div>
                  {subtext && (
                    <span className="text-xs font-mono font-bold mt-2 text-champagne">{subtext}</span>
                  )}
                  {isYearly && hasYearly && (
                    <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 italic text-xs leading-relaxed text-slate-300">
                      {tier.benefit}
                      <div className="mt-2 text-champagne font-black uppercase tracking-wider">
                        Economie: {tier.savings} RON
                      </div>
                    </div>
                  )}
                  {isYearly && !hasYearly && (
                    <div className="mt-4 p-4 rounded-2xl bg-rose-900/20 border border-rose-500/30 text-rose-200 italic text-[10px]">
                      Abonamentul Elite este disponibil momentan doar cu plată lunară pentru a asigura calitatea suportului 1-la-1 de la Bogdan.
                    </div>
                  )}
                </div>

                <ul className="mb-12 space-y-4 flex-1">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-xs font-medium">
                      <svg className={cn("w-4 h-4 shrink-0 mr-3 mt-0.5", tier.isPopular ? "text-champagne" : "text-slate-400")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={cn(tier.isPopular ? "text-ivory/80" : "text-slate-700")}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={cn(
                  "w-full py-5 rounded-full font-bold uppercase tracking-wider text-[10px] transition-all duration-300 overflow-hidden relative group/btn",
                  tier.isPopular ? "bg-champagne text-obsidian" : "bg-obsidian text-ivory hover:bg-slate-800"
                )}>
                  <span className="relative z-10 group-hover/btn:-translate-y-1 block transition-transform duration-300">
                    {isYearly && hasYearly ? "Vreau Oferta Anuală" : "Începe Programul"}
                  </span>
                  {tier.isPopular && (
                    <span className="absolute inset-0 z-0 bg-white translate-y-full transition-transform duration-300 ease-in-out group-hover/btn:translate-y-0" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
