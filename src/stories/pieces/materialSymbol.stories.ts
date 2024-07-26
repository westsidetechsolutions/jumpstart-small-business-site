import type { Meta, StoryObj } from '@storybook/react';
import MaterialSymbol from '@/app/components/pieces/materialSymbol';

const meta: Meta<typeof MaterialSymbol> = {
  title: 'Pieces/Material Symbol',
  component: MaterialSymbol,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof MaterialSymbol>;

export const Check: Story = {
  args: {
    symbol: "check",
  },
};

export const CheckLarge: Story = {
    args: {
      symbol: 'check',
      size: 48,
    },
  };

export const CheckLargePrimaryColor: Story = {
  args: {
    symbol: "check",
    size: 48,
    classes: "text-primary"
  }
};