import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

type Props = {
  label?: string;
  options: {
    value: string;
    label?: string;
  }[];
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  inverted?: boolean;
  /** Add classnames for text, border and/or background */
  textColorClassName?: string;
  className?: string;
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export default function Select(props: Props) {
  const { className, label, options, inverted, ...selectProps } = props;
  const colorClassNames =
    props.textColorClassName ?? inverted
      ? 'text-white border-white bg-transparent'
      : 'text-cf-primary border-cf-primary bg-transparent';
  return (
    <fieldset className={clsx(`w-full`, props.className)}>
      {label && (
        <label htmlFor="language" className="sr-only">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={clsx(
            colorClassNames,
            'block w-full appearance-none rounded-md border bg-none py-2 pl-3 pr-10 text-base focus:border-cf-primary-active focus:outline-none sm:text-sm'
          )}
          {...selectProps}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label ?? option.value}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <ChevronDownIcon className={clsx(colorClassNames, 'h-4 w-4')} aria-hidden="true" />
        </div>
      </div>
    </fieldset>
  );
}
