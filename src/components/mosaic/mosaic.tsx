import React, { Children, PropsWithChildren, useMemo } from 'react';

import styles from './mosaic.module.css';
import clsx from 'clsx';

export type MosaicProps = {
  anchorRight?: boolean | null;
  headline?: string | null;
  className?: string;
};

const Mosaic = (props: PropsWithChildren<MosaicProps>) => {
  const { children, anchorRight, headline, className } = props;
  const childCount = Children.count(children);

  let colsClass = useMemo(() => {
    let styles = '';

    if (childCount >= 3) {
      styles += ' grid-rows-2';
    }

    if (childCount >= 2) {
      styles += ' grid-cols-2';
    }

    return styles;
  }, [childCount]);

  return (
    <div className={clsx(styles.mosaicContainer, className)}>
      {headline && <h2>{headline}</h2>}
      <div
        className={clsx(
          styles.mosaic,
          colsClass,
          anchorRight && childCount >= 3 && styles.anchoredRight,
          !anchorRight && childCount >= 3 && styles.anchoredLeft
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Mosaic;
