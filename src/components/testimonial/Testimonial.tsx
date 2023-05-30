import clsx from 'clsx';
import { PropsWithChildren, ReactElement, useMemo } from 'react';
import color from 'color';
import Image, { ImageProps } from '../Image';
import PageSectionContainer from '../PageSectionContainer';

type Props = {
  // author?: AuthorProps;
  logo?: ImageProps;
  logoTagProps?: any;
  footer?: ReactElement;
  footerTagProps?: any;
  backgroundColor?: string;
  textColor?: string;
  textCentered?: boolean;
  childrenTagProps?: any;
};

export default function Testimonial(props: PropsWithChildren<Props>) {
  const isInverted = useMemo(
    () => props.backgroundColor && color(props.backgroundColor).isDark(),
    [props.backgroundColor]
  );

  const textColorClass = props.textColor ?? isInverted ? 'text-white' : 'text-gray-900';

  return (
    <PageSectionContainer
      className="cful-testimonial-root pb-20 pt-16 font-sans lg:pb-28 lg:pt-24"
      withYMargin={!props.backgroundColor}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-0">
        {!!props.logo && (
          <Image
            className={clsx('mb-8 h-12 w-auto max-w-full', props.textCentered && 'mx-auto')}
            {...props.logo}
            sizes={props.logo.sizes ?? '100px'}
          />
        )}
        <blockquote className={clsx(`mt-6 font-sans`, textColorClass)}>
          <div className={clsx('mt-6 text-2xl font-medium', !!props.textCentered && `text-center`)}>
            {props.children}
          </div>
        </blockquote>
        {props.footer && (
          <footer className={clsx('mt-6 font-sans', textColorClass)}>{props.footer}</footer>
        )}
      </div>
    </PageSectionContainer>
  );
}
