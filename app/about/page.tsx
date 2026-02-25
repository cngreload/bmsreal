// app/about/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import
{
    LuBookOpen,
    LuTarget,
    LuGem,
    LuUsers,
    LuScale,
    LuShieldCheck,
    LuNetwork,
    LuArrowLeft
} from "react-icons/lu";

// 🧠 CRAWLER EMPATHY: Metadata with E-E-A-T keywords
export const metadata: Metadata = {
    title: "درباره ما | شرکت دانش‌بنیان بارمان محور اسپادانا",
    description: "با داستان، ماموریت، ارزش‌ها و تیم شرکت دانش‌بنیان بارمان محور اسپادانا آشنا شوید. پیشگام در هوشمندسازی صنعتی، انرژی و سلامت.",
    alternates: {
        canonical: "https://co-bms.ir/about",
    }
};

// 🧠 CRAWLER EMPATHY: Iconography added to data for visual anchoring
const aboutPillars = [
    {
        href: "/about/story",
        title: "داستان ما",
        icon: LuBookOpen,
        desc: "از تجربه میدانی در صنعت CNG تا خلق پلتفرم‌های نرم‌افزاری بومی.",
    },
    {
        href: "/about/mission",
        title: "ماموریت ما",
        icon: LuTarget,
        desc: "طراحی زیرساخت‌های هوشمند برای کنترل، پایش و تصمیم‌سازی داده‌محور.",
    },
    {
        href: "/about/values",
        title: "ارزش‌های محوری",
        icon: LuGem,
        desc: "واقعیت‌محوری، بومی‌سازی عمیق، شفافیت و ایمنی به عنوان ستون‌های هویت ما.",
    },
    {
        href: "/about/team",
        title: "تیم راهبر",
        icon: LuUsers,
        desc: "ترکیبی از تجربه عملیاتی، مهندسی نرم‌افزار و نگاه استراتژیک به آینده.",
    },
    {
        href: "/about/governance",
        title: "حاکمیت شرکتی",
        icon: LuScale,
        desc: "ساختار شفاف و پاسخگو مبتنی بر مدیریت ریسک برای پروژه‌های ملی.",
    },
    {
        href: "/about/code-of-ethics",
        title: "منشور اخلاقی",
        icon: LuShieldCheck,
        desc: "تعهد ما به ایمنی، صداقت و محرمانگی داده‌ها در تمام سطوح.",
    },
    {
        href: "/about/ecosystem",
        title: "اکوسیستم همکاری",
        icon: LuNetwork,
        desc: "همکاری با دولت، بخش خصوصی، دانشگاه‌ها و شرکای فناور.",
    },
];

export default function AboutOverviewPage ()
{
    // 🧠 CRAWLER EMPATHY: Breadcrumb Schema for navigation context
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "خانه", "item": "https://co-bms.ir" },
            { "@type": "ListItem", "position": 2, "name": "درباره ما", "item": "https://co-bms.ir/about" }
        ]
    };

    return (
        <>
            <Script
                id="json-ld-about"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />
            <div id="main-content" className="bg-slate-50 min-h-screen">
                <div className="container mx-auto max-w-6xl px-4 py-12 md:py-20 space-y-16">

                    {/* Hero Section */ }
                    <section className="text-center space-y-4" aria-labelledby="about-heading">
                        <div className="flex justify-center">
                            <span className="inline-block rounded-lg bg-bms-primary/10 px-3 py-1 text-xs font-bold text-bms-primary border border-bms-primary/20">
                                هویت و چشم‌انداز
                            </span>
                        </div>
                        <h1 id="about-heading" className="text-3xl font-bold text-bms-dark md:text-4xl lg:text-5xl tracking-tight">
                            درباره <span className="text-bms-primary">بارمان محور اسپادانا</span>
                        </h1>
                        <p className="mx-auto max-w-3xl text-sm leading-8 text-slate-600 md:text-base">
                            ما یک شرکت <strong className="text-slate-900">دانش‌بنیان</strong> و فناوری‌محور هستیم که با ترکیب تجربه میدانی و مهندسی پیشرفته،
                            راهکارهای بومی برای هوشمندسازی صنعت، انرژی و سلامت ایران توسعه می‌دهیم.
                        </p>
                    </section>

                    {/* 
                      🎨 UX & 🧠 SEO: A semantic list of navigation cards
                      Each card is a distinct, scannable entity.
                    */}
                    <section aria-labelledby="about-pillars-heading">
                        <h2 id="about-pillars-heading" className="sr-only">ارکان و بخش‌های شرکت</h2>
                        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            { aboutPillars.map( ( card ) =>
                            {
                                const Icon = card.icon;
                                return (
                                    <li key={ card.href }>
                                        <Link
                                            href={ card.href }
                                            className="group relative flex h-full flex-col items-end gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-bms-primary/30"
                                        >
                                            {/* Icon */ }
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-bms-primary/10 group-hover:text-bms-primary">
                                                <Icon className="h-6 w-6" />
                                            </div>

                                            {/* Text Content */ }
                                            <div className="flex-1 space-y-2 text-right">
                                                <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-bms-primary">
                                                    { card.title }
                                                </h3>
                                                <p className="text-xs leading-6 text-slate-500 md:text-sm">
                                                    { card.desc }
                                                </p>
                                            </div>

                                            {/* Action Hint */ }
                                            <div className="mt-auto flex items-center gap-1 text-xs font-medium text-bms-primary opacity-0 transition-opacity group-hover:opacity-100">
                                                <span>بیشتر بخوانید</span>
                                                <LuArrowLeft className="h-3 w-3" />
                                            </div>
                                        </Link>
                                    </li>
                                );
                            } ) }
                        </ul>
                    </section>
                </div>
            </div>
        </>
    );
}