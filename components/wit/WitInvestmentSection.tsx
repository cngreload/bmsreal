"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import
{
    LuTrendingUp,
    LuDownload,
    LuTarget,

    LuShield,

    LuDollarSign,

    LuActivity,
    LuArrowLeft,

} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 💰 WIT INVESTMENT SECTION - REFORMED & TYPE-SAFE
 * Strategy: Financial Dossier / Institutional Authority
 * Palette: BMS Navy (#145C98), Industrial Red (#D72638), Intel Yellow (#F4C430)
 */

interface InvestmentOpportunity
{
    id: string; // Added ID to resolve Error 2339
    icon: React.ElementType;
    title: string;
    code: string;
    amount: string;
    valuation: string;
    equity: string;
    timeline: string;
    highlight: boolean;
    tone: "red" | "blue";
    benefits: string[];
}

interface ROIProjection
{
    year: string;
    revenue: number;
    growth: string;
    valuation: string;
    status: "CURRENT" | "ESTIMATED" | "PROJECTED" | "EXPANSION";
}

interface ExitStrategy
{
    title: string;
    probability: "بالا" | "متوسط";
    timeline: string;
    potential: string;
    description: string;
}

const investmentOpportunities: InvestmentOpportunity[] = [
    {
        id: "series-a",
        icon: LuTrendingUp,
        title: "سری A",
        code: "ROUND_SERIES_A",
        amount: "۲۰ میلیارد تومان",
        valuation: "ارزش‌گذاری: ۱۰۰ میلیارد تومان",
        equity: "۲۰% سهام",
        timeline: "۱۸-۲۴ ماه",
        highlight: true,
        tone: "red",
        benefits: [
            "توسعه سریع بازار و نفوذ در لایه‌ی نظارتی",
            "افزایش تیم فنی به ۳۰ نفر متخصص",
            "ورود به ۳ بازار استراتژیک جدید",
            "توسعه محصول Clinicans v2.0",
        ],
    },
    {
        id: "seed",
        icon: LuTarget,
        title: "سری Seed",
        code: "ROUND_SEED_FUND",
        amount: "۵ میلیارد تومان",
        valuation: "ارزش‌گذاری: ۵۰ میلیارد تومان",
        equity: "۱۰% سهام",
        timeline: "۱۲-۱۸ ماه",
        highlight: false,
        tone: "blue",
        benefits: [
            "تسریع فرآیند توسعه فنی هسته WIT",
            "توسعه تیم فروش و عملیات میدانی",
            "تولید MVP برای بازارهای نوظهور",
            "برندسازی و هویت بصری بین‌المللی",
        ],
    },
];

const roiProjections: ROIProjection[] = [
    { year: "۱۴۰۳", revenue: 15, growth: "۱۵۰%", valuation: "۱۰۰", status: "CURRENT" },
    { year: "۱۴۰۴", revenue: 40, growth: "۱۶۶%", valuation: "۲۵۰", status: "ESTIMATED" },
    { year: "۱۴۰۵", revenue: 120, growth: "۲۰۰%", valuation: "۶۰۰", status: "PROJECTED" },
    { year: "۱۴۰۶", revenue: 300, growth: "۱۵۰%", valuation: "۱,۵۰۰", status: "EXPANSION" },
];

const exitStrategies: ExitStrategy[] = [
    {
        title: "اکتساب توسط شرکت‌های بزرگ",
        probability: "بالا",
        timeline: "۳-۵ سال",
        potential: "۱۰-۲۰x ROI",
        description: "شرکت‌های بزرگ فناوری یا صنعتی منطقه در حوزه انرژی و سلامت دیجیتال."
    },
    {
        title: "عرضه عمومی اولیه (IPO)",
        probability: "متوسط",
        timeline: "۵-۷ سال",
        potential: "۱۵-۳۰x ROI",
        description: "ورود به بازار سرمایه و تابلوهای معاملاتی اختصاصی شرکت‌های دانش‌بنیان."
    },
    {
        title: "ادغام با شرکت‌های مکمل",
        probability: "متوسط",
        timeline: "۴-۶ سال",
        potential: "۸-۱۵x ROI",
        description: "ایجاد هلدینگ‌های فناورانه با هدف تسلط بر زنجیره ارزش اتوماسیون."
    }
];

export default function WitInvestmentSection ()
{
    return (
        <section
            id="investment"
            className="relative py-24 lg:py-40 bg-white overflow-hidden"
            aria-labelledby="investment-heading"
            dir="rtl"
        >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none [background-image:radial-gradient(#145C98_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* ===================== HEADER ===================== */ }
                <header className="mb-20 text-right space-y-6 max-w-4xl">
                    <motion.div
                        initial={ { opacity: 0, x: 20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="inline-flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-200 px-4 py-1.5 shadow-sm"
                    >
                        <LuDollarSign className="h-4 w-4 text-emerald-600" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 font-mono">
                            Capital_Roadmap / Series_A_Open
                        </span>
                    </motion.div>

                    <h2
                        id="investment-heading"
                        className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-950 leading-[1.1] tracking-tightest"
                    >
                        سرمایه‌گذاری در <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#145C98] via-blue-600 to-[#D72638]">
                            آینده اتوماسیون هوشمند
                        </span>
                    </h2>
                </header>

                {/* ===================== INVESTMENT ROUNDS ===================== */ }
                <div className="grid lg:grid-cols-2 gap-8 mb-24">
                    { investmentOpportunities.map( ( round, index ) => (
                        <motion.div
                            key={ round.id }
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            viewport={ { once: true } }
                            transition={ { duration: 0.6, delay: index * 0.1 } }
                            className={ cn(
                                "group relative overflow-hidden rounded-[3rem] p-8 md:p-12 transition-all duration-500",
                                round.highlight
                                    ? "bg-[#020617] text-white shadow-2xl"
                                    : "bg-slate-50 border border-slate-200 text-slate-900 hover:bg-white hover:shadow-premium"
                            ) }
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div className="flex items-center gap-5">
                                    <div className={ cn(
                                        "flex h-16 w-16 items-center justify-center rounded-2xl shadow-inner transition-transform group-hover:scale-110",
                                        round.highlight ? "bg-white/10 text-[#F4C430] border border-white/10" : "bg-white text-bms-primary border border-slate-100"
                                    ) }>
                                        <round.icon className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black">{ round.title }</h3>
                                        <span className="text-[9px] font-mono font-bold opacity-40 uppercase tracking-widest">{ round.code }</span>
                                    </div>
                                </div>
                                { round.highlight && (
                                    <span className="bg-[#D72638] text-white text-[9px] font-black px-3 py-1 rounded-md uppercase tracking-tighter animate-pulse">
                                        Priority_Round
                                    </span>
                                ) }
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-12 border-y border-white/10 py-8">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest">Amount</span>
                                    <div className="text-2xl font-black">{ round.amount }</div>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest">Equity</span>
                                    <div className="text-2xl font-black text-emerald-500">{ round.equity }</div>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-12 h-40">
                                { round.benefits.map( ( benefit, idx ) => (
                                    <li key={ idx } className="flex items-start gap-3">
                                        <div className={ cn( "mt-1.5 h-1 w-1 rounded-full", round.highlight ? "bg-[#F4C430]" : "bg-bms-primary" ) } />
                                        <span className="text-sm font-medium opacity-80 leading-relaxed">{ benefit }</span>
                                    </li>
                                ) ) }
                            </ul>

                            <Link
                                href={ `/contact?type=invest-${ round.id }` }
                                className={ cn(
                                    "flex items-center justify-between w-full p-5 rounded-2xl font-bold transition-all active:scale-95 group/btn",
                                    round.highlight
                                        ? "bg-white text-slate-950 hover:bg-[#F4C430]"
                                        : "bg-slate-900 text-white hover:bg-bms-primary"
                                ) }
                            >
                                <span>درخواست ترم‌شیت مالی</span>
                                <LuArrowLeft className="w-5 h-5 transition-transform group-hover/btn:-translate-x-2" />
                            </Link>
                        </motion.div>
                    ) ) }
                </div>

                {/* ===================== FINANCIAL PROJECTIONS ===================== */ }
                <div className="bg-white rounded-[3rem] border border-slate-200 shadow-sm p-8 md:p-14 mb-24 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bms-primary via-[#D72638] to-[#F4C430]" />
                    <header className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-4">
                            <LuActivity className="w-6 h-6 text-bms-primary" />
                            <h3 className="text-2xl font-black text-slate-900">پیش‌بینی عملکرد مالی و ROI</h3>
                        </div>
                    </header>

                    <div className="overflow-x-auto">
                        <table className="w-full text-right">
                            <thead>
                                <tr className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                                    <th className="pb-6 pr-4">Fiscal_Year</th>
                                    <th className="pb-6">Revenue (B_IRR)</th>
                                    <th className="pb-6">Growth</th>
                                    <th className="pb-6">Est. Valuation</th>
                                    <th className="pb-6 pl-4 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                { roiProjections.map( ( projection ) => (
                                    <tr key={ projection.year } className="group hover:bg-slate-50/50 transition-colors">
                                        <td className="py-6 pr-4 font-mono font-black text-slate-900">{ projection.year }</td>
                                        <td className="py-6 font-black text-xl text-slate-900">{ projection.revenue }</td>
                                        <td className="py-6">
                                            <div className="flex items-center gap-2 text-emerald-600 font-bold">
                                                <LuTrendingUp className="w-4 h-4" />
                                                <span>{ projection.growth }</span>
                                            </div>
                                        </td>
                                        <td className="py-6 font-black text-lg text-bms-primary">{ projection.valuation }</td>
                                        <td className="py-6 pl-4 text-left">
                                            <span className={ cn(
                                                "px-3 py-1 rounded-lg text-[9px] font-black uppercase border",
                                                projection.status === 'CURRENT' ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-blue-50 text-blue-700 border-blue-100"
                                            ) }>
                                                { projection.status }
                                            </span>
                                        </td>
                                    </tr>
                                ) ) }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ===================== EXIT STRATEGIES ===================== */ }
                <div className="grid md:grid-cols-3 gap-6">
                    { exitStrategies.map( ( strategy, idx ) => (
                        <motion.div
                            key={ idx }
                            whileHover={ { y: -5 } }
                            className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-premium transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h4 className="text-lg font-black text-slate-900 leading-tight">{ strategy.title }</h4>
                                <span className={ cn(
                                    "text-[9px] font-black px-2 py-1 rounded-md uppercase",
                                    strategy.probability === 'بالا' ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                                ) }>
                                    { strategy.probability }_Prob
                                </span>
                            </div>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-xs border-b border-slate-50 pb-2">
                                    <span className="text-slate-400">Potential</span>
                                    <span className="font-black text-emerald-600">{ strategy.potential }</span>
                                </div>
                            </div>
                            <p className="text-xs leading-6 text-slate-500 font-medium">{ strategy.description }</p>
                        </motion.div>
                    ) ) }
                </div>

                {/* ===================== INVESTOR CTA ===================== */ }
                <div className="mt-24 relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-[3.5rem] blur-2xl opacity-10" />
                    <div className="relative bg-gradient-to-br from-emerald-600 to-bms-primary rounded-[3rem] p-10 md:p-16 text-white text-center">
                        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                            <LuShield className="w-12 h-12 text-[#F4C430] mx-auto" />
                            <h3 className="text-3xl md:text-5xl font-black leading-tight">آماده‌ی بررسی جزییات مالی هستید؟</h3>
                            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
                                <Link href="/investors/deck.pdf" className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#F4C430] transition-colors">
                                    <LuDownload className="w-5 h-5" />
                                    <span>دانلود Pitch Deck</span>
                                </Link>
                                <Link href="/contact?type=investor-meeting" className="border-2 border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                                    <LuCalendarCheck className="w-5 h-5" />
                                    <span>رزرو جلسه با تیم</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Fixed SVG Helper with unique attributes (resolves Error 17001)
function LuCalendarCheck ( { className }: { className?: string; } )
{
    return (
        <svg className={ className } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
        </svg>
    );
}