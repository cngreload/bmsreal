"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuCloud,
    LuCpu,
    LuInfinity,
    LuDatabase,
    LuWebhook,
    LuServer,
    LuShieldCheck,
    LuBinary,
    LuActivity,
    LuZap,
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 💻 CLINICANS TECH SECTION - REFORMED
 * Strategy: Architectural Schematic UI / Infrastructure Intelligence
 * Theme: Medical Blue & Teal / Industrial HUD Metadata
 */

const techBlocks = [
    {
        id: "cloud",
        capability: "Availability & Mobility",
        title: "معماری ابری (Cloud-Native)",
        icon: LuCloud,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "group-hover:border-blue-200",
        status: "ACTIVE_CLOUD",
        body: "دسترسی ایمن به ابزارهای توانمندسازی از هر مکان و هر دستگاه. زیرساخت ابری ما پایداری سرویس و دسترسی همیشگی به داده‌ها را برای تیم درمان تضمین می‌کند.",
    },
    {
        id: "stack",
        capability: "Performance & UX",
        title: "هسته‌ی مدرن و چابک",
        icon: LuCpu,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "group-hover:border-indigo-200",
        status: "OPTIMIZED_CORE",
        body: "پیاده‌سازی با جدیدترین استانداردهای وب برای پاسخ‌گویی سریع و رابط کاربری روان؛ تا فرآیند توانمندسازی دیجیتال بدون تأخیر فنی انجام شود.",
    },
    {
        id: "db",
        capability: "Scalability",
        title: "پایگاه داده مقیاس‌پذیر",
        icon: LuDatabase,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200",
        status: "SCALABLE_DB",
        body: "طراحی شده برای نگهداری ایمن حجم بالای پرونده‌های الکترونیک و داده‌های مالی، با تمرکز بر دقت، امنیت و رشد بلندمدت مرکز درمانی.",
    },
    {
        id: "api",
        capability: "Integration-Ready",
        title: "معماری API-First",
        icon: LuWebhook,
        color: "text-teal-600",
        bg: "bg-teal-50",
        border: "group-hover:border-teal-200",
        status: "OPEN_REST_API",
        body: "آماده اتصال به سرویس‌های بیرونی (بیمه، آزمایشگاه، پرداخت). این پلتفرم توانمندسازی، جزیره‌ای نیست و به اکوسیستم سلامت متصل می‌شود.",
    },
];

