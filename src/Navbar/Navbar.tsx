import { cx } from "class-variance-authority";
import { motion } from "framer-motion";
import { HiBars3 } from "react-icons/hi2";
import { IconButton } from "../IconButton";
import type { MenuItemProps } from "../Menu";
import { Menu } from "../Menu";

export type NavbarItemProps = MenuItemProps & {
  active?: boolean;
};

export type NavbarProps = {
  brandIcon?: React.ReactNode;
  brandText: React.ReactNode;
  items?: NavbarItemProps[];
};

export const Navbar = ({ brandIcon, brandText, items = [] }: NavbarProps) => {
  return (
    <div className="flex h-14 items-center justify-between border-b border-b-neutral-700  px-4 text-neutral-100">
      <div className="flex items-center gap-2">
        {brandIcon}
        <span className="font-medium">{brandText}</span>
      </div>
      <div className="hidden items-center gap-2 sm:flex">
        {items.map((item, index) => (
          <motion.div
            key={`nav-bar-item-${index}`}
            className={cx(
              "flex cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-white/10",
              item.active ? "bg-white/5" : "bg-transparent"
            )}
            whileTap={{
              filter: "brightness(0.8)",
            }}
          >
            {item.icon}
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
      <div className="sm:hidden">
        <Menu side="bottom" align="end" items={items}>
          <IconButton icon={<HiBars3 className="h-5 w-5" />} />
        </Menu>
      </div>
    </div>
  );
};
