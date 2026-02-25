// app/admin/(protected)/contact-messages/page.tsx
import { fetchAdminContactMessages } from "@/lib/admin-api";
import { AdminContactMessagesTable } from "@/components/admin/contact/AdminContactMessagesTable";

export const dynamic = "force-dynamic";

type AdminContactMessagesSearchParams = {
    page?: string | string[];
    q?: string | string[];
    status?: string | string[];
};

export default async function AdminContactMessagesPage ( {
    searchParams,
}: {
    searchParams?: Promise<AdminContactMessagesSearchParams>;
} )
{
    const sp = ( ( await searchParams ) ??
        {} ) as AdminContactMessagesSearchParams;

    const rawPage =
        typeof sp.page === "string"
            ? sp.page
            : Array.isArray( sp.page )
                ? sp.page[ 0 ]
                : "1";

    const currentPage = Number( rawPage ?? "1" ) || 1;

    const q =
        typeof sp.q === "string"
            ? sp.q
            : Array.isArray( sp.q )
                ? sp.q[ 0 ]
                : undefined;

    const status =
        typeof sp.status === "string"
            ? sp.status
            : Array.isArray( sp.status )
                ? sp.status[ 0 ]
                : undefined;

    const data = await fetchAdminContactMessages( {
        page: currentPage,
        pageSize: 20,
        q,
        status,
    } );

    return (
        <div className="mx-auto max-w-6xl px-4 py-6">
            <AdminContactMessagesTable
                messages={ data.items }
                page={ data.page }
                totalPages={ data.totalPages }
            />
        </div>
    );
}