export default function ClinicansTechSection ()
{
    return (
        <section
            id="clinicans-tech"
            className="relative py-24 lg:py-40 bg-white overflow-hidden"
            aria-labelledby="tech-heading"
            dir="rtl"
        >
            {/* 🧩 TECHNICAL OVERLAY PATTERN */ }
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] [background-image:linear-gradient(to_right,#3B82F6_1px,transparent_1px),linear-gradient(to_bottom,#3B82F6_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* ===================== HEADER - Editorial Standard ===================== */ }
                <header className="mb-20 text-right space-y-6 max-w-4xl">
                    <motion.div
                        initial={ { opacity: 0, x: 20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="inline-flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-200 px-4 py-1.5 shadow-sm"
                    >
                        <LuShieldCheck className="h-4 w-4 text-bms-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 font-mono">
                            Infrastructure_Capabilities / v4.2
                        </span>
                    </motion.div>

                    <h2
                        id="tech-heading"
                        className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-950 leading-[1.1] tracking-tightest"
                    >
                        فواید فنی <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#3B82F6] via-[#14B8A6] to-[#10B981]">
                            پلتفرم توانمندسازی دیجیتال
                        </span>
                    </h2>

                    <p className="max-w-3xl text-lg md:text-xl text-slate-500 font-light leading-relaxed text-justify">
                        ما کلینیکانز را به عنوان یک <strong className="text-slate-900 font-bold">زیرساخت صنعتی-پزشکی</strong> مهندسی کرده‌ایم؛ پلتفرمی که امنیت، سرعت و پایداری لازم برای هوشمندسازی مراکز درمانی در مقیاس وسیع را فراهم می‌کند.
                    </p>
                </header>

                {/* ===================== TECH GRID (BENTO STYLE) ===================== */ }
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    { techBlocks.map( ( block, index ) =>
                    {
                        const Icon = block.icon;
                        return (
                            <motion.article
                                key={ block.id }
                                initial={ { opacity: 0, y: 30 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.6, delay: index * 0.1 } }
                                className={ cn(
                                    "group relative flex flex-col p-8 lg:p-12 rounded-[3rem] bg-slate-50/50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-premium hover:border-bms-primary/20",
                                    block.border
                                ) }
                            >
                                {/* HUD Corner Signal */ }
                                <div className="absolute top-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <LuBinary className="w-5 h-5 text-slate-200" />
                                </div>

                                <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                                    <div className={ cn(
                                        "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-110",
                                        block.bg, block.color
                                    ) }>
                                        <Icon className="h-8 w-8" />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-black text-slate-900 group-hover:text-bms-primary transition-colors">
                                            { block.title }
                                        </h3>
                                        <span className="inline-block font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-white/80 px-2 py-0.5 rounded border border-slate-100">
                                            { block.capability }
                                        </span>
                                    </div>
                                </div>

                                <p className="text-sm md:text-base leading-corp-relaxed text-slate-500 text-justify font-light flex-1">
                                    { block.body }
                                </p>

                                {/* Technical Interaction Bar */ }
                                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-tighter">
                                            STATUS: { block.status }
                                        </span>
                                    </div>
                                    <LuServer className="w-4 h-4 text-slate-200 group-hover:text-bms-primary transition-colors" />
                                </div>
                            </motion.article>
                        );
                    } ) }
                </div>

                {/* ===================== SYSTEM ARCHITECTURE SEAL ===================== */ }
                <div className="mt-24 lg:mt-36 flex justify-center">
                    <motion.aside
                        initial={ { opacity: 0, scale: 0.95 } }
                        whileInView={ { opacity: 1, scale: 1 } }
                        viewport={ { once: true } }
                        className="relative overflow-hidden rounded-[3.5rem] bg-slate-900 p-1 shadow-2xl max-w-5xl w-full mx-4"
                    >
                        {/* Kinetic Scanline Texture */ }
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none [background-image:linear-gradient(to_bottom,transparent_50%,#fff_50%)] [background-size:100%_4px]" />

                        <div className="relative flex flex-col md:flex-row items-center gap-10 rounded-[3.4rem] bg-[#020617] px-10 py-12 md:px-16">

                            {/* Visual Anchor */ }
                            <div className="flex-shrink-0 relative group">
                                <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-3xl group-hover:bg-blue-400/40 transition-all duration-700" />
                                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white/5 text-blue-400 shadow-2xl border border-white/10 backdrop-blur-md">
                                    <LuInfinity className="h-12 w-12 animate-float" />
                                </div>
                            </div>

                            {/* Content */ }
                            <div className="flex-1 text-center md:text-right space-y-5">
                                <div className="flex items-center gap-4 justify-center md:justify-start">
                                    <h4 className="text-2xl md:text-3xl font-black text-white">معماری برای توانمندسازی پایدار</h4>
                                    <div className="hidden md:block h-px flex-1 bg-gradient-to-l from-white/20 to-transparent" />
                                </div>

                                <p className="text-base md:text-lg text-blue-100/70 leading-relaxed-corp font-light text-justify">
                                    زیرساخت فنی <strong className="text-white font-black mx-1 underline decoration-blue-500/30 underline-offset-8">کلینیکانز</strong>
                                    تضمین می‌کند که هوشمندسازی مجموعه‌ی شما با رشد مراجعین متوقف نشود. سیستم در
                                    <span className="text-[#F4C430] font-medium italic mx-1">ساعات پیک ترافیک</span>
                                    پایدار می‌ماند و به سادگی با نیازهای آینده منطبق می‌شود؛ بدون نیاز به بازطراحی یا مهاجرت‌های پرهزینه.
                                </p>

                                <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-6 opacity-60">
                                    <div className="flex items-center gap-2">
                                        <LuActivity className="w-4 h-4 text-[#D72638] animate-pulse" />
                                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">RealTime_AutoScaling</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LuZap className="w-4 h-4 text-[#F4C430]" />
                                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Low_Latency_Response</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                </div>

            </div>

            {/* Bottom Glow */ }
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />
        </section>
    );
}