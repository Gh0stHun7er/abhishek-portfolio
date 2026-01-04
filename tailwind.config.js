export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#0A84FF',
        'secondary': '#EDEDED',
        'gray-light': '#9CA3AF',
        'black': '#000000',
      },
    },
  },
  plugins: [],
}