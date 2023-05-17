const plugin = require('tailwindcss/plugin');

module.exports = plugin(null, {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        headline: ['Archivo', 'sans-serif'],
      },
      colors: {
        'cf-black': '#101827',
        'cf-primary': '#000',
        'cf-primary-active': '#6b7280',
        'cf-primary-invert': '#e5e7eb',
        'cf-link': '#2680EB',
        'cf-link-light': '#7CAECC',
        'cf-link-active': '#006EFF',
      },
      maxWidth: {
        'prose-wide': '50rem',
      },
      minHeight: {
        headersection: '26.5rem',
      },
    },
    aspectRatio: {
      '10/6': '10 / 6',
      '16/7': '16 / 7',
      '16/10': '16 / 10',
      '4/3': '4 / 3',
    },
  },
});
