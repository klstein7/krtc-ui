import type { Meta, StoryObj } from "@storybook/react";
import { HiBars3, HiHome } from "react-icons/hi2";
import { MdHiking } from "react-icons/md";
import { IconButton } from "../IconButton";
import { Menu } from "./Menu";

export default {
  title: "Menu",
  component: Menu,
  tags: ["autodocs"],
} as Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "Item 1",
        icon: <HiHome className="h-4 w-4" />,
        onClick: () => console.log("Item 1 clicked"),
      },
      {
        label: "Item 2",
        icon: <MdHiking className="h-4 w-4" />,
        onClick: () => console.log("Item 2 clicked"),
      },
    ],
    children: <IconButton icon={<HiBars3 className="h-5 w-5" />} />,
  },
};
