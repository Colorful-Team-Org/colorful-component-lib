import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BlogPostCard from './BlogPostCard';

const meta = {
  component: BlogPostCard,
  title: 'Components/BlogPostCard',
  args: {
    postName: 'Blog post card',
    image: {
      src: 'https://picsum.photos/1024/768',
    },
    category: 'Blog category',
    author: {
      name: 'Author name',
      avatar: {
        src: 'https://picsum.photos/1024/768',
      },
    },
  },
} satisfies Meta<typeof BlogPostCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => (
    <BlogPostCard {...args}>This is the content section of the Hero component</BlogPostCard>
  ),
};
export const Inverted: Story = {
  args: {},
  render: args => (
    <BlogPostCard {...args}>This is the content section of the Hero component</BlogPostCard>
  ),
};
