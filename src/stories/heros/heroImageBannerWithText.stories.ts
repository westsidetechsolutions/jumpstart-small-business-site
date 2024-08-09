import type { Meta, StoryObj } from "@storybook/react";
import Hero from "@/app/components/heros/hero";
import HeroImageBannerWithText from "@/app/components/heros/heroImageBannerWithText";
import image from "@/stories/assets/smiley.jpg";
import logo from "@/stories/assets/woloszyk-plumbing-rounded.webp";

const meta: Meta<typeof HeroImageBannerWithText> = {
  title: "Heros/HeroImageBannerWithText",
  component: HeroImageBannerWithText,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeroImageBannerWithText>;

export const Default: Story = {
  args: {
    image: image,
    logo,
    altText: "Dynamic Image from API",
    imageFocus: "center",
    heroImageText: "Welcome to Our Service",
    link: "https://google.com",
    linkText: "Contact Us",
    showLogo: true,
  },
};
