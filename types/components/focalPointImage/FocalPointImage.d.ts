import React from 'react';
type Props = {
    alt: string;
    width: number;
    height: number;
    src: string;
    focalPoint: {
        x: number;
        y: number;
    } | null;
    fill: boolean;
    className?: string;
};
declare const FocalPointImage: (props: Props) => React.JSX.Element;
export default FocalPointImage;
