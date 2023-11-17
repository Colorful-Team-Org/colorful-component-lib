import React from 'react';
import { PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    size?: 'small' | 'medium' | 'large';
    color?: 'primary';
    inverted?: boolean;
    className?: string;
}>;
export default function Button(props: Props): React.JSX.Element;
export {};
