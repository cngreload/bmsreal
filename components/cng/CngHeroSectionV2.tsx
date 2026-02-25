"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuActivity, LuShieldCheck, LuArrowLeft, LuZap } from "react-icons/lu";

/**
 * 🏢 CNG HERO SECTION V2 - CORPORATE REFORMATION
 * Design Logic: High-Key White Surface with a "High-Tech Navy" Focal Point.
 * Optimized for standard container sizing and responsive fluidity.
 */

export default function CngHeroSectionV2 ()
{
    return (
        <section
            dir="rtl"
            aria-labelledby="cng-hero-heading"
            className="relative flex min-h-[85vh] items-center overflow-hidden bg-white py-20 lg:py-32"
        >
            {/* ===================== BACKGROUND ARCHITECTURE ===================== */ }
            <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
                {/* Optical Haze - Soft Blue/Yellow mix for intelligence feel */ }
                <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_80%_20%,rgba(20,92,152,0.03),transparent_50%)]" />
                <div className="absolute bottom-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_80%,rgba(244,196,48,0.02),transparent_50%)]" />

                {/* Technical Grid Pattern - Light Edition */ }
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#145C98_1px,transparent_1px),linear-gradient(to_bottom,#145C98_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.05]" />
            </div>

            <div className="container relative z-10 mx-auto pb-10 pt-16 lg:pb-0 lg:pt-0">
                <div className="grid items-center gap-16 lg:grid-cols-12 xl:gap-24">

                    {/* ===================== TEXTUAL COMMAND (RIGHT) ===================== */ }
                    <div className="space-y-10 text-right lg:col-span-7">

                        {/* National Status Badge - Utilizing Red for Importance */ }
                        <motion.div
                            initial={ { opacity: 0, x: 20 } }
                            whileInView={ { opacity: 1, x: 0 } }
                            viewport={ { once: true } }
                            className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-xs font-bold text-slate-600 shadow-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-40" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
                            </span>
                            <span>سامانه ملی هوشمندسازی و پایش دیسپنسرهای CNG</span>
                        </motion.div>

                        {/* Authority Headline */ }
                        <div className="space-y-4">
                            <h1
                                id="cng-hero-heading"
                                className="text-4xl font-black leading-[1.2] tracking-tightest text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
                            >
                                کنترل و پایش <br />
                                <span className="text-bms-primary">هوشمند دیسپنسرها</span>
                            </h1>
                            {/* Industrial Red Accent Line */ }
                            <div className="h-1.5 w-24 rounded-full bg-brand-red shadow-[0_0_15px_rgba(215,38,56,0.2)]" />
                        </div>

                        {/* Strategic Description */ }
                        <div className="max-w-2xl space-y-6">
                            <p className="text-xl font-semibold leading-snug text-slate-800 md:text-2xl lg:border-r-4 lg:border-brand-yellow lg:pr-6">
                                یکپارچه‌سازی فرآیندهای عملیاتی در مقیاس ملی.
                            </p>
                            <p className="text-base font-light leading-corp-relaxed text-slate-500 md:text-lg">
                                سامانه <strong className="font-bold text-slate-900">ICTS</strong> با
                                اتصال مستقیم به تجهیزات جایگاه، داده‌های میدانی را به ابزارهای
                                تصمیم‌سازی مدیریتی تبدیل می‌کند. زیرساختی بومی و امن برای مدیریت
                                ناترازی انرژی و پایش دقیق شبکه توزیع سوخت.
                            </p>
                        </div>

                        {/* Actions */ }
                        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                            <Link
                                href="#system-overview"
                                className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-bms-primary px-8 py-4 text-sm font-bold text-white shadow-xl shadow-bms-primary/20 transition-all hover:-translate-y-1 hover:bg-bms-dark hover:shadow-2xl"
                            >
                                <span>بررسی معماری سامانه</span>
                                <LuArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-2" aria-hidden="true" />
                            </Link>

                            <Link
                                href="#story"
                                className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-700 transition-all hover:border-bms-primary hover:bg-slate-50 active:scale-95"
                            >
                                گزارش اجرای پایلوت
                            </Link>
                        </div>

                        {/* Technical HUD Signals - Mobile friendly stack */ }
                        <div className="flex flex-wrap gap-8 border-t border-slate-100 pt-8">
                            <div className="flex items-center gap-3">
                                <LuShieldCheck className="h-5 w-5 shrink-0 text-bms-accent" aria-hidden="true" />
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                                    Defense_Certified
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <LuActivity className="h-5 w-5 shrink-0 text-bms-primary" aria-hidden="true" />
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                                    RealTime_Metrics
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ===================== SYSTEM UNIT CARD (LEFT) ===================== */ }
                    <div className="relative lg:col-span-5">
                        {/* Decorative Floating Circles */ }
                        <div className="absolute inset-0 -m-12 animate-[spin_40s_linear_infinite] rounded-full border border-bms-primary/5" aria-hidden="true" />
                        <div className="absolute inset-0 -m-6 animate-[spin_25s_linear_infinite_reverse] rounded-full border border-brand-yellow/10" aria-hidden="true" />

                        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-b from-slate-200 to-transparent p-[1px] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.1)]">
                            <div className="relative overflow-hidden rounded-[2.95rem] bg-[#020617] p-8 md:p-12">

                                {/* Machined Surface Effects */ }
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,92,152,0.15),transparent_50%)]" aria-hidden="true" />
                                <div className="absolute inset-0 bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03]" aria-hidden="true" />

                                <div className="relative z-10 space-y-10 text-right">
                                    {/* Card Header */ }
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner backdrop-blur-md">
                                            <span className="text-2xl font-black tracking-tighter text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                                                ICTS
                                            </span>
                                        </div>

                                        <div className="text-left font-mono text-[9px] uppercase leading-tight tracking-[0.2em] text-slate-500" dir="ltr">
                                            CORE_STABILITY<br />
                                            <span className="font-bold text-emerald-500">OPTIMAL</span>
                                        </div>
                                    </div>

                                    {/* Title Area */ }
                                    <div>
                                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
                                            Intelligent Control
                                            <br />
                                            <span className="text-brand-yellow">Energy Backbone</span>
                                        </h3>
                                        <div className="h-1 w-12 rounded-full bg-emerald-500" aria-hidden="true" />
                                    </div>

                                    {/* Mechanical Logic Description */ }
                                    <p className="text-sm font-light leading-8 text-slate-400">
                                        هسته‌ی پردازشی <strong className="text-white">ICTS</strong> با معماری
                                        <span className="mx-1 text-emerald-400">Edge Computing</span>
                                        پایداری عملیات را حتی در زمان قطع شبکه‌ی سراسری تضمین کرده و امنیت داده‌ها را در بالاترین سطح استاندارد صنعتی حفظ می‌کند.
                                    </p>

                                    {/* Data Matrix Grid */ }
                                    <div className="grid grid-cols-2 gap-3 border-t border-white/5 pt-4" dir="ltr">
                                        { [
                                            { l: "Up-Time", v: "99.9%" },
                                            { l: "Security", v: "AES-256" },
                                            { l: "Latency", v: "<15ms" },
                                            { l: "Protocol", v: "MODBUS" },
                                        ].map( ( item ) => (
                                            <div
                                                key={ item.l }
                                                className="flex flex-col rounded-lg border border-white/5 bg-white/[0.02] p-2"
                                            >
                                                <span className="font-mono text-[8px] uppercase tracking-widest text-slate-500">
                                                    { item.l }
                                                </span>
                                                <span className="text-xs font-bold text-slate-300">
                                                    { item.v }
                                                </span>
                                            </div>
                                        ) ) }
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Live Signal - Unique Tablet/Mobile Detail */ }
                        <motion.div
                            initial={ { opacity: 0, y: 15 } }
                            animate={ { opacity: 1, y: 0 } }
                            transition={ { delay: 0.5 } }
                            className="absolute -bottom-8 -right-8 hidden items-center gap-4 rounded-[2rem] border border-slate-100 bg-white p-5 shadow-soft-lg md:flex"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">
                                <LuZap className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="text-right">
                                <div className="font-mono text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                                    System Health
                                </div>
                                <div className="text-sm font-black text-slate-900">عملیاتی • بلادرنگ</div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}