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
    LuArrowLeft,
} from "react-icons/lu";

// 🧠 CRAWLER EMPATHY: Metadata with E-E-A-T keywords
export const metadata: Metadata = {
    title: "درباره ما | شرکت دانش‌بنیان بارمان محور اسپادانا",
    description:
        "با داستان، ماموریت، ارزش‌ها و تیم شرکت دانش‌بنیان بارمان محور اسپادانا آشنا شوید. پیشگام در هوشمندسازی صنعتی، انرژی و سلامت.",
    alternates: {
        canonical: "https://co-bms.ir/about",
    },
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
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "خانه", item: "https://co-bms.ir" },
            {
                "@type": "ListItem",
                position: 2,
                name: "درباره ما",
                item: "https://co-bms.ir/about",
            },
        ],
    };

    return (
        <>
            <Script
                id="json-ld-about"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />
            <div className="space-y-12 md:space-y-16 lg:space-y-20">

                {/* Hero Section */ }
                <section className="space-y-6 text-center" aria-labelledby="about-heading">
                    <div className="flex justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-bms-primary/20 bg-bms-primary-soft px-4 py-1.5 font-mono text-[10px] font-black uppercase tracking-widest text-bms-primary">
                            هویت و چشم‌انداز
                        </span>
                    </div>
                    <h1
                        id="about-heading"
                        className="text-4xl font-black leading-[1.2] tracking-tightest text-slate-900 md:text-5xl lg:text-6xl"
                    >
                        درباره <span className="text-bms-primary">بارمان محور اسپادانا</span>
                    </h1>
                    <p className="mx-auto max-w-3xl text-base font-light leading-relaxed text-slate-600 md:text-lg">
                        ما یک شرکت <strong className="font-bold text-slate-900">دانش‌بنیان</strong> و
                        فناوری‌محور هستیم که با ترکیب تجربه میدانی و مهندسی پیشرفته، راهکارهای
                        بومی برای هوشمندسازی صنعت، انرژی و سلامت ایران توسعه می‌دهیم.
                    </p>
                </section>

                {/* 
          🎨 UX & 🧠 SEO: A semantic list of navigation cards
          Each card is a distinct, scannable entity.
        */}
                <section aria-labelledby="about-pillars-heading">
                    <h2 id="about-pillars-heading" className="sr-only">
                        ارکان و بخش‌های شرکت
                    </h2>
                    <ul className="grid gap-6 sm:grid-cols-2">
                        { aboutPillars.map( ( card ) =>
                        {
                            const Icon = card.icon;
                            return (
                                <li key={ card.href }>
                                    <Link
                                        href={ card.href }
                                        className="group relative flex h-full flex-col items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-bms-primary/30 hover:shadow-premium focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-bms-primary/40 md:p-8"
                                    >
                                        {/* Icon Element */ }
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-500 shadow-inner transition-colors duration-300 group-hover:bg-bms-primary-soft group-hover:text-bms-primary">
                                            <Icon className="h-6 w-6" aria-hidden="true" />
                                        </div>

                                        {/* Text Content */ }
                                        <div className="flex-1 space-y-2 text-right">
                                            <h3 className="text-lg font-black text-slate-900 transition-colors group-hover:text-bms-primary">
                                                { card.title }
                                            </h3>
                                            <p className="text-sm font-light leading-relaxed text-slate-500">
                                                { card.desc }
                                            </p>
                                        </div>

                                        {/* Action Hint Footer */ }
                                        <div className="mt-4 flex items-center gap-1 border-t border-slate-100 pt-4 text-xs font-bold text-bms-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-full justify-end">
                                            <span>بیشتر بخوانید</span>
                                            <LuArrowLeft className="h-3 w-3 shrink-0" aria-hidden="true" />
                                        </div>
                                    </Link>
                                </li>
                            );
                        } ) }
                    </ul>
                </section>

            </div>
        </>
    );
}