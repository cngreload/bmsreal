"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuFlame, LuDatabase, LuLink, LuActivity, LuBinary, LuTarget } from "react-icons/lu";

/**
 * 🌍 NATIONAL IMPORTANCE SECTION - CORPORATE REFORMATION
 * Strategy: Strategic Dual Narrative & System Node Bridge
 * Spacing: Tightened Vertical Rhythm (py-12 lg:py-20)
 */

export default function NationalImportanceSection ()
{
    return (
        <section
            id="national-importance"
            aria-labelledby="importance-heading"
            className="relative py-12 lg:py-20 bg-white overflow-hidden"
            dir="rtl"
        >
            {/* Background HUD Accents */ }
            <div className="absolute top-0 left-0 p-12 opacity-[0.02] pointer-events-none hidden lg:block">
                <LuTarget className="w-80 h-80 text-bms-primary" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* ================= HEADER - National Blueprint Style ================= */ }
                <header className="mb-12 text-right space-y-4 max-w-4xl">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 px-3 py-1 shadow-sm">
                        <LuActivity className="h-3.5 w-3.5 text-[#D72638]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                            National_Strategic_Framework
                        </span>
                    </div>

                    <h2
                        id="importance-heading"
                        className="text-3xl md:text-5xl font-black text-slate-950 leading-tight tracking-tightest"
                    >
                        انرژی به‌عنوان <span className="text-[#F4C430]">سرمایه ملی</span>، <br />
                        داده به‌عنوان <span className="text-bms-primary">قدرت راهبردی</span>
                    </h2>
                </header>

                {/* ================= DUAL NARRATIVE GRID ================= */ }
                <div className="relative grid gap-6 lg:gap-8 md:grid-cols-2 items-stretch">

                    {/* ENERGY COLUMN - Yellow Intelligence Theme */ }
                    <motion.article
                        initial={ { opacity: 0, x: 20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="group relative rounded-[2.5rem] bg-amber-50/40 border border-amber-100 p-8 lg:p-12 transition-all duration-500 hover:bg-white hover:shadow-premium hover:border-[#F4C430]/30"
                    >
                        {/* Ghost Icon Background */ }
                        <LuFlame className="absolute top-10 left-10 h-32 w-32 text-[#F4C430] opacity-[0.04] transition-opacity group-hover:opacity-10" />

                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#F4C430] border border-amber-100 shadow-sm transition-transform group-hover:scale-110">
                                    <LuFlame className="h-7 w-7" />
                                </div>
                                <span className="font-mono text-[8px] font-bold text-slate-400 uppercase tracking-widest bg-white/50 px-2 py-0.5 rounded border border-amber-100">
                                    ASSET_CLASS: ENERGY
                                </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-bms-primary transition-colors">
                                امنیت و تاب‌آوری سبد سوخت کشور
                            </h3>

                            <p className="text-sm md:text-base leading-corp-relaxed text-slate-600 text-justify font-light">
                                CNG در راهبرد انرژی کشور، مؤلفه‌ای کلیدی برای
                                <strong className="mx-1 font-bold text-slate-900 underline decoration-[#F4C430]/30 underline-offset-4">کاهش وابستگی به بنزین</strong>،
                                مدیریت ناترازی انرژی و افزایش تاب‌آوری شبکه توزیع سوخت است. بدون پایش هوشمند و بلادرنگ، این شبکه در برابر شوک‌های عملیاتی آسیب‌پذیر می‌ماند. ICTS بستر کنترل‌پذیری و حکمرانی مؤثر بر این زیرساخت حیاتی را فراهم می‌کند.
                            </p>
                        </div>
                    </motion.article>

                    {/* DATA COLUMN - Corporate Blue Theme */ }
                    <motion.article
                        initial={ { opacity: 0, x: -20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="group relative rounded-[2.5rem] bg-blue-50/40 border border-blue-100 p-8 lg:p-12 transition-all duration-500 hover:bg-white hover:shadow-premium hover:border-bms-primary/30"
                    >
                        {/* Ghost Icon Background */ }
                        <LuDatabase className="absolute top-10 left-10 h-32 w-32 text-bms-primary opacity-[0.04] transition-opacity group-hover:opacity-10" />

                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-bms-primary border border-blue-100 shadow-sm transition-transform group-hover:scale-110">
                                    <LuDatabase className="h-7 w-7" />
                                </div>
                                <span className="font-mono text-[8px] font-bold text-slate-400 uppercase tracking-widest bg-white/50 px-2 py-0.5 rounded border border-blue-100">
                                    ASSET_CLASS: DATA
                                </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-bms-primary transition-colors">
                                حکمرانی داده در مقیاس ملی
                            </h3>

                            <p className="text-sm md:text-base leading-corp-relaxed text-slate-600 text-justify font-light">
                                داده‌های تولیدشده در جایگاه‌ها یک
                                <strong className="mx-1 font-bold text-slate-900 underline decoration-bms-primary/30 underline-offset-4">دارایی راهبردی ملی</strong>
                                هستند. بدون یک سامانه بومی و یکپارچه، این داده‌ها هرگز به بینش سیاست‌گذارانه تبدیل نمی‌شوند. ICTS داده خام را به ابزار تصمیم‌سازی، پیش‌بینی و حکمرانی هوشمند انرژی تبدیل کرده و قدرت حاکمیت را در لایه‌ی نظارتی تقویت می‌کند.
                            </p>
                        </div>
                    </motion.article>
                </div>

                {/* ================= CORE BRIDGE - System Node UI ================= */ }
                <div className="mt-12 flex justify-center">
                    <motion.div
                        initial={ { opacity: 0, scale: 0.95 } }
                        whileInView={ { opacity: 1, scale: 1 } }
                        viewport={ { once: true } }
                        className="relative w-full max-w-3xl rounded-3xl bg-slate-900 p-8 md:p-10 shadow-2xl overflow-hidden group"
                    >
                        {/* Background Scan Lines */ }
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none [background-image:linear-gradient(to_bottom,transparent_50%,#fff_50%)] [background-size:100%_4px]" />

                        <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border-4 border-slate-800 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-transform group-hover:rotate-180 duration-700">
                                <LuLink className="h-5 w-5 text-bms-primary" />
                            </div>

                            <p className="text-sm md:text-lg leading-relaxed text-slate-200 font-medium">
                                <span className="text-emerald-400 font-black ml-1 tracking-widest">ICTS</span>
                                حلقه اتصال میان «زیرساخت فیزیکی انرژی» و «حکمرانی داده‌محور» است؛
                                جایی که ایمنی، بهره‌وری و تصمیم‌سازی ملی در تلاقی تکنولوژی به هم می‌رسند.
                            </p>

                            <div className="flex items-center gap-6 pt-2 opacity-40">
                                <LuBinary className="w-4 h-4 text-white" />
                                <div className="h-px w-12 bg-white" />
                                <span className="text-[9px] font-mono font-bold text-white uppercase tracking-[0.4em]">Integrated_Bridge_Active</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}