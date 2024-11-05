/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',
        'primary-dark': '#1873CC',
        gold: {
          light: '#FFD700',
          DEFAULT: '#DAA520',
          dark: '#B8860B',
        },
      },
      fontFamily: {
        sans: ['Inter Tight', 'sans-serif'],
      },
      boxShadow: {
        'service': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'gold': '0 4px 6px -1px rgba(218, 165, 32, 0.4), 0 2px 4px -1px rgba(218, 165, 32, 0.2)',
      },
      animation: {
        'gradient': 'gradient 4s ease infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};