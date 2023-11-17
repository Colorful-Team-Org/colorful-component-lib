import React from 'react';
import { PropsWithChildren } from 'react';

export default function CardGrid(props: PropsWithChildren<any>) {
  return (
    <div>
      <div className="my-8 mb-16 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {props.children}
      </div>
    </div>
  );
}
