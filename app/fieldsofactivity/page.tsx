// app/solutions/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import
{
    LuFactory,
    LuActivity,
    LuDatabase,
    LuGlobe,
    LuShieldCheck,
    LuZap,
    LuArrowLeft,
    LuLayers,
    LuHouse,
    LuWifi,
    LuCloud,
    LuBrain,
    LuPlug,

    LuDollarSign,
    LuTarget,
    LuChartBar,
    LuUsers,
    LuCalendar,
    LuDownload
} from "react-icons/lu";

// 🧠 SEO METADATA
export const metadata: Metadata = {
    title: "راهکارهای هوشمند و فرصت‌های سرمایه‌گذاری | بارمان محور اسپادانا",
    description: "پلتفرم‌های درآمدزای بارمان: از اتوماسیون صنعتی تا سلامت دیجیتال. بررسی فرصت‌های سرمایه‌گذاری در انقلاب صنعتی چهارم.",
    keywords: [
        "سرمایه‌گذاری در فناوری",
        "انقلاب صنعتی چهارم",
        "پلتفرم درآمدزا",
        "فرصت سرمایه‌گذاری",
        "سری A",
        "نرم‌افزار SaaS",
        "IoT سرمایه‌گذاری"
    ],
    alternates: {
        canonical: "https://co-bms.ir/solutions",
    },
    openGraph: {
        title: "فرصت‌های سرمایه‌گذاری در راهکارهای هوشمند",
        description: "تحلیل بازار و پتانسیل درآمدی پلتفرم‌های بارمان برای سرمایه‌گذاران",
        type: "website",
        locale: "fa_IR",
    },
};

// 🧠 SOLUTIONS DATA with Investment Metrics
const solutionCategories = [
    {
        id: "platform",
        title: "پلتفرم دیجیتال (WIT)",
        subtitle: "هسته‌ی یکپارچه ساز",
        description: "پلتفرم مادر WIT که محصولات بارمان بر پایه آن توسعه یافته‌اند. مبنای هوشمندسازی در انقلاب صنعتی چهارم.",
        icon: LuCloud,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        features: [
            "معماری میکروسرویس مقیاس‌پذیر",
            "پلتفرم‌های ابری ترکیبی (Hybrid Cloud)",
            "API Gateway و مدیریت سرویس‌ها",
            "کانتینر سازی با Docker & Kubernetes",
        ],
        investmentMetrics: {
            marketSize: "۲,۵۰۰ میلیارد تومان",
            growthRate: "۳۵% سالانه",
            roiTimeframe: "۱۸-۲۴ ماه",
            stage: "Series A Ready"
        }
    },
    {
        id: "industry",
        title: "صنعت هوشمند (ICTS)",
        subtitle: "اتوماسیون صنعتی پیشرفته",
        description: "سیستم کنترل و مانیتورینگ هوشمند برای صنایع و زیرساخت‌های ملی. پروژه پایلوت موفق در ایستگاه‌های CNG.",
        icon: LuFactory,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        features: [
            "اتصال ماشین‌آلات به شبکه (IIoT)",
            "دوقلوی دیجیتال (Digital Twin)",
            "کنترل و مانیتورینگ بلادرنگ",
            "پیش‌بینی خرابی (Predictive Maintenance)",
        ],
        investmentMetrics: {
            marketSize: "۶,۰۰۰ میلیارد تومان",
            growthRate: "۴۰% سالانه",
            roiTimeframe: "۱۲-۱۸ ماه",
            stage: "Revenue Generating"
        }
    },
    {
        id: "automation",
        title: "اتوماسیون اداری",
        subtitle: "افزایش بهره‌وری سازمانی",
        description: "سیستم‌های افزایش کارایی و کاهش هزینه عملیاتی برای سازمان‌های متوسط و بزرگ.",
        icon: LuZap,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        features: [
            "اتوماسیون فرآیندهای اداری",
            "گردش کار هوشمند (Workflow)",
            "مدیریت اسناد الکترونیک",
            "یکپارچه‌سازی سیستم‌ها",
        ],
        investmentMetrics: {
            marketSize: "۱,۲۰۰ میلیارد تومان",
            growthRate: "۲۵% سالانه",
            roiTimeframe: "۱۲ ماه",
            stage: "Early Revenue"
        }
    },
    {
        id: "health",
        title: "سلامت دیجیتال (Clinicans)",
        subtitle: "پلتفرم مدیریت کلینیک",
        description: "سیستم جامع مدیریت مراکز درمانی با قابلیت افزایش ۳ برابری درآمد کلینیک‌ها.",
        icon: LuActivity,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        features: [
            "پرونده الکترونیک سلامت (EHR)",
            "نوبت‌دهی هوشمند و CRM",
            "مدیریت مالی و حسابداری",
            "سیستم ارجاع و کمیسیون",
        ],
        investmentMetrics: {
            marketSize: "۳,۰۰۰ میلیارد تومان",
            growthRate: "۵۰% سالانه",
            roiTimeframe: "۱۸ ماه",
            stage: "High Growth"
        }
    },
    {
        id: "energy",
        title: "انرژی هوشمند",
        subtitle: "بهینه‌سازی مصرف انرژی",
        description: "سیستم‌های پایش و کنترل مصرف انرژی در صنعت، ساختمان‌ها و زیرساخت‌های ملی.",
        icon: LuPlug,
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200",
        features: [
            "سنسورهای هوشمند مصرف انرژی",
            "پایش بلادرنگ مصرف",
            "بهینه‌سازی خودکار مصرف",
            "گزارش‌گیری تحلیلی انرژی",
        ],
        investmentMetrics: {
            marketSize: "۸۰۰ میلیارد تومان",
            growthRate: "۳۰% سالانه",
            roiTimeframe: "۱۵ ماه",
            stage: "Pilot Projects"
        }
    },
    {
        id: "smart-home",
        title: "خانه هوشمند",
        subtitle: "BMS و کنترل تاسیسات",
        description: "سیستم مدیریت هوشمند ساختمان با تمرکز بر صرفه‌جویی انرژی و افزایش رفاه ساکنین.",
        icon: LuHouse,
        color: "text-cyan-600",
        bgColor: "bg-cyan-50",
        borderColor: "border-cyan-200",
        features: [
            "سیستم مدیریت ساختمان (BMS)",
            "کنترل روشنایی و دمای هوشمند",
            "امنیت و نظارت تصویری",
            "مدیریت مصرف انرژی ساختمان",
        ],
        investmentMetrics: {
            marketSize: "۱,۵۰۰ میلیارد تومان",
            growthRate: "۴۵% سالانه",
            roiTimeframe: "۱۲ ماه",
            stage: "Early Market"
        }
    },
];

