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
    LuLayoutGrid
} from "react-icons/lu";

export const metadata: Metadata = {
    title: {
        template: "%s | درباره بارمان",
        default: "درباره بارمان محور اسپادانا",
    },
    description: "آشنایی با تاریخچه، اهداف و ساختار شرکت دانش‌بنیان بارمان محور اسپادانا.",
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

export default function AboutLayout ( { children }: { children: React.ReactNode; } )
{
    return (
        <div className="min-h-screen bg-slate-50">
            {/* 
              🎨 UX: Secondary Navigation Bar (Mobile/Tablet)
              Horizontal scroll for easy access on small screens.
            */}
            <div className="lg:hidden sticky top-[64px] z-30 bg-white border-b border-slate-200 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-2 p-3 min-w-max">
                    { navItems.map( ( item ) =>
                    {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={ item.href }
                                href={ item.href }
                                className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-bms-primary/30 hover:text-bms-primary whitespace-nowrap"
                            >
                                <Icon className="h-3.5 w-3.5" />
                                <span>{ item.title }</span>
                            </Link>
                        );
                    } ) }
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">

                    {/* 
                      🧭 SIDEBAR (Desktop)
                      Sticky positioning for easy navigation during long reads.
                    */}
                    <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-28 space-y-6">
                        {/* Nav Menu */ }
                        <nav className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                            <div className="mb-4 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                درباره شرکت
                            </div>
                            <ul className="space-y-1">
                                { navItems.map( ( item ) =>
                                {
                                    const Icon = item.icon;
                                    return (
                                        <li key={ item.href }>
                                            <Link
                                                href={ item.href }
                                                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 hover:text-bms-primary"
                                            >
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors group-hover:bg-white group-hover:text-bms-primary group-hover:shadow-sm">
                                                    <Icon className="h-4 w-4" />
                                                </div>
                                                <span>{ item.title }</span>
                                                <LuArrowRight className="mr-auto h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-x-1" />
                                            </Link>
                                        </li>
                                    );
                                } ) }
                            </ul>
                        </nav>

                        {/* Contact Widget */ }
                        <div className="rounded-2xl bg-slate-900 p-5 text-white shadow-lg text-center">
                            <p className="text-xs text-slate-300 leading-relaxed mb-4">
                                سؤالی درباره ساختار یا همکاری دارید؟
                            </p>
                            <Link
                                href="/contact-us"
                                className="block w-full rounded-xl bg-white/10 border border-white/10 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                            >
                                تماس با روابط عمومی
                            </Link>
                        </div>
                    </aside>

                    {/* 
                      📝 MAIN CONTENT
                    */}
                    <div className="lg:col-span-9">
                        <div className="rounded-[2.5rem] bg-white p-6 shadow-sm border border-slate-100 md:p-10 min-h-[500px]">
                            { children }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}