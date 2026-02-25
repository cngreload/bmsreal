import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { getPaginatedNews, getCategories } from "@/components/news/data";
import
{
    LuSearch,
    LuArrowLeft,
    LuCalendar,
    LuRss,
    LuHouse,
    LuChevronLeft,
} from "react-icons/lu";

export const dynamic = "force-dynamic";

type SearchParams = {
    page?: string;
    category?: string;
    q?: string;
};

export const metadata = {
    title: "اخبار و مقالات | مرکز دانش بارمان",
    description:
        "آخرین تحولات صنعت هوشمندسازی، گزارش‌های فنی ICTS و مقالات تخصصی سلامت دیجیتال.",
};

export default async function PublicNewsPage ( {
    searchParams,
}: {
    searchParams?: Promise<SearchParams>;
} )
{
    const sp = ( await searchParams ) ?? {};
    const page = Number( sp.page ?? "1" ) || 1;
    const categorySlug = sp.category;
    const query = sp.q || "";

    const data = getPaginatedNews( page, 9, categorySlug, query );
    const categories = getCategories();

    /* ---------------------------------------------
     * JSON-LD — Blog
     * -------------------------------------------*/
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "مرکز دانش بارمان",
        blogPost: data.items.map( ( post ) => ( {
            "@type": "BlogPosting",
            headline: post.title,
            image: post.image,
            datePublished: post.publishedAt,
        } ) ),
    };

    return (
        <>
            <Script
                id="json-ld-blog"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <div id="main-content" className="min-h-screen bg-slate-50">
                {/* =========================
         * STICKY BREADCRUMB (ONLY NAV)
         * ========================= */}
                <div className="sticky top-0 z-40 border-b border-slate-200 bg-white">
                    <div className="container mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 text-xs text-slate-500">
                        <Link
                            href="/"
                            className="flex items-center gap-1 transition-colors hover:text-bms-primary"
                        >
                            <LuHouse className="h-3 w-3" />
                            <span>خانه</span>
                        </Link>
                        <LuChevronLeft className="h-3 w-3 opacity-50" />
                        <span className="font-medium text-bms-primary">
                            اخبار و مقالات
                        </span>
                    </div>
                </div>

                {/* =========================
         * HEADER
         * ========================= */}
                <section className="relative bg-white border-b border-slate-200 pt-24 pb-16 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
                    <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-4 py-1.5 text-xs font-bold text-slate-600">
                            <LuRss className="h-3.5 w-3.5" />
                            <span>وبلاگ و اطلاعیه‌ها</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-bms-dark tracking-tight">
                            مرکز دانش و <span className="text-bms-primary">اخبار</span>
                        </h1>

                        {/* Search */ }
                        <div className="max-w-xl mx-auto mt-8">
                            <form action="/news" method="GET" className="relative group">
                                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400">
                                    <LuSearch className="h-5 w-5" />
                                </div>
                                <input
                                    type="text"
                                    name="q"
                                    defaultValue={ query }
                                    placeholder="جستجو..."
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-4 pr-12 pl-4 text-sm outline-none focus:bg-white focus:border-bms-primary/50 transition-all shadow-sm"
                                />
                                { categorySlug && (
                                    <input type="hidden" name="category" value={ categorySlug } />
                                ) }
                            </form>
                        </div>
                    </div>
                </section>

                {/* =========================
         * CONTENT
         * ========================= */}
                <div className="container mx-auto px-4 max-w-6xl py-12">
                    {/* Filters */ }
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                        <Link
                            href="/news"
                            className={ `px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${ !categorySlug
                                ? "bg-slate-900 text-white shadow-lg"
                                : "bg-white text-slate-600 border border-slate-200"
                                }` }
                        >
                            همه مطالب
                        </Link>

                        { categories.map( ( cat ) => (
                            <Link
                                key={ cat.id }
                                href={ `/news?category=${ cat.slug }` }
                                className={ `px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${ categorySlug === cat.slug
                                    ? "bg-bms-primary text-white shadow-lg"
                                    : "bg-white text-slate-600 border border-slate-200 hover:border-bms-primary/50"
                                    }` }
                            >
                                { cat.name }
                            </Link>
                        ) ) }
                    </div>

                    {/* Grid */ }
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        { data.items.map( ( post ) => (
                            <article key={ post.slug }>
                                <Link
                                    href={ `/news/${ post.slug }` }
                                    className="group flex flex-col h-full bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="relative h-56 bg-slate-100 overflow-hidden">
                                        <Image
                                            src={ post.image }
                                            alt={ post.title }
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                                            { post.category }
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-3 text-xs text-slate-400">
                                            <LuCalendar className="h-3.5 w-3.5" />
                                            <time>
                                                { new Intl.DateTimeFormat( "fa-IR" ).format(
                                                    new Date( post.publishedAt )
                                                ) }
                                            </time>
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-bms-primary transition-colors line-clamp-2">
                                            { post.title }
                                        </h3>

                                        <p className="text-sm text-slate-500 leading-7 line-clamp-3 mb-6 flex-1 text-justify">
                                            { post.summary }
                                        </p>

                                        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                                            <span className="text-xs font-bold text-bms-primary">
                                                مطالعه کامل
                                            </span>
                                            <LuArrowLeft className="h-4 w-4 text-slate-400 group-hover:text-bms-primary" />
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ) ) }
                    </div>
                </div>
            </div>
        </>
    );
}
