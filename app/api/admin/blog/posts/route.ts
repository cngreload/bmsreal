import { requireAdmin } from "@/lib/server/auth";
import { jsonError, jsonOk, parsePagination } from "@/lib/server/http";
import { adminCreatePost, adminListPosts } from "@/lib/server/blog-service";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    await requireAdmin();

    const url = new URL(req.url);
    const sp = url.searchParams;
    const { page, pageSize, skip, take } = parsePagination(sp);

    const status = sp.get("status") === "ALL" ? undefined : sp.get("status");
    const q = sp.get("q");

    const result = await adminListPosts({
      page,
      pageSize,
      skip,
      take,
      status,
      q,
    });

    return jsonOk(result);
  } catch (err) {
    return jsonError(err);
  }
}

export async function POST(req: Request) {
  try {
    await requireAdmin();
    const body = await req.json();

    const sanitizedData = {
      ...body,
      categoryId: body.categoryId || body.categoryIds?.[0] || null
    };

    const created = await adminCreatePost(sanitizedData);
    return jsonOk(created, 201);
  } catch (err) {
    return jsonError(err);
  }
}