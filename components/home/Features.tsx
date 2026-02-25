"use client";

import React, { useState, useRef, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";

// ── Icon imports ────────────────────────────────────────────────
import
{
    LuCpu,
    LuCode,
    LuBinary,
    LuLayers,
    LuActivity,
    LuDatabase,
    LuShield,
    LuStethoscope,
    LuArrowLeft,
    LuHandshake,
} from "react-icons/lu";

import
{
    SiNextdotjs,
    SiReact,
    SiLaravel,
    SiPhp,
    SiPostgresql,
    SiDocker,
    SiTypescript,
    SiTailwindcss,
    SiPython,
    SiCplusplus,
    SiNodedotjs,
    SiGit,
    SiNginx,
    SiVuedotjs,
    SiGraphql,
} from "react-icons/si";

/* ============================================================================
   1. BENTO TILT WRAPPER (3D Physics)
   ============================================================================ */
interface BentoTiltProps
{
    children: ReactNode;
    className?: string;
}

export const BentoTilt = ( { children, className = "" }: BentoTiltProps ) =>
{
    const [ transformStyle, setTransformStyle ] = useState( "" );
    const itemRef = useRef<HTMLDivElement>( null );

    const handleMouseMove = ( event: React.MouseEvent<HTMLDivElement> ) =>
    {
        if ( !itemRef.current ) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = ( event.clientX - left ) / width;
        const relativeY = ( event.clientY - top ) / height;

        const tiltX = ( relativeY - 0.5 ) * 5;
        const tiltY = ( relativeX - 0.5 ) * -5;

        setTransformStyle(
            `perspective(1000px) rotateX(${ tiltX }deg) rotateY(${ tiltY }deg) scale3d(.98, .98, .98)`
        );
    };

    return (
        <div
            ref={ itemRef }
            className={ cn( "h-full transition-transform duration-300 ease-out", className ) }
            onMouseMove={ handleMouseMove }
            onMouseLeave={ () => setTransformStyle( "" ) }
            style={ { transform: transformStyle } }
        >
            { children }
        </div>
    );
};

/* ============================================================================
   2. GLOW CARD WRAPPER
   ============================================================================ */
interface GlowCardProps
{
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

export const GlowCard = ( {
    children,
    className,
    glowColor = "rgba(255,255,255,0.08)",
}: GlowCardProps ) =>
{
    const [ cursorPosition, setCursorPosition ] = useState( { x: 0, y: 0 } );
    const [ hoverOpacity, setHoverOpacity ] = useState( 0 );
    const hoverRef = useRef<HTMLDivElement>( null );

    const handleMouseMove = ( event: React.MouseEvent<HTMLDivElement> ) =>
    {
        if ( !hoverRef.current ) return;
        const rect = hoverRef.current.getBoundingClientRect();
        setCursorPosition( {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        } );
    };

    return (
        <div
            ref={ hoverRef }
            onMouseMove={ handleMouseMove }
            onMouseEnter={ () => setHoverOpacity( 1 ) }
            onMouseLeave={ () => setHoverOpacity( 0 ) }
            className={ cn(
                "group relative flex h-full w-full flex-col overflow-hidden rounded-[2.5rem]",
                className
            ) }
        >
            <div
                className="pointer-events-none absolute -inset-px z-10 opacity-0 transition-opacity duration-300"
                style={ {
                    opacity: hoverOpacity,
                    background: `radial-gradient(400px circle at ${ cursorPosition.x }px ${ cursorPosition.y }px, ${ glowColor }, transparent 50%)`,
                } }
                aria-hidden="true"
            />
            { children }
        </div>
    );
};

/* ============================================================================
   3. INTERNAL CARDS
   ============================================================================ */

/* --- Card 1: WorldsGrid --- */
const DOMAINS = [
    { label: "اتوماسیون صنعتی", icon: LuActivity },
    { label: "اینترنت اشیاء", icon: LuDatabase },
    { label: "هوش تجاری", icon: LuShield },
    { label: "سلامت دیجیتال", icon: LuStethoscope },
];

function WorldsGrid ()
{
    return (
        <GlowCard
            className="bg-white shadow-soft-lg ring-1 ring-slate-100"
            glowColor="rgba(20,92,152,0.08)"
        >
            <div
                className="absolute inset-0 bg-[radial-gradient(#145C98_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-[0.03]"
                aria-hidden="true"
            />

            <div
                className="relative z-20 flex h-full flex-1 flex-col p-6 sm:p-10 lg:p-14"
                dir="rtl"
            >
                <header className="mb-6 flex-shrink-0 sm:mb-8">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-bms-primary sm:mb-6 sm:text-[10px]">
                        <LuLayers className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>Market Segments</span>
                    </div>
                    <h2 className="mb-4 text-3xl font-black leading-tight tracking-tightest text-slate-900 md:text-4xl">
                        تلاقی داده و <span className="text-bms-primary">واقعیت</span>
                    </h2>
                    <p className="max-w-md text-sm font-light leading-relaxed text-slate-500 md:text-base">
                        ما پلتفرم هسته‌ای خود را به دنیاهای متفاوتی برده‌ایم؛ از پایش انرژی
                        تا هوشمندسازی سلامت.
                    </p>
                </header>

                {/* Dynamic Matrix Sizing */ }
                <div className="mb-8 grid flex-1 grid-cols-1 content-start gap-3 xs:grid-cols-2 sm:mb-10 sm:gap-4">
                    { DOMAINS.map( ( item ) => (
                        <div
                            key={ item.label }
                            className="flex w-full items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 group-hover:bg-white group-hover:shadow-sm"
                        >
                            <item.icon className="h-4 w-4 shrink-0 text-bms-primary" />
                            <span className="truncate text-[11px] font-bold text-slate-700 sm:text-xs">
                                { item.label }
                            </span>
                        </div>
                    ) ) }
                </div>

                {/* Footer Fixed Action Area */ }
                <div className="mt-auto shrink-0 pt-4">
                    <Link
                        href="/fieldsofactivity"
                        className="group/link inline-flex w-fit items-center gap-2 rounded-full font-mono text-[10px] font-black uppercase tracking-widest text-bms-primary outline-none focus-visible:ring-2 focus-visible:ring-bms-primary/50"
                    >
                        <span>Strategic Solutions</span>
                        <LuArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-x-1" />
                    </Link>
                </div>
            </div>
        </GlowCard>
    );
}

/* --- Card 2: TechStrip --- */
const ALL_ICONS: IconType[][] = [
    [ SiNextdotjs, SiLaravel, SiPython, SiDocker ],
    [ SiReact, SiPhp, SiCplusplus, SiTailwindcss ],
    [ SiTypescript, SiPostgresql, SiNodedotjs ],
    [ SiGit, SiVuedotjs, SiNginx, SiGraphql ],
];

function FlipCell ( {
    icons,
    delayOffset,
}: {
    icons: IconType[];
    delayOffset: number;
} )
{
    const [ index, setIndex ] = useState( 0 );

    useEffect( () =>
    {
        const timeout = setTimeout( () =>
        {
            const interval = setInterval( () =>
            {
                setIndex( ( prev ) => ( prev + 1 ) % icons.length );
            }, 3500 );
            return () => clearInterval( interval );
        }, delayOffset );

        return () => clearTimeout( timeout );
    }, [ icons.length, delayOffset ] );

    const IconComponent = icons[ index ];

    return (
        <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-white/5 shadow-inner backdrop-blur-md sm:rounded-2xl">
            <AnimatePresence mode="wait">
                <motion.div
                    key={ index }
                    initial={ { rotateX: -90, opacity: 0 } }
                    animate={ { rotateX: 0, opacity: 1 } }
                    exit={ { rotateX: 90, opacity: 0 } }
                    transition={ { duration: 0.5, ease: "easeInOut" } }
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <IconComponent className="h-6 w-6 text-white/50 transition-colors group-hover:text-white sm:h-8 sm:w-8" />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

function TechStrip ()
{
    return (
        <GlowCard className="bg-black shadow-premium" glowColor="rgba(255,255,255,0.08)">
            <div
                className="absolute inset-0 bg-gradient-to-tr from-black via-black/90 to-bms-dark/80"
                aria-hidden="true"
            />
            <LuBinary
                className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 text-white/5 transition-transform duration-1000 group-hover:scale-110 group-hover:text-white/10"
                aria-hidden="true"
            />

            <div className="relative z-20 flex h-full flex-1 flex-col p-6 sm:p-10 lg:p-14" dir="rtl">
                <header className="mb-6 flex-shrink-0 text-right sm:mb-8 lg:mb-10">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md sm:mb-6">
                        <LuCpu className="h-4 w-4 shrink-0 text-brand-yellow" aria-hidden="true" />
                        <span className="font-mono text-[9px] font-black uppercase tracking-widest text-brand-yellow sm:text-[10px]">
                            Core_Engine_v4.2
                        </span>
                    </div>

                    <h2 className="text-3xl font-black leading-tight tracking-tightest text-white md:text-4xl">
                        حاکمیت <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">تکنولوژی</span>
                    </h2>
                </header>

                <p className="mb-8 max-w-sm text-right text-sm font-light leading-relaxed text-slate-400 md:text-base lg:mb-10">
                    بومی‌سازی لایه‌های سخت‌افزار و نرم‌افزار برای تضمین امنیت مطلق در
                    زیرساخت‌های استراتژیک و حیاتی ملی.
                </p>

                {/* Scaled flip-grid guarantees items don't stretch aggressively on ultrawides */ }
                <div className="mt-auto mb-8 w-full max-w-[280px] self-end sm:max-w-[340px]" dir="ltr">
                    <div className="grid grid-cols-4 gap-3 md:gap-4">
                        { Array.from( { length: 8 } ).map( ( _, i ) => (
                            <FlipCell
                                key={ i }
                                icons={ ALL_ICONS[ i % ALL_ICONS.length ] }
                                delayOffset={ i * 650 + Math.random() * 400 }
                            />
                        ) ) }
                    </div>
                </div>

                <div className="mt-auto flex shrink-0 items-center justify-between gap-6 border-t border-white/10 pt-6">
                    <div
                        className="flex flex-col text-left font-mono opacity-40 transition-opacity group-hover:opacity-100"
                        dir="ltr"
                    >
                        <span className="mb-1 text-[8px] uppercase tracking-widest text-emerald-400">
                            Latency: 15ms
                        </span>
                        <span className="text-[8px] uppercase tracking-widest text-white">
                            Security: AES-256
                        </span>
                    </div>

                    <Link
                        href="/technologies"
                        className="group/btn relative inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-5 py-2.5 text-xs font-black text-slate-900 shadow-xl outline-none transition-all hover:-translate-y-1 hover:bg-slate-200 focus-visible:ring-4 focus-visible:ring-white/40 active:scale-95 sm:px-6 sm:py-3"
                    >
                        <span>بررسی فنی</span>
                        <LuCode className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </GlowCard>
    );
}

/* --- Card 3: WitSection --- */
function WitSection ()
{
    return (
        <GlowCard
            className="flex min-h-[400px] flex-col justify-center bg-[#020617] shadow-premium"
            glowColor="rgba(244,196,48,0.1)"
        >
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(20,92,152,0.25),transparent_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.03]" />
                <div className="absolute right-0 top-0 p-12 opacity-[0.05] transition-opacity duration-1000 group-hover:opacity-10">
                    <LuHandshake className="h-40 w-40 -rotate-12 text-white sm:h-64 sm:w-64" />
                </div>
                <div className="absolute left-0 top-0 h-px w-full animate-[scan_6s_linear_infinite] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            </div>

            <div
                className="relative z-20 flex flex-col items-center justify-between gap-12 p-8 sm:p-10 md:p-12 lg:flex-row lg:p-16"
                dir="rtl"
            >
                <div className="max-w-2xl space-y-6 text-right sm:space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-emerald-400 backdrop-blur-md sm:gap-3">
                        <LuActivity className="h-4 w-4 shrink-0 animate-pulse" aria-hidden="true" />
                        <span className="font-mono text-[9px] font-black uppercase tracking-[0.4em] sm:text-[10px]">
                            Global_Collaboration
                        </span>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-3xl font-black leading-tight tracking-tightest text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            همکاری برای <br />
                            <span className="bg-gradient-to-l from-brand-yellow via-yellow-100 to-white bg-clip-text text-transparent">
                                آینده‌ی هوشمند زیرساخت‌ها
                            </span>
                        </h3>

                        <p className="max-w-xl text-sm font-light leading-relaxed text-slate-400 sm:text-base md:text-lg">
                            بارمان با تکیه بر پلتفرم WIT، بستری برای توسعه مشترک محصولات،
                            سرمایه‌گذاری فناورانه و ورود استراتژیک به بازارهای نوظهور فراهم
                            می‌کند.
                        </p>
                    </div>
                </div>

                <div className="relative z-20 flex w-full shrink-0 flex-col gap-4 sm:flex-row lg:w-auto lg:flex-col">
                    <Link
                        href="/intelligentautomation"
                        className="group/btn flex items-center justify-center gap-4 rounded-2xl bg-white px-8 py-4 text-sm font-black text-slate-950 shadow-2xl outline-none transition-all hover:-translate-y-1 hover:bg-brand-yellow focus-visible:ring-4 focus-visible:ring-brand-yellow/50 active:scale-95 sm:px-10 sm:py-5"
                    >
                        <span>مدل‌های همکاری</span>
                        <LuArrowLeft
                            className="h-5 w-5 shrink-0 transition-transform group-hover/btn:-translate-x-2"
                            aria-hidden="true"
                        />
                    </Link>
                    <Link
                        href="/contact-us"
                        className="flex items-center justify-center rounded-2xl border-2 border-white/20 px-8 py-4 text-sm font-bold text-white backdrop-blur-md outline-none transition-all hover:border-white/40 hover:bg-white/10 focus-visible:ring-4 focus-visible:ring-white/40 active:scale-95 sm:px-10 sm:py-5"
                    >
                        تماس با توسعه بازار
                    </Link>
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-4 left-0 right-0 flex items-center justify-center gap-6 opacity-20 sm:bottom-6">
                <LuBinary className="h-4 w-4 shrink-0 text-blue-300" aria-hidden="true" />
                <span className="font-mono text-[8px] font-bold uppercase tracking-[0.6em] text-blue-300 sm:text-[9px]">
                    Worldwide Intelligent Technology
                </span>
                <div className="hidden h-px w-24 bg-gradient-to-r from-transparent via-blue-300 to-transparent sm:block" />
            </div>

            <style jsx global>{ `
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
        </GlowCard>
    );
}

/* ============================================================================
   4. MAIN EXPORT
   ============================================================================ */
export default function FeaturesGrid ()
{
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <BentoTilt>
                <WorldsGrid />
            </BentoTilt>

            <BentoTilt>
                <TechStrip />
            </BentoTilt>

            <BentoTilt className="lg:col-span-2">
                <WitSection />
            </BentoTilt>
        </div>
    );
}