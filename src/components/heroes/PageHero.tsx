import clsx from 'clsx';
import { MouseEventHandler, PropsWithChildren } from 'react';
import Image, { ImageProps } from '../Image';
// import { CtfImage, CtfRichtext } from 'features/contentful-api/graphql/contentful-graphql-types';
// import { RichText } from 'features/ctf-richtext/components/RichText';
import Button from '../buttons/Button';
import Heading from '../typo/Heading';

export interface ColorConfig {
  textColorClass: string;
  backgroundColor: string;
  inverted?: boolean;
}

interface Props {
  headline?: string;
  headlineTagProps?: any;
  image?: Omit<ImageProps, 'sizes'>;
  imageTagProps?: any;
  cta?: {
    text: string;
    href?: string;
  };
  ctaTagProps?: any;
  childrenTagProps?: any;
  fullHeight?: boolean;
  inverted?: boolean;
  className?: string;
  onLinkClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function PageHero(props: PropsWithChildren<Props>) {
  const textColor = props.inverted ? 'text-white' : 'text-black';
  return (
    <div
      className={clsx(
        `cful-pagehero-root relative overflow-hidden pt-8 font-sans sm:pb-20 sm:pt-16 lg:py-48`,
        props.fullHeight && `md:h-screen`,
        props.className
      )}
    >
      <div className="absolute left-0 top-0 z-10 hidden h-full w-full sm:block">
        {props.image && (
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            sizes="100vw"
            {...props.image}
            tagProps={props.imageTagProps}
          />
        )}
        {/* <ImageAsset
            className="absolute inset-0 h-full w-full object-cover"
            {...props.image}
            priority
            fieldId="image"
            entryId={props.entryId}
            locale={props.locale}
          /> */}
      </div>
      <div className="relative z-20 mx-auto grid h-full w-full max-w-6xl grid-cols-1 items-center gap-8 sm:grid-cols-2">
        {/* Text content and cta button */}
        <div className="px-4 md:px-8 lg:pr-4 xl:pr-16">
          <Heading lvl={2} margin className={textColor} tagProps={props.headlineTagProps}>
            {props.headline}
          </Heading>
          <div className={textColor} {...props.childrenTagProps}>
            {props.children}
          </div>
          {/* // <RichText
            //   {...props.body}
            //   className={clsx('mx-auto mt-5', props.colorConfig?.textColorClass)}
            //   paragraphClassName="text-lg sm:text-xl"
            //   entryId={props.entryId}
            //   fieldId="bodyText"
            // /> */}
          {!!props.cta && (
            <div
              className="mt-10 sm:flex sm:justify-center lg:justify-start"
              {...props.ctaTagProps}
            >
              <div className="rounded-md shadow">
                <Button inverted={props.inverted}>
                  <a href={props.cta.href || '#'} onClick={props.onLinkClick}>
                    {props.cta.text}
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* image for mobile */}
        {props.image && (
          <Image
            className="aspect-16/10 sm:aspect-auto w-full object-cover sm:hidden"
            {...props.image}
            sizes="100vw"
            tagProps={props.imageTagProps}
          />
        )}
        {/* <ImageAsset
            className="w-full sm:hidden aspect-16/10 sm:aspect-auto object-cover"
            {...props.image}
            sizes="100vw"
            priority
          /> */}
      </div>
    </div>
  );
}
