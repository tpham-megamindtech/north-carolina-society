import Link from "next/link";

export default function SectionHeader({
  title,
  tagline,
  href,
}: {
  title: string;
  tagline: string;
  href: string;
}) {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-1.5 max-w-md text-sm italic text-muted">{tagline}</p>
        </div>
        <Link
          href={href}
          className="label shrink-0 whitespace-nowrap text-ink-soft transition-colors hover:text-accent"
        >
          View All <span aria-hidden>&rarr;</span>
        </Link>
      </div>
      <div className="rule-gold mt-5" />
    </div>
  );
}
