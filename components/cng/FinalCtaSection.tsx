"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import
{
    LuCalendarCheck,
    LuDownload,
    LuArrowLeft,
    LuShieldCheck,
    LuBinary,
    LuActivity,
    LuZap,
} from "react-icons/lu";

/**
 * 🎯 FINAL CTA SECTION - CORPORATE REFORMATION
 * Strategy: Command Terminal / High-Authority Breakout
 * Palette: Deep Navy (#020617), Brand Red (#D72638), Brand Yellow (#F4C430)
 */

export default function FinalCtaSection ()
{
    return (
        <section
            id="final-cta"
            aria-labelledby="cta-heading"
            className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
            dir="rtl"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px]">
                {/* 🏗️ THE COMMAND CHASSIS */ }
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#020617] p-[1px] shadow-[0_20px_60px_-10px_rgba(15,23,42,0.8)] sm:rounded-[3rem] lg:shadow-[0_40px_100px_-20px_rgba(15,23,42,0.8)]">
                    {/* Border Glow / Rim Light */ }
                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-bms-primary/20"
                        aria-hidden="true"
                    />

                    <div className="relative overflow-hidden rounded-[2.4rem] bg-[#020617] sm:rounded-[2.95rem]">
                        {/* ===================== BACKGROUND LAYERS ===================== */ }
                        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
                            {/* Radial Atmosphere */ }
                            <div className="absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-bms-primary/10 blur-[100px] sm:-top-40 sm:right-1/4 sm:h-[600px] sm:w-[600px] lg:blur-[140px]" />
                            <div className="absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-brand-red/5 blur-[100px] sm:-bottom-40 sm:left-1/4 sm:h-[600px] sm:w-[600px] lg:blur-[140px]" />

                            {/* Technical Grid Pattern appropriate for command centers */ }
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

                            {/* HUD Elements */ }
                            <div className="absolute left-6 top-6 opacity-10 sm:left-12 sm:top-12">
                                <LuBinary className="h-20 w-20 text-white sm:h-32 sm:w-32" />
                            </div>
                        </div>

                        {/* ===================== CONTENT GRID ===================== */ }
                        <div className="relative z-10 grid items-center gap-12 p-6 sm:p-10 md:p-14 lg:grid-cols-12 lg:gap-16 lg:p-20">

                            {/* ---------- LEFT: STRATEGIC MESSAGE ---------- */ }
                            <div className="space-y-8 text-right lg:col-span-7 lg:space-y-10">
                                {/* Protocol Badge */ }
                                <motion.div
                                    initial={ { opacity: 0, x: 20 } }
                                    whileInView={ { opacity: 1, x: 0 } }
                                    viewport={ { once: true } }
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md sm:gap-3 sm:px-5 sm:py-2"
                                >
                                    <LuShieldCheck
                                        className="h-3.5 w-3.5 shrink-0 text-emerald-400 sm:h-4 sm:w-4"
                                        aria-hidden="true"
                                    />
                                    <span className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-emerald-400 sm:text-[10px] sm:tracking-[0.3em]">
                                        Official_Partnership
                                    </span>
                                </motion.div>

                                {/* Authority Heading */ }
                                <div className="space-y-4">
                                    <h2
                                        id="cta-heading"
                                        className="text-3xl font-black leading-[1.25] tracking-tightest text-white sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1]"
                                    >
                                        مشارکت راهبردی برای <br />
                                        <span className="bg-gradient-to-l from-brand-yellow via-yellow-100 to-white bg-clip-text text-transparent">
                                            آینده‌ای ایمن و داده‌محور
                                        </span>
                                    </h2>
                                    <div
                                        className="h-1 w-16 rounded-full bg-brand-red shadow-[0_0_15px_rgba(215,38,56,0.4)] sm:h-1.5 sm:w-24"
                                        aria-hidden="true"
                                    />
                                </div>

                                {/* Narrative Body */ }
                                <div className="max-w-2xl space-y-4 text-justify text-sm font-light leading-relaxed text-blue-100/70 sm:space-y-6 sm:text-base md:text-lg md:leading-8">
                                    <p>
                                        شرکت <strong className="font-bold text-white">بارمان‌محور اسپادانا</strong>{ " " }
                                        آمادگی دارد در قالب همکاری رسمی، طراحی و استقرار ملی سامانه{ " " }
                                        <strong className="font-bold text-brand-yellow">ICTS</strong> را
                                        با نهادهای حاکمیتی، شرکت‌های گاز استانی، اپراتورهای جایگاه و
                                        بازیگران مالی کشور پیش ببرد.
                                    </p>
                                    <p>
                                        این مسیر، یک پروژه کوتاه‌مدت نیست؛ بلکه سرمایه‌گذاری
                                        بلندمدت برای{ " " }
                                        <span className="font-medium text-white">ایمنی شهروندان</span>
                                        ، <span className="font-medium text-white">حکمرانی داده</span> و{ " " }
                                        <span className="font-medium text-white">بهره‌وری ملی</span> در
                                        یکی از حیاتی‌ترین زیرساخت‌های انرژی کشور است.
                                    </p>
                                </div>

                                {/* Live System HUD */ }
                                <div className="flex flex-wrap items-center gap-6 border-t border-white/5 pt-6 opacity-50 sm:gap-8 sm:pt-8 lg:border-none lg:pt-0 lg:opacity-40">
                                    <div className="flex items-center gap-2">
                                        <LuActivity
                                            className="h-3.5 w-3.5 shrink-0 text-emerald-400 sm:h-4 sm:w-4"
                                            aria-hidden="true"
                                        />
                                        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-white sm:text-[10px]">
                                            System_Active
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LuZap
                                            className="h-3.5 w-3.5 shrink-0 text-brand-yellow sm:h-4 sm:w-4"
                                            aria-hidden="true"
                                        />
                                        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-white sm:text-[10px]">
                                            Encryption_On
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* ---------- RIGHT: ACTION TERMINAL ---------- */ }
                            <div className="lg:col-span-5">
                                <motion.div
                                    initial={ { opacity: 0, scale: 0.95 } }
                                    whileInView={ { opacity: 1, scale: 1 } }
                                    viewport={ { once: true, margin: "-50px" } }
                                    className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl sm:gap-5 sm:rounded-[2.5rem]"
                                >
                                    {/* Primary Link: High Contrast White */ }
                                    <Link
                                        href="/contact-us"
                                        className="group relative flex w-full items-center justify-between gap-4 rounded-xl bg-white px-6 py-5 text-slate-950 shadow-[0_15px_30px_-10px_rgba(255,255,255,0.2)] transition-all hover:-translate-y-1 hover:bg-brand-yellow active:scale-95 sm:rounded-2xl sm:px-8 sm:py-6"
                                    >
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <LuCalendarCheck
                                                className="h-5 w-5 shrink-0 text-bms-primary sm:h-6 sm:w-6"
                                                aria-hidden="true"
                                            />
                                            <span className="text-sm font-black tracking-tight sm:text-base md:text-lg">
                                                درخواست جلسه فنی
                                            </span>
                                        </div>
                                        <LuArrowLeft
                                            className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-2 sm:h-5 sm:w-5"
                                            aria-hidden="true"
                                        />
                                    </Link>

                                    {/* Terminal Footer */ }
                                    <div className="flex flex-col items-center gap-2 px-4 py-3 sm:px-6 sm:py-4">
                                        <p className="text-center font-mono text-[9px] font-black uppercase tracking-[0.15em] text-slate-500 sm:text-[10px] sm:tracking-[0.2em]">
                                            Secure Transmission • ISO Certified
                                        </p>
                                        <div className="flex gap-1" aria-hidden="true">
                                            <div className="h-1 w-1 animate-pulse rounded-full bg-brand-red" />
                                            <div className="h-1 w-1 animate-pulse rounded-full bg-brand-yellow [animation-delay:0.2s]" />
                                            <div className="h-1 w-1 animate-pulse rounded-full bg-emerald-500 [animation-delay:0.4s]" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}