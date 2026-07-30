import Image from "next/image";
import Link from "next/link";
import type { ArticleMeta } from "@/types/article";
import ArticleCard from "@/components/ArticleCard";
import SectionHeader from "@/components/SectionHeader";
import { getCategoryName } from "@/lib/categories";

export type SectionVariant = "lead-grid" | "trio" | "rail" | "overlay-duo" | "mosaic";

/* A slim text row used beside a lead story. */
function CompactRow({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group flex items-center gap-4 border-b border-border py-4 last:border-b-0"
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden sm:h-24 sm:w-24">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="96px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div>
        <span className="label-sm text-gold">{getCategoryName(article.category)}</span>
        <h3 className="font-serif mt-1 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent sm:text-xl">
          {article.title}
        </h3>
      </div>
    </Link>
  );
}

/* Large image with type laid over it. */
function OverlayCard({ article }: { article: ArticleMeta }) {
  return (
    <Link href={`/article/${article.slug}`} className="group relative block overflow-hidden">
      <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
        <span className="label-sm text-white/85">{getCategoryName(article.category)}</span>
        <h3 className="font-serif mt-2 max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-4xl">
          {article.title}
        </h3>
        <p className="mt-2 hidden max-w-xl text-sm text-white/80 sm:block">{article.excerpt}</p>
      </div>
    </Link>
  );
}

function Body({
  variant,
  articles,
}: {
  variant: SectionVariant;
  articles: ArticleMeta[];
}) {
  switch (variant) {
    case "lead-grid": {
      const [lead, ...rest] = articles;
      return (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {lead && (
            <ArticleCard
              article={lead}
              aspect="4/5"
              headingClass="text-2xl sm:text-3xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          )}
          <div className="flex flex-col">
            {rest.slice(0, 4).map((article) => (
              <CompactRow key={article.slug} article={article} />
            ))}
          </div>
        </div>
      );
    }

    case "rail":
      return (
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          {articles.slice(0, 8).map((article) => (
            <div
              key={article.slug}
              className="w-[70vw] shrink-0 snap-start sm:w-[38%] lg:w-[30%]"
            >
              <ArticleCard
                article={article}
                aspect="3/4"
                headingClass="text-xl"
                sizes="(min-width: 1024px) 30vw, 70vw"
              />
            </div>
          ))}
        </div>
      );

    case "overlay-duo": {
      const [lead, ...rest] = articles;
      return (
        <div className="flex flex-col gap-10">
          {lead && <OverlayCard article={lead} />}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {rest.slice(0, 2).map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                aspect="16/10"
                headingClass="text-xl sm:text-2xl"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </div>
      );
    }

    case "mosaic": {
      const [lead, ...rest] = articles;
      return (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {lead && (
            <ArticleCard
              article={lead}
              aspect="4/5"
              headingClass="text-2xl sm:text-3xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          )}
          <div className="flex flex-col gap-8">
            {rest.slice(0, 2).map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                aspect="16/10"
                headingClass="text-xl sm:text-2xl"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            ))}
          </div>
        </div>
      );
    }

    case "trio":
    default:
      return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} aspect="4/5" />
          ))}
        </div>
      );
  }
}

export default function CategorySection({
  title,
  tagline,
  categorySlug,
  articles,
  variant,
}: {
  title: string;
  tagline: string;
  categorySlug: string;
  articles: ArticleMeta[];
  variant: SectionVariant;
}) {
  if (articles.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <SectionHeader title={title} tagline={tagline} href={`/category/${categorySlug}`} />
      <div className="mt-10">
        <Body variant={variant} articles={articles} />
      </div>
    </section>
  );
}
