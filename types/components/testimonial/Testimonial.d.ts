import React from 'react';
import { PropsWithChildren, ReactElement } from 'react';
import { ImageProps } from '../image/Image';
type Props = {
    logo?: ImageProps;
    logoTagProps?: any;
    footer?: ReactElement;
    footerTagProps?: any;
    backgroundColor?: string;
    textColor?: string;
    textCentered?: boolean;
    childrenTagProps?: any;
};
export default function Testimonial(props: PropsWithChildren<Props>): React.JSX.Element;
export {};
