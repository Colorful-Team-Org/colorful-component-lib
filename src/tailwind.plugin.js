const plugin = require('tailwindcss/plugin');

module.exports = plugin(null, {
  theme: {
    extend: {
      colors: {
        'cf-primary-50': '#f9fafb',
        'cf-primary-100': '#f3f4f6',
        'cf-primary-200': '#e5e7eb',
        'cf-primary-400': '#9ca3af',
        'cf-primary-500': '#6b7280',
        'cf-black': '#101827',
        'cf-link': {
          200: '#7CAECC',
          400: '#2680EB',
          600: '#006EFF',
        },
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
