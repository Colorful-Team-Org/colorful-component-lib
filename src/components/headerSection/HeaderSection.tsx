/* Template from https://tailwindui.com/components/marketing/sections/header */
import React from 'react';
import clsx from 'clsx';
import Image, { ImageProps } from '../image/Image';
import { PropsWithChildren } from 'react';
import { Heading } from '../heading';

type Props = {
  headline?: string;
  headlineTagProps?: any;
  overline?: string;
  overlineTagProps?: any;
  className?: string;
  transparent?: boolean;
  image?: ImageProps;
  imageTagProps?: any;
  childrenTagProps?: any;
};
export default function HeaderSection(props: PropsWithChildren<Props>) {
  // const vSpacingClass = !!props.transparent ? `my-16 sm:my-24` : `py-16 sm:py-24`;
  return (
    <div
      className={clsx(
        `relative flex min-h-[256px] items-center overflow-hidden py-8 font-sans md:min-h-headersection md:py-0`,
        !props.transparent && 'bg-gray-100',
        props.className
      )}
    >
      {props.image?.src && (
        <Image
          className="full-w absolute left-0 top-0 z-0 object-cover"
          loadingSkeleton
          fill
          sizes="100vw"
          {...props.image}
          tagProps={props.imageTagProps}
        />
      )}
      {/* <div className={clsx('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative', vSpacingClass)}> */}
      <div className={clsx('relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8')}>
        <div>
          {!!props.overline && (
            <h3 className="text-lg font-semibold text-gray-900" {...props.overlineTagProps}>
              {props.overline}
            </h3>
          )}
          {!!props.headline && (
            <Heading
              lvl={2}
              className="mt-1 text-4xl font-bold tracking-tight text-gray-900"
              tagProps={props.headlineTagProps}
            >
              {props.headline}
            </Heading>
          )}
          {!!props.children &&
            (typeof props.children === 'string' ? (
              <p className="mt-5 max-w-xl text-xl text-gray-500" {...props.childrenTagProps}>
                {props.children}
              </p>
            ) : (
              props.children
            ))}
        </div>
      </div>
    </div>
  );
}
