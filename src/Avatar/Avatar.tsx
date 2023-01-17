import * as AvatarPrimitive from "@radix-ui/react-avatar";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

const avatar = cva(
  "flex items-center justify-center text-blue-100 bg-blue-700 font-medium object-cover select-none",
  {
    variants: {
      size: {
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
      },
      rounded: {
        true: "rounded-full",
        false: "rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
      rounded: true,
    },
  }
);

export type AvatarProps = {
  src?: string | null;
  alt?: string | null;
} & VariantProps<typeof avatar> &
  ComponentPropsWithoutRef<"div">;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, size, className, ...props }, ref) => {
    return (
      <AvatarPrimitive.Root
        ref={ref}
        className={avatar({ size, className })}
        {...props}
      >
        <AvatarPrimitive.Image
          src={src ?? undefined}
          style={{
            borderRadius: "inherit",
          }}
        />
        <AvatarPrimitive.Fallback>
          {alt?.charAt(0) ?? "U"}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    );
  }
);

Avatar.displayName = "Avatar";
