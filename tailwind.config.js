/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{html, js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#ff00ff',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('./src/tailwind.plugin')
  ],
}
