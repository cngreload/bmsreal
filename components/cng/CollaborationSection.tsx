"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuLandmark,
    LuFuel,
    LuCreditCard,
    LuMicroscope,
    LuArrowLeft,
    LuBinary,
    LuActivity,
    LuShieldCheck
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 🤝 COLLABORATION SECTION - CORPORATE REFORMATION
 * Strategy: Strategic Alignment Matrix
 * Palette: Dark Blue (BMS Primary), Red (Industrial), Yellow (Intelligence)
 */

type SectorKey = "gov" | "owners" | "psp" | "rnd";

type CollabItem = {
    id: SectorKey;
    title: string;
    icon: React.ElementType;
    code: string;
    description: string; // Added for SEO/Context
    bullets: string[];
};

const collabItems: CollabItem[] = [
    {
        id: "gov",
        title: "نهادهای حاکمیتی و سیاست‌گذار",
        icon: LuLandmark,
        code: "SECTOR_GOV_01",
        description: "استقرار زیرساخت بومی و حکمرانی داده در مقیاس ملی",
        bullets: [
            "استقرار زیرساخت بومی و قابل اتکای هوشمندسازی با مشارکت نهادهای متولی انرژی",
            "تعریف و تثبیت استانداردهای مرجع ملی در حوزه ایمنی، پایش و داده‌های عملیاتی",
            "ایجاد امکان نظارت متمرکز، داده‌محور و بلادرنگ بر شبکه توزیع سوخت کشور",
        ],
    },
    {
        id: "owners",
        title: "صنف و بهره‌برداران جایگاه‌ها",
        icon: LuFuel,
        code: "SECTOR_OPS_02",
        description: "بهینه‌سازی عملیاتی و کاهش هزینه‌های نگهداشت",
        bullets: [
            "مدل‌های استقرار مرحله‌ای و اقتصادی متناسب با مقیاس هر جایگاه",
            "کاهش توقف، خرابی و هزینه‌های نگهداشت از طریق پایش پیشگیرانه تجهیزات",
            "شفاف‌سازی عملیات روزانه، شیفت‌ها و فرآیندها با حداقل وابستگی به نیروی انسانی",
        ],
    },
    {
        id: "psp",
        title: "شرکت‌های پرداخت و فین‌تک",
        icon: LuCreditCard,
        code: "SECTOR_FIN_03",
        description: "توسعه زیرساخت‌های نوین پرداخت صنعتی",
        bullets: [
            "توسعه راهکارهای پرداخت تخصصی متناسب با زیرساخت انرژی و سوخت",
            "تسویه، تسهیم و گزارش‌گیری مالی شفاف در سطح جایگاه و شبکه",
            "یکپارچه‌سازی امن و استاندارد با پایانه‌های فروش و سامانه‌های مالی موجود",
        ],
    },
    {
        id: "rnd",
        title: "همکاری تحقیقاتی و دانشگاهی",
        icon: LuMicroscope,
        code: "SECTOR_RND_04",
        description: "توسعه مرزهای دانش در هوش مصنوعی لبه (Edge AI)",
        bullets: [
            "تحلیل کلان‌داده‌های عملیاتی برای استخراج الگوهای مصرف و رفتار شبکه",
            "توسعه الگوریتم‌های هوش مصنوعی و تحلیل پیش‌بینانه در سطح لبه (Edge AI)",
            "پشتیبانی علمی از بهینه‌سازی شبکه توزیع انرژی مبتنی بر داده واقعی میدان",
        ],
    },
];

const toneMap: Record<SectorKey, { bg: string; text: string; border: string; dot: string; }> = {
    gov: {
        bg: "bg-blue-50",
        text: "text-[#145C98]",
        border: "group-hover:border-[#145C98]/30",
        dot: "bg-[#145C98]",
    },
    owners: {
        bg: "bg-red-50",
        text: "text-[#D72638]",
        border: "group-hover:border-[#D72638]/30",
        dot: "bg-[#D72638]",
    },
    psp: {
        bg: "bg-blue-50",
        text: "text-[#145C98]",
        border: "group-hover:border-[#145C98]/30",
        dot: "bg-[#145C98]",
    },
    rnd: {
        bg: "bg-amber-50",
        text: "text-[#F4C430]",
        border: "group-hover:border-[#F4C430]/30",
        dot: "bg-[#F4C430]",
    },
};

