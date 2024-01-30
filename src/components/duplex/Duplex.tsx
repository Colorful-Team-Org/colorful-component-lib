import React from 'react';

import { PropsWithChildren } from 'react';

import clsx from 'clsx';
import { getStylesConfigFromPalette } from '../../palette-styles';
import { Button } from '../button';
import { ImageProps } from '../image/Image';

export type DuplexProps = {
  containerLayout?: boolean | null;
  buttonVariant?: 'primary' | 'secondary' | 'tertiary';
  colorPalette?: string | null;
  ctaText?: string | null;
  headline?: string | null;
  href?: string | null;
  image?: Omit<ImageProps, 'sizes'> | null;
  LinkComponent?: PropsWithChildren<React.ForwardRefExoticComponent<any>>;
  className?: string;
  useDefaultStyles?: boolean;
  hideCta?: boolean;
};
export default function Duplex(props: PropsWithChildren<DuplexProps>) {
  // console.log('Duplex', props);
  const {
    containerLayout,
    colorPalette,
    LinkComponent,
    ctaText,
    headline,
    children,
    href,
    image,
    buttonVariant,
    className,
    useDefaultStyles = true,
    hideCta = false,
  } = props;

  const { backgroundStyles, headlineStyles, bodyTextStyles } = getStylesConfigFromPalette(
    colorPalette || ''
  );

  return (
    <div className={clsx('w-full', backgroundStyles)}>
      <div
        className={clsx(
          className,
          'container',
          'block gap-16',
          useDefaultStyles && 'p-5',
          'md:flex md:px-0 md:text-left',
          containerLayout && 'flex-row-reverse'
        )}
      >
        {image && (
          <div className="w-full max-w-xl">
            <img
              src={image?.url ?? ''}
              width="100%"
              alt={image?.alt ?? headline ?? ''}
              className="rounded-md"
            />
          </div>
        )}
        <div className="mb-5 max-w-xl flex-1 md:w-1/2">
          {headline && <h2 className={headlineStyles}>{headline}</h2>}
          <div className={clsx('text-xl', bodyTextStyles)}>{children}</div>
          {href && !hideCta && (
            <Button
              className={clsx('mt-5')}
              variant={buttonVariant ?? 'primary'}
              href={href.startsWith('/') ? href : `/${href}`}
              LinkComponent={LinkComponent}
              size="large"
            >
              {ctaText ?? 'Click Me'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
