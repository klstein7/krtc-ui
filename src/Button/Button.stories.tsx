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
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue">
        Blue
      </Button>
      <Button {...args} color="red">
        Red
      </Button>
      <Button {...args} color="green">
        Green
      </Button>
      <Button {...args} color="yellow">
        Yellow
      </Button>
      <Button {...args} color="neutral">
        Neutral
      </Button>
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue" size="sm">
        Small
      </Button>
      <Button {...args} color="blue">
        Medium
      </Button>
      <Button {...args} color="blue" size="lg">
        Large
      </Button>
    </div>
  ),
};

export const Outline: Story = {
  args: {
    children: "Click me",
    variant: "outline",
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue">
        Blue
      </Button>
      <Button {...args} color="red">
        Red
      </Button>
      <Button {...args} color="green">
        Green
      </Button>
      <Button {...args} color="yellow">
        Yellow
      </Button>
      <Button {...args} color="neutral">
        Neutral
      </Button>
    </div>
  ),
};

export const Ghost: Story = {
  args: {
    children: "Click me",
    variant: "ghost",
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue">
        Blue
      </Button>
      <Button {...args} color="red">
        Red
      </Button>
      <Button {...args} color="green">
        Green
      </Button>
      <Button {...args} color="yellow">
        Yellow
      </Button>
      <Button {...args} color="neutral">
        Neutral
      </Button>
    </div>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    children: "Click me",
    leftIcon: <HiHome className="h-4 w-4" />,
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue">
        Blue
      </Button>
      <Button {...args} color="red">
        Red
      </Button>
      <Button {...args} color="green">
        Green
      </Button>
      <Button {...args} color="yellow">
        Yellow
      </Button>
      <Button {...args} color="neutral">
        Neutral
      </Button>
    </div>
  ),
};

export const WithRightIcon: Story = {
  args: {
    children: "Click me",
    rightIcon: <HiArrowRight className="h-4 w-4" />,
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue">
        Blue
      </Button>
      <Button {...args} color="red">
        Red
      </Button>
      <Button {...args} color="green">
        Green
      </Button>
      <Button {...args} color="yellow">
        Yellow
      </Button>
      <Button {...args} color="neutral">
        Neutral
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Click me",
    disabled: true,
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue">
        Blue
      </Button>
      <Button {...args} color="red">
        Red
      </Button>
      <Button {...args} color="green">
        Green
      </Button>
      <Button {...args} color="yellow">
        Yellow
      </Button>
      <Button {...args} color="neutral">
        Neutral
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: "Click me",
    loading: true,
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Button {...args} color="blue">
        Blue
      </Button>
      <Button {...args} color="red">
        Red
      </Button>
      <Button {...args} color="green">
        Green
      </Button>
      <Button {...args} color="yellow">
        Yellow
      </Button>
      <Button {...args} color="neutral">
        Neutral
      </Button>
    </div>
  ),
};
