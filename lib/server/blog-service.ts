// lib/server/blog-service.ts
import "server-only";
import { prisma } from "@/lib/prisma";
import { makeSlug } from "@/lib/server/slug";
import { Prisma, PostStatus } from "@prisma/client";
import { HttpError } from "@/lib/server/http";

/**
 * Type Definitions
 */
export interface ListPostsArgs {
  page: number;
  pageSize: number;
  skip: number;
  take: number;
  category?: string | null;
  tag?: string | null;
  q?: string | null;
  status?: string | null;
  categoryId?: string | null;
  tagId?: string | null;
}

export interface PostInput {
  title: string;
  content: string;
  slug?: string;
  excerpt?: string | null;        // ← تغییر از summary به excerpt
  coverImageUrl?: string | null;
  status?: PostStatus;
  publishedAt?: string | Date | null;
  categoryId?: string | null;
  tagIds?: string[];
}

export interface CategoryInput {
  name: string;
  slug?: string;
  description?: string | null;
}

export interface TagInput {
  name: string;
  slug?: string;
}

/* -------------------- Public API -------------------- */

export async function listPublicPosts(args: ListPostsArgs) {
  const where: Prisma.BlogPostWhereInput = {
    status: "PUBLISHED",
    publishedAt: { lte: new Date() },
  };

  if (args.category) where.category = { slug: args.category };
  if (args.tag) where.tags = { some: { slug: args.tag } };

  if (args.q) {
    const query = args.q.trim();
    where.OR = [
      { title: { contains: query, mode: "insensitive" } },
      { excerpt: { contains: query, mode: "insensitive" } }, // ← excerpt
    ];
  }

  const [totalItems, items] = await Promise.all([
    prisma.blogPost.count({ where }),
    prisma.blogPost.findMany({
      where,
      skip: args.skip,
      take: args.take,
      orderBy: { publishedAt: "desc" },
      include: {
        category: { select: { id: true, name: true, slug: true } },
        tags: { select: { id: true, name: true, slug: true } },
      },
    }),
  ]);

  return {
    items,
    page: args.page,
    pageSize: args.pageSize,
    totalItems,
    
    totalPages: Math.ceil(totalItems / args.pageSize),
  };
}

export async function getPublicPostBySlug(slug: string) {
  const post = await prisma.blogPost.findUnique({
    where: { slug },
    include: {
      category: { select: { id: true, name: true, slug: true } },
      tags: { select: { id: true, name: true, slug: true } },
    },
  });

  if (!post || post.status !== "PUBLISHED") {
    throw new HttpError(404, "پست مورد نظر یافت نشد", "NOT_FOUND");
  }

  return post;
}

/**
 * NEW: Fetches all categories for public use (e.g. sidebar filters)
 */
export async function listPublicCategories() {
  return await prisma.category.findMany({
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      slug: true,
    },
  });
}

/**
 * NEW: Fetches all tags for public use
 */
export async function listPublicTags() {
  return await prisma.tag.findMany({
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      slug: true,
    },
  });
}

/* -------------------- Admin Post API -------------------- */

export async function adminListPosts(args: ListPostsArgs) {
  const where: Prisma.BlogPostWhereInput = {};

  if (args.status) where.status = args.status as PostStatus;
  if (args.categoryId) where.categoryId = args.categoryId;
  if (args.tagId) where.tags = { some: { id: args.tagId } };

  if (args.q) {
    where.OR = [
      { title: { contains: args.q, mode: "insensitive" } },
      { excerpt: { contains: args.q, mode: "insensitive" } }, // ← excerpt
    ];
  }

  const [totalItems, items] = await Promise.all([
    prisma.blogPost.count({ where }),
    prisma.blogPost.findMany({
      where,
      skip: args.skip,
      take: args.take,
      orderBy: { updatedAt: "desc" },
      include: { category: { select: { id: true, name: true } } },
    }),
  ]);

  return {
    items,
    page: args.page,
    pageSize: args.pageSize,
    totalItems,
    totalPages: Math.ceil(totalItems / args.pageSize),
  };
}

