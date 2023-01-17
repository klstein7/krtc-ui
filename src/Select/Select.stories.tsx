import type { Meta, StoryObj } from "@storybook/react";
import { HiAcademicCap, HiEnvelope, HiHome } from "react-icons/hi2";
import { Select } from "./Select";

export default {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    items: [
      { label: "Test", value: "1", icon: <HiHome /> },
      { label: "Test 2", value: "2", icon: <HiEnvelope /> },
      { label: "Test 3", value: "3", icon: <HiAcademicCap /> },
    ],
  },
};
