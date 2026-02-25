"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
    { id: "overview", label: "معرفی پلتفرم", color: "emerald" },
    { id: "features", label: "امکانات کلیدی", color: "emerald" },
    { id: "audience", label: "مناسب چه مراکزی است", color: "teal" },
    { id: "security-tech", label: "امنیت و فناوری", color: "teal" },
    { id: "pricing", label: "شروع همکاری", color: "teal" },
];

export default function ClinicansStickyRail ()
{
    const [ active, setActive ] = useState( "overview" );
    const [ hasScrolled, setHasScrolled ] = useState( false );

    /* Fade-in after scroll */
    useEffect( () =>
    {
        const onScroll = () =>
        {
            if ( window.scrollY > 40 ) setHasScrolled( true );
        };
        window.addEventListener( "scroll", onScroll, { passive: true } );
        return () => window.removeEventListener( "scroll", onScroll );
    }, [] );

    /* Section observer */
    useEffect( () =>
    {
        const observer = new IntersectionObserver(
            ( entries ) =>
            {
                entries.forEach( ( e ) =>
                {
                    if ( e.isIntersecting ) setActive( e.target.id );
                } );
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        SECTIONS.forEach( ( { id } ) =>
        {
            const el = document.getElementById( id );
            if ( el ) observer.observe( el );
        } );

        return () => observer.disconnect();
    }, [] );

    const activeSection = SECTIONS.find( ( s ) => s.id === active );
    const isTeal = activeSection?.color === "teal";

    return (
        <aside
            aria-label="ناوبری بخش‌های Clinicans"
            className={ cn(
                "hidden lg:block sticky top-24 h-fit transition-opacity duration-500",
                hasScrolled ? "opacity-100" : "opacity-40"
            ) }
        >
            <div className="relative pl-4">
                {/* Gradient rail (LEFT) */ }
                <span
                    aria-hidden
                    className={ cn(
                        "absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent to-transparent",
                        isTeal
                            ? "via-teal-300/70"
                            : "via-emerald-300/70"
                    ) }
                />

                {/* Logo */ }
                <div className="mb-6 flex justify-start">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-[2px] shadow-lg">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                            <Image
                                src="/Clogo.webp"
                                alt="Clinicans"
                                width={ 28 }
                                height={ 28 }
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Sections */ }
                <ul className="space-y-2 text-[15px] leading-relaxed">
                    { SECTIONS.map( ( s ) =>
                    {
                        const isActive = s.id === active;

                        return (
                            <li key={ s.id }>
                                <Link
                                    href={ `#${ s.id }` }
                                    aria-current={ isActive ? "location" : undefined }
                                    className={ cn(
                                        "relative block py-1.5 pl-3 transition-colors",
                                        isActive
                                            ? isTeal
                                                ? "font-semibold text-teal-600"
                                                : "font-semibold text-emerald-600"
                                            : "text-slate-600 hover:text-emerald-600"
                                    ) }
                                >
                                    {/* Dot (LEFT) */ }
                                    <span
                                        className={ cn(
                                            "absolute right-[-9px] top-1/2 -translate-y-1/2 rounded-full transition-all duration-300",
                                            isActive
                                                ? isTeal
                                                    ? "h-2.5 w-2.5 bg-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.15)]"
                                                    : "h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"
                                                : "h-2 w-2 bg-slate-300"
                                        ) }
                                    />
                                    { s.label }
                                </Link>
                            </li>
                        );
                    } ) }
                </ul>

                {/* CTA */ }
                <div className="mt-8">
                    <Link
                        href="/contact?type=clinic-demo"
                        className="flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold shadow hover:shadow-lg"
                    >
                        درخواست دمو
                    </Link>
                </div>
            </div>
        </aside>
    );
}
