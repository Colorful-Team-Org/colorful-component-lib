import React from 'react';
import { ImageProps } from '../image/Image';
export type AuthorProps = {
    name: string;
    role?: string | null;
    image?: Omit<ImageProps, 'sizes'>;
    className?: string;
    simple?: boolean;
};
export default function AuthorCard(props: AuthorProps): string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;
