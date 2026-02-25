import { jsonError, jsonOk } from "@/lib/server/http";
import { getPublicPostBySlug } from "@/lib/server/blog-service";

export const runtime = "nodejs";

export async function GET(_: Request, ctx: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await ctx.params;
    const data = await getPublicPostBySlug(slug);
    return jsonOk(data);
  } catch (err) {
    return jsonError(err);
  }
}
