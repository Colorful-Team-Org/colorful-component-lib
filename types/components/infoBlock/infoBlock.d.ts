import React, { PropsWithChildren } from 'react';
import { ImageProps } from '../image/Image';
export type InfoBlockProps = PropsWithChildren<{
    headline?: string;
    image?: Omit<ImageProps, 'sizes'> | null;
    imageRound?: boolean;
    center?: boolean;
    card?: boolean;
}>;
declare const InfoBlock: (props: InfoBlockProps) => React.JSX.Element;
export default InfoBlock;
