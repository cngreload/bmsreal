// app/technologies/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

// Import Si icons from react-icons/si
import
{
    SiLaravel,
    SiSharp,
    SiNextdotjs,
    SiDotnet,
    SiDjango,
    SiPython,
    SiReact,
    SiMysql,
    SiTailwindcss,
    SiThreedotjs,
    SiCplusplus,
} from "react-icons/si";

// Import Lu icons from react-icons/lu
import
{
    LuCpu,
    LuCloud,
    LuCircuitBoard,
    LuServer,
    LuLayoutDashboard,
    LuWifi,
    LuScan,
    LuRadio,
    LuBrainCircuit,
    LuCode,
    LuAward,
    LuTrendingUp,
    LuChevronLeft,
    LuHouse,
    LuDollarSign,
    LuShield,
    LuZap,
    LuLock,
    LuUsers,
    LuDownload,

} from "react-icons/lu";

// 🧠 SEO METADATA
export const metadata: Metadata = {
    title: "فناوری‌های پیشرفته و مزیت رقابتی | مهندسی بارمان",
    description: "بررسی عمیق استک فنی بارمان و مزیت‌های رقابتی آن برای سرمایه‌گذاران. معماری مقیاس‌پذیر و فناوری‌های اختصاصی.",
    keywords: [
        "فناوری اختصاصی",
        "مزیت رقابتی فنی",
        "معماری میکروسرویس",
        "هوش مصنوعی صنعتی",
        "پلتفرم بومی",
        "سرمایه‌گذاری فناوری"
    ],
    alternates: {
        canonical: "https://co-bms.ir/technologies",
    },
};

// 🧠 DATA: GROWTH STAGES with Business Value
const evolutionSteps = [
    {
        id: "hardware",
        step: "۰۱",
        title: "بومی‌سازی سخت‌افزار",
        en: "Hardware Sovereignty",
        desc: "طراحی و تولید بردهای الکترونیکی اختصاصی برای کاهش وابستگی و افزایش امنیت ملی.",
        businessValue: "کاهش ۶۰% هزینه سخت‌افزار",
        icon: LuCircuitBoard,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
    },
    {
        id: "connectivity",
        step: "۰۲",
        title: "اتصال و شبکه اشیاء",
        en: "Secure IoT Infrastructure",
        desc: "پیاده‌سازی پروتکل‌های امن صنعتی با رمزنگاری سخت‌افزاری برای حفاظت از داده‌های حیاتی.",
        businessValue: "افزایش ۴۰% سرعت انتقال داده",
        icon: LuWifi,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
    },
    {
        id: "platform",
        step: "۰۳",
        title: "پلتفرم ابری داده",
        en: "Scalable Digital Platform",
        desc: "معماری میکروسرویس مقیاس‌پذیر برای مدیریت میلیون‌ها تراکنش در ثانیه.",
        businessValue: "کاهش ۷۰% هزینه توسعه",
        icon: LuLayoutDashboard,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
    },
    {
        id: "ai",
        step: "۰۴",
        title: "هوش مصنوعی و عامل‌ها",
        en: "AI at the Edge",
        desc: "پردازش تصویر و صدا در لبه شبکه برای کاهش تأخیر و افزایش امنیت.",
        businessValue: "افزایش ۳۰% کارایی عملیاتی",
        icon: LuBrainCircuit,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
    },
];

