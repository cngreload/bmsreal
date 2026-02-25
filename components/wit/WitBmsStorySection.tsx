"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import
{
    LuBuilding2,
    LuLightbulb,
    LuRocket,
    LuTarget,
    LuHistory,
    LuBinary,
    LuActivity,
    LuShieldCheck,
    LuArrowLeft
} from "react-icons/lu";

/**
 * 📖 WIT BMS STORY SECTION - REFORMED
 * Strategy: Corporate Chronology / Blueprint Aesthetic
 * Palette: BMS Navy (#145C98), Industrial Red (#D72638), Intel Yellow (#F4C430)
 */

export default function WitBmsStorySection ()
{
    return (
        <section
            id="story"
            className="relative overflow-hidden bg-white py-24 lg:py-32"
            dir="rtl"
        >
            {/* ===================== ARCHITECTURAL BACKGROUND ===================== */ }
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Subtle technical grid */ }
                <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#145C98_1px,transparent_1px),linear-gradient(to_bottom,#145C98_1px,transparent_1px)] [background-size:40px_40px]" />

                {/* Optical depth haze */ }
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-50 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* ===================== SECTION HEADER ===================== */ }
                <header className="mb-20 flex flex-col md:flex-row items-end justify-between gap-8 border-b border-slate-100 pb-10">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-bms-primary shadow-inner">
                                <LuBuilding2 className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 font-mono">
                                Corporate_Lineage / Origin_Dossier
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tightest leading-tight">
                            خالق WIT: از <span className="text-bms-primary">میدان واقعی</span> تا <br /> انقلاب در اتوماسیون
                        </h2>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex flex-col items-end gap-2">
                            <span className="bg-slate-950 text-white px-4 py-1.5 rounded-lg text-[10px] font-mono font-bold tracking-widest uppercase">
                                Est. 2021
                            </span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Verified Enterprise Status</span>
                        </div>
                    </div>
                </header>

                {/* ===================== MAIN CONTENT GRID ===================== */ }
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">

                    {/* --- STORY COLUMN (The Genesis) --- */ }
                    <div className="space-y-10">
                        <motion.div
                            initial={ { opacity: 0, x: 20 } }
                            whileInView={ { opacity: 1, x: 0 } }
                            viewport={ { once: true } }
                            className="group relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-premium"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 rounded-2xl bg-amber-50 text-[#F4C430] flex items-center justify-center border border-amber-100 shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-3">
                                    <LuLightbulb className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 group-hover:text-bms-primary transition-colors">انگیزه اولیه: حل چالش‌های واقعی</h3>
                            </div>
                            <p className="text-base md:text-lg leading-corp-relaxed text-slate-500 font-light text-justify">
                                با حضور عملی در حوزه انرژی و مدیریت ایستگاه‌های سوخت CNG در سطح ملی،
                                <strong className="text-slate-900 font-bold mx-1">محدودیت‌های سیستم‌های سنتی</strong>
                                را به‌وضوح درک کردیم. این تجربه میدانی، جرقه‌ای شد برای خلق پلتفرمی که توانمندی‌های نهفته‌ی عصر
                                <span className="text-bms-primary font-medium mx-1 italic">هوش مصنوعی</span>
                                را در خدمت اتوماسیون واقعی قرار دهد.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={ { opacity: 0, x: 20 } }
                            whileInView={ { opacity: 1, x: 0 } }
                            viewport={ { once: true } }
                            transition={ { delay: 0.1 } }
                            className="group relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-premium"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 rounded-2xl bg-red-50 text-[#D72638] flex items-center justify-center border border-red-100 shadow-sm transition-transform group-hover:scale-110 group-hover:-rotate-3">
                                    <LuRocket className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 group-hover:text-bms-primary transition-colors">از MVP تا تأیید ملی</h3>
                            </div>
                            <p className="text-base md:text-lg leading-corp-relaxed text-slate-500 font-light text-justify">
                                با تمرکز بر مراکز آزمون دولتی، موفق به کسب
                                <strong className="text-slate-900 font-bold mx-1">گواهی‌های امنیتی پدافند غیرعامل</strong>
                                شدیم. اجرای موفق پایلوت واقعی در پیچیده‌ترین ایستگاه‌های کشور، مسیر را برای قراردادهای ملی و استقرار سراسری هموار ساخت.
                            </p>
                        </motion.div>
                    </div>

                    {/* --- MISSION COLUMN (The Future) --- */ }
                    <div className="space-y-8">
                        <motion.div
                            initial={ { opacity: 0, scale: 0.95 } }
                            whileInView={ { opacity: 1, scale: 1 } }
                            viewport={ { once: true } }
                            className="bg-[#020617] rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none [background-image:linear-gradient(to_bottom,transparent_50%,#fff_50%)] [background-size:100%_4px]" />
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center justify-between">
                                    <LuTarget className="w-10 h-10 text-[#F4C430]" />
                                    <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">Mission_Statement</span>
                                </div>
                                <h3 className="text-2xl font-black">رسالت ما</h3>
                                <p className="text-blue-100/70 leading-relaxed-corp font-light text-justify">
                                    محقق ساختن رویای انسان مدرن برای <strong className="text-white font-bold">دسترسی کامل به تمام جنبه‌های دارایی‌هایش</strong> — اعم از کسب‌وکار، صنعت یا ملک — در هر زمان و مکان با بالاترین سطح امنیت و پایداری.
                                </p>
                                <div className="pt-4 flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981] animate-pulse" />
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">System_Integrity_Verified</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={ { opacity: 0, scale: 0.95 } }
                            whileInView={ { opacity: 1, scale: 1 } }
                            viewport={ { once: true } }
                            transition={ { delay: 0.1 } }
                            className="bg-white rounded-[2.5rem] border-2 border-slate-100 p-10 shadow-sm group hover:border-bms-primary/20 transition-all duration-500"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black text-slate-950 group-hover:text-bms-primary transition-colors">فراتر از محدودیت‌ها</h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Scalable Mother Platform</p>
                                </div>
                                <LuHistory className="w-6 h-6 text-slate-200" />
                            </div>
                            <p className="text-sm md:text-base leading-corp-relaxed text-slate-500 font-light mb-8">
                                WIT صرفاً یک محصول نیست؛ یک <strong className="text-slate-950 font-bold">پلتفرم مادر</strong> است که برای هر صنعتی که به کارایی و راهکارهای هوشمند نیاز دارد، تخصصی‌سازی می‌شود.
                            </p>
                            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <span className="block text-[9px] font-black text-slate-400 uppercase">Live Projects</span>
                                        <span className="text-xs font-bold text-slate-700">ICTS + Clinicans</span>
                                    </div>
                                </div>
                                <Link
                                    href="/clinicans"
                                    className="group/link flex items-center gap-2 text-sm font-black text-bms-primary"
                                >
                                    <span>بررسی Clinicans</span>
                                    <LuArrowLeft className="w-4 h-4 transition-transform group-hover/link:-translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ===================== THE KINETIC TIMELINE ===================== */ }
                <div className="relative pt-12">
                    {/* The Progress Bus */ }
                    <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={ { width: 0 } }
                            whileInView={ { width: "100%" } }
                            viewport={ { once: true } }
                            transition={ { duration: 2, ease: "easeInOut" } }
                            className="h-full bg-gradient-to-l from-bms-primary via-[#D72638] to-[#F4C430]"
                        />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        { [
                            { year: "۲۰۲۱", title: "تأسیس BMS", desc: "ورود به دنیای فناوری", icon: LuBuilding2 },
                            { year: "۲۰۲۲", title: "پلتفرم مادر", desc: "طراحی هسته WIT", icon: LuBinary },
                            { year: "۲۰۲۳", title: "پایلوت موفق", desc: "ICTS در CNG", icon: LuActivity },
                            { year: "۲۰۲۴", title: "توسعه Clinicans", desc: "ورود به حوزه سلامت", icon: LuShieldCheck },
                        ].map( ( item, index ) => (
                            <motion.div
                                key={ index }
                                initial={ { opacity: 0, y: 20 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { delay: index * 0.15 } }
                                className="relative pt-8 group"
                            >
                                {/* Connector Node */ }
                                <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-slate-300 z-20 group-hover:border-bms-primary transition-colors" />

                                <div className="bg-white rounded-3xl border border-slate-100 p-6 text-center shadow-sm transition-all duration-500 hover:shadow-premium hover:-translate-y-1">
                                    <div className="mb-4 flex justify-center opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                        <item.icon className="w-8 h-8 text-bms-primary" />
                                    </div>
                                    <div className="text-2xl font-black text-slate-950 font-mono tracking-tighter">{ item.year }</div>
                                    <div className="text-sm font-black text-bms-primary mt-2">{ item.title }</div>
                                    <div className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{ item.desc }</div>
                                </div>
                            </motion.div>
                        ) ) }
                    </div>
                </div>
            </div>
        </section>
    );
}