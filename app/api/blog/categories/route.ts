import { jsonError, jsonOk } from "@/lib/server/http";
import { listPublicCategories } from "@/lib/server/blog-service";

export const runtime = "nodejs";

export async function GET() {
  try {
    return jsonOk(await listPublicCategories());
  } catch (err) {
    return jsonError(err);
  }
}
