export type CategorySlug =
  | "business"
  | "beauty-wellness"
  | "style-fashion"
  | "travel-leisure"
  | "homes-design"
  | "society-culture";

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  coverImage: string;
  imageCredit: string;
  date: string;
  featured?: boolean;
}

export interface Article extends ArticleMeta {
  contentHtml: string;
  readingTime: string;
}
