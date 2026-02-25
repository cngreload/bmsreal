"use client";

import React from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import
{
    LuCpu, LuVideo, LuScan, LuWifi, LuToggleRight, LuShieldCheck,
    LuLayoutDashboard, LuDatabase, LuRefreshCw, LuCreditCard,
    LuBrainCircuit, LuFileChartLine, LuLayers, LuBox, LuZap
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/* ================= DATA ================= */
const hardwareProducts = [
    { id: "HR", name: "HR-ICTS", desc: "هسته مرکزی کنترل", icon: LuCpu },
    { id: "HCO", name: "HCO-ICTS", desc: "اینترفیس دیسپنسر", icon: LuBox },
    { id: "HPCR", name: "HPCR-ICTS", desc: "دوربین پلاک‌خوان", icon: LuVideo },
    { id: "HPR", name: "HPR-ICTS", desc: "یونیت پردازش LPR", icon: LuScan },
    { id: "COM", name: "Com-Module", desc: "ماژول ارتباطی", icon: LuWifi },
    { id: "DOC", name: "Digital I/O", desc: "کنترلر ایمنی", icon: LuToggleRight },
];

const softwareProducts = [
    { id: "SF", name: "SF-ICTS", desc: "مدیریت عملیات", icon: LuLayers },
    { id: "SS", name: "SS-ICTS", desc: "تونل امن داده", icon: LuShieldCheck },
    { id: "SM", name: "SM-ICTS", desc: "داشبورد مرکزی", icon: LuLayoutDashboard },
    { id: "DB", name: "DB-ICTS", desc: "دیتابیس توزیع‌شده", icon: LuDatabase },
    { id: "SU", name: "SU-ICTS", desc: "آپدیت از راه دور", icon: LuRefreshCw },
    { id: "PAY", name: "Payment", desc: "پرداخت یکپارچه", icon: LuCreditCard },
    { id: "AI", name: "AI Core", desc: "هوش مصنوعی", icon: LuBrainCircuit },
    { id: "REP", name: "Reports", desc: "گزارش‌ساز پویا", icon: LuFileChartLine },
];

export default function TwoBranchProducts ()
{
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "اجزای سامانه ICTS",
        "description": "معماری یکپارچه سخت‌افزار و نرم‌افزار هوشمند در مقیاس صنعتی",
        "itemListElement": [ ...hardwareProducts, ...softwareProducts ].map( ( item, index ) => ( {
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
        } ) ),
    };

    return (
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden" dir="rtl">
            <Script
                id="products-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            {/* Architectural Grid Underlay */ }
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none [background-image:radial-gradient(#145C98_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* ================= HEADER ================= */ }
                <header className="mb-24 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm">
                        <LuZap className="w-3.5 h-3.5 text-[#F4C430]" />
                        <span>Integrated Ecosystem</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black tracking-tightest text-slate-950">
                        همگرایی <span className="text-bms-primary">سخت‌افزار و هوش</span>
                    </h2>

                    <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-500 font-light">
                        ما راهکارهای خود را در دو جبهه سخت‌افزار صنعتی و نرم‌افزار ابری به‌صورت همزمان مهندسی می‌کنیم.
                        این رویکرد، پایداری، امنیت و انطباق کامل سامانه را در زیرساخت‌های حساس تضمین می‌کند.
                    </p>
                </header>

                {/* ================= SYSTEM BLUEPRINT ================= */ }
                <div className="relative">

                    {/* Central Data Trunk (The Spine) */ }
                    <div className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2">
                        <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center">
                            <div className="w-3 h-3 rounded-full bg-white border-2 border-bms-primary shadow-[0_0_10px_rgba(20,92,152,0.3)]" />
                            <span className="mt-4 text-[8px] font-mono font-bold text-slate-400 uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
                                SYSTEM_CORE_BUS
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

                        {/* ---------------- HARDWARE COLUMN (RIGHT BRANCH) ---------------- */ }
                        <motion.div
                            initial={ { opacity: 0, x: 30 } }
                            whileInView={ { opacity: 1, x: 0 } }
                            viewport={ { once: true } }
                            transition={ { duration: 0.8 } }
                            className="space-y-10 lg:pl-10"
                        >
                            <SectionLabel title="لایه فیزیکی و فیلد" code="HARDWARE" tone="yellow" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                { hardwareProducts.map( ( item, idx ) => (
                                    <ProductItem key={ item.id } item={ item } tone="yellow" index={ idx } />
                                ) ) }
                            </div>
                        </motion.div>

                        {/* ---------------- SOFTWARE COLUMN (LEFT BRANCH) ---------------- */ }
                        <motion.div
                            initial={ { opacity: 0, x: -30 } }
                            whileInView={ { opacity: 1, x: 0 } }
                            viewport={ { once: true } }
                            transition={ { duration: 0.8 } }
                            className="space-y-10 lg:pr-10"
                        >
                            <SectionLabel title="لایه منطقی و پردازش" code="SOFTWARE" tone="blue" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                { softwareProducts.map( ( item, idx ) => (
                                    <ProductItem key={ item.id } item={ item } tone="blue" index={ idx } />
                                ) ) }
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}

/* ================= COMPONENT: PRODUCT ITEM ================= */
function ProductItem ( {
    item,
    tone,
    index
}: {
    item: typeof hardwareProducts[ 0 ],
    tone: "yellow" | "blue",
    index: number;
} )
{
    const Icon = item.icon;
    const isYellow = tone === "yellow";

    return (
        <motion.div
            initial={ { opacity: 0, y: 10 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
            transition={ { delay: index * 0.05 } }
            className={ cn(
                "group relative flex items-center gap-4 p-5 rounded-3xl border transition-all duration-500 hover:shadow-xl",
                isYellow
                    ? "bg-white border-slate-100 hover:border-[#F4C430]/30"
                    : "bg-slate-50 border-slate-200 hover:bg-white hover:border-bms-primary/30"
            ) }
        >
            {/* Icon Box */ }
            <div className={ cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 shadow-sm",
                isYellow ? "bg-amber-50 text-[#F4C430] border border-amber-100" : "bg-white text-bms-primary border border-slate-100"
            ) }>
                <Icon className="h-6 w-6" />
            </div>

            <div className="flex-1 text-right">
                <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs font-black text-slate-900 tracking-tight">
                        { item.name }
                    </span>
                    <span className="text-[8px] font-mono font-bold text-slate-400">
                        MOD_{ item.id }
                    </span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    { item.desc }
                </div>
            </div>

            {/* Interaction Glow */ }
            <div className={ cn(
                "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                isYellow ? "bg-gradient-to-br from-amber-50/50 to-transparent" : "bg-gradient-to-br from-blue-50/50 to-transparent"
            ) } />
        </motion.div>
    );
}

/* ================= COMPONENT: SECTION LABEL ================= */
function SectionLabel ( {
    title,
    code,
    tone,
}: {
    title: string;
    code: string;
    tone: "yellow" | "blue";
} )
{
    const isYellow = tone === "yellow";

    return (
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-4">
                <div className={ cn(
                    "h-2 w-2 rounded-full",
                    isYellow ? "bg-[#F4C430] shadow-[0_0_10px_#F4C430]" : "bg-bms-primary shadow-[0_0_10px_#145C98]"
                ) } />
                <h3 className="text-xl font-black text-slate-900">{ title }</h3>
            </div>
            <span className={ cn(
                "px-3 py-1 rounded-lg text-[9px] font-mono font-black border tracking-widest",
                isYellow ? "bg-amber-50 text-amber-700 border-amber-100" : "bg-blue-50 text-bms-primary border-blue-100"
            ) }>
                { code }
            </span>
        </div>
    );
}