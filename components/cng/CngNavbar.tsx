"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { id: "hero", label: "معرفی سامانه" },
    { id: "products", label: "معماری و محصولات" },
    { id: "story", label: "پایلوت ملی" },
    { id: "why", label: "چرایی ملی" },
    { id: "how", label: "چگونگی عملکرد" },
    { id: "future", label: "آینده و توسعه" },
    { id: "action", label: "همکاری" },
];

export default function CngNavbar ()
{
    const [ open, setOpen ] = useState( false );
    const [ active, setActive ] = useState<string>( "hero" );

    /* ---------------------------------------------
     * Scroll Spy (section awareness)
     * -------------------------------------------*/
    useEffect( () =>
    {
        const observer = new IntersectionObserver(
            ( entries ) =>
            {
                entries.forEach( ( entry ) =>
                {
                    if ( entry.isIntersecting )
                    {
                        setActive( entry.target.id );
                    }
                } );
            },
            { rootMargin: "-40% 0px -50% 0px" }
        );

        NAV_ITEMS.forEach( ( { id } ) =>
        {
            const el = document.getElementById( id );
            if ( el ) observer.observe( el );
        } );

        return () => observer.disconnect();
    }, [] );

    /* ---------------------------------------------
     * Body scroll lock (mobile)
     * -------------------------------------------*/
    useEffect( () =>
    {
        document.body.style.overflow = open ? "hidden" : "";
        return () =>
        {
            document.body.style.overflow = "";
        };
    }, [ open ] );

    return (
        <nav
            role="navigation"
            aria-label="ناوبری سامانه ICTS"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur"
        >
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Desktop Navigation */ }
                    <ul className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-600">
                        { NAV_ITEMS.map( ( item ) => (
                            <li key={ item.id }>
                                <Link
                                    href={ `#${ item.id }` }
                                    aria-current={ active === item.id ? "location" : undefined }
                                    className={ cn(
                                        "relative px-2 py-1 transition-colors",
                                        "hover:text-bms-primary",
                                        active === item.id && "text-bms-primary"
                                    ) }
                                >
                                    { item.label }
                                    { active === item.id && (
                                        <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-bms-primary" />
                                    ) }
                                </Link>
                            </li>
                        ) ) }
                    </ul>

                    {/* Mobile Toggle */ }
                    <button
                        aria-label="باز کردن منوی ناوبری"
                        onClick={ () => setOpen( true ) }
                        className="md:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100"
                    >
                        <LuMenu className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */ }
            { open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 bg-black/40"
                    onClick={ () => setOpen( false ) }
                >
                    <aside
                        className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl animate-in slide-in-from-right duration-300"
                        onClick={ ( e ) => e.stopPropagation() }
                    >
                        <div className="flex h-16 items-center justify-between border-b px-4">
                            <span className="text-sm font-semibold text-slate-800">
                                ناوبری سامانه ICTS
                            </span>
                            <button
                                aria-label="بستن منو"
                                onClick={ () => setOpen( false ) }
                                className="rounded-lg p-2 hover:bg-slate-100"
                            >
                                <LuX className="h-5 w-5" />
                            </button>
                        </div>

                        <ul className="space-y-4 px-6 py-6 text-sm">
                            { NAV_ITEMS.map( ( item ) => (
                                <li key={ item.id }>
                                    <Link
                                        href={ `#${ item.id }` }
                                        aria-current={ active === item.id ? "location" : undefined }
                                        onClick={ () => setOpen( false ) }
                                        className={ cn(
                                            "block transition-colors",
                                            active === item.id
                                                ? "font-semibold text-bms-primary"
                                                : "text-slate-600 hover:text-bms-primary"
                                        ) }
                                    >
                                        { item.label }
                                    </Link>
                                </li>
                            ) ) }
                        </ul>
                    </aside>
                </div>
            ) }
        </nav>
    );
}
