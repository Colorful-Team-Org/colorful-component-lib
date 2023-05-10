export function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const optimizeLineBreak = (str: string): string => {
  const tokens = str.split(' ');

  if (tokens.length < 3) {
    return str;
  }

  const lastToken = tokens.pop();

  return `${tokens.join(' ')}\u00A0${lastToken}`;
};

export const displaySlug = (slug: string) => {
  if (slug === '') return '';

  return slug
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

export const createTagSlug = (tag: string) => tag.toLowerCase().split(' ').join('-');
