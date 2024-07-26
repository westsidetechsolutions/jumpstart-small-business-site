import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/app/components/pieces/Button';

const meta: Meta<typeof Button> = {
  title: 'Pieces/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    link: '#',
    text: 'Click me!',
  },
};
