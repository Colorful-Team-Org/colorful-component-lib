# Colorful component library

This library contains react components which can be used to render a typical marketing or commercial website. It was created to support creating Demo websites of our Colorful Demo Project.

It is designed to use as less dependencies as possible to maximize compatibility. So even usually our Colorful websites are build using NextJS and Contantful we are still avoiding adding these projects as a dependency. The only peer dependencies therefore are [tailwindcss](https://tailwindcss.com) and [React](https://react.dev). So technically this library can be used with any project which uses _tailwindcss_.

## Installation

### Adding (if not already) tailwindcss via NPM

Additionally we will need a few tailwindcss plugins to be installed:

```bash
npm i tailwindcss @tailwindcss/aspect-ratio @tailwindcss/typography
```

### Adding the library via NPM

```bash
npm i git+https://github.com/Colorful-Team-Org/colorful-component-lib.git 
```

### Adding (or modifying existing) tailwindcss config

This library comes with a tailwindcss plugin which sets some defaults. Also you will need to add this libs component folder to the `content` array. For that just add (or modify) the config file `./tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //..
    './node_modules/cf-colorful-component-library/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    //..
    require('cf-colorful-component-library').tailwindPlugin
  ],
};
```

## Theming

Since this library just uses tailwindcss you can just adjust stylings in your `tailwind.config.js` file (see https://tailwindcss.com/docs/configuration).

However this library also defined the following custom colors which are used through out the components and which you might want to override. These colors (and other styles) are defined in `./src/tailwind.plugin.js`. These colors are currently defined:

* `cf-black`
* `cf-primary`
* `cf-primary-active`
* `cf-primary-invert`
* `cf-link`
* `cf-link-active`
* `cf-link-light`

## Fonts

TODO