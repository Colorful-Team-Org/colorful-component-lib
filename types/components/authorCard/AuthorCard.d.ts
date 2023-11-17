import React from 'react';
import { ImageProps } from '../image/Image';
export type AuthorProps = {
    name: string;
    role?: string | null;
    image: Omit<ImageProps, 'sizes'>;
    className?: string;
};
export default function AuthorCard(props: AuthorProps): React.JSX.Element;
