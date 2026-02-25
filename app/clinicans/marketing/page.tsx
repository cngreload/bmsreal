"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import
{
    LuTrendingUp,
    LuMessageSquare,
    LuGift,
    LuChartBar,
    LuZap,
    LuRepeat,
    LuMegaphone,
    LuHeartHandshake,
    LuTarget,
    LuCoins,
    LuArrowLeft,
    LuBinary,
    LuActivity,
    LuShieldCheck,
    LuFingerprint,
    LuLayers,

} from "react-icons/lu";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

/**
 * 📈 CLINICANS MARKETING & GROWTH - STRATEGIC DOSSIER
 * Strategy: Result-Oriented Layout / Data-Driven Marketing
 * Palette: Medical White, BMS Navy, Industrial Red, Intel Yellow, Medical Green
 */

export default function ClinicansMarketingPage ()
{
    return (
        <main className="flex flex-col w-full bg-white overflow-visible" dir="rtl">

            {/* ===================== CHAPTER 1: HERO (Growth Narrative) ===================== */ }
            <Section variant="white" spacing="none" className="pt-8 md:pt-16 pb-0">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-7 space-y-10 text-right">
                        <motion.div
                            initial={ { opacity: 0, x: 20 } }
                            animate={ { opacity: 1, x: 0 } }
                            className="inline-flex items-center gap-3 rounded-full border border-emerald-100 bg-emerald-50/50 px-5 py-2 text-xs font-bold text-emerald-700 shadow-sm"
                        >
                            <LuTrendingUp className="h-4 w-4 animate-pulse" />
                            <span className="font-mono uppercase tracking-widest text-[10px]">Growth_Protocol: Sustainable_Marketing</span>
                        </motion.div>

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-950 leading-[1.1] tracking-tightest">
                                بازاریابی و <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 via-teal-600 to-blue-600">
                                    وفاداری هوشمند
                                </span>
                            </h1>
                            <p className="max-w-2xl text-lg md:text-xl font-semibold text-slate-800 leading-snug border-r-4 border-[#F4C430] pr-6">
                                جذب هدفمند، حفظ مراجعین و افزایش ارزش طول عمر (LTV).
                            </p>
                        </div>

                        <p className="max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed font-light text-justify">
                            Clinicans بازاریابی کلینیک را از تبلیغات پراکنده و پرهزینه، به یک سیستم داده‌محور و قابل اندازه‌گیری تبدیل می‌کند. تمرکز ما بر کاهش هزینه جذب (CAC)، افزایش مراجعه مجدد و رشد ارگانیک است.
                        </p>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <Link
                                href="/contact-us?type=clinicans-demo"
                                className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-10 text-base font-bold text-white shadow-xl shadow-emerald-600/20 transition-all hover:-translate-y-1 active:scale-95"
                            >
                                <span>درخواست دمو رشد و مارکتینگ</span>
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
                                src="/clinicans/marketing.png"
                                alt="Clinicans Marketing Intelligence"
                                width={ 560 }
                                height={ 420 }
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 2: STRATEGIC FRAMEWORK ===================== */ }
            <Section variant="subtle" spacing="none" className="py-20 lg:py-32 mt-20 border-y border-slate-100">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    <header className="lg:col-span-5 space-y-6 text-right lg:sticky lg:top-32">
                        <div className="inline-flex items-center gap-2 text-[#D72638]">
                            <LuTarget className="w-5 h-5 fill-current" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Growth_Strategy</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest leading-tight">
                            چارچوب <span className="text-bms-primary">۳ مرحله‌ای</span> <br /> برای رشد پایدار
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed-corp font-light text-justify">
                            سیستم مارکتینگ کلینیکانز بر پایه داده‌های واقعی پرونده‌های سلامت عمل می‌کند؛ به این معنا که هر پیام و هر کمپین، بر اساس نیاز واقعی و رفتار درمانی مراجع ارسال می‌شود.
                        </p>
                    </header>

                    <div className="lg:col-span-7 grid gap-6">
                        { [
                            {
                                title: "جذب هدفمند (Acquisition)",
                                icon: LuZap,
                                color: "text-blue-600",
                                desc: "ارسال پیام‌های دقیق به مخاطب مناسب در زمان طلایی نیاز درمانی، برای کاهش هزینه جذب هر بیمار جدید.",
                                metadata: "CAC_OPTIMIZATION"
                            },
                            {
                                title: "حفظ و بازگشت (Retention)",
                                icon: LuRepeat,
                                color: "text-emerald-600",
                                desc: "ایجاد تعامل مستمر و یادآوری هوشمند نوبت‌ها برای تبدیل مراجعه مجدد به یک رفتار طبیعی و دائمی.",
                                metadata: "RETENTION_ENGINE"
                            },
                            {
                                title: "افزایش ارزش طول عمر (LTV)",
                                icon: LuCoins,
                                color: "text-[#F4C430]",
                                desc: "پیشنهاد خدمات مکمل و برنامه‌های پیگیری درمانی برای افزایش درآمد پایدار از هر مراجع فعلی.",
                                metadata: "LTV_MAXIMIZATION"
                            }
                        ].map( ( item, idx ) => (
                            <div key={ idx } className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-10 shadow-sm group hover:shadow-premium transition-all">
                                <div className="flex items-center justify-between mb-6">
                                    <div className={ cn( "h-12 w-12 rounded-xl flex items-center justify-center shadow-inner", item.color, "bg-slate-50" ) }>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{ item.metadata }</span>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-bms-primary transition-colors">{ item.title }</h3>
                                <p className="text-sm md:text-base leading-relaxed text-slate-500 font-light">{ item.desc }</p>
                            </div>
                        ) ) }
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 3: PLATFORM CAPABILITIES ===================== */ }
            <Section variant="white" spacing="large">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3">
                                <LuLayers className="w-5 h-5 text-bms-primary" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 font-mono">Module_Anatomy / v4.2</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest leading-tight">
                                ابزارهای <span className="text-bms-primary">هوشمندسازی</span> <br /> بازاریابی سلامت
                            </h2>
                            <p className="text-lg leading-relaxed-corp text-slate-600 font-light text-justify max-w-2xl">
                                کلینیکانز بازاریابی را از یک فعالیت سلیقه‌ای به یک فرآیند خودکار و متصل به پرونده سلامت تبدیل می‌کند.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            { [
                                { title: "SMS مارکتینگ شخصی‌سازی شده", icon: LuMessageSquare, desc: "ارسال پیامک بر اساس تخصص، پزشک و تاریخچه مراجعه." },
                                { title: "کمپین‌های قابل اندازه‌گیری", icon: LuMegaphone, desc: "مشاهده دقیق نرخ بازگشت سرمایه (ROI) برای هر تومان هزینه تبلیغات." },
                                { title: "باشگاه مشتریان و وفاداری", icon: LuGift, desc: "سیستم امتیازدهی و پاداش برای تقویت وفاداری مراجعین." },
                                { title: "سیستم رفرال دیجیتال", icon: LuHeartHandshake, desc: "تبدیل مراجعین راضی به کانال جذب جدید با ردیابی معرفی‌ها." }
                            ].map( ( item, idx ) => (
                                <div key={ idx } className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-4 group hover:bg-white hover:shadow-premium transition-all">
                                    <item.icon className="w-6 h-6 text-bms-primary" />
                                    <h4 className="font-black text-slate-900">{ item.title }</h4>
                                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">{ item.desc }</p>
                                </div>
                            ) ) }
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-square rounded-[3.5rem] bg-[#020617] p-10 overflow-hidden shadow-2xl ring-1 ring-white/10">
                            <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
                            <div className="relative h-full flex flex-col justify-between z-10 text-right">
                                <div className="flex justify-between items-start">
                                    <LuBinary className="w-10 h-10 text-[#F4C430] opacity-40" />
                                    <div className="text-left font-mono text-[10px] text-slate-400 uppercase tracking-widest leading-tight">
                                        Data_Analytics<br /><span className="text-[#F4C430] font-bold">PREDICTIVE</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-0.5 w-12 bg-[#F4C430]" />
                                    <h3 className="text-white font-black text-3xl tracking-tight">Marketing_Intelligence</h3>
                                    <p className="text-blue-50 text-sm font-light leading-relaxed opacity-90">
                                        تحلیل همزمان داده‌های درمانی و مالی برای ارائه پیشنهادهای هوشمند به مراجعین در زمان طلایی رزرو مجدد.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 4: OPERATIONAL IMPACT ===================== */ }
            <Section variant="subtle" spacing="none" className="py-20 lg:py-32 border-y border-slate-100">
                <div className="max-w-4xl mx-auto text-right space-y-8">
                    <div className="inline-flex items-center gap-2 text-emerald-600">
                        <LuChartBar className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Business_Insights</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest">رشد بر پایه <br /> <span className="text-emerald-600">تحلیل داده‌های واقعی</span></h2>
                    <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
                        Clinicans بازاریابی را از یک هزینه نامطمئن به یک موتور رشد قابل پیش‌بینی تبدیل می‌کند.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mt-16">
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 flex flex-col gap-6 group hover:shadow-premium transition-all">
                        <div className="h-14 w-14 rounded-2xl bg-blue-50 text-bms-primary flex items-center justify-center border border-blue-100 group-hover:scale-110 transition-transform">
                            <LuFingerprint className="w-7 h-7" />
                        </div>
                        <div className="space-y-4 text-right">
                            <h4 className="text-xl font-black text-slate-900">مدیریت هوشمند پایگاه داده</h4>
                            <p className="text-base text-slate-500 leading-8 font-light">یکپارچه‌سازی تمام اطلاعات بیماران برای اجرای دقیق‌ترین سگمنتیشن بازاریابی بر اساس تخصص، سابقه و رفتار مراجع.</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 flex flex-col gap-6 group hover:shadow-premium transition-all">
                        <div className="h-14 w-14 rounded-2xl bg-[#D72638]/10 text-[#D72638] flex items-center justify-center border border-[#D72638]/20 group-hover:scale-110 transition-transform">
                            <LuActivity className="w-7 h-7" />
                        </div>
                        <div className="space-y-4 text-right">
                            <h4 className="text-xl font-black text-slate-900">تحلیل ROI در لحظه</h4>
                            <p className="text-base text-slate-500 leading-8 font-light">مشاهده مستقیم اینکه هر ریال هزینه در کدام کانال تبلیغاتی و کدام کمپین بیشترین مراجعه و درآمد را ایجاد کرده است.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ===================== CHAPTER 5: THE FINAL CTA (Dark Breakout) ===================== */ }
            <Section variant="white" spacing="large">
                <div className="rounded-[4rem] bg-[#020617] text-white overflow-hidden p-8 md:p-16 lg:p-24 relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10B981] via-[#F4C430] to-blue-500" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10 text-right">
                            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tightest text-white">
                                رشد کلینیک را به <br /> <span className="text-[#F4C430]">فرآیندی سیستماتیک</span> تبدیل کنید
                            </h2>
                            <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed font-light text-justify">
                                با Clinicans، بازاریابی دیگر یک هزینه مجهول نیست؛ بلکه سرمایه‌گذاری هوشمندی است که نرخ بازگشت آن (ROI) به‌وضوح قابل ردیابی و بهینه‌سازی است.
                            </p>
                            <div className="flex items-center gap-4">
                                <LuShieldCheck className="w-6 h-6 text-emerald-400 shadow-sm" />
                                <span className="text-xs font-mono font-bold tracking-[0.3em] text-emerald-300">TRUSTED_GROWTH_ECOSYSTEM</span>
                            </div>
                        </div>

                        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-14 space-y-10 shadow-inner text-right">
                            <div className="flex items-center gap-5">
                                <div className="h-14 w-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                                    <LuTrendingUp className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-white">رشد بر پایه داده، نه حدس</h3>
                            </div>
                            <p className="text-base md:text-lg text-white leading-9 font-light text-justify opacity-90">
                                با پلتفرم Clinicans، مراجعین جدید را با هزینه کمتر جذب کنید و مراجعین فعلی را به سفیران وفادار برند خود تبدیل کنید.
                            </p>
                            <Link
                                href="/contact-us?type=clinicans-demo"
                                className="flex items-center justify-between bg-white text-slate-950 px-8 py-5 rounded-2xl font-black group transition-all hover:bg-[#F4C430] active:scale-95 shadow-xl"
                            >
                                <span className="text-lg">رزرو دمو مارکتینگ هوشمند</span>
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