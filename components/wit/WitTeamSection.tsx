"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import
{
    LuUsers,
    LuAward,
    LuBriefcase,
    LuGraduationCap,
    LuLinkedin,
    LuBinary,
    LuActivity,
    LuShieldCheck,
    LuArrowLeft,
    LuFingerprint
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 👥 WIT TEAM SECTION - EXECUTIVE REFORMATION
 * Strategy: Strategic Human Capital Audit / Expert Node Grid
 * Palette: BMS Navy (#145C98), Industrial Red (#D72638), Intel Yellow (#F4C430)
 */

const leadershipTeam = [
    {
        name: "محمد رضایی",
        role: "مدیرعامل و بنیان‌گذار",
        expertise: "کارآفرینی فناوری، مدیریت عملیات",
        experience: "۱۵+ سال تجربه در صنعت انرژی و فناوری",
        education: "MBA از دانشگاه تهران",
        linkedin: "https://linkedin.com",
        highlight: true,
        code: "EXEC_L1_FOUNDER"
    },
    {
        name: "علی محمدی",
        role: "مدیر فنی",
        expertise: "معماری سیستم‌های صنعتی، IoT",
        experience: "۱۲+ سال در پروژه‌های ملی اتوماسیون",
        education: "کارشناسی ارشد مهندسی کامپیوتر - شریف",
        linkedin: "https://linkedin.com",
        highlight: false,
        code: "EXEC_L1_TECH"
    },
    {
        name: "فاطمه کریمی",
        role: "مدیر محصول",
        expertise: "تحلیل بازار، توسعه محصول",
        experience: "۱۰+ سال در استارتاپ‌های فناوری",
        education: "کارشناسی ارشد مدیریت فناوری",
        linkedin: "https://linkedin.com",
        highlight: false,
        code: "EXEC_L1_PROD"
    },
    {
        name: "حسین احمدی",
        role: "مدیر مالی و سرمایه‌گذاری",
        expertise: "تأمین مالی، مدل‌سازی مالی",
        experience: "۸+ سال در امور مالی شرکتی",
        education: "CFA Level III",
        linkedin: "https://linkedin.com",
        highlight: false,
        code: "EXEC_L1_FIN"
    }
];

const advisors = [
    {
        name: "دکتر سعید نجفی",
        role: "مشاور فنی",
        expertise: "هوش مصنوعی و تحلیل داده",
        position: "استاد دانشگاه صنعتی شریف",
        company: "مشاور چند شرکت فناوری پیشرو"
    },
    {
        name: "مهندس رضا محمودی",
        role: "مشاور صنعتی",
        expertise: "اتوماسیون صنعتی",
        position: "مشاور ارشد صنعت نفت و گاز",
        company: "سابقه ۲۵ سال مدیریت پروژه"
    },
    {
        name: "دکتر مریم حسینی",
        role: "مشاور سلامت",
        expertise: "سیستم‌های سلامت دیجیتال",
        position: "مدیر سابق بیمارستان تخصصی",
        company: "مشاور وزارت بهداشت"
    }
];

const teamStats = [
    { label: "تیم فنی", value: "۶۵%", desc: "مهندسان سخت‌افزار و نرم‌افزار", icon: LuBinary },
    { label: "تجربه میانگین", value: "۸ سال", desc: "تجربه حرفه‌ای تیم", icon: LuActivity },
    { label: "مدارک پیشرفته", value: "۴۰%", desc: "کارشناسی ارشد و بالاتر", icon: LuGraduationCap },
    { label: "تعهد سهام", value: "۲۵%", desc: "سهام تیم بنیان‌گذار", icon: LuShieldCheck }
];

export default function WitTeamSection ()
{
    return (
        <section
            id="team"
            className="relative py-24 lg:py-40 bg-white overflow-hidden"
            aria-labelledby="team-heading"
            dir="rtl"
        >
            {/* 🧩 ARCHITECTURAL BACKGROUND */ }
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] [background-image:radial-gradient(#145C98_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* ===================== HEADER - Editorial Standard ===================== */ }
                <header className="mb-20 text-center lg:text-right space-y-6 max-w-4xl lg:mr-0 mr-auto">
                    <motion.div
                        initial={ { opacity: 0, x: 20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="inline-flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-200 px-4 py-1.5 shadow-sm"
                    >
                        <LuUsers className="h-4 w-4 text-bms-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 font-mono">
                            Human_Capital_Dossier / BMS_Co
                        </span>
                    </motion.div>

                    <h2
                        id="team-heading"
                        className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-950 leading-[1.1] tracking-tightest"
                    >
                        سرمایه انسانی؛ <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#145C98] via-indigo-600 to-[#D72638]">
                            مهم‌ترین دارایی ما
                        </span>
                    </h2>

                    <p className="max-w-3xl text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                        ترکیبی از تجربه صنعتی عمیق و نخبگان برتر فناوری که در تلاقی مهندسی و مدیریت، تحول در زیرساخت‌های ملی را محقق کرده‌اند.
                    </p>
                </header>

                {/* ===================== STATS BAR - Machined HUD ===================== */ }
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    { teamStats.map( ( stat, idx ) => (
                        <motion.div
                            key={ idx }
                            initial={ { opacity: 0, y: 10 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            viewport={ { once: true } }
                            transition={ { delay: idx * 0.1 } }
                            className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center group hover:bg-white hover:shadow-premium transition-all duration-500"
                        >
                            <stat.icon className="w-5 h-5 text-slate-300 group-hover:text-bms-primary mb-4 transition-colors" />
                            <div className="text-3xl font-black text-slate-950 tracking-tighter">{ stat.value }</div>
                            <div className="text-xs font-black text-bms-primary uppercase tracking-widest mt-1">{ stat.label }</div>
                            <div className="text-[10px] text-slate-400 mt-2 font-medium">{ stat.desc }</div>
                        </motion.div>
                    ) ) }
                </div>

                {/* ===================== LEADERSHIP GRID ===================== */ }
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-1 bg-slate-100" />
                        <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.4em] flex items-center gap-3">
                            <LuBriefcase className="w-4 h-4 text-bms-primary" />
                            Leadership_Core
                        </h3>
                        <div className="h-px flex-1 bg-slate-100" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        { leadershipTeam.map( ( member, idx ) => (
                            <motion.article
                                key={ idx }
                                initial={ { opacity: 0, y: 20 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.6, delay: idx * 0.1 } }
                                className={ cn(
                                    "group relative rounded-[2.5rem] overflow-hidden bg-white border transition-all duration-500 hover:shadow-premium hover:-translate-y-1",
                                    member.highlight ? 'border-[#D72638]/20 ring-1 ring-[#D72638]/5' : 'border-slate-100'
                                ) }
                            >
                                {/* HUD Metadata Overlay */ }
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="font-mono text-[8px] font-black text-slate-400 bg-white/80 backdrop-blur-md px-2 py-1 rounded border border-slate-100 uppercase tracking-widest">
                                        { member.code }
                                    </span>
                                </div>

                                {/* Profile Visual */ }
                                <div className="h-56 bg-slate-100 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-1000">
                                        <LuUsers className="w-32 h-32 text-slate-300" />
                                    </div>
                                    {/* Rim light effect */ }
                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/20" />
                                </div>

                                <div className="p-6 space-y-6">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-black text-slate-950 text-lg leading-tight group-hover:text-bms-primary transition-colors">{ member.name }</h4>
                                            <div className="text-xs font-bold text-bms-primary mt-1">{ member.role }</div>
                                        </div>
                                        <div className="flex gap-2 pt-1">
                                            <a href={ member.linkedin } className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:text-bms-primary hover:bg-white transition-all shadow-sm">
                                                <LuLinkedin className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-4 border-t border-slate-50">
                                        <div className="flex items-start gap-3">
                                            <LuAward className="h-4 w-4 text-[#F4C430] mt-0.5" />
                                            <span className="text-xs text-slate-600 leading-relaxed font-medium">{ member.expertise }</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <LuBriefcase className="h-4 w-4 text-slate-400 mt-0.5" />
                                            <span className="text-xs text-slate-600 leading-relaxed font-light">{ member.experience }</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <LuGraduationCap className="h-4 w-4 text-slate-400 mt-0.5" />
                                            <span className="text-xs text-slate-600 leading-relaxed font-light">{ member.education }</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ) ) }
                    </div>
                </div>

                {/* ===================== ADVISORY BOARD - High Precision Grid ===================== */ }
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.4em] flex items-center gap-3">
                            <LuAward className="w-4 h-4 text-[#F4C430]" />
                            Advisory_Council
                        </h3>
                        <div className="h-px flex-1 bg-slate-100" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        { advisors.map( ( advisor, idx ) => (
                            <motion.div
                                key={ idx }
                                whileHover={ { y: -5 } }
                                className="bg-slate-50/50 border border-slate-100 rounded-[2rem] p-8 group hover:bg-white hover:shadow-premium transition-all duration-500"
                            >
                                <div className="flex items-start gap-5 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                        <span className="text-3xl font-black text-slate-200 group-hover:text-[#F4C430] transition-colors font-mono">
                                            { advisor.name.split( ' ' )[ 0 ].charAt( 0 ) }
                                        </span>
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="font-black text-slate-950 text-base">{ advisor.name }</h4>
                                        <div className="text-[10px] font-black text-[#F4C430] uppercase tracking-widest mt-1">{ advisor.role }</div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Specialization</span>
                                        <p className="text-xs text-slate-600 font-bold">{ advisor.expertise }</p>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Current Designation</span>
                                        <p className="text-xs text-slate-500 font-light">{ advisor.position }</p>
                                    </div>
                                </div>
                            </motion.div>
                        ) ) }
                    </div>
                </div>

                {/* ===================== CULTURE & COMMITMENT - The Integrity Seal ===================== */ }
                <div className="relative overflow-hidden rounded-[3rem] bg-slate-950 p-1 shadow-2xl">
                    <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_bottom,transparent_50%,#fff_50%)] [background-size:100%_4px]" />

                    <div className="relative rounded-[2.95rem] bg-[#020617] p-8 md:p-14 lg:p-20">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shadow-inner">
                                        <LuFingerprint className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white">فرهنگ تیم و تعهد سازمانی</h3>
                                </div>

                                <ul className="space-y-4">
                                    { [
                                        "تعهد بلندمدت به موفقیت استراتژیک شرکت",
                                        "فرهنگ مبتنی بر نوآوری صنعتی و یادگیری مستمر",
                                        "تمرکز بر ایجاد ارزش پایدار برای سهامداران",
                                        "شفافیت مطلق در گزارش‌دهی و تصمیم‌گیری"
                                    ].map( ( item, idx ) => (
                                        <li key={ idx } className="flex items-center gap-4 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] group-hover:scale-150 transition-transform" />
                                            <span className="text-blue-100/70 text-base font-light">{ item }</span>
                                        </li>
                                    ) ) }
                                </ul>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl">
                                <h4 className="font-black text-white text-lg mb-8 flex items-center gap-3">
                                    <LuShieldCheck className="w-5 h-5 text-emerald-400" />
                                    تعهدنامه تیم بنیان‌گذار
                                </h4>
                                <div className="space-y-6">
                                    <CommitmentBar label="تعهد سهام تیم" value="۲۵%" progress={ 25 } color="bg-bms-primary" />
                                    <CommitmentBar label="وستینگ ۴ ساله" value="۱۰۰%" progress={ 100 } color="bg-emerald-500" />
                                    <CommitmentBar label="کلاف گلدن هنداگ" value="۱ سال" progress={ 25 } color="bg-[#F4C430]" />
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                                    <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-[0.4em]">Audit_Locked_Governance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===================== FINAL CTA ===================== */ }
                <div className="mt-16 text-center space-y-6">
                    <Link
                        href="/contact?type=team-meeting"
                        className="group relative inline-flex items-center gap-4 bg-bms-primary text-white px-10 py-5 rounded-2xl text-sm font-black shadow-2xl shadow-bms-primary/20 transition-all hover:-translate-y-1 hover:bg-blue-600"
                    >
                        <LuUsers className="h-5 w-5" />
                        <span>ملاقات با تیم اجرایی</span>
                        <LuArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    </Link>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        Scheduled Private Investor Sessions Available
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ================= COMPONENT: COMMITMENT BAR ================= */
function CommitmentBar ( { label, value, progress, color }: { label: string, value: string, progress: number, color: string; } )
{
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400 uppercase tracking-wider">{ label }</span>
                <span className="text-white">{ value }</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden p-[1px]">
                <motion.div
                    initial={ { width: 0 } }
                    whileInView={ { width: `${ progress }%` } }
                    viewport={ { once: true } }
                    transition={ { duration: 1.5, ease: "circOut" } }
                    className={ cn( "h-full rounded-full", color ) }
                />
            </div>
        </div>
    );
}