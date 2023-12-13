import React from 'react';
import { PropsWithChildren } from 'react';
import { ImageProps } from '../../image/Image';
interface Props {
    headline: string | null;
    image: Omit<ImageProps, 'sizes'> | null;
    ctaText: string | null;
    heroSize: boolean | null;
    className?: string;
    focalPoint: {
        x: number;
        y: number;
    } | null;
    imageStyle: boolean | null;
    colorPalette?: string;
}
export default function PageHero(props: PropsWithChildren<Props>): React.JSX.Element;
export {};
