import type { Meta, StoryObj } from '@storybook/react';
import HtmlRenderer from '@/app/components/pieces/htmlRenderer';

const meta: Meta<typeof HtmlRenderer> = {
  title: 'Pieces/HtmlRenderer',
  component: HtmlRenderer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof HtmlRenderer>;

export const Default1: Story = {
  args: {
    htmlString: `<div>
    <h2>Our Features</h2>
    <ul>
      <li>Feature 1: High-quality products</li>
      <li>Feature 2: Affordable prices</li>
      <li>Feature 3: Excellent customer service</li>
    </ul>
  </div>`
  },
};


export const Default2: Story = {
  args: {
    htmlString: `<div>
      <h4>Frequently Asked Questions</h4>
      <div>
        <h5>Question 1: What is your return policy?</h5>
        <p>We offer a 30-day return policy. For more details, visit our <a href="#">return policy page</a>.</p>
      </div>
      <div>
        <h5>Question 2: Do you offer international shipping?</h5>
        <p>Yes, we ship to over 50 countries worldwide. Check our <a href="#">shipping page</a> for more information.</p>
      </div>
    </div>`
  },
};