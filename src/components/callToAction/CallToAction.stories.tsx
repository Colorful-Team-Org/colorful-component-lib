import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CallToAction from './CallToAction';

const meta = {
  component: CallToAction,
  title: 'Components/CTA',
  argTypes: {
    colorPalette: {
      control: {
        type: 'select',
        default: null,
      },
      options: [
        null,
        '1. White (#FFFFFF)',
        '2. Light Gray (#F4F4F4)',
        '3. Gray (#BABABA)',
        '4. Black (#000000)',
        '5. Midnight Green (#0C445C)',
        '6. Vermilion Red (#EA6558)',
        '7. Gold Sand (#E8B894)',
        '8. Pine Green (#118367)',
        '9. Yellow (#F7C35C)',
      ],
    },
    ctaText: {
      type: 'string',
    },
  },
  args: {
    headline: 'This is a headline',
    children: 'This is the content section of the CTA component',
    ctaText: 'Button',
    href: '#',
  },
} satisfies Meta<typeof CallToAction>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => <CallToAction {...args} />,
};
