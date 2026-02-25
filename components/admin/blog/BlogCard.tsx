// components/admin/blog/BlogCard.tsx
"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/server-api";
import { cn } from "@/lib/utils";

type BlogCardProps = {
    post: BlogPost;
    className?: string;
};

export function BlogCard ( { post, className }: BlogCardProps )
{
    const dateLabel = post.publishedAt
        ? new Intl.DateTimeFormat( "fa-IR", {
            year: "numeric",
            month: "long",
            day: "2-digit",
        } ).format( new Date( post.publishedAt ) )
        : null;

    return (
        <article
            className={ cn(
                "flex h-full flex-col rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
                className,
            ) }
        >
            <div className="flex flex-1 flex-col gap-3">
                {/* Logic Fix: Check for singular 'category' instead of 'categories' */ }
                { ( post.category || ( post.tags && post.tags.length > 0 ) ) && (
                    <div className="flex flex-wrap gap-1 text-[10px] text-slate-500">
                        { post.category && (
                            <span
                                key={ `cat-${ post.category.id }` }
                                className="rounded-full border border-slate-200 bg-slate-50 px-2 py-[2px]"
                            >
                                { post.category.name }
                            </span>
                        ) }

                        {/* Show tags only if there is no category, or just append them */ }
                        { !post.category &&
                            post.tags?.slice( 0, 2 ).map( ( tag ) => (
                                <span
                                    key={ `tag-${ tag.id }` }
                                    className="rounded-full border border-emerald-100 bg-emerald-50 px-2 py-[2px] text-emerald-700"
                                >
                                    { tag.name }
                                </span>
                            ) ) }
                    </div>
                ) }

                {/* عنوان */ }
                <h3 className="text-right text-sm font-semibold leading-snug text-bms-dark md:text-base">
                    <Link href={ `/news/${ post.slug }` } className="hover:text-bms-primary">
                        { post.title }
                    </Link>
                </h3>

                {/* خلاصه */ }
                { post.excerpt && (
                    <p className="text-right text-[11px] leading-relaxed text-slate-600 md:text-xs line-clamp-3">
                        { post.excerpt }
                    </p>
                ) }
            </div>

            {/* بخش پایین: تاریخ + لینک ادامه */ }
            <div className="mt-4 flex items-center justify-between gap-2 text-[11px] md:text-xs">
                <div className="text-slate-400">{ dateLabel }</div>
                <Link
                    href={ `/news/${ post.slug }` }
                    className="text-bms-primary hover:text-bms-dark"
                >
                    ادامه مطلب
                </Link>
            </div>
        </article>
    );
}