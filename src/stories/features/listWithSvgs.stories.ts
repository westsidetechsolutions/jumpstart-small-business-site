import type { Meta, StoryObj } from "@storybook/react";
import ListWithSvgs, { ListItem } from "@/app/components/features/listWithSvgs";

const meta: Meta<typeof ListWithSvgs> = {
  title: "Features/ListWithSvgs",
  component: ListWithSvgs,
  subcomponents: { ListItem },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ListWithSvgs>;

export const Default: Story = {
  args: {
    services: [
      {
        service: "Residential and Commercial",
        symbol: "check",
      },
      {
        service: "Water heater replacement",
        symbol: "check",
      },
      {
        service: "Toilet installation/repair",
        symbol: "check",
      },
      {
        service: "Fixture replacement/repair",
        symbol: "check",
      },
      {
        service: "Remodel",
        symbol: "check",
      },
      {
        service: "Leak detection",
        symbol: "check",
      },
      {
        service: "New Construction",
        symbol: "check",
      },
      {
        service: "Pipe Repair/ Replacement",
        symbol: "check",
      },
    ],
  },
};
