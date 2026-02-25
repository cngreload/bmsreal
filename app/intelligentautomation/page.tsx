"use client";

import { useRef } from "react";
import Script from "next/script";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { LuChevronLeft, LuHouse, LuArrowLeft, LuZap, LuCpu } from "react-icons/lu";

/* Layout & Navigation Components */
import { Section } from "@/components/layout/Section";
import WitMacosDock from "@/components/wit/WitMacosDock";

/* Section Components */
import WitHeroSection from "@/components/wit/WitHeroSection";
import WitWhatIsSection from "@/components/wit/WitWhatIsSection";
import WitStrategicAdvantageSection from "@/components/wit/WitStrategicAdvantageSection";
import WitArchitectureSection from "@/components/wit/WitArchitectureSection";
import WitBmsStorySection from "@/components/wit/WitBmsStorySection";
import WitDomainsSection from "@/components/wit/WitDomainsSection";
import WitImpactSection from "@/components/wit/WitImpactSection";

/**
 * 🌐 WIT PLATFORM - ARCHITECTURAL REFORMATION
 * Award-Winning UI Strategy: Industrial Technical Dossier
 * Navigation: Universal Responsive macOS Dock
 */

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WIT - Worldwide Intelligent Technology",
    description:
        "پلتفرم هسته‌ای هوشمند برای مدیریت و کنترل یکپارچه دارایی‌های حیاتی صنعتی و سلامت.",
    brand: {
        "@type": "Organization",
        name: "Barman Mehvar Spadana",
    },
};

