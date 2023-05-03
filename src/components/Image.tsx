import { CSSProperties, useMemo } from 'react';
import { Maybe } from 'utils/typing-utils';

export interface ImageProps {
  title?: Maybe<string>;
  src?: Maybe<string>;
  alt?: Maybe<string>;
  width?: Maybe<number>;
  height?: Maybe<number>;
  sizes?: Maybe<string>;
  unoptimized?: boolean;
  priority?: boolean;
  focalPoint?: Maybe<{ x: number; y: number }>;
  imageStyle?: CSSProperties;
  fill?: boolean;
  className?: string;
}
export default function Image(props: ImageProps) {
  const dimensionProps = props.fill
    ? { fill: true }
    : { width: props.width || 1024, height: props.height || 768 };

  const focalPoint = useMemo(() => {
    if (!props.focalPoint || !props?.width || !props.height) return;

    const { x, y } = props.focalPoint;
    return [(x / props.width) * 100, (y / props.height) * 100] as [number, number];
  }, [props.focalPoint, props.height, props.width]);

  if (!props.src) return null;

  return (
    <img
      className={props.className}
      src={props.src}
      {...dimensionProps}
      alt={props.alt || props.title || ''}
      title={props.title || undefined}
      sizes={props.sizes || `100vw`}
      style={{
        ...props.imageStyle,
        objectFit: 'cover',
        objectPosition: focalPoint?.map(p => `${p}%`).join(' '),
      }}
    />
  );
}
