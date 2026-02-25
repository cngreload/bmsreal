"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuTriangleAlert,
    LuFileX,
    LuShieldCheck,
    LuActivity,
    LuCircleAlert
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * ⚠️ NECESSITY SECTION - CORPORATE REFORMATION
 * Strategy: Vertical Logic Spine & Risk Escalation
 * Palette: Red (Danger), Amber (Warning), Blue (Authority)
 */

interface NecessityPoint
{
    id: string;
    title: string;
    icon: React.ElementType;
    tone: "red" | "amber" | "blue";
    description: string;
    metadata: string;
}

const necessityPoints: NecessityPoint[] = [
    {
        id: "risk",
        title: "تلاقی زیرساخت حیاتی با زندگی روزمره",
        icon: LuTriangleAlert,
        tone: "red",
        metadata: "CRITICAL_EXPOSURE",
        description:
            "جایگاه‌های CNG تنها یک تأسیسات صنعتی نیستند؛ بلکه نقطه تماس مستقیم انرژی پرفشار با شهروندان در بطن شهرها هستند. هر نقص فنی یا تأخیر در تشخیص می‌تواند به حوادث جانی و خسارات اقتصادی گسترده منجر شود.",
    },
    {
        id: "manual",
        title: "بن‌بست نظارت سنتی و گزارش‌های کاغذی",
        icon: LuFileX,
        tone: "amber",
        metadata: "INACCURATE_REPORTING",
        description:
            "در شبکه‌ای متشکل از هزاران جایگاه، اتکا به بازرسی‌های دوره‌ای و گزارش‌های دستی، عملاً به «نابینایی مدیریتی» منجر می‌شود. ایمنی واقعی نیازمند داده‌های لحظه‌ای، قابل ممیزی و مبتنی بر شواهد است.",
    },
    {
        id: "solution",
        title: "زیرساخت پیشگیرانه، نه واکنش پس از حادثه",
        icon: LuShieldCheck,
        tone: "blue",
        metadata: "SYSTEMIC_SOVEREIGNTY",
        description:
            "ICTS هوشمندسازی را از یک انتخاب به یک استاندارد عملیاتی دائمی تبدیل می‌کند؛ سامانه‌ای که به‌صورت پیوسته پایش می‌کند و پیش از وقوع حادثه، امکان هشدار، مداخله و پیشگیری مؤثر را فراهم می‌سازد.",
    },
];

export default function NecessitySection ()
{
    return (
        <section
            id="necessity"
            aria-labelledby="necessity-heading"
            className="relative py-12 lg:py-20 bg-white overflow-hidden"
            dir="rtl"
        >
            {/* Background HUD Detail */ }
            <div className="absolute top-0 left-0 p-10 opacity-[0.03] pointer-events-none hidden lg:block">
                <LuActivity className="w-64 h-64 text-bms-primary" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6">

                {/* ================= HEADER ================= */ }
                <header className="mb-16 max-w-3xl text-right space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-red-50 border border-red-100 px-3 py-1 shadow-sm">
                        <LuCircleAlert className="h-3.5 w-3.5 text-[#D72638]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D72638]">
                            Strategic Necessity
                        </span>
                    </div>

                    <h2
                        id="necessity-heading"
                        className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tightest"
                    >
                        یک ضرورت <span className="text-[#D72638]">ایمنی و حاکمیتی</span>، <br />
                        نه صرفاً یک انتخاب فناورانه
                    </h2>

                    <p className="text-base md:text-lg leading-relaxed text-slate-500 font-light">
                        در زیرساخت‌هایی که با جان شهروندان و امنیت انرژی گره خورده‌اند، روش‌های سنتی دیگر پاسخگو نیستند.
                    </p>
                </header>

                {/* ================= FLOW OF NECESSITY ================= */ }
                <div className="relative">

                    {/* The Connecting Spine (Visual Divider) */ }
                    <div className="absolute right-7 top-0 bottom-0 w-px bg-slate-100 hidden md:block">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#D72638] via-[#F4C430] to-bms-primary opacity-30" />
                    </div>

                    <div className="space-y-8 md:space-y-12">
                        { necessityPoints.map( ( item, index ) =>
                        {
                            const Icon = item.icon;
                            return (
                                <motion.article
                                    key={ item.id }
                                    initial={ { opacity: 0, x: 20 } }
                                    whileInView={ { opacity: 1, x: 0 } }
                                    viewport={ { once: true, margin: "-100px" } }
                                    transition={ { duration: 0.6, delay: index * 0.1 } }
                                    className="relative grid md:grid-cols-12 gap-6 group"
                                >
                                    {/* 1. The Icon Node */ }
                                    <div className="md:col-span-1 flex flex-col items-center relative">
                                        <div className={ cn(
                                            "z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-4 border-white shadow-xl transition-transform group-hover:scale-110",
                                            item.tone === "red" && "bg-red-50 text-[#D72638]",
                                            item.tone === "amber" && "bg-amber-50 text-[#F4C430]",
                                            item.tone === "blue" && "bg-blue-50 text-bms-primary"
                                        ) }>
                                            <Icon className="h-6 w-6" />
                                        </div>
                                    </div>

                                    {/* 2. The Content Card */ }
                                    <div className="md:col-span-11 pt-1">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                            <h3 className="text-xl font-black text-slate-900 group-hover:text-bms-primary transition-colors">
                                                { item.title }
                                            </h3>
                                            <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                                { item.metadata }
                                            </span>
                                        </div>

                                        <p className="text-sm md:text-base leading-corp-relaxed text-slate-500 text-justify font-light max-w-4xl">
                                            { item.description }
                                        </p>

                                        {/* Inset Divider (Internal) */ }
                                        { index !== necessityPoints.length - 1 && (
                                            <div className="mt-8 h-px w-full bg-slate-50 md:hidden" />
                                        ) }
                                    </div>
                                </motion.article>
                            );
                        } ) }
                    </div>
                </div>

                {/* ================= FINAL ACTION BRIDGE ================= */ }
                <div className="mt-16 flex justify-end">
                    <div className="inline-flex items-center gap-4 py-4 px-6 rounded-2xl bg-slate-900 text-white shadow-premium">
                        <div className="flex flex-col text-left font-mono" dir="ltr">
                            <span className="text-[8px] text-slate-400 uppercase">Current_Protocol</span>
                            <span className="text-xs font-bold text-emerald-400">ICTS_DEPLOYED</span>
                        </div>
                        <div className="h-8 w-px bg-white/10" />
                        <p className="text-xs md:text-sm font-medium">
                            انتقال از سیستم‌های واکنشی به سیستم‌های پیشگیرانه
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}