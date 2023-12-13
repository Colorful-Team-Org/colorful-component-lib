import React from 'react';
import { PropsWithChildren } from 'react';
type Props = {
    headline?: string | null;
    href?: string | null;
    ctaText?: string | null;
    colorPalette?: string | null;
    className?: string;
};
declare const CallToAction: (props: PropsWithChildren<Props>) => React.JSX.Element;
export default CallToAction;
