import type { Meta, StoryObj } from "@storybook/react";
import { Editor } from "./Editor";

export default {
  title: "Editor",
  component: Editor,
} as Meta<typeof Editor>;

type Story = StoryObj<typeof Editor>;

export const Default: Story = {
  args: {},
};
