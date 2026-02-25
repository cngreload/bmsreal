"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowLeft, LuActivity, LuZap } from "react-icons/lu";

interface CardData
{
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage: string;
    category: string;
}

interface DualFeatureCardProps
{
    leftCard: CardData;
    rightCard: CardData;
    separatorText?: string;
}

export default function DualFeatureCard ( {
    leftCard,
    rightCard,
    separatorText = "BMS",
}: DualFeatureCardProps )
{
    return (
        <section
            aria-label="پلتفرم‌های راهبردی بارمان"
            className="relative py-24 lg:py-40 bg-white overflow-hidden"
            dir="rtl"
        >
            {/* Editorial Background Text - "Nexus" */ }
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                <span className="text-[20vw] font-black text-slate-50 uppercase tracking-tighter leading-none opacity-40">
                    Nexus
                </span>
            </div>

            <div className="relative z-10 mx-auto max-w-[1600px] px-4 md:px-12">
                <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-2">

                    {/* LEFT CARD: Energy/Industrial */ }
                    <motion.article
                        whileHover={ { flex: 1.2 } }
                        transition={ { duration: 0.6, ease: [ 0.22, 1, 0.36, 1 ] } }
                        className="group relative flex-1 min-h-[600px] lg:min-h-[750px] overflow-hidden rounded-[2.5rem] bg-bms-dark"
                    >
                        <Image
                            src={ leftCard.backgroundImage }
                            alt={ leftCard.title }
                            fill
                            className="object-cover opacity-60 grayscale-[0.5] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Technical HUD Overlay */ }
                        <div className="absolute top-10 right-10 z-20 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                                <span className="h-1 w-8 bg-emerald-400/30 rounded-full" />
                                STATUS: ACTIVE_MONITORING
                            </div>
                            <div className="text-[10px] font-mono text-slate-400">COORD: 32.6546° N, 51.6680° E</div>
                        </div>

                        {/* Gradient Scrim */ }
                        <div className="absolute inset-0 bg-gradient-to-t from-bms-dark via-bms-dark/20 to-transparent" />
                        <div className="absolute inset-0 border-[12px] border-white/5 rounded-[2.5rem] pointer-events-none" />

                        <div className="relative z-10 h-full flex flex-col justify-end p-10 lg:p-16">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-[#D72638] px-3 py-1 text-[10px] font-black uppercase text-white shadow-lg">
                                <LuZap className="w-3 h-3" />
                                { leftCard.category || "INDUSTRIAL" }
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                                { leftCard.title }
                            </h2>

                            <p className="max-w-md text-base md:text-lg text-slate-300 font-light leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                { leftCard.subtitle }
                            </p>

                            <Link
                                href={ leftCard.ctaLink }
                                className="inline-flex items-center gap-3 bg-white text-bms-dark px-8 py-4 rounded-xl text-sm font-bold shadow-2xl transition-all hover:bg-[#F4C430] active:scale-95 self-start group/btn"
                            >
                                <span>{ leftCard.ctaText }</span>
                                <LuArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-2" />
                            </Link>
                        </div>
                    </motion.article>

                    {/* NEXUS CENTER PIECE - Corporate Logo Portal */ }
                    <div className="hidden lg:flex relative z-30 w-0 items-center justify-center">
                        <div className="absolute flex flex-col items-center">
                            <div className="h-32 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                            <div className="h-24 w-24 rounded-full bg-white p-1 shadow-2xl ring-1 ring-slate-100">
                                <div className="h-full w-full rounded-full bg-bms-dark flex items-center justify-center border-4 border-white">
                                    <span className="text-xl font-black text-white tracking-[0.2em]">{ separatorText }</span>
                                </div>
                            </div>
                            <div className="h-32 w-px bg-gradient-to-t from-transparent via-slate-300 to-transparent" />
                        </div>
                    </div>

                    {/* RIGHT CARD: Health/Software */ }
                    <motion.article
                        whileHover={ { flex: 1.2 } }
                        transition={ { duration: 0.6, ease: [ 0.22, 1, 0.36, 1 ] } }
                        className="group relative flex-1 min-h-[600px] lg:min-h-[750px] overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100"
                    >
                        <Image
                            src={ rightCard.backgroundImage }
                            alt={ rightCard.title }
                            fill
                            className="object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Technical HUD Overlay */ }
                        <div className="absolute top-10 left-10 z-20 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block text-left">
                            <div className="flex items-center gap-2 text-[10px] font-mono text-bms-primary justify-end" dir="ltr">
                                HEALTH_NODE: CONNECTED
                                <span className="h-1 w-8 bg-bms-primary/30 rounded-full" />
                            </div>
                            <div className="text-[10px] font-mono text-slate-500" dir="ltr">SYS_SEC: VERIFIED_256BIT</div>
                        </div>

                        {/* Light Scrim */ }
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

                        <div className="relative z-10 h-full flex flex-col justify-end p-10 lg:p-16">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-bms-primary px-3 py-1 text-[10px] font-black uppercase text-white shadow-lg">
                                <LuActivity className="w-3 h-3" />
                                { rightCard.category || "HEALTH TECH" }
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black text-bms-dark leading-tight mb-6">
                                { rightCard.title }
                            </h2>

                            <p className="max-w-md text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                { rightCard.subtitle }
                            </p>

                            <Link
                                href={ rightCard.ctaLink }
                                className="inline-flex items-center gap-3 bg-bms-dark text-white px-8 py-4 rounded-xl text-sm font-bold shadow-2xl transition-all hover:bg-bms-primary active:scale-95 self-start group/btn"
                            >
                                <span>{ rightCard.ctaText }</span>
                                <LuArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-2" />
                            </Link>
                        </div>
                    </motion.article>

                </div>
            </div>

            {/* Decorative Grid Pattern */ }
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:100px_100px]" />
        </section>
    );
}