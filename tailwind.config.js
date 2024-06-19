/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': 'rgb(229, 9, 20)',
        'text-gray': '#737373'
      },
      backgroundColor: {
        'red': 'rgb(229, 9, 20)',
        'red-100': 'rgb(193,17,25)',
      },
      outlineColor: {
        'gray': 'rgba(255, 255, 255, .4)',
      },
    },
  },
  plugins: [],
}