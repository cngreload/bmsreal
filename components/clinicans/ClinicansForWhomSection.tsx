"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuBriefcase,
    LuStethoscope,
    LuVenetianMask,
    LuCalendarCheck,
    LuHeartHandshake,
    LuCheck,
    LuUser,
    LuFingerprint,
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 👥 CLINICANS PERSONA SECTION - REFORMED
 * Strategy: Stakeholder Access Nodes & Editorial Spacing
 * Theme: Corporate Navy + Medical Spectrum (Green/Teal/Blue)
 */

const personas = [
    {
        id: "managers",
        role: "Strategic_Control",
        title: "مدیران و مالکان مراکز سلامت",
        subtitle: "کنترل، رشد و تصمیم‌گیری مبتنی بر داده",
        summary:
            "برای مدیرانی که می‌خواهند رشد را حدس نزنند، بلکه آن را اندازه‌گیری و هدایت کنند.",
        icon: LuBriefcase,
        color: "text-[#145C98]",
        bg: "bg-blue-50",
        border: "group-hover:border-[#145C98]/30",
        benefits: [
            "نمای یکپارچه از درآمد، ظرفیت و عملکرد واقعی مرکز",
            "گزارش‌های تحلیلی برای تصمیم‌گیری راهبردی و توسعه پایدار",
            "مدیریت متمرکز چند شعبه در یک زیرساخت واحد",
        ],
    },
    {
        id: "doctors",
        role: "Clinical_Focus",
        title: "پزشکان و کادر درمان",
        subtitle: "تمرکز کامل بر کیفیت درمان",
        summary:
            "برای درمانگرانی که می‌خواهند زمان و انرژی خود را صرف بیمار کنند، نه مدیریت فرآیندها.",
        icon: LuStethoscope,
        color: "text-[#10B981]",
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200",
        benefits: [
            "دسترسی سریع و ساخت‌یافته به سوابق و اطلاعات بیمار",
            "ثبت منظم خدمات بدون وقفه در جریان درمان",
            "کاهش اصطکاک اجرایی در فرآیند ویزیت",
        ],
    },
    {
        id: "reception",
        role: "Operational_Flow",
        title: "تیم پذیرش و عملیات",
        subtitle: "جریان روان، خطای کمتر",
        summary:
            "برای تیم‌هایی که قلب تپنده نظم مرکز هستند و به ابزار دقیق برای مدیریت جریان مراجعین نیاز دارند.",
        icon: LuCalendarCheck,
        color: "text-[#F4C430]",
        bg: "bg-amber-50",
        border: "group-hover:border-amber-200",
        benefits: [
            "مدیریت هوشمند نوبت‌ها و تغییرات برنامه",
            "اطلاع‌رسانی خودکار برای کاهش تماس‌های تکراری",
            "کاهش خطای انسانی در پذیرش و هماهنگی‌ها",
        ],
    },
    {
        id: "patients",
        role: "Trusted_Experience",
        title: "مراجعان و بیماران",
        subtitle: "تجربه‌ای منظم و قابل اعتماد",
        summary:
            "برای بیمارانی که انتظار دارند خدمات سلامت را شفاف، دقیق و محترمانه دریافت کنند.",
        icon: LuHeartHandshake,
        color: "text-[#D72638]",
        bg: "bg-red-50",
        border: "group-hover:border-red-200",
        benefits: [
            "دریافت نوبت آنلاین بدون وابستگی به تماس تلفنی",
            "اطلاع‌رسانی شفاف درباره زمان و وضعیت مراجعه",
            "افزایش اعتماد به فرآیند و کیفیت خدمات مرکز",
        ],
    },
];

