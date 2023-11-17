import React from 'react';
import { CSSProperties, PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    className?: string;
    style?: CSSProperties;
    withYMargin?: boolean;
}>;
export default function PageSectionContainer(props: Props): React.JSX.Element;
export {};
