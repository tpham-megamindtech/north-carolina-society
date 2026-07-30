import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Utility row: geography marker + search */}
        <div className="flex items-center justify-between py-3">
          <span className="label-sm hidden text-muted sm:block">The Old North State</span>
          <span className="label-sm text-gold sm:hidden">N.C.</span>
          <SearchBar />
        </div>

        {/* Masthead */}
        <Link href="/" className="block text-center">
          <span className="label-sm mb-2 block text-gold">
            &#9733;&nbsp;&nbsp;The Tar Heel State&nbsp;&nbsp;&#9733;
          </span>
          <span className="font-serif block text-4xl font-semibold tracking-wide text-foreground sm:text-5xl md:text-6xl">
            North Carolina Society
          </span>
        </Link>

        <div className="rule-gold mt-4" />

        {/* Section navigation, evenly distributed */}
        <nav className="no-scrollbar flex items-center justify-start gap-6 overflow-x-auto py-3.5 sm:justify-center sm:gap-9">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="label shrink-0 whitespace-nowrap text-ink-soft transition-colors hover:text-accent"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
