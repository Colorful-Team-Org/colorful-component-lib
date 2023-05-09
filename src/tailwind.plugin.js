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
        'cf-primary-600': '#000',
        'cf-primary-700': '#000',
        'cf-primary-800': '#000',
        'cf-primary-900': '#000',
        // imported from knowledgebase:
        'cf-black': '#101827',
        'cf-blue-medium': '#2680EB',
        'cf-blue-light-bg': '#ddedfe',
        'cf-link': {
          200: '#7CAECC',
          400: '#2680EB',
          600: '#006EFF',
        },
        'dark-gray': {
          300: '#959595',
          400: '#797979',
          600: '#212121',
        },
        'cf-purple': {
          400: '#BF9EDB',
          600: '#AB8ACE',
        },
        'cf-red': {
          100: '#fdf2f2',
          400: '#FF8888',
          600: '#FC7575',
        },
        'cf-orange': {
          400: '#FFB78F',
          600: '#FCA87E',
        },
        'cf-yellow': {
          100: '#FFF7E6',
          400: '#FFD47D',
          600: '#EEC063',
        },
        'cf-green': {
          100: '#CAF2DC',
          400: '#68DA9A',
          600: '#58C484',
        },
        'cf-blue': {
          400: '#8DBAD8',
          600: '#73A8C6',
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
