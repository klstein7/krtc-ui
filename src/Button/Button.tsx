import type { VariantProps } from "class-variance-authority";
import { cx } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import Ripples from "react-ripples";
import { ClipLoader } from "react-spinners";

const button = cva(
  "inline-flex items-center justify-center gap-2 select-none w-full",
  {
    variants: {
      variant: {
        solid: null,
        outline: null,
        ghost: null,
      },
      color: {
        blue: null,
        red: null,
        green: null,
        yellow: null,
        neutral: null,
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
      size: {
        xs: "px-1.5 py-0.5 text-xs rounded font-normal",
        sm: "px-3 py-1.5 text-xs rounded font-normal",
        md: "px-4 py-2 text-sm rounded-md font-medium",
        lg: "px-5 py-3 text-base rounded-md font-semibold",
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: "solid",
        color: "blue",
        className: "bg-blue-600 hover:bg-blue-700 text-white",
      },
      {
        variant: "solid",
        color: "red",
        className: "bg-red-600 hover:bg-red-700 text-white",
      },
      {
        variant: "solid",
        color: "green",
        className: "bg-green-600 hover:bg-green-700 text-white",
      },
      {
        variant: "solid",
        color: "yellow",
        className: "bg-yellow-600 hover:bg-yellow-700 text-white",
      },
      {
        variant: "solid",
        color: "neutral",
        className: "bg-neutral-600 hover:bg-neutral-700 text-white",
      },
      // Outline variants
      {
        variant: "outline",
        color: "blue",
        className:
          "border border-blue-200 hover:bg-blue-200/25 text-blue-200 hover:text-blue-100",
      },
      {
        variant: "outline",
        color: "red",
        className:
          "border border-red-200 hover:bg-red-200/25 text-red-200 hover:text-red-100",
      },
      {
        variant: "outline",
        color: "green",
        className:
          "border border-green-200 hover:bg-green-200/25 text-green-200 hover:text-green-100",
      },
      {
        variant: "outline",
        color: "yellow",
        className:
          "border border-yellow-200 hover:bg-yellow-200/25 text-yellow-200 hover:text-yellow-100",
      },
      {
        variant: "outline",
        color: "neutral",
        className:
          "border border-neutral-200 hover:bg-neutral-200/25 text-neutral-200 hover:text-neutral-100",
      },
      // Ghost variants
      {
        variant: "ghost",
        color: "blue",
        className: "text-blue-200 hover:text-blue-100 hover:bg-blue-200/10",
      },
      {
        variant: "ghost",
        color: "red",
        className: "text-red-200 hover:text-red-100 hover:bg-red-200/10",
      },
      {
        variant: "ghost",
        color: "green",
        className: "text-green-200 hover:text-green-100 hover:bg-green-200/10",
      },
      {
        variant: "ghost",
        color: "yellow",
        className:
          "text-yellow-200 hover:text-yellow-100 hover:bg-yellow-200/10",
      },
      {
        variant: "ghost",
        color: "neutral",
        className:
          "text-neutral-200 hover:text-neutral-100 hover:bg-neutral-200/10",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "blue",
      size: "md",
    },
  }
);

export type ButtonProps = {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
} & VariantProps<typeof button> &
  HTMLMotionProps<"button">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      leftIcon,
      rightIcon,
      fullWidth,
      variant,
      color,
      size,
      className,
      loading,
      disabled,
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Ripples
        className={cx("inline-flex", fullWidth ? "w-full" : "w-fit")}
        color={loading || disabled ? "transparent" : "rgba(0, 0, 0, 0.075)"}
        during={1200}
      >
        <motion.button
          ref={ref}
          type={type}
          className={button({
            variant,
            color,
            size,
            disabled: loading || disabled,
            className,
          })}
          whileTap={{
            scale: 0.985,
          }}
          {...props}
        >
          <>
            {leftIcon}
            {children}
            {rightIcon}
            {loading && (
              <ClipLoader
                size={17}
                color="currentColor"
                speedMultiplier={0.75}
              />
            )}
          </>
        </motion.button>
      </Ripples>
    );
  }
);

Button.displayName = "Button";
