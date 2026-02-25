import "server-only";
import { headers } from "next/headers";

export async function getBaseUrl() {
  const h = await headers(); // ✅ FIX: await headers()

  const proto = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("x-forwarded-host") ?? h.get("host");

  if (!host) return "http://localhost:3000"; // safe fallback for dev

  return `${proto}://${host}`;
}
