// components/clinicans/ColumnGrid.tsx
"use client";

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import
{
    LuGlobe,
    LuCpu,
    LuTrendingUp,
    LuBrainCircuit,
    LuArrowLeft,
    LuNetwork,
    LuZap,
    LuShieldCheck,
    LuChartBar,
    LuUsers,
    LuSparkles
} from 'react-icons/lu';

// ============================================================================
// 🗺️ DATA STRUCTURE - Optimized for Google & Content Hierarchy
// ============================================================================

interface FeatureCard
{
    id: number;
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    icon: React.ComponentType<{ className?: string; }>;
    color: string;
    bg: string;
    border: string;
    textAlign: "right" | "left";
    connectorGradient: string;
    /** Google crawl priority (1.0 highest) */
    crawlPriority: number;
    /** Entity type for structured data */
    entityType: "Service" | "SoftwareApplication" | "CreativeWork";
    /** Last content update */
    lastUpdated: string;
    /** Related keywords for Google's understanding */
    relatedKeywords: string[];
    /** E-E-A-T signals */
    expertiseIndicators?: string[];
}

const FEATURES: FeatureCard[] = [
    {
        id: 1,
        title: "حضور دیجیتال و برندینگ حرفه‌ای مراکز درمانی",
        subtitle: "توانمندسازی کلینیک در فضای آنلاین — بدون پیچیدگی فنی",
        description: "کلینیکانز زیرساخت کامل حضور دیجیتال را برای ارائه‌دهندگان خدمات سلامت فراهم می‌کند. وب‌سایت‌ساز درون‌پلتفرمی امکان ساخت لندینگ‌پیج و وب‌سایت مدرن با پشتیبانی از معرفی خدمات، پرسنل، مقالات تخصصی، ویدیو و نظرات مراجعین را ارائه می‌دهد. تمامی فرآیندهای هاست، امنیت، بهینه‌سازی سئو و تولید محتوا به‌صورت یکپارچه و خودکار مدیریت می‌شوند تا برند شما در فضای دیجیتال توانمند شود.",
        ctaText: "مشاهده راهکار حضور دیجیتال",
        ctaLink: "/clinicans/digital-builder",
        icon: LuGlobe,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "hover:border-blue-300",
        textAlign: "right",
        connectorGradient: "bg-gradient-to-bl from-blue-100/50 to-blue-500/20",
        crawlPriority: 1.0,
        entityType: "SoftwareApplication",
        lastUpdated: "2024-01-20",
        relatedKeywords: [ "وب‌سایت پزشکی", "سئو سلامت", "برندینگ دیجیتال" ],
        expertiseIndicators: [ "گواهی SSL", "پشتیبانی ۲۴/۷", "ردیاب سئو داخلی" ]
    },
    {
        id: 2,
        title: "اتوماسیون و توانمندسازی عملیاتی",
        subtitle: "مدیریت هوشمند عملیات، درمان و مالی — در یک داشبورد",
        description: "کلینیکانز به‌عنوان ستون فقرات پلتفرم توانمندسازی دیجیتال، تمامی ابزارهای حیاتی را یکپارچه می‌کند: پرونده الکترونیک سلامت (EHR)، رزرواسیون، پیامک یادآوری، CRM، حسابداری، انبارداری و ویزیت آنلاین. داشبورد تحلیلی پیشرفته با الگوریتم‌های هوشمند، امکان پیش‌بینی، پایش عملکرد و تصمیم‌سازی مبتنی بر داده را برای مدیران فراهم می‌کند تا عملیات کلینیک به‌صورت خودکار و بهینه انجام شود.",
        ctaText: "بررسی اتوماسیون کلینیک",
        ctaLink: "/clinicans/all-in-one",
        icon: LuCpu,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "hover:border-emerald-300",
        textAlign: "left",
        connectorGradient: "bg-gradient-to-br from-emerald-100/50 to-emerald-500/20",
        crawlPriority: 1.0,
        entityType: "SoftwareApplication",
        lastUpdated: "2024-01-18",
        relatedKeywords: [ "EHR", "اتوماسیون درمان", "سیستم نوبت‌دهی" ],
        expertiseIndicators: [ "HIPA Compliance", "SSL-256", "پشتیبان‌گیری خودکار" ]
    },
    {
        id: 3,
        title: "رشد پایدار و جذب هوشمند مراجع",
        subtitle: "ابزارهای توانمندسازی بازاریابی و وفاداری",
        description: "پلتفرم ما فرآیند رشد کلینیک‌های سلامت و زیبایی را هوشمند می‌کند. سیستم پیامک مارکتینگ پیشرفته با قابلیت فیلتر و تارگتینگ دقیق، امکان اجرای کمپین‌های شخصی‌سازی‌شده را فراهم می‌سازد. در کنار آن، سیستم رفرال و باشگاه مشتریان، رشد ارگانیک، وفاداری مراجعین و افزایش مراجعه مجدد را بدون هزینه‌های سنگین تبلیغاتی ممکن می‌کند.",
        ctaText: "مشاهده راهکارهای رشد",
        ctaLink: "/clinicans/marketing",
        icon: LuTrendingUp,
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "hover:border-rose-300",
        textAlign: "right",
        connectorGradient: "bg-gradient-to-tl from-rose-100/50 to-rose-500/20",
        crawlPriority: 0.9,
        entityType: "Service",
        lastUpdated: "2024-01-15",
        relatedKeywords: [ "بازاریابی سلامت", "CRM پزشکی", "سیستم وفاداری" ],
        expertiseIndicators: [ "تحلیل ROI", "داده‌نمایی پیشرفته", "گزارش‌گیری لحظه‌ای" ]
    },
    {
        id: 4,
        title: "هوشمندسازی تصمیم‌گیری با هوش مصنوعی",
        subtitle: "تحلیل، پیش‌بینی و پیشنهاددهی درمانی و مدیریتی",
        description: "کلینیکانز با توسعه مدل‌های پیشرفته هوش مصنوعی (LLM) ویژه حوزه سلامت، سطح جدیدی از توانمندی را ایجاد می‌کند. از آنالیز تصویر پزشکی و تحلیل داده‌های درمانی و درآمدی، تا پیشنهاددهی خدمات و یادآوری‌های هوشمند—همه برای کاهش خطا، افزایش کیفیت درمان و بهینه‌سازی درآمد ارائه‌دهندگان خدمات سلامت طراحی شده‌اند.",
        ctaText: "آشنایی با هوش مصنوعی کلینیکانز",
        ctaLink: "/clinicans/health-ai",
        icon: LuBrainCircuit,
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "hover:border-violet-300",
        textAlign: "left",
        connectorGradient: "bg-gradient-to-tr from-violet-100/50 to-violet-500/20",
        crawlPriority: 0.9,
        entityType: "SoftwareApplication",
        lastUpdated: "2024-01-10",
        relatedKeywords: [ "هوش مصنوعی پزشکی", "پیش‌بینی درمان", "تحلیل تصویر" ],
        expertiseIndicators: [ "ISO-13485", "GDPR Compliant", "تاییدیه وزارت بهداشت" ]
    },
];

