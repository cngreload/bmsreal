"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuMapPin,
    LuShieldCheck,
    LuGem,
    LuBinary,
    LuFingerprint,
    LuZap
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 🇮🇷 LOCAL ADVANTAGE SECTION - CORPORATE REFORMATION
 * Strategy: Strategic Proof Points / Sovereignty Cards
 * Spacing: Tightened Vertical Rhythm (py-12 lg:py-20)
 */

interface Advantage
{
    id: string;
    index: string;
    title: string;
    icon: React.ElementType;
    description: string;
    tone: "blue" | "red" | "yellow";
}

const advantages: Advantage[] = [
    {
        id: "native",
        index: "ADV_NATIVE_CORE",
        title: "طراحی بومی مبتنی بر واقعیت میدان",
        icon: LuMapPin,
        tone: "blue",
        description:
            "سامانه ICTS بازتولید یا بومی‌سازی یک راهکار خارجی نیست؛ بلکه از مرحله طراحی اولیه، بر اساس شرایط واقعی بهره‌برداری، محدودیت‌های زیرساختی، الگوهای مصرف و الزامات ایمنی جایگاه‌های CNG کشور مهندسی شده است.",
    },
    {
        id: "support",
        index: "ADV_SECURE_AUTH",
        title: "امنیت راهبردی و پشتیبانی پایدار داخلی",
        icon: LuShieldCheck,
        tone: "red",
        description:
            "چرخه کامل توسعه، نگه‌داری، پشتیبانی و ارتقاء ICTS به‌صورت کامل در داخل کشور انجام می‌شود. این موضوع نه‌تنها انطباق با الزامات پدافند غیرعامل را ممکن می‌سازد، بلکه وابستگی به فناوری‌های تحریم‌پذیر را حذف می‌کند.",
    },
    {
        id: "asset",
        index: "ADV_VALUE_ASSET",
        title: "دارایی زیرساختی بلندمدت، نه هزینه مقطعی",
        icon: LuGem,
        tone: "yellow",
        description:
            "ICTS یک پروژه کوتاه‌مدت یا هزینه مصرفی نیست؛ بلکه دارایی زیرساختی قابل توسعه‌ای است که با فرآیندها، زبان عملیاتی و نیازهای راهبردی صنعت گاز کشور هم‌راستا طراحی شده و قابلیت انطباق با الزامات آینده را دارد.",
    },
];

export default function LocalAdvantageSection ()
{
    return (
        <section
            id="local-advantage"
            aria-labelledby="local-heading"
            className="relative py-12 lg:py-20 bg-white overflow-hidden"
            dir="rtl"
        >
            {/* Background HUD Layer */ }
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none hidden lg:block">
                <LuBinary className="w-96 h-96 text-bms-primary" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* ================= HEADER ================= */ }
                <header className="mb-16 text-right space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 px-3 py-1 shadow-sm">
                        <LuFingerprint className="h-3.5 w-3.5 text-bms-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                            Competitive_Edge / Local_Sovereignty
                        </span>
                    </div>

                    <h2
                        id="local-heading"
                        className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tightest"
                    >
                        چرا <span className="text-bms-primary">توانمندی بومی</span> <br />
                        یک الزام راهبردی است؟
                    </h2>

                    <p className="max-w-2xl text-base md:text-lg text-slate-500 font-light leading-relaxed">
                        در زیرساخت‌های حیاتی انرژی، بومی‌بودن پیش-شرط تداوم سرویس، امنیت داده و امکان حکمرانی فناورانه در شرایط بحرانی است.
                    </p>
                </header>

                {/* ================= ADVANTAGE CARDS ================= */ }
                <div className="grid gap-6 md:grid-cols-3">
                    { advantages.map( ( item, idx ) =>
                    {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={ item.id }
                                initial={ { opacity: 0, y: 20 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.5, delay: idx * 0.1 } }
                                className="group relative flex flex-col h-full rounded-[2.5rem] bg-slate-50/50 border border-slate-100 p-8 lg:p-10 transition-all duration-500 hover:bg-white hover:shadow-premium hover:border-bms-primary/20"
                            >
                                {/* Technical Index Node */ }
                                <div className="absolute top-8 left-8">
                                    <span className="font-mono text-[8px] font-black text-slate-300 group-hover:text-bms-primary transition-colors tracking-widest uppercase">
                                        { item.index }
                                    </span>
                                </div>

                                {/* Icon Interface */ }
                                <div className={ cn(
                                    "flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm mb-8 transition-transform group-hover:scale-110",
                                    item.tone === "blue" && "bg-blue-50 text-bms-primary border border-blue-100",
                                    item.tone === "red" && "bg-red-50 text-[#D72638] border border-red-100",
                                    item.tone === "yellow" && "bg-amber-50 text-[#F4C430] border border-amber-100"
                                ) }>
                                    <Icon className="h-7 w-7" />
                                </div>

                                {/* Content Hierarchy */ }
                                <div className="space-y-4 flex-1">
                                    <h3 className="text-xl font-black text-slate-900 group-hover:text-bms-primary transition-colors leading-tight">
                                        { item.title }
                                    </h3>

                                    {/* Accent Line */ }
                                    <div className={ cn(
                                        "h-0.5 w-8 rounded-full",
                                        item.tone === "blue" && "bg-bms-primary",
                                        item.tone === "red" && "bg-[#D72638]",
                                        item.tone === "yellow" && "bg-[#F4C430]"
                                    ) } />

                                    <p className="text-sm md:text-[15px] leading-corp-relaxed text-slate-500 text-justify font-light">
                                        { item.description }
                                    </p>
                                </div>

                                {/* Interaction Visualizer */ }
                                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] font-mono font-bold text-slate-400">STATUS: VERIFIED</span>
                                    <LuZap className="h-4 w-4 text-[#F4C430]" />
                                </div>
                            </motion.article>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}