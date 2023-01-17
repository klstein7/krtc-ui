import NiceModal from "@ebay/nice-modal-react";
import type { Meta, StoryObj } from "@storybook/react";
import { HiEnvelope, HiLockClosed } from "react-icons/hi2";
import { Button } from "../Button";
import { Input } from "../Input";
import { Modal } from "./Modal";

export default {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: "Modal title",
    description: "Modal description",
    children: (
      <div className="space-y-4">
        <Input
          label="Email"
          description="Enter your email address"
          leftIcon={<HiEnvelope className="h-4 w-4" />}
          placeholder="you@awesome.com"
        />
        <Input
          placeholder="Password"
          leftIcon={<HiLockClosed className="h-4 w-4" />}
          type="password"
        />
        <Button fullWidth>Submit</Button>
      </div>
    ),
    size: "md",
  },
  render: (args) => (
    <Button
      onClick={() => {
        NiceModal.show(Modal, args).catch(console.error);
      }}
    >
      Open
    </Button>
  ),
};
