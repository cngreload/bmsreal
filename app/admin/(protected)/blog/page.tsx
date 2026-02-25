// app/admin/(protected)/blog/page.tsx
import { fetchAdminBlogPosts } from "@/lib/admin-api";
import { AdminBlogTable } from "@/components/admin/blog/AdminBlogTable";

export const dynamic = "force-dynamic";

type AdminBlogPageSearchParams = {
    page?: string | string[];
    q?: string | string[];
    status?: string | string[];
};

export default async function AdminBlogPage ( {
    searchParams,
}: {
    searchParams?: Promise<AdminBlogPageSearchParams>;
} )
{
    const sp = ( ( await searchParams ) ?? {} ) as AdminBlogPageSearchParams;

    const currentPage =
        Number(
            typeof sp.page === "string"
                ? sp.page
                : Array.isArray( sp.page )
                    ? sp.page[ 0 ]
                    : "1"
        ) || 1;

    const q =
        typeof sp.q === "string"
            ? sp.q
            : Array.isArray( sp.q )
                ? sp.q[ 0 ]
                : undefined;

    const status =
        typeof sp.status === "string" &&
            ( sp.status === "PUBLISHED" || sp.status === "DRAFT" || sp.status === "ARCHIVED" )
            ? sp.status
            : "ALL";

    const data = await fetchAdminBlogPosts( {
        page: currentPage,
        pageSize: 20,
        q,
        status,
    } );

    // فقط فیلدهای لازم برای جدول ادمین رو normalize کن
    const normalizedPosts = data.items.map( ( post ) => ( {
        ...post,

        // تبدیل تاریخ به string اگر Date بود
        publishedAt:
            post.publishedAt instanceof Date
                ? post.publishedAt.toISOString()
                : post.publishedAt ?? null,

        // category فقط name داره — نیازی به id و slug نیست
        category: post.category
            ? { name: post.category.name }
            : null,

        // isFeatured پیش‌فرض
        isFeatured: post.isFeatured ?? false,

        // فیلدهای اضافی مثل content, excerpt و ... رو اضافه نکن
        // چون در AdminBlogPost تعریف نشدن و لازم هم نیستن
    } ) );

    return (
        <div className="mx-auto max-w-6xl px-4 py-6">
            <AdminBlogTable
                posts={ normalizedPosts }
                page={ data.page }
                totalPages={ data.totalPages }
            />
        </div>
    );
}