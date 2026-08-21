/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6366F1',
          secondary: '#111827',
          accent: '#818CF8',
          text: '#F9FAFB',
          bg: '#111827',
          darker: '#0B0F17',
          glass: 'rgba(255, 255, 255, 0.04)',
          glassBorder: 'rgba(255, 255, 255, 0.1)',
          glassHover: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 10s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(15px, -25px) scale(1.08)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        glow: {
          '0%': { opacity: '0.35', filter: 'blur(50px)' },
          '100%': { opacity: '0.7', filter: 'blur(75px)' },
        }
      }
    },
  },
  plugins: [],
}
