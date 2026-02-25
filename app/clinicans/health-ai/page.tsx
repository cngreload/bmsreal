"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import
{
    LuBrain,
    LuTrendingUp,
    LuChartBar,
    LuZap,
    LuTarget,
    LuShield,
    LuLayers,
    LuCoins,
    LuBinary,
    LuArrowLeft,
    LuScanFace
} from "react-icons/lu";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

/**
 * 🧠 CLINICANS HEALTH AI - STRATEGIC DOSSIER
 * Strategy: Clinical Intelligence / Data-Driven Decision Engine
 * Theme: Medical Teal & Purple / High-Contrast Dark Breakouts
 */

export default function ClinicansHealthAIPage ()
{
    return (
        <main className="flex flex-col w-full bg-white overflow-visible" dir="rtl">

            {/* ===================== CHAPTER 1: AI HERO (Processing Engine) ===================== */ }
            <Section variant="white" spacing="none" className="pt-8 md:pt-16 pb-0">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-7 space-y-10 text-right">
                        <motion.div
                            initial={ { opacity: 0, x: 20 } }
                            animate={ { opacity: 1, x: 0 } }
                            className="inline-flex items-center gap-3 rounded-full border border-purple-100 bg-purple-50/50 px-5 py-2 text-xs font-bold text-purple-700 shadow-sm"
                        >
                            <LuBrain className="h-4 w-4 animate-pulse" />
                            <span className="font-mono uppercase tracking-widest text-[10px]">Processing_Node: Health_AI_Engine</span>
                        </motion.div>

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 leading-[1.1] tracking-tightest">
                                هوش مصنوعی سلامت <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-600 via-blue-600 to-emerald-500">
                                    دستیار هوشمند تصمیم
                                </span>
                            </h1>
                            <p className="max-w-2xl text-lg md:text-xl font-semibold text-slate-800 leading-snug border-r-4 border-purple-500 pr-6">
                                از داده تا تصمیم — دقیق، قابل توضیح و سودآور در اکوسیستم درمانی.
                            </p>
                            <p className="max-w-xl text-base md:text-lg text-slate-500 font-light leading-relaxed text-justify">
                                Clinicans AI داده‌های درمانی، رفتاری و مالی را تحلیل می‌کند تا تصمیم‌گیری بالینی و مدیریتی را دقیق‌تر، سریع‌تر و اقتصادی‌تر کند. این سیستم یک ابزار عملیاتی است، نه یک مفهوم آزمایشگاهی.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <Link
                                href="/contact-us?type=clinicans-demo"
                                className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-10 text-base font-bold text-white shadow-xl shadow-purple-600/20 transition-all hover:-translate-y-1 active:scale-95"
                            >
                                <span>مشاهده دمو عملیاتی AI</span>
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
                                src="/clinicans/health-ai.png"
                                alt="Clinicans Health AI Diagnostic Interface"
                                width={ 560 }
                                height={ 420 }
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
                        </motion.div>

                        {/* Floating Telemetry Node */ }
                        <div className="absolute -bottom-8 -right-8 hidden md:flex items-center gap-4 bg-white p-5 rounded-[2.5rem] shadow-2xl border border-slate-50 animate-fade-in-up">
                            <div className="h-12 w-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-inner">
                                <LuBinary className="h-6 w-6" />
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Logic_Core</div>
                                <div className="text-sm font-black text-slate-900">Neural Sync: Active</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 2: ECONOMIC IMPACT (Bento Grid) ===================== */ }
            <Section variant="subtle" spacing="none" className="py-20 lg:py-32 mt-20 border-y border-slate-100">
                <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
                    <div className="inline-flex items-center gap-2 text-purple-600">
                        <LuTrendingUp className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Economic_Efficiency_Metrics</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest">کاهش هزینه، <br /> <span className="text-purple-600">افزایش بهره‌وری</span></h2>
                    <p className="text-lg md:text-xl text-slate-600 font-light max-w-3xl mx-auto">
                        هوش مصنوعی Clinicans با کاهش خطای انسانی و پیش‌بینی دقیق‌تر تقاضا، باعث کاهش اتلاف منابع و افزایش بازدهی کلینیک می‌شود.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    { [
                        { title: "کاهش هزینه‌های عملیاتی", icon: LuCoins, tone: "emerald", desc: "بهینه‌سازی منابع انسانی، زمان‌بندی و ظرفیت خدمات." },
                        { title: "افزایش درآمد قابل پیش‌بینی", icon: LuTrendingUp, tone: "purple", desc: "تحلیل رفتار بیماران و پیشنهاد خدمات تکمیلی هدفمند." },
                        { title: "بهبود نرخ تبدیل", icon: LuTarget, tone: "blue", desc: "پیشنهاد هوشمند خدمات و یادآوری‌های دقیق‌تر مراجعین." },
                    ].map( ( item, idx ) => (
                        <div key={ idx } className="bg-white rounded-[2.5rem] border border-slate-100 p-8 text-center group hover:shadow-premium transition-all">
                            <div className={ cn(
                                "h-14 w-14 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-inner transition-transform group-hover:scale-110",
                                item.tone === "emerald" && "bg-emerald-50 text-emerald-600",
                                item.tone === "purple" && "bg-purple-50 text-purple-600",
                                item.tone === "blue" && "bg-blue-50 text-blue-600"
                            ) }>
                                <item.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-lg font-black text-slate-900 mb-3">{ item.title }</h3>
                            <p className="text-sm text-slate-500 leading-6 font-light">{ item.desc }</p>
                        </div>
                    ) ) }
                </div>
            </Section>

            {/* ===================== CHAPTER 3: OPERATIONAL ARCHITECTURE ===================== */ }
            <Section variant="white" spacing="large">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <header className="lg:col-span-5 space-y-8 text-right">
                        <div className="inline-flex items-center gap-3">
                            <LuLayers className="w-5 h-5 text-blue-600" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 font-mono">System_Scalability / v4.2</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest leading-tight">
                            قابل پیاده‌سازی، <br /> <span className="text-blue-600">مقیاس‌پذیر و امن</span>
                        </h2>
                        <p className="text-lg leading-relaxed-corp text-slate-600 font-light">
                            AI در Clinicans به‌صورت درون‌پلتفرمی طراحی شده و نیاز به زیرساخت جداگانه ندارد. این سیستم با رشد کلینیک شما مقیاس‌پذیر خواهد بود.
                        </p>
                        <div className="pt-4 flex flex-col gap-4">
                            { [
                                { icon: LuLayers, t: "یکپارچه با اکوسیستم", d: "اتصال مستقیم به داده‌های وب‌سایت و مالی" },
                                { icon: LuShield, t: "امن و قابل توضیح", d: "خروجی‌های شفاف و قابل بررسی برای پزشکان" },
                                { icon: LuChartBar, t: "بینش مدیریتی عملی", d: "توصیه‌های کاربردی برای بهینه‌سازی منابع" }
                            ].map( ( feat, i ) => (
                                <div key={ i } className="flex items-center gap-4 group">
                                    <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                        <feat.icon className="w-5 h-5" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-slate-800">{ feat.t }</div>
                                        <div className="text-[10px] text-slate-400 font-medium">{ feat.d }</div>
                                    </div>
                                </div>
                            ) ) }
                        </div>
                    </header>

                    <div className="lg:col-span-7">
                        <div className="relative aspect-video rounded-[3rem] bg-[#020617] overflow-hidden shadow-2xl p-1">
                            {/* Bezel Rim Lighting */ }
                            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 z-30 rounded-[3rem]" />
                            <div className="relative h-full w-full rounded-[2.9rem] bg-slate-950 p-8 md:p-12 flex flex-col justify-between overflow-hidden">
                                {/* HUD Grid Overlay */ }
                                <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:30px_30px]" />

                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest">Neural_Activity</span>
                                        <div className="flex gap-1">
                                            { [ 1, 2, 3, 4 ].map( i => <div key={ i } className="h-1 w-4 bg-purple-500/40 rounded-full overflow-hidden"><div className="h-full bg-purple-400 animate-pulse" style={ { animationDelay: `${ i * 0.2 }s` } } /></div> ) }
                                        </div>
                                    </div>
                                    <LuScanFace className="w-10 h-10 text-white/10" />
                                </div>

                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="h-px flex-1 bg-white/10" />
                                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.4em]">Intelligence_Archive</span>
                                    </div>
                                    <h3 className="text-white font-black text-2xl md:text-3xl">رشد پایدار و مزیت رقابتی</h3>
                                    <p className="text-blue-100/60 text-sm md:text-base leading-8 font-light text-justify">
                                        هوش مصنوعی Clinicans به شما کمک می‌کند تصمیم‌ها را بر پایه داده بگیرید، ریسک‌ها را پیش‌بینی کنید و با اطمینان بیشتری توسعه یابید. این یک مزیت رقابتی پایدار است.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 4: FINAL BREAKOUT (High Contrast) ===================== */ }
            <Section variant="white" spacing="large">
                <div className="relative rounded-[4rem] bg-[#020617] p-8 md:p-16 lg:p-24 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]">
                    {/* Background Light Sources */ }
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-purple-500 via-[#F4C430] to-blue-500" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

                    <div className="relative z-10 flex flex-col items-center text-center space-y-12">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
                            <div className="relative h-20 w-20 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-[#F4C430] shadow-2xl">
                                <LuZap className="h-10 w-10 fill-current" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tightest text-white">
                                تصمیم‌گیری هوشمند را وارد <br /> <span className="text-[#F4C430]">کلینیک خود کنید</span>
                            </h2>
                            <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed font-light max-w-3xl mx-auto">
                                با Clinicans AI، هزینه‌ها را کاهش دهید، کیفیت درمان را افزایش دهید و رشد پایدار را در عصر دیجیتال تجربه کنید.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link
                                href="/contact-us?type=clinicans-demo"
                                className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-white px-10 text-base font-black text-slate-950 shadow-2xl transition-all hover:bg-[#F4C430] active:scale-95"
                            >
                                <span>درخواست دمو هوش مصنوعی</span>
                                <LuArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-2" />
                            </Link>

                            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <LuShield className="w-5 h-5 text-emerald-400" />
                                <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">SECURE_AI_READY</span>
                            </div>
                        </div>

                        <div className="pt-8 flex items-center gap-4 opacity-40">
                            <LuBinary className="w-5 h-5 text-white" />
                            <span className="text-[10px] font-mono text-white uppercase tracking-[0.5em]">System_Logic_Verified_v4.2</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Visual Anchor Divider */ }
            <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        </main>
    );
}