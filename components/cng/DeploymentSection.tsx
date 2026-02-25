"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuSearch, LuPenTool, LuHammer, LuNetwork,
    LuCirclePlay, LuScaling, LuLifeBuoy,
    LuActivity, LuBinary, LuTerminal
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 🚀 DEPLOYMENT SECTION - CORPORATE REFORMATION
 * Strategy: Industrial Conduit Timeline / Progressive Reveal
 * Palette: Dark Blue (Authority), Red (Execution), Yellow (Intelligence)
 */

const deploymentPhases = [
    {
        id: 1,
        code: "PHASE_LOG_01",
        title: "شناخت میدان و امکان‌سنجی",
        icon: LuSearch,
        tone: "blue",
        description:
            "ارزیابی دقیق شرایط واقعی جایگاه شامل زیرساخت برق، شبکه، تجهیزات عملیاتی و الزامات ایمنی پدافندی؛ با هدف حذف ریسک‌های پیش‌بینی نشده.",
        deliverable: "تحلیل ریسک و برآورد فنی",
    },
    {
        id: 2,
        code: "PHASE_LOG_02",
        title: "طراحی راهکار اختصاصی",
        icon: LuPenTool,
        tone: "yellow",
        description:
            "طراحی معماری نرم‌افزار و سخت‌افزار متناسب با ظرفیت عملیاتی و تجهیزات هر جایگاه، با حفظ قابلیت مقیاس‌پذیری در شبکه ملی.",
        deliverable: "بلوپرینت استقرار فنی",
    },
    {
        id: 3,
        code: "PHASE_LOG_03",
        title: "نصب و تجهیز سخت‌افزار",
        icon: LuHammer,
        tone: "red",
        description:
            "نصب کنترلرها و سنسورهای صنعتی با رعایت استانداردهای انفجاری (Ex) و دستورالعمل‌های عملیاتی شبکه توزیع سوخت کشور.",
        deliverable: "تأییدیه نصب و صحت عملکرد",
    },
    {
        id: 4,
        code: "PHASE_LOG_04",
        title: "راه‌اندازی و یکپارچه‌سازی",
        icon: LuNetwork,
        tone: "blue",
        description:
            "راه‌اندازی سامانه و اتصال امن به زیرساخت‌های ملی از جمله سامانه «سیمفا»، با تضمین صحت تبادل داده در لایه نظارتی.",
        deliverable: "اتصال پایدار به مرکز کنترل",
    },
    {
        id: 5,
        code: "PHASE_LOG_05",
        title: "آموزش و پایلوت عملیاتی",
        icon: LuCirclePlay,
        tone: "yellow",
        description:
            "اجرای پایلوت در محیط واقعی و آموزش عملی اپراتورها و ناظران جهت اطمینان از آمادگی کامل پیش از بهره‌برداری سراسری.",
        deliverable: "گواهی آموزش و بهره‌برداری",
    },
    {
        id: 6,
        code: "PHASE_LOG_06",
        title: "تعمیم و مدیریت تغییر",
        icon: LuScaling,
        tone: "red",
        description:
            "گسترش مرحله‌ای سامانه در سطح شبکه جایگاه‌ها بر اساس برنامه زمان‌بندی و فعال‌سازی داشبوردهای نظارتی حاکمیتی.",
        deliverable: "تحویل نهایی در مقیاس شبکه",
    },
    {
        id: 7,
        code: "PHASE_LOG_07",
        title: "پشتیبانی و توسعه پایدار",
        icon: LuLifeBuoy,
        tone: "blue",
        description:
            "پایش مداوم سلامت سامانه، اعمال به‌روزرسانی‌های امنیتی و توسعه ماژول‌های جدید متناسب با نیازهای آینده شبکه توزیع انرژی.",
        deliverable: "قرارداد SLA و پایش ۲۴/۷",
    },
];

