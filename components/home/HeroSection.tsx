"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import { motion, type Variants, type BezierDefinition } from "framer-motion";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { LuActivity } from "react-icons/lu";
import { cn } from "@/lib/utils";

/* -------------------------------------------
 * USP Card – Mathematical Spacing & Hierarchy
 * ----------------------------------------- */
interface HeroUSPCardProps
{
    children: ReactNode;
}

function HeroUSPCard ( { children }: HeroUSPCardProps )
{
    return (
        <motion.div
            initial={ { opacity: 0, y: 20 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
            className={ cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 p-5 shadow-2xl transition-all duration-500 md:p-6",
                "bg-slate-900/40 backdrop-blur-xl hover:-translate-y-1 hover:border-bms-primary/50 hover:bg-slate-900/80"
            ) }
        >
            <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
            />
            <div className="relative z-10 flex items-start gap-4">
                <div
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-red shadow-[0_0_12px_rgba(215,38,56,0.6)] transition-transform duration-300 group-hover:scale-125"
                    aria-hidden="true"
                />
                <p className="text-sm font-medium leading-relaxed text-slate-200 opacity-90 transition-opacity group-hover:opacity-100 md:text-base">
                    { children }
                </p>
            </div>
        </motion.div>
    );
}

export default function HeroSection ()
{
    const customEase: BezierDefinition = [ 0.22, 1, 0.36, 1 ];

    const containerVars: Variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVars: Variants = {
        initial: { opacity: 0, x: 20 },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: customEase,
            },
        },
    };

    return (
        <section
            dir="rtl"
            aria-labelledby="hero-heading"
            className="relative flex min-h-[90vh] items-center overflow-hidden bg-bms-dark py-20 lg:min-h-screen lg:py-0"
        >
            {/* ===================== LAYER 0: HYBRID BACKGROUND ===================== */ }
            <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">

                {/* MOBILE ONLY: Main Video Background (< 768px) */ }
                {/* Changed to object-top and increased native opacity (no mix-blend) for crisp, sharp rendering up high behind the text! */ }
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 z-0 h-full w-full scale-105 object-cover object-top opacity-70 md:hidden"
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>

                {/* DESKTOP ONLY: Main Image Background (>= 768px) */ }
                <Image
                    src="/hero-bg.jpg"
                    alt="هوشمندسازی زیرساخت‌های صنعتی بارمان"
                    fill
                    priority
                    quality={ 90 }
                    sizes="100vw"
                    className="hidden scale-105 object-cover object-center opacity-50 md:block"
                />

                {/* Common Overlays */ }
                {/* Adjusted mobile background opacity so the video is dramatically clearer than before */ }
                <div className="absolute inset-0 bg-slate-950/40 md:bg-slate-950/70" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-transparent to-white/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_80%_20%,rgba(20,92,152,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.05]" />
            </div>

            {/* ===================== LAYER 1: FOREGROUND CONTENT ===================== */ }
            <div className="container relative z-20 mx-auto w-full pb-12 pt-10 lg:pb-24 lg:pt-32">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">

                    {/* ----- LEFT COLUMN: MAIN TYPOGRAPHY ----- */ }
                    <motion.div
                        variants={ containerVars }
                        initial="initial"
                        animate="animate"
                        className="space-y-8 lg:col-span-7 lg:space-y-12"
                    >
                        <motion.div
                            variants={ itemVars }
                            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bms-accent opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-bms-accent" />
                            </span>
                            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-300">
                                Industrial Intelligence Node v4.2
                            </span>
                        </motion.div>

                        <motion.div variants={ itemVars } className="space-y-4">
                            <h1
                                id="hero-heading"
                                className="text-5xl font-black leading-[1.2] tracking-tightest text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.1] xl:text-8xl"
                            >
                                هوشمندسازی <br />
                                <span className="bg-gradient-to-l from-brand-yellow via-yellow-100 to-bms-accent bg-clip-text text-transparent">
                                    دارایی‌های حیاتی
                                </span>
                            </h1>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:pt-12  ">
                            <HeroUSPCard>
                                تنها تولیدکننده بومی سامانه کنترل و مانیتورینگ جایگاه‌های CNG
                                با پایلوت موفق در سطح ملی
                            </HeroUSPCard>
                            <HeroUSPCard>
                                ترکیب سخت‌افزار، نرم‌افزار و تجربه‌ی میدانی در حوزه‌های حساس
                                انرژی و سلامت دیجیتال
                            </HeroUSPCard>
                            <HeroUSPCard>
                                طراحی‌شده برای تصمیم‌های استراتژیک؛ مبتنی بر داده‌های دقیق،
                                رمزنگاری‌شده و قابل اتکا
                            </HeroUSPCard>
                            <HeroUSPCard>
                                از صنعت ۴.۰ تا سلامت دیجیتال؛ یک هسته‌ی فناوری (WIT)، دو جهانِ
                                بی‌پایان کاربرد
                            </HeroUSPCard>
                        </div>
                    </motion.div>

                    {/* ----- RIGHT COLUMN: HYBRID DASHBOARD CARD ----- */ }
                    <motion.div
                        initial={ { opacity: 0, scale: 0.95 } }
                        animate={ { opacity: 1, scale: 1 } }
                        transition={ { duration: 1, delay: 0.5 } }
                        className="mt-8 flex justify-center lg:col-span-5  lg:justify-end"
                    >
                        <div className="relative w-full max-w-[320px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#020617] via-bms-dark to-slate-900 p-1.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] sm:max-w-lg">

                            {/* Inner Card Screen */ }
                            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.2rem] bg-[#020617] p-6 shadow-inner lg:p-8">

                                {/* ---------- DESKTOP ONLY: Embedded Card Video ---------- */ }
                                <div className="pointer-events-none absolute inset-0 z-0 hidden flex-col items-center justify-center md:flex" aria-hidden="true">
                                    <div className="relative h-[70%] w-full">
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-screen"
                                        >
                                            <source src="/hero-bg.mp4" type="video/mp4" />
                                        </video>
                                        {/* Dark gradient mapping to sink it into the background */ }
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/20 via-[#020617]/40 to-[#020617] opacity-90" />
                                    </div>
                                </div>

                                {/* Common card gradient */ }
                                <div className="pointer-events-none  absolute inset-0 z-0 bg-[radial-gradient(at_top_right,rgba(16,185,129,0.15)_0%,transparent_50%)]" aria-hidden="true" />
                                {/* -------------------------------------------------------- */ }

                                {/* TOP: Header Label */ }
                                <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md">
                                    <span className="text-4xl font-black tracking-tighter text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] lg:text-5xl">
                                        WIT
                                    </span>
                                    <p className="mt-2 font-mono text-[8px] font-bold uppercase tracking-widest text-white/70 lg:text-[10px]">
                                        Worldwide Intelligent Technology
                                    </p>
                                </div>

                                {/* MIDDLE: Responsive Gap vs Mobile Title */ }

                                {/* 1. Mobile Title (Visible only < 768px) */ }
                                <div className="relative z-10 mt-8 text-center md:hidden">
                                    <h3 className="text-xl font-bold tracking-tight text-brand-yellow">
                                        چشم‌انداز ما
                                    </h3>
                                    <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-80" />
                                </div>

                                {/* 2. Desktop Spacer (Visible only >= 768px) */ }
                                <div className="relative z-10 my-24 hidden flex-1 min-h-[160px] md:block lg:min-h-[220px]" aria-hidden="true" />

                                {/* BOTTOM: Vision Text and Details */ }
                                <div className="relative z-10 flex flex-col space-y-5 text-right md:mt-0 lg:space-y-6">
                                    {/* Mask Text Reveal */ }
                                    <div className="overflow-hidden   rounded-2xl border border-white/5 bg-slate-950/60 shadow-xl backdrop-blur-sm">
                                        <MaskContainer
                                            revealText={
                                                <div className="flex h-full w-full items-center justify-center bg-slate-950">
                                                    <p className="mx-auto text-center text-2xl font-black leading-tight tracking-tight text-white lg:text-4xl">
                                                        کنترل کامل
                                                        <br />
                                                        <span className="text-brand-yellow drop-shadow-[0_0_12px_rgba(244,196,48,0.6)]">
                                                            در لحظه
                                                        </span>
                                                    </p>
                                                </div>
                                            }
                                            className="h-40 sm:h-48 lg:h-56"
                                        >
                                            <p className="my-auto px-4 text-center text-[11px] font-medium leading-6 text-slate-300 sm:text-xs lg:px-8 lg:text-sm lg:leading-8">
                                                ما در بارمان محور اسپادانا، طلایه‌دار تحقق رؤیای انسان
                                                مدرن هستیم — رؤیایی که در آن، کنترل کامل و بی‌درنگ بر
                                                دارایی‌ها، از هر جا و در هر لحظه، ممکن است.
                                            </p>
                                        </MaskContainer>
                                    </div>

                                    {/* Footer Stats Matrix */ }
                                    <div
                                        className="flex flex-wrap justify-center gap-2 border-t border-white/5 pt-4"
                                        dir="ltr"
                                    >
                                        { [ "Real-Time", "Secure", "Industrial", "Decision AI" ].map(
                                            ( tag ) => (
                                                <span
                                                    key={ tag }
                                                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-widest text-slate-500 lg:text-[9px]"
                                                >
                                                    { tag }
                                                </span>
                                            )
                                        ) }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-8 right-8 z-30 hidden items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl xl:flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shadow-inner">
                    <LuActivity className="h-6 w-6 animate-pulse" />
                </div>
                <div className="text-right">
                    <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Network Status
                    </div>
                    <div className="text-sm font-black text-slate-900">۹۹.۹٪ پایداری</div>
                </div>
            </div>
        </section>
    );
}