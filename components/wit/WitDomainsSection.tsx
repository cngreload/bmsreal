"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuFactory,
    LuHouse,
    LuGlobe,
    LuShield,
    LuTrendingUp,
    LuUsers,
    LuArrowLeft,
    LuBinary,
    LuActivity,

} from "react-icons/lu";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * 🌐 WIT DOMAINS SECTION - REFORMED
 * Strategy: Strategic Sector Matrix / Bento Dossier
 * Palette: BMS Navy (#145C98), Industrial Red (#D72638), Intel Yellow (#F4C430)
 */

const domains = [
    {
        id: "industrial",
        title: "صنعت و تولید هوشمند",
        icon: LuFactory,
        tone: "red",
        code: "DOMAIN_IND_4.0",
        features: [
            "کنترل و مانیتورینگ از راه دور",
            "بهینه‌سازی فرآیند با هوش مصنوعی",
            "پیش‌بینی نگهداشت پیشگیرانه",
            "اتوماسیون کامل خط تولید"
        ]
    },
    {
        id: "smart-home",
        title: "خانه‌های هوشمند نسل جدید",
        icon: LuHouse,
        tone: "blue",
        code: "DOMAIN_BMS_RES",
        features: [
            "کنترل یکپارچه تجهیزات",
            "مدیریت هوشمند مصرف انرژی",
            "امنیت پیشرفته بیومتریک",
            "تجربه زندگی شخصی‌سازی شده"
        ]
    },
    {
        id: "trade",
        title: "مدیریت واردات و صادرات",
        icon: LuGlobe,
        tone: "yellow",
        code: "DOMAIN_LOG_GLOBAL",
        features: [
            "تخمین دقیق نیازهای بازار",
            "بهینه‌سازی زنجیره تأمین",
            "پیش‌بینی نوسانات اقتصادی",
            "کاهش ریسک‌های تجاری"
        ]
    },
    {
        id: "national",
        title: "شفافیت و امنیت ملی",
        icon: LuShield,
        tone: "red",
        code: "DOMAIN_SEC_GOV",
        features: [
            "مقابله با فساد و اختلاس سیستمی",
            "شفافیت مطلق داده‌ای",
            "امنیت سایبری ارتش‌سطح",
            "نظارت فرآیندی حاکمیتی"
        ]
    },
    {
        id: "future",
        title: "آینده کار و اتوماسیون",
        icon: LuTrendingUp,
        tone: "yellow",
        code: "DOMAIN_WORK_AUTO",
        features: [
            "اتوماسیون فرآیندهای تکراری",
            "ایجاد مشاغل نوین دیجیتال",
            "افزایش بهره‌وری نیروی کار",
            "انعطاف‌پذیری سازمانی"
        ]
    },
    {
        id: "entrepreneur",
        title: "کارآفرینان چند کسب‌وکار",
        icon: LuUsers,
        tone: "blue",
        code: "DOMAIN_BIZ_ENT",
        features: [
            "نظارت یکپارچه بر پورتفولیو",
            "تصمیم‌گیری مبتنی بر داده کلان",
            "کاهش هزینه‌های غیرعملیاتی",
            "بهبود تجربه مشتری"
        ]
    }
];

export default function WitDomainsSection ()
{
    return (
        <section
            id="domains"
            className="relative py-24 lg:py-32 bg-white overflow-hidden"
            aria-labelledby="domains-heading"
            dir="rtl"
        >
            {/* 🧩 ARCHITECTURAL BACKGROUND */ }
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] [background-image:radial-gradient(#145C98_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* ===================== HEADER - Editorial Logic ===================== */ }
                <header className="mb-20 text-center lg:text-right space-y-6 max-w-4xl lg:mr-0 mr-auto">
                    <motion.div
                        initial={ { opacity: 0, x: 20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="inline-flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-200 px-4 py-1.5 shadow-sm"
                    >
                        <LuGlobe className="h-4 w-4 text-bms-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 font-mono">
                            Operational_Realms / WIT_Ecosystem
                        </span>
                    </motion.div>

                    <h2
                        id="domains-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.1] tracking-tightest"
                    >
                        WIT در خدمت <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#145C98] via-indigo-600 to-[#D72638]">
                            تحول دیجیتال همه‌جانبه
                        </span>
                    </h2>

                    <p className="max-w-3xl text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                        از خانه‌های هوشمند تا صنایع استراتژیک و امنیت ملی؛ پلتفرم WIT با معماری تطبیق‌پذیر خود، استانداردهای کارایی را در تمامی حوزه‌ها بازتعریف می‌کند.
                    </p>
                </header>

                {/* ===================== DOMAINS GRID ===================== */ }
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    { domains.map( ( domain, index ) =>
                    {
                        const Icon = domain.icon;
                        return (
                            <motion.article
                                key={ domain.id }
                                initial={ { opacity: 0, y: 20 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.6, delay: index * 0.1 } }
                                className="group relative flex flex-col p-8 lg:p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-premium hover:border-bms-primary/20"
                            >
                                {/* HUD Corner Metadata */ }
                                <div className="flex justify-between items-start mb-10">
                                    <div className={ cn(
                                        "flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-3",
                                        domain.tone === "blue" && "bg-blue-50 text-bms-primary border border-blue-100",
                                        domain.tone === "red" && "bg-red-50 text-[#D72638] border border-red-100",
                                        domain.tone === "yellow" && "bg-amber-50 text-[#F4C430] border border-amber-100"
                                    ) }>
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <span className="font-mono text-[9px] font-black text-slate-300 group-hover:text-bms-primary transition-colors tracking-widest uppercase mt-2">
                                        { domain.code }
                                    </span>
                                </div>

                                <div className="space-y-6 flex-1">
                                    <h3 className="text-xl font-black text-slate-900 group-hover:text-bms-primary transition-colors leading-tight">
                                        { domain.title }
                                    </h3>

                                    {/* Capabilities List - Industrial Bullet Points */ }
                                    <ul className="space-y-3 border-r-2 border-slate-100 pr-4">
                                        { domain.features.map( ( feature, idx ) => (
                                            <li key={ idx } className="flex items-center gap-3">
                                                <div className={ cn(
                                                    "h-1 w-1 rounded-full",
                                                    domain.tone === "red" ? "bg-[#D72638]" :
                                                        domain.tone === "yellow" ? "bg-[#F4C430]" : "bg-bms-primary"
                                                ) } />
                                                <span className="text-xs md:text-sm text-slate-500 font-medium">{ feature }</span>
                                            </li>
                                        ) ) }
                                    </ul>
                                </div>

                                {/* Footer Interaction Bar */ }
                                <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex items-center gap-2">
                                        <LuActivity className="w-4 h-4 text-emerald-500 animate-pulse" />
                                        <span className="text-[9px] font-mono font-bold text-slate-400">DOMAIN_SYNC_OK</span>
                                    </div>
                                    <Link
                                        href={ `/solutions/${ domain.id }` }
                                        className="flex items-center gap-2 text-xs font-black text-bms-primary"
                                    >
                                        <span>بررسی راهکار</span>
                                        <LuArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                    </Link>
                                </div>
                            </motion.article>
                        );
                    } ) }
                </div>

                {/* ===================== TELEMETRY FOOTER ===================== */ }
                <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-slate-100 opacity-30">
                    <div className="flex items-center gap-4">
                        <LuBinary className="w-5 h-5 text-slate-900" />
                        <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-[0.5em]">
                            Multi_Realm_Deployment_Ready
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono font-bold text-slate-500 uppercase">Load_Balancing:</span>
                        <span className="text-[9px] font-mono font-black text-emerald-600 uppercase">Optimized</span>
                    </div>
                </div>
            </div>
        </section>
    );
}