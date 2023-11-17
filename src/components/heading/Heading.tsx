import React from 'react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export const textClasses = [
  'font-headline text-5xl font-bold tracking-tight',
  'font-headline text-4xl font-bold tracking-tight',
  'font-headline text-3xl font-bold tracking-tight',
  'font-headline text-2xl font-bold tracking-tight',
  'font-headline text-lg font-bold tracking-tight',
  'font-headline text- font-bold tracking-tight',
];

export const marginClasses = ['mb-5', 'mb-5', 'mb-5', '', '', ''];

type Level = 1 | 2 | 3 | 4 | 5 | 6;

interface Props {
  lvl?: Level;
  tagLvl?: Level;
  classLvl?: Level;

  margin?: boolean;
  className?: string;

  tagProps?: any;
}
export default function Heading(props: PropsWithChildren<Props>) {
  const { lvl = 1, className, margin, children } = props;
  const tagLevel = props.tagLvl || lvl;
  const classLevel = (props.classLvl || lvl) - 1;
  const Tag: any = `h${tagLevel}`;
  return (
    <Tag
      className={clsx(textClasses[classLevel], margin && marginClasses[classLevel], className)}
      {...props.tagProps}
    >
      {children}
    </Tag>
  );
}
