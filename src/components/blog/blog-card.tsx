import Link from "next/link";
import { Clock } from "lucide-react";
import { BLOG_CATEGORY_LABELS, formatPostDate, type BlogCategory } from "@/lib/blog-categories";

/** Datos mínimos de un artículo para listarlo (sin el contenido completo). */
export interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  cover: string;
  coverAlt: string;
  readingMinutes: number;
}

interface BlogCardProps {
  post: BlogPostSummary;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex overflow-hidden rounded-[24px] bg-white ring-1 ring-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] ${
        featured ? "flex-col md:flex-row" : "flex-col"
      }`}
    >
      <div className={`relative overflow-hidden bg-gray-100 ${featured ? "aspect-[16/10] md:aspect-auto md:min-h-[380px] md:w-1/2" : "aspect-[16/10]"}`}>
        <img
          src={post.cover}
          alt={post.coverAlt}
          loading={featured ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-md">
          {BLOG_CATEGORY_LABELS[post.category]}
        </span>
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "p-6 md:p-10 md:justify-center" : "p-5"}`}>
        {featured && (
          <span className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">Lo más reciente</span>
        )}
        <h3 className={`font-bold leading-snug text-gray-900 group-hover:text-emerald-700 transition-colors ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}>
          {post.title}
        </h3>
        <p className={`mt-2 text-gray-600 ${featured ? "text-base leading-7" : "text-sm leading-6 line-clamp-3"}`}>
          {post.excerpt}
        </p>
        <p className="mt-auto flex items-center gap-2 pt-4 text-xs text-gray-500">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <Clock className="h-3.5 w-3.5" />
          {post.readingMinutes} min de lectura
        </p>
      </div>
    </Link>
  );
}
