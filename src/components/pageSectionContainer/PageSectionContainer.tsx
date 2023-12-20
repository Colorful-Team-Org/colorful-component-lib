import React from 'react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { getStylesConfigFromPalette } from '../../palette-styles';

import styles from './PageSectionContainer.module.css';

export type PageSectionProps = PropsWithChildren<{
  className?: string;
  colorPalette?: string | null;
}>;

export default function PageSectionContainer(props: PageSectionProps) {
  const { className, children, colorPalette } = props;
  const { backgroundStyles, bodyTextStyles } = getStylesConfigFromPalette(colorPalette || '');
  return (
    <div className={clsx(className, backgroundStyles, styles.pageSection, bodyTextStyles)}>
      <div className={clsx('container')}>{children}</div>
    </div>
  );
}
