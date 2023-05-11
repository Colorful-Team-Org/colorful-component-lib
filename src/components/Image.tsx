import { CSSProperties, useMemo } from 'react';

export interface ImageProps {
  title?: string;
  src?: string;
  srcSet?: string;
  sizes?: string;
  alt?: string;
  width?: number;
  height?: number;
  unoptimized?: boolean;
  focalPoint?: { x: number; y: number };
  imageStyle?: CSSProperties;
  fill?: boolean;
  loadingSkeleton?: boolean;
  className?: string;
  tagProps?: any;
  loader?: (options: { src: string; width: number; quality?: number }) => string;
}
export default function Image(props: ImageProps) {
  const dimensionProps = props.fill
    ? { width: '100%', height: '100%' }
    : { width: props.width, height: props.height };

  const focalPoint = useMemo(() => {
    if (!props.focalPoint || !props?.width || !props.height) return;

    const { x, y } = props.focalPoint;
    return [(x / props.width) * 100, (y / props.height) * 100] as [number, number];
  }, [props.focalPoint, props.height, props.width]);

  const responsiveConfig = useMemo(() => {
    if (props.unoptimized || !props.sizes || !props.src) return;
    if (!props.srcSet && !props.loader) return;
    return {
      sizes: props.sizes,
      srcSet: props.srcSet || createSrcSet(props.src, props.loader!),
    } as { sizes: string; srcSet: string };
  }, [props.loader, props.sizes, props.src, props.srcSet, props.unoptimized]);

  if (!props.src) return null;

  return (
    <img
      className={props.className}
      src={props.src}
      {...dimensionProps}
      alt={props.alt || props.title || ''}
      title={props.title || undefined}
      {...responsiveConfig}
      style={{
        ...props.imageStyle,
        objectFit: 'cover',
        objectPosition: focalPoint?.map(p => `${p}%`).join(' '),
      }}
      {...props.tagProps}
    />
  );
}

const SRC_SET_DEFAULT_OPTIONS = {
  widths: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  quality: 80,
};
export function createSrcSet(
  src: string,
  loader: Required<ImageProps>['loader'],
  options?: Partial<typeof SRC_SET_DEFAULT_OPTIONS>
) {
  const { widths, quality } = { ...SRC_SET_DEFAULT_OPTIONS, ...options };
  return widths.map(width => loader({ src, width, quality })).join(`, `);
}

// TODO get from tailwind config
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function minBreakpoint(point: keyof typeof breakpoints) {
  return `(min-width: ${breakpoints[point]}px)`;
}
export function maxBreakpoint(point: keyof typeof breakpoints) {
  return `(max-width: ${breakpoints[point] - 1}px)`;
}

type WidthUnit = `${number}${'vw' | 'px'}`;

type ResponsiveImgSizes = [keyof typeof breakpoints, WidthUnit][];

export function createImageSizes(sizes: ResponsiveImgSizes, fallback: WidthUnit = `100vw`) {
  let result = sizes.map(s => `${maxBreakpoint(s[0])} ${s[1]}`).join(`, `);
  if (fallback) result += `, ${fallback}`;
  return result;
}