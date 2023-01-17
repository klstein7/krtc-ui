import type { Meta, StoryObj } from "@storybook/react";
import { MdCake, MdHome, MdQuestionAnswer } from "react-icons/md";
import { Navbar } from "./Navbar";

export default {
  title: "Navbar",
  component: Navbar,
  tags: ["autodocs"],
} as Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    brandIcon: <MdCake />,
    brandText: "Brand",
    items: [
      {
        label: "Home",
        icon: <MdHome />,
        active: true,
      },
      {
        label: "About",
        icon: <MdQuestionAnswer />,
      },
    ],
  },
};
