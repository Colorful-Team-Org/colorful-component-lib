import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CTA from './CTA';

const meta = {
  component: CTA,
  title: 'Components/CTA',
  args: {
    headline: 'This is a headline',
    children: 'This is the content section of the CTA component',
    ctaText: 'Button',
    href: '#',
    // backgroundColor: '#f3f4f6'
    backgroundColor: '#dddddd',
  },
} satisfies Meta<typeof CTA>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => (
    <div className="cful-cta-root mx-auto flex max-w-screen-lg items-center justify-center">
      <CTA {...args} />
    </div>
  ),
};
