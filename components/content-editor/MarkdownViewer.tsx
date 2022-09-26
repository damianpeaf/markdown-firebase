import { MarkdownViewerProps } from "./ContentEditor.types";

import ReactMarkdown from "react-markdown";
import { MarkdownCodeFormatter } from "./custom-markdown-components/MarkdownCodeFormatter";
import rehypeRaw from "rehype-raw";

export const MarkdownViewer = ({ markdownString }: MarkdownViewerProps) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        code: MarkdownCodeFormatter,
      }}
    >
      {markdownString}
    </ReactMarkdown>
  );
};
