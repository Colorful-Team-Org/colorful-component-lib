import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    size: {
      defaultValue: 'medium',
      control: {
        type: 'select',
        default: 'medium',
      },
      options: ['small', 'medium', 'large'],
    },
    href: {
      defaultValue: null,
      control: {
        type: 'text',
        default: null,
      },
    },
  },
  args: {
    inverted: true,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => <Button {...args}>Button label</Button>,
};