export default function ClinicansForWhomSection ()
{
    return (
        <section
            id="clinicans-for-whom"
            className="relative py-20 lg:py-32 bg-white overflow-hidden"
            aria-labelledby="audience-heading"
            dir="rtl"
        >
            {/* Background HUD Graphics */ }
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none hidden lg:block">
                <LuFingerprint className="w-80 h-80 text-bms-primary" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                {/* ===================== HEADER ===================== */ }
                <header className="mb-20 text-right space-y-4 max-w-4xl">
                    <motion.div
                        initial={ { opacity: 0, x: 20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 px-3 py-1 shadow-sm"
                    >
                        <LuUser className="h-3.5 w-3.5 text-slate-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                            Stakeholder_Access / Clinicans
                        </span>
                    </motion.div>

                    <h2
                        id="audience-heading"
                        className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.1] tracking-tightest"
                    >
                        کلینیکانز برای چه کسانی <br />
                        <span className="text-bms-primary underline decoration-bms-primary/10 underline-offset-8">
                            ارزش خلق می‌کند؟
                        </span>
                    </h2>

                    <p className="max-w-3xl text-base md:text-lg text-slate-500 font-light leading-relaxed">
                        این پلتفرم یک ابزار عمومی نیست؛ بلکه زیرساختی نقش‌محور است که برای
                        هر جایگاه در چرخه ارائه خدمات سلامت، تجربه‌ای متناسب و هدفمند
                        طراحی کرده است.
                    </p>
                </header>

                {/* ===================== PERSONA NODES ===================== */ }
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    { personas.map( ( persona, index ) =>
                    {
                        const Icon = persona.icon;
                        return (
                            <motion.article
                                key={ persona.id }
                                initial={ { opacity: 0, y: 30 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.6, delay: index * 0.1 } }
                                className={ cn(
                                    "group relative flex flex-col h-full rounded-[2.5rem] bg-white border border-slate-200 p-8 shadow-sm transition-all duration-500 hover:shadow-premium",
                                    persona.border
                                ) }
                            >
                                <div className="mb-6 flex flex-col items-center text-center gap-4">
                                    <div
                                        className={ cn(
                                            "flex h-16 w-16 items-center justify-center rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-110",
                                            persona.bg,
                                            persona.color
                                        ) }
                                    >
                                        <Icon className="h-8 w-8" />
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-lg font-black text-slate-950 group-hover:text-bms-primary transition-colors">
                                            { persona.title }
                                        </h3>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                                            { persona.role }
                                        </p>
                                    </div>
                                </div>

                                <p className="mb-6 text-xs leading-6 text-center text-slate-500 font-medium italic">
                                    { persona.summary }
                                </p>

                                <ul className="flex-1 space-y-4 border-t border-slate-50 pt-6">
                                    { persona.benefits.map( ( item, idx ) => (
                                        <li key={ idx } className="flex items-start gap-3">
                                            <div
                                                className={ cn(
                                                    "mt-1 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full",
                                                    persona.bg,
                                                    persona.color
                                                ) }
                                            >
                                                <LuCheck className="h-3 w-3" />
                                            </div>
                                            <span className="text-xs leading-5 text-slate-600 font-light">
                                                { item }
                                            </span>
                                        </li>
                                    ) ) }
                                </ul>
                            </motion.article>
                        );
                    } ) }
                </div>

                {/* ===================== SUMMARY BLOCK ===================== */ }
                <div className="mt-20 lg:mt-32 flex justify-center">
                    <aside className="relative overflow-hidden rounded-[3rem] bg-slate-950 p-1 shadow-2xl max-w-5xl w-full mx-4">
                        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

                        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 rounded-[2.95rem] bg-slate-950 px-8 py-10 md:px-14">
                            <div className="flex-shrink-0 relative group">
                                <div className="absolute inset-0 bg-bms-primary/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white/5 text-[#F4C430] shadow-2xl border border-white/10 backdrop-blur-md">
                                    <LuVenetianMask className="h-12 w-12 animate-float" />
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-right space-y-4">
                                <h4 className="text-xl md:text-2xl font-black text-white">
                                    زیرساختی که نقش‌ها را به رشد متصل می‌کند
                                </h4>
                                <p className="text-sm md:text-base text-slate-300 leading-8 text-justify font-light opacity-90">
                                    کلینیکانز با هم‌راستا کردن مدیریت، تیم درمان و تجربه بیمار،
                                    یک چرخه هماهنگ ایجاد می‌کند؛ چرخه‌ای که نتیجه آن
                                    <span className="text-[#F4C430] font-bold mx-1">
                                        افزایش بازگشت مراجعان
                                    </span>
                                    ،
                                    <span className="text-emerald-400 font-bold mx-1">
                                        بهره‌وری عملیاتی بالاتر
                                    </span>
                                    و
                                    <span className="text-blue-400 font-bold mx-1">
                                        رشد پایدار مرکز
                                    </span>
                                    است.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
