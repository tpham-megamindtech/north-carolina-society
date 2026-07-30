import Image from "next/image";
import Link from "next/link";
import type { ArticleMeta } from "@/types/article";
import { getCategoryName } from "@/lib/categories";

type Aspect = "4/5" | "3/4" | "1/1" | "16/9" | "16/10";

const ASPECT_CLASS: Record<Aspect, string> = {
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "16/9": "aspect-[16/9]",
  "16/10": "aspect-[16/10]",
};

export default function ArticleCard({
  article,
  aspect = "4/5",
  showExcerpt = true,
  headingClass = "text-xl sm:text-2xl",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  article: ArticleMeta;
  aspect?: Aspect;
  showExcerpt?: boolean;
  headingClass?: string;
  sizes?: string;
}) {
  return (
    <Link href={`/article/${article.slug}`} className="group flex flex-col">
      <div className={`relative w-full overflow-hidden ${ASPECT_CLASS[aspect]}`}>
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <span className="label-sm text-gold">{getCategoryName(article.category)}</span>
        <h3
          className={`font-serif mt-2 font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-accent ${headingClass}`}
        >
          {article.title}
        </h3>
        {showExcerpt && (
          <p className="mt-2 line-clamp-2 text-[0.95rem] leading-relaxed text-muted">
            {article.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
