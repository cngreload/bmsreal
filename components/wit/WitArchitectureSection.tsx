"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuLayers,
    LuCpu,
    LuNetwork,
    LuDatabase,
    LuBinary,
    LuActivity,
    LuShieldCheck,
    LuZap
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 🏗️ WIT ARCHITECTURE SECTION - REFORMED
 * Strategy: Technical Stack Visualization / Industrial Blueprint
 * Palette: BMS Navy (#145C98), Industrial Red (#D72638), Intel Yellow (#F4C430)
 */

const layers = [
    {
        id: "decide",
        code: "OSI_LAYER_06",
        title: "لایه تحلیل و تصمیم‌سازی",
        subtitle: "Decision Intelligence",
        desc: "تجمیع داده‌ها برای تولید بینش عملیاتی، پایش شاخص‌های کلیدی و پشتیبانی از تصمیم‌گیری مدیریتی.",
        color: "text-[#F4C430]",
        bg: "bg-amber-50",
        border: "border-amber-200",
        icon: LuZap
    },
    {
        id: "apps",
        code: "OSI_LAYER_05",
        title: "لایه کاربردی و محصولات",
        subtitle: "Application Platforms",
        desc: "راهکارهای نهایی مانند انرژی (ICTS) و سلامت (Clinicans) که مستقیماً در میدان عمل مستقر می‌شوند.",
        color: "text-bms-primary",
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: LuLayers
    },
    {
        id: "api",
        code: "OSI_LAYER_04",
        title: "لایه یکپارچه‌سازی و API",
        subtitle: "Secure Integration",
        desc: "ایجاد ارتباط کنترل‌شده با سامانه‌های بیرونی، ERP و سرویس‌های سازمانی با حفظ استقلال داده.",
        color: "text-bms-primary",
        bg: "bg-blue-50/50",
        border: "border-blue-100",
        icon: LuBinary
    },
    {
        id: "core",
        code: "OSI_LAYER_03",
        title: "سرویس‌های مرکزی و داده",
        subtitle: "Core Data Platform",
        desc: "مدیریت هویت، امنیت، ثبت رخدادها و پردازش رویداد به‌عنوان ستون فقرات پلتفرم WIT.",
        color: "text-slate-900",
        bg: "bg-slate-100",
        border: "border-slate-200",
        icon: LuDatabase
    },
    {
        id: "edge",
        code: "OSI_LAYER_02",
        title: "لایه کنترل و لبه (Edge)",
        subtitle: "Edge Logic Compute",
        desc: "پردازش نزدیک به میدان برای کاهش تأخیر، افزایش پایداری و تضمین عملکرد در شرایط قطع ارتباط.",
        color: "text-[#D72638]",
        bg: "bg-red-50",
        border: "border-red-200",
        icon: LuCpu
    },
    {
        id: "field",
        code: "OSI_LAYER_01",
        title: "لایه میدان و تجهیزات",
        subtitle: "Industrial field Devices",
        desc: "تجهیزات صنعتی، PLCها، سنسورها و کنترلرهای تعبیه‌شده که داده‌های واقعی را تولید می‌کنند.",
        color: "text-[#D72638]",
        bg: "bg-red-50/50",
        border: "border-red-100",
        icon: LuActivity
    },
];

export default function WitArchitectureSection ()
{
    return (
        <section
            id="architecture"
            aria-labelledby="arch-heading"
            className="relative w-full py-12"
            dir="rtl"
        >
            <div className="grid gap-16 lg:grid-cols-12 items-start">

                {/* ===================== TEXTUAL EXPLANATION (RIGHT) ===================== */ }
                <div className="lg:col-span-5 space-y-8 sticky top-32">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 text-bms-primary">
                            <LuLayers className="h-5 w-5" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 font-mono">
                                System_Architecture / v4.2
                            </span>
                        </div>

                        <h2
                            id="arch-heading"
                            className="text-3xl md:text-5xl font-black text-slate-950 leading-[1.1] tracking-tightest"
                        >
                            معماری لایه‌ای؛ <br />
                            <span className="text-bms-primary">آماده برای مقیاس ملی</span>
                        </h2>

                        <p className="text-base md:text-lg leading-relaxed text-slate-500 font-light text-justify">
                            پلتفرم <strong className="text-slate-900 font-bold">WIT</strong> بر اساس یک معماری لایه‌ای صنعتی طراحی شده است که مسیر داده را از
                            <strong className="text-bms-primary mx-1">تجهیزات میدانی</strong> تا
                            <strong className="text-bms-primary mx-1">تحلیل‌های راهبردی</strong> به‌صورت یکپارچه پوشش می‌دهد.
                            این ساختار ماژولار، امکان توسعه و ارتقای هر لایه را بدون اختلال در کل سامانه فراهم می‌کند.
                        </p>
                    </div>

                    {/* Technical Key Signals */ }
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        { [
                            { icon: LuShieldCheck, label: "Fault-Tolerant Design" },
                            { icon: LuZap, label: "Low Latency Edge" },
                            { icon: LuNetwork, label: "Scalable API Mesh" },
                            { icon: LuBinary, label: "End-to-End Encryption" }
                        ].map( ( signal, idx ) => (
                            <div key={ idx } className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                                <signal.icon className="w-4 h-4 text-bms-primary" />
                                <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-tight">{ signal.label }</span>
                            </div>
                        ) ) }
                    </div>
                </div>

                {/* ===================== VISUAL STACK (LEFT) ===================== */ }
                <div className="lg:col-span-7 relative">
                    {/* Decorative HUD connection lines */ }
                    <div className="absolute -right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden lg:block" />

                    <div className="flex flex-col gap-3">
                        { layers.map( ( layer, i ) =>
                        {
                            const LayerIcon = layer.icon;
                            return (
                                <motion.div
                                    key={ layer.id }
                                    initial={ { opacity: 0, x: -30 } }
                                    whileInView={ { opacity: 1, x: 0 } }
                                    viewport={ { once: true } }
                                    transition={ { duration: 0.6, delay: i * 0.1 } }
                                    className={ cn(
                                        "group relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-[2rem] border-2 transition-all duration-500 hover:shadow-premium",
                                        layer.bg, layer.border
                                    ) }
                                >
                                    {/* Layer Index / HUD */ }
                                    <div className="absolute top-4 left-6 hidden md:block">
                                        <span className="font-mono text-[9px] font-bold text-slate-400 tracking-widest uppercase">
                                            { layer.code }
                                        </span>
                                    </div>

                                    {/* Icon Chassis */ }
                                    <div className={ cn(
                                        "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-white transition-transform group-hover:scale-110 group-hover:rotate-3",
                                        layer.color
                                    ) }>
                                        <LayerIcon className="w-7 h-7" />
                                    </div>

                                    {/* Content */ }
                                    <div className="flex-1 text-center md:text-right space-y-1">
                                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                                            <h3 className="text-base md:text-lg font-black text-slate-900">
                                                { layer.title }
                                            </h3>
                                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                                                { layer.subtitle }
                                            </span>
                                        </div>
                                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 overflow-hidden">
                                            { layer.desc }
                                        </p>
                                    </div>

                                    {/* Action Signal */ }
                                    <div className="absolute bottom-4 left-6 opacity-20 group-hover:opacity-100 transition-opacity">
                                        <div className={ cn( "h-1 w-8 rounded-full",
                                            layer.id === 'field' || layer.id === 'edge' ? "bg-[#D72638]" :
                                                layer.id === 'decide' ? "bg-[#F4C430]" : "bg-bms-primary"
                                        ) } />
                                    </div>
                                </motion.div>
                            );
                        } ) }
                    </div>

                    {/* Bottom Telemetry for the Stack */ }
                    <div className="mt-8 flex items-center justify-between px-6 opacity-30">
                        <div className="flex items-center gap-3">
                            <LuBinary className="w-4 h-4 text-slate-900" />
                            <span className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-[0.4em]">Integrated_Stack_Active</span>
                        </div>
                        <span className="text-[8px] font-mono font-bold text-slate-500 uppercase">Latency: &lt; 15ms</span>
                    </div>
                </div>
            </div>
        </section>
    );
}