export default function DeploymentSection ()
{
    return (
        <section
            id="deployment"
            aria-labelledby="deployment-heading"
            className="relative py-12 lg:py-20 bg-white overflow-hidden"
            dir="rtl"
        >
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* ================= HEADER - Technical Summary ================= */ }
                <header className="mb-20 text-right space-y-4 max-w-4xl">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 px-3 py-1 shadow-sm">
                        <LuTerminal className="h-3.5 w-3.5 text-bms-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                            Execution_Roadmap / v4.2
                        </span>
                    </div>

                    <h2
                        id="deployment-heading"
                        className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tightest"
                    >
                        مسیر استقرار <span className="text-bms-primary">ICTS</span>؛ <br />
                        از امکان‌سنجی تا پایش پایدار
                    </h2>

                    <p className="max-w-2xl text-base md:text-lg text-slate-500 font-light leading-relaxed">
                        فرآیند هفت‌ مرحله‌ای مهندسی شده برای تبدیل پیچیدگی‌های هوشمندسازی به گام‌های شفاف و قابل حسابرسی.
                    </p>
                </header>

                {/* ================= INDUSTRIAL CONDUIT (Timeline) ================= */ }
                <div className="relative">

                    {/* The Main Conduit (Visual Spine) */ }
                    <div className="absolute right-7 md:right-8 top-0 bottom-0 w-px hidden md:block">
                        <div className="h-full w-full bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                        {/* Kinetic Fluid Pulse */ }
                        <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(20,92,152,0.4),transparent)] animate-[flow_4s_linear_infinite]" />
                    </div>

                    <div className="space-y-12">
                        { deploymentPhases.map( ( phase, index ) =>
                        {
                            const Icon = phase.icon;
                            return (
                                <motion.div
                                    key={ phase.id }
                                    initial={ { opacity: 0, x: 20 } }
                                    whileInView={ { opacity: 1, x: 0 } }
                                    viewport={ { once: true, margin: "-100px" } }
                                    transition={ { duration: 0.6, delay: index * 0.05 } }
                                    className="relative flex gap-8 group"
                                >
                                    {/* 1. The Junction Node */ }
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className={ cn(
                                            "flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl border-4 border-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                                            phase.tone === "blue" && "bg-blue-50 text-bms-primary",
                                            phase.tone === "yellow" && "bg-amber-50 text-[#F4C430]",
                                            phase.tone === "red" && "bg-red-50 text-[#D72638]"
                                        ) }>
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        {/* HUD Numbering */ }
                                        <span className="mt-2 font-mono text-[9px] font-black text-slate-300 group-hover:text-slate-900 transition-colors">
                                            STP_{ phase.id.toString().padStart( 2, "0" ) }
                                        </span>
                                    </div>

                                    {/* 2. The Blueprint Card */ }
                                    <article className="flex-1 rounded-[2.5rem] bg-white border border-slate-100 p-6 md:p-10 shadow-sm transition-all duration-500 hover:shadow-premium hover:border-bms-primary/20">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                                            <h3 className="text-xl md:text-2xl font-black text-slate-950 group-hover:text-bms-primary transition-colors">
                                                { phase.title }
                                            </h3>
                                            <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                                                { phase.code }
                                            </span>
                                        </div>

                                        <p className="text-sm md:text-base leading-corp-relaxed text-slate-500 text-justify font-light max-w-4xl">
                                            { phase.description }
                                        </p>

                                        {/* Deliverable Link */ }
                                        <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-3">
                                            <div className={ cn(
                                                "h-1.5 w-1.5 rounded-full",
                                                phase.tone === "blue" && "bg-bms-primary",
                                                phase.tone === "yellow" && "bg-[#F4C430]",
                                                phase.tone === "red" && "bg-[#D72638]"
                                            ) } />
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Deliverable:</span>
                                            <span className="text-xs font-bold text-slate-800">{ phase.deliverable }</span>
                                        </div>
                                    </article>
                                </motion.div>
                            );
                        } ) }
                    </div>
                </div>

                {/* ================= FOOTER TELEMETRY ================= */ }
                <div className="mt-20 flex justify-center">
                    <div className="relative p-1 rounded-2xl bg-gradient-to-r from-bms-primary via-[#D72638] to-[#F4C430] opacity-30">
                        <div className="bg-white px-6 py-3 rounded-xl flex items-center gap-4">
                            <LuBinary className="w-4 h-4 text-slate-400" />
                            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-[0.5em]">
                                Full_Deployment_Lifecycle_Validated
                            </span>
                            <LuActivity className="w-4 h-4 text-emerald-500 animate-pulse" />
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