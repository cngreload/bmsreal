// lib/server-api.ts
import { headers } from "next/headers";

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
};

export type BlogTag = {
  id: string;
  name: string;
  slug: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  content?: string | null;
  coverImageUrl?: string | null;
  publishedAt?: string | null;
  category?: BlogCategory | null;
  tags?: BlogTag[];
};

export type PaginatedBlogResponse = {
  items: BlogPost[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

/**
 * Next.js 15 Helper to get the base URL for server-side fetches.
 * We must await headers() now.
 */
async function getBaseUrl() {
  const headList = await headers(); 
  const host = headList.get("host") ?? "localhost:3000";
  const protocol = headList.get("x-forwarded-proto") ?? "http";
  
  return `${protocol}://${host}`;
}

export async function fetchBlogPosts(params?: {
  page?: number;
  pageSize?: number;
  q?: string;
  category?: string;
  tag?: string;
}): Promise<PaginatedBlogResponse> {
  const baseUrl = await getBaseUrl();
  const search = new URLSearchParams();

  if (params?.page) search.set("page", String(params.page));
  if (params?.pageSize) search.set("pageSize", String(params.pageSize));
  if (params?.q) search.set("q", params.q);
  if (params?.category) search.set("category", params.category);
  if (params?.tag) search.set("tag", params.tag);

  const url = `${baseUrl}/api/blog${search.toString() ? `?${search.toString()}` : ""}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  return res.json();
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost> {
  const baseUrl = await getBaseUrl();
  const url = `${baseUrl}/api/blog/${encodeURIComponent(slug)}`;

  const res = await fetch(url, { cache: "no-store" });

  if (res.status === 404) {
    throw new Error("NOT_FOUND");
  }

  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }

  return res.json();
}

export async function fetchBlogCategories(): Promise<BlogCategory[]> {
  const baseUrl = await getBaseUrl();
  const url = `${baseUrl}/api/blog/categories`;

  const res = await fetch(url, { cache: "force-cache" });

  if (!res.ok) {
    throw new Error("Failed to fetch blog categories");
  }

  return res.json();
}

export async function fetchBlogTags(): Promise<BlogTag[]> {
  const baseUrl = await getBaseUrl();
  const url = `${baseUrl}/api/blog/tags`;

  const res = await fetch(url, { cache: "force-cache" });

  if (!res.ok) {
    throw new Error("Failed to fetch blog tags");
  }

  return res.json();
}