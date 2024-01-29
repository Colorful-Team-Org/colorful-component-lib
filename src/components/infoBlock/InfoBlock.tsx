import React, { PropsWithChildren, useMemo } from 'react';

import { ImageProps } from '../image/Image';
import clsx from 'clsx';

import styles from './InfoBlock.module.css';

export type InfoBlockProps = PropsWithChildren<{
  headline?: string;
  image?: Omit<ImageProps, 'sizes'> | null;
  imageShape?: 'icon' | 'avatar' | 'card';
  center?: boolean;
  card?: boolean;
  className?: string;
}>;

const twStyles = {
  card: 'overflow-hidden bg-white text-neutral-800 shadow-md rounded-md flex flex-col gap-4',
  cardImage: 'overflow-hidden h-60',
  infoContent: 'flex flex-col p-4 pt-0',
  infoBlock: 'flex flex-col gap-4',
  icon: 'flex gap-4 flex-row items-center',
};

const InfoBlock = (props: InfoBlockProps) => {
  const { headline, image, children, center = false, className, imageShape } = props;
  // console.log('InfoBlock', props);

  const imgWidth = useMemo(() => {
    if (!image?.width) return undefined;

    return `${image.width}px`;
  }, [image?.width]);

  if (imageShape === 'card') {
    return (
      <div className={clsx(styles.card, twStyles.card, className)}>
        <div className={twStyles.cardImage}>
          <img
            src={image?.url ?? undefined}
            alt={image?.alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className={clsx(twStyles.infoContent, styles.infoContent)}>
          {headline && <h2>{headline}</h2>}
          {children && children}
        </div>
      </div>
    );
  }

  if (imageShape === 'icon') {
    return (
      <div className={clsx(twStyles.icon)}>
        <div className="w-[50px]" style={{ width: imgWidth }}>
          <img src={image?.url ?? undefined} alt={image?.alt} />
        </div>
        {headline && <h2 className="mb-0 text-base">{headline}</h2>}
      </div>
    );
  }

  return (
    <div className={clsx(twStyles.infoBlock, center && 'text-center')}>
      {image && (
        <div
          className={clsx('mx-auto overflow-hidden')}
          style={{ width: imgWidth, height: imgWidth }}
        >
          <img
            src={image?.url ?? undefined}
            alt={image?.alt}
            className="h-full w-full rounded-full object-cover object-center"
          />
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
