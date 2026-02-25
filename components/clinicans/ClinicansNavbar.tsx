"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import
{
    LuMenu,
    LuX,
    LuLayoutGrid,
    LuSparkles,
    LuShieldCheck,
    LuScale,
    LuArrowLeft,
    LuCalendar,
} from "react-icons/lu";
import Image from "next/image";

/* ---------------------------------------------
 * NAV STRUCTURE
 * -------------------------------------------*/

const primaryLinks = [
    { label: "معرفی", href: "#overview", icon: LuLayoutGrid },
    { label: "امکانات", href: "#features", icon: LuSparkles },
    { label: "امنیت", href: "#security-tech", icon: LuShieldCheck },
    { label: "مسیر همکاری", href: "#pricing", icon: LuScale },
];

const allLinks = [
    { label: "معرفی پلتفرم", href: "#overview" },
    { label: "امکانات اصلی", href: "#features" },
    { label: "افزایش درآمد", href: "#revenue" },
    { label: "نحوه پیاده‌سازی", href: "#process" },
    { label: "نظرات همکاران", href: "#testimonials" },
    { label: "مناسب چه کلینیک‌هایی است؟", href: "#audience" },
    { label: "امنیت و معماری", href: "#security-tech" },
    { label: "تعرفه و قیمت", href: "#pricing" },
    { label: "سؤالات متداول", href: "#faqs" },
];

export default function ClinicansNavbar ()
{
    const [ scrolled, setScrolled ] = useState( false );
    const [ mobileOpen, setMobileOpen ] = useState( false );

    useEffect( () =>
    {
        const onScroll = () => setScrolled( window.scrollY > 20 );
        window.addEventListener( "scroll", onScroll, { passive: true } );
        return () => window.removeEventListener( "scroll", onScroll );
    }, [] );

    return (
        <>
            {/* =========================
       * NAVBAR (CONDENSED)
       * ========================= */}
            <header
                className={ cn(
                    "sticky top-0 z-50 transition-all duration-300 border-b",
                    scrolled
                        ? "bg-white/95 backdrop-blur border-slate-200 shadow-sm"
                        : "bg-white/80 backdrop-blur border-transparent"
                ) }
            >
                <div className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
                    {/* LEFT: Logo */ }
                    <Link href="/clinicans" className="flex items-center gap-2">
                        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold shadow-sm">
                            <Image src="/Clogo.webp" alt="clinicans logo" width={ 300 } height={ 300 } />
                        </div>
                        <span className="font-bold text-slate-900 text-sm md:text-base">
                            Clinicans
                        </span>
                    </Link>

                    {/* CENTER: Desktop Nav */ }
                    <nav className="hidden lg:flex items-center gap-1">
                        { primaryLinks.map( ( link ) => (
                            <Link
                                key={ link.href }
                                href={ link.href }
                                className="px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-100 hover:text-emerald-600 transition"
                            >
                                { link.label }
                            </Link>
                        ) ) }
                    </nav>

                    {/* RIGHT: CTA + Mobile Toggle */ }
                    <div className="flex items-center gap-2">
                        <Link
                            href="/contact?type=clinic-demo"
                            className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-bold hover:shadow transition"
                        >
                            درخواست دمو
                            <LuArrowLeft className="h-4 w-4" />
                        </Link>

                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
                            onClick={ () => setMobileOpen( true ) }
                            aria-label="Open menu"
                        >
                            <LuMenu className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* =========================
       * MOBILE / TABLET DRAWER
       * ========================= */}
            { mobileOpen && (
                <div className="fixed inset-0 z-50 bg-black/40">
                    <aside className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <span className="font-bold text-slate-900">Clinicans</span>
                            <button onClick={ () => setMobileOpen( false ) }>
                                <LuX className="h-5 w-5" />
                            </button>
                        </div>

                        <nav className="flex-1 space-y-1">
                            { allLinks.map( ( link ) => (
                                <Link
                                    key={ link.href }
                                    href={ link.href }
                                    onClick={ () => setMobileOpen( false ) }
                                    className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
                                >
                                    { link.label }
                                </Link>
                            ) ) }
                        </nav>

                        <div className="pt-6 border-t space-y-3">
                            <Link
                                href="https://app.clinicans.ir"
                                className="w-full flex items-center justify-center h-11 rounded-xl bg-slate-100 text-slate-700 font-semibold"
                            >
                                ورود به پلتفرم
                            </Link>

                            <Link
                                href="/contact?type=clinic-demo"
                                className="w-full flex items-center justify-center h-11 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold"
                            >
                                <LuCalendar className="h-4 w-4 ml-2" />
                                درخواست دمو
                            </Link>
                        </div>
                    </aside>
                </div>
            ) }
        </>
    );
}
