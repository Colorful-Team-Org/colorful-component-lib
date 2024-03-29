import React, { PropsWithChildren } from 'react';
import { ImageProps } from '../image/Image';
export type InfoBlockProps = PropsWithChildren<{
    headline?: string;
    image?: Omit<ImageProps, 'sizes'> | null;
    imageShape?: 'icon' | 'avatar' | 'card';
    center?: boolean;
    card?: boolean;
    className?: string;
}>;
declare const InfoBlock: (props: InfoBlockProps) => React.JSX.Element;
export default InfoBlock;