// 🧠 DATA: TECH STACK with Competitive Advantage
const techCategories = [
    {
        title: "لایه سخت‌افزار و فیلد",
        subtitle: "Hardware Sovereignty",
        icon: LuCpu,
        competitiveAdvantage: "استقلال از تحریم‌های سخت‌افزاری",
        items: [
            {
                icon: LuRadio,
                name: "Industrial Sensors",
                desc: "Data Acquisition",
                color: "text-slate-600",
                advantage: "قیمت ۴۰% ارزان‌تر از نمونه خارجی"
            },
            {
                icon: LuScan,
                name: "RFID / NFC",
                desc: "Identification",
                color: "text-slate-600",
                advantage: "دقت ۹۹.۹% در شناسایی"
            },
            {
                icon: LuWifi,
                name: "IoT Protocols",
                desc: "MQTT / Modbus",
                color: "text-blue-600",
                advantage: "امنیت ارتقا یافته"
            },
            {
                icon: SiCplusplus,
                name: "Embedded C++",
                desc: "Real-time OS",
                color: "text-blue-800",
                advantage: "بهینه‌سازی مصرف انرژی"
            },
            {
                icon: LuCircuitBoard,
                name: "Altium Designer",
                desc: "PCB Design",
                color: "text-amber-600",
                advantage: "تولید داخلی کامل"
            },
        ],
    },
    {
        title: "هسته و بک‌اند",
        subtitle: "Enterprise Grade",
        icon: LuServer,
        competitiveAdvantage: "مقیاس‌پذیری بی‌نهایت",
        items: [
            {
                icon: SiSharp,
                name: "C#",
                desc: "Business Logic",
                color: "text-purple-600",
                advantage: "سرعت اجرای بالا"
            },
            {
                icon: SiDotnet,
                name: ".NET Core",
                desc: "High Perf API",
                color: "text-indigo-600",
                advantage: "پشتیبانی مایکروسافت"
            },
            {
                icon: SiPython,
                name: "Python",
                desc: "AI & Data Processing",
                color: "text-yellow-600",
                advantage: "کتابخانه‌های پیشرفته"
            },
            {
                icon: SiDjango,
                name: "Django",
                desc: "Admin Panels",
                color: "text-emerald-700",
                advantage: "امنیت داخلی قوی"
            },
            {
                icon: SiMysql,
                name: "PostgreSQL",
                desc: "Relational DB",
                color: "text-blue-600",
                advantage: "مقیاس‌پذیری افقی"
            },
        ],
    },
    {
        title: "رابط کاربری دیجیتال",
        subtitle: "Modern User Experience",
        icon: LuLayoutDashboard,
        competitiveAdvantage: "تجربه کاربری سطح جهانی",
        items: [
            {
                icon: SiNextdotjs,
                name: "Next.js 14",
                desc: "App Framework",
                color: "text-slate-900",
                advantage: "SEO و Performance بالا"
            },
            {
                icon: SiReact,
                name: "React",
                desc: "Component Library",
                color: "text-sky-500",
                advantage: "جامعه بزرگ توسعه‌دهنده"
            },
            {
                icon: SiTailwindcss,
                name: "Tailwind CSS",
                desc: "Design System",
                color: "text-cyan-500",
                advantage: "سرعت توسعه ۳ برابری"
            },
            {
                icon: SiThreedotjs,
                name: "Three.js",
                desc: "3D Visualization",
                color: "text-slate-800",
                advantage: "ویژوالیزیشن حرفه‌ای"
            },
            {
                icon: SiLaravel,
                name: "Laravel",
                desc: "Support Services",
                color: "text-red-600",
                advantage: "اکو سیستم کامل"
            },
        ],
    },
];

// 🧠 IP & Patents
const intellectualProperties = [
    {
        title: "معماری WIT",
        type: "پلتفرم مادر",
        status: "ثبت اختراع در حال انجام",
        value: "ارزش استراتژیک بالا"
    },
    {
        title: "الگوریتم پیش‌بینی خرابی",
        type: "هوش مصنوعی",
        status: "ثبت نرم‌افزار",
        value: "دقت ۹۵%"
    },
    {
        title: "سیستم مدیریت کلینیک",
        type: "نرم‌افزار",
        status: "ثبت شده",
        value: "مدل درآمدی اثبات شده"
    },
    {
        title: "پروتکل امنیتی IIoT",
        type: "پروتکل ارتباطی",
        status: "در حال ثبت",
        value: "امنیت ارتش‌سطح"
    }
];

