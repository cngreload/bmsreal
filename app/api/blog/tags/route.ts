import { jsonError, jsonOk } from "@/lib/server/http";
import { listPublicTags } from "@/lib/server/blog-service";

export const runtime = "nodejs";

export async function GET() {
  try {
    return jsonOk(await listPublicTags());
  } catch (err) {
    return jsonError(err);
  }
}
