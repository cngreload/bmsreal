"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CLINICANS_ALL_IN_ONE } from "@/components/clinicans/all-in-one/clinicansALLInOneData";
import
{
    LuCalendarCheck,
    LuFileText,
    LuUsers,
    LuMessageSquare,
    LuWallet,
    LuChartBar,
    LuVideo,
    LuBox,
    LuMegaphone,
    LuHeartHandshake,
    LuShieldCheck,
    LuWorkflow,
    LuFiles,
    LuBrain,
    LuSettings,
    LuGlobe,
    LuBuilding,
    LuTrendingUp,
    LuChartPie,
    LuCode,
    LuMessageCircle,
    LuPhone,
    LuLayoutDashboard,
    LuFileInput,
    LuArrowLeft,
    LuSparkles,
    LuZap,
    LuTarget,
    // Category icons
    LuCalendar,
    LuClipboardCheck,
    LuDollarSign,
    LuChartLine,
    LuCpu,
    LuPalette,
    LuGift,
    LuPlug,
} from "react-icons/lu";

// Throttle function for scroll performance - Fixed TypeScript types
const throttle = <T extends unknown[]> (
    func: ( ...args: T ) => void,
    limit: number
): ( ( ...args: T ) => void ) =>
{
    let inThrottle: boolean;
    return ( ...args: T ): void =>
    {
        if ( !inThrottle )
        {
            func( ...args );
            inThrottle = true;
            setTimeout( () => ( inThrottle = false ), limit );
        }
    };
};

/* ---------------------------------------------
 * MODULES DATA
 * -------------------------------------------*/
const modules = [
    { title: "نوبت‌دهی", icon: LuCalendarCheck, color: "text-blue-600", bg: "bg-blue-50", categoryId: "frontdesk" },
    { title: "پرونده الکترونیک", icon: LuFileText, color: "text-emerald-600", bg: "bg-emerald-50", categoryId: "clinical" },
    { title: "پذیرش و صف", icon: LuUsers, color: "text-amber-600", bg: "bg-amber-50", categoryId: "frontdesk" },
    { title: "پیامک و یادآوری", icon: LuMessageSquare, color: "text-purple-600", bg: "bg-purple-50", categoryId: "frontdesk" },
    { title: "مالی و تسویه", icon: LuWallet, color: "text-rose-600", bg: "bg-rose-50", categoryId: "finance" },
    { title: "گزارش و تحلیل", icon: LuChartBar, color: "text-cyan-600", bg: "bg-cyan-50", categoryId: "analytics" },
    { title: "ویزیت آنلاین", icon: LuVideo, color: "text-indigo-600", bg: "bg-indigo-50", categoryId: "online-consultation" },
    { title: "انبار و اقلام", icon: LuBox, color: "text-orange-600", bg: "bg-orange-50", categoryId: "ops" },
    { title: "بازاریابی", icon: LuMegaphone, color: "text-pink-600", bg: "bg-pink-50", categoryId: "growth" },
    { title: "وفاداری", icon: LuHeartHandshake, color: "text-red-600", bg: "bg-red-50", categoryId: "loyalty-referral" },
    { title: "دسترسی‌ها", icon: LuShieldCheck, color: "text-slate-600", bg: "bg-slate-50", categoryId: "ops" },
    { title: "یکپارچه‌سازی", icon: LuWorkflow, color: "text-teal-600", bg: "bg-teal-50", categoryId: "integrations" },
    { title: "اسناد", icon: LuFiles, color: "text-blue-500", bg: "bg-blue-50", categoryId: "clinical" },
    { title: "هوش مصنوعی", icon: LuBrain, color: "text-purple-700", bg: "bg-purple-50", categoryId: "advanced-analytics" },
    { title: "سفارشی‌سازی", icon: LuSettings, color: "text-violet-600", bg: "bg-violet-50", categoryId: "customization" },
    { title: "سازنده وب", icon: LuGlobe, color: "text-green-700", bg: "bg-green-50", categoryId: "website-builder" },
    { title: "عملیات", icon: LuBuilding, color: "text-amber-700", bg: "bg-amber-50", categoryId: "ops" },
    { title: "رشد", icon: LuTrendingUp, color: "text-pink-700", bg: "bg-pink-50", categoryId: "growth" },
    { title: "هوش مدیریتی", icon: LuChartPie, color: "text-cyan-700", bg: "bg-cyan-50", categoryId: "analytics" },
    { title: "API", icon: LuCode, color: "text-teal-700", bg: "bg-teal-50", categoryId: "integrations" },
    { title: "چت آنلاین", icon: LuMessageCircle, color: "text-blue-400", bg: "bg-blue-50", categoryId: "online-consultation" },
    { title: "مشاوره صوتی", icon: LuPhone, color: "text-green-600", bg: "bg-green-50", categoryId: "online-consultation" },
    { title: "داشبورد", icon: LuLayoutDashboard, color: "text-indigo-700", bg: "bg-indigo-50", categoryId: "analytics" },
    { title: "فاکتور", icon: LuFileInput, color: "text-rose-700", bg: "bg-rose-50", categoryId: "finance" },
];

