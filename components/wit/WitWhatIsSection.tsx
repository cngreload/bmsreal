"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuLayers,
    LuCircuitBoard,
    LuDatabase,
    LuArrowDownToLine,
    LuBinary,
    LuActivity,
    LuCpu
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 🔄 WIT WHAT IS SECTION - REFORMED
 * Strategy: Technical Anatomy / Editorial Dossier
 * Palette: BMS Navy (#145C98), Industrial Red (#D72638), Intel Yellow (#F4C430)
 */

const features = [
    {
        id: "core",
        code: "SYS_CORE_01",
        title: "پلتفرم هسته‌ای (Core Platform)",
        desc: "WIT یک محصول تک‌منظوره نیست؛ یک هسته فناورانه‌ی پایدار است که می‌تواند هم‌زمان بار پروژه‌های صنعتی، انرژی و سلامت را بدون بازطراحی زیرساخت پشتیبانی کند.",
        icon: LuLayers,
        tone: "blue",
        bg: "bg-blue-50",
        border: "border-blue-100",
        color: "text-bms-primary",
    },
    {
        id: "hardware",
        code: "SYS_HW_INT_02",
        title: "هم‌طراحی سخت‌افزار و نرم‌افزار",
        desc: "بردهای الکترونیکی، فریم‌ور و لایه نرم‌افزار به‌صورت یکپارچه طراحی شده‌اند تا پایداری صنعتی، تأخیر پایین و قابلیت اطمینان بلندمدت در میدان عملیات تضمین شود.",
        icon: LuCircuitBoard,
        tone: "red",
        bg: "bg-red-50",
        border: "border-red-100",
        color: "text-[#D72638]",
    },
    {
        id: "data",
        code: "SYS_DATA_E2E_03",
        title: "جریان داده End-to-End",
        desc: "داده از سطح میدان (سنسورها و کنترلرها) تا لایه تحلیل و داشبورد مدیریتی بدون گسست منتقل می‌شود؛ آماده برای تحلیل پیشرفته و هوش مصنوعی.",
        icon: LuDatabase,
        tone: "yellow",
        bg: "bg-amber-50",
        border: "border-amber-100",
        color: "text-[#F4C430]",
    },
];

export default function WitWhatIsSection ()
{
    return (
        <section
            id="what-is-wit"
            className="relative py-12 lg:py-20 bg-white overflow-hidden"
            aria-labelledby="whatis-heading"
            dir="rtl"
        >
            {/* Background HUD Graphics - Technical Moat */ }
            <div className="absolute top-0 left-0 p-12 opacity-[0.02] pointer-events-none hidden lg:block">
                <LuCpu className="w-80 h-80 text-bms-primary" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid gap-16 lg:grid-cols-12 items-start">

                    {/* ===================== DEFINITION TEXT (EDITORIAL SIDEBAR) ===================== */ }
                    <div className="lg:col-span-5 space-y-8 sticky top-32">
                        <div className="space-y-4">
                            <motion.div
                                initial={ { opacity: 0, x: 20 } }
                                whileInView={ { opacity: 1, x: 0 } }
                                viewport={ { once: true } }
                                className="inline-flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 px-3 py-1 shadow-sm"
                            >
                                <LuArrowDownToLine className="h-3.5 w-3.5 text-bms-primary" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 font-mono">
                                    Platform_Specification
                                </span>
                            </motion.div>

                            <h2
                                id="whatis-heading"
                                className="text-3xl md:text-5xl font-black text-slate-950 leading-[1.1] tracking-tightest"
                            >
                                WIT دقیقاً <br />
                                <span className="text-bms-primary">چیست؟</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-base md:text-lg leading-relaxed-corp text-slate-600 text-justify font-light">
                            <p>
                                WIT یک زیرساخت فناورانه‌ی هسته‌ای است که محصولات کلیدی بارمان — از سامانه‌های
                                <strong className="text-slate-900 font-bold mx-1">پایش صنعتی (ICTS)</strong>
                                تا پلتفرم
                                <strong className="text-slate-900 font-bold mx-1">سلامت Clinicans</strong>
                                — بر پایه آن بنا شده‌اند.
                            </p>
                            <p>
                                به‌جای توسعه مجزا برای هر پروژه، WIT یک هسته مرکزی پایدار ایجاد می‌کند که امکان انطباق با حوزه‌های مختلف و توسعه تدریجی بدون اختلال را فراهم می‌سازد.
                            </p>
                        </div>

                        {/* Technical Proof Point */ }
                        <div className="pt-6 flex items-center gap-4 border-t border-slate-100">
                            <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-bms-primary">
                                <LuBinary className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                                Architecture_Status: Stable_v4.2
                            </span>
                        </div>
                    </div>

                    {/* ===================== FEATURE ANATOMY (BENTO CARDS) ===================== */ }
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        { features.map( ( f, i ) =>
                        {
                            const Icon = f.icon;
                            return (
                                <motion.article
                                    key={ f.id }
                                    initial={ { opacity: 0, y: 20 } }
                                    whileInView={ { opacity: 1, y: 0 } }
                                    viewport={ { once: true } }
                                    transition={ { duration: 0.6, delay: i * 0.1 } }
                                    className="group relative flex flex-col md:flex-row items-center gap-8 p-8 lg:p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-premium hover:border-bms-primary/20"
                                >
                                    {/* Icon Interface */ }
                                    <div className={ cn(
                                        "flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.5rem] shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                                        f.bg, f.color, f.border, "border-2"
                                    ) }>
                                        <Icon className="h-10 w-10" />
                                    </div>

                                    {/* Content Area */ }
                                    <div className="space-y-3 text-center md:text-right flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                            <h3 className="text-xl font-black text-slate-900 group-hover:text-bms-primary transition-colors">
                                                { f.title }
                                            </h3>
                                            <span className="font-mono text-[9px] font-bold text-slate-300 tracking-[0.2em] uppercase">
                                                { f.code }
                                            </span>
                                        </div>
                                        <p className="text-sm md:text-base leading-7 text-slate-500 font-light">
                                            { f.desc }
                                        </p>
                                    </div>

                                    {/* HUD Active Signal */ }
                                    <div className="absolute bottom-4 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <LuActivity className="w-4 h-4 text-emerald-500 animate-pulse" />
                                    </div>
                                </motion.article>
                            );
                        } ) }
                    </div>

                </div>
            </div>

            {/* Bottom Visual Hard-Stop */ }
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
        </section>
    );
}