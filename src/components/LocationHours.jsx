import React, { useState } from 'react';
import { MapPin, Clock, Navigation, MessageSquare, Copy, Check, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function LocationHours() {
  const [copied, setCopied] = useState(false);
  const [mapInteractive, setMapInteractive] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${BUSINESS_INFO.address}, CEP ${BUSINESS_INFO.postalCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-14 sm:py-20 lg:py-24 bg-automotive-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-industrial-500/10 border border-industrial-500/20 text-industrial-400 text-xs font-semibold uppercase tracking-wider">
            Fácil Acesso no Imirim
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Venha nos visitar no <span className="text-gradient-primary">Imirim</span>
          </h2>
          <p className="text-automotive-muted text-xs sm:text-base">
            Oficina ampla, organizada e equipada para receber você e seu veículo com todo o conforto e segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Info Card (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5 sm:space-y-6">
            
            {/* Address Card */}
            <div className="rounded-2xl bg-automotive-card border border-automotive-border p-5 sm:p-8 space-y-4 sm:space-y-5 shadow-card-dark">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-industrial-500/10 text-industrial-500 flex items-center justify-center shrink-0 border border-industrial-500/20">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-base sm:text-lg font-bold text-white mb-1">Nosso Endereço</h3>
                  <a 
                    href={BUSINESS_INFO.mapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-300 leading-relaxed hover:text-white transition-colors block"
                  >
                    {BUSINESS_INFO.address}
                  </a>
                  <p className="text-[11px] sm:text-xs text-automotive-muted mt-1 font-mono">
                    CEP: {BUSINESS_INFO.postalCode}
                  </p>
                </div>
              </div>

              {/* Copy Address Button */}
              <button
                onClick={handleCopyAddress}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium text-automotive-muted bg-automotive-surface/70 hover:text-white hover:bg-automotive-surface border border-automotive-border/60 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Endereço Copiado para a Área de Transferência!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Endereço Completo</span>
                  </>
                )}
              </button>

              {/* Navigation Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 rounded-xl text-xs font-semibold text-white bg-automotive-surface hover:bg-automotive-hover border border-automotive-border transition-colors active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 text-industrial-400" />
                  <span>Google Maps</span>
                </a>
                <a
                  href={BUSINESS_INFO.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 rounded-xl text-xs font-semibold text-white bg-automotive-surface hover:bg-automotive-hover border border-automotive-border transition-colors active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 text-electric-400" />
                  <span>Abrir no Waze</span>
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="rounded-2xl bg-automotive-card border border-automotive-border p-5 sm:p-8 space-y-3 sm:space-y-4 shadow-card-dark">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-electric-500/10 text-electric-400 flex items-center justify-center shrink-0 border border-electric-500/20">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white">Horário de Funcionamento</h3>
                    <p className="text-[11px] sm:text-xs text-automotive-muted">Atendimento com pontualidade técnica</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-2 border-b border-automotive-border/60">
                  <span className="text-gray-300 font-medium">Segunda a Sexta</span>
                  <span className="font-mono text-white font-semibold bg-automotive-surface px-2.5 py-1 rounded border border-automotive-border/50 text-xs sm:text-sm">
                    08:00 - 19:00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-automotive-border/60">
                  <span className="text-gray-300 font-medium">Sábado</span>
                  <span className="font-mono text-industrial-400 font-semibold bg-industrial-500/10 px-2.5 py-1 rounded border border-industrial-500/20 text-xs sm:text-sm">
                    08:00 - 15:00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-automotive-muted">Domingo</span>
                  <span className="font-mono text-automotive-muted text-xs sm:text-sm">Fechado</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call */}
            <a
              href={BUSINESS_INFO.whatsappUrl("Olá! Gostaria de confirmar se há vaga para atendimento hoje.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 sm:gap-3 w-full py-3.5 sm:py-4 px-6 rounded-xl text-sm font-bold text-white bg-industrial-500 hover:bg-industrial-600 shadow-lg shadow-industrial-500/25 hover:shadow-glow-red transition-all duration-200 active:scale-95"
            >
              <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5" />
              <span>Chamar no WhatsApp ({BUSINESS_INFO.phone})</span>
            </a>

          </div>

          {/* Map Display (Right) */}
          <div className="lg:col-span-7 rounded-2xl bg-automotive-card border border-automotive-border overflow-hidden shadow-card-dark relative min-h-[380px] sm:min-h-[440px] flex flex-col">
            
            {/* Top Bar of the Map */}
            <div className="p-3.5 sm:p-4 bg-automotive-surface border-b border-automotive-border flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="flex h-3 w-3.5 rounded-[2px] overflow-hidden border border-black/40 shrink-0">
                  <span className="w-1/2 h-full bg-[#0E018F]"></span>
                  <span className="w-1/2 h-full bg-[#EA3335]"></span>
                </div>
                <span className="text-white font-semibold truncate">Lm Automotive Service - Imirim</span>
              </div>
              <a 
                href={BUSINESS_INFO.mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-electric-400 hover:text-white flex items-center gap-1 font-medium shrink-0"
              >
                <span>Rotas</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="relative flex-1 w-full min-h-[320px] bg-automotive-dark">
              <iframe
                title="Localização Lm Automotive Service"
                src="https://maps.google.com/maps?q=R.+Rozo+Lagoa,+389+-+Imirim,+São+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className={`w-full h-full border-0 absolute inset-0 filter invert-[0.88] hue-rotate-[180deg] contrast-[1.1] grayscale-[0.3] ${
                  mapInteractive ? 'pointer-events-auto' : 'pointer-events-none md:pointer-events-auto'
                }`}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Mobile overlay prompt to prevent scroll trapping */}
              {!mapInteractive && (
                <div 
                  onClick={() => setMapInteractive(true)}
                  className="md:hidden absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                >
                  <span className="px-3.5 py-1.5 rounded-full bg-automotive-dark/90 border border-automotive-border text-xs text-gray-200 font-medium shadow-lg backdrop-blur-sm">
                    Toque para navegar no mapa interativo
                  </span>
                </div>
              )}

              {/* Floating Map Pin Badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:left-4 sm:bottom-4 bg-automotive-card/95 backdrop-blur-md border border-automotive-border p-3 sm:p-3.5 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-industrial-500 flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="truncate">
                  <p className="text-xs font-bold text-white truncate">Lm Automotive Service</p>
                  <p className="text-[11px] text-automotive-muted truncate">Rua Rozo Lagoa, 389 - Imirim</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
