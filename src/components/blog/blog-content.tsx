import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { AlertTriangle, ChevronDown, Lightbulb, Quote } from "lucide-react";
import type { BlogBlock } from "@/lib/blog-posts";

/** Convierte **negrita** y [texto](/ruta) en elementos React. */
export function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const className = "font-medium text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-800";
      return href.startsWith("/") ? (
        <Link key={i} href={href} className={className}>
          {label}
        </Link>
      ) : (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {label}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="text-[17px] leading-8 text-gray-700">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={idx} className="mt-12 mb-4 text-2xl md:text-[28px] font-bold leading-tight text-gray-900">
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={idx} className="mb-6">
                {renderInline(block.text)}
              </p>
            );
          case "ul":
            return (
              <ul key={idx} className="mb-8 space-y-3">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={idx} className="mb-8 space-y-4">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ol>
            );
          case "tip":
            return (
              <aside key={idx} className="my-8 rounded-[22px] border border-emerald-100 bg-emerald-50/80 p-5 md:p-6">
                <p className="mb-2 flex items-center gap-2 text-base font-semibold text-emerald-800">
                  <Lightbulb className="h-5 w-5" />
                  {block.title}
                </p>
                <p className="text-base leading-7 text-emerald-900/80">{renderInline(block.text)}</p>
              </aside>
            );
          case "warning":
            return (
              <aside key={idx} className="my-8 rounded-[22px] border border-amber-200 bg-amber-50 p-5 md:p-6">
                <p className="mb-2 flex items-center gap-2 text-base font-semibold text-amber-800">
                  <AlertTriangle className="h-5 w-5" />
                  {block.title}
                </p>
                <p className="text-base leading-7 text-amber-900/80">{renderInline(block.text)}</p>
              </aside>
            );
          case "quote":
            return (
              <blockquote key={idx} className="my-10 border-l-4 border-emerald-500 pl-5">
                <Quote className="mb-2 h-6 w-6 text-emerald-400" aria-hidden="true" />
                <p className="text-xl md:text-2xl font-semibold leading-snug text-gray-900">{block.text}</p>
              </blockquote>
            );
          case "qa":
            return (
              <div key={idx} className="my-8 overflow-hidden rounded-[22px] bg-white ring-1 ring-black/5 shadow-sm divide-y divide-gray-100">
                {block.items.map((item, i) => (
                  <details key={i} className="group" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-gray-900 hover:bg-gray-50 [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="px-5 pb-5 text-base leading-7 text-gray-600">{renderInline(item.a)}</p>
                  </details>
                ))}
              </div>
            );
        }
      })}
    </div>
  );
}
