import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <span className="label-sm block text-gold">
          &#9733;&nbsp;&nbsp;The Tar Heel State&nbsp;&nbsp;&#9733;
        </span>
        <Link
          href="/"
          className="font-serif mt-3 block text-3xl font-semibold tracking-wide text-foreground"
        >
          North Carolina Society
        </Link>

        <div className="rule-gold mx-auto mt-6 max-w-xs" />

        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="label text-ink-soft transition-colors hover:text-accent"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        <p className="mx-auto mt-10 max-w-md text-sm leading-relaxed text-muted">
          An editorial journal of business, beauty, style, travel, design and
          society across the Tar Heel State. Independent and reader-supported.
        </p>

        <p className="label-sm mt-8 text-muted">
          &copy; {year} North Carolina Society. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
