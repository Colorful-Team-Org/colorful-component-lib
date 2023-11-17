import React from 'react';
import { ImageProps } from '../image/Image';
import { PropsWithChildren } from 'react';
type Props = {
    headline?: string;
    headlineTagProps?: any;
    overline?: string;
    overlineTagProps?: any;
    className?: string;
    transparent?: boolean;
    image?: ImageProps;
    imageTagProps?: any;
    childrenTagProps?: any;
};
export default function HeaderSection(props: PropsWithChildren<Props>): React.JSX.Element;
export {};
