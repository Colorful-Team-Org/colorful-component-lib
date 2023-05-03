import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import Image, { ImageProps } from '../Image';
// import { CtfImage, CtfRichtext } from 'features/contentful-api/graphql/contentful-graphql-types';
// import { RichText } from 'features/ctf-richtext/components/RichText';
import { Maybe } from 'utils/typing-utils';
import Button from '../buttons/Button';

export interface ColorConfig {
  textColorClass: string;
  backgroundColor: string;
  inverted?: boolean;
}

interface Props {
  headline?: Maybe<string>;
  image?: Maybe<ImageProps>;
  cta?: Maybe<{
    text: string;
    href?: string;
  }>;
  fullHeight?: boolean;
  inverted?: boolean;
  className?: string;
}

export default function PageHero(props: PropsWithChildren<Props>) {
  const textColor = props.inverted ? 'text-white' : 'text-black';
  return (
    <div
      className={clsx(
        `relative overflow-hidden pt-8 sm:pb-20 sm:pt-16 lg:py-48`,
        props.fullHeight && `md:h-[calc(100vh-var(--header-height))]`,
        props.className
      )}
    >
      <div className="absolute left-0 top-0 z-10 hidden h-full w-full sm:block">
        {props.image && (
          <Image className="absolute inset-0 h-full w-full object-cover" {...props.image} />
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
          <h2 className={clsx('text-4xl font-bold tracking-tight', textColor)}>{props.headline}</h2>
          <div className={textColor}>{props.children}</div>
          {/* // <RichText
            //   {...props.body}
            //   className={clsx('mx-auto mt-5', props.colorConfig?.textColorClass)}
            //   paragraphClassName="text-lg sm:text-xl"
            //   entryId={props.entryId}
            //   fieldId="bodyText"
            // /> */}
          {!!props.cta && (
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Button inverted={props.inverted}>
                  <a href={props.cta.href || '#'}>{props.cta.text}</a>
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
