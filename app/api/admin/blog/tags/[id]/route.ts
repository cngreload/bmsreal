import { jsonError, jsonOk } from "@/lib/server/http";
import { requireAdmin } from "@/lib/server/auth";
import { adminDeleteTag, adminUpdateTag, TagInput } from "@/lib/server/blog-service";

type RouteCtx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, ctx: RouteCtx) {
  try {
    await requireAdmin();
    const { id } = await ctx.params;
    const body = (await req.json()) as Partial<TagInput>;
    const result = await adminUpdateTag(id, body);
    return jsonOk(result);
  } catch (err) { return jsonError(err); }
}

export async function DELETE(_req: Request, ctx: RouteCtx) {
  try {
    await requireAdmin();
    const { id } = await ctx.params;
    return jsonOk(await adminDeleteTag(id));
  } catch (err) { return jsonError(err); }
}