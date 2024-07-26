import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/app/components/headers/header';

const meta: Meta<typeof Header> = {
  title: 'Headers/SimpleSmallHeader',
  component: Header,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
  },
};
