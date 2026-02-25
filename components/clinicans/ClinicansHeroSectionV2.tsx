"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowLeft, LuShieldCheck, LuActivity, LuBinary } from "react-icons/lu";

/**
 * 🏥 CLINICANS HERO SECTION V2 - REFORMED
 * Theme: Medical White / Calm Teal / Emerald Green
 * Accent: Corporate Red & Yellow
 */
export default function ClinicansHeroSectionV2 ()
{
    return (
        <section
            id="clinicans-hero"
            dir="rtl"
            className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-24 pb-20 lg:pt-32 lg:pb-40"
        >
            {/* ===================== BACKGROUND ATMOSPHERE ===================== */ }
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Medical Haze - Calm Teal & Emerald */ }
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.04),transparent_50%)]" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.03),transparent_50%)]" />

                {/* Technical Grid Pattern - Medical Blue Shade */ }
                <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#3B82F6_1px,transparent_1px),linear-gradient(to_bottom,#3B82F6_1px,transparent_1px)] [background-size:48px_48px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid items-center gap-16 lg:grid-cols-12 xl:gap-24">

                    {/* ===================== TEXTUAL NARRATIVE (RIGHT) ===================== */ }
                    <div className="lg:col-span-7 space-y-12 text-right">

                        {/* Status Badge - Corporate Red Accent for "Live" signal */ }
                        <motion.div
                            initial={ { opacity: 0, y: 15 } }
                            animate={ { opacity: 1, y: 0 } }
                            className="inline-flex items-center gap-3 rounded-full border border-emerald-100 bg-emerald-50/50 px-5 py-2 text-xs font-bold text-emerald-700 shadow-sm"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D72638] opacity-40" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D72638]" />
                            </span>
                            پلتفرم یکپارچه مدیریت و توانمندسازی سلامت
                        </motion.div>

                        {/* Authority Headline - Medical Gradient */ }
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] tracking-tightest text-slate-900">
                                توانمندسازی دیجیتال <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 via-teal-600 to-blue-600">
                                    ارائه‌دهندگان خدمات سلامت
                                </span>
                            </h1>
                            {/* Soothing Blue Accent Line */ }
                            <div className="h-1.5 w-24 bg-blue-500/20 rounded-full" />
                        </div>

                        {/* Strategic Description */ }
                        <div className="max-w-2xl space-y-6">
                            <p className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug border-r-4 border-[#F4C430] pr-6">
                                یکپارچگی میان درمان، مدیریت و تجربه بیمار.
                            </p>
                            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-light text-justify">
                                <strong className="text-slate-900 font-bold">کلینیکانز</strong> زیرساختی امن و مقیاس‌پذیر برای یکپارچه‌سازی مدیریت بالینی، فرآیندهای اداری، امور مالی و ارتباط با بیمار — از مطب‌های مستقل تا مراکز درمانی بزرگ فراهم می‌کند.
                            </p>
                        </div>

                        {/* Key Signals HUD */ }
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm group hover:border-emerald-200 transition-colors">
                                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner">
                                    <LuActivity className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-sm font-bold text-slate-900">پایش و مدیریت یکپارچه</span>
                                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">Real-time_Sync</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm group hover:border-blue-200 transition-colors">
                                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
                                    <LuShieldCheck className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <span className="block text-sm font-bold text-slate-900">امنیت و محرمانگی داده‌ها</span>
                                    <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">E2E_Encryption</span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */ }
                        <div className="flex flex-col sm:flex-row gap-5 pt-4">
                            <Link
                                href="#features"
                                className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-10 text-base font-bold text-white shadow-xl shadow-emerald-600/20 transition-all hover:-translate-y-1 hover:bg-emerald-700 active:scale-95"
                            >
                                <span>مشاهده قابلیت‌ها</span>
                                <LuArrowLeft className="h-4 w-4" />
                            </Link>

                            <Link
                                href="#pricing"
                                className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-10 text-base font-bold text-slate-700 transition-all hover:bg-slate-50 hover:border-emerald-600 active:scale-95"
                            >
                                شروع استفاده
                            </Link>
                        </div>

                        {/* Scroll Hint */ }
                        <div className="pt-6 flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <span className="h-px w-8 bg-slate-200" />
                            در ادامه، معماری پلتفرم و نقش هر بخش را ببینید
                        </div>
                    </div>

                    {/* ===================== VISUAL UNIT CARD (LEFT) ===================== */ }
                    <div className="lg:col-span-5 relative flex justify-center">
                        {/* Tablet/Mobile Unique UI: Card scales and centers */ }
                        <div className="relative w-full max-w-[480px]">

                            {/* Decorative Pulsing Orbits */ }
                            <div className="absolute inset-0 -m-12 rounded-full border border-emerald-500/5 animate-[spin_40s_linear_infinite]" />
                            <div className="absolute inset-0 -m-6 rounded-full border border-blue-500/10 animate-[spin_25s_linear_infinite_reverse]" />

                            {/* The Main "Instrument" Card */ }
                            <div className="relative overflow-hidden rounded-[3rem] p-[1px] bg-gradient-to-b from-emerald-100 to-transparent shadow-[0_50px_100px_-20px_rgba(16,185,129,0.15)]">

                                <div className="relative rounded-[2.95rem] bg-white p-8 md:p-12 overflow-hidden">

                                    {/* Subtle Surface Patterns */ }
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.1),transparent_50%)]" />
                                    <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#10B981_1px,transparent_1px),linear-gradient(90deg,#10B981_1px,transparent_1px)] [background-size:24px_24px]" />

                                    <div className="relative z-10 space-y-10 text-right">

                                        {/* Card Header */ }
                                        <div className="flex items-center justify-between">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-100 shadow-inner">
                                                <span className="text-2xl font-black text-emerald-600 tracking-tighter">CLX</span>
                                            </div>

                                            <div className="text-left font-mono text-[9px] text-slate-400 uppercase tracking-[0.2em] leading-tight" dir="ltr">
                                                PLATFORM STATUS<br />
                                                <span className="text-emerald-500 font-bold">SECURE_SYNC</span>
                                            </div>
                                        </div>

                                        {/* Title Area */ }
                                        <div>
                                            <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">
                                                Clinicans Platform
                                            </h3>
                                            <div className="h-1 w-12 bg-emerald-500 rounded-full" />
                                        </div>

                                        {/* Technical Description */ }
                                        <p className="text-[14px] leading-8 text-slate-600 text-justify font-light">
                                            کلینیکانز با طراحی ماژولار و مبتنی بر داده، به مراکز درمانی
                                            کمک می‌کند تا <strong className="text-slate-900 font-semibold">کنترل،
                                                شفافیت و بهره‌وری</strong> را هم‌زمان افزایش دهند؛
                                            بدون پیچیدگی‌های ابزارهای جزیره‌ای.
                                        </p>

                                        {/* Meta Tags - Corporate Teal/Blue Mix */ }
                                        <div className="flex flex-wrap justify-center gap-2 pt-6 border-t border-slate-100" dir="ltr">
                                            { [
                                                "Clinical Management",
                                                "Financial Automation",
                                                "Patient Engagement",
                                                "Secure by Design",
                                            ].map( ( tag ) => (
                                                <span
                                                    key={ tag }
                                                    className="rounded-full border border-slate-100 bg-slate-50 px-4 py-1.5 text-[10px] font-mono font-bold text-teal-700 uppercase tracking-tighter"
                                                >
                                                    { tag }
                                                </span>
                                            ) ) }
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Floating Health Node - Corporate Blue Accent */ }
                            <div className="absolute -bottom-10 -right-10 hidden md:flex items-center gap-5 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-50 animate-fade-in-up">
                                <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
                                    <LuBinary className="h-8 w-8" />
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Network Node</div>
                                    <div className="text-lg font-black text-slate-900 font-mono tracking-tighter">DATA_STABLE</div>
                                </div>
                            </div>

                            {/* Corporate Yellow Accent Ribbon */ }
                            <div className="absolute top-12 -left-12 rotate-[-90deg] hidden lg:block">
                                <span className="text-[10px] font-mono font-black text-[#F4C430] uppercase tracking-[1em] opacity-30">
                                    Proprietary_Technology
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* SEO & Bottom Polish */ }
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </section>
    );
}