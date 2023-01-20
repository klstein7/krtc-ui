import type { Meta, StoryObj } from "@storybook/react";
import { HiAcademicCap, HiEnvelope, HiHome } from "react-icons/hi2";
import { Select } from "./Select";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../Button";

export default {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    items: [
      { label: "Test", value: "1", icon: <HiHome /> },
      { label: "Test 2", value: "2", icon: <HiEnvelope /> },
      { label: "Test 3", value: "3", icon: <HiAcademicCap /> },
    ],
  },
};

export const WithReactHookForm = () => {
  const { control, getValues } = useForm<{ value: string }>();

  return (
    <div className="space-y-4">
      <Controller
        control={control}
        name="value"
        render={({ field }) => (
          <Select
            {...field}
            items={[
              { label: "Test", value: "1", icon: <HiHome /> },
              { label: "Test 2", value: "2", icon: <HiEnvelope /> },
              { label: "Test 3", value: "3", icon: <HiAcademicCap /> },
            ]}
          />
        )}
      />
      <Button onClick={() => console.log(getValues())}>
        Console log value
      </Button>
    </div>
  );
};
