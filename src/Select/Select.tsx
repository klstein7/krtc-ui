import * as SelectPrimitive from "@radix-ui/react-select";
import { cva, cx } from "class-variance-authority";
import { HiChevronUpDown, HiExclamationCircle } from "react-icons/hi2";
import { MdCheck } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import type { FormControlProps } from "../FormControl";
import { FormControl } from "../FormControl";

export const select = cva(
  "flex h-10 w-full items-center justify-between rounded bg-neutral-700/50 px-3 text-white outline-none gap-3 min-w-[250px]",
  {
    variants: {
      variant: {
        primary: "focus:ring-1 focus:ring-blue-500",
      },
      hasError: {
        true: "!ring-red-500 !text-red-400 focus:!ring-red-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export type SelectItemProps = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

export type SelectProps = {
  items: SelectItemProps[];
  value?: string;
  onChange?: (value: string) => void;
} & Partial<FormControlProps>;

export const Select = ({
  id = uuidv4(),
  label,
  description,
  error,
  fullWidth,
  items,
  value: initialValue = "",
  onChange,
}: SelectProps) => {
  const hasError = !!error;

  const [value, setValue] = useState(initialValue);

  const selectedItem = items.find((item) => item.value === value);

  return (
    <SelectPrimitive.Root
      value={value}
      onValueChange={(v) => {
        setValue(v);
        onChange?.(v);
      }}
    >
      <FormControl
        id={id}
        label={label}
        description={description}
        error={error}
        fullWidth={fullWidth}
      >
        <SelectPrimitive.Trigger id={id} className={select({ hasError })}>
          <SelectPrimitive.Value>
            <span
              className={cx(
                selectedItem
                  ? hasError
                    ? "text-red-400"
                    : "text-neutral-200"
                  : "text-neutral-500"
              )}
            >
              <div className="flex items-center gap-3">
                {selectedItem?.icon}
                <span>{selectedItem?.label ?? "Select..."}</span>
              </div>
            </span>
          </SelectPrimitive.Value>
          <SelectPrimitive.Icon>
            {hasError ? (
              <HiExclamationCircle className="h-5 w-5 text-red-500" />
            ) : (
              <HiChevronUpDown className="h-5 w-5 text-neutral-200" />
            )}
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
      </FormControl>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="z-30">
          <SelectPrimitive.Viewport className="flex select-none flex-col gap-1 rounded bg-neutral-900 p-1 text-neutral-200">
            {items.map((item, index) => (
              <SelectPrimitive.Item
                key={`select-item-${item.value}-${index}`}
                className="flex h-10 items-center justify-between rounded px-3 outline-none hover:bg-white/5"
                value={item.value}
              >
                <SelectPrimitive.ItemText>
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator>
                  <MdCheck className="h-5 w-5" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};
