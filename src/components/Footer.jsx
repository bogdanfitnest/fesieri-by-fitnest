import React, { useState } from 'react';

function LinkWithPreview({ href, label, previewUrl, type = 'image' }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group w-fit">
      <a 
        href={href} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="text-slate-300 font-medium hover:text-champagne transition-colors pb-1 flex items-center gap-2"
      >
        {label}
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-champagne scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
      </a>

      {/* Floating Preview Popover */}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 h-32 rounded-2xl overflow-hidden border-2 border-champagne/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-obsidian z-50 animate-in fade-in zoom-in duration-300 origin-bottom pointer-events-none">
          {type === 'video' ? (
            <video src={previewUrl} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80" />
          ) : (
            <img src={previewUrl} alt="Preview" className="w-full h-full object-cover opacity-80" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-ivory pt-24 font-sans">
      <div className="w-full bg-obsidian rounded-t-[4rem] text-ivory px-6 py-20 md:py-32 relative overflow-hidden">

        {/* Subtle noise in footer */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          <div className="md:col-span-5 flex flex-col items-start">
            <h4 className="text-2xl md:text-4xl font-black italic tracking-tighter mb-4 text-ivory flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-champagne" />
              FESIERI BY FITNEST
            </h4>
            <p className="text-slate-400 font-medium max-w-sm mb-12">
              Unde performanța întâlnește precizia. Un program de hipertrofie premium conceput pentru o remodelarea și mărirea fesierilor.
            </p>

            <div className="flex items-center gap-3 mt-auto px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_1px_rgba(34,197,94,0.6)]" />
              <span className="font-mono text-xs text-green-400 uppercase tracking-widest font-bold">FITNEST.RO</span>
            </div>
          </div>
          <div className="md:col-span-3 md:col-start-7 flex flex-col gap-4">
            <span className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-4">Navigație</span>
            
            <LinkWithPreview 
              href="#programe" 
              label="Programe" 
              previewUrl="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=400&auto=format&fit=crop"
            />
            
            <a href="#aplicatie" className="text-slate-300 font-medium hover:text-champagne transition-colors w-fit pb-1 group relative">
              Aplicație
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-champagne scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>

            <LinkWithPreview 
              href="#rezultate" 
              label="Rezultate" 
              previewUrl="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop"
            />

            <a href="#programe" className="font-medium hover:text-white transition-colors w-fit pb-1 group relative mt-4 text-champagne">
              Începe Programul →
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-4">Legal</span>
            <a href="#" className="text-slate-400 font-medium hover:text-ivory transition-colors w-fit text-sm">Politica de Confidențialitate</a>
            <a href="#" className="text-slate-400 font-medium hover:text-ivory transition-colors w-fit text-sm">Termeni și Condiții</a>
            <a href="#" className="text-slate-400 font-medium hover:text-ivory transition-colors w-fit text-sm">Contact Fitnest</a>
          </div>

        </div>

        <div className="max-w-6xl mx-auto relative z-10 mt-24 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-slate-500">
          <span>&copy; {new Date().getFullYear()} Fitnest. Toate drepturile rezervate.</span>
          <span className="font-mono text-xs tracking-wider mt-4 md:mt-0 opacity-50">V.2.0.4.BUILD</span>
        </div>

      </div>
    </footer>
  );
}