export default function TechnologiesPage ()
{
    // 🧠 CRAWLER EMPATHY: ItemList Schema for Tech Stack
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Barman Technology Stack and Competitive Advantages",
        description: "Advanced technologies and proprietary solutions that create competitive moat for investors.",
        itemListElement: techCategories.flatMap( ( cat, catIdx ) =>
            cat.items.map( ( item, itemIdx ) => ( {
                "@type": "ListItem",
                position: catIdx * 10 + itemIdx + 1,
                name: item.name,
                description: `${ item.desc } - ${ item.advantage }`,
                additionalProperty: {
                    "@type": "PropertyValue",
                    name: "Competitive Advantage",
                    value: item.advantage
                }
            } ) )
        ),
    };

    return (
        <>
            <Script
                id="json-ld-tech"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <main id="main-content" className="flex flex-col w-full bg-gradient-to-b from-white to-slate-50 min-h-screen">
                {/* Navigation Anchor */ }
                <div className="border-b border-slate-200 bg-white py-3">
                    <div className="container mx-auto flex max-w-6xl items-center justify-between px-4">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Link
                                href="/"
                                className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
                            >
                                <LuHouse className="h-3 w-3" />
                                <span>خانه</span>
                            </Link>
                            <LuChevronLeft className="h-3 w-3 opacity-50" />
                            <span className="font-medium text-indigo-600">زیرساخت فنی و مزیت رقابتی</span>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-xs">
                            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                بررسی فنی برای سرمایه‌گذاران
                            </span>
                        </div>
                    </div>
                </div>

                {/* 🧠 1. INVESTOR-FOCUSED HERO */ }
                <section className="relative pt-20 pb-20 overflow-hidden bg-white border-b border-slate-200">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />

                    <div className="container relative z-10 mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider font-mono">
                                        <LuCode className="w-4 h-4" />
                                        Deep Tech Investment
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-600">
                                        <LuShield className="w-4 h-4" />
                                        Competitive Moat
                                    </div>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-8">
                                    فناوری‌هایی که
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-bms-primary via-indigo-600 to-purple-600">
                                        مزیت رقابتی می‌سازند
                                    </span>
                                </h1>

                                <p className="max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                                    در دنیای رقابتی امروز،
                                    <strong className="text-slate-900"> مزیت فنی برابر است با مزیت رقابتی</strong>.
                                    استک تکنولوژی بارمان نه تنها محصولات بهتر، بلکه
                                    <em className="text-slate-900"> موانع ورود بالاتر</em> برای رقبا ایجاد می‌کند.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="#competitive-advantage"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all"
                                    >
                                        <LuTrendingUp className="h-4 w-4" />
                                        مشاهده مزیت‌های رقابتی
                                    </Link>
                                    <Link
                                        href="/contact?type=tech-due-diligence"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
                                    >
                                        <LuDollarSign className="h-4 w-4" />
                                        درخواست Due Diligence فنی
                                    </Link>
                                </div>
                            </div>

                            {/* Tech Stack Visualization */ }
                            <div className="relative">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-4">
                                        <div className="bg-gradient-to-br from-amber-50 to-white p-4 rounded-2xl border border-amber-200">
                                            <LuCircuitBoard className="h-8 w-8 text-amber-600 mb-2" />
                                            <div className="text-sm font-semibold text-slate-900">سخت‌افزار</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-2xl border border-blue-200">
                                            <LuServer className="h-8 w-8 text-blue-600 mb-2" />
                                            <div className="text-sm font-semibold text-slate-900">بک‌اند</div>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mt-8">
                                        <div className="bg-gradient-to-br from-emerald-50 to-white p-4 rounded-2xl border border-emerald-200">
                                            <LuWifi className="h-8 w-8 text-emerald-600 mb-2" />
                                            <div className="text-sm font-semibold text-slate-900">IoT</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-2xl border border-purple-200">
                                            <LuBrainCircuit className="h-8 w-8 text-purple-600 mb-2" />
                                            <div className="text-sm font-semibold text-slate-900">هوش مصنوعی</div>
                                        </div>
                                    </div>
                                    <div className="space-y-4 mt-16">
                                        <div className="bg-gradient-to-br from-indigo-50 to-white p-4 rounded-2xl border border-indigo-200">
                                            <LuLayoutDashboard className="h-8 w-8 text-indigo-600 mb-2" />
                                            <div className="text-sm font-semibold text-slate-900">فرانت‌اند</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-rose-50 to-white p-4 rounded-2xl border border-rose-200">
                                            <LuCloud className="h-8 w-8 text-rose-600 mb-2" />
                                            <div className="text-sm font-semibold text-slate-900">ابر</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🧠 2. TECHNOLOGY EVOLUTION with Business Impact */ }
                <section
                    className="py-24 bg-slate-900 text-white relative overflow-hidden"
                    aria-labelledby="evolution-heading"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-[100px]" />

                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            {/* Narrative */ }
                            <div className="lg:w-1/3 sticky top-24">
                                <div className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-4">
                                    <LuAward className="w-6 h-6" />
                                    <h2 id="evolution-heading" className="text-sm uppercase tracking-widest">
                                        تحول تکنولوژیک = ارزش کسب‌وکار
                                    </h2>
                                </div>
                                <p className="text-3xl font-bold mb-6 leading-tight">
                                    از مهندسی عمیق تا
                                    <span className="text-indigo-400"> مزیت رقابتی پایدار</span>
                                </p>
                                <p className="text-slate-400 leading-relaxed mb-8 text-sm text-justify">
                                    مسیر بلوغ فناوری ما مستقیماً به افزایش ارزش کسب‌وکار منجر شده است.
                                    هر لایه عمیق‌تر از فناوری، موانع ورود بالاتری برای رقبا ایجاد می‌کند.
                                </p>

                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="text-4xl font-bold text-white">
                                            ۱۰۰<span className="text-emerald-400 text-2xl">%</span>
                                        </div>
                                        <div className="text-xs text-slate-400 uppercase tracking-widest font-mono">
                                            Proprietary
                                            <br />
                                            Technology
                                        </div>
                                    </div>
                                    <div className="text-sm text-slate-300 mt-2">
                                        هیچ وابستگی به تکنولوژی خارجی
                                    </div>
                                </div>
                            </div>

                            {/* Timeline with Business Impact */ }
                            <ol className="lg:w-2/3 grid gap-6">
                                { evolutionSteps.map( ( item ) =>
                                {
                                    const Icon = item.icon;
                                    return (
                                        <li
                                            key={ item.id }
                                            className={ `group flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${ item.border }` }
                                        >
                                            {/* Step Number */ }
                                            <div className="flex-shrink-0">
                                                <div className={ `w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-black/20 ${ item.bg } ${ item.color }` }>
                                                    <span className="text-2xl font-bold">{ item.step }</span>
                                                </div>
                                            </div>

                                            {/* Content */ }
                                            <div className="flex-1">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                                                            { item.title }
                                                        </h3>
                                                        <div className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                                                            { item.en }
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 md:mt-0">
                                                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                                                            <LuTrendingUp className="h-3 w-3" />
                                                            { item.businessValue }
                                                        </span>
                                                    </div>
                                                </div>

                                                <p className="text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-3 mt-1">
                                                    { item.desc }
                                                </p>

                                                {/* Technology Icon */ }
                                                <div className="mt-4 flex justify-end">
                                                    <Icon className={ `w-8 h-8 ${ item.color } opacity-50 group-hover:opacity-100 transition-opacity` } />
                                                </div>
                                            </div>
                                        </li>
                                    );
                                } ) }
                            </ol>
                        </div>
                    </div>
                </section>

                {/* 🧠 3. TECH STACK GRID with Competitive Advantages */ }
                <section className="py-24 bg-slate-50" aria-labelledby="stack-heading">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16 space-y-4">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <LuZap className="h-5 w-5 text-indigo-600" />
                                <span className="text-sm font-bold tracking-wider text-indigo-600">
                                    مزیت رقابتی در هر لایه
                                </span>
                            </div>
                            <h2 id="stack-heading" className="text-3xl font-bold text-slate-900">
                                معماری فناوری: سلاح رقابتی ما
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                هر جزء از استک تکنولوژی ما نه تنها عملکرد، بلکه مزیت رقابتی ایجاد می‌کند
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            { techCategories.map( ( category, idx ) => (
                                <div
                                    key={ idx }
                                    className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-slate-100 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                                >
                                    {/* Category Header */ }
                                    <div className="flex items-start justify-between mb-8 relative z-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 flex items-center justify-center text-slate-700">
                                                <category.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900">{ category.title }</h3>
                                                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                                                    { category.subtitle }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Competitive Advantage */ }
                                    <div className="mb-6 p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200">
                                        <div className="flex items-center gap-2 mb-2">
                                            <LuShield className="h-4 w-4 text-emerald-600" />
                                            <span className="text-sm font-semibold text-slate-900">مزیت رقابتی:</span>
                                        </div>
                                        <p className="text-sm text-slate-700">{ category.competitiveAdvantage }</p>
                                    </div>

                                    {/* Technology Items */ }
                                    <ul className="space-y-3 relative z-10">
                                        { category.items.map( ( tech, tIdx ) =>
                                        {
                                            const TechIcon = tech.icon;
                                            return (
                                                <li
                                                    key={ tIdx }
                                                    className="group/item flex items-center justify-between p-4 rounded-xl bg-slate-50/50 hover:bg-white transition-all border border-transparent hover:border-slate-200 hover:shadow-sm"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <TechIcon className={ `w-5 h-5 ${ tech.color }` } />
                                                        <div>
                                                            <span className="font-bold text-slate-900 text-sm">
                                                                { tech.name }
                                                            </span>
                                                            <div className="text-xs text-slate-500">{ tech.desc }</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-left">
                                                        <div className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                                                            { tech.advantage }
                                                        </div>
                                                    </div>
                                                </li>
                                            );
                                        } ) }
                                    </ul>

                                    {/* Background Decoration */ }
                                    <div className="absolute -bottom-6 -left-6 w-32 h-32 opacity-5 text-slate-900 pointer-events-none group-hover:scale-125 transition-transform duration-700">
                                        <category.icon className="w-full h-full" />
                                    </div>
                                </div>
                            ) ) }
                        </div>
                    </div>
                </section>

                {/* 🧠 4. INTELLECTUAL PROPERTY & PATENTS */ }
                <section className="py-24 bg-white border-y border-slate-200">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <LuLock className="h-5 w-5 text-purple-600" />
                                <span className="text-sm font-bold tracking-wider text-purple-600">
                                    دارایی‌های فکری و ثبت اختراع
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                حفاظت از مزیت رقابتی
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                فناوری‌های اختصاصی ما در حال ثبت به عنوان دارایی‌های فکری هستند
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            { intellectualProperties.map( ( ip, idx ) => (
                                <div key={ idx } className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="font-bold text-slate-900">{ ip.title }</h4>
                                        <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-2 py-1 rounded">
                                            { ip.type }
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <div className="text-xs text-slate-500 mb-1">وضعیت</div>
                                        <div className="text-sm font-semibold text-slate-900">{ ip.status }</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 mb-1">ارزش</div>
                                        <div className="text-sm text-emerald-600 font-semibold">{ ip.value }</div>
                                    </div>
                                </div>
                            ) ) }
                        </div>

                        <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">پورتفولیوی IP در حال رشد</h3>
                                    <p className="text-slate-600">
                                        ۴ دارایی فکری ثبت شده و ۶ در حال ثبت - ارزش تخمینی: ۵۰ میلیارد تومان
                                    </p>
                                </div>
                                <Link
                                    href="/contact?type=ip-portfolio"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all"
                                >
                                    <LuLock className="h-4 w-4" />
                                    مشاهده پورتفولیوی IP
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🧠 5. TECHNICAL DUE DILIGENCE CTA */ }
                <section className="py-24 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm mb-6">
                            <LuDollarSign className="w-4 h-4" />
                            <span>برای سرمایه‌گذاران فنی</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            نیاز به Due Diligence فنی دارید؟
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            ما تمام مستندات فنی، معماری سیستم، کد منبع و گزارش‌های تست را برای بررسی دقیق سرمایه‌گذاران آماده کرده‌ایم.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <div className="text-2xl font-bold mb-2">۱۰۰%</div>
                                <div className="text-sm text-slate-300">دسترسی به کد منبع</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <div className="text-2xl font-bold mb-2">۴۰+</div>
                                <div className="text-sm text-slate-300">سند معماری و طراحی</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <div className="text-2xl font-bold mb-2">۹۵%</div>
                                <div className="text-sm text-slate-300">پوشش تست نرم‌افزار</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact?type=tech-due-diligence"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-slate-900 px-8 py-4 font-semibold hover:bg-slate-100 transition-colors"
                            >
                                <LuUsers className="h-4 w-4" />
                                درخواست جلسه با تیم فنی
                            </Link>
                            <Link
                                href="/investors/tech-due-diligence.pdf"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/10 transition-colors"
                                target="_blank"
                            >
                                <LuDownload className="h-4 w-4" />
                                دانلود نمونه گزارش Due Diligence
                            </Link>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/20">
                            <p className="text-sm text-slate-400">
                                برای سرمایه‌گذاران نهادی: امکان بازدید از آزمایشگاه و مشاهده نمونه‌های فیزیکی فراهم است
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}