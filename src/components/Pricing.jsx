import React from 'react';
import { cn } from '../utils';

export default function Pricing() {
  const tiers = [
    {
      name: "Esențial",
      desc: "Antrenamente specifice. Pentru implementare independentă.",
      price: "97",
      features: ["Program specific obiectivului setat", "Jurnal de antrenament și progresie", "Check-in Independent", "Acces secțiune de rețete", "Acces comunitate Fitnest"],
      isPopular: false
    },
    {
      name: "Performanță",
      desc: "Antrenamente specifice cu nutriție inclusă.",
      price: "147",
      features: ["Tot din Esențial +", "Plan nutrițional specific obiectivului", "Ajustări proprii ale alimentelor", "Food Tracker pentru modificarea meselor", "Ghid nutrițional pentru progres"],
      isPopular: true
    },
    {
      name: "Elită",
      desc: "Sistemul complet inclus și ghidat de Bogdan.",
      price: "347",
      features: ["Tot din Performanță +", "Verificare check-in lunar de Bogdan", "Analiză amănunțită a progresiei", "Asistență prioritară", "Chat privat"],
      isPopular: false
    }
  ];

  return (
    <section id="programe" className="w-full py-32 bg-ivory text-obsidian px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black italic tracking-tighter">
            Programe Fitnest.
          </h2>
          <p className="mt-2 text-2xl md:text-3xl text-slate-500 font-drama italic max-w-xl md:mr-auto tracking-tight">
            Alege programul care consideri că este cel mai potrivit pentru tine în funcție de ce ai nevoie. Accesul se acordă instant la confirmare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center lg:items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative p-8 md:p-10 rounded-4xl border transition-all duration-500 ease-out flex flex-col h-full",
                tier.isPopular
                  ? "bg-obsidian text-ivory border-slate/30 shadow-2xl scale-100 md:scale-105 z-10"
                  : "bg-transparent text-obsidian border-obsidian/10 shadow-sm hover:shadow-xl hover:border-obsidian/30 hover:bg-white z-0"
              )}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 z-20">
                  <span className="bg-champagne text-obsidian text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-lg">
                    Recomandat
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-black italic font-sans mb-2">{tier.name}</h3>
              <p className={cn("text-sm font-medium mb-8 h-10", tier.isPopular ? "text-slate-300" : "text-slate-600")}>
                {tier.desc}
              </p>

              <div className="mb-10 flex items-baseline">
                <span className="text-xs font-bold align-top mr-1 font-mono mt-2">RON</span>
                <span className="text-5xl md:text-6xl font-black font-sans tracking-tighter">{tier.price}</span>
              </div>

              <ul className="mb-12 space-y-4 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-sm font-medium">
                    <svg className={cn("w-5 h-5 shrink-0 mr-3 mt-0.5", tier.isPopular ? "text-champagne" : "text-slate-400")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={cn(tier.isPopular ? "text-ivory/90" : "text-slate-700")}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-4 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 overflow-hidden relative group/btn",
                tier.isPopular ? "bg-champagne text-obsidian" : "bg-obsidian text-ivory hover:bg-slate-800"
              )}>
                <span className="relative z-10 group-hover/btn:-translate-y-1 block transition-transform duration-300">
                  Începe Programul
                </span>
                {tier.isPopular && (
                  <span className="absolute inset-0 z-0 bg-white translate-y-full transition-transform duration-300 ease-in-out group-hover/btn:translate-y-0" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