// ============================================================================
// 🎯 CENTRAL HUB COMPONENT - Google LCP Optimized
// ============================================================================

interface CentralHubProps
{
    className?: string;
    role?: string;
    ariaLabel?: string;
}

const CentralHub: React.FC<CentralHubProps> = ( {
    className = "",
    role = "img",
    ariaLabel = "هسته مرکزی پلتفرم کلینیکانز - اکوسیستم یکپارچه خدمات سلامت"
} ) =>
{
    return (
        <div
            className={ `relative flex items-center justify-center z-50 ${ className }` }
            role={ role }
            aria-label={ ariaLabel }
        >
            {/* Deep Glow Behind - LCP Optimized */ }
            <div
                className="absolute inset-0 rounded-full bg-indigo-500/20 blur-[60px]"
                aria-hidden="true"
            />

            {/* The Main Ring - Google's LCP Candidate */ }
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-white/90 backdrop-blur-xl shadow-[0_0_80px_-20px_rgba(79,70,229,0.4)] border border-white/50 ring-4 ring-slate-50/50">
                {/* Spinning Data Streams - Reduced Motion Support */ }
                <div
                    className="absolute inset-3 rounded-full border-2 border-dashed border-indigo-200/50 animate-[spin_40s_linear_infinite]"
                    aria-hidden="true"
                    data-reduce-motion="slow"
                />
                <div
                    className="absolute inset-3 rounded-full border-2 border-dotted border-bms-primary/30 animate-[spin_20s_linear_infinite_reverse]"
                    aria-hidden="true"
                    data-reduce-motion="slow"
                />

                {/* Inner Glass Core - High Priority Image */ }
                <div className="absolute inset-6 rounded-full bg-gradient-to-b from-white to-slate-50 shadow-inner flex items-center justify-center border border-white">
                    <div className="relative w-20 h-20 filter drop-shadow-sm transform transition-transform hover:scale-110 duration-500">
                        <Image
                            src="/Clogo.svg"
                            alt="هسته پلتفرم کلینیکانز - نماد یکپارچگی و هوشمندی خدمات سلامت دیجیتال"
                            fill
                            className="object-contain p-2"
                            priority
                            loading="eager"
                            fetchPriority="high"
                            sizes="(max-width: 768px) 80px, 120px"
                            data-google-image="lcp-candidate"
                        />
                    </div>
                </div>

                {/* Orbiting Particles - Performance Optimized */ }
                <div className="absolute inset-0 animate-[spin_8s_linear_infinite]" aria-hidden="true">
                    <div className="absolute top-4 left-1/2 w-3 h-3 bg-emerald-400 rounded-full blur-[2px] shadow-lg shadow-emerald-400/50" />
                </div>
                <div className="absolute inset-0 animate-[spin_12s_linear_infinite_reverse]" aria-hidden="true">
                    <div className="absolute bottom-4 right-1/2 w-2 h-2 bg-blue-400 rounded-full blur-[1px]" />
                </div>
            </div>
        </div>
    );
};

