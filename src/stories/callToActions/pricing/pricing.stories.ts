import type { Meta, StoryObj } from '@storybook/react';
import Pricing, { PricingCard } from '@/app/components/callToActions/pricing/pricing';

const meta: Meta<typeof Pricing> = {
  title: 'Call To Actions/Pricing/Pricing',
  component: Pricing,
  subcomponents: { PricingCard },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Pricing>;

export const Default: Story = {
  args: {
    plans: [
        {
            "planName": "Essentials",
            "price": "549",
            "features": [
                "Up to one hour onboarding all",
                "Custom marketing plan",
                "Hand crafted landing page design and development",
            ],
            "link": "https://buy.stripe.com/test_dR65lA1tv5Ga4eY8wx",
        },
        {
            "planName": "Pro",
            "price": "749",
            "features": [
                "Everything in \"Essentials\"",
                "A year of hosting",
                "A video by me overviewing and promoting your business, posted to all of my social media accounts",
                "\"Starting Your Business\" checklist",
            ],
            "link": "https://buy.stripe.com/test_14kbJY1tv6KedPy288",
        },
        {
            "planName": "Elite",
            "price": "999",
            "features": [
                "Everything in \"Pro\"",
                "A custom logo",
                "Branding kit (colors, typography, alternate color logo etc.) for your business",
                "Social media profile picture (of your branding)",
                "Social media banners for all platforms",
            ],
            "link": "https://buy.stripe.com/test_5kA9BQ7RT8Sm26Q002",
        }
    ]
  },
};
