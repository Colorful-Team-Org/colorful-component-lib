import React from 'react';
import { CSSProperties } from 'react';
export interface ImageProps {
    title?: string;
    src?: string;
    srcSet?: string;
    sizes?: string;
    alt?: string;
    width?: number;
    height?: number;
    unoptimized?: boolean;
    focalPoint?: {
        x: number;
        y: number;
    };
    imageStyle?: CSSProperties;
    fill?: boolean;
    loadingSkeleton?: boolean;
    className?: string;
    tagProps?: any;
    loader?: (options: {
        src: string;
        width: number;
        quality?: number;
    }) => string;
}
export default function Image(props: ImageProps): React.JSX.Element | null;
declare const SRC_SET_DEFAULT_OPTIONS: {
    widths: number[];
    quality: number;
};
export declare function createSrcSet(src: string, loader: Required<ImageProps>['loader'], options?: Partial<typeof SRC_SET_DEFAULT_OPTIONS>): string;
export declare const breakpoints: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
};
export declare function minBreakpoint(point: keyof typeof breakpoints): string;
export declare function maxBreakpoint(point: keyof typeof breakpoints): string;
type WidthUnit = `${number}${'vw' | 'px'}`;
type ResponsiveImgSizes = [keyof typeof breakpoints, WidthUnit][];
export declare function createImageSizes(sizes: ResponsiveImgSizes, fallback?: WidthUnit): string;
export {};