// ============================================================================
// 🏢 FEATURE CARD COMPONENT - Corporate & Google Optimized
// ============================================================================

interface FeatureCardProps
{
    feature: FeatureCard;
    index: number;
}

const FeatureCardComponent: React.FC<FeatureCardProps> = ( { feature } ) =>
{
    const Icon = feature.icon;

    return (
        <article
            className={ `
        group relative flex flex-col gap-5 rounded-[2.5rem] bg-white p-8 lg:p-10 
        shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:z-20
        border border-slate-100 ${ feature.border } h-full
      `}
            role="article"
            aria-labelledby={ `feature-title-${ feature.id }` }
            aria-describedby={ `feature-desc-${ feature.id }` }
            data-crawl-priority={ feature.crawlPriority }
            data-entity-type={ feature.entityType }
            data-content-freshness={ feature.lastUpdated }
        >
            {/* CONNECTOR GRADIENT - Performance Optimized */ }
            <div
                className={ `absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${ feature.connectorGradient }` }
                aria-hidden="true"
            />

            {/* Header with Semantic Structure */ }
            <header className="flex flex-col gap-4 relative z-10 w-full">
                <div className={ `flex items-center gap-4 ${ feature.textAlign === "left" ? 'lg:flex-row' : 'lg:flex-row-reverse' }` }>
                    {/* Icon with E-E-A-T Signals */ }
                    <div
                        className={ `
              flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl 
              ${ feature.bg } ${ feature.color } shadow-sm 
              transition-transform group-hover:scale-110
            `}
                        role="img"
                        aria-label={ `نماد ${ feature.title }` }
                    >
                        <Icon className="h-7 w-7" />
                    </div>

                    {/* Title with Proper Hierarchy */ }
                    <div className={ `flex-1 ${ feature.textAlign === "left" ? 'lg:text-left' : 'lg:text-right' }` }>
                        <h3
                            id={ `feature-title-${ feature.id }` }
                            className="font-bold text-slate-900 text-xl leading-snug group-hover:text-bms-primary transition-colors"
                        >
                            { feature.title }
                        </h3>
                        <p className="text-sm font-medium text-slate-500 mt-1">{ feature.subtitle }</p>

                        {/* Expertise Indicators for E-E-A-T */ }
                        { feature.expertiseIndicators && feature.expertiseIndicators.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1.5">
                                { feature.expertiseIndicators.map( ( indicator, idx ) => (
                                    <span
                                        key={ idx }
                                        className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200"
                                    >
                                        <LuShieldCheck className="h-2.5 w-2.5 text-emerald-500" />
                                        { indicator }
                                    </span>
                                ) ) }
                            </div>
                        ) }
                    </div>
                </div>
            </header>

            {/* Body Content - Structured for Google's NLP */ }
            <div className="relative z-10 flex-1">
                <p
                    id={ `feature-desc-${ feature.id }` }
                    className="text-sm md:text-base leading-8 text-slate-600 text-justify border-t border-slate-50 pt-5"
                >
                    { feature.description }
                </p>

                {/* Related Keywords for Google's Content Understanding */ }
                { feature.relatedKeywords && feature.relatedKeywords.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-100">
                        <span className="text-xs font-medium text-slate-500">مفاهیم مرتبط:</span>
                        <div className="mt-1 flex flex-wrap gap-1.5">
                            { feature.relatedKeywords.map( ( keyword, idx ) => (
                                <span
                                    key={ idx }
                                    className="text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded-full"
                                    data-related-keyword={ keyword }
                                >
                                    { keyword }
                                </span>
                            ) ) }
                        </div>
                    </div>
                ) }
            </div>

            {/* CTA - Accessible & Conversion Optimized */ }
            <footer className={ `mt-auto pt-3 flex w-full relative z-10 ${ feature.textAlign === "left" ? 'lg:justify-start' : 'lg:justify-end' } justify-end` }>
                <Link
                    href={ feature.ctaLink }
                    className={ `
            inline-flex items-center gap-2 text-sm font-bold 
            ${ feature.color } hover:gap-3 transition-all 
            bg-white/50 px-4 py-2 rounded-full hover:bg-white hover:shadow-sm
            focus:outline-none focus:ring-2 focus:ring-bms-primary/30 focus:bg-white
          `}
                    aria-label={ `${ feature.ctaText } - اطلاعات بیشتر درباره ${ feature.title }` }
                    data-conversion-type="feature-cta"
                    data-google-event={ `feature_click_${ feature.id }` }
                    data-cta-priority={ feature.crawlPriority }
                >
                    <span>{ feature.ctaText }</span>
                    <LuArrowLeft className="w-4 h-4" aria-hidden="true" />
                </Link>
            </footer>
        </article>
    );
};

