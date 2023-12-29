import React from 'react';
import clsx from 'clsx';
import Image, { ImageProps } from '../image/Image';
import styles from './AuthorCard.module.css';
export type AuthorProps = {
  name: string;
  role?: string | null;
  image: Omit<ImageProps, 'sizes'>;
  className?: string;
};
export default function AuthorCard(props: AuthorProps) {
  return (
    <div className={clsx(styles.authorCard, props.className)}>
      <Image loadingSkeleton {...props.image} sizes="100px" />
      <div className={styles.metaData}>
        <span>{props.name}</span>
        {props.role && <span className={styles.role}>{props.role}</span>}
      </div>
    </div>
  );
}
