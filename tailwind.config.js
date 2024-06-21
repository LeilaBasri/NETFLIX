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
        'wb': 'rgb(35, 35, 35)',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(51.39% 511.66% at 47.68% -217.91%, #ff9900 0%, #e50914 17.27%, #0e1b4f 79.44%, #000413 100%)',
      },
      outlineColor: {
        'gray': 'rgba(255, 255, 255, .4)',
      },
      boxShadow: {
        'custom': '0px -8px 25px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}