import React, { FC } from 'react';
import clsx from 'clsx';
import Image, { ImageProps } from '../image/Image';
import styles from './AuthorCard.module.css';
export type AuthorProps = {
  name: string;
  role?: string | null;
  image?: Omit<ImageProps, 'sizes'>;
  className?: string;
  simple?: boolean;
};
const simpleAuthor: FC<AuthorProps> = props => {
  const { name } = props;

  return (
    <div className={clsx(styles.simpleAuthor, props.className)}>
      <span>By {name}</span>
    </div>
  );
};
export default function AuthorCard(props: AuthorProps) {
  if (props.simple) return simpleAuthor(props);

  return (
    <div className={clsx(styles.authorCard, props.className)}>
      {props.image && <Image loadingSkeleton {...props.image} sizes="100px" />}
      <div className={styles.metaData}>
        <span>{props.name}</span>
        {props.role && <span className={styles.role}>{props.role}</span>}
      </div>
    </div>
  );
}
