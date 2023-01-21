import * as AvatarPrimitive from "@radix-ui/react-avatar";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

const avatar = cva(
  "flex items-center justify-center font-medium object-cover select-none",
  {
    variants: {
      size: {
        xs: "w-6 h-6 text-xs",
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

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, size, className, ...props }, ref) => {
    return (
      <AvatarPrimitive.Root ref={ref} {...props}>
        <AvatarPrimitive.Image
          src={src ?? undefined}
          className={avatar({ size, className })}
        />
        <AvatarPrimitive.Fallback
          className={avatar({
            size,
            className: clsx([className, "bg-blue-700 text-white"]),
          })}
        >
          {alt?.charAt(0) ?? "U"}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    );
  }
);

Avatar.displayName = "Avatar";

const AvatarGroup = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} className="flex items-center -space-x-4" {...props}>
        {children}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";

const AvatarNamespace = Object.assign(Avatar, {
  Group: AvatarGroup,
});

export { AvatarNamespace as Avatar };
