"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import
{
    LuMessageSquare,
    LuHandshake,
    LuSettings,
    LuRocket,
    LuArrowLeft,
    LuLogIn,
    LuBinary,
    LuActivity,
    LuSparkles,
    LuCheck,
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 🚀 CLINICANS GET STARTED SECTION - REFORMED
 * Strategy: Kinetic Onboarding Track / Strategic Roadmap
 * Palette: Medical Green, Soothing Blue, BMS Navy, Intelligence Yellow
 */

const steps = [
    {
        id: 1,
        stepType: "Discovery",
        code: "PHASE_LOG_01",
        title: "نیازسنجی و ارزیابی توانمندسازی",
        icon: LuMessageSquare,
        tone: "blue",
        body: "پیش از استقرار، نیازهای واقعی مجموعه شما را تحلیل می‌کنیم تا اطمینان حاصل کنیم که پلتفرم توانمندسازی دیجیتال بهترین مسیر برای رشد کلینیک شماست.",
        bullets: [
            "بررسی دقیق فرآیندهای فعلی و نقاط اصطکاک",
            "شفاف‌سازی اهداف هوشمندسازی و انتظارات مدیران",
            "ارائه مشاوره صادقانه برای مسیر تحول دیجیتال",
        ],
    },
    {
        id: 2,
        stepType: "Configuration",
        code: "PHASE_LOG_02",
        title: "پیکربندی زیرساخت دیجیتال",
        icon: LuSettings,
        tone: "emerald",
        body: "این پلتفرم یک ابزار ثابت نیست؛ بلکه دقیقاً بر اساس تخصص‌ها، نقش‌ها و جریان کاری خاص مرکز درمانی شما شخصی‌سازی می‌شود.",
        bullets: [
            "تعریف دقیق سطوح دسترسی و نقش‌های سازمانی",
            "شخصی‌سازی خدمات، فرم‌های درمانی و تعرفه‌ها",
            "آماده‌سازی محیط برای تجربه کاربری روان تیم درمان",
        ],
    },
    {
        id: 3,
        stepType: "Enablement",
        code: "PHASE_LOG_03",
        title: "استقرار، آموزش و توانمندسازی تیم",
        icon: LuRocket,
        tone: "yellow",
        body: "راه‌اندازی بدون اختلال در پذیرش بیماران انجام می‌شود. تیم شما آموزش می‌بیند و وارد فاز عملیاتی توانمندسازی دیجیتال می‌شود.",
        bullets: [
            "آموزش تخصصی متناسب با هر نقش (پذیرش، پزشک، مالی)",
            "پشتیبانی نزدیک در روزهای نخست بهره‌برداری",
            "بهینه‌سازی مستمر بر اساس بازخورد واقعی میدان",
        ],
    },
];

export default function ClinicansGetStartedSection ()
{
    return (
        <section
            id="get-started"
            className="relative py-24 lg:py-40 bg-white overflow-hidden"
            aria-labelledby="start-heading"
            dir="rtl"
        >
            {/* 🧩 BACKGROUND HUD ELEMENTS */ }
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] [background-image:linear-gradient(to_right,#145C98_1px,transparent_1px),linear-gradient(to_bottom,#145C98_1px,transparent_1px)] [background-size:60px_60px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                {/* ===================== HEADER - Editorial Logic ===================== */ }
                <header className="mb-24 text-right space-y-6 max-w-4xl">
                    <motion.div
                        initial={ { opacity: 0, x: 20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="inline-flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-200 px-4 py-1.5 shadow-sm"
                    >
                        <LuHandshake className="h-4 w-4 text-bms-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 font-mono">
                            Deployment_Roadmap / v4.2
                        </span>
                    </motion.div>

                    <div className="space-y-4">
                        <h2
                            id="start-heading"
                            className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-950 leading-[1.1] tracking-tightest"
                        >
                            آغاز سفر <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#10B981] via-[#14B8A6] to-[#145C98]">
                                توانمندسازی دیجیتال
                            </span>
                        </h2>
                        <p className="max-w-2xl text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                            ورود به این پلتفرم به‌معنای نصب یک نرم‌افزار نیست؛ آغاز یک همکاری راهبردی برای ارتقای هوشمند کیفیت خدمات سلامت است.
                        </p>
                    </div>
                </header>

                {/* ===================== ONBOARDING TRACK ===================== */ }
                <div className="relative">
                    {/* Kinetic Vertical Spine */ }
                    <div className="absolute right-8 top-0 bottom-0 w-px bg-slate-100 hidden md:block">
                        <div className="h-full w-full bg-gradient-to-b from-blue-200 via-emerald-200 to-amber-200 opacity-50" />
                        <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(16,185,129,0.4),transparent)] animate-[flow_4s_linear_infinite]" />
                    </div>

                    <div className="space-y-16">
                        { steps.map( ( step, index ) =>
                        {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={ step.id }
                                    initial={ { opacity: 0, x: 30 } }
                                    whileInView={ { opacity: 1, x: 0 } }
                                    viewport={ { once: true, margin: "-100px" } }
                                    transition={ { duration: 0.8, delay: index * 0.1 } }
                                    className="relative flex gap-8 md:gap-14 group"
                                >
                                    {/* Phase Node */ }
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div
                                            className={ cn(
                                                "flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl border-[6px] border-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                                                step.tone === "blue" && "bg-blue-50 text-bms-primary",
                                                step.tone === "emerald" && "bg-emerald-50 text-emerald-600",
                                                step.tone === "yellow" && "bg-amber-50 text-[#F4C430]"
                                            ) }
                                        >
                                            <Icon className="h-8 w-8 md:h-10 md:w-10" />
                                        </div>
                                        {/* Node Milestone ID */ }
                                        <span className="mt-3 font-mono text-[9px] font-black text-slate-300 tracking-widest uppercase">
                                            { step.code }
                                        </span>
                                    </div>

                                    {/* Phase Card */ }
                                    <article className="flex-1 rounded-[3rem] bg-white border border-slate-100 p-8 md:p-12 shadow-sm transition-all duration-500 hover:shadow-premium hover:border-bms-primary/20">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                            <h3 className="text-2xl font-black text-slate-950 group-hover:text-bms-primary transition-colors">
                                                { step.title }
                                            </h3>
                                            <span className="inline-block font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                                                Phase: { step.stepType }
                                            </span>
                                        </div>

                                        <p className="text-base md:text-lg leading-relaxed-corp text-slate-500 font-light text-justify mb-8">
                                            { step.body }
                                        </p>

                                        {/* Checkpoints */ }
                                        <ul className="grid sm:grid-cols-2 gap-4 border-t border-slate-50 pt-8">
                                            { step.bullets.map( ( bullet, idx ) => (
                                                <li key={ idx } className="flex items-start gap-3">
                                                    <div className={ cn(
                                                        "mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-100",
                                                        step.tone === "emerald" && "text-emerald-500",
                                                        step.tone === "blue" && "text-bms-primary",
                                                        step.tone === "yellow" && "text-amber-500"
                                                    ) }>
                                                        <LuCheck className="h-2.5 w-2.5" />
                                                    </div>
                                                    <span className="text-sm text-slate-600 font-medium">
                                                        { bullet }
                                                    </span>
                                                </li>
                                            ) ) }
                                        </ul>
                                    </article>
                                </motion.div>
                            );
                        } ) }
                    </div>
                </div>

                {/* ===================== STRATEGIC SUMMARY ===================== */ }
                <div className="mt-24 lg:mt-40 flex justify-center">
                    <motion.aside
                        initial={ { opacity: 0, scale: 0.95 } }
                        whileInView={ { opacity: 1, scale: 1 } }
                        viewport={ { once: true } }
                        className="relative overflow-hidden rounded-[3.5rem] bg-slate-900 p-1 shadow-2xl max-w-5xl w-full mx-4"
                    >
                        {/* HUD Scanline Effect */ }
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none [background-image:linear-gradient(to_bottom,transparent_50%,#fff_50%)] [background-size:100%_4px]" />

                        <div className="relative flex flex-col md:flex-row items-center gap-10 rounded-[3.4rem] bg-[#020617] px-10 py-12 md:px-16">
                            {/* Visual Anchor */ }
                            <div className="flex-shrink-0 relative group">
                                <div className="absolute inset-0 bg-bms-primary/30 rounded-full blur-3xl transition-all duration-700" />
                                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white/5 text-[#F4C430] shadow-2xl border border-white/10 backdrop-blur-md">
                                    <LuBinary className="h-12 w-12 animate-float" />
                                </div>
                            </div>

                            {/* Content */ }
                            <div className="flex-1 text-center md:text-right space-y-5">
                                <h4 className="text-2xl font-black text-white leading-tight">
                                    همکاری مبتنی بر خلق ارزش واقعی
                                </h4>
                                <p className="text-base md:text-lg text-blue-100/70 leading-relaxed-corp font-light text-justify">
                                    <strong className="text-white font-black">پلتفرم توانمندسازی دیجیتال</strong> تنها زمانی پیشنهاد می‌شود که برای مجموعه شما ارزش واقعی ایجاد کند. ما شریک رشد شما هستیم و شفافیت در تصمیم‌گیری، پایه‌ی <span className="text-emerald-400 font-bold">اعتماد متقابل</span> ماست؛ از نخستین مشاوره تا توسعه بلندمدت.
                                </p>
                                <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-6 opacity-60">
                                    <div className="flex items-center gap-2">
                                        <LuActivity className="w-4 h-4 text-emerald-400" />
                                        <span className="text-[9px] font-mono font-bold text-white uppercase tracking-widest">Growth_Partnership</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                </div>

                {/* ===================== FINAL CTA BREAKOUT ===================== */ }
                <div className="mt-20 lg:mt-32 relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />

                    <div className="relative rounded-[3rem] bg-gradient-to-br from-emerald-600 to-bms-primary p-12 lg:p-20 text-white shadow-2xl overflow-hidden">
                        {/* Background Texture */ }
                        <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 p-32 bg-blue-400/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
                            <div className="space-y-6 text-center lg:text-right flex-1">
                                <LuSparkles className="h-12 w-12 text-[#F4C430] mx-auto lg:mr-0 animate-pulse" />
                                <h3 className="text-3xl md:text-5xl font-black leading-tight">
                                    آماده تحول در <br className="hidden md:block" /> مدیریت کلینیک هستید؟
                                </h3>
                                <p className="text-lg md:text-xl text-blue-50/80 font-light max-w-2xl leading-relaxed">
                                    تجربه پلتفرم را با یک دمو اختصاصی آغاز کنید. ما دقیقاً نحوه عملکرد سیستم را متناسب با ساختار درمانی شما ارائه می‌دهیم.
                                </p>
                            </div>

                            <div className="flex flex-col gap-5 w-full sm:w-auto min-w-[280px]">
                                <Link
                                    href="https://clinicans.ir"
                                    target="_blank"
                                    className="group relative flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 text-base font-black text-bms-primary shadow-xl transition-all hover:-translate-y-1 active:scale-95"
                                >
                                    <LuLogIn className="h-5 w-5" />
                                    <span>ورود به پلتفرم هوشمند</span>
                                </Link>

                                <Link
                                    href="/contact-us?type=clinic-demo"
                                    className="group relative flex items-center justify-center gap-3 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md px-8 py-5 text-base font-bold text-white transition-all hover:bg-white/20 active:scale-95"
                                >
                                    <span>درخواست جلسه دمو</span>
                                    <LuArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-2" />
                                </Link>

                                <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                                    Authorized_Clinic_Access_Required
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{ `
        @keyframes flow {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }
      `}</style>
        </section>
    );
}