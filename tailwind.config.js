/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Kumbh Sans', 'Arial', 'sans-serif'],
      },
      colors: {
        "custom-cyan": "hsl(185, 75%, 39%)",
        "custom-dark": "hsl(229, 23%, 23%)",
        "custom-gray": "hsl(227, 10%, 46%)",
      },
    },
  },
  plugins: [],
}

