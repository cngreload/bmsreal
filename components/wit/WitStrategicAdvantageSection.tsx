"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuRocket,
    LuShieldCheck,
    LuChartLine,
    LuLayers,
    LuUsers,
    LuBuilding,
    LuGlobe,
    LuLock,
    LuBinary,
    LuActivity,
    LuShieldAlert,
    LuZap
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 💎 WIT STRATEGIC ADVANTAGE SECTION - REFORMED
 * Strategy: Strategic Asset Matrix / Institutional Authority
 * Palette: BMS Navy (#145C98), Industrial Red (#D72638), Intel Yellow (#F4C430)
 */

const advantages = [
    {
        title: "کاهش چشمگیر Time-to-Market",
        desc: "در WIT، مؤلفه‌های حیاتی مانند امنیت، مدیریت هویت، زیرساخت داده، ارتباطات صنعتی و پایش از پیش طراحی شده‌اند. این رویکرد باعث می‌شود تیم‌ها مستقیماً روی منطق کسب‌وکار تمرکز کنند.",
        icon: LuRocket,
        tone: "blue",
        code: "METRIC_SPEED_70",
        stat: "۷۰٪ تسریع"
    },
    {
        title: "حاکمیت فناوری و امنیت بومی",
        desc: "مالکیت کامل معماری، کد و لایه‌های سخت‌افزاری. WIT وابسته به سرویس‌های خارجی نیست و در برابر تحریم و تغییر سیاست تأمین‌کنندگان خارجی مقاوم طراحی شده است.",
        icon: LuShieldAlert,
        tone: "red",
        code: "SOVEREIGNTY_LEVEL_5",
        stat: "۱۰۰٪ بومی"
    },
    {
        title: "داده به‌عنوان دارایی راهبردی",
        desc: "تمام سامانه‌های مبتنی بر WIT داده‌ها را با یک استاندارد مشترک تجمیع می‌کنند. این انسجام، بستر لازم برای هوش مصنوعی، پایش ملی و تصمیم‌سازی مدیریتی را فراهم می‌کند.",
        icon: LuChartLine,
        tone: "blue",
        code: "DATA_COHESION_MOD",
        stat: "انسجام کامل"
    },
    {
        title: "انعطاف‌پذیری و شخصی‌سازی",
        desc: "با ساختار مدولار WIT، سازمان‌ها می‌توانند راهکارهای هوشمندسازی را بر اساس بودجه و نیازهای خاص خود سفارشی‌سازی کنند. رویکردی که دسترسی برابر به فناوری را ممکن می‌سازد.",
        icon: LuUsers,
        tone: "yellow",
        code: "MODULAR_FLEX_01",
        stat: "مدولار"
    },
    {
        title: "تحول چشم‌انداز رقابتی",
        desc: "کسب‌وکارهایی که از WIT بهره می‌برند، کارایی خود را افزایش داده و از رقبا پیشی می‌گیرند. این سیستم با ارائه راهکارهای یکپارچه، مزیت رقابتی پایدار ایجاد می‌کند.",
        icon: LuBuilding,
        tone: "blue",
        code: "COMPETITIVE_MOAT",
        stat: "مزیت رقابتی"
    },
    {
        title: "دسترسی جهانی و کنترل لحظه‌ای",
        desc: "WIT رویای کنترل کامل دارایی‌ها از هر مکان را محقق می‌سازد. کاربران از طریق داشبوردهای بصری، نظارت و تصمیم‌گیری لحظه‌ای (Real-time) خواهند داشت.",
        icon: LuGlobe,
        tone: "blue",
        code: "GLOBAL_ACCESS_247",
        stat: "پایش ۲۴/۷"
    },
];

export default function WitStrategicAdvantageSection ()
{
    return (
        <section
            id="strategic-advantages"
            className="relative py-24 lg:py-32 bg-white overflow-hidden"
            aria-labelledby="strategy-heading"
            dir="rtl"
        >
            {/* 🧩 ARCHITECTURAL BACKGROUND */ }
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] [background-image:radial-gradient(#145C98_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* ===================== HEADER - Editorial Standard ===================== */ }
                <header className="mb-20 text-right space-y-6 max-w-4xl">
                    <motion.div
                        initial={ { opacity: 0, x: 20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="inline-flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-200 px-4 py-1.5 shadow-sm"
                    >
                        <LuLayers className="h-4 w-4 text-bms-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 font-mono">
                            Strategic_Assets / 042-WIT
                        </span>
                    </motion.div>

                    <h2
                        id="strategy-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.1] tracking-tightest"
                    >
                        چرا WIT یک <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#145C98] via-indigo-600 to-[#D72638]">
                            دارایی استراتژیک
                        </span> برای سازمان‌هاست؟
                    </h2>

                    <p className="max-w-3xl text-lg md:text-xl text-slate-500 font-light leading-relaxed text-justify">
                        WIT صرفاً یک پلتفرم IoT نیست؛ یک زیرساخت فناورانه‌ی بلندمدت است که پایداری سامانه‌های حیاتی را تضمین کرده و ارزش آن به‌صورت تصاعدی افزایش می‌یابد.
                    </p>
                </header>

                {/* ===================== ASSET GRID ===================== */ }
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    { advantages.map( ( adv, i ) =>
                    {
                        const Icon = adv.icon;
                        return (
                            <motion.article
                                key={ i }
                                initial={ { opacity: 0, y: 20 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.5, delay: i * 0.1 } }
                                className="group relative flex flex-col p-8 lg:p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-premium hover:border-bms-primary/20"
                            >
                                {/* HUD Metadata */ }
                                <div className="flex justify-between items-start mb-10">
                                    <div className={ cn(
                                        "flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-3",
                                        adv.tone === "blue" && "bg-blue-50 text-bms-primary border border-blue-100",
                                        adv.tone === "red" && "bg-red-50 text-[#D72638] border border-red-100",
                                        adv.tone === "yellow" && "bg-amber-50 text-[#F4C430] border border-amber-100"
                                    ) }>
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <div className="text-left">
                                        <span className="font-mono text-[8px] font-black text-slate-300 group-hover:text-bms-primary transition-colors tracking-widest uppercase">
                                            { adv.code }
                                        </span>
                                        <div className="mt-2 flex justify-end">
                                            <span className={ cn(
                                                "text-[10px] font-bold px-2 py-0.5 rounded-md border",
                                                adv.tone === "blue" && "bg-blue-50 text-bms-primary border-blue-100",
                                                adv.tone === "red" && "bg-red-50 text-[#D72638] border-red-100",
                                                adv.tone === "yellow" && "bg-amber-50 text-[#F4C430] border-amber-100"
                                            ) }>
                                                { adv.stat }
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 flex-1">
                                    <h3 className="text-xl font-black text-slate-900 group-hover:text-bms-primary transition-colors leading-tight">
                                        { adv.title }
                                    </h3>
                                    <p className="text-sm md:text-[15px] leading-corp-relaxed text-slate-500 text-justify font-light">
                                        { adv.desc }
                                    </p>
                                </div>

                                {/* Footer HUD line */ }
                                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="flex items-center gap-2">
                                        <LuActivity className="w-4 h-4 text-emerald-500 animate-pulse" />
                                        <span className="text-[9px] font-mono font-bold text-slate-400">ACTIVE_ADVANTAGE</span>
                                    </div>
                                    <LuBinary className="w-4 h-4 text-slate-200" />
                                </div>
                            </motion.article>
                        );
                    } ) }
                </div>

                {/* ===================== PERFORMANCE SUMMARY ===================== */ }
                <div className="mt-20 pt-16 border-t border-slate-100">
                    <div className="grid md:grid-cols-3 gap-8">
                        { [
                            { title: "کاهش هزینه عملیاتی", icon: LuZap, desc: "حذف هزینه‌های پنهان نگهداری و خطاهای انسانی در فرآیندهای سنتی.", tone: "red" },
                            { title: "امنیت داده‌های حساس", icon: LuLock, desc: "رمزنگاری لایه‌بندی شده و نظارت بر دسترسی در بالاترین سطح استاندارد.", tone: "blue" },
                            { title: "عدالت و شفافیت", icon: LuShieldCheck, desc: "شناسایی نقاط اتلاف منابع و ایجاد شفافیت مطلق در گزارش‌دهی مدیریتی.", tone: "blue" }
                        ].map( ( benefit, idx ) => (
                            <motion.div
                                key={ idx }
                                initial={ { opacity: 0, y: 10 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { delay: 0.4 + ( idx * 0.1 ) } }
                                className="flex items-start gap-5 p-6 rounded-3xl bg-slate-50/50 hover:bg-white transition-all duration-300 group border border-transparent hover:border-slate-100 hover:shadow-sm"
                            >
                                <div className={ cn(
                                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-inner transition-transform group-hover:scale-110",
                                    benefit.tone === "red" ? "bg-red-50 text-[#D72638]" : "bg-blue-50 text-bms-primary"
                                ) }>
                                    <benefit.icon className="h-6 w-6" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-black text-slate-900 text-sm md:text-base">{ benefit.title }</h4>
                                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">{ benefit.desc }</p>
                                </div>
                            </motion.div>
                        ) ) }
                    </div>
                </div>
            </div>

            {/* Decorative Blur */ }
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        </section>
    );
}