export default function CollaborationSection ()
{
    return (
        <section
            id="collaboration"
            className="py-12 lg:py-20 bg-white overflow-hidden"
            aria-labelledby="collab-heading"
            dir="rtl"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-12">

                {/* ================= HEADER ================= */ }
                <header className="mb-16 text-right space-y-4 max-w-4xl">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 px-3 py-1 shadow-sm">
                        <LuActivity className="h-3.5 w-3.5 text-[#145C98]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                            Partnership_Ecosystem
                        </span>
                    </div>

                    <h2
                        id="collab-heading"
                        className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tightest"
                    >
                        مدل همکاری؛ از <span className="text-[#145C98]">هم‌راستایی منافع</span> <br />
                        تا مسئولیت مشترک ملی
                    </h2>

                    <p className="max-w-2xl text-base md:text-lg text-slate-500 font-light leading-relaxed">
                        ICTS یک بستر زیرساختی برای تجمیع ظرفیت‌های رگولاتور، بهره‌بردار و متخصصین است تا شفافیت و ایمنی را در مقیاس شبکه تضمین کند.
                    </p>
                </header>

                {/* ================= COLLAB MATRIX ================= */ }
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:gap-8">
                    { collabItems.map( ( item, index ) =>
                    {
                        const Icon = item.icon;
                        const tone = toneMap[ item.id ];

                        return (
                            <motion.article
                                key={ item.id }
                                initial={ { opacity: 0, y: 20 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.5, delay: index * 0.1 } }
                                className={ cn(
                                    "group relative flex flex-col h-full rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-8 lg:p-10 transition-all duration-500",
                                    "hover:bg-white hover:shadow-premium",
                                    tone.border
                                ) }
                            >
                                {/* UI Metadata Header */ }
                                <div className="flex justify-between items-start mb-8">
                                    <div className={ cn(
                                        "flex h-16 w-16 items-center justify-center rounded-2xl shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-3",
                                        tone.bg, tone.text
                                    ) }>
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-white/80 px-2 py-0.5 rounded border border-slate-100">
                                        { item.code }
                                    </span>
                                </div>

                                {/* Content */ }
                                <div className="space-y-4 mb-8">
                                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#145C98] transition-colors leading-tight">
                                        { item.title }
                                    </h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">
                                        { item.description }
                                    </p>
                                </div>

                                {/* Bullets - Styled as Data Points */ }
                                <ul className="space-y-4 flex-1 border-t border-slate-100 pt-8">
                                    { item.bullets.map( ( point, idx ) => (
                                        <li
                                            key={ idx }
                                            className="flex items-start gap-4 text-sm leading-corp-relaxed text-slate-600 font-light"
                                        >
                                            <div className={ cn(
                                                "mt-2 h-1.5 w-1.5 shrink-0 rounded-full opacity-40 group-hover:opacity-100 transition-opacity",
                                                tone.dot
                                            ) } />
                                            <span className="text-pretty">{ point }</span>
                                        </li>
                                    ) ) }
                                </ul>

                                {/* Technical Status Footer */ }
                                <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex items-center gap-2">
                                        <LuShieldCheck className="w-4 h-4 text-emerald-500" />
                                        <span className="text-[9px] font-mono font-bold text-slate-400">ALIGNMENT_VERIFIED</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs font-bold text-[#145C98]">
                                        <span>مشاهده جزئیات همکاری</span>
                                        <LuArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                    </div>
                                </div>
                            </motion.article>
                        );
                    } ) }
                </div>

                {/* ================= SECTION TELEMETRY ================= */ }
                <div className="mt-16 flex flex-wrap items-center justify-between gap-6 opacity-30">
                    <div className="flex items-center gap-3">
                        <LuBinary className="w-5 h-5 text-slate-900" />
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.4em]">
                            BMS_STRATEGIC_NETWORK_READY
                        </span>
                    </div>
                    <div className="h-px flex-1 bg-slate-200 hidden md:block" />
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase">protocol_version: 4.2.0</span>
                </div>
            </div>
        </section>
    );
}