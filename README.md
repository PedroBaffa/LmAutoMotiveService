# Lm Automotive Service - Landing Page & Web Platform Base

Landing Page de alta conversão desenvolvida para a oficina mecânica **Lm Automotive Service**, localizada no Imirim, São Paulo - SP. Criada com foco em performance, experiência do usuário (UX/UI), design dark moderno e arquitetura componentizada em React + Tailwind CSS.

---

## 🛠️ Stack Tecnológica

- **Front-end:** React 18 + Vite
- **Estilização:** Tailwind CSS (Dark Mode nativo, paleta automotiva personalizada)
- **Ícones:** Lucide React
- **Tipografia:** Google Fonts (`Inter` para leitura técnica e `Poppins` para títulos de impacto)
- **Futura Integração Back-end:** Preparada para conexão com APIs em Node.js / PHP e banco de dados MariaDB/MySQL (módulos de OS e estoque).

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn/pnpm

### 1. Instalar Dependências
```bash
npm install
```

### 2. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
O Vite iniciará o servidor local em: `http://localhost:5173`

### 3. Build de Produção
```bash
npm run build
```

---

## 📂 Arquitetura de Pastas

```text
LmAutomotiveService/
├── index.html                   # Entry point com fontes Inter/Poppins e metatags
├── package.json                 # Dependências e scripts Vite
├── tailwind.config.js           # Cores customizadas (industrial orange, electric blue, dark obsidian)
├── postcss.config.js            # Pipeline PostCSS
├── vite.config.js               # Configuração do bundler Vite
└── src/
    ├── data/
    │   └── content.js           # Dados desacoplados (endereço, horários, serviços, depoimentos)
    ├── components/
    │   ├── Header.jsx           # Navegação sticky, logo, badge de status e menu mobile
    │   ├── Hero.jsx             # Headline de confiança, selo 4.9 Google e CTAs WhatsApp
    │   ├── Services.jsx         # Grid de especialidades (injeção, suspensão, freios, etc.)
    │   ├── SocialProof.jsx      # Nota 4.9 Google Maps, depoimentos e pilares de honestidade
    │   ├── LocationHours.jsx    # Endereço, horários de atendimento e Google Maps embed
    │   ├── Footer.jsx           # Rodapé institucional, links rápidos e créditos
    │   └── FloatingWhatsApp.jsx # Botão flutuante de alta conversão com pulso de notificação
    ├── App.jsx                  # Composição principal da SPA
    ├── index.css                # Diretivas Tailwind e estilizações globais dark
    └── main.jsx                 # Montagem no DOM React
```

---

## 🎨 Design System & Conversão

- **Dark Mode Nativo:** Fundo `#080B10` profundo com cards `#0F141F` e bordas `#1E293B`, evitando fadiga visual e transmitindo sofisticação técnica.
- **Acentos Industriais:** 
  - **Laranja Industrial (`#F97316`):** Usado nos botões de ação e conversão do WhatsApp.
  - **Azul Elétrico (`#0EA5E9`):** Usado para representar tecnologia diagnóstica computadorizada e precisão eletrônica.
- **Conversão Focada:** Todos os serviços possuem links diretos para o WhatsApp (`11 95726-1647`) com mensagens pré-formatadas, além do botão flutuante persistente na navegação.

