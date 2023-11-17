import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AuthorCard from './AuthorCard';

const meta = {
  component: AuthorCard,
  title: 'Components/AuthorCard',
  args: {
    name: 'John Doe',
    role: 'Software Engineer',
    image: {
      src: 'https://picsum.photos/1024/768',
    },
  },
} satisfies Meta<typeof AuthorCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => <AuthorCard {...args} />,
};