// ============================================================================
// 🏢 MAIN COMPONENT - Production-Grade Grid Layout
// ============================================================================

export const ClinicansFeaturesGrid: React.FC = () =>
{
    // Memoize features for performance
    const features = useMemo( () => FEATURES, [] );

    return (
        <section
            className="w-full py-16 md:py-24 overflow-hidden"
            aria-labelledby="features-grid-heading"
            role="region"
            data-google-component="features-grid"
            data-page-section="product-features"
        >
            {/* Structured Data for Google */ }
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={ {
                    __html: JSON.stringify( {
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "ویژگی‌های پلتفرم کلینیکانز",
                        "description": "چهار رکن اصلی تحول دیجیتال کلینیک‌های سلامت توسط پلتفرم کلینیکانز",
                        "numberOfItems": 4,
                        "itemListElement": features.map( ( feature, index ) => ( {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": feature.entityType,
                                "name": feature.title,
                                "description": feature.description,
                                "url": `https://co-bms.ir${ feature.ctaLink }`,
                                "dateModified": feature.lastUpdated,
                                "keywords": feature.relatedKeywords.join( ", " )
                            }
                        } ) )
                    } )
                } }
            />

            {/* HEADER SECTION - LCP Optimized */ }
            <div className="text-center mb-20 px-4 space-y-5 relative z-10" role="banner">
                {/* Trust Badge for E-E-A-T */ }
                <div
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm"
                    role="status"
                    aria-label="گواهی ارزش‌آفرینی پلتفرم"
                >
                    <LuZap className="w-4 h-4 text-amber-500 fill-amber-500" aria-hidden="true" />
                    <span>فلسفه ارزش آفرینی پلتفرم</span>
                </div>

                {/* Main Heading - Semantic Hierarchy */ }
                <h1
                    id="features-grid-heading"
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900"
                    data-google-heading="primary"
                >
                    چهار رکن <span className="text-bms-primary underline decoration-bms-primary/20 underline-offset-8 decoration-4">تحول دیجیتال</span> کلینیک‌های سلامت
                </h1>

                {/* Description with LCP Optimization */ }
                <p
                    className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4"
                    data-google-content="primary-description"
                >
                    کلینیکانز یک زیست‌بوم دیجیتال یکپارچه برای هوشمندسازی کلینیک‌های سلامت و درمان است. این پلتفرم با تمرکز بر افزایش مراجعین، کاهش بار عملیاتی و حذف خطاهای انسانی، تمامی لایه‌های کلیدی یک کلینیک مدرن را ارتقا می‌دهد.
                </p>
            </div>

            {/* MAIN GRID CONTAINER - Production Grade Layout */ }
            <div className="relative max-w-[90rem] mx-auto px-4 lg:px-8">

                {/* 🎯 DESKTOP GRID (3x2) - Perfectly Centered Hub */ }
                <div className="hidden lg:block relative">
                    {/* Grid Container with Equal Height Rows */ }
                    <div className="grid grid-cols-3 grid-rows-2 gap-x-24 gap-y-16 min-h-[800px]">
                        {/* Top Left Card */ }
                        <div className="col-start-1 row-start-1 flex items-center justify-end">
                            <div className="w-full max-w-lg">
                                <FeatureCardComponent feature={ features[ 0 ] } index={ 0 } />
                            </div>
                        </div>

                        {/* Top Right Card */ }
                        <div className="col-start-3 row-start-1 flex items-center justify-start">
                            <div className="w-full max-w-lg">
                                <FeatureCardComponent feature={ features[ 1 ] } index={ 1 } />
                            </div>
                        </div>

                        {/* Bottom Left Card */ }
                        <div className="col-start-1 row-start-2 flex items-center justify-end">
                            <div className="w-full max-w-lg">
                                <FeatureCardComponent feature={ features[ 2 ] } index={ 2 } />
                            </div>
                        </div>

                        {/* Bottom Right Card */ }
                        <div className="col-start-3 row-start-2 flex items-center justify-start">
                            <div className="w-full max-w-lg">
                                <FeatureCardComponent feature={ features[ 3 ] } index={ 3 } />
                            </div>
                        </div>

                        {/* 🎯 Central Hub - Perfectly Centered */ }
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="relative -top-6"> {/* Adjusted to move up */ }
                                <CentralHub />
                            </div>
                        </div>

                        {/* Connecting Lines (Optional - for visual guidance) */ }
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                            {/* Horizontal Line */ }
                            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />
                            {/* Vertical Line */ }
                            <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-slate-200/50 to-transparent" />
                        </div>
                    </div>
                </div>

                {/* 📱 MOBILE LAYOUT - Stacked with Centered Hub */ }
                <div className="lg:hidden flex flex-col">
                    {/* Top Cards */ }
                    <div className="flex flex-col gap-8">
                        <FeatureCardComponent feature={ features[ 0 ] } index={ 0 } />
                        <FeatureCardComponent feature={ features[ 1 ] } index={ 1 } />
                    </div>

                    {/* Mobile Hub - Centered */ }
                    <div className="relative flex justify-center items-center my-8 py-8">
                        {/* Vertical Connector Lines */ }
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-bms-primary/30 to-transparent" />

                        {/* Central Hub */ }
                        <div className="relative">
                            <CentralHub className="scale-90" />
                        </div>

                        {/* Vertical Connector Lines */ }
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-bms-primary/30 to-transparent" />
                    </div>

                    {/* Bottom Cards */ }
                    <div className="flex flex-col gap-8">
                        <FeatureCardComponent feature={ features[ 2 ] } index={ 2 } />
                        <FeatureCardComponent feature={ features[ 3 ] } index={ 3 } />
                    </div>
                </div>

                {/* 🧠 SYSTEM SUMMARY BLOCK - E-E-A-T Focused */ }
                <div className="mt-20 lg:mt-28 flex justify-center" role="complementary">
                    <aside
                        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50 p-1 shadow-md border border-slate-200 max-w-4xl w-full mx-4"
                        aria-labelledby="platform-summary-heading"
                    >
                        {/* Inner Container */ }
                        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-[2rem] bg-white px-8 py-8 md:px-10">
                            {/* Visual Anchor with Accessibility */ }
                            <div className="flex-shrink-0 relative" role="img" aria-label="نماد شبکه‌ای بودن پلتفرم">
                                <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-lg" aria-hidden="true" />
                                <div
                                    className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100"
                                    data-google-visual="trust-indicator"
                                >
                                    <LuNetwork className="h-10 w-10" aria-hidden="true" />
                                </div>
                            </div>

                            {/* Content with Semantic Emphasis */ }
                            <div className="flex-1 text-center md:text-right space-y-3">
                                <h4
                                    id="platform-summary-heading"
                                    className="text-lg font-bold text-slate-900"
                                    data-google-heading="tertiary"
                                >
                                    فراتر از نرم‌افزار: یک پلتفرم توانمندسازی
                                </h4>
                                <p
                                    className="text-sm md:text-base text-slate-600 leading-8 text-justify"
                                    data-google-content="summary"
                                >
                                    ارزش واقعی Clinicans در اتصال این ارکان به یکدیگر است؛
                                    داده‌ها در این اکوسیستم <strong className="text-slate-900 font-bold bg-indigo-50 px-1 rounded mx-0.5">جریان دارند</strong>،
                                    نه اینکه صرفاً ثبت شوند. نتیجه این اتصال،
                                    <span className="text-indigo-700 font-medium" data-google-emphasis="benefit-1"> تصمیم‌گیری هوشمند</span>،
                                    <span className="text-indigo-700 font-medium" data-google-emphasis="benefit-2"> کاهش خطای انسانی </span>
                                    و <span className="text-indigo-700 font-medium" data-google-emphasis="benefit-3"> توانمندسازی تیم درمان </span> است.
                                </p>

                                {/* Trust Indicators for YMYL (Health Sector) */ }
                                <div className="pt-4 mt-4 border-t border-slate-100">
                                    <div className="flex flex-wrap justify-center md:justify-end gap-3">
                                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                            <LuSparkles className="h-3 w-3 text-indigo-500" />
                                            <span>دارای تاییدیه وزارت بهداشت</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                            <LuUsers className="h-3 w-3 text-emerald-500" />
                                            <span>پشتیبانی ۲۴/۷ تخصصی</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                            <LuChartBar className="h-3 w-3 text-blue-500" />
                                            <span>گزارش‌گیری کاملاً شفاف</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};