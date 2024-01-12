import React, { CSSProperties } from 'react';
import { PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    size?: 'small' | 'medium' | 'large';
    inverted?: boolean;
    className?: string;
    href?: string | null;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    style?: CSSProperties;
    LinkComponent?: PropsWithChildren<React.ForwardRefExoticComponent<any>>;
}>;
export default function Button(props: Props): React.JSX.Element;
export {};
