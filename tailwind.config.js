/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pastel-black': '#2e2f2f',
      'whitesmoke': '#f5f5f5',
      'living-coral': '#fe6e61',
      'facebook': '#3a5998',
      'twitter': '#1C9BEF',
      'instagram': '#AC21D2',
      'overlay': 'rgba(0,0,0,0.4)',
    },
    borderRadius: {
      DEFAULT: '1rem'
    },
    extend: {
      scale: {
        '85': '.85'
      },
    },
  },
  plugins: [],
}