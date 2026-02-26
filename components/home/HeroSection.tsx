"use client";

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
                className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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
            className="relative flex min-h-[90vh] items-center overflow-hidden bg-bms-primary py-20 lg:min-h-screen lg:py-0"
        >
            {/* ===================== VIDEO BACKGROUND & GRADIENTS ===================== */ }
            <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
                {/* Full Viewport Autoplaying Looped HTML5 Video */ }
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full scale-105 object-cover object-center opacity-40 mix-blend-screen"
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container relative z-10 mx-auto w-full pb-12 pt-10 lg:pb-24 lg:pt-32">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">

                    {/* ===================== LEFT COLUMN ===================== */ }
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

                        <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:pt-12">
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

                    {/* ===================== RIGHT WIT CARD ===================== */ }
                    <motion.div
                        initial={ { opacity: 0, scale: 0.95 } }
                        animate={ { opacity: 1, scale: 1 } }
                        transition={ { duration: 1, delay: 0.5 } }
                        className="mt-8 flex justify-center lg:col-span-5 lg:mt-0 lg:justify-end"
                    >
                        <div className="relative w-full max-w-[320px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#020617] via-bms-dark to-slate-900 p-1.5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] sm:max-w-lg">
                            <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-[#020617] p-6 lg:p-8">
                                <div
                                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(at_top_right,rgba(16,185,129,0.2)_0%,transparent_50%)]"
                                    aria-hidden="true"
                                />

                                <div className="relative z-10 space-y-8 text-right lg:space-y-12">
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                                        <span className="text-4xl font-black tracking-tighter text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)] lg:text-5xl">
                                            WIT
                                        </span>
                                        <p className="mt-2 font-mono text-[8px] font-bold uppercase tracking-widest text-slate-500 lg:text-[10px]">
                                            Worldwide Intelligent Technology
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-xl font-bold tracking-tight text-brand-yellow lg:text-2xl">
                                            چشم‌انداز ما
                                        </h3>
                                        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-60 lg:mt-4" />
                                    </div>

                                    <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 shadow-inner">
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
                                            className="h-48 lg:h-64"
                                        >
                                            <p className="my-auto px-4 text-center text-xs font-medium leading-6 text-slate-300 lg:px-8 lg:text-base lg:leading-8">
                                                ما در بارمان محور اسپادانا، طلایه‌دار تحقق رؤیای انسان
                                                مدرن هستیم — رؤیایی که در آن، کنترل کامل و بی‌درنگ بر
                                                دارایی‌ها، از هر جا و در هر لحظه، ممکن است.
                                            </p>
                                        </MaskContainer>
                                    </div>

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

            <div className="absolute bottom-8 right-8 hidden items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl xl:flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shadow-inner">
                    <LuActivity className="h-6 w-6" />
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