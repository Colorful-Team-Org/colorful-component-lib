import React, { ReactNode } from 'react';
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
  headline?: string;
  image?: Omit<ImageProps, 'sizes'>;
  cta: {
    text: string;
    href?: string;
  };
  heroSize?: boolean;
  className?: string;
  focalPoint?: { x: number; y: number };
  imageStyle?: boolean;
  colorPalette?: string;
}

export default function PageHero(props: PropsWithChildren<Props>) {
  const {
    headline,
    image,
    cta,
    heroSize: fullHeight,
    className,
    focalPoint,
    imageStyle: imageStyleFullWidth,
    children,
    colorPalette,
  } = props;
  const isVideo = image?.url && image?.contentType?.includes('video');
  const isImage = image?.url && image?.contentType?.includes('image');

  const { backgroundStyles, headlineStyles, buttonStyles, bodyTextStyles } =
    getStylesConfigFromPalette(colorPalette || '');

  // These are set up awkwardly in contentful
  const fullWidth = !imageStyleFullWidth;

  return (
    <div
      className={clsx(
        styles.pageHero,
        className,
        fullHeight && styles.fullHeight,
        fullWidth && styles.fullImage
      )}
    >
      <div className={clsx(styles.bgWrapper)}>
        {isImage && <img src={image!.url} alt={headline} />}
        {isVideo && (
          <video className={styles.videoBg} muted loop autoPlay>
            <source src={image!.url as string} />
          </video>
        )}
      </div>
      <div className={clsx(styles.contentWrapper, !fullWidth && backgroundStyles)}>
        <Heading lvl={2} className={headlineStyles}>
          {props.headline}
        </Heading>
        <div className={bodyTextStyles}>{children}</div>
      </div>
      <div className={clsx(styles.opaque, backgroundStyles)}></div>
    </div>
  );
}
