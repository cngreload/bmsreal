"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import
{
    LuGlobe,
    LuShieldCheck,
    LuTrendingUp,
    LuZap,
    LuBinary,
    LuActivity,
    LuFingerprint,
    LuCoins,
    LuDatabase,
    LuNetwork,
    LuArrowLeft,
    LuChartPie,
    LuStethoscope,
    LuCircleCheck,
    LuChartBar
} from "react-icons/lu";
import { Section } from "@/components/layout/Section";

/**
 * 🌐 CLINICANS DIGITAL BUILDER - STRATEGIC DOSSIER
 * Strategy: High-Contrast Layout / Economic & Technical Transparency
 * Palette: Medical White, BMS Navy, Industrial Red, Intel Yellow
 */

export default function ClinicansDigitalBuilderPage ()
{
    return (
        <main className="flex flex-col w-full bg-white overflow-visible" dir="rtl">

            {/* ===================== CHAPTER 1: HERO (High Impact) ===================== */ }
            <Section variant="white" spacing="none" className="pt-8 md:pt-16 pb-0">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-7 space-y-10 text-right">
                        <motion.div
                            initial={ { opacity: 0, x: 20 } }
                            animate={ { opacity: 1, x: 0 } }
                            className="inline-flex items-center gap-3 rounded-full border border-emerald-100 bg-emerald-50/50 px-5 py-2 text-xs font-bold text-emerald-700 shadow-sm"
                        >
                            <LuGlobe className="h-4 w-4 animate-pulse" />
                            <span className="font-mono uppercase tracking-widest text-[10px]">Infrastructure_Node: Digital_Builder</span>
                        </motion.div>

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 leading-[1.1] tracking-tightest">
                                زیرساخت کامل <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 via-teal-600 to-blue-600">
                                    حضور آنلاین کلینیک
                                </span>
                            </h1>
                            <p className="max-w-2xl text-lg md:text-xl font-semibold text-slate-800 leading-snug border-r-4 border-[#F4C430] pr-6">
                                ساخت، رشد و مدیریت برند دیجیتال — در یک پلتفرم یکپارچه و بومی.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <Link
                                href="/contact-us?type=clinicans-demo"
                                className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-10 text-base font-bold text-white shadow-xl shadow-emerald-600/20 transition-all hover:-translate-y-1 active:scale-95"
                            >
                                <span>درخواست دمو زیرساخت</span>
                                <LuArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-2" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={ { opacity: 0, scale: 0.9 } }
                            animate={ { opacity: 1, scale: 1 } }
                            className="relative rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-200"
                        >
                            <Image
                                src="/clinicans/digital-builder.png"
                                alt="Clinicans Digital Builder Architecture"
                                width={ 560 }
                                height={ 420 }
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 2: ECONOMIC ARCHITECTURE ===================== */ }
            <Section variant="subtle" spacing="none" className="py-20 lg:py-32 mt-20 border-y border-slate-100">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <header className="lg:col-span-5 space-y-6 text-right lg:sticky lg:top-32">
                        <div className="inline-flex items-center gap-2 text-[#D72638]">
                            <LuCoins className="w-5 h-5 fill-current" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Economic_Efficiency</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest leading-tight">
                            زیرساختی <span className="text-bms-primary">مقرون‌به‌صرفه</span> <br /> برای حضور دیجیتال
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed-corp font-light text-justify">
                            ساخت و نگهداری یک وب‌سایت حرفه‌ای پزشکی معمولاً نیازمند طراح، توسعه‌دهنده، متخصص سئو، هاست امن و تیم پشتیبانی است. Clinicans همه این لایه‌ها را در یک پلتفرم یکپارچه تجمیع کرده و هزینه‌های پراکنده را حذف می‌کند.
                        </p>
                    </header>

                    <div className="lg:col-span-7 grid gap-6">
                        <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 shadow-sm group hover:shadow-premium transition-all">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">کاهش مستقیم هزینه‌ها</h3>
                                <LuChartPie className="w-6 h-6 text-emerald-500" />
                            </div>
                            <p className="text-sm md:text-base leading-relaxed text-slate-500 font-light mb-8">
                                با عضویت در پلتفرم Clinicans، نیازی به قرارداد جداگانه برای طراحی سایت، خرید هاست، پرداخت CDN، گواهی امنیت، پشتیبانی فنی یا استخدام متخصص سئو نخواهید داشت. تمامی این خدمات در قالب یک زیرساخت مشترک ارائه می‌شوند.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                { [ "حذف هزینه هاست", "حذف هزینه SSL", "حذف هزینه سئو", "بدون هزینه CDN" ].map( item => (
                                    <div key={ item } className="bg-emerald-50/50 border border-emerald-100 rounded-xl py-2 px-3 flex items-center gap-2">
                                        <LuCircleCheck className="w-3.5 h-3.5 text-emerald-600" />
                                        <span className="text-[10px] font-bold text-emerald-800">{ item }</span>
                                    </div>
                                ) ) }
                            </div>
                        </div>

                        <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 shadow-sm group hover:shadow-premium transition-all">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-black text-slate-900 group-hover:text-bms-primary transition-colors">حذف هزینه‌های پنهان فنی</h3>
                                <LuFingerprint className="w-6 h-6 text-slate-300" />
                            </div>
                            <p className="text-sm md:text-base leading-relaxed text-slate-500 font-light">
                                در مدل سنتی، هر تغییر کوچک در سایت نیازمند پرداخت هزینه جداگانه است. در Clinicans، ساختار ماژولار و درون‌پلتفرمی باعث می‌شود توسعه و به‌روزرسانی بدون هزینه‌های غیرقابل پیش‌بینی انجام شود.
                            </p>
                            <div className="mt-8 pt-6 border-t border-slate-50">
                                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Audit: No_Hidden_Fees</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 3: TECHNICAL SOVEREIGNTY ===================== */ }
            <Section variant="white" spacing="large">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3">
                                <LuDatabase className="w-5 h-5 text-bms-primary" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 font-mono">Core_Architecture / v4.2</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest leading-tight">
                                زیرساخت فنی <br /> <span className="text-bms-primary">پایدار و امن</span>
                            </h2>
                            <p className="text-lg leading-relaxed-corp text-slate-600 font-light text-justify max-w-2xl">
                                وب‌سایت هر مرکز بر بستر زیرساخت ابری پایدار، با معماری بهینه و امنیت چندلایه اجرا می‌شود. این ساختار برای مقیاس‌پذیری طراحی شده است.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-4 group hover:bg-white hover:shadow-premium transition-all">
                                <LuActivity className="w-6 h-6 text-bms-primary" />
                                <h4 className="font-black text-slate-900">سئو در سطح پلتفرم</h4>
                                <p className="text-sm text-slate-500 leading-7 font-light">ساختار فنی Clinicans به‌گونه‌ای طراحی شده که تمامی مراکز از مزیت سئوی پلتفرمی بهره‌مند شوند؛ یعنی رشد ارگانیک سریع‌تر نسبت به وب‌سایت‌های مستقل.</p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-4 group hover:bg-white hover:shadow-premium transition-all">
                                <LuShieldCheck className="w-6 h-6 text-emerald-600" />
                                <h4 className="font-black text-slate-900">مدیریت بدون وابستگی</h4>
                                <p className="text-sm text-slate-500 leading-7 font-light">کلینیک‌ها دیگر وابسته به یک برنامه‌نویس نیستند. زیرساخت به‌صورت متمرکز مدیریت می‌شود، در حالی که کنترل کامل برند در اختیار مرکز است.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-square rounded-[3.5rem] bg-[#020617] p-10 overflow-hidden shadow-2xl ring-1 ring-white/10">
                            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
                            <div className="relative h-full flex flex-col justify-between z-10">
                                <div className="flex justify-between items-start">
                                    <LuBinary className="w-10 h-10 text-emerald-400 opacity-40" />
                                    <div className="text-left font-mono text-[10px] text-slate-400 uppercase tracking-widest leading-tight">
                                        Data_Integrity<br /><span className="text-emerald-400 font-bold">SECURED</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-0.5 w-12 bg-emerald-500" />
                                    <h3 className="text-white font-black text-3xl tracking-tight">Sovereign_Logic</h3>
                                    <p className="text-emerald-50 text-sm font-light leading-relaxed opacity-90">
                                        تضمین پایداری ۹۹.۹٪ و حاکمیت کامل بر محتوا بدون نیاز به درگیری با کدهای پیچیده فرانت‌اند یا تنظیمات سرور.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 4: ECOSYSTEM DYNAMICS ===================== */ }
            <Section variant="subtle" spacing="none" className="py-20 lg:py-32 border-y border-slate-100">
                <div className="max-w-4xl mx-auto text-right space-y-8">
                    <div className="inline-flex items-center gap-2 text-emerald-600">
                        <LuNetwork className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Network_Synergy</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest">رشد پایدار در <br /> <span className="text-emerald-600">اکوسیستم پلتفرمی</span></h2>
                    <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
                        حضور در Clinicans به معنای عضویت در یک اکوسیستم سلامت است. هر مرکز بخشی از یک شبکه بزرگ‌تر با اعتبار جمعی تقویت‌شده خواهد بود.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mt-16">
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 flex flex-col gap-6 group hover:shadow-premium transition-all">
                        <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:scale-110 transition-transform">
                            <LuZap className="w-7 h-7" />
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-black text-slate-900">افزایش نرخ تبدیل و اعتماد</h4>
                            <p className="text-base text-slate-500 leading-8 font-light">ساختار حرفه‌ای، تجربه کاربری استاندارد و امنیت بالا باعث افزایش اعتماد بیماران و در نتیجه افزایش نرخ رزرو و تعامل خواهد شد.</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 flex flex-col gap-6 group hover:shadow-premium transition-all">
                        <div className="h-14 w-14 rounded-2xl bg-[#F4C430]/10 text-[#F4C430] flex items-center justify-center border border-[#F4C430]/20 group-hover:scale-110 transition-transform">
                            <LuTrendingUp className="w-7 h-7" />
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-black text-slate-900">مقیاس‌پذیری بدون بازطراحی</h4>
                            <p className="text-base text-slate-500 leading-8 font-light">چه یک مطب کوچک باشید و چه یک کلینیک چندشعبه‌ای، زیرساخت Clinicans برای رشد طراحی شده است؛ بدون نیاز به مهاجرت یا بازطراحی.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 5: THE FINAL BREAKOUT (Dark Background) ===================== */ }
            <Section variant="white" spacing="large">
                <div className="rounded-[4rem] bg-[#020617] text-white overflow-hidden p-8 md:p-16 lg:p-24 relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]">
                    {/* High-Contrast Highlights */ }
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10B981] via-[#F4C430] to-blue-500" />
                    <div className="absolute bottom-0 right-0 p-16 opacity-[0.05] pointer-events-none">
                        <LuChartBar className="w-80 h-80" />
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10 text-right">
                            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tightest text-white">
                                مدل اقتصادی شفاف و <br /> <span className="text-[#F4C430]">قابل پیش‌بینی</span>
                            </h2>
                            <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed font-light text-justify">
                                هزینه‌ها در Clinicans شفاف، قابل پیش‌بینی و متناسب با نیاز مرکز است. این ساختار به مدیران اجازه می‌دهد برنامه‌ریزی مالی دقیق‌تری برای توسعه دیجیتال داشته باشند، بدون نگرانی از هزینه‌های ناگهانی.
                            </p>
                            <div className="flex items-center gap-4">
                                <LuShieldCheck className="w-6 h-6 text-emerald-400 shadow-sm" />
                                <span className="text-xs font-mono font-bold tracking-[0.3em] text-emerald-300">FISCAL_INTEGRITY_VERIFIED</span>
                            </div>
                        </div>

                        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-14 space-y-10 shadow-inner">
                            <div className="flex items-center gap-5">
                                <div className="h-14 w-14 rounded-2xl bg-[#F4C430] text-black flex items-center justify-center shadow-[0_0_20px_rgba(244,196,48,0.4)]">
                                    <LuStethoscope className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-white">تمرکز بر درمان، نه فناوری</h3>
                            </div>
                            <p className="text-base md:text-lg text-white leading-9 font-light text-justify opacity-90">
                                هدف Clinicans ساده است: فراهم‌کردن زیرساخت دیجیتال حرفه‌ای تا مراکز سلامت بتوانند انرژی و منابع خود را بر کیفیت خدمات درمانی متمرکز کنند.
                            </p>
                            <Link
                                href="/contact-us?type=clinicans-demo"
                                className="flex items-center justify-between bg-white text-slate-950 px-8 py-5 rounded-2xl font-black group transition-all hover:bg-[#F4C430] active:scale-95 shadow-xl"
                            >
                                <span className="text-lg">رزرو جلسه مشاوره و دمو</span>
                                <LuArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FINAL GLOBAL ANCHOR */ }
            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </main>
    );
}