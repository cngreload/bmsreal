"use client";

import { useEffect, useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { cn } from "@/lib/utils";

const SECTIONS = [
    { id: "hero", label: "معرفی سامانه" },
    { id: "products", label: "معماری و محصولات" },
    { id: "story", label: "پایلوت ملی" },
    { id: "why", label: "چرایی ملی" },
    { id: "how", label: "چگونگی عملکرد" },
    { id: "future", label: "آینده و توسعه" },
    { id: "action", label: "همکاری" },
];

export default function CngSectionSwitcherMobile ()
{
    const [ active, setActive ] = useState( "hero" );
    const [ open, setOpen ] = useState( false );

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
            { rootMargin: "-45% 0px -45% 0px" }
        );

        SECTIONS.forEach( ( { id } ) =>
        {
            const el = document.getElementById( id );
            if ( el ) observer.observe( el );
        } );

        return () => observer.disconnect();
    }, [] );

    const activeLabel =
        SECTIONS.find( ( s ) => s.id === active )?.label ?? "";

    return (
        <div className="lg:hidden border-b border-slate-200 bg-slate-50">
            <button
                onClick={ () => setOpen( true ) }
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-slate-700"
                aria-label="انتخاب بخش صفحه"
            >
                <span>{ activeLabel }</span>
                <LuChevronDown className="h-4 w-4 opacity-70" />
            </button>

            { open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 bg-black/30"
                    onClick={ () => setOpen( false ) }
                >
                    <div
                        className="absolute bottom-0 left-0 right-0 rounded-t-2xl bg-white p-6"
                        onClick={ ( e ) => e.stopPropagation() }
                    >
                        <div className="mb-4 text-sm font-semibold text-slate-800">
                            بخش‌های سامانه
                        </div>

                        <ul className="space-y-3 text-sm">
                            { SECTIONS.map( ( s ) => (
                                <li key={ s.id }>
                                    <button
                                        onClick={ () =>
                                        {
                                            document
                                                .getElementById( s.id )
                                                ?.scrollIntoView( { behavior: "smooth" } );
                                            setOpen( false );
                                        } }
                                        className={ cn(
                                            "w-full text-right transition-colors",
                                            s.id === active
                                                ? "font-semibold text-bms-primary"
                                                : "text-slate-600 hover:text-bms-primary"
                                        ) }
                                    >
                                        { s.label }
                                    </button>
                                </li>
                            ) ) }
                        </ul>
                    </div>
                </div>
            ) }
        </div>
    );
}
