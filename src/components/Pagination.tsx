import Link from "next/link";

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const hrefFor = (page: number) => (page === 1 ? basePath : `${basePath}?page=${page}`);

  return (
    <nav className="mt-20 flex items-center justify-center gap-6" aria-label="Pagination">
      {currentPage > 1 ? (
        <Link href={hrefFor(currentPage - 1)} className="label text-ink-soft hover:text-accent">
          <span aria-hidden>&larr;</span> Prev
        </Link>
      ) : (
        <span className="label text-muted/40">
          <span aria-hidden>&larr;</span> Prev
        </span>
      )}

      <div className="flex items-center gap-4">
        {pages.map((page) => (
          <Link
            key={page}
            href={hrefFor(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`font-serif text-lg transition-colors ${
              page === currentPage
                ? "text-accent underline decoration-gold underline-offset-4"
                : "text-muted hover:text-foreground"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {currentPage < totalPages ? (
        <Link href={hrefFor(currentPage + 1)} className="label text-ink-soft hover:text-accent">
          Next <span aria-hidden>&rarr;</span>
        </Link>
      ) : (
        <span className="label text-muted/40">
          Next <span aria-hidden>&rarr;</span>
        </span>
      )}
    </nav>
  );
}
