import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export type MenuItemProps = {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export type MenuProps = {
  side?: DropdownMenu.DropdownMenuContentProps["side"];
  align?: DropdownMenu.DropdownMenuContentProps["align"];
  sideOffset?: DropdownMenu.DropdownMenuContentProps["sideOffset"];
  items: MenuItemProps[];
  children: React.ReactNode;
};

export const Menu = ({
  side,
  align,
  sideOffset = 7,
  items = [],
  children,
}: MenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none" asChild>
        {children}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        {items.length > 0 && (
          <DropdownMenu.Content
            className="z-30 flex min-w-[150px] flex-col gap-2 rounded bg-neutral-900 p-2 text-sm text-neutral-200"
            side={side}
            align={align}
            sideOffset={sideOffset}
          >
            {items.map(({ label, icon, onClick }, index) => (
              <DropdownMenu.Item
                key={`menu-item-${label}-${index}`}
                className="flex cursor-pointer select-none items-center gap-2 rounded py-1 px-2 outline-none hover:bg-white/5"
                onClick={onClick}
              >
                {icon}
                <span>{label}</span>
              </DropdownMenu.Item>
            ))}
            <DropdownMenu.Arrow className="fill-neutral-900" />
          </DropdownMenu.Content>
        )}
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
