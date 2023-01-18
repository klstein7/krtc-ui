import * as LabelPrimitive from "@radix-ui/react-label";
import { cx } from "class-variance-authority";

export type FormControlProps = {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
};

export const FormControl = ({
  id,
  label,
  description,
  error,
  fullWidth,
  children,
}: FormControlProps) => {
  const hasError = !!error;
  return (
    <div className={cx("flex flex-col gap-1", fullWidth ? "w-full" : "w-fit")}>
      <div className="flex flex-col">
        {label && (
          <LabelPrimitive.Root
            htmlFor={id}
            className="w-fit text-sm text-neutral-200"
          >
            {label}
          </LabelPrimitive.Root>
        )}
        {description && (
          <LabelPrimitive.Root
            htmlFor={id}
            className="w-fit text-xs text-neutral-400"
          >
            {description}
          </LabelPrimitive.Root>
        )}
      </div>
      {children}
      {hasError && (
        <LabelPrimitive.Root
          htmlFor={id}
          className="w-fit text-xs text-red-400"
        >
          {error}
        </LabelPrimitive.Root>
      )}
    </div>
  );
};
