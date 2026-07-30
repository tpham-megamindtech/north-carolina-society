import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { formatDate } from "@/lib/formatDate";
import { getCategoryName } from "@/lib/categories";
import { getAllArticleSlugs, getArticleBySlug, getRelatedArticles } from "@/lib/articles";

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 3);

  return (
    <article>
      {/* Full-bleed cover */}
      <figure className="relative h-[62vh] min-h-[380px] w-full overflow-hidden">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </figure>
      <figcaption className="mx-auto max-w-3xl px-4 pt-3 text-right text-xs text-muted sm:px-6">
        {article.imageCredit}
      </figcaption>

      {/* Title block */}
      <header className="mx-auto max-w-3xl px-4 pt-10 text-center sm:px-6">
        <Link
          href={`/category/${article.category}`}
          className="label-sm text-gold transition-colors hover:text-accent"
        >
          {getCategoryName(article.category)}
        </Link>
        <h1 className="font-serif mt-5 text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
          {article.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl italic leading-relaxed text-ink-soft">
          {article.excerpt}
        </p>

        <div className="mt-7 flex items-center justify-center gap-3 text-muted">
          <time dateTime={article.date} className="label-sm">
            {formatDate(article.date)}
          </time>
          <span className="text-gold-soft" aria-hidden>
            &#9670;
          </span>
          <span className="label-sm">{article.readingTime}</span>
        </div>

        <div className="rule-gold mx-auto mt-8 max-w-xs" />
      </header>

      {/* Body */}
      <div
        className="prose-editorial mx-auto mt-10 max-w-2xl px-4 sm:px-6"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <span className="label-sm text-gold">Continue Reading</span>
            <h2 className="font-serif mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Related Stories
            </h2>
            <div className="rule-gold mx-auto mt-6 max-w-xs" />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} aspect="4/5" />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
