import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type MarkdownContentProps = {
  content: string;
};

function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    const key = `${match.index}-${token}`;

    if (token.startsWith("`")) {
      nodes.push(<code key={key}>{token.slice(1, -1)}</code>);
    } else if (token.startsWith("**")) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        const isInternal = href.startsWith("/");
        nodes.push(
          isInternal ? (
            <Link key={key} href={href}>
              {label}
            </Link>
          ) : (
            <a key={key} href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          )
        );
      }
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function renderBlock(block: string, index: number) {
  const trimmed = block.trim();
  const key = `block-${index}`;
  const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);

  if (!trimmed) return null;

  if (imageMatch) {
    const [, alt, src] = imageMatch;
    return (
      <figure key={key}>
        <Image src={src} alt={alt} width={1200} height={700} className="rounded-2xl" />
      </figure>
    );
  }

  if (trimmed.startsWith("### ")) {
    return <h3 key={key}>{parseInline(trimmed.slice(4))}</h3>;
  }

  if (trimmed.startsWith("## ")) {
    return <h2 key={key}>{parseInline(trimmed.slice(3))}</h2>;
  }

  if (trimmed.startsWith("# ")) {
    return <h2 key={key}>{parseInline(trimmed.slice(2))}</h2>;
  }

  if (trimmed.startsWith("> ")) {
    return <blockquote key={key}>{parseInline(trimmed.replace(/^>\s?/gm, ""))}</blockquote>;
  }

  const lines = trimmed.split("\n");
  if (lines.every((line) => /^-\s+/.test(line.trim()))) {
    return (
      <ul key={key}>
        {lines.map((line, lineIndex) => (
          <li key={lineIndex}>{parseInline(line.trim().replace(/^-\s+/, ""))}</li>
        ))}
      </ul>
    );
  }

  if (lines.every((line) => /^\d+\.\s+/.test(line.trim()))) {
    return (
      <ol key={key}>
        {lines.map((line, lineIndex) => (
          <li key={lineIndex}>{parseInline(line.trim().replace(/^\d+\.\s+/, ""))}</li>
        ))}
      </ol>
    );
  }

  return <p key={key}>{parseInline(trimmed.replace(/\n/g, " "))}</p>;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const blocks = content.split(/\n{2,}/);

  return <div className="blog-content">{blocks.map(renderBlock)}</div>;
}
