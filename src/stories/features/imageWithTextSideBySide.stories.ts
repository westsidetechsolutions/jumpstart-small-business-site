import type { Meta, StoryObj } from "@storybook/react";
import ImageWithTextSideBySide from "@/app/components/features/imageWithTextSideBySide";
import { HorizontalPosition } from "@/app/components/types/position";
import { sizes } from "@/app/components/types/sizes";

const meta: Meta<typeof ImageWithTextSideBySide> = {
  title: "Features/ImageWithTextSideBySide",
  component: ImageWithTextSideBySide,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ImageWithTextSideBySide>;

export const ImageRightWithCopy: Story = {
  args: {
    image: {
      alt: "Test alt!",
      src: "https://blog.emojipedia.org/content/images/size/w2000/2021/11/Emojipedia-Google-Emoji-14_0-Header-Image-Just-Melting-Face.jpg",
      size: sizes.medium,
    },
    imageSide: HorizontalPosition.right,
    copy: `<h1>Welcome to Our Website</h1> <p>We are glad to have you here. Explore our <a href="#">services</a> and feel free to contact us.</p>`,
    imageFocus: "center",
  },
};

export const LargeImageLeftWithCopy: Story = {
  args: {
    image: {
      alt: "Test alt!",
      src: "https://blog.emojipedia.org/content/images/size/w2000/2021/11/Emojipedia-Google-Emoji-14_0-Header-Image-Just-Melting-Face.jpg",
      size: sizes.large,
    },
    imageSide: HorizontalPosition.left,
    copy: `<div>
    <h2>Our Features</h2>
    <ul>
      <li>Feature 1: High-quality products</li>
      <li>Feature 2: Affordable prices</li>
      <li>Feature 3: Excellent customer service</li>
    </ul>
  </div>`,
    imageFocus: "center",
  },
};
