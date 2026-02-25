"use client";

import React from "react";
import Link from "next/link";
import { LuHandshake, LuArrowLeft, LuActivity, LuBinary } from "react-icons/lu";

/**
 * 🎯 WIT SECTION - EXECUTIVE REFORMATION
 * Strategy: Strategic Collaboration Anchor
 * Palette: Deep Navy (#020617), Intelligence Yellow (#F4C430)
 */
export default function WitSection ()
{
    return (
        <div className="relative w-full h-full min-h-[450px] flex flex-col justify-center bg-[#020617] overflow-hidden rounded-b-[2.5rem] lg:rounded-b-[4rem] group">
            {/* ===================== ATMOSPHERIC LAYERS ===================== */ }
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Dynamic Radial Glow */ }
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(20,92,152,0.25),transparent_70%)]" />

                {/* Technical HUD Grid */ }
                <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:32px_32px]" />

                {/* Parallax Floating Icon */ }
                <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:opacity-10 transition-opacity duration-1000">
                    <LuHandshake className="w-64 h-64 text-white -rotate-12" />
                </div>

                {/* Animated Scanning Line */ }
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-[scan_6s_linear_infinite]" />
            </div>

            {/* ===================== CONTENT ARCHITECTURE ===================== */ }
            <div className="relative z-10 p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12" dir="rtl">
                <div className="max-w-2xl text-right space-y-8">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 backdrop-blur-md">
                        <LuActivity className="w-4 h-4 animate-pulse" />
                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em]">Global_Collaboration_Protocol</span>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tightest">
                            همکاری برای <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#F4C430] via-yellow-100 to-white">
                                آینده‌ی هوشمند زیرساخت‌ها
                            </span>
                        </h3>

                        <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-xl">
                            بارمان با تکیه بر پلتفرم WIT، بستری برای توسعه مشترک محصولات، سرمایه‌گذاری فناورانه و ورود استراتژیک به بازارهای نوظهور فراهم می‌کند.
                        </p>
                    </div>
                </div>

                {/* Action Interface */ }
                <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-auto relative z-20">
                    <Link
                        href="/intelligentautomation"
                        className="group/btn flex items-center justify-center gap-4 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-sm shadow-2xl transition-all hover:bg-[#F4C430] hover:-translate-y-1 active:scale-95"
                    >
                        <span>مدل‌های همکاری</span>
                        <LuArrowLeft className="w-5 h-5 transition-transform group-hover/btn:-translate-x-2" />
                    </Link>
                    <Link
                        href="/contact-us"
                        className="flex items-center justify-center border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-sm backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all active:scale-95"
                    >
                        تماس با توسعه بازار
                    </Link>
                </div>
            </div>

            {/* ===================== FOOTER TELEMETRY ===================== */ }
            <div className="absolute bottom-6 right-0 left-0 flex items-center justify-center gap-6 opacity-20 pointer-events-none">
                <LuBinary className="w-4 h-4 text-blue-300" />
                <span className="text-[9px] font-mono font-bold text-blue-300 uppercase tracking-[0.6em]">Worldwide Intelligent Technology</span>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
            </div>

            <style jsx global>{ `
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
        </div>
    );
}