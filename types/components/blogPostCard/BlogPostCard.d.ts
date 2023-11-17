import React from 'react';
import { ImageProps } from '../image/Image';
import { MouseEventHandler } from 'react';
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
export default function BlogPostCard(props: Props): React.JSX.Element;
export {};
