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
    placeholder: "email@example.com",
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    label: "Email",
    description: "We'll never share your email with anyone else.",
    placeholder: "email@example.com",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    description: "We'll never share your email with anyone else.",
    placeholder: "email@example.com",
    error: "This field is required",
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <HiEnvelope className="h-4 w-4" />,
    label: "Email",
    description: "We'll never share your email with anyone else.",
    placeholder: "email@example.com",
    error: "",
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <HiArrowRight className="h-4 w-4" />,
    label: "Email",
    description: "We'll never share your email with anyone else.",
    placeholder: "email@example.com",
    error: "",
  },
};
