"use client";

import React, { useRef } from "react";
import Script from "next/script";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { LuStethoscope } from "react-icons/lu";
import { Section } from "@/components/layout/Section";

/* Navigation Components */
import ClinicansMacosDock from "@/components/clinicans/ClinicansMacosDock";

/* Section Components */
import ClinicansHeroSectionV2 from "@/components/clinicans/ClinicansHeroSectionV2";
import ClinicansForWhomSection from "@/components/clinicans/ClinicansForWhomSection";
import ClinicansSecuritySection from "@/components/clinicans/ClinicansSecuritySection";
import ClinicansTechSection from "@/components/clinicans/ClinicansTechSection";
import ClinicansGetStartedSection from "@/components/clinicans/ClinicansGetStartedSection";

import ClinicansCardScroll from "@/components/clinicans/ClinicansCardScroll";

/**
 * 🏥 CLINICANS PLATFORM - FINAL REFORMATION
 * Spacing calibrated to 8pt Grid (py-12 to py-24)
 * Theme: Medical White / Calm Teal / Emerald Green
 */
export default function ClinicansPage ()
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

    // Subtle Parallax for the footer entrance
    const mainScale = useTransform( smoothProgress, [ 0.9, 1 ], [ 1, 0.98 ] );

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Clinicans Health Platform",
        applicationCategory: "MedicalBusinessApplication",
        publisher: {
            "@type": "Organization",
            name: "Barman Mehvar Spadana",
        },
    };

    return (
        <main
            ref={ containerRef }
            className="flex min-h-screen w-full flex-col overflow-visible bg-white antialiased"
            dir="rtl"
        >
            {/* 🧠 SEO: STRUCTURED DATA */ }
            <Script
                id="json-ld-clinicans-master"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            {/* CHAPTER 1: VISION - Hero & Contextual Pivot */ }
            <Section variant="white" spacing="none" id="overview" className="pb-0 pt-6 md:pt-10">
                <div className="flex flex-col">
                    <ClinicansHeroSectionV2 />

                    {/* Overlap Status Card - Anchors the user after the headline */ }
                    <motion.div
                        initial={ { y: 40, opacity: 0 } }
                        whileInView={ { y: 0, opacity: 1 } }
                        viewport={ { once: true, margin: "-50px" } }
                        transition={ { duration: 0.8, ease: [ 0.22, 1, 0.36, 1 ] } }
                        className="container relative z-30 mx-auto -mt-16 w-full max-w-5xl md:-mt-24"
                    >
                        <div className="flex flex-col items-center justify-between gap-6 rounded-[2.5rem] border border-slate-100 bg-white/90 p-6 shadow-2xl ring-1 ring-black/5 backdrop-blur-2xl md:flex-row md:p-10">
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400 bg-emerald-500 text-white shadow-lg">
                                    <LuStethoscope className="h-7 w-7" aria-hidden="true" />
                                </div>
                                <div className="text-right">
                                    <span className="mb-1 block font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                                        Status: Active
                                    </span>
                                    <h3 className="text-lg font-black leading-tight text-slate-900 md:text-xl">
                                        زیرساخت هوشمند درمان
                                    </h3>
                                </div>
                            </div>

                            {/* Divider */ }
                            <div className="hidden h-12 w-px bg-slate-200 lg:block" aria-hidden="true" />

                            <div className="flex w-full items-center justify-between gap-4 md:w-auto md:gap-10 md:justify-end">
                                <div className="text-center">
                                    <div className="text-3xl font-black tracking-tighter text-emerald-600">
                                        ۱۰۰٪
                                    </div>
                                    <div className="mt-1 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400">
                                        بومی‌سازی
                                    </div>
                                </div>
                                <div className="h-8 w-px bg-slate-100 md:hidden" aria-hidden="true" />
                                <div className="text-center">
                                    <div className="text-3xl font-black tracking-tighter text-bms-primary">
                                        ۲۴/۷
                                    </div>
                                    <div className="mt-1 font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400">
                                        پشتیبانی
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>



            {/* CHAPTER 3: IMMERSIVE - Specialists Focus */ }
            <div id="features">

                <ClinicansCardScroll />
            </div>

            {/* CHAPTER 4: AUDIENCE, SECURITY & TECH */ }
            <Section variant="white" spacing="large" id="audience">
                <div className="flex flex-col gap-24 lg:gap-32">
                    <ClinicansForWhomSection />

                    <div id="defense" className="mx-auto h-px w-2/3 bg-slate-100" aria-hidden="true" />

                    <ClinicansSecuritySection />

                    <div className="mx-auto h-px w-2/3 bg-slate-100" aria-hidden="true" />

                    <ClinicansTechSection />
                </div>
            </Section>

            {/* CHAPTER 5: ONBOARDING - Closing the Narrative */ }
            <Section variant="white" spacing="large" id="pricing" className="pb-24 lg:pb-32">
                <motion.div style={ { scale: mainScale } } className="w-full origin-top space-y-20">
                    <ClinicansGetStartedSection />
                </motion.div>
            </Section>

            {/* 🚀 UNIVERSAL macOS DOCK - Handles both Desktop and Mobile UI */ }
            <ClinicansMacosDock />
        </main>
    );
}