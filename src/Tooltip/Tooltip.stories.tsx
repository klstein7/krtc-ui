import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: <span className="text-neutral-100">Hover me</span>,
    label: "Tooltip content",
  },
  render: ({ children, ...args }) => (
    <TooltipPrimitive.Provider>
      <Tooltip {...args}>{children}</Tooltip>
    </TooltipPrimitive.Provider>
  ),
};
