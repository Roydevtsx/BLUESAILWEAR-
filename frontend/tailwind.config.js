/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: '#0d1b2a',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
};
