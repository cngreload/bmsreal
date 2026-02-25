"use client";

import React from "react";
import { motion } from "framer-motion";
import
{
    LuSignature,
    LuLandmark,
    LuCoins,
    LuScale,
    LuGavel,
    LuFileCheck,
} from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 🏛️ NATIONAL PLAN SECTION - CORPORATE REFORMATION
 * Strategy: Institutional Authority & Editorial Hierarchy
 * Palette: Dark Blue (Authority), Red (Decree), Yellow (Economy)
 */

export default function NationalPlanSection ()
{
    return (
        <section
            id="national-plan"
            aria-labelledby="plan-heading"
            className="relative py-24 lg:py-32 bg-white overflow-hidden"
            dir="rtl"
        >
            {/* Background watermark for institutional feel */ }
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none opacity-[0.02] flex items-center justify-center">
                <LuScale className="w-[500px] h-[500px] text-bms-primary" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* ================= HEADER - Editorial Authority ================= */ }
                <header className="mb-20 max-w-4xl text-right space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-200 px-4 py-1.5 shadow-sm">
                        <LuGavel className="h-4 w-4 text-[#D72638]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                            Legal & Governance Framework
                        </span>
                    </div>

                    <h2
                        id="plan-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tightest"
                    >
                        الزام حاکمیتی و <br />
                        <span className="text-bms-primary text-transparent bg-clip-text bg-gradient-to-l from-bms-primary to-blue-700">
                            طرح ملی هوشمندسازی
                        </span>
                    </h2>

                    <p className="max-w-2xl text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                        تبیین جایگاه قانونی، مسئولیت‌های اجرایی و تحول فناورانه زیرساخت‌های انرژی بر اساس اسناد بالادستی کشور.
                    </p>
                </header>

                {/* ================= GOVERNANCE PILLARS ================= */ }
                <div className="grid gap-6 md:grid-cols-3">

                    {/* Pillar 1: Legal (Red Accent) */ }
                    <GovernanceCard
                        tone="red"
                        icon={ LuSignature }
                        title="مبنای قانونی و الزام حاکمیتی"
                        label="Decree 138"
                    >
                        بر اساس مصوبه هیئت وزیران در <strong>اسفند ۱۳۹۷</strong> و به استناد <strong>اصل ۱۳۸ قانون اساسی</strong>، هوشمندسازی جایگاه‌های عرضه سوخت CNG به‌عنوان یک <strong className="text-slate-900">تکلیف الزام‌آور ملی</strong> تعریف شده است. این مصوبه، دستگاه‌های اجرایی ذی‌ربط را موظف به ایجاد زیرساخت‌های فنی و نظارتی می‌کند.
                    </GovernanceCard>

                    {/* Pillar 2: Institutional (Blue Accent) */ }
                    <GovernanceCard
                        tone="blue"
                        icon={ LuLandmark }
                        title="تکلیف اجرایی و مسئولیت نهادی"
                        label="National Safety"
                    >
                        بر اساس این چارچوب، وزارت نفت موظف است بستر اتصال امن و پایدار جایگاه‌های CNG به <strong className="text-bms-primary">سامانه ملی سیمفا</strong> را فراهم کند؛ با هدف <strong>پیشگیری از سوخت‌گیری خودروهای فاقد معاینه فنی</strong>، کاهش ریسک‌های ایمنی و اعمال نظارت هوشمند بر شبکه توزیع.
                    </GovernanceCard>

                    {/* Pillar 3: Economic (Yellow Accent) */ }
                    <GovernanceCard
                        tone="yellow"
                        icon={ LuCoins }
                        title="مدل تأمین مالی و توجیه اقتصادی"
                        label="Fiscal Strategy"
                    >
                        در این طرح، سازوکار تأمین منابع مالی از طریق <strong className="text-slate-900">اصلاح ساختار نرخ سوخت</strong> پیش‌بینی شده است؛ رویکردی که هزینه‌های هوشمندسازی را از یک هزینه مقطعی، به <strong>سرمایه‌گذاری پایدار در ایمنی و بهره‌وری</strong> در سطح کلان انرژی تبدیل می‌کند.
                    </GovernanceCard>
                </div>

                {/* ================= STRATEGIC SUMMARY - The "Seal" Block ================= */ }
                <motion.div
                    initial={ { opacity: 0, y: 20 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    viewport={ { once: true } }
                    className="mt-16 rounded-[2.5rem] bg-slate-50 border border-slate-200 p-8 md:p-12 relative overflow-hidden group hover:border-bms-primary/20 transition-colors"
                >
                    {/* Decorative HUD Corner */ }
                    <div className="absolute top-0 left-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <LuFileCheck className="w-20 h-20 text-bms-primary" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <div className="h-1 w-12 bg-[#F4C430] mx-auto rounded-full" />
                        <p className="text-lg md:text-2xl leading-corp-relaxed font-medium text-slate-700">
                            هوشمندسازی جایگاه‌های CNG یک پروژه انتخابی نیست؛ بلکه سازوکاری اجرایی برای تحقق هم‌زمان
                            <span className="text-bms-primary font-black mx-2 text-xl md:text-3xl">امنیت انرژی</span>،
                            <span className="text-[#D72638] font-black mx-2 text-xl md:text-3xl">ایمنی عمومی</span> و
                            <span className="text-slate-900 font-black mx-2 text-xl md:text-3xl">کارآمدی اقتصادی</span>
                            است.
                        </p>
                        <div className="pt-4 flex justify-center gap-6 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                            <span>Auth: Cabinet of Iran</span>
                            <span>•</span>
                            <span>Ref: 153282/T56214H</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ================= CARD COMPONENT ================= */
interface CardProps
{
    icon: React.ElementType;
    title: string;
    label: string;
    tone: "blue" | "red" | "yellow";
    children: React.ReactNode;
}

function GovernanceCard ( { icon: Icon, title, label, tone, children }: CardProps )
{
    const tones = {
        blue: "text-bms-primary border-bms-primary/20 bg-blue-50",
        red: "text-[#D72638] border-[#D72638]/20 bg-red-50",
        yellow: "text-[#F4C430] border-[#F4C430]/20 bg-amber-50",
    };

    const accentColors = {
        blue: "bg-bms-primary",
        red: "bg-[#D72638]",
        yellow: "bg-[#F4C430]",
    };

    return (
        <motion.article
            whileHover={ { y: -5 } }
            className="group relative h-full flex flex-col rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-sm transition-all duration-500 hover:shadow-premium hover:border-slate-200"
        >
            {/* Top Functional Label */ }
            <div className="flex justify-between items-start mb-8">
                <div className={ cn( "flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner transition-transform group-hover:scale-110", tones[ tone ] ) }>
                    <Icon className="h-7 w-7" />
                </div>
                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest pt-2">
                    { label }
                </span>
            </div>

            <div className="space-y-4 flex-1">
                <h3 className="text-xl font-black text-slate-900 leading-tight">
                    { title }
                </h3>
                {/* Thin Accent line */ }
                <div className={ cn( "h-0.5 w-8 rounded-full", accentColors[ tone ] ) } />

                <p className="text-sm md:text-base leading-corp-relaxed text-slate-500 text-justify font-light">
                    { children }
                </p>
            </div>

            {/* Bottom Status Dot */ }
            <div className="mt-8 flex justify-end">
                <div className={ cn( "h-1 w-1 rounded-full opacity-20 group-hover:opacity-100 transition-opacity", accentColors[ tone ] ) } />
            </div>
        </motion.article>
    );
}