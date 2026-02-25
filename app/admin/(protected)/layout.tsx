import "server-only";

import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import AdminShell from "@/components/admin/AdminShell";

export const runtime = "nodejs";

export default async function AdminProtectedLayout ( {
    children,
}: {
    children: React.ReactNode;
} )
{
    const { userId } = await auth();
    if ( !userId ) redirect( "/admin/sign-in" );

    const adminId =
        process.env.CLERK_ADMIN_USER_ID?.trim() ||
        process.env.ADMIN_CLERK_USER_ID?.trim() ||
        "";

    if ( !adminId ) redirect( "/admin/auth-error?reason=missing_admin_id" );
    if ( userId !== adminId ) redirect( "/admin/forbidden" );

    return <AdminShell>{ children }</AdminShell>;
}
