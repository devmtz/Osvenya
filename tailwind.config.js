/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#020617',
          50: '#0a1628',
          100: '#0f1f3d',
          200: '#162447',
          300: '#1e3a6e',
        },
        champagne: {
          DEFAULT: '#C5A059',
          light: '#D4B872',
          dark: '#A8863A',
          muted: '#C5A05940',
        },
        alabaster: {
          DEFAULT: '#FAFAF9',
          muted: '#E8E6E1',
          dim: '#B8B4AD',
        },
        glass: {
          white: 'rgba(255,255,255,0.05)',
          border: 'rgba(197,160,89,0.2)',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(197,160,89,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(197,160,89,0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
