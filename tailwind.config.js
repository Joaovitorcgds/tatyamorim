/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        'overlay': "rgba(0,0,0,.7)",
        'overlayServices': "rgba(0,0,0,.3)",
        "primary": "#E0A2A2"
      },
      scale: {
        '102': '1.02',
      }
    }
  },
  plugins: [],
};
