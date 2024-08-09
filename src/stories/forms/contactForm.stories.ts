import type { Meta, StoryObj } from '@storybook/react';
import ContactForm from '@/app/components/forms/contactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Forms/Copy With Call To Action',
  component: ContactForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  args: {
  },
};
