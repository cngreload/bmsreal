"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import IndustrialVideoTerminal from "@/components/cng/IndustrialVideoTerminal";
import
{
    LuCpu,
    LuActivity,
    LuArrowLeft,
    LuBinary,
    LuArrowUpDown,
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 🔗 PRODUCT BANDS - REFORMED
 * Strategy: Structural Flex-Spine architecture preventing z-index layout crashes.
 */

export default function ProductBands ()
{
    const containerRef = useRef<HTMLElement>( null );

    const { scrollYProgress } = useScroll( {
        target: containerRef,
        offset: [ "start center", "end center" ],
    } );

    const pulseScale = useTransform( scrollYProgress, [ 0, 0.5, 1 ], [ 0.85, 1.15, 0.85 ] );

    return (
        <section ref={ containerRef } id="products" className="relative w-full py-16 sm:py-20 lg:py-32" dir="rtl">

            {/* Background Ambience Layer */ }
            <div className="pointer-events-none absolute inset-0 z-0 bg-slate-50 opacity-40" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.08]" aria-hidden="true" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

                {/* ================= HEADER ================= */ }
                <header className="mb-16 flex flex-col items-center gap-6 text-center lg:mb-24">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
                        <LuBinary className="h-4 w-4 text-bms-primary" aria-hidden="true" />
                        <span className="font-mono text-[10px] font-black uppercase tracking-widest text-slate-500">
                            Platform Portfolio v4.2
                        </span>
                    </div>

                    <h2 className="text-3xl font-black leading-tight tracking-tightest text-slate-900 md:text-5xl lg:text-6xl">
                        پلتفرم‌ها و <span className="text-bms-primary">سامانه‌های عملیاتی</span>
                    </h2>

                    <p className="max-w-2xl text-base font-light leading-relaxed text-slate-500 md:text-lg lg:text-xl">
                        راهکارهای بارمان صرفاً مفاهیم تئوریک نیستند؛ این سامانه‌ها به‌صورت
                        عملیاتی در محیط‌های واقعی و زیرساخت‌های حیاتی کشور در حال
                        خدمت‌رسانی هستند.
                    </p>
                </header>

                {/* ================= STRUCTURAL SYSTEM TRUNK ================= */ }
                <div className="relative flex flex-col items-center">

                    {/* ---------- Top Connector Line ---------- */ }
                    <div className="flex h-12 w-full justify-center overflow-hidden lg:h-16">
                        <div className="relative h-full w-[2px] bg-slate-200">
                            <div className="absolute inset-0 animate-[flow_2s_linear_infinite] bg-gradient-to-b from-transparent via-brand-yellow to-transparent" />
                        </div>
                    </div>

                    {/* ================= BAND 01: ICTS (Industrial Red) ================= */ }
                    <article className="group relative w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6 shadow-soft-lg transition-all duration-500 hover:border-brand-red/30 hover:shadow-premium sm:p-8 md:p-12 lg:rounded-[2.5rem]">
                        {/* Ambient Red Spot */ }
                        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-red/5 blur-3xl" aria-hidden="true" />

                        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">

                            {/* Context Block */ }
                            <div className="relative z-10 space-y-6 text-right lg:flex-1 lg:space-y-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-red-100 bg-red-50 text-brand-red shadow-inner">
                                        <LuCpu className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <span className="font-mono text-[10px] font-black uppercase tracking-widest text-brand-red sm:text-xs">
                                        Industrial Security Node
                                    </span>
                                </div>

                                <h3 className="text-2xl font-black leading-tight text-slate-900 md:text-3xl lg:text-4xl">
                                    سامانه هوشمند کنترل و مانیتورینگ
                                    <br className="hidden md:block" />
                                    <span className="text-bms-primary">جایگاه‌های سوخت CNG</span>
                                </h3>

                                <p className="text-sm font-light leading-relaxed text-slate-600 sm:text-base md:text-lg">
                                    ICTS راهکار بومی بارمان برای پایش، ایمنی و تصمیم‌سازی بلادرنگ
                                    در شبکه جایگاه‌های سوخت CNG است که با سخت‌افزار صنعتی و
                                    نرم‌افزار متمرکز، پایداری عملیاتی را تضمین می‌کند.
                                </p>

                                {/* Point Bullets */ }
                                <ul className="grid gap-3 pt-2 text-sm text-slate-700 sm:text-base lg:gap-4">
                                    { [
                                        "ارتقای ایمنی شهروندان، پرسنل و تجهیزات",
                                        "پایش بلادرنگ فرآیندها و تجهیزات حیاتی",
                                        "داشبورد مدیریتی و کنترل متمرکز",
                                        "سخت‌افزار صنعتی بومی (Industrial-Grade)",
                                    ].map( ( item, i ) => (
                                        <li key={ i } className="flex items-center gap-3">
                                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
                                            <span className="truncate">{ item }</span>
                                        </li>
                                    ) ) }
                                </ul>

                                <div className="pt-4">
                                    <Link
                                        href="/cng-automation"
                                        className="group/link inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-bms-primary shadow-md transition-all hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bms-primary/50"
                                    >
                                        <span>بررسی فنی سامانه</span>
                                        <LuArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-x-2" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>

                            {/* Video Block (Rendered reliably on all sizes now) */ }
                            <div className="relative z-10 w-full lg:w-[45%]">
                                <IndustrialVideoTerminal
                                    src="/CNG_Station_Automation.mp4"
                                    poster="/images/cng-poster.jpg"
                                    title="پایلوت سامانه صنعتی (ICTS)"
                                    description="عملکرد زنده زیرساخت کنترل جایگاه‌های کشور"
                                    uploadDate="2025-01-01"
                                />
                            </div>

                        </div>
                    </article>

                    {/* ---------- Middle Core Connector & Central Node ---------- */ }
                    <div className="flex h-32 w-full flex-col items-center overflow-hidden lg:h-48">
                        {/* Upper partial line segment */ }
                        <div className="relative h-1/2 w-[2px] bg-slate-200">
                            <div className="absolute inset-0 animate-[flow_3s_linear_infinite] bg-[linear-gradient(transparent,rgba(20,92,152,0.6),transparent)]" />
                        </div>

                        {/* Dynamic Central Core Circle */ }
                        <motion.div style={ { scale: pulseScale } } className="relative z-20 shrink-0 shadow-soft-lg -my-2 rounded-full border-4 border-white">
                            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white md:h-20 md:w-20">
                                <Image
                                    src="/bmslogoclean.webp"
                                    alt="Barman Core Platform Icon"
                                    width={ 40 }
                                    height={ 40 }
                                    className="relative z-10 h-8 w-8 object-contain md:h-10 md:w-10"
                                />
                                <div className="absolute inset-0 animate-pulse rounded-full bg-bms-primary/10 blur-md" aria-hidden="true" />
                            </div>
                        </motion.div>

                        {/* Lower partial line segment */ }
                        <div className="relative h-1/2 w-[2px] bg-slate-200">
                            <div className="absolute inset-0 animate-[flow_3s_linear_infinite] bg-[linear-gradient(transparent,rgba(16,185,129,0.6),transparent)]" />
                        </div>
                    </div>

                    {/* ================= BAND 02: CLINICANS (Medical Blue/Emerald) ================= */ }
                    <article className="group relative w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft-lg transition-all duration-500 hover:border-emerald-300 hover:shadow-premium sm:p-8 md:p-12 lg:rounded-[2.5rem]">
                        {/* Ambient Green Spot */ }
                        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" aria-hidden="true" />

                        <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-center lg:gap-16">

                            {/* Context Block */ }
                            <div className="relative z-10 space-y-6 text-right lg:flex-1 lg:space-y-8">
                                <div className="flex items-center gap-3 lg:justify-end">
                                    <span className="font-mono text-[10px] font-black uppercase tracking-widest text-emerald-600 sm:text-xs">
                                        Digital Health Platform
                                    </span>
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-emerald-600 shadow-sm">
                                        <LuActivity className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black leading-tight text-slate-900 md:text-3xl lg:text-4xl">
                                    پلتفرم <span className="text-emerald-600">Clinicans</span>
                                </h3>

                                <p className="text-sm font-light leading-relaxed text-slate-600 sm:text-base md:text-lg">
                                    Clinicans یک پلتفرم سلامت دیجیتال برای مدیریت یکپارچه
                                    کلینیک‌ها و مراکز درمانی است که فرآیندهای بالینی، مالی و
                                    ارتباط با بیمار را در یک هسته امن تجمیع می‌کند.
                                </p>

                                {/* Actions */ }
                                <div className="flex flex-wrap items-center gap-4 pt-4 lg:justify-end">
                                    <Link
                                        href="/clinicans"
                                        className="group/link inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                    >
                                        <span>مشاهده جزئیات</span>
                                        <LuArrowUpDown className="h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-x-1 group-hover/link:-translate-y-1" aria-hidden="true" />
                                    </Link>

                                    <a
                                        href="https://clinicans.ir"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-xl bg-emerald-600 px-8 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 sm:w-auto"
                                    >
                                        ورود به پلتفرم
                                    </a>
                                </div>
                            </div>

                            {/* Graphic UI Visual (Clinicans Dashboard Img) */ }
                            <div className="relative z-10 w-full lg:w-[45%]">
                                <div className="aspect-[16/10] overflow-hidden rounded-3xl border-[6px] border-slate-50 bg-white shadow-inner ring-1 ring-slate-200 flex items-center justify-center sm:border-8">
                                    <div className="relative h-full w-full opacity-40 mix-blend-multiply grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0">
                                        <Image
                                            src="/ctest.jpg"
                                            alt="تصویر محیط کاربری سامانه مدیریت کلینیک"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}