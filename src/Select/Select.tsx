import * as SelectPrimitive from "@radix-ui/react-select";
import { cva, cx } from "class-variance-authority";
import { HiChevronUpDown, HiExclamationCircle, HiXMark } from "react-icons/hi2";
import { MdCheck } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { forwardRef, useState } from "react";
import type { FormControlProps } from "../FormControl";
import { FormControl } from "../FormControl";

export const select = cva(
  "flex h-10 w-full items-center justify-between rounded bg-white/5 px-3 text-white outline-none min-w-[250px] text-sm",
  {
    variants: {
      variant: {
        primary: "focus:ring-1 focus:ring-blue-500",
      },
      hasError: {
        true: "!ring-1 !ring-red-500 !text-red-400 focus:!ring-red-500",
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
  value?: string | null;
  clearable?: boolean;
  onChange?: (value: string) => void;
} & Partial<FormControlProps>;

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      id = uuidv4(),
      label,
      description,
      error,
      fullWidth = true,
      items,
      value: initialValue = "",
      clearable,
      onChange,
    },
    ref
  ) => {
    const hasError = !!error;

    const [value, setValue] = useState(initialValue);

    const selectedItem = items.find((item) => item.value === value);

    const renderRightIcon = () => {
      if (hasError)
        return <HiExclamationCircle className="h-4 w-4 text-red-400" />;
      if (selectedItem && clearable)
        return (
          <HiXMark
            aria-details="clear"
            className="h-4 w-4 cursor-pointer text-neutral-200"
            onClick={() => setValue("")}
          />
        );
      return <HiChevronUpDown className="h-4 w-4 text-neutral-200" />;
    };

    return (
      <SelectPrimitive.Root
        value={value ?? ""}
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
          <div className="relative">
            <div className="absolute inset-y-0 right-0 z-20 flex items-center pr-3">
              {renderRightIcon()}
            </div>
            <SelectPrimitive.Trigger
              ref={ref}
              id={id}
              className={select({ hasError })}
            >
              <SelectPrimitive.Value asChild>
                <span
                  className={cx(
                    selectedItem
                      ? hasError
                        ? "text-red-400"
                        : "text-neutral-200"
                      : "text-neutral-500"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {selectedItem?.icon}
                    <span>{selectedItem?.label ?? "Select..."}</span>
                  </div>
                </span>
              </SelectPrimitive.Value>
            </SelectPrimitive.Trigger>
          </div>
        </FormControl>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className="z-30">
            <SelectPrimitive.Viewport className="flex select-none flex-col gap-1 rounded bg-neutral-900 p-1 text-neutral-200">
              {items.map((item, index) => (
                <SelectPrimitive.Item
                  key={`select-item-${item.value}-${index}`}
                  className="flex h-10 items-center justify-between rounded px-2 text-sm outline-none hover:bg-white/5"
                  value={item.value}
                >
                  <SelectPrimitive.ItemText>
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                  </SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator>
                    <MdCheck className="h-4 w-4" />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

Select.displayName = "Select";
