import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Duplex from './Duplex';

const meta = {
  component: Duplex,
  title: 'Components/Duplex',
  args: {
    headline: 'This is a headline',
    children: 'This is the content section of the Duplex component',
    image: {
      url: 'https://picsum.photos/1280/768',
      width: 1280,
      height: 768,
      contentType: 'image/jpeg',
    },
    ctaText: 'Call to action',
    href: '#',
  },
  argTypes: {
    containerLayout: {
      defaultValue: false,
      control: {
        type: 'boolean',
        default: false,
      },
    },
    colorPalette: {
      defaultValue: '',
      control: {
        type: 'select',
        default: '',
      },
      options: [
        '',
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
  },
} satisfies Meta<typeof Duplex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => <Duplex {...args}>This is the content section of the Duplex component</Duplex>,
};
