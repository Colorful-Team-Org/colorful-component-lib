import React, { CSSProperties } from 'react';
import { PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    size?: 'small' | 'medium' | 'large';
    inverted?: boolean;
    className?: string;
    href?: string | null;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'tertiary';
    onClick?: () => void;
    style?: CSSProperties;
    rounded?: boolean;
    LinkComponent?: PropsWithChildren<React.ForwardRefExoticComponent<any>>;
}>;
export default function Button(props: Props): React.JSX.Element;
export {};
