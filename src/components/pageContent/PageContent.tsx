import React from 'react';
import { PropsWithChildren } from 'react';
import { ImageProps } from '../image/Image';

import styles from './PageContent.module.css';

type ContentProps = PropsWithChildren<{
  name?: string | null;
  shortDescription?: string | null;
  featuredImage?: Omit<ImageProps, 'sizes'>;
}>;

const PageContent = (props: ContentProps) => {
  const { name, shortDescription, featuredImage, children } = props;
  const hasFeaturedImage = featuredImage && featuredImage.url;

  return (
    <div className={styles.pageContent}>
      <header className={styles.header}>
        <h1>{name}</h1>
        {shortDescription && <p>{shortDescription}</p>}
      </header>
      {hasFeaturedImage && (
        <figure className={styles.featuredImage}>
          <img
            src={featuredImage.url!}
            alt={featuredImage.alt ?? featuredImage.title ?? ''}
            className="rounded-lg"
          />
          {featuredImage.description && <figcaption>{featuredImage.description}</figcaption>}
        </figure>
      )}
      {children}
    </div>
  );
};

export default PageContent;
