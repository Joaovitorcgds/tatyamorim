/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'lg': '890px',
      },
      width: {
        'custom': 'calc(227% + 1.3px)',
      },
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
});
