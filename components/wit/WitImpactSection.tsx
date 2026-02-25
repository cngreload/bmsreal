"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuZap,
    LuTarget,
    LuTrendingUp,
    LuUsers,
    LuChartBar,
    LuDollarSign,
    LuBinary,

    LuShieldCheck,
    LuGlobe,
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 📊 WIT IMPACT SECTION - INVESTOR REFORMATION
 * Strategy: Financial Intelligence / System Audit Aesthetic
 * Palette: BMS Navy (#145C98), Industrial Red (#D72638), Medical Green (#10B981)
 */

const metrics = [
    {
        icon: LuTrendingUp,
        title: "رشد درآمد",
        value: "۲۰۰%+",
        unit: "سالانه",
        desc: "رشد تصاعدی در ۲ سال گذشته",
        tone: "green",
        code: "REV_GROWTH_XP",
        highlight: true,
    },
    {
        icon: LuDollarSign,
        title: "حاشیه سود ناخالص",
        value: "۶۵%",
        unit: "نرخ سودآوری",
        desc: "بالاتر از متوسط صنعت",
        tone: "blue",
        code: "MARGIN_STABLE_01",
    },
    {
        icon: LuUsers,
        title: "نرخ نگهداشت مشتری",
        value: "۹۵%",
        unit: "رضایت مشتری",
        desc: "تداوم همکاری‌های استراتژیک",
        tone: "teal",
        code: "RETENTION_VAL",
    },
    {
        icon: LuZap,
        title: "کارایی عملیاتی",
        value: "۴۰%+",
        unit: "بهبود بهره‌وری",
        desc: "برای سازمان‌های بهره‌بردار",
        tone: "yellow",
        code: "OPS_EFFICIENCY",
    },
];

const growthData = [
    { year: "۱۴۰۱", revenue: 5, growth: "شروع عملیات", status: "STABLE" },
    { year: "۱۴۰۲", revenue: 15, growth: "+۲۰۰%", status: "ACCELERATED" },
    { year: "۱۴۰۳", revenue: 45, growth: "+۲۰۰%", status: "PROJECTED", isFuture: true },
    { year: "۱۴۰۴", revenue: 120, growth: "+۱۶۶%", status: "PROJECTED", isFuture: true },
];

export default function WitImpactSection ()
{
    return (
        <section
            id="metrics"
            className="relative py-24 lg:py-40 bg-white overflow-hidden"
            aria-labelledby="impact-heading"
            dir="rtl"
        >
            {/* 🧩 ARCHITECTURAL BACKGROUND */ }
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] [background-image:linear-gradient(to_right,#145C98_1px,transparent_1px),linear-gradient(to_bottom,#145C98_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                {/* ===================== HEADER - Audit Logic ===================== */ }
                <header className="mb-20 text-center lg:text-right space-y-6 max-w-4xl lg:mr-0 mr-auto">
                    <motion.div
                        initial={ { opacity: 0, x: 20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="inline-flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-200 px-4 py-1.5 shadow-sm"
                    >
                        <LuChartBar className="h-4 w-4 text-bms-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 font-mono">
                            Metrics_Report / 042-BMS
                        </span>
                    </motion.div>

                    <h2
                        id="impact-heading"
                        className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-950 leading-[1.1] tracking-tightest"
                    >
                        اثبات اجرایی؛ <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#145C98] via-[#14B8A6] to-[#10B981]">
                            اقتدار در اعداد
                        </span>
                    </h2>

                    <p className="max-w-3xl text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                        عملکرد گذشته تضمین‌کننده مسیر آینده است. این شاخص‌ها نشان می‌دهند چرا
                        WIT یک پلتفرم هوشمندِ ارزش‌آفرین و یک فرصت سرمایه‌گذاری استثنایی است.
                    </p>
                </header>

                {/* ===================== METRICS MATRIX ===================== */ }
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
                    { metrics.map( ( metric, index ) =>
                    {
                        const Icon = metric.icon;
                        return (
                            <motion.article
                                key={ index }
                                initial={ { opacity: 0, y: 20 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.6, delay: index * 0.1 } }
                                className={ cn(
                                    "group relative flex flex-col p-8 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-premium",
                                    metric.highlight && "ring-2 ring-emerald-500/20 bg-emerald-50/10"
                                ) }
                            >
                                {/* HUD Metadata */ }
                                <div className="flex justify-between items-start mb-10">
                                    <div
                                        className={ cn(
                                            "flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-3",
                                            metric.tone === "green" && "bg-emerald-50 text-emerald-600 border border-emerald-100",
                                            metric.tone === "blue" && "bg-blue-50 text-bms-primary border border-blue-100",
                                            metric.tone === "teal" && "bg-teal-50 text-teal-600 border border-teal-100",
                                            metric.tone === "yellow" && "bg-amber-50 text-[#F4C430] border border-amber-100"
                                        ) }
                                    >
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <span className="font-mono text-[8px] font-black text-slate-300 group-hover:text-bms-primary transition-colors tracking-widest uppercase mt-2">
                                        { metric.code }
                                    </span>
                                </div>

                                <div className="space-y-1 mb-8">
                                    <div className="text-4xl font-black text-slate-950 group-hover:text-bms-primary transition-colors tracking-tighter">
                                        { metric.value }
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-sm font-bold text-slate-800">{ metric.title }</h3>
                                        <span className="text-[10px] text-slate-400 font-medium">/ { metric.unit }</span>
                                    </div>
                                </div>

                                <p className="text-xs md:text-sm leading-6 text-slate-500 font-light">
                                    { metric.desc }
                                </p>

                                {/* Progress Dot */ }
                                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                                    <div className={ cn( "h-1 w-8 rounded-full opacity-20 group-hover:opacity-100 transition-all",
                                        metric.tone === 'green' ? 'bg-emerald-500' : 'bg-bms-primary'
                                    ) } />
                                </div>
                            </motion.article>
                        );
                    } ) }
                </div>

                {/* ===================== PERFORMANCE MONITOR (Chart) ===================== */ }
                <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
                    <div className="lg:col-span-8 bg-white rounded-[3rem] border border-slate-100 p-8 md:p-12 shadow-sm relative overflow-hidden">
                        {/* HUD Header */ }
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                    <LuTrendingUp className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900">روند رشد درآمد ناخالص</h3>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Revenue_Progression_v2</span>
                        </div>

                        <div className="space-y-10 relative">
                            { growthData.map( ( item, idx ) => (
                                <div key={ idx } className="relative group">
                                    <div className="flex items-center justify-between mb-3 px-2">
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm font-black text-slate-900 font-mono w-12">{ item.year }</span>
                                            <span className={ cn(
                                                "text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border",
                                                item.isFuture ? "bg-blue-50 text-bms-primary border-blue-100" : "bg-emerald-50 text-emerald-600 border-emerald-100"
                                            ) }>
                                                { item.status }
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-sm font-black text-slate-900">{ item.revenue } <span className="text-[10px] text-slate-400 font-medium">میلیارد تومان</span></span>
                                            <span className="mr-3 text-xs font-bold text-emerald-600">{ item.growth }</span>
                                        </div>
                                    </div>

                                    {/* Gauge-style Progress Bar */ }
                                    <div className="h-4 bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-1">
                                        <motion.div
                                            initial={ { width: 0 } }
                                            whileInView={ { width: `${ ( item.revenue / 120 ) * 100 }%` } }
                                            viewport={ { once: true } }
                                            transition={ { duration: 1.5, delay: idx * 0.1, ease: "circOut" } }
                                            className={ cn(
                                                "h-full rounded-full relative",
                                                item.isFuture ? "bg-gradient-to-l from-[#145C98] to-blue-400" : "bg-gradient-to-l from-[#10B981] to-emerald-400"
                                            ) }
                                        >
                                            { item.isFuture && (
                                                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[size:1rem_1rem] animate-[flow_2s_linear_infinite]" />
                                            ) }
                                        </motion.div>
                                    </div>
                                </div>
                            ) ) }
                        </div>

                        <p className="mt-10 text-[11px] text-slate-400 font-medium italic border-r-2 border-slate-200 pr-4">
                            * ارقام سال‌های ۱۴۰۳ و ۱۴۰۴ بر اساس قراردادهای بلندمدت در دست اقدام و تحلیل ظرفیت بازار پیش‌بینی شده است.
                        </p>
                    </div>

                    {/* ===================== STRATEGIC OUTLOOK ===================== */ }
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-[#020617] rounded-[3rem] p-8 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                            <LuGlobe className="w-12 h-12 text-[#F4C430] opacity-20 mb-6" />
                            <h4 className="text-xl font-black mb-4">پتانسیل بازار منطقه‌ای</h4>
                            <p className="text-sm text-blue-100/60 leading-relaxed font-light mb-8 text-justify">
                                بر اساس تحلیل‌های اکوسیستم WIT، کشورهای همسایه در لبه‌ی تحول دیجیتال زیرساخت‌های سوخت و سلامت قرار دارند.
                                ضریب رشد <span className="text-[#F4C430] font-bold">۱۰ برابری</span> برای عرضه خدمات در بازارهای منطقه تا سال ۱۴۰۷ پیش‌بینی می‌شود.
                            </p>
                            <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-[#F4C430] animate-pulse" />
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">Strategy_Focus: MENA</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm group hover:border-bms-primary/20 transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 rounded-2xl bg-blue-50 text-bms-primary flex items-center justify-center">
                                    <LuTarget className="w-6 h-6" />
                                </div>
                                <h4 className="font-black text-slate-900">سهم بازار هدف</h4>
                            </div>
                            <div className="text-3xl font-black text-slate-900 tracking-tighter mb-2">۱۵%</div>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                دستیابی به سهم استراتژیک از بازار کل اتوماسیون هوشمند ایران (ارزش ۶ همت) تا افق ۱۴۰۶.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ===================== SOURCE TELEMETRY ===================== */ }
                <footer className="flex items-center justify-between opacity-30 pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                        <LuBinary className="w-5 h-5 text-slate-900" />
                        <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-[0.5em]">
                            Data_Verification_Protocol: ACTIVE
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <LuShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span className="text-[9px] font-mono font-bold text-slate-400 uppercase">Verified_Audit_Ready</span>
                    </div>
                </footer>
            </div>

            <style jsx global>{ `
        @keyframes flow {
          from { background-position: 0 0; }
          to { background-position: 2rem 0; }
        }
      `}</style>
        </section>
    );
}