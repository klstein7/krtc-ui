import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

export default {
  title: "Textarea",
  component: Textarea,
  tags: ["autodocs"],
} as Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "Label",
    description: "This is a description",
    placeholder: "Placeholder",
  },
};
