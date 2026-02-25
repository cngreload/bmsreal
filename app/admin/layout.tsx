import { ClerkProvider } from "@clerk/nextjs";

export const runtime = "nodejs";

export default function AdminLayout ( { children }: { children: React.ReactNode; } )
{
    return <ClerkProvider dynamic>{ children }</ClerkProvider>;
}
