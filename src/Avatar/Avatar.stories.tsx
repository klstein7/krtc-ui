import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
  tags: ["autodocs"],
} as Meta<typeof Avatar>;

type Avatar = StoryObj<typeof Avatar>;

export const Default: Avatar = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "Avatar",
  },
  render: (args) => <Avatar {...args} />,
};

export const Group: Avatar = {
  render: () => (
    <Avatar.Group>
      <Avatar src="https://i.pravatar.cc/300?img=1" alt="Avatar" />
      <Avatar src="https://i.pravatar.cc/300?img=2" alt="Avatar" />
      <Avatar src="https://i.pravatar.cc/300?img=3" alt="Avatar" />
    </Avatar.Group>
  ),
};