// 🧠 INDUSTRY 4.0 FEATURES with Investment Angle
const industry4Features = [
    {
        title: "اتصال ماشین‌آلات",
        description: "یکپارچه‌سازی تجهیزات صنعتی با پروتکل‌های استاندارد IIoT",
        icon: LuWifi,
        impact: "کاهش ۳۰% هزینه نگهداشت"
    },
    {
        title: "داده‌محوری",
        description: "تصمیم‌گیری مبتنی بر تحلیل داده‌های بلادرنگ",
        icon: LuDatabase,
        impact: "افزایش ۴۰% بهره‌وری"
    },
    {
        title: "خودکارسازی",
        description: "اتوماسیون کامل فرآیندهای تولید و کنترل کیفیت",
        icon: LuZap,
        impact: "کاهش ۵۰% خطای انسانی"
    },
    {
        title: "یادگیری ماشین",
        description: "بهینه‌سازی فرآیندها با الگوریتم‌های هوش مصنوعی",
        icon: LuBrain,
        impact: "پیش‌بینی ۹۰% خرابی‌ها"
    },
];

// 🧠 Investment Opportunities
const investmentOpportunities = [
    {
        title: "توسعه پلتفرم WIT",
        amount: "۱۵ میلیارد تومان",
        use: "توسعه تیم فنی و MVP بازارهای جدید",
        roi: "۳-۵x",
        timeline: "۱۸ ماه"
    },
    {
        title: "توسعه Clinicans",
        amount: "۵ میلیارد تومان",
        use: "افزایش تیم فروش و مارکتینگ",
        roi: "۴-۷x",
        timeline: "۱۲ ماه"
    },
    {
        title: "توسعه صنعتی ICTS",
        amount: "۱۰ میلیارد تومان",
        use: "توسعه سخت‌افزار و پروژه‌های پایلوت",
        roi: "۲-۴x",
        timeline: "۲۴ ماه"
    }
];

