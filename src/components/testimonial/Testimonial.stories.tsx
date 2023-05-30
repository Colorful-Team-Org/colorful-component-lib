import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Testimonial from './Testimonial';
import logo from '../../stories/assets/colorful-coin-logo.svg';

const meta = {
  component: Testimonial,
  title: 'Components/Testimonial',
  args: {
    children: 'This is the content section of the Testimonial component',
    logo: {
      src: logo,
      alt: 'Colorful Coin Logo',
    },
    // backgroundColor: '#f3f4f6'
    backgroundColor: '#dddddd',
    footer: <>Footer content</>,
  },
} satisfies Meta<typeof Testimonial>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => (
    <div className="cful-cta-root mx-auto flex max-w-screen-lg items-center justify-center">
      <Testimonial {...args} />
    </div>
  ),
};
