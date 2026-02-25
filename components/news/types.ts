// components/news/types.ts
export type NewsCategory = 
  | 'فناوری' 
  | 'سلامت دیجیتال' 
  | 'اینترنت اشیاء صنعتی' 
  | 'اخبار شرکتی' 
  | 'رویدادها' 
  | 'مقالات فنی';

export interface NewsItem {
  slug: string;
  title: string;
  summary: string;
  content: string; // HTML content
  image: string;
  category: string;
  author: string;
  publishedAt: string; // ISO 8601 format
  readingTime: string;
  isFeatured: boolean;
  newsPriority: number;
  relatedIds: string[]; // Array of slugs
}