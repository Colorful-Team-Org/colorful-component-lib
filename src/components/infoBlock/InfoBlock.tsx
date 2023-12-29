import React, { PropsWithChildren } from 'react';

import { ImageProps } from '../image/Image';
import clsx from 'clsx';

import styles from './InfoBlock.module.css';

export type InfoBlockProps = PropsWithChildren<{
  headline?: string;
  image?: Omit<ImageProps, 'sizes'> | null;
  imageRound?: boolean;
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
    card = false,
    className,
  } = props;

  if (card) {
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

  return (
    <div className={clsx(styles.infoBlock, center && 'text-center')}>
      {image && (
        <div className={clsx(styles.infoImage, imageRound ? 'rounded-full' : 'rounded-md')}>
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
