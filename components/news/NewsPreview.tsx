"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getFeaturedNews, getAllNews } from "./data";
import { LuArrowLeft, LuActivity } from "react-icons/lu";

gsap.registerPlugin( ScrollTrigger );

export default function NewsPreview ()
{
    const featured = getFeaturedNews()[ 0 ];
    // Dynamically slice depending on total posts available to prevent crashes
    const feed = getAllNews().slice( 1, 5 );

    const containerRef = useRef<HTMLDivElement>( null );

    useGSAP(
        () =>
        {
            // 1. Reveal header eyebrow tag
            gsap.from( ".news-eyebrow", {
                opacity: 0,
                x: -20,
                duration: 1,
                scrollTrigger: {
                    trigger: ".news-eyebrow",
                    start: "top 95%",
                },
            } );

            // 2. Cascade animate side feed list items
            gsap.from( ".feed-item", {
                opacity: 0,
                y: 20,
                stagger: 0.15,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".feed-container",
                    start: "top 90%",
                },
            } );
        },
        { scope: containerRef }
    );

    if ( !featured ) return null;

    return (
        <div ref={ containerRef } className="relative z-10 w-full" dir="rtl">

            {/* 🧩 Background Elements - Hidden on mobile for rendering performance */ }
            <div className="pointer-events-none absolute inset-0 z-0 hidden select-none overflow-hidden lg:block" aria-hidden="true">
                <div className="absolute left-0 top-1/2 h-px w-full bg-slate-200" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#145C98_1px,transparent_1px),linear-gradient(to_bottom,#145C98_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.03]" />
            </div>

            <div className="relative z-10 mx-auto w-full">
                {/* ================= HEADER ================= */ }
                <header className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end lg:mb-20">
                    <div className="space-y-4 text-right">

                        {/* Tagline / Eyebrow */ }
                        <div className="news-eyebrow flex items-center gap-3">
                            <div
                                className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red shadow-[0_0_8px_#D72638]"
                                aria-hidden="true"
                            />
                            <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-500 md:text-xs">
                                Knowledge_Stream / 042-BMS
                            </span>
                        </div>

                        <h2 className="text-4xl font-black leading-[1.2] tracking-tightest text-slate-900 md:text-5xl lg:text-7xl">
                            مرکز رسانه و <br className="hidden sm:block" />
                            <span className="text-bms-primary">تحلیل استراتژیک</span>
                        </h2>
                    </div>

                    <Link
                        href="/news"
                        className="group flex shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 transition-all hover:border-bms-primary hover:bg-bms-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bms-primary/50"
                    >
                        <span className="text-xs font-black lg:text-sm">مشاهده آرشیو</span>
                        <LuArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                    </Link>
                </header>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">

                    {/* ================= FEATURED CARD (Left col, massive) ================= */ }
                    <div className="lg:col-span-7">
                        <Link href={ `/news/${ featured.slug }` } className="group relative block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-bms-primary/30 rounded-[2rem] lg:rounded-[3rem]">

                            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-900 shadow-soft-lg ring-1 ring-slate-200 sm:aspect-video lg:aspect-[16/10] lg:rounded-[3rem]">
                                <Image
                                    src={ featured.image }
                                    alt={ featured.title }
                                    fill
                                    className="object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                />

                                {/* Lower gradient to make text pop if implemented, but preserves dark moody vibes currently */ }
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"
                                    aria-hidden="true"
                                />

                                {/* Cyberpunk details - Top Right */ }
                                <div className="absolute right-6 top-6 hidden flex-col items-end gap-2 font-mono text-[8px] uppercase tracking-widest text-white/40 sm:flex lg:right-10 lg:top-10" aria-hidden="true">
                                    <span>Status: Verified</span>
                                    <span>Latency: 14ms</span>
                                </div>

                                {/* Subtle vertical accent block */ }
                                <div
                                    className="absolute right-0 top-0 h-24 w-1 bg-brand-yellow lg:h-32"
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Editorial block matching the featured image */ }
                            <div className="mt-6 space-y-4 lg:mt-8 lg:space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="rounded bg-brand-red px-2 py-1 text-[9px] font-black uppercase tracking-tighter text-white sm:text-[10px]">
                                        { featured.category }
                                    </span>
                                    <time
                                        dateTime={ featured.publishedAt }
                                        className="font-mono text-[10px] font-bold text-slate-500 sm:text-xs"
                                    >
                                        { new Intl.DateTimeFormat( "fa-IR", {
                                            year: "numeric", month: "long", day: "numeric"
                                        } ).format( new Date( featured.publishedAt ) ) }
                                    </time>
                                </div>

                                <h3 className="text-2xl font-black leading-[1.3] text-slate-900 transition-colors group-hover:text-bms-primary md:text-3xl lg:leading-[1.2]">
                                    { featured.title }
                                </h3>

                                <p className="line-clamp-3 text-justify text-sm font-light leading-relaxed text-slate-600 sm:text-base md:text-lg">
                                    { featured.summary }
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* ================= FEED LIST (Right Col) ================= */ }
                    <div className="lg:col-span-5 space-y-8 lg:space-y-10">
                        {/* Header Mini Toolbar */ }
                        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 sm:text-xs">
                                Recent Updates
                            </span>
                            <LuActivity
                                className="h-4 w-4 animate-pulse text-bms-accent"
                                aria-hidden="true"
                            />
                        </div>

                        <div className="feed-container divide-y divide-slate-100">
                            { feed.map( ( item ) => (
                                <article key={ item.slug } className="feed-item group py-6 first:pt-0 lg:py-8">
                                    <Link
                                        href={ `/news/${ item.slug }` }
                                        className="flex flex-col gap-4 outline-none focus-visible:ring-2 focus-visible:ring-bms-primary/50 rounded-lg p-1 -m-1"
                                    >

                                        {/* Item category badge + interaction dot */ }
                                        <div className="flex items-center gap-3">
                                            <div className="h-1.5 w-1.5 rounded-full bg-bms-primary transition-transform duration-300 group-hover:scale-[2.5] group-hover:bg-brand-red" aria-hidden="true" />
                                            <span className="text-[9px] font-black uppercase tracking-wider text-brand-red sm:text-[10px]">
                                                { item.category }
                                            </span>
                                        </div>

                                        <h4 className="text-base font-bold leading-snug text-slate-900 transition-all group-hover:text-bms-primary md:text-lg">
                                            { item.title }
                                        </h4>

                                        <div className="mt-1 flex items-center justify-between">
                                            <time
                                                dateTime={ item.publishedAt }
                                                className="font-mono text-[9px] font-bold text-slate-400 sm:text-[10px]"
                                            >
                                                { new Intl.DateTimeFormat( "fa-IR" ).format( new Date( item.publishedAt ) ) }
                                            </time>
                                            <LuArrowLeft className="h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:-translate-x-1 group-hover:text-bms-primary" aria-hidden="true" />
                                        </div>
                                    </Link>
                                </article>
                            ) ) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}