import Hero from "@/components/Hero";
import CategorySection, { type SectionVariant } from "@/components/CategorySection";
import { CATEGORIES } from "@/lib/categories";
import { getFeaturedArticle, getArticlesByCategory } from "@/lib/articles";
import type { CategorySlug } from "@/types/article";

/* Each section gets a distinct editorial layout so the page reads like a book. */
const VARIANTS: Record<CategorySlug, SectionVariant> = {
  business: "lead-grid",
  "beauty-wellness": "trio",
  "style-fashion": "rail",
  "travel-leisure": "overlay-duo",
  "homes-design": "mosaic",
  "society-culture": "trio",
};

/* How many stories each layout wants to render. */
const COUNTS: Record<SectionVariant, number> = {
  "lead-grid": 5,
  trio: 3,
  rail: 8,
  "overlay-duo": 3,
  mosaic: 3,
};

export default function Home() {
  const featured = getFeaturedArticle();

  return (
    <div>
      <Hero article={featured} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="divide-y divide-border">
          {CATEGORIES.map((category) => {
            const variant = VARIANTS[category.slug];
            const articles = getArticlesByCategory(category.slug)
              .filter((article) => article.slug !== featured.slug)
              .slice(0, COUNTS[variant]);

            return (
              <CategorySection
                key={category.slug}
                title={category.name}
                tagline={category.tagline}
                categorySlug={category.slug}
                articles={articles}
                variant={variant}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
