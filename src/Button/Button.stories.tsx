import type { Meta, StoryObj } from "@storybook/react";
import { HiArrowRight, HiHome } from "react-icons/hi2";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click me",
  },
  render: ({ children, ...args }) => (
    <div className="flex flex-col gap-4">
      <Button {...args}>{children}</Button>
    </div>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    children: "Click me",
    leftIcon: <HiHome className="h-4 w-4" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Click me",
    rightIcon: <HiArrowRight className="h-4 w-4" />,
  },
};
