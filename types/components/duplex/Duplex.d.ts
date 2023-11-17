import React from 'react';
import { MouseEventHandler, PropsWithChildren } from 'react';
import { ImageProps } from '../image/Image';
type Props = {
    headline: string;
    headlineTagProps?: any;
    childrenTagProps?: any;
    cta?: {
        text: string;
        href?: string;
    };
    ctaTagProps?: any;
    image: Omit<ImageProps, 'sizes'>;
    imageTagProps?: any;
    alignImageLeft?: boolean;
    backgroundColor?: string;
    onLinkClick?: MouseEventHandler<HTMLAnchorElement>;
};
export default function Duplex(props: PropsWithChildren<Props>): React.JSX.Element;
export {};
