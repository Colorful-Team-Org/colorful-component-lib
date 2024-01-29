import React from 'react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

interface Props {
  lvl?: Level;
  tagLvl?: Level;
  classLvl?: Level;

  margin?: boolean;
  className?: string;

  tagProps?: any;
}

const marginClasses = ['mb-5', 'mb-5', 'mb-5', '', '', ''];
const styles = {
  h1: 'text-5xl font-bold',
  h2: 'text-4xl font-bold',
  h3: 'text-3xl font-bold',
  h4: 'text-2xl font-bold',
  h5: 'text-xl font-bold',
  h6: 'text-lg font-bold',
};
export default function Heading(props: PropsWithChildren<Props>) {
  const { lvl = 1, className, margin, children } = props;
  const tagLevel = props.tagLvl || lvl;
  const classLevel = (props.classLvl || lvl) - 1;
  const Tag: any = `h${tagLevel}`;
  return (
    <Tag
      className={clsx(styles[`h${tagLevel}`], margin && marginClasses[classLevel], className)}
      {...props.tagProps}
    >
      {children}
    </Tag>
  );
}
