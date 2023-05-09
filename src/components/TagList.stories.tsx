import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TagList from './TagList';

const meta = {
  component: TagList,
} satisfies Meta<typeof TagList>;

export default meta;

type Story = StoryObj<typeof meta>;

const values = ['Awesome', 'Cool', 'Nice', 'Great', 'Amazing', 'Fantastic'];

export const Primary: Story = {
  args: {
    items: values.map(v => ({ id: v, name: v })),
  },
  render: args => <TagList {...args} />,
};
