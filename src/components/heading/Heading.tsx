import React from 'react';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './Heading.module.css';

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
      className={clsx(
        styles[`h${tagLevel}`],
        margin && marginClasses[classLevel],
        className,
        styles.heading
      )}
      {...props.tagProps}
    >
      {children}
    </Tag>
  );
}
