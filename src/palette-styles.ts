interface StyleConfigInterface {
  headlineStyles: string;
  bodyTextStyles: string;
  backgroundStyles: string;
  buttonStyles: string;
}
const paletteStyles: { [key: string]: StyleConfigInterface } = {
  'palette-1. White (#FFFFFF)': {
    headlineStyles: 'text-black',
    bodyTextStyles: 'text-accent-7',
    backgroundStyles: 'bg-white',
    buttonStyles:
      'border-black hover:bg-black hover:text-white active:text-white active:bg-black focus:shadow-lg transform transition-all focus:-translate-y-1',
  },
  'palette-2. Light Gray (#F4F4F4)': {
    headlineStyles: 'text-black',
    bodyTextStyles: 'text-accent-7',
    backgroundStyles: 'bg-cf-palette__light-gray',
    buttonStyles:
      'border-black hover:bg-black hover:text-neutral-600 active:text-neutral-600 active:bg-black focus:shadow-lg transform transition-all focus:-translate-y-1',
  },
  'palette-3. Gray (#BABABA)': {
    headlineStyles: 'text-white',
    bodyTextStyles: 'text-white',
    backgroundStyles: 'bg-cf-palette__gray',
    buttonStyles:
      'text-white hover:text-black border-white hover:bg-white hover:white transform transition-all focus:-translate-y-1',
  },
  'palette-4. Black (#000000)': {
    headlineStyles: 'text-white',
    bodyTextStyles: 'text-gray-300',
    backgroundStyles: 'bg-black',
    buttonStyles:
      'border-white hover:bg-gray-100 text-white hover:text-black active:text-black active:bg-gray-100 focus:shadow-lg transform transition-all focus:-translate-y-1',
  },
  'palette-5. Midnight Green (#0C445C)': {
    headlineStyles: 'text-white',
    bodyTextStyles: 'text-white',
    backgroundStyles: 'bg-cf-palette__midnight-green',
    buttonStyles:
      'border-white hover:bg-gray-100 text-white hover:text-black active:text-black active:bg-gray-100 focus:shadow-lg transform transition-all focus:-translate-y-1',
  },
  'palette-6. Vermilion Red (#EA6558)': {
    headlineStyles: 'text-white',
    bodyTextStyles: 'text-white',
    backgroundStyles: 'bg-cf-palette__vermilion-red',
    buttonStyles:
      'border-white hover:bg-gray-100 text-white hover:text-black active:text-black active:bg-gray-100 focus:shadow-lg transform transition-all focus:-translate-y-1',
  },
  'palette-7. Gold Sand (#E8B894)': {
    headlineStyles: 'text-black',
    bodyTextStyles: 'text-black',
    backgroundStyles: 'bg-cf-palette__gold-sand',
    buttonStyles:
      'border-black text-black hover:bg-black hover:text-white active:text-black active:bg-gray-100 focus:shadow-lg transform transition-all focus:-translate-y-1',
  },
  'palette-8. Pine Green (#118367)': {
    headlineStyles: 'text-white',
    bodyTextStyles: 'text-white',
    backgroundStyles: 'bg-cf-palette__pine-green',
    buttonStyles:
      'border-white hover:bg-gray-100 text-white hover:text-black active:text-black active:bg-gray-100 transform transition-all focus:-translate-y-1',
  },
  'palette-9. Yellow (#F7C35C)': {
    headlineStyles: 'text-black',
    bodyTextStyles: 'text-black',
    backgroundStyles: 'bg-cf-palette__yellow',
    buttonStyles:
      'border-black text-black hover:bg-black hover:text-white active:text-black active:bg-gray-100 focus:shadow-lg transform transition-all focus:-translate-y-1',
  },
  'palette-10. No Styles': {
    headlineStyles: '',
    bodyTextStyles: '',
    backgroundStyles: 'bg-transparent',
    buttonStyles: '',
  },
};

export const getStylesConfigFromPalette = (palette: string): StyleConfigInterface => {
  if (paletteStyles[`palette-${palette}`] === undefined) {
    return paletteStyles['palette-1. White (#FFFFFF)'];
  }

  return paletteStyles[`palette-${palette}`];
};
