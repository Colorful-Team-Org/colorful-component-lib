import React from 'react';
import { PropsWithChildren } from 'react';
export type PageSectionProps = PropsWithChildren<{
    className?: string;
    colorPalette?: string | null;
    useDefaultStyles?: boolean;
}>;
export default function PageSectionContainer(props: PageSectionProps): React.JSX.Element;
