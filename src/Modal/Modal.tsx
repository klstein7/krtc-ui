import NiceModal, { useModal } from "@ebay/nice-modal-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { VariantProps } from "class-variance-authority";
import { cx } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { IconButton } from "../IconButton";

export const modal = cva(
  "flex flex-col gap-4 rounded-md bg-neutral-800 p-4 text-neutral-200 w-full z-20",
  {
    variants: {
      size: {
        xs: "max-w-xs",
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const overlay = cva(
  "fixed inset-0 flex !overflow-auto bg-black/80 p-2 z-10",
  {
    variants: {
      align: {
        start: "items-start",
        center: "items-center ",
        end: "items-end",
      },
      justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
      },
    },
    defaultVariants: {
      align: "start",
      justify: "center",
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
} & VariantProps<typeof modal> &
  VariantProps<typeof overlay>;

export const Modal = NiceModal.create(
  ({
    title,
    description,
    withCloseButton = true,
    classNames,
    children,
    size,
    align,
    justify,
  }: ModalProps) => {
    const { visible, hide } = useModal();
    return (
      <DialogPrimitive.Root open={visible}>
        <AnimatePresence>
          {visible && (
            <DialogPrimitive.Portal forceMount className="overflow-y-auto">
              <DialogPrimitive.Overlay asChild>
                <motion.div
                  className={overlay({
                    align,
                    justify,
                    className: classNames?.overlay,
                  })}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  <DialogPrimitive.Content
                    className={modal({ size, className: classNames?.content })}
                  >
                    {(title || description) && withCloseButton && (
                      <div className="flex items-start justify-between">
                        {(title || description) && (
                          <div>
                            {title && (
                              <DialogPrimitive.Title className="font-medium">
                                {title}
                              </DialogPrimitive.Title>
                            )}
                            {description && (
                              <DialogPrimitive.Description className="text-sm text-neutral-400">
                                {description}
                              </DialogPrimitive.Description>
                            )}
                          </div>
                        )}
                        {withCloseButton && (
                          <DialogPrimitive.Close asChild>
                            <IconButton
                              icon={<MdClose className="h-4 w-4" />}
                              onClick={() => {
                                hide().catch(console.error);
                              }}
                            />
                          </DialogPrimitive.Close>
                        )}
                      </div>
                    )}
                    {children}
                  </DialogPrimitive.Content>
                </motion.div>
              </DialogPrimitive.Overlay>
            </DialogPrimitive.Portal>
          )}
        </AnimatePresence>
      </DialogPrimitive.Root>
    );
  }
);
