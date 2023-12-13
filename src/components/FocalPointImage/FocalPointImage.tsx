import React, { useMemo } from 'react';

type Props = {
  alt: string;
  width: number;
  height: number;
  src: string;
  focalPoint: { x: number; y: number } | null;
  fill: boolean;
  className?: string;
};

const FocalPointImage = (props: Props) => {
  const { alt, width, height, src, focalPoint, fill = false } = props;

  const dimensionProps = fill ? { width: '100%', height: '100%' } : { width, height };
  const focalPointStyle = useMemo(() => {
    if (!focalPoint || !width || !height) return;

    const { x, y } = focalPoint;

    return [(x / width) * 100, (y / height) * 100] as [number, number];
  }, [focalPoint, width, height]);

  return (
    <img
      src={src}
      alt={alt}
      style={{
        objectFit: 'cover',
        objectPosition: focalPointStyle?.map(p => `${p}%`).join(' '),
        ...dimensionProps,
      }}
    />
  );
};

export default FocalPointImage;
