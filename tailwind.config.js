/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta oficial extraída do logo LM Automotive Service:
        // 1. Vermelho Racing (faixa esportiva do boné)
        industrial: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ea3335', // Vermelho Racing oficial do logo
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        brand: {
          blue: '#0E018F',
          royal: '#2563EB',
          red: '#EA3335',
          navy: '#070A12',
          dark: '#0D1424',
          light: '#F8FAFC',
        },
        racing: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ea3335',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // 2. Azul Royal Mecânico (Uniforme do mecânico, olhos e faixa do boné)
        electric: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb', // Azul Royal do macacão da foto
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#0e018f', // Azul profundo da faixa do boné
        },
        motorsport: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#0e018f',
        },
        // 3. Base Automotiva Noturna (Inspirada no tom do boné e sombras técnicas)
        automotive: {
          dark: '#070A12',       // Fundo noturno com base azul-marinho automotiva
          card: '#0D1424',       // Fundo de cards elegante e imersivo
          surface: '#141F36',    // Superfícies e botões secundários
          border: '#1E2F52',     // Bordas refinadas com tonalidade azul-escuro
          hover: '#253861',      // Estado hover em botões e elementos
          muted: '#94A3B8',      // Cinza cromo da chave inglesa
          light: '#F8FAFC',      // Branco puro para legibilidade máxima
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 30px -4px rgba(234, 51, 53, 0.45)',
        'glow-blue': '0 0 30px -4px rgba(37, 99, 235, 0.45)',
        'glow-orange': '0 0 30px -4px rgba(234, 51, 53, 0.45)', // Compatibilidade
        'glow-motorsport': '0 0 35px -5px rgba(37, 99, 235, 0.3), 0 0 20px -2px rgba(234, 51, 53, 0.3)',
        'card-dark': '0 12px 35px -10px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "radial-gradient(circle, rgba(37, 99, 235, 0.08) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
