import { ChangeEvent } from "react";
import { MarkdownEditorProps } from "./ContentEditor.types";

import styles from "./MarkdownEditor.module.scss";

export const MarkdownEditor = ({ markdownString, setMarkdownString }: MarkdownEditorProps) => {
  const handleTextAreaChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownString(e.target.value);
  };

  return <textarea className={styles.editor__textarea} value={markdownString} onChange={handleTextAreaChanged} />;
};
