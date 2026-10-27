import React, { useState } from 'react';
import { 
  Cpu, 
  Disc, 
  ShieldCheck, 
  Droplets, 
  Wrench, 
  Zap, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/content';

// Map icon string to component
const iconMap = {
  Cpu,
  Disc,
  ShieldCheck,
  Droplets,
  Wrench,
  Zap,
};

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'injecao', label: 'Diagnóstico & Injeção' },
    { id: 'suspensao-freios', label: 'Freios & Suspensão' },
    { id: 'revisao-preventiva', label: 'Revisão Geral' },
    { id: 'oleo-filtros', label: 'Troca de Óleo' },
    { id: 'motor-cambio', label: 'Motor & Câmbio' },
    { id: 'ar-eletrica', label: 'Ar & Elétrica' },
  ];

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.id === selectedCategory);

  return (
    <section id="servicos" className="py-14 sm:py-20 lg:py-24 bg-automotive-dark relative">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-64 sm:w-72 h-64 sm:h-72 bg-industrial-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 sm:w-80 h-72 sm:h-80 bg-electric-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-500/10 border border-electric-500/25 text-electric-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse"></span>
            Nossas Especialidades
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Serviços com <span className="text-gradient-primary">padrão de concessionária</span> e preço justo.
          </h2>
          <p className="text-automotive-muted text-sm sm:text-base lg:text-lg">
            Diagnósticos precisos com equipamentos de ponta. Nada de trocar peças à toa: identificamos a raiz do problema com clareza.
          </p>
        </div>

        {/* Category Filter Chips (Optimized for Mobile Horizontal Scroll) */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 touch-manipulation active:scale-95 ${
                selectedCategory === cat.id
                  ? 'bg-industrial-500 text-white shadow-md shadow-industrial-500/25'
                  : 'bg-automotive-card text-automotive-muted hover:text-white hover:bg-automotive-surface border border-automotive-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Wrench;
            const serviceWhatsappUrl = BUSINESS_INFO.whatsappUrl(
              `Olá! Gostaria de solicitar um orçamento para o serviço de *${service.title}* na Lm Automotive.`
            );

            return (
              <div 
                key={service.id}
                className="group relative rounded-2xl bg-automotive-card border border-automotive-border hover:border-electric-500/50 p-5 sm:p-7 transition-all duration-300 hover:shadow-card-dark flex flex-col justify-between"
              >
                {/* Top glow border on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electric-500 via-indigo-500 to-industrial-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-13 sm:h-13 p-2.5 sm:p-3 rounded-xl bg-automotive-surface text-electric-400 border border-automotive-border group-hover:bg-electric-600 group-hover:text-white group-hover:border-electric-500 transition-all duration-300 shadow-sm shrink-0">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-md bg-automotive-surface text-automotive-muted border border-automotive-border/80 group-hover:text-electric-300 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-electric-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-automotive-muted leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6 sm:mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 sm:pt-4 border-t border-automotive-border/80">
                  <a
                    href={serviceWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-4 py-3 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-automotive-light bg-automotive-surface hover:bg-industrial-500 hover:text-white transition-all duration-200 active:scale-98 group/btn"
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-12 sm:mt-16 rounded-2xl bg-gradient-to-r from-automotive-card via-automotive-surface to-automotive-card border border-automotive-border p-5 sm:p-8 text-center sm:text-left sm:flex items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 mb-5 sm:mb-0">
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">Não encontrou o que seu carro precisa?</h4>
            <p className="text-xs sm:text-sm text-automotive-muted max-w-2xl">
              Fazemos desde pequenos ajustes elétricos até manutenções complexas de motor. Fale diretamente com o mecânico responsável.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.whatsappUrl("Olá! Meu carro está com um sintoma específico e preciso de uma orientação técnica.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-industrial-500 hover:bg-industrial-600 shadow-lg shadow-industrial-500/20 active:scale-95 transition-all duration-200"
          >
            <span>Conversar com o Mecânico</span>
          </a>
        </div>

      </div>
    </section>
  );
}
