module.exports = {
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '1024px',
          xl: '1120px',
          '2xl': '1280px',
        },
      },
      colors: {
        'cf-black': '#101827',
        'cf-primary': '#000',
        'cf-primary-active': '#6b7280',
        'cf-primary-invert': '#e5e7eb',
        'cf-link': '#2680EB',
        'cf-link-light': '#7CAECC',
        'cf-link-active': '#006EFF',
        'cf-palette__white-smoke': '#FCFCFC',
        'cf-palette__light-gray': '#f4f4f4',
        'cf-palette__gray': '#bababa',
        'cf-palette__midnight-green': '#0C445C',
        'cf-palette__vermilion-red': '#EA6558',
        'cf-palette__gold-sand': '#E8B894',
        'cf-palette__pine-green': '#118367',
        'cf-palette__yellow': '#F7C35C',
        primary: {
          50: '#f4f8fb',
          100: '#e8eff6',
          200: '#ccdeeb',
          300: '#9fc3da',
          400: '#79acca',
          500: '#4989ae',
          600: '#376d92',
          700: '#2d5877',
          800: '#294b63',
          900: '#264054',
          950: '#192a38',
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
};
