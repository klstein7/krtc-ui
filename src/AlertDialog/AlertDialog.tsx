import NiceModal, { useModal } from "@ebay/nice-modal-react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import type { ModalProps } from "../Modal";
import { modal, overlay } from "../Modal";

export type AlertDialogProps = {
  message: string;
} & Omit<ModalProps, "withCloseButton" | "children" | "description">;

export const AlertDialog = NiceModal.create(
  ({ align, classNames, justify, size, title, message }: AlertDialogProps) => {
    const { visible, hide } = useModal();
    return (
      <AlertDialogPrimitive.Root open={visible}>
        <AlertDialogPrimitive.Portal>
          <AlertDialogPrimitive.Overlay
            className={twMerge(
              overlay({
                align,
                justify,
                className: classNames?.overlay,
              })
            )}
          >
            <AlertDialogPrimitive.Content
              className={twMerge(
                modal({
                  size,
                  className: classNames?.content,
                })
              )}
            >
              <AlertDialogPrimitive.Title className="font-medium">
                {title}
              </AlertDialogPrimitive.Title>
              <div className="text-neutral-200">{message}</div>
              <div className="flex items-center justify-end gap-2">
                <AlertDialogPrimitive.Cancel asChild>
                  <Button
                    variant="ghost"
                    color="neutral"
                    onClick={() => {
                      hide().catch(console.error);
                    }}
                  >
                    Cancel
                  </Button>
                </AlertDialogPrimitive.Cancel>
                <AlertDialogPrimitive.Action asChild>
                  <Button>Confirm</Button>
                </AlertDialogPrimitive.Action>
              </div>
            </AlertDialogPrimitive.Content>
          </AlertDialogPrimitive.Overlay>
        </AlertDialogPrimitive.Portal>
      </AlertDialogPrimitive.Root>
    );
  }
);
