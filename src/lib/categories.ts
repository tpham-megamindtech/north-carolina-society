import type { CategorySlug } from "@/types/article";

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Short editorial tagline shown on category pages */
  tagline: string;
}

/**
 * Display order is intentional and matches the magazine's section running order.
 */
export const CATEGORIES: Category[] = [
  {
    slug: "business",
    name: "Business",
    tagline: "Capital, banking and the new economy of the Carolinas.",
  },
  {
    slug: "beauty-wellness",
    name: "Beauty & Wellness",
    tagline: "The art of living well, from Asheville spas to Charlotte salons.",
  },
  {
    slug: "style-fashion",
    name: "Style & Fashion",
    tagline: "Designers, ateliers and the Southern sense of dress.",
  },
  {
    slug: "travel-leisure",
    name: "Travel & Leisure",
    tagline: "Blue Ridge peaks, Outer Banks shores and the retreats between.",
  },
  {
    slug: "homes-design",
    name: "Homes & Design",
    tagline: "Architecture, interiors and the finest addresses in the state.",
  },
  {
    slug: "society-culture",
    name: "Society & Culture",
    tagline: "Galas, patrons and the cultural life of North Carolina.",
  },
];

export function getCategoryName(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}

export function getCategoryTagline(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.tagline ?? "";
}

export function isValidCategory(slug: string): slug is CategorySlug {
  return CATEGORIES.some((c) => c.slug === slug);
}
