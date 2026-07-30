"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { ArticleMeta } from "@/types/article";
import ArticleCard from "@/components/ArticleCard";
import { getCategoryName } from "@/lib/categories";

export default function SearchClient({ articles }: { articles: ArticleMeta[] }) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) return [];
    return articles.filter((article) => {
      const haystack = [
        article.title,
        article.excerpt,
        getCategoryName(article.category),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [articles, query]);

  const trimmed = query.trim();

  return (
    <div>
      <header className="text-center">
        <span className="label-sm text-gold">The Archive</span>
        <h1 className="font-serif mt-3 text-5xl font-semibold text-foreground sm:text-6xl">
          Search
        </h1>
        <div className="mx-auto mt-8 flex max-w-md items-center gap-3 border-b border-hairline pb-2 focus-within:border-accent">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="h-5 w-5 shrink-0 text-muted"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search stories, sections, subjects…"
            aria-label="Search articles"
            className="font-serif w-full bg-transparent text-xl text-foreground placeholder:text-muted focus:outline-none"
          />
        </div>
      </header>

      <div className="mt-14">
        {trimmed.length === 0 ? (
          <p className="text-center text-muted">
            Type a word or two to search the North Carolina Society archive.
          </p>
        ) : results.length === 0 ? (
          <p className="text-center text-muted">
            No stories found for &ldquo;{trimmed}&rdquo;.
          </p>
        ) : (
          <>
            <p className="label-sm mb-12 text-center text-muted">
              {results.length} {results.length === 1 ? "Story" : "Stories"} Found
            </p>
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((article) => (
                <ArticleCard key={article.slug} article={article} aspect="4/5" />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
