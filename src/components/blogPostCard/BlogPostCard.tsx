import clsx from 'clsx';
import Image, { ImageProps, createImageSizes } from '../image/Image';
import { MouseEventHandler, useMemo } from 'react';

/* This example requires Tailwind CSS v2.0+ */

// TODO image scalling (file size optimization)
// TODO Link for categoryName(?)

type Props = {
  image?: ImageProps;
  href?: string;
  category?: string;
  categoryHref?: string;
  categoryTagProps?: any;
  postName: string;
  postNameTagProps?: any;
  author?: {
    name: string;
    avatar?: ImageProps;
    href?: string;
    tagProps?: any;
  };
  publishedDate?: string;
  className?: string;
  tagProps?: any;
  onLinkClick?: MouseEventHandler<HTMLAnchorElement>;
};
export default function BlogPostCard(props: Props) {
  // console.log('BlogPostCard', props);
  const { href = '#' } = props;

  const imageSizes = useMemo(
    () =>
      // TODO check if this sizes are correct
      props.image?.sizes ??
      createImageSizes(
        [
          ['sm', '100vw'],
          ['md', '50vw'],
        ],
        '33vw'
      ),
    [props.image?.sizes]
  );
  // const lang = locale ? locale.split('-')[0] : 'en';

  return (
    <div
      className={clsx(
        'flex flex-col overflow-hidden rounded-lg font-sans shadow-lg',
        props.className
      )}
      {...props.tagProps}
    >
      <div className="flex-shrink-0">
        {props.image && (
          <a href={href}>
            <Image {...props.image} sizes={imageSizes} />
          </a>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          {props.category && (
            <p className="text-sm font-medium" {...props.categoryTagProps}>
              {props.categoryHref ? (
                <a
                  className="hover:underline"
                  href={props.categoryHref}
                  onClick={props.onLinkClick}
                >
                  {props.category}
                </a>
              ) : (
                props.category
              )}
            </p>
          )}
          <a className="mt-2 block" href={href} onClick={props.onLinkClick}>
            <p className="text-xl font-semibold text-gray-900" {...props.postNameTagProps}>
              {props.postName}
            </p>
          </a>
        </div>
        {props.author && (
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{props.author.name}</span>
              {props.author.avatar && (
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  <Image className="h-11 w-11" sizes="100px" {...props.author.avatar} />
                </div>
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900" {...props.author.tagProps}>
                {props.author.name}
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={props.publishedDate}>{props.publishedDate}</time>
                {/* <span aria-hidden="true">&middot;</span> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
