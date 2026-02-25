"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuLock,
    LuFingerprint,
    LuDatabaseBackup,
    LuEyeOff,
    LuShieldCheck,
    LuLockKeyhole,
    LuBinary,
    LuActivity,
    LuZap
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 🔒 CLINICANS SECURITY SECTION - REFORMED
 * Strategy: "Encrypted Vault" UI / Technical Trust Architecture
 * Theme: Medical White + Corporate Navy + Security Teal
 */

const securityBlocks = [
    {
        id: "encryption",
        capability: "End-to-End Encryption",
        title: "حفاظت و یکپارچگی داده‌ها",
        icon: LuLock,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "group-hover:border-blue-200",
        body: "اطلاعات درمانی و عملیاتی در کلینیکانز با معماری رمزنگاری‌شده محافظت می‌شوند تا از هرگونه دسترسی غیرمجاز، تغییر یا افشای ناخواسته جلوگیری شود و یکپارچگی داده‌ها در تمام چرخه استفاده حفظ گردد.",
    },
    {
        id: "rbac",
        capability: "Role-Based Access Control",
        title: "حاکمیت دسترسی مبتنی بر نقش",
        icon: LuFingerprint,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "group-hover:border-indigo-200",
        body: "کلینیکانز بر اساس نقش‌های واقعی سازمانی طراحی شده است. هر کاربر تنها به بخشی از اکوسیستم دسترسی دارد که با مسئولیت حرفه‌ای او هم‌راستاست؛ نه کمتر، نه بیشتر.",
    },
    {
        id: "backup",
        capability: "Disaster Recovery",
        title: "تداوم عملیاتی و بازیابی اطلاعات",
        icon: LuDatabaseBackup,
        color: "text-teal-600",
        bg: "bg-teal-50",
        border: "group-hover:border-teal-200",
        body: "پایداری اکوسیستم کلینیکانز به معنای آمادگی در برابر سناریوهای پیش‌بینی‌نشده است. سازوکارهای پشتیبان‌گیری و بازیابی، تداوم فعالیت کلینیک را حتی در شرایط بحرانی تضمین می‌کنند.",
    },
    {
        id: "privacy",
        capability: "GDPR & HIPAA Alignment",
        title: "مالکیت و حریم خصوصی اطلاعات",
        icon: LuEyeOff,
        color: "text-slate-600",
        bg: "bg-slate-100",
        border: "group-hover:border-slate-300",
        body: "داده‌های بیماران بخشی از دارایی‌های کلینیک محسوب می‌شوند. کلینیکانز هیچ استفاده ثانویه‌ای از اطلاعات انجام نمی‌دهد و تمام دسترسی‌ها شفاف، قابل ردیابی و تحت حاکمیت کامل مجموعه درمانی است.",
    },
];

