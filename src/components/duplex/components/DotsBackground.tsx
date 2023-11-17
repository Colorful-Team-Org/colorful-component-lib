import React from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
  width?: number;
  height?: number;
  dotsColorClassName?: string;
};
export default function DotsBackground(props: Props) {
  // console.log('DotsBackground', props);

  const { className, width = 404, height = 784, dotsColorClassName } = props;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={'b1e6e422-73f8-40a6-b5d9-c8586e37e0e7' + dotsColorClassName}
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className={dotsColorClassName || 'fill-gray-200'}
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={width}
        height={height}
        fill={`url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7${dotsColorClassName})`}
      />
    </svg>
  );
}
