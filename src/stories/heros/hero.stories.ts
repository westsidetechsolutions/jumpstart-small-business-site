import type { Meta, StoryObj } from '@storybook/react';
import Hero from '@/app/components/heros/hero';

const meta: Meta<typeof Hero> = {
  title: 'Heros/Hero',
  component: Hero,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
  },
};