export default function ClinicansSecuritySection ()
{
    return (
        <section
            id="clinicans-security"
            className="relative py-24 lg:py-40 bg-white overflow-hidden"
            aria-labelledby="security-heading"
            dir="rtl"
        >
            {/* 🧩 IMMERSIVE HUD BACKGROUND */ }
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] [background-image:linear-gradient(to_right,#145C98_1px,transparent_1px),linear-gradient(to_bottom,#145C98_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(20,92,152,0.03),transparent_50%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
                {/* ===================== HEADER - Editorial Standard ===================== */ }
                <header className="mb-20 text-right space-y-6 max-w-4xl">
                    <motion.div
                        initial={ { opacity: 0, x: 20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="inline-flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-200 px-4 py-1.5 shadow-sm"
                    >
                        <LuShieldCheck className="h-4 w-4 text-emerald-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 font-mono">
                            Security_Protocol / Level_5
                        </span>
                    </motion.div>

                    <h2
                        id="security-heading"
                        className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-950 leading-[1.1] tracking-tightest"
                    >
                        امنیت، حریم خصوصی و <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#145C98] via-[#14B8A6] to-emerald-500">
                            اعتماد نفوذناپذیر
                        </span>
                    </h2>

                    <p className="max-w-3xl text-lg md:text-xl text-slate-500 font-light leading-relaxed text-justify">
                        در اکوسیستم سلامت، امنیت یک قابلیت نیست؛ یک پیش‌فرض است. کلینیکانز امنیت را در لایه‌ی معماری خود تعبیه کرده است تا محرمانگی داده‌های درمانی مراجعین شما خدشه‌ناپذیر بماند.
                    </p>
                </header>

                {/* ===================== VAULT GRID ===================== */ }
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    { securityBlocks.map( ( block, index ) =>
                    {
                        const Icon = block.icon;
                        return (
                            <motion.article
                                key={ block.id }
                                initial={ { opacity: 0, y: 30 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.6, delay: index * 0.1 } }
                                className={ cn(
                                    "group relative flex flex-col p-8 lg:p-12 rounded-[3rem] bg-slate-50/50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-premium hover:border-bms-primary/20",
                                    block.border
                                ) }
                            >
                                {/* HUD Metadata */ }
                                <div className="absolute top-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <LuBinary className="w-5 h-5 text-slate-200" />
                                </div>

                                <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                                    <div className={ cn(
                                        "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                                        block.bg, block.color
                                    ) }>
                                        <Icon className="h-8 w-8" />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-black text-slate-900 group-hover:text-bms-primary transition-colors">
                                            { block.title }
                                        </h3>
                                        <span className="inline-block font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-white/80 px-2 py-0.5 rounded border border-slate-100">
                                            { block.capability }
                                        </span>
                                    </div>
                                </div>

                                <p className="text-sm md:text-base leading-corp-relaxed text-slate-500 text-justify font-light flex-1">
                                    { block.body }
                                </p>

                                {/* Status Indicator */ }
                                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] font-mono font-bold text-slate-400">ACTIVE_PROTECTION</span>
                                    </div>
                                    <LuZap className="w-4 h-4 text-[#F4C430] opacity-20 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.article>
                        );
                    } ) }
                </div>

                {/* ===================== THE SEAL OF TRUST ===================== */ }
                <div className="mt-24 lg:mt-36 flex justify-center">
                    <motion.aside
                        initial={ { opacity: 0, scale: 0.95 } }
                        whileInView={ { opacity: 1, scale: 1 } }
                        viewport={ { once: true } }
                        className="relative overflow-hidden rounded-[3.5rem] bg-slate-900 p-1 shadow-2xl max-w-5xl w-full mx-4"
                    >
                        {/* Visual Texture */ }
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none [background-image:linear-gradient(to_bottom,transparent_50%,#fff_50%)] [background-size:100%_4px]" />

                        <div className="relative flex flex-col md:flex-row items-center gap-10 rounded-[3.4rem] bg-[#020617] px-10 py-12 md:px-16">

                            {/* Visual Anchor */ }
                            <div className="flex-shrink-0 relative group">
                                <div className="absolute inset-0 bg-bms-primary/40 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all duration-700" />
                                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white/5 text-emerald-400 shadow-2xl border border-white/10 backdrop-blur-md">
                                    <LuLockKeyhole className="h-12 w-12 animate-float" />
                                </div>
                            </div>

                            {/* Content */ }
                            <div className="flex-1 text-center md:text-right space-y-5">
                                <div className="flex items-center gap-4 justify-center md:justify-start">
                                    <h4 className="text-2xl md:text-3xl font-black text-white">امنیت به‌مثابه معماری</h4>
                                    <div className="hidden md:block h-px flex-1 bg-gradient-to-l from-white/20 to-transparent" />
                                </div>

                                <p className="text-base md:text-lg text-blue-100/70 leading-relaxed-corp font-light text-justify">
                                    در <strong className="text-white font-black mx-1 underline decoration-emerald-500/30 underline-offset-8">کلینیکانز</strong>،
                                    امنیت نتیجه‌ی چسباندن ابزارهای جانبی نیست؛ بلکه محصول <span className="text-[#F4C430] font-medium italic">تصمیمات بنیادین معماری</span> است.
                                    این رویکرد، پایداری و اعتماد بلندمدت میان مرکز درمانی، تیم درمان و بیماران را تضمین می‌کند.
                                </p>

                                <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-6 opacity-60">
                                    <div className="flex items-center gap-2">
                                        <LuActivity className="w-4 h-4 text-emerald-400" />
                                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">ISO_CERTIFIED</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LuActivity className="w-4 h-4 text-emerald-400" />
                                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">HIPAA_COMPLIANT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                </div>

            </div>
        </section>
    );
}