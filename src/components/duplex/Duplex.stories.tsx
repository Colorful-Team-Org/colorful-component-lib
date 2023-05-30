import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Duplex from './Duplex';

const meta = {
  component: Duplex,
  title: 'Components/Duplex',
  args: {
    headline: 'This is a headline',
    children: 'This is the content section of the Duplex component',
    image: {
      src: 'https://picsum.photos/1280/768',
    },
    cta: {
      text: 'Call to action',
    },
  },
} satisfies Meta<typeof Duplex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => <Duplex {...args}>This is the content section of the Duplex component</Duplex>,
};
export const Inverted: Story = {
  args: {
    alignImageLeft: true,
    backgroundColor: '#414a50',
  },
  render: args => <Duplex {...args}>This is the content section of the Duplex component</Duplex>,
};
