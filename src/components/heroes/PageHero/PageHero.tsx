import React, { useMemo } from 'react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { ImageProps } from '../../image/Image';

import Button from '../../button/Button';

import styles from './PageHero.module.css';
import { getStylesConfigFromPalette } from '../../../palette-styles';

export type PageHeroProps = {
  headline: string | null;
  image?: Omit<ImageProps, 'sizes'> | null;
  ctaText?: string | null;
  heroSize?: boolean | null;
  className?: string;
  focalPoint?: { focalPoint: { x: number; y: number } } | null;
  imageStyle?: boolean | null;
  colorPalette?: string | null;
  href?: string | null;
  LinkComponent?: PropsWithChildren<React.ForwardRefExoticComponent<any>>;
};

export default function PageHero(props: PropsWithChildren<PageHeroProps>) {
  const {
    headline,
    image,
    ctaText,
    href,
    heroSize: heroSizeBoolean,
    className,
    focalPoint,
    imageStyle: imageStyleBoolean,
    children,
    colorPalette,
    LinkComponent,
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
          {children && (
            <div className={clsx(styles.bodyText, bodyTextStyles)}>
              {children}
              {href && (
                <Button
                  className={clsx(heroSize !== 'fixed_height' ? 'mt-10' : 'mt-5', buttonStyles)}
                  href={href}
                  size={heroSize !== 'fixed_height' ? 'large' : 'medium'}
                  LinkComponent={LinkComponent}
                >
                  {ctaText ?? 'Click Me!'}
                </Button>
              )}
            </div>
          )}
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
