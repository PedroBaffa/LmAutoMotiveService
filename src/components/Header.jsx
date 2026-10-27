import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Clock, MapPin, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Localização & Horários', href: '#localizacao' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-automotive-dark/95 backdrop-blur-md border-b border-automotive-border shadow-lg shadow-black/40 py-2.5 sm:py-3' 
          : 'bg-automotive-dark/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none py-3 sm:py-5'
      }`}>
        {/* Top micro bar for quick info - desktop */}
        <div className="hidden lg:block border-b border-automotive-border/40 pb-2 mb-2 text-xs text-automotive-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-industrial-500" />
                R. Rozo Lagoa, 389 - Imirim, São Paulo
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-electric-400" />
                Seg a Sex: 08h-19h | Sáb: 08h-15h
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-emerald-400 font-medium">Oficina aberta e atendendo via WhatsApp</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative flex items-center justify-center shrink-0">
                <img
                  src="/logo.png"
                  alt="LM Automotive Service Logo"
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_4px_12px_rgba(234,51,53,0.35)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="font-display font-extrabold text-lg sm:text-xl text-white tracking-wider">LM</span>
                  {/* Faixas de performance Motorsport */}
                  <div className="flex h-3 sm:h-3.5 w-3.5 sm:w-4 rounded-[2px] overflow-hidden shadow-sm border border-black/40">
                    <span className="w-1/2 h-full bg-[#0E018F]"></span>
                    <span className="w-1/2 h-full bg-[#EA3335]"></span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded font-mono font-semibold bg-industrial-500/10 text-industrial-400 border border-industrial-500/25">
                    SERVICE
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-automotive-muted font-medium font-sans">
                  Automotive Service
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-automotive-muted hover:text-white transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-electric-500 to-industrial-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                </a>
              ))}
            </nav>

            {/* Action Button - Desktop */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href={BUSINESS_INFO.whatsappUrl("Olá! Gostaria de falar com a equipe da Lm Automotive.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-industrial-500 hover:bg-industrial-600 shadow-md shadow-industrial-500/25 hover:shadow-glow-red transition-all duration-300 transform active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Mobile Header Actions (Call icon + Hamburger Menu) */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                className="p-2 rounded-lg bg-automotive-surface text-electric-400 border border-automotive-border hover:text-white transition-colors"
                aria-label="Ligar para a oficina"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-automotive-surface text-automotive-muted hover:text-white hover:bg-automotive-border border border-automotive-border transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu & Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-automotive-dark border-l border-automotive-border p-5 flex flex-col justify-between shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-200">
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-automotive-border">
                <div className="flex items-center gap-2">
                  <img
                    src="/logo.png"
                    alt="LM Logo"
                    className="h-8 w-auto object-contain"
                  />
                  <div>
                    <span className="font-display font-bold text-white text-sm">LM Automotive</span>
                    <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Atendimento Aberto
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-automotive-surface text-automotive-muted hover:text-white"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-5 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium text-gray-200 hover:text-white hover:bg-automotive-surface transition-colors active:scale-98"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-automotive-muted" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Contact & Actions in Drawer */}
            <div className="pt-4 border-t border-automotive-border space-y-3">
              <a
                href={BUSINESS_INFO.whatsappUrl("Olá! Gostaria de um orçamento via WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl text-sm font-bold text-white bg-industrial-500 hover:bg-industrial-600 shadow-lg shadow-industrial-500/25 active:scale-95 transition-transform"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp ({BUSINESS_INFO.phone})</span>
              </a>

              <a
                href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-gray-200 bg-automotive-surface hover:bg-automotive-hover border border-automotive-border active:scale-95 transition-transform"
              >
                <Phone className="w-4 h-4 text-electric-400" />
                <span>Ligar Agora</span>
              </a>

              <div className="pt-2 text-center text-xs text-automotive-muted space-y-1">
                <p className="flex items-center justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-industrial-500 shrink-0" />
                  <span>R. Rozo Lagoa, 389 - Imirim, SP</span>
                </p>
                <p className="text-[11px]">Seg a Sex: 08h-19h | Sáb: 08h-15h</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
