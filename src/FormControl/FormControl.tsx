import * as LabelPrimitive from "@radix-ui/react-label";

export type FormControlProps = {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  children: React.ReactNode;
};

export const FormControl = ({
  id,
  label,
  description,
  error,
  children,
}: FormControlProps) => {
  const hasError = !!error;
  return (
    <div className="space-y-1">
      <div>
        {label && (
          <LabelPrimitive.Root
            htmlFor={id}
            className="block text-sm text-neutral-200"
          >
            {label}
          </LabelPrimitive.Root>
        )}
        {description && (
          <LabelPrimitive.Root
            htmlFor={id}
            className="block text-xs text-neutral-400"
          >
            {description}
          </LabelPrimitive.Root>
        )}
      </div>
      {children}
      {hasError && (
        <LabelPrimitive.Root
          htmlFor={id}
          className="block text-xs text-red-400"
        >
          {error}
        </LabelPrimitive.Root>
      )}
    </div>
  );
};
