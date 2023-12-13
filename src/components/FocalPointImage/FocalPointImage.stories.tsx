import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import FocalPointImage from './FocalPointImage';

const meta = {
  component: FocalPointImage,
  title: 'Components/FocalPointImage',
  args: {
    alt: 'This is the alt text',
    src: 'https://placekitten.com/1920/1080',
    width: 1920,
    height: 1080,
    focalPoint: { x: 100, y: 300 },
    fill: true,
  },
} satisfies Meta<typeof FocalPointImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => (
    <div className="h-[300px] w-full overflow-hidden p-4">
      <FocalPointImage {...args} />
    </div>
  ),
};
