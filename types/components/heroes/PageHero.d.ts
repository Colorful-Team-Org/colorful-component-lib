import React from 'react';
import { MouseEventHandler, PropsWithChildren } from 'react';
import { ImageProps } from '../image/Image';
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
export default function PageHero(props: PropsWithChildren<Props>): React.JSX.Element;
export {};
