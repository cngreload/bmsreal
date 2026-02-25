import { jsonError, jsonOk } from "@/lib/server/http";
import { requireAdmin } from "@/lib/server/auth";
import {
  adminGetContactMessage,
  adminUpdateContactMessage,
} from "@/lib/server/contact-service";

export const runtime = "nodejs";

type RouteCtx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, ctx: RouteCtx) {
  try {
    await requireAdmin();
    // Next.js 15: must await params
    const { id } = await ctx.params;
    
    const result = await adminGetContactMessage(id);
    return jsonOk(result);
  } catch (err) {
    return jsonError(err);
  }
}

export async function PATCH(req: Request, ctx: RouteCtx) {
  try {
    await requireAdmin();
    // Next.js 15: must await params
    const { id } = await ctx.params;

    // FIX: Type cast the body to match the service function's signature
    const body = (await req.json()) as { status: string };

    const result = await adminUpdateContactMessage(id, body);
    return jsonOk(result);
  } catch (err) {
    return jsonError(err);
  }
}