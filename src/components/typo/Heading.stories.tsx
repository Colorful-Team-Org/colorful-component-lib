import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta = {
  component: Heading,
  argTypes: {
    lvl: {
      control: {
        disable: true,
      },
    },
    tagLvl: {
      control: {
        disable: true,
      },
    },
    classLvl: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    margin: true,
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: args => (
    <div>
      <Heading lvl={1} {...args}>
        Headline 1
      </Heading>
      <Heading lvl={2} {...args}>
        Headline level 2
      </Heading>
      <Heading lvl={3} {...args}>
        Headline level 3
      </Heading>
      <Heading lvl={4} {...args}>
        Headline level 4
      </Heading>
      <Heading lvl={5} {...args}>
        Headline level 5
      </Heading>
      <Heading lvl={6} {...args}>
        Headline level 6
      </Heading>
    </div>
  ),
};
