"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuUsers,
    LuLandmark,
    LuStore,
    LuCheck,
    LuTrendingUp,
    LuShieldCheck,
    LuBinary,
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 🤝 STAKEHOLDER BENEFITS SECTION - CORPORATE REFORMATION
 * Strategy: Ecosystem Matrix & Multi-Channel Value
 * Palette: Dark Blue (Authority), Red (National), Yellow (Safety)
 */

interface Stakeholder
{
    id: string;
    title: string;
    subtitle: string;
    icon: React.ElementType;
    tone: "yellow" | "red" | "blue";
    nodeId: string;
    benefits: string[];
}

const stakeholders: Stakeholder[] = [
    {
        id: "public",
        title: "مردم و شهروندان",
        subtitle: "ایمنی بالاتر و تجربه دیجیتال قابل اعتماد",
        nodeId: "NODE_CITIZEN_01",
        icon: LuUsers,
        tone: "yellow",
        benefits: [
            "جلوگیری سیستمی و برخط از سوخت‌گیری خودروهای فاقد ایمنی یا معاینه معتبر",
            "تجربه سوخت‌گیری سریع‌تر و حذف فرآیندهای پرخطای دستی",
            "اطمینان از صحت تراکنش‌ها و رعایت استانداردهای ایمنی در جایگاه‌ها",
        ],
    },
    {
        id: "government",
        title: "حاکمیت و دولت",
        subtitle: "حکمرانی داده و پایداری راهبردی انرژی",
        nodeId: "NODE_GOV_NATIONAL",
        icon: LuLandmark,
        tone: "red",
        benefits: [
            "رصد لحظه‌ای وضعیت شبکه توزیع سوخت در سطح ملی از طریق داشبوردهای حاکمیتی",
            "سیاست‌گذاری انرژی مبتنی بر داده‌های واقعی مصرف و رفتار ناوگان",
            "افزایش تاب‌آوری ملی و حذف وابستگی به لایسنس‌های خارجی تحریم‌پذیر",
        ],
    },
    {
        id: "business",
        title: "صنف جایگاه‌داران",
        subtitle: "مدیریت هوشمند و بهینه‌سازی هزینه‌های عملیاتی",
        nodeId: "NODE_BIZ_OPS",
        icon: LuStore,
        tone: "blue",
        benefits: [
            "حذف دخالت انسانی در ثبت، تسویه و گزارش تراکنش‌ها جهت کاهش مغایرت مالی",
            "دسترسی لحظه‌ای به وضعیت فنی تجهیزات و شیفت‌ها از طریق پنل مدیریتی اختصاصی",
            "آمادگی زیرساخت برای مدل‌های درآمدی نوین و سیستم‌های وفادارسازی مشتریان",
        ],
    },
];

export default function StakeholderBenefitsSection ()
{
    return (
        <section
            id="stakeholder-benefits"
            aria-labelledby="benefits-heading"
            className="relative py-12 lg:py-20 bg-slate-50 overflow-hidden"
            dir="rtl"
        >
            {/* Background HUD Graphics */ }
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none hidden lg:block">
                <LuBinary className="w-64 h-64 text-bms-primary" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* ================= HEADER ================= */ }
                <header className="mb-16 text-right space-y-4 max-w-4xl">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-3 py-1 shadow-sm">
                        <LuTrendingUp className="h-3.5 w-3.5 text-bms-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                            Ecosystem Value Map
                        </span>
                    </div>

                    <h2
                        id="benefits-heading"
                        className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tightest"
                    >
                        منافع هم‌راستا در یک <br />
                        <span className="text-bms-primary underline decoration-bms-primary/20 underline-offset-8">اکوسیستم یکپارچه</span>
                    </h2>

                    <p className="max-w-2xl text-base md:text-lg text-slate-500 font-light leading-relaxed">
                        ICTS بر اساس مدل «برد-برد-برد» مهندسی شده است؛ جایی که افزایش ایمنی، کاهش هزینه و حکمرانی داده به هم می‌رسند.
                    </p>
                </header>

                {/* ================= STAKEHOLDER NODES ================= */ }
                <div className="grid gap-6 md:grid-cols-3">
                    { stakeholders.map( ( persona, index ) =>
                    {
                        const Icon = persona.icon;
                        return (
                            <motion.article
                                key={ persona.id }
                                initial={ { opacity: 0, y: 20 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.6, delay: index * 0.1 } }
                                className="group relative flex flex-col h-full rounded-[2.5rem] bg-white border border-slate-200 p-8 shadow-sm transition-all duration-500 hover:shadow-premium hover:border-bms-primary/30"
                            >
                                {/* HUD Metadata Tag */ }
                                <div className="absolute top-8 left-8">
                                    <span className="font-mono text-[8px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                                        { persona.nodeId }
                                    </span>
                                </div>

                                {/* Icon Chassis */ }
                                <div className={ cn(
                                    "flex h-16 w-16 items-center justify-center rounded-2xl shadow-inner mb-8 transition-transform group-hover:scale-110",
                                    persona.tone === "yellow" && "bg-amber-50 text-[#F4C430] border border-amber-100",
                                    persona.tone === "red" && "bg-red-50 text-[#D72638] border border-red-100",
                                    persona.tone === "blue" && "bg-blue-50 text-bms-primary border border-blue-100"
                                ) }>
                                    <Icon className="h-8 w-8" />
                                </div>

                                <div className="space-y-2 mb-8">
                                    <h3 className="text-xl font-black text-slate-900 group-hover:text-bms-primary transition-colors">
                                        { persona.title }
                                    </h3>
                                    <p className="text-xs font-bold text-slate-400 leading-relaxed">
                                        { persona.subtitle }
                                    </p>
                                </div>

                                {/* Benefits List */ }
                                <ul className="space-y-4 flex-1">
                                    { persona.benefits.map( ( point, idx ) => (
                                        <li key={ idx } className="flex items-start gap-3">
                                            <div className={ cn(
                                                "mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                                                persona.tone === "yellow" && "bg-amber-100 text-[#F4C430]",
                                                persona.tone === "red" && "bg-red-100 text-[#D72638]",
                                                persona.tone === "blue" && "bg-blue-100 text-bms-primary"
                                            ) }>
                                                <LuCheck className="h-2.5 w-2.5" />
                                            </div>
                                            <p className="text-sm leading-corp-relaxed text-slate-600 font-light">
                                                { point }
                                            </p>
                                        </li>
                                    ) ) }
                                </ul>

                                {/* Technical Decorative Anchor */ }
                                <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <LuShieldCheck className="h-5 w-5 text-emerald-500" />
                                    <span className="text-[9px] font-mono font-bold text-slate-400">VERIFIED_PROTOCOL</span>
                                </div>
                            </motion.article>
                        );
                    } ) }
                </div>
            </div>
        </section>
    );
}