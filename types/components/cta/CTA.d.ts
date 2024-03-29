import React from 'react';
import { PropsWithChildren } from 'react';
type Props = {
    headline?: string | null;
    href?: string | null;
    ctaText?: string | null;
    colorPalette?: string | null;
    className?: string;
};
export default function CTA(props: PropsWithChildren<Props>): React.JSX.Element;
export {};
