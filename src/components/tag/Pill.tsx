import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
}>;
export default function Pill(props: Props) {
  return (
    <span
      className={clsx(
        'inline-block rounded-3xl bg-gray-300 px-4 py-1 text-gray-800',
        props.className
      )}
    >
      {props.children}
    </span>
  );
}
