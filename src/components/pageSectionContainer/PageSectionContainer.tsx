import React from 'react';
import clsx from 'clsx';
import { CSSProperties, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
  withYMargin?: boolean;
}>;

export default function PageSectionContainer(props: Props) {
  const marginClassName = props.withYMargin
    ? 'mt-16 mb-20 lg:mt-24 lg:mb-28 first:mt-0 last:mb-0'
    : `pt-16 pb-20 lg:pt-24 lg:pb-28`;
  return (
    <>
      <div className={clsx(marginClassName, props.className)} style={props.style}>
        {props.children}
      </div>
      <div />
    </>
  );
}
