import { headers } from "next/headers";

// --- Types ---

export type AdminContactMessageStatus = "NEW" | "READ" | "REPLIED" | "ARCHIVED";

export type AdminContactMessage = {
  id: string;
  fullName: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message?: string | null;
  status: AdminContactMessageStatus;
  createdAt: string | Date;
  updatedAt?: string | Date | null;
};

export type AdminContactMessageListResponse = {
  items: AdminContactMessage[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export type AdminBlogPost = {
  id: string;
  title: string;
  slug: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  publishedAt?: string | Date | null;
  category?: { name: string } | null;
  isFeatured?: boolean;
};

export type AdminBlogPostListResponse = {
  items: AdminBlogPost[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

// --- Helpers ---

async function getBaseUrl() {
  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = headersList.get("x-forwarded-proto") || "http";
  return `${protocol}://${host}`;
}

// --- Fetch Functions ---

export async function fetchAdminContactMessages(params?: {
  page?: number;
  pageSize?: number;
  q?: string;
  status?: string;
}): Promise<AdminContactMessageListResponse> {
  const baseUrl = await getBaseUrl();
  const search = new URLSearchParams();

  if (params?.page) search.set("page", String(params.page));
  if (params?.pageSize) search.set("pageSize", String(params.pageSize));
  if (params?.q) search.set("q", params.q);
  if (params?.status) search.set("status", params.status);

  const res = await fetch(`${baseUrl}/api/admin/contact-messages?${search.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch admin contact messages");
  }

  return res.json();
}

export async function fetchAdminBlogPosts(params?: {
  page?: number;
  pageSize?: number;
  q?: string;
  status?: string;
}): Promise<AdminBlogPostListResponse> {
  const baseUrl = await getBaseUrl();
  const search = new URLSearchParams();

  if (params?.page) search.set("page", String(params.page));
  if (params?.pageSize) search.set("pageSize", String(params.pageSize));
  if (params?.q) search.set("q", params.q);
  if (params?.status) search.set("status", params.status);

  // ✅ FIX: Updated URL to point to /blog/posts
  const res = await fetch(`${baseUrl}/api/admin/blog/posts?${search.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // Log the error text to help debugging if it fails again
    const errorText = await res.text();
    console.error("API Error:", errorText);
    throw new Error(`Failed to fetch admin blog posts: ${res.status} ${res.statusText}`);
  }

  return res.json();
}