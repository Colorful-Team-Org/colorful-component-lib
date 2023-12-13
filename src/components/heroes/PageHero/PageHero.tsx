import React, { ReactNode, useMemo } from 'react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import Image, { ImageProps } from '../../image/Image';
// import { CtfImage, CtfRichtext } from 'features/contentful-api/graphql/contentful-graphql-types';
// import { RichText } from 'features/ctf-richtext/components/RichText';
import Button from '../../button/Button';
import Heading from '../../heading/Heading';

import styles from './PageHero.module.css';
import { getStylesConfigFromPalette } from './palette-styles';

interface Props {
  headline: string | null;
  image: Omit<ImageProps, 'sizes'> | null;
  ctaText: string | null;
  heroSize: boolean | null;
  className?: string;
  focalPoint: { focalPoint: { x: number; y: number } } | null;
  imageStyle: boolean | null;
  colorPalette: string | null;
}

export default function PageHero(props: PropsWithChildren<Props>) {
  const {
    headline,
    image,
    ctaText,
    heroSize: heroSizeBoolean,
    className,
    focalPoint,
    imageStyle: imageStyleBoolean,
    children,
    colorPalette,
  } = props;
  const isVideo = image?.url && image?.contentType?.includes('video');

  const { backgroundStyles, headlineStyles, buttonStyles, bodyTextStyles } =
    getStylesConfigFromPalette(colorPalette || '');

  const imageStyle = imageStyleBoolean ? 'partial' : 'full';
  const heroSize =
    heroSizeBoolean === null || heroSizeBoolean === true ? 'full_screen' : 'fixed_height';

  const hasFullSizeBgImage = imageStyle === 'full';
  const hasPartialSizeBgImage = imageStyle === 'partial';

  const focalPointStyle = useMemo(() => {
    if (!focalPoint || !focalPoint.focalPoint || !image || !image?.width || !image.height)
      return null;

    const { x, y } = focalPoint.focalPoint;
    console.log(x, y);

    return [(x / image.width) * 100, (y / image.height) * 100] as [number, number];
  }, [focalPoint, image]);

  return (
    <div
      className={clsx(
        styles.pageHero,
        className,
        heroSize === 'full_screen' && styles.fullHeight,
        !image?.url && [styles.noImage, backgroundStyles]
      )}
      style={{
        backgroundImage: !isVideo && !hasPartialSizeBgImage ? `url(${image?.url})` : '',
        backgroundPosition: focalPointStyle?.map(p => `${p}%`).join(' ') ?? 'center',
      }}
    >
      <div
        className={clsx(
          styles.contentWrapper,
          hasPartialSizeBgImage && styles.partialBg,
          heroSize === 'fixed_height' && styles.fixedHeight
        )}
      >
        <div
          className={clsx(
            styles.content,
            hasFullSizeBgImage ? styles.centeredContent : styles.leftContent,
            heroSize === 'fixed_height' && backgroundStyles
          )}
        >
          {headline && <h1 className={headlineStyles}>{headline}</h1>}
          {children && <div className={clsx(styles.bodyText, bodyTextStyles)}>{children}</div>}
        </div>
        {hasPartialSizeBgImage && (
          <div
            className={styles.imageWrapper}
            style={{
              backgroundImage: !isVideo ? `url(${image?.url})` : '',
              backgroundPosition: focalPointStyle?.map(p => `${p}%`).join(' ') ?? 'center',
            }}
          ></div>
        )}

        <div className={clsx(styles.opaque, backgroundStyles, 'md:hidden')}></div>
      </div>
      {isVideo && image?.url && (
        <video autoPlay muted loop>
          <source src={image?.url} type={image?.contentType ?? undefined} />
        </video>
      )}

      <div
        className={clsx(
          styles.opaque,
          backgroundStyles,
          (hasPartialSizeBgImage || heroSize === 'fixed_height') && 'hidden'
        )}
      ></div>
    </div>
  );
}
