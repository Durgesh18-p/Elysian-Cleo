/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        maroon: '#6d1d28',
        blue: '#909bfb',
        navy: '#020245',
        skin: '#f4e9e5',
        babyPink: '#ff9b9b',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}

