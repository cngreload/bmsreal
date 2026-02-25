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
    const feed = getAllNews().slice( 1, 5 );

    const containerRef = useRef<HTMLDivElement>( null );

    useGSAP( () =>
    {
        gsap.from( ".news-eyebrow", {
            opacity: 0,
            x: -20,
            duration: 1,
            scrollTrigger: {
                trigger: ".news-eyebrow",
                start: "top 95%"
            }
        } );

        gsap.from( ".feed-item", {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".feed-container",
                start: "top 90%"
            }
        } );
    }, { scope: containerRef } );

    if ( !featured ) return null;

    return (
        <div ref={ containerRef } className="relative z-10 w-full">
            {/* 🧩 Background Elements - Hidden on mobile for performance */ }
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden hidden lg:block">
                <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100" />
                <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#145C98_1px,transparent_1px),linear-gradient(to_bottom,#145C98_1px,transparent_1px)] [background-size:80px_80px]" />
            </div>

            <div className="relative">
                {/* ================= HEADER ================= */ }
                <header className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-2">
                    <div className="space-y-4 text-right">
                        <div className="news-eyebrow flex items-center gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#D72638]" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">
                                Knowledge_Stream / 042-BMS
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-950 tracking-tightest leading-none">
                            مرکز رسانه و <br />
                            <span className="text-bms-primary">تحلیل استراتژیک</span>
                        </h2>
                    </div>

                    <Link href="/news" className="group flex items-center gap-3 bg-white border border-slate-200 px-6 py-3 rounded-full transition-all hover:bg-bms-primary hover:text-white hover:border-bms-primary">
                        <span className="text-xs lg:text-sm font-black">مشاهده آرشیو</span>
                        <LuArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    </Link>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24">

                    {/* ================= FEATURED CARD ================= */ }
                    <div className="lg:col-span-7">
                        <Link href={ `/news/${ featured.slug }` } className="group relative block">
                            <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[16/10] overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-slate-900 shadow-soft-lg ring-1 ring-slate-200">
                                <Image
                                    src={ featured.image }
                                    alt={ featured.title }
                                    fill
                                    className="object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute top-6 right-6 lg:top-10 lg:right-10 hidden sm:flex flex-col items-end gap-2 text-white/40 font-mono text-[8px] uppercase tracking-widest">
                                    <span>Status: Verified</span>
                                    <span>Latency: 14ms</span>
                                </div>
                                <div className="absolute top-0 right-0 h-24 lg:h-32 w-1 bg-brand-yellow" />
                            </div>

                            <div className="mt-6 lg:mt-10 space-y-4 lg:space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="bg-brand-red text-white text-[8px] font-black px-2 py-1 rounded uppercase tracking-tighter">
                                        { featured.category }
                                    </span>
                                    <time className="text-[10px] font-bold text-slate-400 font-mono">
                                        { new Intl.DateTimeFormat( "fa-IR" ).format( new Date( featured.publishedAt ) ) }
                                    </time>
                                </div>

                                <h3 className="text-xl md:text-3xl lg:text-5xl font-black text-slate-900 leading-[1.2] transition-colors group-hover:text-bms-primary">
                                    { featured.title }
                                </h3>

                                <p className="text-sm lg:text-lg text-slate-500 leading-corp-relaxed line-clamp-3 font-light text-justify">
                                    { featured.summary }
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* ================= FEED LIST ================= */ }
                    <div className="lg:col-span-5 space-y-8 lg:space-y-12">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recent Updates</span>
                            <LuActivity className="h-4 w-4 text-bms-accent animate-pulse" />
                        </div>

                        <div className="feed-container divide-y divide-slate-100">
                            { feed.map( ( item ) => (
                                <article key={ item.slug } className="feed-item group py-6 lg:py-10 first:pt-0">
                                    <Link href={ `/news/${ item.slug }` } className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-1 w-1 rounded-full bg-bms-primary transition-transform group-hover:scale-[2.5] group-hover:bg-brand-red" />
                                            <span className="text-[9px] font-black text-brand-red uppercase tracking-wider">{ item.category }</span>
                                        </div>

                                        <h4 className="text-sm md:text-xl font-bold text-slate-900 leading-snug group-hover:text-bms-primary transition-all">
                                            { item.title }
                                        </h4>

                                        <div className="flex items-center justify-between">
                                            <time className="text-[9px] font-mono font-bold text-slate-400">{ new Intl.DateTimeFormat( "fa-IR" ).format( new Date( item.publishedAt ) ) }</time>
                                            <LuArrowLeft className="h-4 w-4 text-slate-200 transition-transform group-hover:-translate-x-1 group-hover:text-bms-primary" />
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