import React from 'react';
import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
type Props = {
    label?: string;
    options: {
        value: string;
        label?: string;
    }[];
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    inverted?: boolean;
    /** Add classnames for text, border and/or background */
    textColorClassName?: string;
    className?: string;
} & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
export default function Select(props: Props): React.JSX.Element;
export {};
