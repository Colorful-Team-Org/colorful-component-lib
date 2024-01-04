import React from 'react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import styles from './Button.module.css';

type Props = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
  className?: string;
  href?: string | null;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  LinkComponent?: PropsWithChildren<React.ForwardRefExoticComponent<any>>;
}>;
export default function Button(props: Props) {
  const { size, inverted, className, href, onClick, children, LinkComponent } = props;
  const computedStyles = clsx(
    styles.button,
    inverted && styles.inverted,
    styles[size ?? 'medium'],
    className
  );
  return !href ? (
    <button type="button" className={computedStyles} onClick={onClick}>
      {children}
    </button>
  ) : LinkComponent ? (
    <LinkComponent href={href} className={computedStyles}>
      {children}
    </LinkComponent>
  ) : (
    <a href={href} className={computedStyles}>
      {children}
    </a>
  );
}
