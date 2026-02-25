"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuCable,
    LuCpu,
    LuChartBar,
    LuArrowLeft,
    LuActivity,
    LuBinary
} from "react-icons/lu";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * 🔄 WHAT SYSTEM DOES SECTION - CORPORATE REFORMATION
 * Strategy: Logical Data-Bus Visualization
 * Palette: Slate (Input), Blue (Control), Emerald (Intelligence)
 */

type StageKey = "input" | "process" | "output";

type Step = {
    id: number;
    key: StageKey;
    stage: string;
    layerId: string;
    title: string;
    description: string;
    icon: React.ElementType;
};

const steps: Step[] = [
    {
        id: 1,
        key: "input",
        stage: "Input Layer",
        layerId: "L1_DATA_ACQUISITION",
        title: "داده‌برداری از میدان",
        description:
            "تجمیع سیگنال‌های حیاتی از سنسورها، دیسپنسرها، تگ‌های RFID و کمپرسورها. تبدیل رخدادهای فیزیکی به داده‌های خام دیجیتال در لبه (Edge).",
        icon: LuCable,
    },
    {
        id: 2,
        key: "process",
        stage: "Control Layer",
        layerId: "L2_SMART_LOGIC",
        title: "پردازش و کنترل هوشمند",
        description:
            "اجرای منطق کنترلی در کنترلر صنعتی جایگاه. اعتبارسنجی خودروها و مدیریت آلارم‌ها بدون وابستگی به شبکه سراسری (Offline Availability).",
        icon: LuCpu,
    },
    {
        id: 3,
        key: "output",
        stage: "Decision Layer",
        layerId: "L3_BI_ANALYTICS",
        title: "هوش تجاری و تصمیم‌سازی",
        description:
            "تجمیع داده‌ها در مرکز کنترل. داشبوردهای مدیریتی برای رصد روند فروش، تعمیرات پیشگیرانه و سیاست‌گذاری کلان انرژی.",
        icon: LuChartBar,
    },
];

const toneMap: Record<
    StageKey,
    { bg: string; text: string; accent: string; glow: string; }
> = {
    input: {
        bg: "bg-slate-50",
        text: "text-slate-700",
        accent: "bg-slate-400",
        glow: "shadow-slate-200",
    },
    process: {
        bg: "bg-blue-50",
        text: "text-bms-primary",
        accent: "bg-bms-primary",
        glow: "shadow-blue-200",
    },
    output: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        accent: "bg-emerald-500",
        glow: "shadow-emerald-200",
    },
};

export default function WhatSystemDoesSection ()
{
    return (
        <section
            id="how-it-works"
            aria-labelledby="system-heading"
            className="relative py-12 lg:py-20 bg-white"
            dir="rtl"
        >
            <div className="relative z-10 mx-auto max-w-7xl px-6">

                {/* ================= HEADER ================= */ }
                <header className="mb-20 text-right space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-100 border border-slate-200 px-3 py-1 shadow-sm">
                        <LuBinary className="h-3.5 w-3.5 text-bms-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                            Logical Flow Path
                        </span>
                    </div>

                    <h2
                        id="system-heading"
                        className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tightest"
                    >
                        از سیگنال فیزیکی <br />
                        <span className="text-bms-primary">تا تصمیم راهبردی</span>
                    </h2>

                    <p className="max-w-2xl text-base md:text-lg text-slate-500 font-light leading-relaxed">
                        ICTS با یکپارچه‌سازی سه لایه‌ی کلیدی، داده‌های خام میدان را به ابزارهای قدرتمند مدیریتی تبدیل می‌کند.
                    </p>
                </header>

                {/* ================= DATA BUS FLOW ================= */ }
                <div className="relative">

                    {/* Desktop Connector Line (The Bus) */ }
                    <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-px bg-slate-100">
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-200 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                        { steps.map( ( step, index ) =>
                        {
                            const Icon = step.icon;
                            const tone = toneMap[ step.key ];

                            return (
                                <motion.div
                                    key={ step.id }
                                    initial={ { opacity: 0, y: 20 } }
                                    whileInView={ { opacity: 1, y: 0 } }
                                    viewport={ { once: true } }
                                    transition={ { duration: 0.6, delay: index * 0.1 } }
                                    className="relative group"
                                >
                                    {/* Mobile Vertical Connector */ }
                                    { index !== 0 && (
                                        <div className="md:hidden absolute -top-8 right-1/2 translate-x-1/2 w-px h-8 bg-slate-200" />
                                    ) }

                                    {/* 1. The Stage Node */ }
                                    <div className="flex flex-col items-center md:items-start mb-8">
                                        <div className={ cn(
                                            "flex h-16 w-16 items-center justify-center rounded-[1.25rem] border-4 border-white shadow-xl transition-all duration-500 group-hover:scale-110",
                                            tone.bg, tone.text
                                        ) }>
                                            <Icon className="h-8 w-8" />
                                        </div>
                                    </div>

                                    {/* 2. The Information Card */ }
                                    <article className="relative bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm transition-all duration-500 hover:shadow-premium hover:border-bms-primary/20">
                                        <div className="flex justify-between items-start mb-6">
                                            <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                                { step.layerId }
                                            </span>
                                            <div className={ cn( "h-1.5 w-1.5 rounded-full animate-pulse", tone.accent ) } />
                                        </div>

                                        <h3 className="text-xl font-black text-slate-900 group-hover:text-bms-primary transition-colors mb-4">
                                            { step.title }
                                        </h3>

                                        <p className="text-sm md:text-[15px] leading-corp-relaxed text-slate-500 text-justify font-light">
                                            { step.description }
                                        </p>

                                        {/* Interaction Hint */ }
                                        <div className="mt-8 flex justify-end">
                                            <div className={ cn( "h-1 w-8 rounded-full opacity-20 group-hover:opacity-100 transition-opacity", tone.accent ) } />
                                        </div>
                                    </article>

                                    {/* Desktop Arrow Connector */ }
                                    { index !== steps.length - 1 && (
                                        <div className="hidden lg:flex absolute top-[60px] -left-6 z-20 items-center justify-center translate-x-1/2">
                                            <div className="bg-white p-1 rounded-full border border-slate-100">
                                                <LuArrowLeft className="w-4 h-4 text-slate-300" />
                                            </div>
                                        </div>
                                    ) }
                                </motion.div>
                            );
                        } ) }
                    </div>
                </div>

                {/* ================= FOOTER TELEMETRY ================= */ }
                <div className="mt-16 pt-8 border-t border-slate-50 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex items-center gap-4 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                        <LuActivity className="w-4 h-4 text-emerald-500" />
                        <span>System_Process_Validated</span>
                    </div>
                    <Link
                        href="/technologies"
                        className="text-xs font-black text-bms-primary hover:text-bms-dark flex items-center gap-2 group transition-all"
                    >
                        <span>بررسی عمیق معماری داده</span>
                        <LuArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}