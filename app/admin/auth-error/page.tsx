import Link from "next/link";

export const runtime = "nodejs";

export default async function AdminAuthErrorPage ( {
    searchParams,
}: {
    searchParams?: Promise<{ reason?: string; }>;
} )
{
    const sp = searchParams ? await searchParams : undefined;
    const reason = sp?.reason ?? "unknown";

    const items: string[] = [
        "در Vercel → Settings → Environment Variables مطمئن شو NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY و CLERK_SECRET_KEY ست شده‌اند.",
        "برای تک‌ادمین، مقدار CLERK_ADMIN_USER_ID (یا ADMIN_CLERK_USER_ID) را برابر User ID همان ادمین بگذار.",
        "اگر هنوز روی دامنه *.vercel.app هستی، ممکن است کلیدهای Production در Clerk مشکل ایجاد کنند؛ از کلیدهای Development استفاده کن یا دامنه اختصاصی وصل کن.",
    ];

    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="max-w-xl w-full rounded-2xl border border-odoo-200 bg-white p-6 shadow-sm">
                <h1 className="text-xl font-semibold text-bms-dark mb-2">خطا در احراز هویت ادمین</h1>
                <p className="text-sm text-odoo-600 mb-4">
                    Clerk/Config درست لود نشده یا مقدار ادمین مشخص نیست. دلیل: <b>{ reason }</b>
                </p>

                <ul className="list-disc pr-5 text-sm text-odoo-700 space-y-2">
                    { items.map( ( text ) => (
                        <li key={ text }>{ text }</li>
                    ) ) }
                </ul>

                <div className="mt-6 flex gap-3">
                    <Link
                        className="inline-flex items-center justify-center rounded-xl border border-odoo-200 px-4 py-2 text-sm hover:bg-odoo-50"
                        href="/admin/sign-in"
                    >
                        رفتن به ورود ادمین
                    </Link>
                    <Link
                        className="inline-flex items-center justify-center rounded-xl bg-bms-primary px-4 py-2 text-sm text-white"
                        href="/"
                    >
                        برگشت به سایت
                    </Link>
                </div>
            </div>
        </div>
    );
}
