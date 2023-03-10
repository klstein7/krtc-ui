import { cva, cx } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { HiExclamationCircle } from "react-icons/hi2";
import type { FormControlProps } from "../FormControl";
import { FormControl } from "../FormControl";

export const input = cva(
  "h-10 rounded border-none bg-white/5 text-neutral-200 placeholder:text-neutral-500 w-full min-w-[250px] text-sm",
  {
    variants: {
      variant: {
        primary: "focus:ring-1 focus:ring-blue-500",
      },
      hasLeftIcon: {
        true: "pl-10",
      },
      hasRightIcon: {
        true: "pr-10",
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

export type InputProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & ComponentPropsWithoutRef<"input"> &
  Partial<FormControlProps>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      description,
      error,
      leftIcon,
      rightIcon,
      id = uuidv4(),
      type = "text",
      fullWidth = true,
      ...props
    },
    ref
  ) => {
    const hasError = !!error;
    return (
      <FormControl
        id={id}
        label={label}
        description={description}
        fullWidth={fullWidth}
        error={error}
      >
        <div className={cx("relative")}>
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-200">
              {leftIcon}
            </div>
          )}
          {(rightIcon || hasError) && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-300">
              {hasError ? (
                <HiExclamationCircle className="h-4 w-4 text-red-500" />
              ) : (
                rightIcon
              )}
            </div>
          )}
          <input
            ref={ref}
            id={id}
            className={input({ hasError, hasLeftIcon: !!leftIcon })}
            type={type}
            {...props}
          />
        </div>
      </FormControl>
    );
  }
);

Input.displayName = "Input";
