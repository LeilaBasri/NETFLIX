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
        'black-700': 'rgba(0,0,0,.4)',
        'gray-700': 'rgba(255, 255, 255, .7)',
      },
      outlineColor: {
        'gray': 'rgba(255, 255, 255, .4)',
      },
    },
  },
  plugins: [],
}