import React from 'react';

import { PropsWithChildren } from 'react';

import styles from './Duplex.module.css';
import clsx from 'clsx';
import { getStylesConfigFromPalette } from '../../palette-styles';
import { Button } from '../button';
import { ImageProps } from '../image/Image';

export type DuplexProps = {
  containerLayout?: boolean | null;
  colorPalette?: string | null;
  ctaText?: string | null;
  headline?: string | null;
  href?: string | null;
  image?: Omit<ImageProps, 'sizes'> | null;
  LinkComponent?: PropsWithChildren<React.ForwardRefExoticComponent<any>>;
};
export default function Duplex(props: PropsWithChildren<DuplexProps>) {
  // console.log('Duplex', props);
  const { containerLayout, colorPalette, LinkComponent, ctaText, headline, children, href, image } =
    props;

  const { backgroundStyles, headlineStyles, buttonStyles, bodyTextStyles } =
    getStylesConfigFromPalette(colorPalette || '');

  console.log(props);

  return (
    <div className={clsx(styles.duplex, backgroundStyles)}>
      <div
        className={clsx('container', styles.contentContainer, containerLayout && styles.reverse)}
      >
        {image && (
          <div className={styles.imageContainer}>
            <img src={image?.url ?? ''} width="100%" alt={image?.alt ?? headline ?? ''} />
          </div>
        )}
        <div className={styles.content}>
          {headline && <h2 className={headlineStyles}>{headline}</h2>}
          <div className={clsx(styles.bodyText, bodyTextStyles)}>{children}</div>
          {href && (
            <Button
              className={clsx(buttonStyles, 'mt-5')}
              href={href.startsWith('/') ? href : `/${href}`}
              LinkComponent={LinkComponent}
              size="large"
            >
              {ctaText ?? 'Click Me'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
