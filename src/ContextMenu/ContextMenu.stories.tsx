import type { Meta, StoryObj } from "@storybook/react";
import { MdHome, MdSettings } from "react-icons/md";
import { Button } from "../Button";
import { ContextMenu } from "./ContextMenu";

export default {
  title: "ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
} as Meta<typeof ContextMenu>;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex max-w-xs items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-4 text-neutral-100">
        Right click inside me
      </div>
    ),
    items: [
      {
        icon: <MdHome className="h-4 w-4" />,
        label: "Dashboard",
        onClick: () => console.log("Item 1 clicked"),
      },
      {
        icon: <MdSettings className="h-4 w-4" />,
        label: "Settings",
        onClick: () => console.log("Item 2 clicked"),
      },
    ],
  },
};

export const WithCustomClassNames: Story = {
  args: {
    children: (
      <div className="flex max-w-xs items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-4 text-neutral-100">
        Right click inside me
      </div>
    ),
    items: [
      {
        icon: <MdHome className="h-4 w-4" />,
        label: "Dashboard",
        onClick: () => console.log("Item 1 clicked"),
      },
      {
        icon: <MdSettings className="h-4 w-4" />,
        label: "Settings",
        onClick: () => console.log("Item 2 clicked"),
      },
    ],
    classNames: {
      content: "bg-red-900 min-w-[200px]",
      item: "hover:bg-red-800",
    },
  },
};
