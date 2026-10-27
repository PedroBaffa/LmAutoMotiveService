import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds for better conversion
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:flex items-end flex-col gap-2 group">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative bg-automotive-card border border-industrial-500/40 text-white text-xs px-3.5 py-2 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce">
          <span>Precisa de um orçamento rápido?</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }} 
            className="text-automotive-muted hover:text-white"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={BUSINESS_INFO.whatsappUrl("Olá! Estava navegando no site da Lm Automotive e gostaria de tirar uma dúvida.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />
        <MessageSquare className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}

