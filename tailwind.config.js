/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['DMSans'],
        'sub-headings': ['Aristotelica Pro'],
      }
    },
  },
  plugins: [],
}
