import React, { useState } from 'react';
import { MessageSquare, Phone, Navigation, Wrench, X, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function MobileBottomNav() {
  const [showRouteModal, setShowRouteModal] = useState(false);

  return (
    <>
      {/* Route Modal / Sheet for GPS choice */}
      {showRouteModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200 md:hidden"
          onClick={() => setShowRouteModal(false)}
        >
          <div 
            className="w-full max-w-sm bg-automotive-card border border-automotive-border rounded-2xl p-5 space-y-4 shadow-2xl animate-in slide-in-from-bottom duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-automotive-border/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-industrial-500" />
                <h3 className="font-display font-bold text-white text-base">Como Chegar na Oficina</h3>
              </div>
              <button
                onClick={() => setShowRouteModal(false)}
                className="p-1 rounded-lg text-automotive-muted hover:text-white hover:bg-automotive-surface transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-automotive-muted leading-relaxed">
              {BUSINESS_INFO.address}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={BUSINESS_INFO.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowRouteModal(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#33CCFF]/20 border border-[#33CCFF]/40 hover:bg-[#33CCFF]/30 transition-all text-center"
              >
                <Navigation className="w-4 h-4 text-[#33CCFF]" />
                <span>Abrir no Waze</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowRouteModal(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-industrial-500/20 border border-industrial-500/40 hover:bg-industrial-500/30 transition-all text-center"
              >
                <MapPin className="w-4 h-4 text-industrial-400" />
                <span>Google Maps</span>
              </a>
            </div>

            <button
              onClick={() => setShowRouteModal(false)}
              className="w-full py-2.5 text-xs text-automotive-muted font-medium text-center hover:text-white"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Persistent Mobile Bottom Bar */}
      <nav 
        aria-label="Navegação rápida mobile"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-automotive-dark/95 backdrop-blur-xl border-t border-automotive-border px-3 py-2 shadow-[0_-8px_30px_rgba(0,0,0,0.6)]"
        style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <div className="max-w-lg mx-auto grid grid-cols-4 items-center gap-1">
          {/* Ligar Agora */}
          <a
            href={`tel:+${BUSINESS_INFO.phoneRaw}`}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-automotive-muted hover:text-white active:bg-automotive-surface transition-all touch-manipulation group"
          >
            <div className="w-9 h-9 rounded-xl bg-automotive-surface flex items-center justify-center group-hover:text-electric-400 group-active:scale-95 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-semibold mt-1 tracking-tight">Ligar</span>
          </a>

          {/* Serviços */}
          <a
            href="#servicos"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-automotive-muted hover:text-white active:bg-automotive-surface transition-all touch-manipulation group"
          >
            <div className="w-9 h-9 rounded-xl bg-automotive-surface flex items-center justify-center group-hover:text-electric-400 group-active:scale-95 transition-transform">
              <Wrench className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-semibold mt-1 tracking-tight">Serviços</span>
          </a>

          {/* Como Chegar */}
          <button
            onClick={() => setShowRouteModal(true)}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-automotive-muted hover:text-white active:bg-automotive-surface transition-all touch-manipulation group"
          >
            <div className="w-9 h-9 rounded-xl bg-automotive-surface flex items-center justify-center group-hover:text-industrial-400 group-active:scale-95 transition-transform">
              <Navigation className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-semibold mt-1 tracking-tight">Como Chegar</span>
          </button>

          {/* WhatsApp (Main Highlight CTA) */}
          <a
            href={BUSINESS_INFO.whatsappUrl("Olá! Gostaria de um orçamento rápido pelo WhatsApp.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-white active:scale-95 transition-transform touch-manipulation group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-500 shadow-md shadow-emerald-600/30 flex items-center justify-center relative">
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-automotive-dark" />
              <MessageSquare className="w-4 h-4 fill-white" />
            </div>
            <span className="text-[10px] font-bold mt-1 text-emerald-400 tracking-tight">WhatsApp</span>
          </a>
        </div>
      </nav>
    </>
  );
}
