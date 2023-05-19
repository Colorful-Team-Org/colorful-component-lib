import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardGrid from './CardGrid';
import BlogPostCard from '../blog/BlogPostCard';

const meta = {
  component: CardGrid,
  title: 'Components/CardGrid',
  args: {},
} satisfies Meta<typeof CardGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

const cards = new Array(6).fill(0).map((_, i) => i + 1);

export const Primary: Story = {
  render: args => (
    <CardGrid {...args}>
      {cards.map(card => (
        <BlogPostCard
          postName={`Blog post ${card}`}
          category="Category"
          image={{ src: `https://picsum.photos/seed/${Math.random()}/1024/768` }}
        />
      ))}
    </CardGrid>
  ),
};
