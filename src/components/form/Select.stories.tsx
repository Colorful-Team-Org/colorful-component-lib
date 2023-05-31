import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta = {
  component: Select,
  title: 'Form/Select',
  args: {
    label: 'Super heroes',
    options: [
      {
        label: 'Batman',
        value: 'batman',
      },
      {
        label: 'Superman',
        value: 'superman',
      },
      {
        label: 'Wonder Woman',
        value: 'wonderwoman',
      },
    ],
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => (
    <div className="cful-cta-root mx-auto flex max-w-md items-center justify-center bg-slate-400">
      <div className="flex flex-col gap-4 min-h-[400px] max-w-sm items-center justify-center">
        <Select {...args} />
        <Select {...args} inverted />
      </div>
    </div>
  ),
};
