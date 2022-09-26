import { Dispatch, SetStateAction } from "react";

export type MarkdownEditorProps = {
  setMarkdownString: Dispatch<SetStateAction<string>>;
  markdownString: string;
};

export type MarkdownViewerProps = {
  markdownString: string;
};
