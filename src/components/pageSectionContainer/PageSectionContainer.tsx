import React from 'react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { getStylesConfigFromPalette } from '../../palette-styles';

export type PageSectionProps = PropsWithChildren<{
  className?: string;
  colorPalette?: string | null;
  useDefaultStyles?: boolean;
}>;

export default function PageSectionContainer(props: PageSectionProps) {
  const { className, children, colorPalette, useDefaultStyles = true } = props;
  const { backgroundStyles, bodyTextStyles } = getStylesConfigFromPalette(colorPalette || '');
  return (
    <div
      className={clsx(
        className,
        backgroundStyles,
        'min-h-[200px]',
        useDefaultStyles && 'px-5 py-10',
        'md:px-0',
        bodyTextStyles
      )}
    >
      <div className={clsx('container')}>{children}</div>
    </div>
  );
}
