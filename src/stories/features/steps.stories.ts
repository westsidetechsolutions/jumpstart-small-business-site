import type { Meta, StoryObj } from '@storybook/react';
import Steps, { Step } from '@/app/components/features/steps';
import { HorizontalPosition } from '@/app/components/types/position';

const meta: Meta<typeof Steps> = {
  title: 'Features/Steps',
  component: Steps,
  subcomponents: { Step },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  args: {
    steps: [
        {
            title: "Initial consultation",
            explanation: "The first step in launching your business is a consultation call. (need to detail what will happen in the call and what we hope to accomplish.",
            position: HorizontalPosition.left,
            symbol: "partner_exchange",
        },
        {
            title: "Wireframe of your landing page",
            explanation: "I will create a very basic wireframe of your landing page with explanations for each section. This will be a simple overview to make sure that we are properly conveying the message of your business to your target market.",
            position: HorizontalPosition.right,
            symbol: "web_asset",
        },
        {
            title: "Marketing Strategy Development",
            explanation: "Next, a marketing plan is created for your business. This marketing plan will cover may different topics, such as some ideas for unique selling points, an in depth swot analysis, buyer persona examples and walking through the marketing funnel with a unique strategy.",
            position: HorizontalPosition.left,
            symbol: "groups",
        },
        {
            title: "Site design and development",
            explanation: "Once the wireframe is approved, I will craft a custom design for your site and send that over for approval once more. Once you are happy with the design, the landing page will be developed.",
            position: HorizontalPosition.right,
            symbol: "web",
        },
        {
            title: "Launch",
            explanation: "The site is developed and ready for launch! The code will either be delivered or I will set the site live!",
            position: HorizontalPosition.left,
            symbol: "rocket_launch",
        },
        {
            title: "Promotion",
            explanation: "Finally, I'll create and edit a video showcasing your business. I'll talk about what makes it so great and share the video on all of my social media channels.",
            position: HorizontalPosition.right,
            symbol: "play_arrow",
        },
      ]
  },
};
