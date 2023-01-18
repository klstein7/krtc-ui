import type { Meta, StoryObj } from "@storybook/react";
import { HiXMark } from "react-icons/hi2";
import { IconButton } from "../IconButton";

export default {
  title: "IconButton",
  component: IconButton,
  tags: ["autodocs"],
} as Meta<typeof IconButton>;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: <HiXMark className="h-4 w-4" />,
  },
};
