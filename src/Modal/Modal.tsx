import NiceModal, { useModal } from "@ebay/nice-modal-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { VariantProps } from "class-variance-authority";
import { cx } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { MdClose } from "react-icons/md";
import { IconButton } from "../IconButton";

const modal = cva(
  "fixed top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-md bg-neutral-800 p-4 text-neutral-200 z-20",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type ModalProps = {
  title?: string;
  description?: string;
  withCloseButton?: boolean;
  classNames?: {
    overlay?: string;
    content?: string;
  };
  children?: React.ReactNode;
} & VariantProps<typeof modal>;

export const Modal = NiceModal.create(
  ({
    title,
    description,
    withCloseButton = true,
    classNames,
    children,
    size,
  }: ModalProps) => {
    const { visible, hide } = useModal();
    return (
      <DialogPrimitive.Root open={visible}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay
            className={cx(
              "fixed inset-0 z-10 bg-black/80",
              classNames?.overlay
            )}
          />
          <DialogPrimitive.Content
            className={modal({ size, className: classNames?.content })}
          >
            <div className="flex items-start justify-between">
              <div>
                <DialogPrimitive.Title className="font-medium">
                  {title}
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="text-sm text-neutral-400">
                  {description}
                </DialogPrimitive.Description>
              </div>
              {withCloseButton && (
                <DialogPrimitive.Close asChild>
                  <IconButton
                    icon={<MdClose className="h-5 w-5" />}
                    onClick={() => {
                      hide().catch(console.error);
                    }}
                  />
                </DialogPrimitive.Close>
              )}
            </div>
            {children}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    );
  }
);
