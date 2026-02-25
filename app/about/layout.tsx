// app/about/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import
{
    LuBookOpen,
    LuTarget,
    LuGem,
    LuUsers,
    LuScale,
    LuShieldCheck,
    LuNetwork,
    LuArrowRight,
    LuLayoutGrid,
} from "react-icons/lu";

export const metadata: Metadata = {
    title: {
        template: "%s | درباره بارمان",
        default: "درباره بارمان محور اسپادانا",
    },
    description:
        "آشنایی با تاریخچه، اهداف و ساختار شرکت دانش‌بنیان بارمان محور اسپادانا.",
};

const navItems = [
    { href: "/about", title: "نگاه کلی", icon: LuLayoutGrid },
    { href: "/about/story", title: "داستان ما", icon: LuBookOpen },
    { href: "/about/mission", title: "ماموریت و چشم‌انداز", icon: LuTarget },
    { href: "/about/values", title: "ارزش‌های محوری", icon: LuGem },
    { href: "/about/team", title: "تیم راهبر", icon: LuUsers },
    { href: "/about/governance", title: "حاکمیت شرکتی", icon: LuScale },
    { href: "/about/code-of-ethics", title: "منشور اخلاقی", icon: LuShieldCheck },
    { href: "/about/ecosystem", title: "اکوسیستم همکاری", icon: LuNetwork },
];

export default function AboutLayout ( {
    children,
}: {
    children: React.ReactNode;
} )
{
    return (
        <div className="min-h-screen bg-slate-50" dir="rtl">
            {/* 
        🎨 UX: Secondary Navigation Bar (Mobile/Tablet)
        Horizontal scroll for easy access on small screens with updated layout standards.
      */}
            <div className="no-scrollbar sticky top-[64px] z-30 overflow-x-auto border-b border-slate-200 bg-white/95 backdrop-blur-md lg:hidden">
                <nav
                    aria-label="منوی بخش درباره ما"
                    className="flex min-w-max items-center gap-2 p-3 sm:px-6"
                >
                    { navItems.map( ( item ) =>
                    {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={ item.href }
                                href={ item.href }
                                className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-bms-primary/30 hover:text-bms-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bms-primary/50"
                            >
                                <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                                <span>{ item.title }</span>
                            </Link>
                        );
                    } ) }
                </nav>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-12 lg:px-8 lg:py-16">
                <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">

                    {/* 
            🧭 SIDEBAR (Desktop)
            Sticky positioning for easy navigation during long reads.
          */}
                    <aside className="hidden space-y-6 lg:col-span-3 lg:block lg:sticky lg:top-32">

                        {/* Nav Menu */ }
                        <nav
                            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                            aria-label="ناوبری درباره ما"
                        >
                            <div className="mb-4 px-2 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                About_Corporate
                            </div>
                            <ul className="space-y-1">
                                { navItems.map( ( item ) =>
                                {
                                    const Icon = item.icon;
                                    return (
                                        <li key={ item.href }>
                                            <Link
                                                href={ item.href }
                                                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 hover:text-bms-primary focus-visible:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bms-primary/50"
                                            >
                                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 shadow-sm transition-colors group-hover:bg-white group-hover:text-bms-primary">
                                                    <Icon className="h-4 w-4" aria-hidden="true" />
                                                </div>
                                                <span>{ item.title }</span>
                                                <LuArrowRight
                                                    className="mr-auto h-3 w-3 shrink-0 opacity-0 transition-all group-hover:-translate-x-1 group-hover:opacity-100"
                                                    aria-hidden="true"
                                                />
                                            </Link>
                                        </li>
                                    );
                                } ) }
                            </ul>
                        </nav>

                        {/* Contact Widget */ }
                        <div className="rounded-2xl bg-slate-900 p-6 text-center text-white shadow-xl">
                            <p className="mb-5 text-sm font-light leading-relaxed text-slate-300">
                                سؤالی درباره ساختار یا همکاری دارید؟
                            </p>
                            <Link
                                href="/contact-us"
                                className="block w-full rounded-xl border border-white/10 bg-white/10 py-3 text-xs font-bold text-white transition-all hover:bg-white/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                            >
                                تماس با روابط عمومی
                            </Link>
                        </div>
                    </aside>

                    {/* 
            📝 MAIN CONTENT WRAPPER
          */}
                    <div className="lg:col-span-9">
                        <main
                            id="about-content"
                            className="min-h-[500px] overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-sm md:p-10 lg:p-12"
                        >
                            { children }
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}