import React, { PropsWithChildren, useMemo } from 'react';

import { ImageProps } from '../image/Image';
import clsx from 'clsx';

import styles from './InfoBlock.module.css';

export type InfoBlockProps = PropsWithChildren<{
  headline?: string;
  image?: Omit<ImageProps, 'sizes'> | null;
  imageRound?: boolean;
  imageShape?: 'icon' | 'avatar' | 'card';
  center?: boolean;
  card?: boolean;
  className?: string;
}>;

const InfoBlock = (props: InfoBlockProps) => {
  const {
    headline,
    image,
    children,
    center = false,
    imageRound = true,
    className,
    imageShape,
  } = props;
  // console.log('InfoBlock', props);

  const imgWidth = useMemo(() => {
    if (!image?.width) return undefined;

    return `${image.width}px`;
  }, [image?.width]);

  if (imageShape === 'card') {
    return (
      <div className={clsx(styles.card, className)}>
        <div className={styles.cardImage}>
          <img src={image?.url ?? undefined} alt={image?.alt} />
        </div>
        <div className={styles.infoContent}>
          {headline && <h2 className={styles.infoHeadline}>{headline}</h2>}
          {children && children}
        </div>
      </div>
    );
  }

  if (imageShape === 'icon') {
    return (
      <div className={clsx(styles.infoBlock, styles.icon)}>
        <div className={styles.iconImage} style={{ width: imgWidth }}>
          <img src={image?.url ?? undefined} alt={image?.alt} />
        </div>
        {headline && <h2 className={styles.infoHeadline}>{headline}</h2>}
      </div>
    );
  }

  return (
    <div className={clsx(styles.infoBlock, center && 'text-center')}>
      {image && (
        <div
          className={clsx(styles.infoImage, imageRound && 'rounded-full')}
          style={{ width: imgWidth, height: imgWidth }}
        >
          <img src={image?.url ?? undefined} alt={image?.alt} />
        </div>
      )}
      <div className={styles.infoContent}>
        {headline && <h2 className={styles.infoHeadline}>{headline}</h2>}
        {children && children}
      </div>
    </div>
  );
};

export default InfoBlock;
