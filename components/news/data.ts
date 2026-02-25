// components/news/data.ts
import { RAW_NEWS_DATA } from './index';
import type { NewsItem, NewsCategory } from './types';

// Export types
export type { NewsItem, NewsCategory } from './types';

// 🧠 NEW TYPE: For the Category Filter Object
export interface NewsCategoryObject {
    id: string;
    name: NewsCategory; // Ensures the name is one of the valid union types
    slug: string;
}

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\u0600-\u06FF\w-]+/g, '');
};

// ... (getFeaturedNews, getAllNews, getNewsBySlug, getRelatedNews, getPaginatedNews remain the same) ...

// 1. Featured News (Homepage Hero)
export const getFeaturedNews = (): NewsItem[] => {
    return RAW_NEWS_DATA
      .filter((n) => n.isFeatured)
      .sort((a, b) => a.newsPriority - b.newsPriority)
      .slice(0, 3);
  };
  
  // 2. All News (Archive - Newest First)
  export const getAllNews = (): NewsItem[] => {
    return [...RAW_NEWS_DATA].sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  };
  
  // 3. Single News by Slug
  export const getNewsBySlug = (slug: string): NewsItem | undefined => {
    return RAW_NEWS_DATA.find((n) => n.slug === slug);
  };
  
  // 4. Related News Logic
  export const getRelatedNews = (ids: string[] = []): NewsItem[] => {
    if (!ids || ids.length === 0) return [];
    return RAW_NEWS_DATA.filter((n) => ids.includes(n.slug));
  };
  
  // 5. Pagination & Filtering Logic (For the main /news page)
  export const getPaginatedNews = (
    page: number = 1, 
    pageSize: number = 9, 
    category?: string, 
    query?: string
  ) => {
    let filtered = [...RAW_NEWS_DATA];
  
    // Filter by Category (Case-insensitive for robustness)
    if (category) {
      const categoryLower = category.toLowerCase();
      filtered = filtered.filter(item => slugify(item.category).toLowerCase() === categoryLower);
    }
  
    // Filter by Search Query (Case-insensitive)
    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.summary.toLowerCase().includes(q)
      );
    }
  
    // Sort by newest first
    filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  
    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const start = (page - 1) * pageSize;
    const items = filtered.slice(start, start + pageSize);
  
    return { items, totalPages, totalItems };
  };

// 6. Get Categories List (FIXED RETURN TYPE)
export const getCategories = (): NewsCategoryObject[] => {
    // Cast to NewsCategory to satisfy the union type if data is valid
    const categoryNames = Array.from(new Set(RAW_NEWS_DATA.map(n => n.category))) as NewsCategory[];
    
    return categoryNames.map((name, i) => ({ 
        id: String(i), 
        name: name, 
        slug: slugify(name) 
    }));
};