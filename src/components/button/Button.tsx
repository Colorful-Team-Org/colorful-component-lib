import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
  className?: string;
  href?: string | null;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  style?: CSSProperties;
  rounded?: boolean;
  LinkComponent?: PropsWithChildren<React.ForwardRefExoticComponent<any>>;
}>;

const variantStyles = {
  primary: 'bg-primary-400 text-white transition-colors hover:bg-primary-500',
  small: 'px-2.5 py-1.5 text-base',
  medium: 'px-4 py-2 text-lg',
  large: 'px-8 py-3 text-xl',
};

export default function Button(props: Props) {
  const {
    size,
    variant = 'primary',
    className,
    href,
    onClick,
    children,
    LinkComponent,
    rounded = true,
  } = props;
  const computedStyles = clsx(
    rounded && 'rounded-md',
    'py-2 px-4 focus:ring-neutral-500 inline-flex items-center font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all',
    variantStyles[variant],
    variantStyles[size ?? 'medium'],
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
