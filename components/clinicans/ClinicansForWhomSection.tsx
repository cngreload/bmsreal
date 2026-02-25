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
        title: "مدیران و مالکان",
        subtitle: "کنترل، رشد و تصمیم‌گیری مبتنی بر داده",
        summary:
            "برای مدیرانی که می‌خواهند رشد را حدس نزنند، بلکه آن را اندازه‌گیری و هدایت کنند.",
        icon: LuBriefcase,
        color: "text-bms-primary", // Translated static '#145C98' to global tag
        bg: "bg-blue-50",
        border: "group-hover:border-bms-primary/30",
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
        color: "text-emerald-600",
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
        color: "text-brand-yellow", // Translated '#F4C430'
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
        color: "text-brand-red", // Translated '#D72638'
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
            className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
            aria-labelledby="audience-heading"
            dir="rtl"
        >
            {/* Background HUD Graphics */ }
            <div className="pointer-events-none absolute right-0 top-0 p-12 opacity-[0.02]" aria-hidden="true">
                <LuFingerprint className="hidden h-80 w-80 text-bms-primary lg:block" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

                {/* ===================== HEADER ===================== */ }
                <header className="mb-12 space-y-6 text-right sm:mb-16 lg:mb-20">
                    <motion.div
                        initial={ { opacity: 0, x: 20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-1.5 shadow-sm"
                    >
                        <LuUser className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                        <span className="font-mono text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 sm:text-[10px]">
                            Stakeholder_Access / Clinicans
                        </span>
                    </motion.div>

                    <h2
                        id="audience-heading"
                        className="max-w-4xl text-3xl font-black leading-[1.2] tracking-tightest text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        کلینیکانز برای چه کسانی <br />
                        <span className="text-bms-primary underline decoration-bms-primary/10 decoration-4 underline-offset-8">
                            ارزش خلق می‌کند؟
                        </span>
                    </h2>

                    <p className="max-w-3xl text-sm font-light leading-relaxed text-slate-500 sm:text-base md:text-lg">
                        این پلتفرم یک ابزار عمومی نیست؛ بلکه زیرساختی نقش‌محور است که برای
                        هر جایگاه در چرخه ارائه خدمات سلامت، تجربه‌ای متناسب و هدفمند
                        طراحی کرده است.
                    </p>
                </header>

                {/* ===================== PERSONA NODES ===================== */ }
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
                                    "group relative flex h-full flex-col rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-premium sm:p-8",
                                    persona.border
                                ) }
                            >
                                <div className="mb-6 flex flex-col items-center gap-4 text-center">
                                    <div
                                        className={ cn(
                                            "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-110 sm:h-16 sm:w-16",
                                            persona.bg,
                                            persona.color
                                        ) }
                                    >
                                        <Icon className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-base font-black text-slate-950 transition-colors group-hover:text-bms-primary sm:text-lg">
                                            { persona.title }
                                        </h3>
                                        <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400 sm:text-[10px]">
                                            { persona.role }
                                        </p>
                                    </div>
                                </div>

                                <p className="mb-6 text-center text-xs font-medium italic leading-6 text-slate-500">
                                    { persona.summary }
                                </p>

                                <ul className="flex flex-1 flex-col space-y-4 border-t border-slate-50 pt-6">
                                    { persona.benefits.map( ( item, idx ) => (
                                        <li key={ idx } className="flex items-start gap-3">
                                            <div
                                                className={ cn(
                                                    "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full sm:mt-1",
                                                    persona.bg,
                                                    persona.color
                                                ) }
                                                aria-hidden="true"
                                            >
                                                <LuCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                            </div>
                                            <span className="text-xs font-light leading-snug text-slate-600 sm:text-[13px] sm:leading-6 md:leading-relaxed">
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
                <div className="mt-16 flex w-full justify-center sm:mt-20 lg:mt-32">
                    <aside className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-slate-950 p-1 shadow-2xl sm:rounded-[3rem]">
                        {/* Background Texture */ }
                        <div
                            className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px]"
                            aria-hidden="true"
                        />

                        <div className="relative flex flex-col items-center gap-8 rounded-[2.4rem] bg-slate-950 px-6 py-10 md:flex-row md:gap-12 md:px-10 lg:px-14 sm:rounded-[2.9rem]">

                            {/* Graphic Focal Point */ }
                            <div className="group relative shrink-0">
                                <div
                                    className="absolute inset-0 rounded-3xl bg-bms-primary/40 blur-2xl transition-all group-hover:blur-3xl"
                                    aria-hidden="true"
                                />
                                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md sm:h-24 sm:w-24">
                                    <LuVenetianMask className="h-10 w-10 animate-float text-brand-yellow sm:h-12 sm:w-12" aria-hidden="true" />
                                </div>
                            </div>

                            {/* Concluding Narrative */ }
                            <div className="flex-1 space-y-4 text-center md:text-right">
                                <h4 className="text-lg font-black leading-tight text-white sm:text-xl md:text-2xl">
                                    زیرساختی که نقش‌ها را به رشد متصل می‌کند
                                </h4>
                                <p className="text-justify text-sm font-light leading-loose text-slate-300 opacity-90 sm:text-base sm:leading-8">
                                    کلینیکانز با هم‌راستا کردن مدیریت، تیم درمان و تجربه بیمار،
                                    یک چرخه هماهنگ ایجاد می‌کند؛ چرخه‌ای که نتیجه آن
                                    <span>

                                        <q className="mx-1 font-bold text-brand-yellow">
                                            افزایش بازگشت مراجعان
                                        </q>
                                    </span>
                                    ،
                                    <span>

                                        <q className="mx-1 font-bold text-emerald-400">
                                            بهره‌وری عملیاتی بالاتر
                                        </q>
                                    </span>

                                    و
                                    <span>

                                        <q className="mx-1 font-bold text-blue-400">
                                            رشد پایدار مرکز
                                        </q>
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