import "server-only";
import { auth, currentUser } from "@clerk/nextjs/server";
import { HttpError } from "@/lib/server/http";

export async function requireAdmin() {
  const { userId } = await auth(); // ✅ FIX: await auth()

  if (!userId) {
    throw new HttpError(401, "Unauthenticated", "UNAUTHENTICATED");
  }

  const adminId = process.env.ADMIN_CLERK_USER_ID?.trim();
  const adminEmail = process.env.ADMIN_EMAIL?.trim()?.toLowerCase();

  if (adminId && userId === adminId) return { userId };

  if (adminEmail) {
    const user = await currentUser();
    const email = user?.emailAddresses?.[0]?.emailAddress?.toLowerCase();
    if (email && email === adminEmail) return { userId };
  }

  throw new HttpError(403, "Forbidden", "FORBIDDEN");
}
