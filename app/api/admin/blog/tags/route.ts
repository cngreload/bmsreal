import { requireAdmin } from "@/lib/server/auth";
import { jsonError, jsonOk } from "@/lib/server/http";
import { adminCreateTag, adminListTags } from "@/lib/server/blog-service";

export const runtime = "nodejs";

export async function GET() {
  try {
    await requireAdmin();
    return jsonOk(await adminListTags());
  } catch (err) {
    return jsonError(err);
  }
}

export async function POST(req: Request) {
  try {
    await requireAdmin();
    const body = await req.json();
    return jsonOk(await adminCreateTag(body), 201);
  } catch (err) {
    return jsonError(err);
  }
}