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

  if (!props.src) return null;

  const responsiveConfig = !props.unoptimized ? { sizes: props.sizes, srcSet: props.srcSet } : {};

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
