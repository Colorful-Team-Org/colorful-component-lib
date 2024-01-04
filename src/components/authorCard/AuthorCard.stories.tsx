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
      url: 'https://picsum.photos/1024/768',
      width: 1024,
      height: 768,
      contentType: 'image/jpeg',
    },
  },
} satisfies Meta<typeof AuthorCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => <AuthorCard {...args} />,
};
