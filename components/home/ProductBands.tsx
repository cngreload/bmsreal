"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import CngPilotVideo from "./CngPilotVideo";
import { Section } from "@/components/layout/Section";
import
{
    LuCpu,
    LuActivity,
    LuArrowLeft,

    LuBinary,

    LuArrowUpDown,
} from "react-icons/lu";

/**
 * PRODUCT BANDS - THE REFORMATION
 * Award-winning logic: Vertical Data Spine connects distinct product universes.
 */

export default function ProductBands ()
{
    const containerRef = useRef<HTMLDivElement>( null );

    const { scrollYProgress } = useScroll( {
        target: containerRef,
        offset: [ "start 80%", "end 20%" ],
    } );

    // Mathematical transformations for the "System Bus" line
    const spineHeight = useTransform( scrollYProgress, [ 0, 1 ], [ "0%", "100%" ] );
    const pulseScale = useTransform( scrollYProgress, [ 0, 0.5, 1 ], [ 0.8, 1.1, 0.8 ] );

    return (
        <Section variant="white" spacing="large" id="products">
            <div ref={ containerRef } className="relative">

                {/* ================= HEADER - Visual Authority ================= */ }
                <header className="mb-24 md:mb-32 flex flex-col items-center text-center gap-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-4 py-1.5 shadow-sm">
                        <LuBinary className="w-4 h-4 text-bms-primary" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                            Platform Portfolio v4.2
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tightest text-slate-900 leading-none">
                        پلتفرم‌ها و <span className="text-bms-primary">سامانه‌های عملیاتی</span>
                    </h2>

                    <p className="max-w-2xl text-lg md:text-xl leading-corp-relaxed text-slate-500 font-light">
                        راهکارهای بارمان صرفاً مفاهیم تئوریک نیستند؛ این سامانه‌ها به‌صورت عملیاتی در
                        محیط‌های واقعی و زیرساخت‌های حیاتی کشور در حال خدمت‌رسانی هستند.
                    </p>
                </header>

                {/* ================= THE SYSTEM SPINE ================= */ }
                <div className="relative">
                    {/* THE DATA BUS - Visual Connection */ }
                    <div aria-hidden className="absolute   left-1/2 top-0 h-full -translate-x-1/2">
                        <div className="relative h-full w-[2px] bg-slate-100 overflow-hidden">
                            {/* Animated Progress Line using Brand Colors */ }
                            <motion.div
                                style={ { height: spineHeight } }
                                className="absolute -z-20  top-0 left-0 w-full bg-gradient-to-b from-transparent via-[#e9e5e5] to-[#F4C430] origin-top"
                            />

                            {/* Traveling Pulse Node */ }
                            <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(20,92,152,0.3),transparent)] animate-[flow_3s_linear_infinite]" />
                        </div>
                    </div>

                    {/* ================= BAND 01: ICTS (Industrial Red) ================= */ }
                    <BandWrapper side="right" >
                        <article className="group relative rounded-[2.5rem] border border-slate-200 bg-slate-50/50 p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            {/* Background Red Glow */ }
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D72638]/5 rounded-full blur-3xl" />

                            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                                <div className="lg:flex-1 space-y-8 text-right relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-slate-200 text-[#D72638] shadow-sm">
                                            <LuCpu className="h-6 w-6" />
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-widest text-[#D72638]">
                                            Industrial Security Node
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                                        سامانه هوشمند کنترل و مانیتورینگ
                                        <br />
                                        <span className="text-bms-primary">جایگاه‌های سوخت CNG</span>
                                    </h3>

                                    <p className="text-base md:text-lg leading-corp-relaxed text-slate-600">
                                        ICTS راهکار بومی بارمان برای پایش، ایمنی و تصمیم‌سازی بلادرنگ در شبکه جایگاه‌های
                                        سوخت CNG است که با سخت‌افزار صنعتی و نرم‌افزار متمرکز، پایداری عملیاتی را تضمین می‌کند.
                                    </p>

                                    <ul className="grid gap-4 text-sm md:text-base text-slate-700 pt-2">
                                        { [
                                            "ارتقای ایمنی شهروندان، پرسنل و تجهیزات",
                                            "پایش بلادرنگ فرآیندها و تجهیزات حیاتی",
                                            "داشبورد مدیریتی و کنترل متمرکز",
                                            "سخت‌افزار صنعتی بومی (Industrial-Grade)",
                                        ].map( ( item, i ) => (
                                            <li key={ i } className="flex items-center gap-3">
                                                <div className="h-1.5 w-1.5 rounded-full bg-[#D72638]" />
                                                { item }
                                            </li>
                                        ) ) }
                                    </ul>

                                    <div className="pt-4">
                                        <Link
                                            href="/cng-automation"
                                            className="inline-flex items-center gap-2 text-sm font-bold text-bms-primary hover:text-bms-dark group/link"
                                        >
                                            <span>بررسی فنی سامانه</span>
                                            <LuArrowLeft className="h-4 w-4 transition-transform group-hover/link:-translate-x-2" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="w-full lg:w-[45%] relative z-10">
                                    <div className="relative rounded-3xl bg-slate-900 p-2 shadow-2xl overflow-hidden group/video ring-1 ring-slate-200">
                                        <CngPilotVideo
                                            src="/CNG_Station_Automation.mp4"
                                            ariaLabel="ویدیو عملکرد سامانه هوشمند ICTS"
                                        />
                                        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                                            <span className="h-2 w-2 rounded-full bg-[#D72638] animate-pulse" />
                                            <span className="text-[10px] font-mono font-bold text-white uppercase tracking-tighter">System Live</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </BandWrapper>

                    <CoreNode scale={ pulseScale } />

                    {/* ================= BAND 02: CLINICANS (Medical Blue/Emerald) ================= */ }
                    <BandWrapper side="left">
                        <article className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

                            <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-center lg:gap-16">
                                <div className="lg:flex-1 space-y-8 text-right relative z-10">
                                    <div className="flex items-center gap-4 lg:justify-end">
                                        <span className="text-xs font-black uppercase tracking-widest text-emerald-600">
                                            Digital Health Platform
                                        </span>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm">
                                            <LuActivity className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                                        پلتفرم <span className="text-emerald-600">Clinicans</span>
                                    </h3>

                                    <p className="text-base md:text-lg leading-corp-relaxed text-slate-600">
                                        Clinicans یک پلتفرم سلامت دیجیتال برای مدیریت یکپارچه کلینیک‌ها و مراکز درمانی است که
                                        فرآیندهای بالینی، مالی و ارتباط با بیمار را در یک هسته امن تجمیع می‌کند.
                                    </p>

                                    <div className="flex flex-wrap gap-4 pt-4 lg:justify-end">
                                        <Link
                                            href="/clinicans"
                                            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-800 transition group/link"
                                        >
                                            مشاهده جزئیات
                                            <LuArrowUpDown className="h-4 w-4 transition-transform group-hover/link:-translate-x-1 group-hover/link:-translate-y-1" />
                                        </Link>
                                        <a
                                            href="https://clinicans.ir"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald-600 px-8 text-sm font-bold text-white hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/20"
                                        >
                                            ورود به پلتفرم
                                        </a>
                                    </div>
                                </div>

                                <div className="w-full lg:w-[45%] relative z-10">
                                    <div className="aspect-[16/10] rounded-3xl border-8 border-slate-50 bg-white shadow-inner flex items-center justify-center overflow-hidden ring-1 ring-slate-200">
                                        <div className="relative w-full h-full opacity-40 mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                                            <Image src="/ctest.jpg" alt="Clinicans Dashboard Preview" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </BandWrapper>
                    {/* ================= BAND 03: WIT (Corporate Dark Blue) ================= */ }

                </div>
            </div>

            <style jsx global>{ `
        @keyframes flow {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }
      `}</style>
        </Section>
    );
}

/* ================= COMPONENT: CORE NODE ================= */
function CoreNode ( { scale }: { scale: MotionValue<number>; } )
{
    return (
        <motion.div style={ { scale } } className="relative z-20 my-20 flex justify-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white border-[6px] border-slate-50 shadow-corp-lift">
                <Image
                    src="/bmslogoclean.webp"
                    alt="Barman Core Platform"
                    width={ 40 }
                    height={ 40 }
                    className="relative z-10"
                />
                {/* Glow Effect */ }
                <div className="absolute inset-0 rounded-full bg-bms-primary/20 blur-md animate-pulse" />
            </div>
        </motion.div>
    );
}

/* ================= COMPONENT: BAND WRAPPER ================= */
function BandWrapper ( { side, children }: { side: "left" | "right"; children: ReactNode; } )
{
    return (
        <div className="relative w-full">
            {/* Horizontal Connector Line - Desktop Only */ }
            <div
                className={ `absolute top-1/2 hidden lg:block h-[1px] w-32 bg-gradient-to-r from-transparent via-slate-200 to-transparent ${ side === "right" ? "left-1/2 ml-10" : "right-1/2 mr-10"
                    }` }
            />
            { children }
        </div>
    );
}