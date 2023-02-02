/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brown': '#C28D3F',
      },
      boxShadow: {
        'section': '0px 4px 20px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
