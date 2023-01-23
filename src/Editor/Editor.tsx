import type { PureEditorContent } from "@tiptap/react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import type { FormControlProps } from "../FormControl";
import { FormControl } from "../FormControl";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { forwardRef, useEffect, useState } from "react";
import { IconButton } from "../IconButton";
import {
  MdCode,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatStrikethrough,
  MdFormatUnderlined,
} from "react-icons/md";
import {} from "react-icons/fa";
import Underline from "@tiptap/extension-underline";

export type EditorProps = {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
} & Partial<FormControlProps>;

export const Editor = forwardRef<PureEditorContent, EditorProps>(
  (
    {
      id = uuidv4(),
      label,
      description,
      error,
      fullWidth = true,
      value = "",
      onChange,
      onBlur,
    },
    ref
  ) => {
    const hasError = !!error;

    const [isFocused, setIsFocused] = useState(false);

    const editor = useEditor({
      extensions: [StarterKit, Underline],
      content: value,
      onFocus: () => setIsFocused(true),
      onBlur: () => {
        setIsFocused(false);
        onBlur?.();
      },
      onUpdate: ({ editor }) => {
        onChange?.(editor.getHTML());
      },
      editorProps: {
        attributes: {
          class: clsx([
            "prose prose-invert p-3 text-sm outline-none min-h-[150px] max-w-full leading-none",
          ]),
        },
      },
    });

    return (
      <FormControl
        id={id}
        label={label}
        description={description}
        error={error}
        fullWidth={fullWidth}
      >
        <div className="rounded bg-white/5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1 p-1">
              <EditorActionButton
                icon={<MdFormatBold className="h-4 w-4" />}
                active={editor?.isActive("bold")}
                onClick={() => editor?.chain().focus().toggleBold().run()}
              />
              <EditorActionButton
                icon={<MdFormatItalic className="h-4 w-4" />}
                active={editor?.isActive("italic")}
                onClick={() => editor?.chain().focus().toggleItalic().run()}
              />
              <EditorActionButton
                icon={<MdFormatUnderlined className="h-4 w-4" />}
                active={editor?.isActive("underline")}
                onClick={() => editor?.chain().focus().toggleUnderline().run()}
              />
              <EditorActionButton
                icon={<MdFormatStrikethrough className="h-4 w-4" />}
                active={editor?.isActive("strike")}
                onClick={() => editor?.chain().focus().toggleStrike().run()}
              />
              <EditorActionButton
                icon={<MdFormatQuote className="h-4 w-4" />}
                active={editor?.isActive("blockquote")}
                onClick={() => editor?.chain().focus().toggleBlockquote().run()}
              />
              <EditorActionButton
                icon={<MdCode className="h-4 w-4" />}
                active={editor?.isActive("codeBlock")}
                onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
              />
            </div>
            <div className="flex gap-1 p-1">
              <EditorActionButton
                icon={<MdFormatListBulleted className="h-4 w-4" />}
                active={editor?.isActive("bulletList")}
                onClick={() => editor?.chain().focus().toggleBulletList().run()}
              />
              <EditorActionButton
                icon={<MdFormatListNumbered className="h-4 w-4" />}
                active={editor?.isActive("orderedList")}
                onClick={() =>
                  editor?.chain().focus().toggleOrderedList().run()
                }
              />
            </div>
          </div>
          <EditorContent
            ref={ref}
            editor={editor}
            className={clsx([
              "rounded-b",
              isFocused && "ring-1 ring-blue-500",
              hasError && "!ring-1 !ring-red-500",
            ])}
          />
        </div>
      </FormControl>
    );
  }
);

Editor.displayName = "Editor";

type EditorActionButtonProps = {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

const EditorActionButton = forwardRef<
  HTMLButtonElement,
  EditorActionButtonProps
>(({ icon: Icon, active, onClick }, ref) => {
  return (
    <IconButton
      ref={ref}
      className={clsx(["rounded", active && "bg-white/5"])}
      icon={Icon}
      onClick={onClick}
    />
  );
});

EditorActionButton.displayName = "EditorActionButton";
