"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

// نوع اختصاصی برای ادمین
type AdminBlogPost = {
    id: string;
    title: string;
    slug: string;
    status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    isFeatured: boolean;
    publishedAt: string | null;
    category?: { name: string; } | null;
    // content رو حذف کن یا optional کن
    // content?: string;  // اگر واقعاً لازم نیست، کامل حذف کن
    excerpt?: string | null;
    coverImageUrl?: string | null;
    seoTitle?: string | null;
    seoDesc?: string | null;
    readingTime?: number | null;
};
type AdminBlogTableProps = {
    posts: AdminBlogPost[];
    page: number;
    totalPages: number;
};

// Helper for status colors
const statusStyles = {
    DRAFT: "bg-slate-100 text-slate-600 border-slate-200",
    PUBLISHED: "bg-emerald-50 text-emerald-700 border-emerald-200",
    ARCHIVED: "bg-amber-50 text-amber-700 border-amber-200",
};

export function AdminBlogTable ( { posts, page, totalPages }: AdminBlogTableProps )
{
    const router = useRouter();
    const [ isDeleting, setIsDeleting ] = useState<string | null>( null );

    const handleDelete = async ( id: string ) =>
    {
        if ( !confirm( "آیا از حذف این مقاله اطمینان دارید؟ این عملیات غیرقابل بازگشت است." ) ) return;

        setIsDeleting( id );
        try
        {
            const res = await fetch( `/api/admin/posts/${ id }`, { method: "DELETE" } );
            if ( !res.ok ) throw new Error( "Delete failed" );
            router.refresh();
        } catch
        {
            alert( "خطا در حذف مقاله" );
        } finally
        {
            setIsDeleting( null );
        }
    };

    return (
        <div className="space-y-4">
            {/* Header Actions */ }
            <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-lg font-bold text-slate-800">لیست مقالات</h2>
                <Link
                    href="/admin/blog/new"
                    className="bg-bms-primary text-white px-4 py-2 rounded-xl text-sm hover:bg-bms-dark transition-colors"
                >
                    + مقاله جدید
                </Link>
            </div>

            {/* Table */ }
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-right">
                        <thead className="bg-slate-50 border-b border-slate-100 text-xs text-slate-500 uppercase">
                            <tr>
                                <th className="px-6 py-4 font-medium">عنوان</th>
                                <th className="px-6 py-4 font-medium">وضعیت</th>
                                <th className="px-6 py-4 font-medium">دسته‌بندی</th>
                                <th className="px-6 py-4 font-medium">تاریخ انتشار</th>
                                <th className="px-6 py-4 font-medium text-left">عملیات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            { posts.length === 0 ? (
                                <tr>
                                    <td colSpan={ 5 } className="px-6 py-8 text-center text-slate-500 text-sm">
                                        هیچ مقاله‌ای یافت نشد.
                                    </td>
                                </tr>
                            ) : (
                                posts.map( ( post ) => (
                                    <tr key={ post.id } className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <span className="font-semibold text-slate-800 text-sm line-clamp-1">
                                                    { post.title }
                                                </span>
                                                <span className="text-[11px] text-slate-400 font-mono dir-ltr text-right truncate max-w-[200px]">
                                                    /{ post.slug }
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={ `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${ statusStyles[ post.status ]
                                                    }` }
                                            >
                                                { post.status === "DRAFT" && "پیش‌نویس" }
                                                { post.status === "PUBLISHED" && "منتشر شده" }
                                                { post.status === "ARCHIVED" && "آرشیو" }
                                            </span>
                                            { post.isFeatured && (
                                                <span className="mr-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200">
                                                    ویژه
                                                </span>
                                            ) }
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            { post.category?.name ?? "—" }
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500">
                                            { post.publishedAt
                                                ? new Intl.DateTimeFormat( "fa-IR" ).format( new Date( post.publishedAt ) )
                                                : "—" }
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                                                <Link
                                                    href={ `/admin/blog/${ post.id }` }
                                                    className="text-bms-primary hover:underline text-sm font-medium"
                                                >
                                                    ویرایش
                                                </Link>
                                                <button
                                                    onClick={ () => handleDelete( post.id ) }
                                                    disabled={ isDeleting === post.id }
                                                    className="text-red-500 hover:underline text-sm disabled:opacity-50"
                                                >
                                                    { isDeleting === post.id ? "..." : "حذف" }
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ) )
                            ) }
                        </tbody>
                    </table>
                </div>

                {/* Pagination Footer */ }
                <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
                    <span>صفحه { page } از { totalPages }</span>
                    <div className="flex gap-2">
                        <button
                            disabled={ page <= 1 }
                            onClick={ () => router.push( `?page=${ page - 1 }` ) }
                            className="px-3 py-1 rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-50"
                        >
                            قبلی
                        </button>
                        <button
                            disabled={ page >= totalPages }
                            onClick={ () => router.push( `?page=${ page + 1 }` ) }
                            className="px-3 py-1 rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-50"
                        >
                            بعدی
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}