"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants, BezierDefinition } from "framer-motion";
import
{
    LuGlobe,
    LuZap,
    LuShield,
    LuTrendingUp,
    LuDollarSign,
    LuArrowLeft,
    LuBinary,
    LuActivity
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 🌐 WIT HERO SECTION - REFORMED & TYPE-SAFE
 * Strategy: Executive Intelligence Dashboard
 * Palette: BMS Navy (#145C98), Industrial Red (#D72638), Intel Yellow (#F4C430)
 */

export default function WitHeroSection ()
{
    const customEase: BezierDefinition = [ 0.22, 1, 0.36, 1 ];

    const containerVariants: Variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        initial: { opacity: 0, x: 20, filter: "blur(8px)" },
        animate: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: customEase
            }
        },
    };

    return (
        <section
            className="relative w-full overflow-hidden bg-white pt-12 pb-24 lg:pt-20 lg:pb-32"
            aria-labelledby="wit-hero-heading"
        >
            {/* ===================== ARCHITECTURAL BACKGROUND ===================== */ }
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(20,92,152,0.04),transparent_50%)]" />
                <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#145C98_1px,transparent_1px),linear-gradient(to_bottom,#145C98_1px,transparent_1px)] [background-size:40px_40px]" />

                <div className="absolute top-1/4 -left-12 rotate-90 opacity-[0.03] hidden lg:block">
                    <span className="text-[140px] font-black uppercase tracking-[0.6em] text-bms-primary">
                        INVEST_CORE
                    </span>
                </div>
            </div>

            <motion.div
                variants={ containerVariants }
                initial="initial"
                animate="animate"
                className="relative z-10 space-y-12 max-w-7xl mx-auto px-6 lg:px-12"
            >
                {/* 1. INVESTOR HUD HEADER */ }
                <motion.div variants={ itemVariants } className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-700 shadow-sm">
                        <LuTrendingUp className="w-3.5 h-3.5" />
                        <span>Investment_Series_A / OPEN</span>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-bms-primary shadow-sm">
                        <LuGlobe className="w-3.5 h-3.5" />
                        <span>Worldwide_Intelligent_Tech</span>
                    </div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-tighter">
                        Custodian: <strong className="text-slate-700">BMS Co. Engineering</strong>
                    </div>
                </motion.div>

                {/* 2. COMMANDING HEADLINE */ }
                <motion.div variants={ itemVariants } className="space-y-6 text-right">
                    <h1
                        id="wit-hero-heading"
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 leading-[1.1] tracking-tightest"
                    >
                        فرصت سرمایه‌گذاری در <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#145C98] via-indigo-600 to-[#D72638]">
                            آینده اتوماسیون
                        </span>
                    </h1>

                    <div className="flex items-center gap-4 justify-start">
                        <div className="h-1.5 w-24 bg-[#D72638] rounded-full shadow-[0_0_15px_rgba(215,38,56,0.3)]" />
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-500 font-mono" dir="ltr">
                            <LuDollarSign className="w-4 h-4 text-[#F4C430]" />
                            <span>VALUATION: 100B IRR • TARGET: 20B IRR</span>
                        </div>
                    </div>
                </motion.div>

                {/* 3. STRATEGIC DESCRIPTION */ }
                <motion.div variants={ itemVariants } className="max-w-4xl space-y-10 text-right">
                    <p className="text-lg md:text-2xl leading-relaxed text-slate-600 font-light text-justify">
                        <strong className="font-black text-slate-900 mx-1">BMS Co.</strong> با پلتفرم WIT، پیشروترین فناوری اتوماسیون هوشمند بومی را خلق کرده است. این فرصت به شما امکان می‌دهد در لایه‌ی زیرساختی شرکتی سرمایه‌گذاری کنید که رویای
                        <span className="text-bms-primary font-bold mx-1 border-b-2 border-bms-primary/10">تسلط بر دارایی‌ها در عصر صنعت ۴.۰</span>
                        را محقق ساخته و پتانسیل رشد تصاعدی در بازارهای منطقه‌ای را دارد.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-start">
                        <Link
                            href="#story"
                            className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-bms-primary px-8 py-4 text-base font-bold text-white shadow-2xl shadow-bms-primary/30 transition-all hover:-translate-y-1 active:scale-95"
                        >
                            <span>کشف داستان BMS</span>
                            <LuArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        </Link>

                        <Link
                            href="/investors/deck.pdf"
                            className="inline-flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-700 transition-all hover:bg-slate-50 hover:border-bms-primary active:scale-95"
                            target="_blank"
                        >
                            <LuDollarSign className="w-5 h-5 text-[#F4C430]" />
                            <span>دانلود Pitch Deck</span>
                        </Link>
                    </div>

                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D72638] animate-pulse" />
                        زمان محدود: فرصت مشارکت در راند فعلی تا پایان فصل مالی
                    </div>
                </motion.div>

                {/* 4. PERFORMANCE GRID */ }
                <motion.div variants={ itemVariants } className="pt-12 border-t border-slate-100">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10 text-right">
                        System_Capabilities_Matrix
                    </h3>

                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
                        { [
                            { icon: LuTrendingUp, text: "رشد ۲۰۰٪ درآمد سالانه", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
                            { icon: LuShield, text: "فناوری بومی ثبت‌شده", color: "text-[#145C98]", bg: "bg-blue-50", border: "border-blue-100" },
                            { icon: LuZap, text: "پتانسیل توسعه منطقه‌ای", color: "text-[#F4C430]", bg: "bg-amber-50", border: "border-amber-100" },
                            { icon: LuActivity, text: "تیم اجرایی متخصص", color: "text-[#D72638]", bg: "bg-red-50", border: "border-red-100" },
                        ].map( ( item, idx ) => (
                            <li
                                key={ idx }
                                className={ cn(
                                    "group relative flex flex-col gap-5 p-6 rounded-[2rem] border bg-white transition-all duration-500 hover:shadow-premium hover:-translate-y-1",
                                    item.border
                                ) }
                            >
                                <div className={ cn( "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-3", item.bg, item.color ) }>
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <span className="text-sm font-bold text-slate-800 leading-relaxed text-right">{ item.text }</span>

                                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <LuActivity className="w-3 h-3 text-emerald-500 animate-pulse" />
                                </div>
                            </li>
                        ) ) }
                    </ul>
                </motion.div>

                {/* 5. TELEMETRY FOOTER */ }
                <motion.footer variants={ itemVariants } className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 opacity-30">
                    <div className="flex items-center gap-4">
                        <LuBinary className="w-5 h-5 text-slate-900" />
                        <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-[0.6em]">
                            System_Node_Ready / Stable_Connection
                        </span>
                    </div>

                    <div className="flex items-center gap-8 text-[11px] font-black text-slate-600">
                        <div className="flex items-center gap-2 group cursor-pointer hover:text-indigo-600 transition-colors">
                            <span>مدیر سرمایه‌گذاری:</span>
                            <a href="tel:+982188776655" className="font-mono">۰۲۱-۸۸۷۷۶۶۵۵</a>
                        </div>
                    </div>
                </motion.footer>

            </motion.div>
        </section>
    );
}