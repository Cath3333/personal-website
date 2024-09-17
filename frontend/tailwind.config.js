/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand': '#F1EFEF',
      },
      fontFamily: {
        sans: ['Josefin', 'Arial', 'sans-serif'],
      },
      textColor: {
        DEFAULT: '#ffffff', 
      },
    },
  },
  plugins: [],
}

