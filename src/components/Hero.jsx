import React from 'react';
import { Star, ShieldCheck, MessageSquare, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden bg-automotive-dark bg-grid">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] sm:h-[350px] bg-industrial-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-electric-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Call To Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6">
            
            {/* Google Maps Trust Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-automotive-card border border-automotive-border shadow-inner max-w-full">
              <div className="flex items-center text-amber-400 shrink-0">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="ml-1 text-xs font-bold text-white">{BUSINESS_INFO.googleRating}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-automotive-muted"></span>
              <span className="text-[11px] sm:text-xs text-automotive-muted font-medium">
                Avaliação Máxima (+{BUSINESS_INFO.totalReviews} avaliações)
              </span>
              <span className="inline-block text-[10px] sm:text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 shrink-0">
                Oficina Verificada
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] sm:leading-[1.15]">
              Mecânica de precisão, agilidade e <span className="text-gradient-primary">honestidade total.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-automotive-muted max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Cansado de orçamentos inflados e diagnósticos duvidosos? Na <strong className="text-white font-medium">Lm Automotive Service</strong>, unimos tecnologia diagnóstica de ponta, transparência por fotos/vídeos em tempo real e profissionais com ampla experiência no Imirim.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl("Olá! Gostaria de fazer um orçamento / agendamento para o meu veículo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-industrial-500 hover:bg-industrial-600 shadow-xl shadow-industrial-500/25 hover:shadow-glow-red transition-all duration-300 transform active:scale-95"
              >
                <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />
                <span>Agendar Avaliação no WhatsApp</span>
              </a>

              <a
                href="#servicos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-automotive-light bg-automotive-surface hover:bg-automotive-hover border border-automotive-border hover:border-electric-500/40 transition-all duration-200 active:scale-95"
              >
                <span>Conhecer Nossos Serviços</span>
                <ChevronRight className="w-4 h-4 text-automotive-muted" />
              </a>
            </div>

            {/* Key Trust Pillars */}
            <div className="pt-4 sm:pt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 border-t border-automotive-border/70 text-left">
              <div className="flex items-center gap-2 bg-automotive-card/50 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none">
                <CheckCircle2 className="w-4 h-4 text-industrial-500 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 font-medium">Orçamento sem surpresas</span>
              </div>
              <div className="flex items-center gap-2 bg-automotive-card/50 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none">
                <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 font-medium">Fotos do serviço no Whats</span>
              </div>
              <div className="flex items-center gap-2 bg-automotive-card/50 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none">
                <CheckCircle2 className="w-4 h-4 text-industrial-500 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-300 font-medium">Garantia em peças e serviço</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Tech Card / Diagnostic Display */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow & Border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-industrial-500/30 via-transparent to-electric-500/30 blur-lg opacity-70"></div>

              {/* Floating Mascot Brand Badge */}
              <div className="absolute -top-4 right-1 sm:-top-8 sm:-right-5 z-20 flex items-center gap-2 sm:gap-2.5 bg-automotive-card/95 backdrop-blur-md border border-industrial-500/40 p-1.5 pr-3 sm:p-2 sm:pr-4 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
                <img
                  src="/logo.png"
                  alt="Mascote LM Automotive Service"
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain drop-shadow-[0_2px_8px_rgba(234,51,53,0.35)]"
                />
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide">Mecânica LM</span>
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-industrial-400 font-semibold tracking-wider uppercase">Pronto para te atender</p>
                </div>
              </div>

              {/* Central Card */}
              <div className="relative rounded-2xl bg-automotive-card border border-automotive-border p-4 sm:p-6 lg:p-8 shadow-card-dark overflow-hidden">
                
                {/* Header of the visual card */}
                <div className="flex items-center justify-between pb-3 sm:pb-5 border-b border-automotive-border">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-automotive-muted">Scanner Online</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded bg-automotive-surface text-electric-400 border border-electric-500/20">
                    DIAG-v2.6
                  </span>
                </div>

                {/* Simulated Diagnostic Dashboard */}
                <div className="py-4 sm:py-6 space-y-3 sm:space-y-4">
                  
                  {/* Item 1: Injeção */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-automotive-surface/70 border border-automotive-border/60 hover:border-industrial-500/40 transition-colors">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5 sm:gap-2">
                        <span className="w-2 h-2 rounded-full bg-industrial-500"></span>
                        Injeção Eletrônica & Sensores
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono text-emerald-400">100% Calibrado</span>
                    </div>
                    <div className="w-full bg-automotive-dark h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-industrial-500 to-rose-400 h-full w-[94%] rounded-full"></div>
                    </div>
                  </div>

                  {/* Item 2: Freios */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-automotive-surface/70 border border-automotive-border/60 hover:border-electric-500/40 transition-colors">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5 sm:gap-2">
                        <span className="w-2 h-2 rounded-full bg-electric-400"></span>
                        Sistema de Freios & ABS
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono text-emerald-400">Pressão Ideal</span>
                    </div>
                    <div className="w-full bg-automotive-dark h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-electric-500 to-blue-400 h-full w-[98%] rounded-full"></div>
                    </div>
                  </div>

                  {/* Item 3: Suspensão */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-automotive-surface/70 border border-automotive-border/60 hover:border-indigo-500/40 transition-colors">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5 sm:gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                        Suspensão & Geometria
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono text-emerald-400">Alinhamento OK</span>
                    </div>
                    <div className="w-full bg-automotive-dark h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-electric-500 via-indigo-500 to-industrial-500 h-full w-[96%] rounded-full"></div>
                    </div>
                  </div>

                </div>

                {/* Bottom Card Summary */}
                <div className="pt-3 sm:pt-4 border-t border-automotive-border flex items-center justify-between text-[11px] sm:text-xs text-automotive-muted">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-industrial-500" />
                    <span>Checklist com 50+ itens</span>
                  </div>
                  <span className="font-mono text-industrial-400 font-semibold">LM Automotive</span>
                </div>

              </div>

              {/* Floating Small Highlight Badge */}
              <div className="absolute -bottom-4 left-1 sm:-bottom-5 sm:-left-6 bg-automotive-surface/95 backdrop-blur-md border border-industrial-500/40 p-2.5 sm:p-3.5 rounded-xl shadow-xl flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-industrial-500/20 text-industrial-400 flex items-center justify-center font-bold text-xs sm:text-sm">
                  4.9★
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-bold text-white">Líder no Imirim</p>
                  <p className="text-[10px] sm:text-[11px] text-automotive-muted">+180 motoristas satisfeitos</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
