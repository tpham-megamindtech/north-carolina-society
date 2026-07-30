import { Suspense } from "react";
import type { Metadata } from "next";
import SearchClient from "@/components/SearchClient";
import { getAllArticlesMeta } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the North Carolina Society archive.",
};

export default function SearchPage() {
  const articles = getAllArticlesMeta();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <Suspense fallback={null}>
        <SearchClient articles={articles} />
      </Suspense>
    </div>
  );
}
