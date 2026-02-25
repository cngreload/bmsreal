"use client";

import Link from "next/link";
import Image from "next/image";
import { LuCpu, LuCode, LuBinary } from "react-icons/lu";

export default function TechStrip ()
{
    return (
        <div className="relative h-full w-full flex flex-col bg-bms-dark overflow-hidden group">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/techstack.png"
                    alt="Technical Infrastructure"
                    fill
                    className="object-cover opacity-20 filter saturate-0 mix-blend-luminosity transition-transform duration-[20s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-bms-dark via-bms-dark/95 to-transparent" />
            </div>

            <div className="relative z-10 p-6 sm:p-10 lg:p-14 flex flex-col h-full">
                <header className="mb-8">
                    <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-yellow backdrop-blur-md mb-6">
                        <LuCpu className="w-4 h-4" />
                        <span className="text-[9px] font-black uppercase tracking-widest font-mono">Core_Engine_v4.2</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tightest">
                        حاکمیت <span className="text-bms-accent">تکنولوژی</span>
                    </h2>
                </header>

                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed mb-10 max-w-sm">
                    بومی‌سازی لایه‌های سخت‌افزار و نرم‌افزار برای تضمین امنیت مطلق در زیرساخت‌های ملی.
                </p>

                <div className="flex items-center gap-6 mt-auto">
                    <Link
                        href="/technologies"
                        className="group/btn relative inline-flex items-center gap-3 rounded-xl bg-white text-bms-dark px-6 py-3 text-[10px] font-black shadow-xl hover:-translate-y-1 transition-all"
                    >
                        <span>بررسی فنی</span>
                        <LuCode className="w-4 h-4" />
                    </Link>
                    <div className="flex flex-col opacity-40">
                        <span className="text-[8px] font-mono text-white uppercase tracking-widest leading-none mb-1">Latency: 15ms</span>
                        <span className="text-[8px] font-mono text-white uppercase tracking-widest leading-none">Security: AES-256</span>
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 opacity-10 group-hover:opacity-30 transition-opacity">
                    <LuBinary className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                </div>
            </div>
        </div>
    );
}