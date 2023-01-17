import type { Meta, StoryObj } from "@storybook/react";
import { HiArrowRight, HiEnvelope } from "react-icons/hi2";
import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    leftIcon: <HiEnvelope className="h-5 w-5" />,
    rightIcon: <HiArrowRight className="h-5 w-5" />,
    label: "Email",
    description: "We'll never share your email with anyone else.",
    placeholder: "email@example.com",
    error: "",
  },
};
