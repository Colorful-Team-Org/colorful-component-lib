import React from 'react';
import { PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    size?: 'small' | 'medium' | 'large';
    inverted?: boolean;
    className?: string;
    href?: string | null;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}>;
export default function Button(props: Props): React.JSX.Element;
export {};
