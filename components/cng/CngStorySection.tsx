"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LuShieldCheck, LuAward, LuFileBadge, LuBinary } from "react-icons/lu";

// Register ScrollTrigger safely in CSR
if ( typeof window !== "undefined" )
{
    gsap.registerPlugin( ScrollTrigger );
}

export default function CngStorySection ()
{
    const containerRef = useRef<HTMLElement>( null );
    const imageWrapperRef = useRef<HTMLDivElement>( null );
    const contentRef = useRef<HTMLDivElement>( null );

    // Refs for staggered internal animations
    const badgeRef = useRef<HTMLDivElement>( null );
    const titleRef = useRef<HTMLHeadingElement>( null );
    const descRef = useRef<HTMLParagraphElement>( null );
    const gridRef = useRef<HTMLDivElement>( null );

    useGSAP(
        () =>
        {
            const container = containerRef.current;
            const imageWrapper = imageWrapperRef.current;
            const content = contentRef.current;

            if ( !container || !imageWrapper || !content ) return;

            // ⚡ PERFORMANCE: Hinting browser for heavy GPU transforms
            gsap.set( imageWrapper, { willChange: "clip-path, transform" } );
            gsap.set( content, { willChange: "opacity, transform" } );

            const tl = gsap.timeline( {
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "+=250%", // Optimized scroll duration for a comfortable read
                    scrub: 0.6,
                    pin: true,
                    anticipatePin: 1,
                },
            } );

            // 1. Reveal Phase: Expand image from card-inset to full-screen
            tl.to( imageWrapper, {
                clipPath: "inset(0% 0% 0% 0% round 0px)",
                scale: 1,
                duration: 2,
                ease: "power3.inOut",
            } )
                // 2. Entrance Phase: Staggered reveal of the Glass Card
                .to(
                    content,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                    },
                    "-=0.5"
                )
                .from(
                    [
                        badgeRef.current,
                        titleRef.current,
                        descRef.current,
                        gridRef.current,
                    ],
                    {
                        y: 24,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "back.out(1.4)",
                    },
                    "<"
                )
                // 3. The Sustained Hold (Reading Time)
                .to( {}, { duration: 1.5 } )
                // 4. Exit Phase: Fade content and Grayscale the image
                .to( content, {
                    opacity: 0,
                    y: -40,
                    duration: 0.8,
                    ease: "power2.in",
                } )
                .to(
                    imageWrapper,
                    {
                        clipPath: "inset(12% 4% 12% 4% round 3rem)",
                        scale: 0.92,
                        filter: "grayscale(100%) brightness(0.7)",
                        duration: 2,
                        ease: "power3.inOut",
                    },
                    "<+=0.1"
                );
        },
        { scope: containerRef }
    );

    return (
        <section
            id="story"
            ref={ containerRef }
            className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white"
            aria-label="داستان امنیت و پدافند غیرعامل بارمان"
            dir="rtl"
        >
            <div className="relative flex h-full w-full items-center justify-center">
                {/* ================= 1. THE GLASS CARD (Floating UI) ================= */ }
                <div
                    ref={ contentRef }
                    className="pointer-events-none absolute z-20 w-[94%] max-w-4xl translate-y-12 opacity-0"
                >
                    <div className="relative overflow-hidden rounded-[3.5rem] border border-white/50 bg-white/85 p-8 text-center shadow-[0_50px_100px_-20px_rgba(15,23,42,0.25)] backdrop-blur-3xl md:p-16">

                        {/* HUD Grid Detail */ }
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#145C98_1px,transparent_1px)] bg-[size:32px_32px]"
                            aria-hidden="true"
                        />

                        {/* Badge - Corporate Navy */ }
                        <div ref={ badgeRef } className="mb-8 flex justify-center">
                            <span className="inline-flex items-center gap-3 rounded-full bg-bms-dark px-5 py-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-2xl ring-1 ring-white/20">
                                <LuShieldCheck
                                    className="h-4 w-4 shrink-0 animate-pulse text-emerald-400"
                                    aria-hidden="true"
                                />
                                <span>استاندارد ملی امنیت صنعتی</span>
                            </span>
                        </div>

                        {/* Headline */ }
                        <h2
                            ref={ titleRef }
                            className="mb-8 text-3xl font-black leading-[1.2] tracking-tightest text-slate-950 md:text-6xl"
                        >
                            تنها دارنده گواهی <br />
                            <span className="bg-gradient-to-l from-[#145C98] via-[#145C98] to-blue-600 bg-clip-text text-transparent">
                                پدافند غیرعامل
                            </span>
                        </h2>

                        {/* Description */ }
                        <p
                            ref={ descRef }
                            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-slate-600 md:text-xl"
                        >
                            در مدیریت زیرساخت‌های حیاتی انرژی، امنیت یک ادعا نیست؛ یک الزام
                            قانونی است. ICTS تنها پلتفرم بومی با تاییدیه سطح یک پدافند غیرعامل
                            است.
                        </p>

                        {/* Trust Grid */ }
                        <div
                            ref={ gridRef }
                            className="mt-12 flex flex-wrap justify-center gap-6 border-t border-slate-200/50 pt-12"
                        >
                            <div className="flex items-center gap-4 rounded-2xl border border-white bg-slate-50/50 px-6 py-4 shadow-sm">
                                <LuAward
                                    className="h-7 w-7 shrink-0 text-brand-yellow"
                                    aria-hidden="true"
                                />
                                <div className="text-right">
                                    <span className="block font-mono text-[8px] font-black uppercase tracking-tighter text-slate-400">
                                        Auth_Node
                                    </span>
                                    <span className="text-sm font-bold text-slate-900">
                                        مجوز سازمان پدافند
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-2xl border border-white bg-slate-50/50 px-6 py-4 shadow-sm">
                                <LuFileBadge
                                    className="h-7 w-7 shrink-0 text-bms-primary"
                                    aria-hidden="true"
                                />
                                <div className="text-right">
                                    <span className="block font-mono text-[8px] font-black uppercase tracking-tighter text-slate-400">
                                        Enterprise
                                    </span>
                                    <span className="text-sm font-bold text-slate-900">
                                        تاییدیه دانش‌بنیان
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= 2. THE VISUAL (Cinematic Image) ================= */ }
                <div
                    ref={ imageWrapperRef }
                    className="absolute inset-0 z-10 h-full w-full origin-center overflow-hidden bg-slate-100 shadow-2xl"
                    style={ {
                        clipPath: "inset(10% 4% 10% 4% round 3rem)",
                        transform: "scale(0.96)",
                    } }
                >
                    <Image
                        src="/certificate_padafand.webp"
                        alt="گواهی رسمی پدافند غیرعامل سامانه بارمان"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                        quality={ 100 }
                    />

                    {/* Cinematic Overlay */ }
                    <div
                        className="pointer-events-none absolute inset-0 bg-slate-950/25 mix-blend-multiply"
                        aria-hidden="true"
                    />
                    <div className="absolute left-10 top-10 opacity-20" aria-hidden="true">
                        <LuBinary className="h-32 w-32 text-white" />
                    </div>
                </div>
            </div>
        </section>
    );
}