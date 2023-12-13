import React from 'react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { getStylesConfigFromPalette } from '../../palette-styles';

import styles from './CallToAction.module.css';
import { Button } from '../button';

type Props = {
  headline?: string | null;
  href?: string | null;
  ctaText?: string | null;
  colorPalette?: string | null;
  className?: string;
};

const CallToAction = (props: PropsWithChildren<Props>) => {
  const { headline, href, ctaText, colorPalette, className, children } = props;

  const { backgroundStyles, headlineStyles, buttonStyles, bodyTextStyles } =
    getStylesConfigFromPalette(colorPalette || '');

  return (
    <div className={clsx(styles.cta, backgroundStyles, className)}>
      <div className={clsx('container', styles.content)}>
        {headline && <h2 className={clsx(styles.headline, headlineStyles)}>{headline}</h2>}
        <div className={bodyTextStyles}>{children}</div>
        {href && ctaText && (
          <Button
            href={href}
            className={clsx(styles.button, buttonStyles, 'bg-transparent')}
            size="large"
          >
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CallToAction;
