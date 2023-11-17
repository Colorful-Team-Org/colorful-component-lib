import React from 'react';
import clsx from 'clsx';
import Image, { ImageProps } from '../image/Image';
const styles = {
  authorCard: 'inline-flex min-w-[14rem] font-sans',
  metaData: 'ml-3',
};
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
        <p>
          {props.name}
          {props.role && <span>{props.role}</span>}
        </p>
      </div>
    </div>
  );
}
