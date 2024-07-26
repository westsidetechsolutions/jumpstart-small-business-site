import type { Meta, StoryObj } from '@storybook/react';
import CopyWithCallToAction from '@/app/components/callToActions/copyWithCallToAction';

const meta: Meta<typeof CopyWithCallToAction> = {
  title: 'Call To Actions/Copy With Call To Action',
  component: CopyWithCallToAction,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CopyWithCallToAction>;

const callToActionCopy = `
<h2>
    What is Jumpstart Small Business?
</h2>
<p>
    Jumpstart Small Business is an affordable collection of services that I wished that I had when I started my business, such as a tailored landing page with a custom design, a marketing plan specific to your business, a bespoke branding kit with professional social media banners and more.
</p>
<p>
    Designed specifically for new entrepreneurs and small businesses, Jumpstart Small Business is the ultimate starter kit that provides everything you need to launch your business successfully and affordably. Experience the ease of having a dedicated team handle your business setup, allowing you to focus on what you do best.
</p>`;

export const Default: Story = {
  args: {
    copy: callToActionCopy,
    buttonText: "Get Started Now",
    buttonLink: "#pricing",
  },
};
