import clsx from 'clsx';
import { PropsWithChildren, useMemo } from 'react';
import color from 'color';

export const textShadowCls = `[text-shadow:0_4px_8px_rgba(0,0,0,0.15)]`;

type Props = {
  headline?: string;
  headlineTagProps?: any;
  href?: string;
  ctaText?: string;
  ctaTextTagProps?: any;
  backgroundColor?: string;
  textcolorClass?: string;
  childrenTagProps?: any;
  className?: string;
};

export default function Cta(props: PropsWithChildren<Props>) {
  // console.log('Cta', props);
  const isInverted = useMemo(
    () => props.backgroundColor && color(props.backgroundColor).isDark(),
    [props.backgroundColor]
  );

  const textColorClass = props.textcolorClass ?? isInverted ? 'text-white' : 'text-gray-900';

  const buttonColorClasses = isInverted
    ? `bg-white text-cf-primary hover:bg-gray-200`
    : `bg-cf-primary text-white hover:bg-cf-primary-active`;

  return (
    <div
      className={clsx(
        `cful-cta-root bg-primary-700 w-full font-sans`,
        textColorClass,
        props.className
      )}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        {props.headline && (
          <h2
            className={clsx(
              'text-3xl font-bold tracking-tight sm:text-4xl',
              isInverted && textShadowCls,
              props.backgroundColor
            )}
            {...props.headlineTagProps}
          >
            <span className="block">{props.headline}</span>
            {/* <span className="block">Start using our app today.</span> */}
          </h2>
        )}
        {!!props.children && (
          <div
            className={clsx('mt-4 text-lg leading-6', textColorClass)}
            {...props.childrenTagProps}
          >
            {props.children}
          </div>
        )}
        {props.ctaText && props.href && (
          <a
            className={clsx(
              `mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium sm:w-auto`,
              buttonColorClasses
            )}
            href={props.href}
            {...props.ctaTextTagProps}
          >
            {props.ctaText}
          </a>
        )}
      </div>
    </div>
  );
}
