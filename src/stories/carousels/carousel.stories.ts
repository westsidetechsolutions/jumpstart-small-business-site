import type { Meta, StoryObj } from '@storybook/react';
import TestimonialCarouselWithQuote from '@/app/components/testimonials/TestimonialsWithQuote/carousel';
import Testimonial from '@/app/components/testimonials/TestimonialsWithQuote/testimonial';

const meta: Meta<typeof TestimonialCarouselWithQuote> = {
  title: 'Testimonials/TestimonialCarousel',
  component: TestimonialCarouselWithQuote,
  subcomponents: { Testimonial },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TestimonialCarouselWithQuote>;

export const Default: Story = {
  args: {
    testimonials: [
        { review: 'This is a great service!', name: 'John Doe' },
        { review: 'Highly recommended.', name: 'Jane Smith' },
        { review: 'Fantastic experience!', name: 'Michael Johnson' },
    ]
  },
};
