"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import
{
    LuTrendingUp,
    LuCoins,
    LuChartBar,
    LuUsers,
    LuCalendar,
    LuWallet,
    LuCheck,
    LuZap,

    LuShieldCheck,
    LuArrowLeft,
    LuActivity,
    LuBinary,
    LuTarget,
    LuLayers
} from "react-icons/lu";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

/**
 * 💹 CLINICANS FINANCIAL & OPERATIONS - STRATEGIC DOSSIER
 * Strategy: Institutional Precision / Data Visualization Aesthetic
 * Palette: Medical White, BMS Navy, Industrial Red, Intel Yellow, Medical Green
 */

export default function ClinicansFinancialOperationsPage ()
{
    return (
        <main className="flex flex-col w-full bg-white overflow-visible" dir="rtl">

            {/* ===================== CHAPTER 1: HERO (Financial Authority) ===================== */ }
            <Section variant="white" spacing="none" className="pt-8 md:pt-16 pb-0">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-7 space-y-10 text-right">
                        <motion.div
                            initial={ { opacity: 0, x: 20 } }
                            animate={ { opacity: 1, x: 0 } }
                            className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50/50 px-5 py-2 text-xs font-bold text-bms-primary shadow-sm"
                        >
                            <LuCoins className="h-4 w-4 animate-pulse" />
                            <span className="font-mono uppercase tracking-widest text-[10px]">Infrastructure_Node: Fiscal_Operations</span>
                        </motion.div>

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-950 leading-[1.1] tracking-tightest">
                                مدیریت مالی و <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 via-teal-600 to-blue-600">
                                    عملیات هوشمند
                                </span>
                            </h1>
                            <p className="max-w-2xl text-lg md:text-xl font-semibold text-slate-800 leading-snug border-r-4 border-[#F4C430] pr-6">
                                از داده‌های مالی تا سودآوری قابل پیش‌بینی.
                            </p>
                        </div>

                        <p className="max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed font-light text-justify">
                            Clinicans مدیریت مالی، عملکرد عملیاتی و تحلیل درآمد را در یک داشبورد یکپارچه ترکیب می‌کند. نتیجه؟ کنترل کامل بر هزینه‌ها، درآمدها، ظرفیت خدمات و رشد سودآور کلینیک.
                        </p>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <Link
                                href="/contact-us?type=clinicans-demo"
                                className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-bms-primary px-10 text-base font-bold text-white shadow-xl shadow-bms-primary/20 transition-all hover:-translate-y-1 active:scale-95"
                            >
                                <span>مشاهده داشبورد مدیریتی</span>
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
                                src="/clinicans/financial.png"
                                alt="مدیریت مالی و عملیات کلینیک Clinicans"
                                width={ 560 }
                                height={ 420 }
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 2: FINANCIAL TRANSPARENCY ===================== */ }
            <Section variant="subtle" spacing="none" className="py-20 lg:py-32 mt-20 border-y border-slate-100">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <header className="lg:col-span-5 space-y-6 text-right lg:sticky lg:top-32">
                        <div className="inline-flex items-center gap-2 text-[#D72638]">
                            <LuTarget className="w-5 h-5 fill-current" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Fiscal_Transparency</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest leading-tight">
                            شفافیت <span className="text-bms-primary">کامل مالی</span> <br /> در تمام ابعاد
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed-corp font-light text-justify">
                            مشاهده دقیق درآمد به تفکیک پزشک، خدمت، بازه زمانی و شعبه. دیگر نیازی به گزارش‌های پراکنده و محاسبات دستی نیست — همه‌چیز در یک نمای بصری و قابل تحلیل.
                        </p>
                    </header>

                    <div className="lg:col-span-7 grid gap-6">
                        { [
                            {
                                title: "مدیریت درآمد و پرداخت‌ها",
                                icon: LuWallet,
                                color: "text-emerald-600",
                                desc: "ثبت و تحلیل تمامی پرداخت‌ها، بدهی‌ها و جریان مالی با گزارش‌گیری لحظه‌ای و دقیق.",
                                code: "FISCAL_LEDGER_01"
                            },
                            {
                                title: "تحلیل سودآوری خدمات",
                                icon: LuChartBar,
                                color: "text-blue-600",
                                desc: "شناسایی خدمات پر سود، کم سود یا کم‌تقاضا برای بهینه‌سازی استراتژی قیمت‌گذاری و تخصیص منابع.",
                                code: "REVENUE_OPTIMIZER"
                            },
                            {
                                title: "پیش‌بینی درآمد",
                                icon: LuTrendingUp,
                                color: "text-purple-600",
                                desc: "تحلیل روندهای گذشته برای پیش‌بینی درآمد آینده و برنامه‌ریزی دقیق‌تر برای توسعه مرکز.",
                                code: "PREDICTIVE_CASHFLOW"
                            }
                        ].map( ( item, idx ) => (
                            <div key={ idx } className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-10 shadow-sm group hover:shadow-premium transition-all">
                                <div className="flex items-center justify-between mb-6">
                                    <div className={ cn( "h-12 w-12 rounded-xl flex items-center justify-center shadow-inner", item.color, "bg-slate-50" ) }>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">{ item.code }</span>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-bms-primary transition-colors">{ item.title }</h3>
                                <p className="text-sm md:text-base leading-relaxed text-slate-500 font-light">{ item.desc }</p>
                            </div>
                        ) ) }
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 3: OPERATIONAL EFFICIENCY ===================== */ }
            <Section variant="white" spacing="large">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3">
                                <LuLayers className="w-5 h-5 text-bms-primary" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 font-mono">Efficiency_Metrics / v4.2</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest leading-tight">
                                بهینه‌سازی <br /> <span className="text-bms-primary">بهره‌وری عملیاتی</span>
                            </h2>
                            <p className="text-lg leading-relaxed-corp text-slate-600 font-light text-justify max-w-2xl">
                                ترکیب داده‌های رزرو، تماس، مارکتینگ و مالی برای افزایش بهره‌وری و کاهش اتلاف منابع در سطح کلینیک.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-4 group hover:bg-white hover:shadow-premium transition-all">
                                <LuCalendar className="w-6 h-6 text-indigo-600" />
                                <h4 className="font-black text-slate-900">مدیریت ظرفیت خدمات</h4>
                                <p className="text-sm text-slate-500 leading-7 font-light">تحلیل درصد اشغال تقویم و شناسایی اسلات‌های خالی برای بهینه‌سازی جریان مراجعین.</p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-4 group hover:bg-white hover:shadow-premium transition-all">
                                <LuUsers className="w-6 h-6 text-cyan-600" />
                                <h4 className="font-black text-slate-900">بهره‌وری پزشکان</h4>
                                <p className="text-sm text-slate-500 leading-7 font-light">تحلیل عملکرد هر پزشک بر اساس تعداد مراجعه، درآمد و نرخ بازگشت بیماران جهت بهبود تخصیص منابع.</p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-4 group hover:bg-white hover:shadow-premium transition-all">
                                <LuShieldCheck className="w-6 h-6 text-emerald-600" />
                                <h4 className="font-black text-slate-900">کاهش ریسک مالی</h4>
                                <p className="text-sm text-slate-500 leading-7 font-light">شناسایی روندهای کاهشی یا ناپایدار پیش از تبدیل‌شدن به بحران عملیاتی.</p>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex items-center justify-center group hover:bg-white hover:shadow-premium transition-all">
                                <div className="text-center">
                                    <LuActivity className="w-10 h-10 text-slate-200 mx-auto mb-2 group-hover:text-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-mono font-bold text-slate-400">DATA_LIVE_SYNC</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-square rounded-[3.5rem] bg-[#020617] p-10 overflow-hidden shadow-2xl ring-1 ring-white/10">
                            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
                            <div className="relative h-full flex flex-col justify-between z-10 text-right">
                                <div className="flex justify-between items-start">
                                    <LuBinary className="w-10 h-10 text-emerald-400 opacity-40" />
                                    <div className="text-left font-mono text-[10px] text-slate-400 uppercase tracking-widest leading-tight">
                                        Logic_Layer<br /><span className="text-emerald-400 font-bold">OPTIMIZED</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-0.5 w-12 bg-emerald-500" />
                                    <h3 className="text-white font-black text-3xl tracking-tight">Systemic_Efficiency</h3>
                                    <p className="text-blue-50 text-sm font-light leading-relaxed opacity-90">
                                        تجمیع فرآیندهای مالی و عملیاتی در یک هسته واحد برای حذف گلوگاه‌های اداری و افزایش سرعت چرخش نقدینگی.
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
                            "کنترل کامل جریان مالی",
                            "افزایش سودآوری خدمات",
                            "کاهش هزینه‌های پنهان عملیاتی",
                            "رشد پایدار و قابل پیش‌بینی",
                        ].map( ( item, idx ) => (
                            <div key={ idx } className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center gap-4 group hover:border-emerald-500 transition-all">
                                <LuCheck className="h-6 w-6 text-emerald-500 group-hover:scale-125 transition-transform" />
                                <p className="font-bold text-slate-800 text-sm leading-relaxed">{ item }</p>
                            </div>
                        ) ) }
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 5: FINAL CTA (Breakout) ===================== */ }
            <Section variant="white" spacing="large">
                <div className="rounded-[4rem] bg-[#020617] text-white overflow-hidden p-8 md:p-16 lg:p-24 relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-[#F4C430] to-blue-500" />
                    <div className="absolute bottom-0 right-0 p-16 opacity-[0.05] pointer-events-none">
                        <LuChartBar className="w-80 h-80" />
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10 text-right">
                            <LuZap className="h-14 w-14 text-[#F4C430] animate-pulse" />
                            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tightest text-white">
                                کلینیک خود را <br /> <span className="text-[#F4C430]">داده‌محور و سودآور</span> اداره کنید
                            </h2>
                            <p className="text-lg md:text-xl text-blue-50/90 leading-relaxed font-light text-justify">
                                Clinicans به شما کمک می‌کند درآمد را تحلیل کنید، هزینه‌ها را کنترل کنید و رشد پایدار را بر اساس واقعیت‌های مالی برنامه‌ریزی نمایید.
                            </p>
                        </div>

                        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-14 space-y-10 shadow-inner text-right">
                            <h3 className="text-2xl font-black text-white">آماده تحول در مدل اقتصادی هستید؟</h3>
                            <p className="text-base md:text-lg text-white leading-9 font-light text-justify opacity-80">
                                همین حالا برای دریافت دمو و مشاوره مدیریت مالی و عملیاتی مرکز درمانی خود اقدام کنید.
                            </p>
                            <Link
                                href="/contact-us?type=clinicans-demo"
                                className="flex items-center justify-between bg-white text-slate-950 px-8 py-5 rounded-2xl font-black group transition-all hover:bg-[#F4C430] active:scale-95 shadow-xl"
                            >
                                <span className="text-lg">درخواست دمو و گزارش‌های مالی</span>
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

/* ---------------------------------------------
 * SEO METADATA (placed here but used by layout)
 * -------------------------------------------*/
export const dynamic = "force-static";