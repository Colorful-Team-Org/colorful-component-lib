import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PageHero from './PageHero';
// import '../../stories/tailwindcss.css';

const meta = {
  component: PageHero,
  title: 'Components/PageHero',
  argTypes: {
    heroSize: {
      name: 'heroSize',
      description:
        "If this is `null` it's full screen, if it's `true` it's full screen, if it's `false` it's fixed height",
      control: {
        type: 'boolean',
        default: null,
      },
    },
    imageStyle: {
      name: 'imageStyle',
      description:
        'If this is `null` or `false` it will be full width, if it is `true` it will be partial',
      control: {
        type: 'boolean',
        default: null,
      },
    },
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
    image: {
      url: 'https://picsum.photos/1280/768',
      contentType: 'image/jpeg',
      width: 1280,
      height: 768,
    },
    focalPoint: { focalPoint: { x: 100, y: 300 } },
    imageStyle: null,
    colorPalette: null,
  },
} satisfies Meta<typeof PageHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: args => <PageHero {...args}>This is the content section of the Hero component</PageHero>,
};
