import React from 'react';
import { PropsWithChildren } from 'react';
export declare const textShadowCls = "[text-shadow:0_4px_8px_rgba(0,0,0,0.15)]";
type Props = {
    headline?: string;
    headlineTagProps?: any;
    href?: string;
    ctaText?: string;
    ctaTextTagProps?: any;
    backgroundColor?: string;
    textcolorClass?: string;
    childrenTagProps?: any;
    className?: string;
};
export default function Cta(props: PropsWithChildren<Props>): React.JSX.Element;
export {};