export default function SolutionsPage ()
{
    // 🧠 CRAWLER EMPATHY: CollectionPage Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "فرصت‌های سرمایه‌گذاری در راهکارهای هوشمند بارمان",
        description: "تحلیل بازار و پتانسیل درآمدی پلتفرم‌های اتوماسیون هوشمند",
        mainEntity: {
            "@type": "ItemList",
            itemListElement: solutionCategories.map( ( cat, index ) => ( {
                "@type": "ListItem",
                position: index + 1,
                name: `${ cat.title } - ${ cat.subtitle }`,
                description: cat.description,
                potentialAction: {
                    "@type": "InvestAction",
                    target: {
                        "@type": "EntryPoint",
                        urlTemplate: `https://co-bms.ir/invest/${ cat.id }`
                    }
                }
            } ) ),
        },
    };

    return (
        <>
            <Script
                id="json-ld-solutions"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <main id="main-content" className="flex flex-col w-full bg-gradient-to-b from-white to-slate-50">
                {/* 🧠 1. INVESTOR HERO SECTION */ }
                <section className="relative pt-32 pb-20 lg:pt-40 bg-white overflow-hidden border-b border-slate-200">
                    {/* Background Tech Pattern */ }
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-blue-200/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="max-w-5xl">
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                                    <LuDollarSign className="w-3.5 h-3.5" />
                                    فرصت سرمایه‌گذاری سری A
                                </span>
                                <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                                    <LuLayers className="w-3.5 h-3.5" />
                                    مجموعه راهکارهای درآمدزا
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.2] tracking-tight">
                                راهکارهایی که
                                <span className="block text-transparent bg-clip-text bg-gradient-to-l from-bms-primary to-bms-accent">
                                    ارزش سرمایه‌گذاری می‌سازند
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light max-w-3xl text-balance mb-8">
                                ما نه تنها تکنولوژی می‌سازیم، بلکه
                                <span className="text-slate-900 font-medium mx-1 border-b-2 border-emerald-200">
                                    مدل‌های درآمدی پایدار
                                </span>
                                ایجاد می‌کنیم. از پلتفرم مادر WIT تا محصولات تجاری Clinicans و ICTS.
                            </p>

                            {/* Investor Quick Stats */ }
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                                <div className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-sm transition-shadow">
                                    <div className="text-2xl font-bold text-slate-900">۶ حوزه</div>
                                    <div className="text-sm text-slate-600">راهکار درآمدزا</div>
                                </div>
                                <div className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-sm transition-shadow">
                                    <div className="text-2xl font-bold text-slate-900">۲۰۰%+</div>
                                    <div className="text-sm text-slate-600">رشد سالانه</div>
                                </div>
                                <div className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-sm transition-shadow">
                                    <div className="text-2xl font-bold text-slate-900">۱۵+ سال</div>
                                    <div className="text-sm text-slate-600">تجربه صنعتی</div>
                                </div>
                                <div className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-sm transition-shadow">
                                    <div className="text-2xl font-bold text-slate-900">۲ پروژه</div>
                                    <div className="text-sm text-slate-600">فعال و درآمدزا</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🧠 2. SOLUTIONS OVERVIEW GRID with Investment Metrics */ }
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <LuTarget className="h-5 w-5 text-emerald-600" />
                                <span className="text-sm font-bold tracking-wider text-emerald-600">
                                    سرمایه‌گذاری در راهکارهای اثبات‌شده
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                پورتفولیوی درآمدی بارمان
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                هر راهکار یک مدل درآمدی مستقل با پتانسیل رشد بالا و بازار هدف مشخص
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            { solutionCategories.map( ( category ) => (
                                <div
                                    key={ category.id }
                                    className={ `group relative p-6 rounded-2xl border ${ category.borderColor } ${ category.bgColor } hover:shadow-xl hover:-translate-y-1 transition-all duration-300` }
                                >
                                    <div className="absolute top-4 left-4">
                                        <div className={ `p-3 rounded-xl ${ category.bgColor } border ${ category.borderColor }` }>
                                            <category.icon className={ `w-6 h-6 ${ category.color }` } />
                                        </div>
                                    </div>

                                    <div className="pt-12">
                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 mb-1">{ category.title }</h3>
                                                <p className="text-sm text-slate-700">{ category.subtitle }</p>
                                            </div>
                                            <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                                                { category.investmentMetrics.stage }
                                            </span>
                                        </div>

                                        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                                            { category.description }
                                        </p>

                                        {/* Investment Metrics */ }
                                        <div className="mb-4 p-3 bg-white rounded-xl border border-slate-200">
                                            <div className="grid grid-cols-2 gap-2 text-xs">
                                                <div>
                                                    <div className="text-slate-500">بازار هدف</div>
                                                    <div className="font-semibold text-slate-900">{ category.investmentMetrics.marketSize }</div>
                                                </div>
                                                <div>
                                                    <div className="text-slate-500">رشد بازار</div>
                                                    <div className="font-semibold text-emerald-600">{ category.investmentMetrics.growthRate }</div>
                                                </div>
                                                <div>
                                                    <div className="text-slate-500">بازگشت سرمایه</div>
                                                    <div className="font-semibold text-slate-900">{ category.investmentMetrics.roiTimeframe }</div>
                                                </div>
                                                <div>
                                                    <div className="text-slate-500">مرحله</div>
                                                    <div className="font-semibold text-blue-600">{ category.investmentMetrics.stage }</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2 mb-4">
                                            { category.features.slice( 0, 2 ).map( ( feature, idx ) => (
                                                <div key={ idx } className="flex items-center gap-2">
                                                    <div className={ `w-1.5 h-1.5 rounded-full ${ category.bgColor }` } />
                                                    <span className="text-xs text-slate-700">{ feature }</span>
                                                </div>
                                            ) ) }
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <Link
                                                href={ `/solutions/${ category.id }` }
                                                className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-blue-600"
                                            >
                                                مشاهده جزئیات
                                                <LuArrowLeft className="w-3 h-3" />
                                            </Link>
                                            <Link
                                                href={ `/contact?type=investment-${ category.id }` }
                                                className="text-xs font-semibold bg-slate-900 text-white px-3 py-1 rounded-full hover:bg-slate-800 transition-colors"
                                            >
                                                سرمایه‌گذاری
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) ) }
                        </div>

                        {/* Investment Opportunities Summary */ }
                        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl border border-emerald-100 p-8">
                            <div className="grid md:grid-cols-3 gap-6">
                                { investmentOpportunities.map( ( opportunity, idx ) => (
                                    <div key={ idx } className="bg-white rounded-2xl border border-slate-200 p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="font-bold text-slate-900">{ opportunity.title }</h4>
                                            <span className="text-lg font-bold text-emerald-600">{ opportunity.roi }</span>
                                        </div>
                                        <div className="text-2xl font-bold text-slate-900 mb-2">{ opportunity.amount }</div>
                                        <p className="text-sm text-slate-600 mb-3">{ opportunity.use }</p>
                                        <div className="flex justify-between text-xs text-slate-500">
                                            <span>بازگشت سرمایه:</span>
                                            <span className="font-semibold">{ opportunity.timeline }</span>
                                        </div>
                                    </div>
                                ) ) }
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🧠 3. INDUSTRY 4.0 DEEP DIVE with Economic Impact */ }
                <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-emerald-300 font-mono text-xs mb-6">
                                    <LuGlobe className="w-3.5 h-3.5" />
                                    <span>انقلاب صنعتی چهارم = فرصت اقتصادی</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                    چرا صنعت ۴.۰ ارزش سرمایه‌گذاری دارد؟
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                                        +۴۰% افزایش بهره‌وری
                                    </span>
                                </h2>

                                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                    انقلاب صنعتی چهارم تنها یک تحول فنی نیست، بلکه یک
                                    <strong className="text-white"> فرصت اقتصادی بی‌نظیر</strong> است.
                                    سازمان‌هایی که زودتر وارد این عرصه شوند، از مزیت رقابتی ماندگاری برخوردار خواهند بود.
                                </p>

                                <div className="grid md:grid-cols-2 gap-4">
                                    { industry4Features.map( ( feature, idx ) =>
                                    {
                                        const Icon = feature.icon;
                                        return (
                                            <div
                                                key={ idx }
                                                className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 rounded-lg bg-white/10">
                                                            <Icon className="w-5 h-5 text-emerald-400" />
                                                        </div>
                                                        <h4 className="font-bold text-white">{ feature.title }</h4>
                                                    </div>
                                                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                                                        { feature.impact }
                                                    </span>
                                                </div>
                                                <p className="text-sm text-slate-400">{ feature.description }</p>
                                            </div>
                                        );
                                    } ) }
                                </div>
                            </div>

                            <div className="relative">
                                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl">
                                    <Image
                                        src="/images/worlds/industry4-smart-infra.svg"
                                        alt="صنعت هوشمند ۴.۰"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                                </div>

                                {/* Floating Economic Impact */ }
                                <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white max-w-xs">
                                    <div className="text-sm font-semibold mb-2">تأثیر اقتصادی صنعت ۴.۰</div>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>افزایش بهره‌وری</span>
                                                <span className="text-emerald-300">+۴۰%</span>
                                            </div>
                                            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-emerald-500 h-full w-4/5" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>کاهش هزینه عملیاتی</span>
                                                <span className="text-emerald-300">-۳۰%</span>
                                            </div>
                                            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-emerald-500 h-full w-3/4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🧠 4. REVENUE MODEL ANALYSIS */ }
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <LuChartBar className="h-5 w-5 text-indigo-600" />
                                <span className="text-sm font-bold tracking-wider text-indigo-600">
                                    تحلیل مدل درآمدی
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                چگونه پول در می‌آوریم؟
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                ترکیب هوشمندانه مدل‌های درآمدی برای ایجاد جریان‌های نقدی متنوع و پایدار
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-8">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                                    <LuCloud className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">SaaS اشتراکی</h4>
                                <p className="text-slate-600 mb-4">
                                    درآمد ماهانه/سالانه ثابت از اشتراک پلتفرم‌های نرم‌افزاری
                                </p>
                                <div className="text-sm text-blue-600 font-semibold">
                                    حاشیه سود: ۸۵%+
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100 p-8">
                                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
                                    <LuFactory className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">پروژه‌های صنعتی</h4>
                                <p className="text-slate-600 mb-4">
                                    اجرای پروژه‌های بزرگ اتوماسیون برای سازمان‌های دولتی و خصوصی
                                </p>
                                <div className="text-sm text-amber-600 font-semibold">
                                    حاشیه سود: ۶۰%+
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 p-8">
                                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                                    <LuActivity className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">درآمد تراکنشی</h4>
                                <p className="text-slate-600 mb-4">
                                    کمیسیون از خدمات و تراکنش‌های انجام شده در پلتفرم
                                </p>
                                <div className="text-sm text-emerald-600 font-semibold">
                                    حاشیه سود: ۹۵%+
                                </div>
                            </div>
                        </div>

                        {/* Revenue Projection */ }
                        <div className="mt-16 bg-gradient-to-r from-slate-50 to-white rounded-3xl border border-slate-200 p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">پیش‌بینی درآمد ۵ ساله</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-slate-100">
                                            <th className="text-right p-4 font-semibold text-slate-700 border-b border-slate-200">سال</th>
                                            <th className="text-right p-4 font-semibold text-slate-700 border-b border-slate-200">SaaS</th>
                                            <th className="text-right p-4 font-semibold text-slate-700 border-b border-slate-200">پروژه‌ها</th>
                                            <th className="text-right p-4 font-semibold text-slate-700 border-b border-slate-200">تراکنش</th>
                                            <th className="text-right p-4 font-bold text-slate-900 border-b border-slate-200">مجموع</th>
                                            <th className="text-right p-4 font-bold text-emerald-600 border-b border-slate-200">رشد</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { [
                                            { year: "۱۴۰۳", saas: "۸", projects: "۱۲", transaction: "۴", total: "۲۴", growth: "۲۰۰%" },
                                            { year: "۱۴۰۴", saas: "۲۵", projects: "۲۰", transaction: "۱۵", total: "۶۰", growth: "۱۵۰%" },
                                            { year: "۱۴۰۵", saas: "۶۰", projects: "۳۰", transaction: "۵۰", total: "۱۴۰", growth: "۱۳۳%" },
                                            { year: "۱۴۰۶", saas: "۱۵۰", projects: "۵۰", transaction: "۱۵۰", total: "۳۵۰", growth: "۱۵۰%" },
                                            { year: "۱۴۰۷", saas: "۳۰۰", projects: "۱۰۰", transaction: "۴۰۰", total: "۸۰۰", growth: "۱۲۹%" },
                                        ].map( ( row, idx ) => (
                                            <tr key={ idx } className="hover:bg-slate-50">
                                                <td className="p-4 border-b border-slate-100 font-semibold text-slate-900">{ row.year }</td>
                                                <td className="p-4 border-b border-slate-100">{ row.saas }</td>
                                                <td className="p-4 border-b border-slate-100">{ row.projects }</td>
                                                <td className="p-4 border-b border-slate-100">{ row.transaction }</td>
                                                <td className="p-4 border-b border-slate-100 font-bold text-slate-900">{ row.total }</td>
                                                <td className="p-4 border-b border-slate-100">
                                                    <span className="font-bold text-emerald-600">{ row.growth }</span>
                                                </td>
                                            </tr>
                                        ) ) }
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 text-sm text-slate-500">
                                * اعداد بر حسب میلیارد تومان | بر اساس قراردادهای موجود و تحلیل بازار
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🧠 5. COMPETITIVE ADVANTAGE */ }
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                مزیت رقابتی ما چیست؟
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                عواملی که بارمان را از رقبا متمایز می‌کند و موفقیت سرمایه‌گذاری را تضمین می‌کند
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            { [
                                {
                                    title: "تیم فنی عمیق",
                                    description: "۱۵+ سال تجربه صنعتی و فنی",
                                    icon: LuUsers,
                                    color: "text-blue-600",
                                    bg: "bg-blue-50"
                                },
                                {
                                    title: "فناوری بومی",
                                    description: "مستقل از تحریم‌ها و تکنولوژی خارجی",
                                    icon: LuShieldCheck,
                                    color: "text-emerald-600",
                                    bg: "bg-emerald-50"
                                },
                                {
                                    title: "بازار اثبات‌شده",
                                    description: "پروژه‌های موفق در صنایع بزرگ",
                                    icon: LuTarget,
                                    color: "text-amber-600",
                                    bg: "bg-amber-50"
                                },
                                {
                                    title: "پتانسیل صادرات",
                                    description: "قابلیت عرضه به بازارهای منطقه‌ای",
                                    icon: LuGlobe,
                                    color: "text-purple-600",
                                    bg: "bg-purple-50"
                                }
                            ].map( ( item, idx ) => (
                                <div key={ idx } className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                                    <div className={ `${ item.bg } w-12 h-12 rounded-xl flex items-center justify-center ${ item.color } mb-4` }>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2">{ item.title }</h4>
                                    <p className="text-sm text-slate-600">{ item.description }</p>
                                </div>
                            ) ) }
                        </div>
                    </div>
                </section>

                {/* 🧠 6. INVESTOR CTA */ }
                <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 text-white text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm mb-6">
                            <LuDollarSign className="w-4 h-4" />
                            <span>آماده سرمایه‌گذاری هستید؟</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            همراهی در خلق ارزش
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                            ما نه تنها تکنولوژی می‌سازیم، بلکه کسب‌وکارهای سودآور ایجاد می‌کنیم.
                            اگر به دنبال فرصت سرمایه‌گذاری با پتانسیل رشد بالا هستید، با ما همراه شوید.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            <Link
                                href="/contact?type=investor-meeting"
                                className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-lg"
                            >
                                <LuCalendar className="inline-block ml-2 h-5 w-5" />
                                رزرو جلسه با تیم سرمایه‌گذاری
                            </Link>
                            <Link
                                href="/investors/deck.pdf"
                                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all border-2 border-white/30"
                                target="_blank"
                            >
                                <LuDownload className="inline-block ml-2 h-5 w-5" />
                                دانلود پرزنتیشن سرمایه‌گذاری
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
                            <div className="text-center">
                                <div className="text-2xl font-bold">۲۰+</div>
                                <div className="text-slate-400">پروژه موفق</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold">۱۵%</div>
                                <div className="text-slate-400">سهم بازار هدف</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold">۳-۵x</div>
                                <div className="text-slate-400">پتانسیل ROI</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}