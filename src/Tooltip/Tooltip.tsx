import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export type TooltipProps = {
  label: string;
  side?: TooltipPrimitive.TooltipContentProps["side"];
  align?: TooltipPrimitive.TooltipContentProps["align"];
  sideOffset?: TooltipPrimitive.TooltipContentProps["sideOffset"];
  children: React.ReactNode;
};

export const Tooltip = ({
  label,
  side,
  align,
  sideOffset = 7,
  children,
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Root delayDuration={200}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          className="z-30 rounded bg-neutral-900 py-1 px-2 text-sm text-neutral-200"
          side={side}
          align={align}
          sideOffset={sideOffset}
        >
          {label}
          <TooltipPrimitive.Arrow className="fill-neutral-900" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};
