/* Template from https://tailwindui.com/components/marketing/sections/header */

import clsx from 'clsx';
import Image, { ImageProps } from './Image';
import { PropsWithChildren } from 'react';

type Props = {
  headline?: string;
  headlineFieldProps?: any;
  overline?: string;
  overlineFieldProps?: any;
  className?: string;
  transparent?: boolean;
  image?: ImageProps;
  imageFieldProps?: any;
};
export default function HeaderSection(props: PropsWithChildren<Props>) {
  // const vSpacingClass = !!props.transparent ? `my-16 sm:my-24` : `py-16 sm:py-24`;
  console.log(props);
  return (
    <div
      className={clsx(
        `md:min-h-headersection relative flex min-h-[256px] items-center py-8 md:py-0 overflow-hidden`,
        !props.transparent && 'bg-gray-100',
        props.className
      )}
    >
      {props.image?.src && (
        <Image
          className="full-w z-0 object-cover absolute top-0 left-0"
          loadingSkeleton
          fill
          {...props.image}
          {...props.imageFieldProps}
        />
      )}
      {/* <div className={clsx('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative', vSpacingClass)}> */}
      <div className={clsx('relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8')}>
        <div>
          {!!props.overline && (
            <h3 className="text-primary-600 text-lg font-semibold" {...props.overlineFieldProps}>
              {props.overline}
            </h3>
          )}
          {!!props.headline && (
            <h2
              className="mt-1 text-4xl font-bold tracking-tight text-gray-900"
              {...props.headlineFieldProps}
            >
              {props.headline}
            </h2>
          )}
          {!!props.children &&
            (typeof props.children === 'string' ? (
              <p className="mt-5 max-w-xl text-xl text-gray-500">{props.children}</p>
            ) : (
              props.children
            ))}
        </div>
      </div>
    </div>
  );
}
