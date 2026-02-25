"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuCpu,
    LuCircuitBoard,
    LuNetwork,
    LuDatabase,
    LuShieldCheck,
    LuActivity,
    LuTerminal,
    LuLayers,
} from "react-icons/lu";

/**
 * 🛠️ TECH HIGHLIGHTS SECTION - CORPORATE REFORMATION
 * Strategy: Technical Matrix / Bento Grid
 * Theme: Light Industrial with High-Contrast Blue accents
 */

type HighlightKey =
    | "field"
    | "edge"
    | "network"
    | "platform"
    | "security"
    | "monitoring";

type TechItem = {
    id: HighlightKey;
    index: string;
    title: string;
    description: string;
    Icon: React.ElementType;
};

const techHighlights: TechItem[] = [
    {
        id: "field",
        index: "01",
        title: "لایه میدان و تجهیزات صنعتی",
        description:
            "استفاده از PLCهای صنعتی، کنترلرهای امبدد و سنسورهای میدانی برای پایش فشار، دما و فرآیند سوخت‌گیری با قابلیت کار در شرایط سخت محیطی.",
        Icon: LuCircuitBoard,
    },
    {
        id: "edge",
        index: "02",
        title: "پردازش لبه (Edge Computing)",
        description:
            "تحلیل و اعتبارسنجی داده‌ها در نزدیک‌ترین نقطه به میدان برای کاهش تأخیر، افزایش پایداری و حفظ عملکرد در صورت قطع ارتباط با مرکز.",
        Icon: LuCpu,
    },
    {
        id: "network",
        index: "03",
        title: "شبکه ارتباطی صنعتی امن",
        description:
            "ارتباط پایدار و رمزنگاری‌شده بین جایگاه‌ها و مرکز از طریق شبکه‌های صنعتی و پروتکل‌های امن متناسب با زیرساخت‌های ملی.",
        Icon: LuNetwork,
    },
    {
        id: "platform",
        index: "04",
        title: "پلتفرم داده و سرویس مرکزی",
        description:
            "ذخیره‌سازی و پردازش داده‌های عملیاتی در بستر متمرکز؛ آماده برای تحلیل کلان، گزارش‌گیری حاکمیتی و اتصال به داشبوردهای مدیریتی.",
        Icon: LuDatabase,
    },
    {
        id: "security",
        index: "05",
        title: "امنیت و کنترل دسترسی",
        description:
            "پیاده‌سازی سیاست‌های امنیتی چندلایه شامل احراز هویت تجهیزات و ثبت رخداد برای انطباق کامل با الزامات پدافند غیرعامل.",
        Icon: LuShieldCheck,
    },
    {
        id: "monitoring",
        index: "06",
        title: "پایش لحظه‌ای و هشدار هوشمند",
        description:
            "مانیتورینگ ۲۴/۷ وضعیت جایگاه‌ها به‌همراه تولید هشدارهای پیشگیرانه برای جلوگیری از بروز حادثه پیش از وقوع.",
        Icon: LuActivity,
    },
];

export default function TechHighlightsSection ()
{
    return (
        <section
            id="tech-highlights"
            aria-labelledby="tech-heading"
            className="relative py-12 lg:py-20 bg-white overflow-hidden"
            dir="rtl"
        >
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* ================= HEADER ================= */ }
                <header className="mb-16 text-right space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 px-3 py-1 shadow-sm">
                        <LuTerminal className="h-3.5 w-3.5 text-bms-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                            Technical_Specifications / v4.2
                        </span>
                    </div>

                    <h2
                        id="tech-heading"
                        className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tightest"
                    >
                        فناوری در <span className="text-bms-primary">هسته ICTS</span>
                    </h2>

                    <p className="max-w-2xl text-base md:text-lg text-slate-500 font-light leading-relaxed">
                        معماری صنعتی چندلایه که پایداری، امنیت و مقیاس‌پذیری را به‌صورت یکپارچه در تمام سطوح عملیاتی تضمین می‌کند.
                    </p>
                </header>

                {/* ================= THE MATRIX (Grid) ================= */ }
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
                    { techHighlights.map( ( item, idx ) =>
                    {
                        const Icon = item.Icon;

                        return (
                            <motion.article
                                key={ item.id }
                                initial={ { opacity: 0 } }
                                whileInView={ { opacity: 1 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.5, delay: idx * 0.05 } }
                                className="group relative bg-white p-8 lg:p-10 transition-colors hover:bg-slate-50/50"
                            >
                                {/* UI Corner Metadata */ }
                                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <LuLayers className="w-4 h-4 text-slate-200" />
                                </div>

                                <div className="flex flex-col h-full space-y-6">
                                    {/* Icon & Index */ }
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-bms-primary border border-blue-100 shadow-sm transition-transform group-hover:scale-110">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <span className="font-mono text-[10px] font-black text-slate-300 group-hover:text-[#F4C430] transition-colors">
                                            MOD_{ item.index }
                                        </span>
                                    </div>

                                    {/* Content */ }
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-black text-slate-900 group-hover:text-bms-primary transition-colors">
                                            { item.title }
                                        </h3>
                                        <p className="text-sm leading-7 text-slate-500 text-justify font-light">
                                            { item.description }
                                        </p>
                                    </div>

                                    {/* Interaction Bar */ }
                                    <div className="mt-auto pt-4 flex items-center gap-2">
                                        <div className="h-0.5 w-0 bg-bms-primary transition-all duration-500 group-hover:w-8 rounded-full" />
                                        <span className="text-[9px] font-mono font-bold text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                                            System_Ready
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    } ) }
                </div>

                {/* ================= FOOTER ANCHOR ================= */ }
                <div className="mt-12 flex justify-center">
                    <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <LuShieldCheck className="h-4 w-4 text-emerald-500" />
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                            ISO_27001_COMPLIANT_ARCHITECTURE
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}