export default function IntelligentAutomationPage ()
{
    const containerRef = useRef<HTMLDivElement>( null );

    const { scrollYProgress } = useScroll( {
        target: containerRef,
        offset: [ "start start", "end end" ],
    } );

    const smoothProgress = useSpring( scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    } );

    const mainScale = useTransform( smoothProgress, [ 0.8, 1 ], [ 1, 0.98 ] );

    return (
        <main
            ref={ containerRef }
            className="flex w-full flex-col overflow-visible bg-white antialiased"
            dir="rtl"
        >
            <Script
                id="json-ld-wit-main"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            {/* ===================== CHAPTER 0: BREADCRUMB ===================== */ }
            <nav
                className="sticky top-0 z-[45] w-full border-b border-slate-100 bg-white/80 backdrop-blur-md"
                aria-label="Breadcrumb Navigation"
            >
                <div className="container mx-auto flex items-center justify-between py-4">
                    <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <Link
                            href="/"
                            className="flex items-center gap-1.5 transition-colors hover:text-bms-primary"
                            aria-label="بازگشت به خانه"
                        >
                            <LuHouse className="h-3 w-3 shrink-0" aria-hidden="true" />
                            <span>خانه</span>
                        </Link>
                        <LuChevronLeft className="h-3 w-3 shrink-0 opacity-30" aria-hidden="true" />
                        <span className="text-bms-primary">WIT Intelligence Platform</span>
                    </div>
                    <div className="hidden items-center gap-3 md:flex">
                        <div
                            className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"
                            aria-hidden="true"
                        />
                        <span className="font-mono text-[9px] font-bold uppercase tracking-tighter text-slate-500">
                            System_Status: Stable_v4.2
                        </span>
                    </div>
                </div>
            </nav>

            {/* ===================== CHAPTER 1: HERO ===================== */ }
            <Section variant="white" spacing="none" id="hero" className="pb-0 pt-8 md:pt-12">
                <div className="flex flex-col">
                    <WitHeroSection />

                    <motion.div
                        initial={ { y: 40, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        viewport={ { once: true, margin: "-50px" } }
                        transition={ { duration: 0.8, ease: [ 0.22, 1, 0.36, 1 ] } }
                        className="container relative z-30 mx-auto -mt-20 w-full max-w-5xl md:-mt-32"
                    >
                        <div className="flex flex-col items-center justify-between gap-8 rounded-[2.5rem] border border-slate-100 bg-white/90 p-6 shadow-2xl ring-1 ring-black/5 backdrop-blur-2xl md:flex-row md:p-10">
                            <div className="flex items-center gap-5">
                                <div
                                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-bms-primary shadow-inner"
                                    aria-hidden="true"
                                >
                                    <LuCpu className="h-7 w-7" />
                                </div>
                                <div className="space-y-1 text-right">
                                    <span className="mb-1 block font-mono text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        Core Sovereignty
                                    </span>
                                    <h3 className="text-lg font-black leading-tight text-slate-900 md:text-xl">
                                        هسته‌ی مرکزی پردازش داده
                                    </h3>
                                </div>
                            </div>
                            <div className="hidden h-12 w-px bg-slate-100 lg:block" aria-hidden="true" />
                            <div className="flex w-full items-center justify-around gap-4 md:w-auto md:justify-end md:gap-12">
                                <div className="group text-center">
                                    <div className="text-3xl font-black tracking-tighter text-bms-primary md:text-4xl">
                                        ۲۰۰٪
                                    </div>
                                    <div className="mt-1 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400 md:text-[10px]">
                                        رشد درآمد
                                    </div>
                                </div>
                                <div className="group text-center">
                                    <div className="text-3xl font-black tracking-tighter text-brand-red md:text-4xl">
                                        ۱۵+
                                    </div>
                                    <div className="mt-1 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400 md:text-[10px]">
                                        سال تجربه فنی
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            <motion.div style={ { scale: mainScale } } className="origin-top">
                {/* ===================== CHAPTER 2: THE EVOLUTION ===================== */ }
                <Section variant="subtle" spacing="large" id="story" className="mt-20 border-y border-slate-100">
                    <div className="space-y-16">
                        <header className="space-y-3 px-6 text-center">
                            <div className="inline-flex items-center gap-2 text-bms-primary">
                                <LuZap
                                    className="h-4 w-4 fill-brand-yellow text-brand-yellow"
                                    aria-hidden="true"
                                />
                                <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                                    Corporate Lineage
                                </span>
                            </div>
                            <h2 className="text-3xl font-black tracking-tightest text-slate-950 md:text-5xl">
                                داستان خلق یک <span className="text-bms-primary">انقلاب تکنولوژیک</span>
                            </h2>
                        </header>
                        <WitBmsStorySection />
                    </div>
                </Section>

                {/* ===================== CHAPTER 3: PLATFORM ESSENCE ===================== */ }
                <Section variant="white" spacing="large" id="what-is-wit">
                    <div className="flex flex-col gap-24">
                        <WitWhatIsSection />
                        <div className="mx-auto w-full max-w-4xl px-6">
                            <div
                                className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"
                                aria-hidden="true"
                            />
                        </div>
                        <WitStrategicAdvantageSection />
                    </div>
                </Section>

                {/* ===================== CHAPTER 4: TECHNICAL ARCHITECTURE ===================== */ }
                <Section variant="subtle" spacing="large" id="architecture" className="border-y border-slate-100">
                    <div className="space-y-20">
                        <header className="space-y-3 px-6 text-center">
                            <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">
                                System Schema
                            </span>
                            <h2 className="text-3xl font-black tracking-tightest text-slate-950 md:text-5xl">
                                معماری لایه‌ای و مقیاس‌پذیر
                            </h2>
                        </header>
                        <WitArchitectureSection />
                    </div>
                </Section>

                {/* ===================== CHAPTER 5: INDUSTRIAL DOMAINS ===================== */ }
                <Section variant="white" spacing="large" id="domains">
                    <WitDomainsSection />
                </Section>

                {/* ===================== CHAPTER 6: PROVEN IMPACT ===================== */ }
                <Section variant="subtle" spacing="large" id="impact" className="border-y border-slate-100">
                    <WitImpactSection />
                </Section>
            </motion.div>

            {/* ===================== CHAPTER 7: CALL TO ACTION ===================== */ }
            <Section variant="white" spacing="none" id="action" className="pb-40 pt-16">
                <div className="flex flex-col items-center space-y-12 text-center">
                    <div className="h-1.5 w-16 rounded-full bg-brand-yellow" aria-hidden="true" />
                    <div className="max-w-3xl space-y-6">
                        <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                            آماده برای ورود به <br />
                            <span className="text-bms-primary">دنیای هوشمند بارمان؟</span>
                        </h2>
                        <p className="text-lg font-light leading-relaxed text-slate-500">
                            WIT زیرساختی برای سازمان‌هایی است که می‌خواهند آینده را از همین امروز بسازند.
                            با ما در تماس باشید.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 sm:flex-row">
                        <Link
                            href="/contact-us?type=wit-platform"
                            className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-bms-primary px-10 text-base font-bold text-white shadow-xl shadow-bms-primary/20 transition-all hover:-translate-y-1 hover:bg-bms-dark active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-bms-primary/50"
                        >
                            <span>درخواست جلسه مشاوره</span>
                            <LuArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/clinicans"
                            className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-10 text-base font-bold text-slate-700 transition-all hover:border-bms-primary hover:bg-slate-50 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-bms-primary/50"
                        >
                            مشاهده پروژه‌های فعال
                        </Link>
                    </div>
                </div>
            </Section>

            {/* 🚀 UNIVERSAL macOS DOCK */ }
            <WitMacosDock />

            {/* Final Visual Hard-Stop Visual Anchor */ }
            <div
                className="h-px w-full bg-gradient-to-r from-transparent via-bms-primary/10 to-transparent"
                aria-hidden="true"
            />
        </main>
    );
}