import React from 'react';
import { PropsWithChildren } from 'react';
import { ImageProps } from '../image/Image';
export type DuplexProps = {
    containerLayout?: boolean | null;
    buttonVariant?: 'primary' | 'secondary' | 'tertiary';
    colorPalette?: string | null;
    ctaText?: string | null;
    headline?: string | null;
    href?: string | null;
    image?: Omit<ImageProps, 'sizes'> | null;
    LinkComponent?: PropsWithChildren<React.ForwardRefExoticComponent<any>>;
    className?: string;
    useDefaultStyles?: boolean;
};
export default function Duplex(props: PropsWithChildren<DuplexProps>): React.JSX.Element;
