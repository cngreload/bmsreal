"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import
    {
        LuDownload,
        LuCalendarCheck,
        LuShieldCheck,
        LuGauge,
        LuNetwork,
        LuActivity,
        LuZap,
    } from "react-icons/lu";

/**
 * ⛽ CNG HERO SECTION - CORPORATE REFORMATION
 * Design Logic: Industrial Blueprint meets Command & Control UI.
 * Spacing: Enforced 8pt Grid (py-24 to py-36).
 */
export default function CngHeroSection ()
{
    return (
        <section
            id="cng-hero"
            dir="rtl"
            className="relative min-h-[85vh] flex items-center overflow-hidden bg-white"
            aria-labelledby="cng-hero-heading"
        >
            {/* ===================== BACKGROUND ENGINE ===================== */ }
            <div className="absolute inset-0 z-0">
                {/* Cinematic Brand Haze */ }
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(20,92,152,0.05),transparent_50%)]" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(244,196,48,0.03),transparent_50%)]" />

                {/* Technical Grid - Enhanced Precision Edition */ }
                <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#145C98_1px,transparent_1px),linear-gradient(to_bottom,#145C98_1px,transparent_1px)] [background-size:40px_40px]" />
                <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#145C98_1px,transparent_1px),linear-gradient(to_bottom,#145C98_1px,transparent_1px)] [background-size:160px_160px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 w-full py-20 lg:py-32">
                <div className="grid items-center gap-16 lg:grid-cols-12">

                    {/* ===================== TEXTUAL COMMAND (RIGHT) ===================== */ }
                    <div className="lg:col-span-7 space-y-10 text-right">

                        {/* System Status Badge - Red for National Importance */ }
                        <motion.div
                            initial={ { opacity: 0, y: 15 } }
                            animate={ { opacity: 1, y: 0 } }
                            className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50/50 px-5 py-2 text-xs font-bold text-bms-primary shadow-sm"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D72638] opacity-40" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D72638]" />
                            </span>
                            سامانه بومی پایش و کنترل صنعتی زیرساخت CNG
                        </motion.div>

                        {/* H1 - High Impact Typography */ }
                        <div className="space-y-4">
                            <h1
                                id="cng-hero-heading"
                                className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tightest"
                            >
                                سامانه مرجع <br />
                                <span className="text-bms-primary">پایش، ایمنی و کنترل</span>
                                <br />
                                جایگاه‌های سوخت CNG
                            </h1>
                            {/* Red Action Line */ }
                            <div className="h-1.5 w-24 bg-[#D72638] rounded-full shadow-[0_0_15px_rgba(215,38,56,0.3)]" />
                        </div>

                        {/* Narrative Paragraph */ }
                        <p className="max-w-2xl text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed-corp font-light text-justify">
                            <strong className="font-bold text-slate-900">
                                ICTS (Intelligent Control & Tag System)
                            </strong>{ " " }
                            یک سامانه صنعتی یکپارچه و بومی برای پایش لحظه‌ای،
                            افزایش ایمنی عملیات و مدیریت داده‌محور جایگاه‌های CNG است.
                            این سامانه با تکیه بر <strong className="text-bms-primary">اینترنت اشیاء صنعتی (IIoT)</strong>،
                            کنترلرهای صنعتی و پردازش لبه، برای پاسخ‌گویی به
                            الزامات فنی، نظارتی و حاکمیتی شبکه سوخت کشور طراحی شده است.
                        </p>

                        {/* Industrial Signals - Using Yellow for Intelligence */ }
                        <ul className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-slate-100">
                            { [
                                { icon: LuGauge, text: "پایش بلادرنگ تجهیزات و فرآیند" },
                                { icon: LuShieldCheck, text: "ارتقای ایمنی و انطباق مقرراتی" },
                                { icon: LuNetwork, text: "زیرساخت IIoT با سخت‌افزار بومی" },
                            ].map( ( item, idx ) => (
                                <li key={ idx } className="flex items-center gap-3 group">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-[#F4C430] border border-slate-200 group-hover:bg-[#F4C430] group-hover:text-white transition-colors duration-300">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">{ item.text }</span>
                                </li>
                            ) ) }
                        </ul>

                        {/* Actions */ }
                        <div className="flex flex-col sm:flex-row items-center gap-5 pt-6">
                            <Link
                                href="/contact-us"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-bms-primary px-10 py-4 text-base font-bold text-white shadow-[0_20px_40px_-10px_rgba(20,92,152,0.3)] transition-all hover:-translate-y-1 hover:bg-blue-800"
                            >
                                <span>درخواست جلسه فنی و دمو</span>
                                <LuCalendarCheck className="h-5 w-5" />
                            </Link>

                            <Link
                                href="/downloads/icts-intro.pdf"
                                target="_blank"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-10 py-4 text-base font-bold text-slate-700 transition-all hover:bg-slate-50 hover:border-bms-primary"
                            >
                                <LuDownload className="h-5 w-5 text-slate-400" />
                                <span>دریافت معرفی‌نامه فنی (PDF)</span>
                            </Link>
                        </div>
                    </div>

                    {/* ===================== VISUAL INTERFACE (LEFT) ===================== */ }
                    {/* Unique UI for Tablet/Desktop: A mock "System Monitoring" card */ }
                    <div className="lg:col-span-5 relative hidden md:block">
                        <div className="relative mx-auto w-full max-w-lg">
                            {/* Outer Glow */ }
                            <div className="absolute inset-0 -m-8 rounded-full bg-blue-500/5 blur-3xl" />

                            {/* The "Machine" Card */ }
                            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-2 shadow-2xl ring-1 ring-slate-900/5">
                                <div className="rounded-[2rem] bg-slate-950 p-8 space-y-10">

                                    {/* Card Header */ }
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-emerald-400">
                                            <LuActivity className="h-6 w-6 animate-pulse" />
                                        </div>
                                        <div className="text-left" dir="ltr">
                                            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">System_ID</div>
                                            <div className="text-sm font-black text-white font-mono">ICTS-PRO_v4.2</div>
                                        </div>
                                    </div>

                                    {/* Visual Data Matrix */ }
                                    <div className="space-y-6">
                                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={ { width: 0 } }
                                                animate={ { width: "85%" } }
                                                transition={ { duration: 2, repeat: Infinity, repeatType: "reverse" } }
                                                className="h-full bg-emerald-500"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="text-[9px] text-slate-400 uppercase mb-1">Pressure_PSI</div>
                                                <div className="text-xl font-mono font-bold text-[#F4C430]">3600.42</div>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div className="text-[9px] text-slate-400 uppercase mb-1">Safety_Auth</div>
                                                <div className="text-xl font-mono font-bold text-emerald-400">PASSED</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tech Brand Marker */ }
                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-slate-500 uppercase">Worldwide Intelligent Tech</span>
                                        <LuZap className="h-4 w-4 text-[#F4C430]" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge - Corporate Yellow */ }
                            <div className="absolute -top-6 -left-6 rounded-2xl bg-[#F4C430] p-4 shadow-xl text-[#0F172A] font-black text-sm rotate-[-12deg] border-4 border-white">
                                بومی‌سازی ۱۰۰٪
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}