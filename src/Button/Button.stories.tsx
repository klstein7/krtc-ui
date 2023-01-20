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
      <Button {...args} color="blue">
        {children}
      </Button>
      <Button {...args} color="red">
        {children}
      </Button>
      <Button {...args} color="green">
        {children}
      </Button>
      <Button {...args} color="yellow">
        {children}
      </Button>
      <Button {...args} color="neutral">
        {children}
      </Button>
    </div>
  ),
};

export const Outline: Story = {
  args: {
    children: "Click me",
    variant: "outline",
  },
  render: ({ children, ...args }) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue">
        {children}
      </Button>
      <Button {...args} color="red">
        {children}
      </Button>
      <Button {...args} color="green">
        {children}
      </Button>
      <Button {...args} color="yellow">
        {children}
      </Button>
      <Button {...args} color="neutral">
        {children}
      </Button>
    </div>
  ),
};

export const Ghost: Story = {
  args: {
    children: "Click me",
    variant: "ghost",
  },
  render: ({ children, ...args }) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue">
        {children}
      </Button>
      <Button {...args} color="red">
        {children}
      </Button>
      <Button {...args} color="green">
        {children}
      </Button>
      <Button {...args} color="yellow">
        {children}
      </Button>
      <Button {...args} color="neutral">
        {children}
      </Button>
    </div>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    children: "Click me",
    leftIcon: <HiHome className="h-4 w-4" />,
  },
  render: ({ children, ...args }) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue">
        {children}
      </Button>
      <Button {...args} color="red">
        {children}
      </Button>
      <Button {...args} color="green">
        {children}
      </Button>
      <Button {...args} color="yellow">
        {children}
      </Button>
      <Button {...args} color="neutral">
        {children}
      </Button>
    </div>
  ),
};

export const WithRightIcon: Story = {
  args: {
    children: "Click me",
    rightIcon: <HiArrowRight className="h-4 w-4" />,
  },
  render: ({ children, ...args }) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue">
        {children}
      </Button>
      <Button {...args} color="red">
        {children}
      </Button>
      <Button {...args} color="green">
        {children}
      </Button>
      <Button {...args} color="yellow">
        {children}
      </Button>
      <Button {...args} color="neutral">
        {children}
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Click me",
    disabled: true,
  },
  render: ({ children, ...args }) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue">
        {children}
      </Button>
      <Button {...args} color="red">
        {children}
      </Button>
      <Button {...args} color="green">
        {children}
      </Button>
      <Button {...args} color="yellow">
        {children}
      </Button>
      <Button {...args} color="neutral">
        {children}
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: "Click me",
    loading: true,
  },
  render: ({ children, ...args }) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue">
        {children}
      </Button>
      <Button {...args} color="red">
        {children}
      </Button>
      <Button {...args} color="green">
        {children}
      </Button>
      <Button {...args} color="yellow">
        {children}
      </Button>
      <Button {...args} color="neutral">
        {children}
      </Button>
    </div>
  ),
};
