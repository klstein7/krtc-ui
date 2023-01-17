import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cx } from "class-variance-authority";
import type { MenuItemProps } from "../Menu";

export type ContextMenuProps = {
  items: MenuItemProps[];
  classNames?: {
    content?: string;
    item?: string;
  };
  children: React.ReactNode;
};

export const ContextMenu = ({
  items,
  classNames,
  children,
}: ContextMenuProps) => {
  return (
    <ContextMenuPrimitive.Root>
      <ContextMenuPrimitive.Trigger asChild>
        {children}
      </ContextMenuPrimitive.Trigger>
      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
          className={cx(
            "flex min-w-[150px] select-none flex-col gap-2 rounded bg-neutral-900 p-2",
            classNames?.content
          )}
        >
          {items.map((item, index) => (
            <ContextMenuPrimitive.Item
              key={`context-menu-item-${item.label}-${index}`}
              className={cx(
                "flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-sm text-neutral-200 hover:bg-neutral-800",
                classNames?.item
              )}
              onClick={item.onClick}
            >
              {item.icon}
              <span>{item.label}</span>
            </ContextMenuPrimitive.Item>
          ))}
        </ContextMenuPrimitive.Content>
      </ContextMenuPrimitive.Portal>
    </ContextMenuPrimitive.Root>
  );
};