export async function adminGetPost(id: string) {
  const post = await prisma.blogPost.findUnique({
    where: { id },
    include: {
      category: true,
      tags: true,
    },
  });

  if (!post) {
    throw new HttpError(404, "پست یافت نشد", "NOT_FOUND");
  }

  return {
    ...post,
    tagIds: post.tags.map((t) => t.id),
  };
}

export async function adminCreatePost(data: PostInput) {
  const { tagIds, categoryId, title, slug, ...rest } = data;
  const finalSlug = makeSlug(slug || title);

  const existing = await prisma.blogPost.findUnique({ where: { slug: finalSlug } });
  if (existing) throw new HttpError(409, "این نامک (Slug) قبلاً استفاده شده است", "CONFLICT");

  let publishedAtDate: Date | null = null;
  if (data.status === "PUBLISHED") {
    publishedAtDate = data.publishedAt ? new Date(data.publishedAt) : new Date();
  }

  return prisma.blogPost.create({
    data: {
      ...rest,
      title,
      slug: finalSlug,
      publishedAt: publishedAtDate,
      category: categoryId ? { connect: { id: categoryId } } : undefined,
      tags:
        tagIds && tagIds.length > 0
          ? { connect: tagIds.map((id) => ({ id })) }
          : undefined,
    },
  });
}

export async function adminUpdatePost(id: string, data: Partial<PostInput>) {
  const { tagIds, categoryId, slug, title, ...rest } = data;

  const updateData: Prisma.BlogPostUpdateInput = {
    ...rest,
  };

  if (title) updateData.title = title;
  if (slug) updateData.slug = makeSlug(slug);

  if (categoryId !== undefined) {
    updateData.category = categoryId
      ? { connect: { id: categoryId } }
      : { disconnect: true };
  }

  if (tagIds !== undefined) {
    updateData.tags = {
      set: tagIds.map((tid) => ({ id: tid })),
    };
  }

  if (data.status === "PUBLISHED" && !data.publishedAt) {
    updateData.publishedAt = new Date();
  }

  return prisma.blogPost.update({
    where: { id },
    data: updateData,
  });
}

export async function adminDeletePost(id: string) {
  return prisma.blogPost.delete({ where: { id } });
}

/* -------------------- Category Admin API -------------------- */

export async function adminListCategories() {
  return prisma.category.findMany({ orderBy: { name: "asc" } });
}

export async function adminCreateCategory(data: CategoryInput) {
  const slug = makeSlug(data.slug || data.name);
  return prisma.category.create({
    data: { ...data, slug },
  });
}

export async function adminUpdateCategory(id: string, data: Partial<CategoryInput>) {
  const updateData: Prisma.CategoryUpdateInput = { ...data };
  if (data.slug) updateData.slug = makeSlug(data.slug);

  return prisma.category.update({
    where: { id },
    data: updateData,
  });
}

export async function adminDeleteCategory(id: string) {
  const postCount = await prisma.blogPost.count({ where: { categoryId: id } });
  if (postCount > 0) {
    throw new HttpError(409, "این دسته‌بندی دارای پست است و قابل حذف نیست", "CONFLICT");
  }
  return prisma.category.delete({ where: { id } });
}

/* -------------------- Tag Admin API -------------------- */

export async function adminListTags() {
  return prisma.tag.findMany({ orderBy: { name: "asc" } });
}

export async function adminCreateTag(data: TagInput) {
  const slug = makeSlug(data.slug || data.name);
  return prisma.tag.create({
    data: { ...data, slug },
  });
}

export async function adminUpdateTag(id: string, data: Partial<TagInput>) {
  const updateData: Prisma.TagUpdateInput = { ...data };
  if (data.slug) updateData.slug = makeSlug(data.slug);

  return prisma.tag.update({
    where: { id },
    data: updateData,
  });
}

export async function adminDeleteTag(id: string) {
  const postCount = await prisma.blogPost.count({
    where: { tags: { some: { id } } },
  });
  if (postCount > 0) {
    throw new HttpError(409, "این تگ در پست‌ها استفاده شده است و قابل حذف نیست", "CONFLICT");
  }
  return prisma.tag.delete({ where: { id } });
}