import type { Meta, StoryObj } from '@storybook/react';
import PricingIcons from '@/app/components/callToActions/pricing/pricingIcons';

const meta: Meta<typeof PricingIcons> = {
  title: 'Call To Actions/Pricing/PricingIcons',
  component: PricingIcons,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PricingIcons>;

export const Default: Story = {
  args: {
  },
};
