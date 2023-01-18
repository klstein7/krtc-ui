import type { VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import type { FormControlProps } from "../FormControl";
import { FormControl } from "../FormControl";
import { input } from "../Input";
import { v4 as uuidv4 } from "uuid";

export type TextareaProps = VariantProps<typeof input> &
  Partial<FormControlProps> &
  ComponentPropsWithoutRef<"textarea">;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id = uuidv4(),
      label,
      description,
      error,
      variant,
      rows = 2,
      fullWidth,
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
        <textarea
          id={id}
          ref={ref}
          className={input({
            hasError,
            variant,
            className: "!h-auto resize-none",
          })}
          rows={rows}
          {...props}
        />
      </FormControl>
    );
  }
);

Textarea.displayName = "Textarea";
