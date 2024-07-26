import CardsWithIconInCorner, { CardWithIconInCorner } from "@/app/components/features/cardWithIconInCorner";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CardsWithIconInCorner> = {
  title: "Features/CardsWithIconInCorner",
  component: CardsWithIconInCorner,
  subcomponents: { CardWithIconInCorner },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardsWithIconInCorner>;

export const Default: Story = {
  args: {
    cards: [
      {
        title: "Satisfaction Guarantee",
        symbol: "sentiment_satisfied",
        description:
          "If you're not completely satisfied with my services, I'll work with you to make it right or offer a refund within the first 30 days.",
      },
      {
        title: "Quality Guarantee",
        symbol: "verified",
        description:
          "I guarantee that your landing page and branding materials will meet the highest standards of design and functionality.",
      },
      {
        title: "No Hidden Fees Guarantee",
        symbol: "visibility_off",
        description:
          "The price you see is the price you pay. There are no surprise charges or additional costs.",
      },
      {
        title: "Customization Guarantee",
        symbol: "settings",
        description:
          "Your landing page and branding will be fully customized to reflect your unique business needs and goals.",
      },
    ],
  },
};
