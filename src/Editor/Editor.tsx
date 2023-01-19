import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import type { FormControlProps } from "../FormControl";
import { FormControl } from "../FormControl";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { useState } from "react";
import { IconButton } from "../IconButton";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatUnderlined,
} from "react-icons/md";
import Underline from "@tiptap/extension-underline";

export type EditorProps = {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
} & Partial<FormControlProps>;

export const Editor = ({
  id = uuidv4(),
  label,
  description,
  error,
  fullWidth = true,
  value = "",
  onChange,
}: EditorProps) => {
  const hasError = !!error;

  const [isFocused, setIsFocused] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: value,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    editorProps: {
      attributes: {
        class: clsx([
          "prose prose-invert bg-white/5 rounded-b px-3 py-2 text-sm outline-none min-h-[150px] max-w-full",
        ]),
      },
    },
  });

  editor?.on("update", () => {
    onChange?.(editor?.getHTML() ?? "");
  });

  return (
    <FormControl
      id={id}
      label={label}
      description={description}
      error={error}
      fullWidth={fullWidth}
    >
      <div>
        <div className="flex items-center gap-2">
          <div className="flex">
            <IconButton
              className={clsx([
                "rounded-none rounded-tl",
                editor?.isActive("bold") && "bg-white/10",
              ])}
              icon={<MdFormatBold className="h-4 w-4" />}
              onClick={() => editor?.chain().focus().toggleBold().run()}
            />
            <IconButton
              className={clsx([
                "rounded-none",
                editor?.isActive("italic") && "bg-white/10",
              ])}
              icon={<MdFormatItalic className="h-4 w-4" />}
              onClick={() => editor?.chain().focus().toggleItalic().run()}
            />
            <IconButton
              className={clsx([
                "rounded-none rounded-tr",
                editor?.isActive("underline") && "bg-white/10",
              ])}
              icon={<MdFormatUnderlined className="h-4 w-4" />}
              onClick={() => editor?.chain().focus().toggleUnderline().run()}
            />
          </div>
          <div className="flex">
            <IconButton
              className={clsx([
                "rounded-none rounded-tl",
                editor?.isActive("bulletList") && "bg-white/10",
              ])}
              icon={<MdFormatListBulleted className="h-4 w-4" />}
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
            />
          </div>
        </div>
        <EditorContent
          editor={editor}
          className={clsx([
            "rounded-b",
            isFocused && "ring-1 ring-blue-500",
            hasError && "!text-red-400 !ring-1 !ring-red-500",
          ])}
        />
      </div>
    </FormControl>
  );
};
