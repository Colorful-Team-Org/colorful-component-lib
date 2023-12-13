import React from 'react';
import { PropsWithChildren } from 'react';
import { ImageProps } from '../image/Image';
type ContentProps = PropsWithChildren<{
    name?: string | null;
    shortDescription?: string | null;
    featuredImage?: Omit<ImageProps, 'sizes'> | null;
}>;
declare const PageContent: (props: ContentProps) => React.JSX.Element;
export default PageContent;
