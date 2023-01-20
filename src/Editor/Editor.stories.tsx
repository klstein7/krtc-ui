import type { Meta, StoryObj } from "@storybook/react";
import type { EditorProps } from "./Editor";
import { Editor } from "./Editor";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../Button";

export default {
  title: "Editor",
  component: Editor,
  tags: ["autodocs"],
} as Meta<typeof Editor>;

type Story = StoryObj<typeof Editor>;

export const Default: Story = {
  args: {
    label: "Editor",
    description: "This is a description",
    error: "",
  },
};

export const WithReactHookForm = (args: EditorProps) => {
  const { control, getValues } = useForm<{ value: string }>({});
  return (
    <div className="space-y-4">
      <Controller
        control={control}
        name="value"
        render={({ field }) => (
          <Editor
            {...field}
            label="Editor"
            description="This is a description"
            error=""
            {...args}
          />
        )}
      />
      <Button onClick={() => console.log(getValues())}>
        Console log value
      </Button>
    </div>
  );
};
