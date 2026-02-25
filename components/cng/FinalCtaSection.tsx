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
            className="relative py-20 lg:py-32 overflow-hidden bg-white"
            dir="rtl"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* 🏗️ THE COMMAND CHASSIS */ }
                <div className="relative overflow-hidden rounded-[3rem] bg-[#020617] p-[1px] shadow-[0_40px_100px_-20px_rgba(15,23,42,0.8)]">

                    {/* Border Glow / Rim Light */ }
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-bms-primary/20 pointer-events-none" />

                    <div className="relative rounded-[2.95rem] bg-[#020617] overflow-hidden">

                        {/* ===================== BACKGROUND LAYERS ===================== */ }
                        <div className="pointer-events-none absolute inset-0 z-0">
                            {/* Radial Atmosphere */ }
                            <div className="absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-bms-primary/10 blur-[140px]" />
                            <div className="absolute -bottom-40 left-1/4 h-[600px] w-[600px] rounded-full bg-[#D72638]/5 blur-[140px]" />

                            {/* Technical Grid */ }
                            <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:32px_32px]" />

                            {/* HUD Elements */ }
                            <div className="absolute top-12 left-12 opacity-10">
                                <LuBinary className="w-32 h-32 text-white" />
                            </div>
                        </div>

                        {/* ===================== CONTENT GRID ===================== */ }
                        <div className="relative z-10 grid gap-12 lg:grid-cols-12 items-center p-8 md:p-16 lg:p-20">

                            {/* ---------- LEFT: STRATEGIC MESSAGE ---------- */ }
                            <div className="lg:col-span-7 space-y-10 text-right">

                                {/* Protocol Badge */ }
                                <motion.div
                                    initial={ { opacity: 0, x: 20 } }
                                    whileInView={ { opacity: 1, x: 0 } }
                                    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md"
                                >
                                    <LuShieldCheck className="h-4 w-4 text-[#10B981]" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 font-mono">
                                        Official_Partnership_Invitation
                                    </span>
                                </motion.div>

                                {/* Authority Heading */ }
                                <div className="space-y-4">
                                    <h2
                                        id="cta-heading"
                                        className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tightest"
                                    >
                                        مشارکت راهبردی برای <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#F4C430] via-yellow-100 to-white">
                                            آینده‌ای ایمن و داده‌محور
                                        </span>
                                    </h2>
                                    <div className="h-1.5 w-24 bg-[#D72638] rounded-full shadow-[0_0_15px_rgba(215,38,56,0.4)]" />
                                </div>

                                {/* Narrative Body */ }
                                <div className="space-y-6 text-sm md:text-lg leading-relaxed-corp text-blue-100/70 font-light text-justify max-w-2xl">
                                    <p>
                                        شرکت <strong className="font-bold text-white">بارمان‌محور اسپادانا</strong> آمادگی دارد در قالب همکاری رسمی، طراحی و استقرار ملی سامانه <strong className="font-bold text-[#F4C430]">ICTS</strong> را با نهادهای حاکمیتی، شرکت‌های گاز استانی، اپراتورهای جایگاه و بازیگران مالی کشور پیش ببرد.
                                    </p>
                                    <p>
                                        این مسیر، یک پروژه کوتاه‌مدت نیست؛ بلکه سرمایه‌گذاری بلندمدت برای <span className="text-white font-medium">ایمنی شهروندان</span>، <span className="text-white font-medium">حکمرانی داده</span> و <span className="text-white font-medium">بهره‌وری ملی</span> در یکی از حیاتی‌ترین زیرساخت‌های انرژی کشور است.
                                    </p>
                                </div>

                                {/* Live System HUD */ }
                                <div className="flex items-center gap-8 opacity-40">
                                    <div className="flex items-center gap-2">
                                        <LuActivity className="w-4 h-4 text-emerald-400" />
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white">System_Active</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LuZap className="w-4 h-4 text-[#F4C430]" />
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white">Encryption_On</span>
                                    </div>
                                </div>
                            </div>

                            {/* ---------- RIGHT: ACTION TERMINAL ---------- */ }
                            <div className="lg:col-span-5">
                                <motion.div
                                    initial={ { opacity: 0, scale: 0.95 } }
                                    whileInView={ { opacity: 1, scale: 1 } }
                                    className="flex flex-col gap-5 p-2 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
                                >
                                    {/* Primary Link: High Contrast White */ }
                                    <Link
                                        href="/contact-us"
                                        className="group relative flex items-center justify-between gap-4 rounded-2xl bg-white px-8 py-6 text-slate-950 transition-all hover:bg-[#F4C430] hover:-translate-y-1 active:scale-95 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]"
                                    >
                                        <div className="flex items-center gap-4">
                                            <LuCalendarCheck className="h-6 w-6 text-bms-primary" />
                                            <span className="text-base md:text-lg font-black tracking-tight">درخواست جلسه فنی</span>
                                        </div>
                                        <LuArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-2" />
                                    </Link>

                                    {/* Secondary Link: Glassmorphism */ }
                                    <Link
                                        href="/downloads/icts-intro.pdf"
                                        target="_blank"
                                        className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
                                    >
                                        <div className="flex items-center gap-4">
                                            <LuDownload className="h-5 w-5 text-slate-400" />
                                            <span className="text-sm font-bold">دانلود مستند فنی و حاکمیتی</span>
                                        </div>
                                        <LuArrowLeft className="h-4 w-4 opacity-40 group-hover:opacity-100 transition-all" />
                                    </Link>

                                    {/* Terminal Footer */ }
                                    <div className="px-6 py-4 flex flex-col items-center gap-2">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] text-center">
                                            Secure Transmission • ISO Certified
                                        </p>
                                        <div className="flex gap-1">
                                            <div className="w-1 h-1 rounded-full bg-[#D72638] animate-pulse" />
                                            <div className="w-1 h-1 rounded-full bg-[#F4C430] animate-pulse [animation-delay:0.2s]" />
                                            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse [animation-delay:0.4s]" />
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