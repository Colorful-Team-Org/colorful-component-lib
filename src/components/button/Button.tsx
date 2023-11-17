import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large';
  color?: 'primary';
  inverted?: boolean;
  className?: string;
}>;
export default function Button(props: Props) {
  let sizeClasses = 'rounded-md px-4 py-2';
  switch (props.size) {
    case 'small':
      sizeClasses = `rounded px-2.5 py-1.5 text-sm`;
      break;
    case 'large':
      sizeClasses = `rounded-md px-6 py-3 text-base`;
      break;
  }

  /* only `primary` supported for now */
  const color = props.inverted
    ? `bg-white text-cf-primary hover:bg-cf-primary-invert`
    : `bg-cf-primary hover:bg-cf-primary-active`;

  return (
    <button
      type="button"
      className={clsx(
        `focus:ring-cf-primary-500 inline-flex items-center border border-transparent font-sans font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2`,
        color,
        sizeClasses,
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