// Category icons for sidebar
const categoryIcons = {
    "frontdesk": LuCalendar,
    "clinical": LuClipboardCheck,
    "online-consultation": LuVideo,
    "website-builder": LuGlobe,
    "finance": LuDollarSign,
    "ops": LuBuilding,
    "growth": LuUsers,
    "analytics": LuChartLine,
    "advanced-analytics": LuCpu,
    "customization": LuPalette,
    "loyalty-referral": LuGift,
    "integrations": LuPlug,
};

/* ---------------------------------------------
 * STRUCTURED DATA
 * -------------------------------------------*/
function ClinicansStructuredData ()
{
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Clinicans All-in-One Medical Practice Management Software",
        applicationCategory: "MedicalBusinessApplication",
        operatingSystem: "Web",
        description: "Comprehensive medical practice management software for clinics - Online appointment scheduling, EHR, finance, marketing, telemedicine and website builder",
        offers: {
            "@type": "Offer",
            category: "SoftwareAsAService",
            name: "Clinicans Professional Plan"
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://co-bms.ir/clinicans/all-in-one",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={ { __html: JSON.stringify( structuredData ) } }
        />
    );
}

/* ---------------------------------------------
 * PAGE
 * -------------------------------------------*/
export default function ClinicansAllInOnePage ()
{
    const [ hideNav, setHideNav ] = useState( false );
    const [ activeCategory, setActiveCategory ] = useState<string>( "" );
    const [ isMobile, setIsMobile ] = useState( false );
    const scrollTimeoutRef = useRef<NodeJS.Timeout>();
    const lastScrollYRef = useRef( 0 );

    // Throttled scroll handler
    const handleScroll = useCallback( () =>
    {
        const currentY = window.scrollY;

        // Show/hide navigation
        setHideNav( currentY > 100 && currentY > lastScrollYRef.current );
        lastScrollYRef.current = currentY;

        // Update active category with throttling
        if ( scrollTimeoutRef.current )
        {
            clearTimeout( scrollTimeoutRef.current );
        }

        scrollTimeoutRef.current = setTimeout( () =>
        {
            const categories = CLINICANS_ALL_IN_ONE.map( cat => ( {
                id: cat.id,
                element: document.getElementById( cat.id )
            } ) ).filter( cat => cat.element );

            const current = categories.find( cat =>
            {
                const rect = cat.element!.getBoundingClientRect();
                return rect.top <= 150 && rect.bottom >= 150;
            } );

            if ( current )
            {
                setActiveCategory( current.id );
            }
        }, 50 );
    }, [] );

    useEffect( () =>
    {
        // Check if mobile
        const checkMobile = () =>
        {
            setIsMobile( window.innerWidth < 1024 );
        };

        checkMobile();
        const resizeHandler = throttle( checkMobile, 200 );
        window.addEventListener( 'resize', resizeHandler );

        // Initialize scroll position
        lastScrollYRef.current = window.scrollY;

        // Add scroll event listener with passive for better performance
        window.addEventListener( "scroll", handleScroll, { passive: true } );

        return () =>
        {
            window.removeEventListener( "scroll", handleScroll );
            window.removeEventListener( 'resize', resizeHandler );
            if ( scrollTimeoutRef.current )
            {
                clearTimeout( scrollTimeoutRef.current );
            }
        };
    }, [ handleScroll ] );

    const scrollToCategory = useCallback( ( categoryId: string ) =>
    {
        const element = document.getElementById( categoryId );
        if ( element )
        {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo( {
                top: offsetPosition,
                behavior: 'smooth'
            } );
        }
    }, [] );

    return (
        <>
            <ClinicansStructuredData />

            {/* LOCAL NAV */ }
            <header
                className={ `sticky top-0 z-50 transition-transform duration-300 ${ hideNav ? "-translate-y-full" : "translate-y-0"
                    } border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm` }
                role="banner"
            >
                <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shadow-md">
                            <span className="text-white font-bold text-lg">C</span>
                        </div>
                        <div className="leading-tight">
                            <div className="text-sm font-bold text-slate-900">Clinicans</div>
                            <div className="text-[11px] text-slate-500 font-medium">
                                سیستم جامع مدیریت مطب و کلینیک
                            </div>
                        </div>
                    </div>

                    <nav aria-label="Primary Navigation">
                        <div className="flex gap-3">
                            <Link
                                href="/clinicans"
                                className="hidden sm:inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm"
                            >
                                <LuArrowLeft className="h-4 w-4 ml-1" />
                                بازگشت
                            </Link>
                            <Link
                                href="/contact-us?type=clinicans-demo"
                                className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white hover:from-blue-700 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                <LuSparkles className="h-4 w-4 ml-2" />
                                درخواست دمو رایگان
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Floating Category Navigation with Icons */ }
            { !isMobile && (
                <nav
                    className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
                    aria-label="Jump to Categories"
                >
                    <div className="bg-white rounded-2xl p-3 shadow-xl border border-slate-200">
                        <div className="space-y-2">
                            { CLINICANS_ALL_IN_ONE.slice( 0, 8 ).map( ( category ) =>
                            {
                                const IconComponent = categoryIcons[ category.id as keyof typeof categoryIcons ] || LuSettings;
                                return (
                                    <button
                                        key={ category.id }
                                        onClick={ () => scrollToCategory( category.id ) }
                                        className={ `flex items-center justify-center h-12 w-12 rounded-xl transition-all duration-200 ${ activeCategory === category.id
                                            ? 'bg-gradient-to-br from-blue-50 to-emerald-50 text-blue-600 ring-2 ring-blue-500/20'
                                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                                            }` }
                                        title={ category.title }
                                        aria-label={ `Jump to ${ category.title } section` }
                                    >
                                        <IconComponent className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                );
                            } ) }
                        </div>
                    </div>
                </nav>
            ) }

            {/* MAIN CONTENT */ }
            <main id="main-content" className="min-h-screen bg-gradient-to-b from-white to-slate-50" role="main">
                {/* HERO SECTION */ }
                <section
                    className="container mx-auto px-4 sm:px-6 py-12 md:py-20"
                    aria-labelledby="hero-title"
                >
                    <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                        <div className="lg:col-span-7 space-y-8">
                            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium shadow-sm">
                                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 animate-pulse" />
                                <span className="text-slate-700">یک اکوسیستم، تمام نیازهای کلینیک</span>
                                <span className="hidden sm:inline text-slate-400">•</span>
                                <span className="hidden sm:inline text-slate-500">مدیریت هوشمند مطب</span>
                            </div>

                            <div className="space-y-6">
                                <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                                    <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                                        Clinicans All-in-One
                                    </span>
                                    <span className="block mt-4 text-slate-800 text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed">
                                        اکوسیستم یکپارچه مدیریت، رشد و تصمیم‌سازی کلینیک
                                    </span>
                                    {/* SEO English Subtitle */ }
                                    <span className="block mt-2 text-sm md:text-base font-normal text-slate-500">
                                        Comprehensive Medical Practice Management Software
                                    </span>
                                </h1>

                                <p className="max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed">
                                    این صفحه برای <strong className="text-slate-800 font-semibold">تصمیم‌گیری آگاهانه مدیران</strong> طراحی شده است.
                                    Clinicans مجموعه‌ای از ماژول‌های جداگانه نیست؛
                                    بلکه اکوسیستمی است که داده، فرآیند و تجربه بیمار را
                                    در یک چرخه منسجم به هم متصل می‌کند.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3 pt-2">
                                { [
                                    [ "کنترل مراجعه", "کاهش No-Show و ازدحام" ],
                                    [ "شفافیت مالی", "گزارش مدیریتی دقیق" ],
                                    [ "رشد پایدار", "CRM و وفادارسازی" ],
                                ].map( ( [ k, v ] ) => (
                                    <div
                                        key={ k }
                                        className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
                                    >
                                        <div className="font-bold text-slate-800 text-base">{ k }</div>
                                        <div className="mt-1.5 text-sm text-slate-600">{ v }</div>
                                    </div>
                                ) ) }
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link
                                    href="#home"
                                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-emerald-600 transition-all duration-300"
                                >
                                    <LuSparkles className="h-5 w-5 ml-2" />
                                    مشاهده تمام قابلیت‌ها
                                </Link>
                                <Link
                                    href="/contact-us?type=clinicans-demo"
                                    className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
                                >
                                    <LuZap className="h-5 w-5 ml-2" />
                                    دریافت دمو رایگان
                                </Link>
                            </div>

                            <div className="text-sm text-slate-500 pt-4">
                                مناسب برای کلینیک‌های زیبایی، درمانی، دندانپزشکی و چندتخصصی
                            </div>
                        </div>

                        <aside className="lg:col-span-5 relative">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-3xl opacity-10 blur-xl"></div>
                                <Image
                                    src="/clinicans/all-in-one.png"
                                    alt="اکوسیستم نرم‌افزار مدیریت کلینیک Clinicans - Comprehensive clinic management ecosystem"
                                    width={ 600 }
                                    height={ 400 }
                                    priority
                                    className="rounded-3xl shadow-2xl relative z-10 w-fit h-fit overflow-hidden"
                                />
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                { [
                                    [ "۱۰۰+", "قابلیت" ],
                                    [ "۲۴/۷", "پشتیبانی" ],
                                    [ "۹۹.۹٪", "دسترسی" ],
                                    [ "۵۰۰+", "کلینیک" ],
                                ].map( ( [ value, label ] ) => (
                                    <div key={ label } className="text-center p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                                        <div className="text-2xl font-bold text-blue-600">{ value }</div>
                                        <div className="text-sm text-slate-600 mt-1">{ label }</div>
                                    </div>
                                ) ) }
                            </div>
                        </aside>
                    </div>
                </section>

                {/* MODULES GRID SECTION */ }
                <section
                    className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 md:py-24"
                    aria-label="قابلیت‌ها و ماژول‌های Clinicans"
                    id="features-overview"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-[0.03]" />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

                    <div id="home" className="container mx-auto px-4 sm:px-6 relative">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                                پلتفرم کامل مدیریت کلینیک
                            </h2>
                            <p className="text-lg text-slate-600">
                                تمام آنچه برای مدیریت یک مطب یا کلینیک مدرن و کاراید نیاز دارید
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                            { modules.map( ( item, idx ) =>
                            {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={ idx }
                                        onClick={ () => scrollToCategory( item.categoryId ) }
                                        className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-4 sm:p-5 shadow-lg hover:shadow-2xl border border-slate-200 transition-all duration-300 hover:-translate-y-1"
                                        aria-label={ `View ${ item.title } features` }
                                    >
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div
                                            className={ `relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl ${ item.bg } ${ item.color } group-hover:scale-110 transition-transform duration-300` }
                                        >
                                            <Icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
                                        </div>
                                        <div className="relative z-10 text-center">
                                            <span className="block text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                                                { item.title }
                                            </span>
                                        </div>
                                    </button>
                                );
                            } ) }
                        </div>

                        {/* Deep-Dive Link */ }
                    </div>
                </section>

                {/* MODULES BY CATEGORY */ }
                <section id="modules" className="container mx-auto px-4 sm:px-6 pb-24 space-y-16">
                    { CLINICANS_ALL_IN_ONE.map( ( group ) => (
                        <article
                            key={ group.id }
                            id={ group.id }
                            className="scroll-mt-24 bg-gradient-to-br from-white to-slate-50 rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                            aria-labelledby={ `category-${ group.id }-title` }
                        >
                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center">
                                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
                                            { ( () =>
                                            {
                                                const IconComponent = categoryIcons[ group.id as keyof typeof categoryIcons ];
                                                return IconComponent ? (
                                                    <IconComponent className="h-5 w-5 text-blue-600" aria-hidden="true" />
                                                ) : null;
                                            } )() }
                                        </div>
                                    </div>
                                    <div>
                                        <h2 id={ `category-${ group.id }-title` } className="text-2xl md:text-3xl font-bold text-slate-800">
                                            { group.title }
                                        </h2>
                                        <p className="text-slate-600 mt-2 max-w-3xl text-base md:text-lg leading-relaxed">
                                            { group.description }
                                        </p>
                                        {/* English SEO Content - Visible */ }
                                        <p className="text-sm text-slate-500 mt-2 italic">
                                            { group.enTitle }: { group.enDescription }
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                { group.modules.map( ( m ) => (
                                    <div
                                        key={ m.slug }
                                        className="group relative rounded-2xl border border-slate-200 bg-white p-5 hover:bg-gradient-to-br hover:from-blue-50 hover:to-emerald-50 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                                        role="article"
                                        aria-label={ m.title }
                                    >
                                        <div className="space-y-2">
                                            <h3 className="font-bold text-slate-800 text-base">
                                                { m.title }
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                { m.subtitle }
                                            </p>
                                            {/* English content for SEO */ }
                                            <div className="mt-2 pt-2 border-t border-slate-100">
                                                <p className="text-xs text-slate-500 italic">
                                                    { m.enTitle }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ) ) }
                            </div>
                        </article>
                    ) ) }
                </section>

                {/* CTA SECTION */ }
                <section
                    className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 py-20 md:py-28"
                    aria-labelledby="cta-title"
                >
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                    <div className="container mx-auto px-4 sm:px-6 relative">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <LuSparkles className="h-12 w-12 mx-auto mb-6 text-white/80" aria-hidden="true" />
                            <h3 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6">
                                آماده تغییر در مدیریت کلینیک خود هستید؟
                            </h3>
                            <p className="text-xl text-blue-50/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Clinicans را در عمل با یک دمو اختصاصی ببینید. ما دقیقاً نحوه کار آن را برای ساختار کلینیک شما نشان می‌دهیم—بدون ارائه‌های کلی.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact-us?type=clinicans-demo"
                                    className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                                >
                                    <LuZap className="h-5 w-5 ml-2" aria-hidden="true" />
                                    دریافت دمو اختصاصی رایگان
                                </Link>
                                <Link
                                    href="/contact-us?type=consultation"
                                    className="inline-flex items-center justify-center rounded-2xl border-2 border-white/30 bg-transparent px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                                >
                                    <LuTarget className="h-5 w-5 ml-2" aria-hidden="true" />
                                    رزرو مشاوره تخصصی
                                </Link>
                            </div>

                            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                { [
                                    [ "بدون هزینه راه‌اندازی", "شروع فوری" ],
                                    [ "۳۰ روز آزمایش رایگان", "آزمایش بدون ریسک" ],
                                    [ "پشتیبانی ۲۴/۷", "همیشه در دسترس" ],
                                    [ "آموزش رایگان", "راه‌اندازی کامل" ],
                                ].map( ( [ title, desc ] ) => (
                                    <div key={ title } className="text-white/90">
                                        <div className="text-xl font-bold">{ title }</div>
                                        <div className="text-sm opacity-80">{ desc }</div>
                                    </div>
                                ) ) }
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Mobile Bottom Navigation */ }
            { isMobile && (
                <nav
                    className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 py-3 px-4 shadow-2xl"
                    aria-label="Mobile Navigation"
                    role="navigation"
                >
                    <div className="flex justify-between items-center">
                        <Link
                            href="/clinicans"
                            className="flex items-center text-sm text-slate-600"
                            aria-label="Return to Clinicans"
                        >
                            <LuArrowLeft className="h-4 w-4 ml-1" aria-hidden="true" />
                            <span className="hidden sm:inline">بازگشت</span>
                        </Link>
                        <Link
                            href="#home"
                            className="flex-1 mx-4 text-center text-sm font-semibold text-blue-600"
                            aria-label="View Features"
                        >
                            قابلیت‌ها
                        </Link>
                        <Link
                            href="/contact-us?type=clinicans-demo"
                            className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                            aria-label="Request Demo"
                        >
                            دمو
                        </Link>
                    </div>
                </nav>
            ) }
        </>
    );
}