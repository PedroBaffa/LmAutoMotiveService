import React, { useState } from 'react';
import { Star, Quote, CheckCircle, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO, DIFFERENTIALS } from '../data/content';

export default function SocialProof() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  return (
    <section id="avaliacoes" className="py-14 sm:py-20 lg:py-24 bg-automotive-surface/30 relative border-t border-b border-automotive-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Google Score Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-automotive-card to-automotive-surface border border-automotive-border p-5 sm:p-8 lg:p-12 shadow-2xl mb-12 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Score Big Display */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
                Google Maps Verified Reviews
              </div>
              
              <div className="flex items-baseline justify-center lg:justify-start gap-4">
                <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
                  {BUSINESS_INFO.googleRating}
                </span>
                <div>
                  <div className="flex text-amber-400 mb-1 justify-center lg:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-automotive-muted font-medium">
                    Baseado em mais de <strong>{BUSINESS_INFO.totalReviews} avaliações reais</strong>
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                A nota mais alta do bairro Imirim. O reconhecimento de quem prioriza rapidez, honestidade na substituição de peças e atendimento atencioso.
              </p>
              
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-electric-400 hover:text-electric-300 transition-colors p-1"
                >
                  <span>Ver todas as avaliações no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Why Clients Trust Us - Quick Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {DIFFERENTIALS.map((diff, index) => (
                <div 
                  key={index}
                  className="p-3.5 sm:p-4 rounded-xl bg-automotive-dark/80 border border-automotive-border/70 hover:border-electric-500/30 transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-electric-500/10 text-electric-400 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-white">{diff.title}</h4>
                  </div>
                  <p className="text-xs text-automotive-muted leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Section Heading for Reviews */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-industrial-500/10 border border-industrial-500/20 text-industrial-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-industrial-500 animate-pulse"></span>
            Experiência do Cliente
          </div>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            O que dizem os motoristas sobre a <span className="text-gradient-primary">Lm Automotive</span>
          </h3>
          <p className="text-xs sm:text-sm text-automotive-muted">
            Relatos espontâneos de quem confia seu veículo aos nossos cuidados diários.
          </p>
        </div>

        {/* Testimonials (Snap Carousel on Mobile, Grid on Tablet/Desktop) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-3 md:gap-6 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {TESTIMONIALS.map((item, idx) => (
            <div 
              key={idx}
              className="w-[85vw] max-w-[340px] md:w-auto shrink-0 snap-center rounded-2xl bg-automotive-card border border-automotive-border p-5 sm:p-6 flex flex-col justify-between shadow-lg relative group hover:border-electric-500/40 transition-colors"
            >
              <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-automotive-border/70 group-hover:text-electric-500/25 transition-colors absolute top-5 right-5 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex text-amber-400 mb-3 sm:mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-5 sm:mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Author & Vehicle */}
              <div className="pt-3.5 sm:pt-4 border-t border-automotive-border/60 flex items-center justify-between">
                <div>
                  <h5 className="font-display text-xs sm:text-sm font-bold text-white">{item.name}</h5>
                  <p className="text-[10px] sm:text-[11px] text-electric-400 font-medium">{item.vehicle}</p>
                </div>
                <span className="text-[10px] text-automotive-muted bg-automotive-surface px-2 py-0.5 rounded border border-automotive-border/50">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-2 text-xs text-automotive-muted">
          <span>👈 Deslize para ver mais depoimentos 👉</span>
        </div>

      </div>
    </section>
  );
}
