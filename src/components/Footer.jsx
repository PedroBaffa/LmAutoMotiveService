import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-automotive-dark border-t border-automotive-border text-automotive-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="LM Automotive Service Logo"
                className="h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(234,51,53,0.3)]"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-lg text-white tracking-wider">
                    LM <span className="text-industrial-500 font-semibold">AUTOMOTIVE</span>
                  </span>
                  <div className="flex h-3 w-3.5 rounded-[2px] overflow-hidden border border-black/40">
                    <span className="w-1/2 h-full bg-[#0E018F]"></span>
                    <span className="w-1/2 h-full bg-[#EA3335]"></span>
                  </div>
                </div>
                <p className="text-[10px] text-automotive-muted uppercase tracking-wider font-medium">Service & Diagnóstico</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-automotive-muted">
              Oficina mecânica especializada no bairro Imirim, São Paulo. Diagnósticos precisos, peças homologadas e compromisso incondicional com a verdade.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Garantia e procedência comprovadas</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-electric-400 transition-colors py-1 inline-block">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-electric-400 transition-colors py-1 inline-block">Serviços Especializados</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-electric-400 transition-colors py-1 inline-block">Depoimentos & Nota 4.9</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-electric-400 transition-colors py-1 inline-block">Localização & Rota</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Atendimento
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-industrial-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Segunda a Sexta:</p>
                  <p>08:00 às 19:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Sábados:</p>
                  <p>08:00 às 15:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Contato Direto
            </h4>
            <div className="space-y-2.5">
              <a 
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-automotive-muted hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-industrial-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </a>

              <a 
                href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-automotive-muted hover:text-electric-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-industrial-500 shrink-0" />
                <span className="font-mono text-white font-semibold">{BUSINESS_INFO.phone}</span>
              </a>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp de Agendamento</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-automotive-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[11px] text-gray-500">
            © {currentYear} Lm Automotive Service. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-automotive-surface text-gray-300 hover:text-white border border-automotive-border text-xs transition-colors"
              aria-label="Voltar ao início da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            
            <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
              <span>Desenvolvido por</span>
              <span className="font-semibold text-industrial-400">Pedro Baffa Carvalho</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
