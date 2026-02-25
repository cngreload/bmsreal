"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import
{
    LuPhoneCall,
    LuClock,
    LuTrendingUp,
    LuCheck,
    LuZap,
    LuRepeat,
    LuHeadphones,
    LuChartBar,
    LuShieldCheck,
    LuArrowLeft,
    LuActivity,
    LuBinary,
    LuTarget,
    LuLayers,
} from "react-icons/lu";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

/**
 * 📞 CLINICANS CALL CENTER - STRATEGIC DOSSIER
 * Strategy: Conversion-Focused Layout / Operational Transparency
 * Palette: Medical White, BMS Navy, Industrial Red, Intel Yellow
 */

export default function ClinicansCallCenterPage ()
{
    return (
        <main className="flex flex-col w-full bg-white overflow-visible" dir="rtl">

            {/* ===================== CHAPTER 1: HERO (The Command Center) ===================== */ }
            <Section variant="white" spacing="none" className="pt-8 md:pt-16 pb-0">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-7 space-y-10 text-right">
                        <motion.div
                            initial={ { opacity: 0, x: 20 } }
                            animate={ { opacity: 1, x: 0 } }
                            className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50/50 px-5 py-2 text-xs font-bold text-bms-primary shadow-sm"
                        >
                            <LuPhoneCall className="h-4 w-4 animate-pulse" />
                            <span className="font-mono uppercase tracking-widest text-[10px]">Infrastructure_Node: Specialist_Call_Center</span>
                        </motion.div>

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-950 leading-[1.1] tracking-tightest">
                                بازوی عملیاتی <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-bms-primary via-blue-600 to-indigo-600">
                                    پاسخگویی و نوبت‌دهی
                                </span>
                            </h1>
                            <p className="max-w-2xl text-lg md:text-xl font-semibold text-slate-800 leading-snug border-r-4 border-[#F4C430] pr-6">
                                تبدیل تماس‌های ورودی به مراجعه واقعی و مدیریت هوشمند نوبت‌ها.
                            </p>
                        </div>

                        <p className="max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed font-light text-justify">
                            کال سنتر Clinicans فقط پاسخگویی تلفنی نیست؛ این سرویس بازوی عملیاتی اکوسیستم دیجیتال شماست برای مدیریت تماس‌ها، نوبت‌دهی دقیق، پیگیری بیماران و کاهش No-Show با هدف افزایش بهره‌وری کلینیک.
                        </p>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <Link
                                href="/contact-us?type=clinicans-demo"
                                className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-bms-primary px-10 text-base font-bold text-white shadow-xl shadow-bms-primary/20 transition-all hover:-translate-y-1 active:scale-95"
                            >
                                <span>درخواست مشاوره استقرار</span>
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
                                src="/clinicans/call-center.png"
                                alt="Clinicans Call Center Operations"
                                width={ 560 }
                                height={ 420 }
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 2: STRATEGIC VALUE ===================== */ }
            <Section variant="subtle" spacing="none" className="py-20 lg:py-32 mt-20 border-y border-slate-100">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 text-[#D72638]">
                        <LuTarget className="w-5 h-5 fill-current" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Operational_Excellence</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest leading-tight">
                        تبدیل تماس به <span className="text-bms-primary">درآمد</span>، نه فقط پاسخگویی
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
                        بسیاری از تماس‌های ورودی به دلیل عدم پیگیری مناسب، پاسخ غیرحرفه‌ای یا مدیریت نادرست زمان‌بندی به مراجعه واقعی تبدیل نمی‌شوند. کال سنتر Clinicans این فاصله را از بین می‌برد.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3 mt-20">
                    { [
                        { title: "پاسخگویی تخصصی سلامت", icon: LuHeadphones, color: "text-blue-600", desc: "اپراتورهای آموزش‌دیده در حوزه سلامت، پاسخگویی حرفه‌ای و استاندارد را مطابق سیاست‌های مرکز ارائه می‌دهند." },
                        { title: "مدیریت دقیق نوبت‌دهی", icon: LuClock, color: "text-emerald-600", desc: "هماهنگی کامل با تقویم دیجیتال، مدیریت اسلات‌های خالی و بهینه‌سازی ظرفیت برای افزایش بهره‌وری." },
                        { title: "پیگیری و کاهش No-Show", icon: LuRepeat, color: "text-purple-600", desc: "تماس‌های یادآوری و پیگیری هدفمند، جهت کاهش عدم مراجعه و افزایش نرخ حضور بیماران." },
                    ].map( ( item, idx ) => (
                        <div key={ idx } className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm group hover:shadow-premium transition-all duration-500">
                            <div className={ cn( "h-14 w-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner bg-slate-50", item.color ) }>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-bms-primary transition-colors">{ item.title }</h3>
                            <p className="text-sm leading-7 text-slate-500 font-light text-justify">{ item.desc }</p>
                        </div>
                    ) ) }
                </div>
            </Section>

            {/* ===================== CHAPTER 3: OPERATIONAL IMPACT ===================== */ }
            <Section variant="white" spacing="large">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 space-y-12 text-right">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3">
                                <LuActivity className="w-5 h-5 text-emerald-600" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 font-mono">Performance_Metrics / v4.2</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest leading-tight">
                                تأثیر مستقیم بر <br /> <span className="text-emerald-600">بهره‌وری کلینیک</span>
                            </h2>
                            <p className="text-lg leading-relaxed-corp text-slate-600 font-light text-justify">
                                مدیریت هوشمند تماس‌ها نه‌تنها رضایت مراجعین را افزایش می‌دهد، بلکه باعث استفاده بهینه از زمان پزشکان و منابع کلینیک می‌شود.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 group hover:bg-white hover:shadow-premium transition-all">
                                <LuTrendingUp className="w-6 h-6 text-emerald-600" />
                                <h4 className="font-black text-slate-900 text-sm">افزایش نرخ تبدیل</h4>
                                <p className="text-xs text-slate-500 leading-6 font-light">تبدیل تماس‌های ورودی به نوبت قطعی با پاسخگویی حرفه‌ای.</p>
                            </div>
                            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 group hover:bg-white hover:shadow-premium transition-all">
                                <LuChartBar className="w-6 h-6 text-blue-600" />
                                <h4 className="font-black text-slate-900 text-sm">تحلیل عملکرد</h4>
                                <p className="text-xs text-slate-500 leading-6 font-light">مشاهده تعداد تماس‌ها، نرخ تبدیل و عملکرد اپراتورها در لحظه.</p>
                            </div>
                            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 space-y-4 group hover:bg-white hover:shadow-premium transition-all">
                                <LuShieldCheck className="w-6 h-6 text-indigo-600" />
                                <h4 className="font-black text-slate-900 text-sm">استانداردسازی</h4>
                                <p className="text-xs text-slate-500 leading-6 font-light">ایجاد تجربه یکپارچه و حرفه‌ای در تمام نقاط تماس با کلینیک.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-square rounded-[3.5rem] bg-[#020617] p-10 overflow-hidden shadow-2xl ring-1 ring-white/10">
                            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
                            <div className="relative h-full flex flex-col justify-between z-10 text-right">
                                <div className="flex justify-between items-start">
                                    <LuBinary className="w-10 h-10 text-blue-400 opacity-40" />
                                    <div className="text-left font-mono text-[10px] text-slate-400 uppercase tracking-widest leading-tight">
                                        Logic_Layer<br /><span className="text-blue-400 font-bold">OPTIMIZED</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-0.5 w-12 bg-blue-500" />
                                    <h3 className="text-white font-black text-3xl tracking-tight">Call_Conversion_Engine</h3>
                                    <p className="text-blue-50 text-sm font-light leading-relaxed opacity-90">
                                        تجمیع خودکار داده‌های تماس با پرونده مراجعین جهت شخصی‌سازی حداکثری پاسخگویی و افزایش وفاداری.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 4: ECONOMIC IMPACT ===================== */ }
            <Section variant="subtle" spacing="none" className="py-20 lg:py-32 border-y border-slate-100">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-6 md:grid-cols-4">
                        { [
                            "کاهش نیاز به نیروی پاسخگویی داخلی",
                            "کاهش تماس‌های از دست‌رفته",
                            "افزایش بهره‌وری زمان پزشکان",
                            "رشد درآمد قابل پیش‌بینی",
                        ].map( ( item, idx ) => (
                            <div key={ idx } className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center gap-4 group hover:border-bms-primary transition-all">
                                <LuCheck className="h-6 w-6 text-emerald-500 group-hover:scale-125 transition-transform" />
                                <p className="font-bold text-slate-800 text-sm leading-relaxed">{ item }</p>
                            </div>
                        ) ) }
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 5: ECOSYSTEM INTEGRATION ===================== */ }
            <Section variant="white" spacing="large">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <div className="inline-flex items-center gap-2 text-indigo-600">
                        <LuLayers className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">System_Ecosystem_Sync</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest">
                        یکپارچه با اکوسیستم <span className="text-bms-primary">Clinicans</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light text-justify md:text-center">
                        کال سنتر به‌صورت مستقیم با سیستم رزرو آنلاین، باشگاه مشتریان، مارکتینگ و داشبورد مدیریتی متصل است. تمامی تعاملات ثبت و قابل تحلیل هستند — تصمیم‌گیری مدیریتی بر پایه داده واقعی انجام می‌شود.
                    </p>
                    <div className="pt-6">
                        <div className="flex justify-center gap-4 flex-wrap">
                            <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-600">Real-time Booking Sync</span>
                            <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-600">Marketing ROI Tracking</span>
                            <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-600">Patient History Integration</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 6: FINAL CTA (Breakout) ===================== */ }
            <Section variant="white" spacing="large">
                <div className="rounded-[4rem] bg-[#020617] text-white overflow-hidden p-8 md:p-16 lg:p-24 relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bms-primary via-blue-500 to-indigo-600" />
                    <div className="absolute bottom-0 left-0 p-16 opacity-[0.05] pointer-events-none">
                        <LuPhoneCall className="w-80 h-80" />
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10 text-right">
                            <LuZap className="h-14 w-14 text-[#F4C430] animate-pulse" />
                            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tightest text-white">
                                مدیریت تماس‌ها را به یک <br /> <span className="text-[#F4C430]">مزیت رقابتی</span> تبدیل کنید
                            </h2>
                            <p className="text-lg md:text-xl text-blue-50/90 leading-relaxed font-light text-justify">
                                با کال سنتر تخصصی Clinicans، تماس‌های ورودی را به فرصت رشد تبدیل کنید و ظرفیت کلینیک را در بالاترین سطح ممکن مدیریت نمایید.
                            </p>
                        </div>

                        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-14 space-y-10 shadow-inner text-right">
                            <h3 className="text-2xl font-black text-white">آماده تحول در نوبت‌دهی هستید؟</h3>
                            <p className="text-base md:text-lg text-white leading-9 font-light text-justify opacity-80">
                                همین حالا برای مشاوره رایگان و دریافت پروپوزال استقرار کال سنتر در مرکز درمانی خود اقدام کنید.
                            </p>
                            <Link
                                href="/contact-us?type=clinicans-demo"
                                className="flex items-center justify-between bg-white text-slate-950 px-8 py-5 rounded-2xl font-black group transition-all hover:bg-[#F4C430] active:scale-95 shadow-xl"
                            >
                                <span className="text-lg">رزرو جلسه دمو و مشاوره</span>
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