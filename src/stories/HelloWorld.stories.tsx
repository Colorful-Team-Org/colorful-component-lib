import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import HelloWorld from '../components/HelloWorld';
import './tailwindcss.css';

const meta = {
  component: HelloWorld,
} satisfies Meta<typeof HelloWorld>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <HelloWorld />,
};
