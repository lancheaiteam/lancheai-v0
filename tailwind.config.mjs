/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Your static palette here (or CSS variables if you want them)
        primary: {
          50: '#ffe1e1',
          100: '#ffc3c3',
          200: '#ff9b9b',
          300: '#ff7373',
          400: '#ff4c4c',
          500: '#ff2424',
          600: '#e60000',
          700: '#b30000',
          800: '#800000',
          900: '#4d0000',
          950: '#270000',
        },
        dark: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        // If you want to keep CSS variable-based theming, add your variable colors as well
        /*
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  ...etc
		  */
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
