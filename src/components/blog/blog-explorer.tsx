"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { BLOG_CATEGORIES, type BlogCategory } from "@/lib/blog-categories";
import { BlogCard, type BlogPostSummary } from "@/components/blog/blog-card";

/** Normaliza para buscar sin importar tildes ni mayúsculas. */
const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export function BlogExplorer({ posts }: { posts: BlogPostSummary[] }) {
  const [category, setCategory] = useState<BlogCategory | "todas">("todas");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return posts.filter(
      (p) =>
        (category === "todas" || p.category === category) &&
        (!q || normalize(`${p.title} ${p.excerpt}`).includes(q))
    );
  }, [posts, category, query]);

  const showFeatured = category === "todas" && !query.trim() && filtered.length > 0;
  const [featured, ...rest] = filtered;
  const list = showFeatured ? rest : filtered;

  return (
    <div>
      {/* Barra de búsqueda estilo iOS */}
      <div className="relative mx-auto mb-5 max-w-xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar: manchas, colchón, vidrios…"
          aria-label="Buscar en el blog"
          className="h-11 w-full rounded-xl border border-transparent bg-gray-900/[0.06] pl-11 pr-10 text-base text-gray-900 placeholder:text-gray-500 transition focus:border-emerald-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/15"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-gray-400/80 p-0.5 text-white"
            aria-label="Borrar búsqueda"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Control segmentado de categorías */}
      <div className="-mx-4 mb-10 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex w-max gap-1 rounded-full bg-gray-900/[0.06] p-1" role="tablist" aria-label="Categorías del blog">
          {BLOG_CATEGORIES.map((cat) => {
            const active = category === cat.value;
            return (
              <button
                key={cat.value}
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(cat.value)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  active ? "bg-white text-emerald-700 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {showFeatured && (
        <div className="mb-8">
          <BlogCard post={featured} featured />
        </div>
      )}

      {list.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        !showFeatured && (
          <div className="rounded-[24px] bg-white p-10 text-center ring-1 ring-black/5">
            <p className="text-lg font-semibold text-gray-900">No encontramos artículos</p>
            <p className="mt-1 text-gray-600">Prueba con otra palabra o elige otra categoría.</p>
          </div>
        )
      )}
    </div>
  );
}
