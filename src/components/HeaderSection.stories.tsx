import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import HeaderSection from './HeaderSection';

const meta = {
  component: HeaderSection,
  args: {
    headline: 'This is a headline',
    overline: 'This is an overline',
    children: 'This is the content section of the HeaderSection component',
    image: {
      src: 'https://picsum.photos/1280/768',
    },
  },
} satisfies Meta<typeof HeaderSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => (
    <HeaderSection {...args}>This is the content section of the Hero component</HeaderSection>
  ),
};
