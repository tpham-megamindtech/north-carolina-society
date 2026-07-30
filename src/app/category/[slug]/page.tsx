import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";
import { CATEGORIES, getCategoryName, getCategoryTagline, isValidCategory } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";

const PER_PAGE = 12;

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isValidCategory(slug)) return {};
  return { title: getCategoryName(slug), description: getCategoryTagline(slug) };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  if (!isValidCategory(slug)) notFound();

  const { page } = await searchParams;
  const articles = getArticlesByCategory(slug);

  const totalPages = Math.max(1, Math.ceil(articles.length / PER_PAGE));
  const currentPage = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const start = (currentPage - 1) * PER_PAGE;
  const pageArticles = articles.slice(start, start + PER_PAGE);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="text-center">
        <span className="label-sm text-gold">The North Carolina Edit</span>
        <h1 className="font-serif mt-3 text-5xl font-semibold text-foreground sm:text-6xl">
          {getCategoryName(slug)}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg italic text-muted">
          {getCategoryTagline(slug)}
        </p>
        <div className="rule-gold mx-auto mt-8 max-w-sm" />
      </header>

      {pageArticles.length === 0 ? (
        <p className="mt-16 text-center text-muted">No stories in this section yet.</p>
      ) : (
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {pageArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} aspect="4/5" />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath={`/category/${slug}`}
      />
    </div>
  );
}
