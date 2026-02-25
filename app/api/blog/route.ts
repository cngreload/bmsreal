import { jsonError, jsonOk, parsePagination } from "@/lib/server/http";
import { listPublicPosts } from "@/lib/server/blog-service";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const sp = url.searchParams;
    const { page, pageSize, skip, take } = parsePagination(sp);

    const category = sp.get("category");
    const tag = sp.get("tag");
    const q = sp.get("q");

    const data = await listPublicPosts({ page, pageSize, skip, take, category, tag, q });
    return jsonOk(data);
  } catch (err) {
    return jsonError(err);
  }
}
