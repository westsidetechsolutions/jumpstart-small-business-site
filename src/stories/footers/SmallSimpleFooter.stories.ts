import type { Meta, StoryObj } from '@storybook/react';
import Footer from '@/app/components/footers/footer';

const meta: Meta<typeof Footer> = {
  title: 'Footer/SimpleSmallFooter',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
  },
};
