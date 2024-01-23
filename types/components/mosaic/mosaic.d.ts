import React, { PropsWithChildren } from 'react';
export type MosaicProps = {
    anchorRight?: boolean | null;
    headline?: string | null;
    className?: string;
};
declare const Mosaic: (props: PropsWithChildren<MosaicProps>) => React.JSX.Element;
export default Mosaic;
