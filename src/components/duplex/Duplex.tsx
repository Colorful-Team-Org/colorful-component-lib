import clsx from 'clsx';
import { Heading } from '../typo';
import { MouseEventHandler, PropsWithChildren } from 'react';
import Image, { ImageProps } from '../Image';
import PageSectionContainer from '../PageSectionContainer';
import Button from '../buttons/Button';
import DotsBackground from './DotsBackground';
import color from 'color';

type Props = {
  headline: string;
  headlineTagProps?: any;
  childrenTagProps?: any;
  cta?: {
    text: string;
    href?: string;
  };
  ctaTagProps?: any;
  image: ImageProps;
  imageTagProps?: any;
  alignImageLeft?: boolean;
  backgroundColor?: string;
  onLinkClick?: MouseEventHandler<HTMLAnchorElement>;
};
export default function Duplex(props: PropsWithChildren<Props>) {
  // console.log('Duplex', props);
  const {
    backgroundColor,
    alignImageLeft,
    headline,
    headlineTagProps,
    childrenTagProps,
    cta,
    ctaTagProps,
    image,
    imageTagProps,
    onLinkClick,
    children,
  } = props;

  const isInverted = backgroundColor && color(backgroundColor).isDark();
  const textColorClass = isInverted ? 'text-white' : 'text-gray-900';

  return (
    <PageSectionContainer
      withYPadding={!!backgroundColor}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className="relative px-4 sm:px-6 lg:px-8">
        <DotsBackground
          className={clsx(
            `absolute hidden -translate-y-1/4 transform lg:block`,
            alignImageLeft ? `left-0` : `right-0`
          )}
          // dotsColorClassName={clsx(isInverted && 'fill-gray-500')}
          height={600}
        />
        <div
          className={clsx(
            'container relative z-20 mx-auto flex max-w-6xl flex-col-reverse',
            !alignImageLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
          )}
        >
          <div
            className={clsx(
              'sm:w-1/2',
              alignImageLeft ? 'sm:pl-10' : 'sm:pr-10',
              'flex',
              'items-center'
            )}
          >
            <div className="mt-4 sm:mt-0">
              {headline && (
                <div className="max-w-3xl">
                  <Heading lvl={2} className={textColorClass} tagProps={headlineTagProps}>
                    {headline}
                  </Heading>
                </div>
              )}
              <div className={clsx('mt-4', textColorClass)} {...childrenTagProps}>
                {children}
              </div>
              {!!cta && (
                <div className="mt-8" {...ctaTagProps}>
                  <Button>
                    {cta.href ? (
                      <a href={cta.href} title={cta.text} onClick={onLinkClick}>
                        {cta.text}
                      </a>
                    ) : (
                      cta.text
                    )}
                  </Button>
                  {/* <PageLink {...targetPage}>{ctaText || targetPage.slug}</PageLink> */}
                </div>
              )}
            </div>
          </div>
          <div className={clsx('sm:w-1/2', alignImageLeft ? 'sm:pr-10' : 'sm:pl-10')}>
            {image && <Image className="w-full rounded-xl" {...image} tagProps={imageTagProps} />}
          </div>
        </div>
      </div>
    </PageSectionContainer>
  );
}
