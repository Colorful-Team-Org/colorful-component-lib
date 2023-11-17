/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{html, js,jsx,ts,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('./src/tailwind.plugin'),
  ],
};
