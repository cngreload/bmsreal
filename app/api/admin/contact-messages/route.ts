import { jsonError, jsonOk } from "@/lib/server/http";
import { requireAdmin } from "@/lib/server/auth";
import { adminListContactMessages } from "@/lib/server/contact-service";

export const runtime = "nodejs";

function toInt(v: string | null, fallback: number) {
  const n = v ? Number.parseInt(v, 10) : NaN;
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

export async function GET(req: Request) {
  try {
    await requireAdmin();

    const sp = new URL(req.url).searchParams;

    const page = toInt(sp.get("page"), 1);
    const pageSize = toInt(sp.get("pageSize"), 20);

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const result = await adminListContactMessages({
      page,
      pageSize,
      skip,
      take,
      status: sp.get("status"),
    });

    return jsonOk(result);
  } catch (err) {
    return jsonError(err);
  }
}
