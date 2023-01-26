import NiceModal from "@ebay/nice-modal-react";
import type { Meta } from "@storybook/react";
import { Button } from "../Button";
import type { AlertDialogProps } from "./AlertDialog";
import { AlertDialog } from "./AlertDialog";

export default {
  title: "AlertDialog",
  component: AlertDialog,
} as Meta<typeof AlertDialog>;

export const Default = () => {
  return (
    <NiceModal.Provider>
      <Button
        onClick={() => {
          NiceModal.show(AlertDialog, {
            title: "Delete account",
            message: "Are you sure you want to delete your account?",
          } as AlertDialogProps).catch(console.error);
        }}
      >
        Click me
      </Button>
    </NiceModal.Provider>
  );
};

export const WithCustomClassNames = () => {
  return (
    <NiceModal.Provider>
      <Button
        onClick={() => {
          NiceModal.show(AlertDialog, {
            title: "Delete account",
            message: "Are you sure you want to delete your account?",
            classNames: {
              content: "bg-red-600 text-red-50",
            },
          } as AlertDialogProps).catch(console.error);
        }}
      >
        Click me
      </Button>
    </NiceModal.Provider>
  );
};
