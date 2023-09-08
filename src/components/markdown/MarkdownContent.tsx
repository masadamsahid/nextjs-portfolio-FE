import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "@/components/markdown/react-syntax-highlighter";
import { hybrid as style } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { FC } from "react";
import remarkGfm from "remark-gfm";

type MarkdownContentPropType = {
  children?: string;
}

const MarkdownContent: FC<MarkdownContentPropType> = (props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        pre: ({ children, ...props }) => {
          return (
            <pre className="p-0">
              {children}
            </pre>
          );
        },
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              className="max-h-[40rem]"
              style={style}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className + " bg-blue-500/50 text-white rounded-sm px-[5px] py-[3px] font-light before:content-none after:content-none"}>
              {children}
            </code>
          );
        },
        a: ({ children, ...props}) => (
          <a {...props} className="no-underline hover:underline">{children}</a>
        ),
      }}
    >
      {props.children || "> No content"}
    </ReactMarkdown>
  );
};

export default MarkdownContent;