import React from 'react';
import { PropsWithChildren } from 'react';
type Level = 1 | 2 | 3 | 4 | 5 | 6;
interface Props {
    lvl?: Level;
    tagLvl?: Level;
    classLvl?: Level;
    margin?: boolean;
    className?: string;
    tagProps?: any;
}
export default function Heading(props: PropsWithChildren<Props>): React.JSX.Element;
export {};
