import { cx } from "class-variance-authority";
import { forwardRef } from "react";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";

export type IconButtonProps = {
  icon: React.ReactNode;
} & Omit<ButtonProps, "children" | "leftIcon" | "rightIcon">;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        color="neutral"
        className={cx("!p-1", className)}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";
