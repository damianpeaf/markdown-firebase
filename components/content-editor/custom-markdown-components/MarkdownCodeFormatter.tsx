import { CodeProps } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import styles from "./MarkdownCodeFormatter.module.scss";

export const MarkdownCodeFormatter = ({ node, inline, className, children, ...props }: CodeProps) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter language={match[1]}>{children as string}</SyntaxHighlighter>
  ) : (
    <code className={styles.code} {...props}>
      {children}
    </code>
  );
};
