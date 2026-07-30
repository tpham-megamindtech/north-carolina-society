import Image from "next/image";
import Link from "next/link";
import type { ArticleMeta } from "@/types/article";
import { getCategoryName } from "@/lib/categories";

export default function Hero({ article }: { article: ArticleMeta }) {
  return (
    <Link href={`/article/${article.slug}`} className="group relative block">
      <div className="relative h-[72vh] min-h-[460px] w-full overflow-hidden sm:h-[82vh]">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        {/* Darken toward the bottom so the white type stays legible. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-4xl px-6 pb-14 text-center sm:pb-20">
            <span className="label-sm text-white/85">
              {getCategoryName(article.category)}
              <span className="mx-3 text-gold-soft">&#9670;</span>
              The Cover Story
            </span>
            <h1 className="font-serif mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl">
              {article.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {article.excerpt}
            </p>
            <span className="label mt-7 inline-block border-b border-gold-soft/70 pb-1 text-white transition-colors group-hover:text-gold-soft">
              Read the Story
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
