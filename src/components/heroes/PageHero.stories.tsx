import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PageHero from './PageHero';
// import '../../stories/tailwindcss.css';

const meta = {
  component: PageHero,
  title: 'Components/PageHero',
  argTypes: {
    headline: {
      type: 'string',
    },
  },
  args: {
    headline: 'This is a headline',
    cta: {
      text: 'This is a CTA',
      href: 'https://www.google.com',
    },
    image: {
      src: 'https://picsum.photos/1280/768',
    },
  },
} satisfies Meta<typeof PageHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    inverted: false,
  },
  render: args => <PageHero {...args}>This is the content section of the Hero component</PageHero>,
};
