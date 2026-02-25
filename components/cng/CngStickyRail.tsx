"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

if ( typeof window !== "undefined" )
{
    gsap.registerPlugin( ScrollTrigger, ScrollToPlugin );
}

const SECTIONS = [
    { id: "hero", label: "۰۱", title: "معرفی سامانه" },
    { id: "products", label: "۰۲", title: "معماری و محصولات" },
    { id: "story", label: "۰۳", title: "مجوز و پدافند" },
    { id: "pilotvideo", label: "۰۴", title: "پیلوت رسمی" },
    { id: "why", label: "۰۵", title: "ضرورت و چرایی" },
    { id: "how", label: "۰۶", title: "نحوه عملکرد" },
    { id: "future", label: "۰۷", title: "آینده و توسعه" },
    { id: "action", label: "۰۸", title: "شروع همکاری" },
];

export default function CngStickyRail ()
{
    const [ active, setActive ] = useState( "hero" );
    const railRef = useRef<HTMLDivElement>( null );
    const progressRef = useRef<HTMLDivElement>( null );

    useGSAP( () =>
    {
        if ( !railRef.current ) return;

        // 1. KINETIC PROGRESS BAR
        gsap.to( progressRef.current, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
                trigger: "main",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3,
            },
        } );

        // 2. FOOTER AVOIDANCE (Rail stops/fades before footer)
        ScrollTrigger.create( {
            trigger: "footer",
            start: "top 90%",
            onEnter: () => gsap.to( railRef.current, { autoAlpha: 0, x: -20, duration: 0.4 } ),
            onLeaveBack: () => gsap.to( railRef.current, { autoAlpha: 1, x: 0, duration: 0.5 } ),
        } );

        // 3. SECTION TRACKER
        SECTIONS.forEach( ( section ) =>
        {
            ScrollTrigger.create( {
                trigger: `#${ section.id }`,
                start: "top 40%",
                end: "bottom 60%",
                onToggle: ( self ) =>
                {
                    if ( self.isActive ) setActive( section.id );
                },
            } );
        } );
    }, { scope: railRef } );

    const handleScroll = ( id: string ) =>
    {
        gsap.to( window, {
            duration: 1.2,
            scrollTo: { y: `#${ id }`, offsetY: 100 },
            ease: "power4.inOut",
        } );
    };

    return (
        <aside
            ref={ railRef }
            className="fixed left-6 xl:left-12 top-1/2 -translate-y-1/2 z-[60] h-[550px] w-64 flex flex-row items-start pointer-events-none"
            dir="ltr" /* Internal layout is LTR so text flows toward the center */
        >
            {/* 🏗️ PROGRESS SPINE - Left Aligned */ }
            <div className="relative h-full w-[4px] bg-slate-100 rounded-full ml-6 pointer-events-auto overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-slate-200/30" />
                <div
                    ref={ progressRef }
                    className="absolute top-0 left-0 w-full h-full bg-[#D72638] origin-top shadow-[0_0_15px_rgba(215,38,56,0.5)]"
                    style={ { transform: "scaleY(0)" } }
                />
                {/* HUD Data Markers */ }
                <div className="absolute inset-0 flex flex-col justify-between py-12 pointer-events-none opacity-20">
                    { [ ...Array( 12 ) ].map( ( _, i ) => (
                        <div key={ i } className="w-full h-[1px] bg-slate-900" />
                    ) ) }
                </div>
            </div>

            {/* 🧭 NAVIGATION CONTENT - Oriented toward the Right (Content) */ }
            <nav className="flex-1 h-full flex flex-col justify-between py-4 pl-4 pointer-events-auto" dir="rtl">
                { SECTIONS.map( ( s ) =>
                {
                    const isActive = s.id === active;

                    return (
                        <button
                            key={ s.id }
                            onClick={ () => handleScroll( s.id ) }
                            className="group relative flex flex-col items-start text-right outline-none py-2"
                        >
                            {/* Index Number */ }
                            <span className={ cn(
                                "font-mono text-[11px] font-black tracking-[0.4em] mb-1 transition-colors duration-500",
                                isActive ? "text-[#F4C430]" : "text-slate-300"
                            ) }>
                                { s.label }
                            </span>

                            {/* Title - Editorial Scale */ }
                            <span className={ cn(
                                "text-lg xl:text-xl font-black tracking-tighter transition-all duration-700",
                                isActive
                                    ? "text-[#145C98] translate-x-[15px] scale-110"
                                    : "text-slate-400 group-hover:text-slate-600 group-hover:translate-x-[8px]"
                            ) }>
                                { s.title }
                            </span>

                            {/* Active Indicator Pulse */ }
                            <AnimatePresence>
                                { isActive && (
                                    <motion.div
                                        layoutId="activeBulletLeft"
                                        initial={ { scale: 0 } }
                                        animate={ { scale: 1 } }
                                        className="absolute left-[-35px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#F4C430] shadow-[0_0_20px_#F4C430] z-20 border-2 border-white"
                                    />
                                ) }
                            </AnimatePresence>
                        </button>
                    );
                } ) }
            </nav>

            {/* 🏷️ SYSTEM WATERMARK */ }
            <div className="absolute -bottom-28 left-0 flex flex-col items-start opacity-10">
                <div className="flex items-center gap-6 rotate-180 [writing-mode:vertical-lr]">
                    <span className="text-[10px] font-mono font-bold text-slate-950 uppercase tracking-[0.8em]">
                        Secure_Industrial_Protocol
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#D72638]">v4.2.0</span>
                </div>
                <div className="mt-8 h-24 w-[1px] bg-gradient-to-b from-slate-900 to-transparent" />
            </div>
        </aside>
    );
}