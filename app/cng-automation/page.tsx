
import type { Metadata } from "next";
import Script from "next/script";

// Layout & Global Components
import { Section } from "@/components/layout/Section";
// Page-Specific Sections
import CngHeroSectionV2 from "@/components/cng/CngHeroSectionV2";
import TwoBranchProducts from "@/components/cng/TwoBranchProducts";
import CngStorySection from "@/components/cng/CngStorySection";
import IndustrialVideoTerminal from "@/components/cng/IndustrialVideoTerminal";
import NationalPlanSection from "@/components/cng/NationalPlanSection";
import NecessitySection from "@/components/cng/NecessitySection";
import StakeholderBenefitsSection from "@/components/cng/StakeholderBenefitsSection";
import WhatSystemDoesSection from "@/components/cng/WhatSystemDoesSection";
import TechHighlightsSection from "@/components/cng/TechHighlightsSection";
import LocalAdvantageSection from "@/components/cng/LocalAdvantageSection";
import NationalImportanceSection from "@/components/cng/NationalImportanceSection";
import DeploymentSection from "@/components/cng/DeploymentSection";
import CollaborationSection from "@/components/cng/CollaborationSection";
import FinalCtaSection from "@/components/cng/FinalCtaSection";
import { LuMonitorPlay } from "react-icons/lu";

/**
 * ⛽ CNG AUTOMATION / ICTS LANDING PAGE
 * Description: The canonical entry point for the national intelligent
 * CNG fueling infrastructure system (ICTS) by Barman.
 */

// SEO Metadata Hardening for Core Vital Tracking
export const metadata: Metadata = {
    title: "سامانه ملی پایش جایگاه‌های CNG (ICTS)",
    description:
        "آشنایی با سامانه هوشمند کنترل و پایش جایگاه‌های CNG. استقرار، معماری فنی و مزایای زیرساخت پدافند غیرعامل بارمان.",
    alternates: {
        canonical: "https://co-bms.ir/cng-automation",
    },
};

export default function CngAutomationPage ()
{
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "ICTS (Intelligent Control & Tag System)",
        brand: {
            "@type": "Organization",
            name: "Barman Mehvar Spadana",
        },
        description: "سامانه جامع و بومی اتوماسیون صنعتی جایگاه‌های CNG ایران",
        category: "Industrial IoT",
    };

    return (
        <main
            className="flex min-h-screen w-full flex-col overflow-visible bg-white antialiased"
            dir="rtl"
        >
            <Script
                id="json-ld-icts-product"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            {/* CHAPTER 1: VISION */ }
            <Section variant="white" spacing="none" id="hero" className="pt-8 md:pt-12">
                <CngHeroSectionV2 />
            </Section>

            {/* CHAPTER 2: SYSTEM ARCHITECTURE */ }
            <Section
                variant="subtle"
                spacing="large"
                id="products"
                className="relative z-10 border-y border-slate-100"
            >
                <TwoBranchProducts />
            </Section>

            {/* CHAPTER 3: EVIDENCE (Cinematic Pinning) 
          Note: CngStorySection handles its own full-screen viewport and scroll-jacking.
      */}

            <Section variant="white" spacing="large" id="pilotvideo">
                <div className="container mx-auto max-w-5xl px-4">

                    <CngStorySection />
                </div>
            </Section>

            {/* CHAPTER 4: PILOT PROOF */ }
            <Section variant="white" spacing="large" id="pilotvideo">
                <div className="container  mx-auto max-w-5xl px-4">
                    <div className="group relative">
                        {/* Thematic Glow Ring */ }
                        <div className="absolute -inset-2 blur-3xl transition-opacity duration-500 bg-gradient-to-tr from-[#145C98]/10 via-[#F4C430]/5 to-transparent opacity-40 group-hover:opacity-70" />
                        <div className="mx-auto mb-16 max-w-3xl space-y-6  text-center lg:mb-20">
                            <div

                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 shadow-lg backdrop-blur-md"
                            >
                                <LuMonitorPlay className="h-4 w-4 text-emerald-400" />
                                <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                                    Live_Pilot_Operation
                                </span>
                            </div>

                            <h2 className="text-3xl font-black leading-[1.2] tracking-tightest text-white md:text-5xl lg:text-6xl">
                                شواهد اجرایی؛ <br />
                                <span className="bg-gradient-to-l from-[#F4C430] via-yellow-300 to-bms-primary bg-clip-text text-transparent">
                                    عملکرد سامانه در میدان
                                </span>
                            </h2>

                            <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-slate-400 md:text-xl">
                                این یک شبیه‌سازی یا مدل آزمایشگاهی نیست. آنچه مشاهده می‌کنید،
                                عملکرد لحظه‌ای و استقرار موفق سامانه ICTS در یکی از پیچیده‌ترین
                                مراکز توزیع سوخت کشور است.
                            </p>
                        </div>
                        <IndustrialVideoTerminal
                            src="/CNG_Station_Automation.mp4"
                            poster="/images/cng-poster.jpg"
                            title="پایلوت رسمی سامانه ICTS"
                            description="مستندات استقرار در فاز عملیاتی با تایید سازمان پدافند غیرعامل."
                            uploadDate="2025-12-15"
                            duration="PT3M45S"
                        />
                    </div>
                </div>
            </Section>

            {/* CHAPTER 5: STRATEGIC DOSSIER */ }
            <Section
                variant="subtle"
                spacing="large"
                id="why"
                className="border-y border-slate-100"
            >
                <div className="flex flex-col gap-12 lg:gap-20">
                    <NationalPlanSection />

                    <div className="mx-auto h-px w-2/3 bg-slate-200" aria-hidden="true" />

                    <NecessitySection />

                    <div className="mx-auto h-px w-2/3 bg-slate-200" aria-hidden="true" />

                    <StakeholderBenefitsSection />
                </div>
            </Section>

            {/* CHAPTER 6: TECHNICAL ENGINE */ }
            <Section variant="white" spacing="large" id="how">
                {/* Enforcing global padding standard inside a premium nested wrap */ }
                <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-premium sm:p-10 md:p-16 lg:rounded-[3.5rem] lg:p-24">
                    <div className="flex flex-col gap-16 md:gap-24">
                        <WhatSystemDoesSection />

                        <div className="h-px w-full bg-slate-100" aria-hidden="true" />

                        <TechHighlightsSection />
                        <LocalAdvantageSection />
                    </div>
                </div>
            </Section>

            {/* CHAPTER 7: ACTION */ }
            <Section
                variant="subtle"
                spacing="large"
                className="border-t border-slate-100"
            >
                <div className="flex flex-col gap-24">
                    <NationalImportanceSection />
                    <DeploymentSection />
                    <CollaborationSection />
                    <FinalCtaSection />
                </div>
            </Section>
        </main>
    );
}