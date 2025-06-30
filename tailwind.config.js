/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'walmart-blue': '#004c91',
        'walmart-yellow': '#ffc220',
        'walmart-light-blue': '#0071ce',
        'cyber-green': '#00ff88',
        'cyber-red': '#ff3838',
        'cyber-purple': '#8b5cf6',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          from: { boxShadow: '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88' },
          to: { boxShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};