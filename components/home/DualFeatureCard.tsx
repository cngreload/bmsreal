"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowLeft, LuActivity, LuZap } from "react-icons/lu";

interface CardData
{
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage: string;
    category: string;
}

interface DualFeatureCardProps
{
    leftCard: CardData;
    rightCard: CardData;
    separatorText?: string;
}

export default function DualFeatureCard ( {
    leftCard,
    rightCard,
    separatorText = "BMS",
}: DualFeatureCardProps )
{
    return (
        <section
            aria-label="پلتفرم‌های راهبردی بارمان"
            className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32"
            dir="rtl"
        >
            {/* Editorial Background Text - "Nexus" */ }
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
                aria-hidden="true"
            >
                <span className="text-[20vw] font-black leading-none tracking-tighter text-slate-50 opacity-40">
                    NEXUS
                </span>
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[1600px]">
                <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:gap-4">

                    {/* ===================== LEFT CARD: Energy/Industrial ===================== */ }
                    <motion.article
                        whileHover={ { flex: 1.2 } }
                        transition={ { duration: 0.6, ease: [ 0.22, 1, 0.36, 1 ] } }
                        className="group relative flex min-h-[500px] flex-1 flex-col justify-end overflow-hidden rounded-[2.5rem] bg-bms-dark shadow-2xl sm:min-h-[600px] lg:min-h-[750px]"
                    >
                        <Image
                            src={ leftCard.backgroundImage }
                            alt={ leftCard.title }
                            fill
                            className="object-cover opacity-60 grayscale-[0.5] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Technical HUD Overlay */ }
                        <div
                            className="absolute right-6 top-6 z-20 hidden space-y-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:right-10 sm:top-10 md:block"
                            aria-hidden="true"
                        >
                            <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400">
                                <span className="h-1 w-8 rounded-full bg-emerald-400/30" />
                                STATUS: ACTIVE_MONITORING
                            </div>
                            <div className="font-mono text-[10px] text-slate-400">
                                COORD: 32.6546° N, 51.6680° E
                            </div>
                        </div>

                        {/* Gradient Scrim */ }
                        <div className="absolute inset-0 bg-gradient-to-t from-bms-dark via-bms-dark/40 to-transparent pointer-events-none" aria-hidden="true" />
                        <div className="absolute inset-0 rounded-[2.5rem] border-[8px] border-white/5 pointer-events-none sm:border-[12px]" aria-hidden="true" />

                        <div className="relative z-10 flex flex-col items-start p-6 sm:p-10 lg:p-16">
                            <div className="mb-4 inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand-red px-3 py-1 text-[9px] font-black uppercase text-white shadow-lg sm:mb-6 sm:text-[10px]">
                                <LuZap className="h-3 w-3 shrink-0" aria-hidden="true" />
                                { leftCard.category || "INDUSTRIAL" }
                            </div>

                            <h2 className="mb-4 text-3xl font-black leading-tight text-white sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                                { leftCard.title }
                            </h2>

                            <p className="mb-8 max-w-md translate-y-4 text-sm font-light leading-relaxed text-slate-300 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-base md:mb-10 md:text-lg">
                                { leftCard.subtitle }
                            </p>

                            <Link
                                href={ leftCard.ctaLink }
                                className="group/btn inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-2xl transition-all hover:bg-brand-yellow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow/50 active:scale-95 sm:px-8 sm:py-4"
                            >
                                <span>{ leftCard.ctaText }</span>
                                <LuArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover/btn:-translate-x-2" aria-hidden="true" />
                            </Link>
                        </div>
                    </motion.article>

                    {/* ===================== NEXUS CENTER PIECE ===================== */ }
                    <div className="relative z-30 hidden w-0 shrink-0 items-center justify-center lg:flex" aria-hidden="true">
                        <div className="absolute flex flex-col items-center">
                            <div className="h-24 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent xl:h-32" />
                            <div className="rounded-full bg-white p-1 shadow-2xl ring-1 ring-slate-100 h-20 w-20 xl:h-24 xl:w-24">
                                <div className="flex h-full w-full items-center justify-center rounded-full border-4 border-white bg-bms-dark">
                                    <span className="text-lg font-black tracking-[0.2em] text-white xl:text-xl">
                                        { separatorText }
                                    </span>
                                </div>
                            </div>
                            <div className="h-24 w-px bg-gradient-to-t from-transparent via-slate-300 to-transparent xl:h-32" />
                        </div>
                    </div>

                    {/* ===================== RIGHT CARD: Health/Software ===================== */ }
                    <motion.article
                        whileHover={ { flex: 1.2 } }
                        transition={ { duration: 0.6, ease: [ 0.22, 1, 0.36, 1 ] } }
                        className="group relative flex min-h-[500px] flex-1 flex-col justify-end overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 sm:min-h-[600px] lg:min-h-[750px]"
                    >
                        <Image
                            src={ rightCard.backgroundImage }
                            alt={ rightCard.title }
                            fill
                            className="object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Technical HUD Overlay */ }
                        <div
                            className="absolute left-6 top-6 z-20 hidden space-y-2 text-left opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:left-10 sm:top-10 md:block"
                            aria-hidden="true"
                        >
                            <div className="flex items-center justify-end gap-2 font-mono text-[10px] text-bms-primary" dir="ltr">
                                HEALTH_NODE: CONNECTED
                                <span className="h-1 w-8 rounded-full bg-bms-primary/30" />
                            </div>
                            <div className="font-mono text-[10px] text-slate-500" dir="ltr">
                                SYS_SEC: VERIFIED_256BIT
                            </div>
                        </div>

                        {/* Light Scrim */ }
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" aria-hidden="true" />

                        <div className="relative z-10 flex flex-col items-start p-6 sm:p-10 lg:p-16">
                            <div className="mb-4 inline-flex shrink-0 items-center gap-2 rounded-lg bg-bms-primary px-3 py-1 text-[9px] font-black uppercase text-white shadow-lg sm:mb-6 sm:text-[10px]">
                                <LuActivity className="h-3 w-3 shrink-0" aria-hidden="true" />
                                { rightCard.category || "HEALTH TECH" }
                            </div>

                            <h2 className="mb-4 text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
                                { rightCard.title }
                            </h2>

                            <p className="mb-8 max-w-md translate-y-4 text-sm font-medium leading-relaxed text-slate-600 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-base md:mb-10 md:text-lg">
                                { rightCard.subtitle }
                            </p>

                            <Link
                                href={ rightCard.ctaLink }
                                className="group/btn inline-flex shrink-0 items-center gap-3 rounded-xl bg-bms-dark px-6 py-3 text-sm font-bold text-white shadow-2xl transition-all hover:bg-bms-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-bms-primary/50 active:scale-95 sm:px-8 sm:py-4"
                            >
                                <span>{ rightCard.ctaText }</span>
                                <LuArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover/btn:-translate-x-2" aria-hidden="true" />
                            </Link>
                        </div>
                    </motion.article>

                </div>
            </div>

            {/* Decorative Grid Pattern */ }
            <div
                className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:100px_100px] opacity-[0.03]"
                aria-hidden="true"
            />
        </section>
    );
}