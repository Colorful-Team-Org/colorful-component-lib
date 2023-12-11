import React from 'react';
import { PropsWithChildren } from 'react';
import { ImageProps } from '../../image/Image';
interface Props {
    headline?: string;
    image?: Omit<ImageProps, 'sizes'>;
    cta: {
        text: string;
        href?: string;
    };
    heroSize?: boolean;
    className?: string;
    focalPoint?: {
        x: number;
        y: number;
    };
    imageStyle?: boolean;
    colorPalette?: string;
}
export default function PageHero(props: PropsWithChildren<Props>): React.JSX.Element;
export {};
