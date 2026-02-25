"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { CLINICANS_TABS } from "./clinicansSystemTabs.data";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import { LuArrowLeft, LuBinary, LuFingerprint, LuZap, LuActivity } from "react-icons/lu";
import { cn } from "@/lib/utils";

/**
 * 🎠 CLINICANS SYSTEM CAROUSEL - REFORMED
 * Strategy: Apple-inspired tactile interaction with high-precision corporate branding.
 * Palette: Medical Green, Calm Teal, and BMS Navy.
 */

const accentTextMap: Record<string, string> = {
    blue: "text-blue-600",
    emerald: "text-emerald-600",
    rose: "text-[#D72638]", // Corporate Red for high-priority alerts
    violet: "text-violet-600",
};

const accentBgMap: Record<string, string> = {
    blue: "bg-blue-50 border-blue-100",
    emerald: "bg-emerald-50 border-emerald-100",
    rose: "bg-red-50 border-red-100",
    violet: "bg-violet-50 border-violet-100",
};

export default function ClinicansSystemCarousel ()
{
    const cards = CLINICANS_TABS.map( ( tab, index ) => (
        <Card
            key={ tab.id }
            index={ index }
            card={ {
                src: `/images/clinicans/${ tab.id }.jpg`,
                category: tab.label,
                title: tab.title,
                content: (
                    <div className="space-y-6 md:space-y-10 text-right" dir="rtl">
                        {/* Header: Technical Metadata HUD */ }
                        <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                            <div className="flex items-center gap-3">
                                <div className={ cn(
                                    "h-2 w-2 rounded-full animate-pulse",
                                    tab.accent === 'rose' ? 'bg-[#D72638]' : 'bg-[#10B981]'
                                ) } />
                                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                                    Active_Module: { tab.subtitle }
                                </span>
                            </div>
                            <LuFingerprint className="text-slate-200 w-6 h-6" />
                        </div>

                        {/* Typographic Core */ }
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight tracking-tightest">
                                { tab.title }
                            </h3>
                            <p className="text-base md:text-xl leading-relaxed text-slate-500 font-light text-justify">
                                { tab.description }
                            </p>
                        </div>

                        {/* Action Group */ }
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={ tab.ctaLink }
                                className={ cn(
                                    "inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:gap-5 shadow-sm",
                                    accentTextMap[ tab.accent ],
                                    accentBgMap[ tab.accent ],
                                    "border"
                                ) }
                            >
                                <span>{ tab.ctaText }</span>
                                <LuArrowLeft className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Technical Visualization Placeholder */ }
                        <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200/50">
                            <Image
                                src={ `/images/clinicans/${ tab.id }.jpg` }
                                alt={ tab.title }
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 800px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                        </div>
                    </div>
                ),
            } }
        />
    ) );

    return (
        <section
            dir="rtl"
            className="relative w-full py-16 md:py-24 lg:py-32 bg-white overflow-hidden"
        >
            {/* 🧠 SEO: STRUCTURED DATA */ }
            <Script
                id="clinicans-carousel-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={ {
                    __html: JSON.stringify( {
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Clinicans Platform Modules",
                        "numberOfItems": CLINICANS_TABS.length,
                        "itemListElement": CLINICANS_TABS.map( ( tab, i ) => ( {
                            "@type": "ListItem",
                            "position": i + 1,
                            "name": tab.title,
                            "description": tab.description
                        } ) )
                    } ),
                } }
            />

            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
                {/* ===================== HEADER - Editorial Logic ===================== */ }
                <header className="mb-12 md:mb-20 text-right space-y-6">
                    <motion.div
                        initial={ { opacity: 0, x: 20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        className="inline-flex items-center gap-3"
                    >
                        <div className="h-px w-10 bg-[#145C98]/30" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 font-mono">
                            Platform_Architecture / BMS_Core
                        </span>
                    </motion.div>

                    <div className="max-w-4xl space-y-4">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tightest">
                            معماری پلتفرم <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#10B981] via-[#14B8A6] to-[#145C98]">
                                هوشمند Clinicans
                            </span>
                        </h2>
                        <p className="text-base md:text-xl text-slate-500 font-light leading-corp-relaxed max-w-2xl">
                            هر ماژول یک گره استراتژیک در توانمندسازی دیجیتال مراکز درمانی است. این اجزا در تلاقی با هم، یک اکوسیستم پایدار و مقیاس‌پذیر را تشکیل می‌دهند.
                        </p>
                    </div>
                </header>

                {/* ===================== THE CAROUSEL ENGINE ===================== */ }
                <div className="relative -mx-6 lg:-mx-12">
                    {/* 
                Carousel component is internally responsive. 
                We use negative margins to allow card shadows and overflow 
                to reach the screen edges on mobile for a 'Full-Bleed' feel.
            */}
                    <Carousel items={ cards } />
                </div>

                {/* ===================== FOOTER HUD ===================== */ }
                <footer className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8 opacity-40">
                    <div className="flex items-center gap-4">
                        <LuBinary className="w-5 h-5 text-slate-400" />
                        <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-[0.5em]">
                            System_Node_Validated
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <LuActivity className="w-4 h-4 text-emerald-500 animate-pulse" />
                            <span className="text-[9px] font-mono font-bold text-slate-400 uppercase">RealTime_Link</span>
                        </div>
                        <LuZap className="w-4 h-4 text-[#F4C430]" />
                    </div>
                </footer>
            </div>

            {/* Decorative Brand Accent (Top-Left Blur) */ }
            <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}