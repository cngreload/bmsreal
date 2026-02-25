"use client";

import React, { useRef, useState, useMemo } from "react";
import Script from "next/script";
import { LuPlay, LuActivity, LuMonitorPlay } from "react-icons/lu";
import { motion } from "framer-motion";

interface VideoProps
{
    src: string;
    poster: string;
    title: string;
    description: string;
    /** ISO 8601 formatted date (e.g., '2025-01-01') */
    uploadDate: string;
    /** ISO 8601 duration string (e.g., 'PT1M30S'). Defaults to PT2M. */
    duration?: string;
}

export default function IndustrialVideoTerminal ( {
    src,
    poster,
    title,
    description,
    uploadDate,
    duration = "PT2M", // Default duration if unknown
}: VideoProps )
{
    const videoRef = useRef<HTMLVideoElement>( null );
    const [ isPlaying, setIsPlaying ] = useState( false );

    // 🧠 UX: Toggle Play/Pause
    const togglePlay = () =>
    {
        if ( videoRef.current )
        {
            if ( isPlaying )
            {
                videoRef.current.pause();
            } else
            {
                videoRef.current.play();
            }
            setIsPlaying( !isPlaying );
        }
    };

    // 🧠 TRICK: Force browser to render first frame if poster fails or buffers slowly
    const videoSrc = useMemo(
        () => ( src.includes( "#" ) ? src : `${ src }#t=0.001` ),
        [ src ]
    );

    // 🧠 SEO: VideoObject Schema for Google Indexing
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: title,
        description: description,
        thumbnailUrl: [ poster ],
        uploadDate: uploadDate,
        duration: duration,
        contentUrl: src,
        embedUrl: src,
    };

    return (
        <>
            {/* Schema Injection */ }
            <Script
                id={ `video-schema-${ title.replace( /\s+/g, "-" ) }` }
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <div className="relative overflow-hidden rounded-[3.5rem] bg-none py-10 lg:py:16" dir="rtl">
                {/* ===================== THEME BACKGROUND ===================== */ }
                <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
                    {/* Base Radar Circles */ }
                    <div className="absolute h-[600px] w-[600px] rounded-full border border-bms-primary/20" />
                    <div className="absolute h-[900px] w-[900px] rounded-full border border-bms-primary/10" />

                    {/* Animated Core Rings */ }
                    <div className="absolute h-[400px] w-[400px] animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-emerald-500/20" />
                    <div className="absolute h-[800px] w-[800px] animate-[spin_60s_linear_infinite_reverse] rounded-full border border-dotted border-brand-yellow/10" />

                    {/* Core Gradients */ }
                    <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(20,92,152,0.15)_0%,transparent_70%)] blur-2xl" />

                    {/* Subtle Screen Overlay Pattern */ }
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
                </div>

                {/* ===================== CONTENT LAYER ===================== */ }
                <div className="container relative z-10 mx-auto px-6">

                    {/* 1. Header (Title & Subtitle) */ }


                    {/* 2. Video Terminal Player */ }
                    <motion.div
                        initial={ { opacity: 0, scale: 0.95 } }
                        whileInView={ { opacity: 1, scale: 1 } }
                        viewport={ { once: true, margin: "-50px" } }
                        transition={ { duration: 0.8, ease: "easeOut" } }
                        className="group relative mx-auto w-full max-w-4xl"
                    >
                        {/* Visual: Industrial Glow Backdrop */ }
                        <div
                            className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-bms-primary/40 to-emerald-500/30 opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                            aria-hidden="true"
                        />

                        {/* Terminal Chassis */ }
                        <div className="relative overflow-hidden rounded-[2rem] bg-[#020617] p-2 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10">

                            {/* Screen Bezel Reflection */ }
                            <div
                                className="absolute left-0 top-0 z-30 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                aria-hidden="true"
                            />

                            {/* Video Container */ }
                            <div className="group/video relative aspect-video overflow-hidden rounded-xl bg-slate-950">
                                <video
                                    ref={ videoRef }
                                    src={ videoSrc }
                                    poster={ poster }
                                    className="h-full w-full object-cover"
                                    playsInline
                                    controls={ isPlaying }
                                    onPlay={ () => setIsPlaying( true ) }
                                    onPause={ () => setIsPlaying( false ) }
                                />

                                {/* HUD OVERLAY (Active when paused) */ }
                                { !isPlaying && (
                                    <button
                                        type="button"
                                        className="absolute inset-0 flex h-full w-full cursor-pointer flex-col items-center justify-center bg-slate-900/50 backdrop-blur-[2px] transition-all duration-300 hover:bg-slate-900/40 group-hover/video:bg-slate-900/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow/50"
                                        onClick={ togglePlay }
                                        aria-label="پخش ویدیو پایلوت"
                                    >
                                        {/* Play Button Node */ }
                                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover/video:scale-110 lg:h-24 lg:w-24">
                                            <div className="absolute inset-0 animate-[ping_3s_linear_infinite] rounded-full border border-white/40" />
                                            <LuPlay
                                                className="ml-1 h-8 w-8 fill-white text-white lg:h-10 lg:w-10"
                                                aria-hidden="true"
                                            />
                                        </div>

                                        {/* Status Indicators */ }
                                        <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-sm border border-white/5">
                                            <span className="flex h-2.5 w-2.5">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-75" />
                                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-red" />
                                            </span>
                                            <span className="font-mono text-[10px] font-black uppercase tracking-widest text-white lg:text-xs">
                                                LIVE_FEED
                                            </span>
                                        </div>

                                        <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                                            <LuActivity className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                                            <span className="font-mono text-[10px] font-bold uppercase text-emerald-400 lg:text-xs">
                                                SYSTEM ONLINE
                                            </span>
                                        </div>
                                    </button>
                                ) }
                            </div>

                            {/* Terminal Data Readout */ }
                            <div className="relative mb-2 mt-4 flex items-center justify-between px-6 text-center">
                                <div className="text-right">
                                    <h3 className="mb-1 text-sm font-bold text-white md:text-base">{ title }</h3>
                                    <p className="text-[10px] font-medium leading-relaxed text-slate-400 md:text-xs">
                                        { description }
                                    </p>
                                </div>

                                {/* Tech Barcode Element */ }
                                <div className="hidden flex-col items-end opacity-40 sm:flex" aria-hidden="true">
                                    <div className="mb-1 flex h-4 gap-1">
                                        { [ 1, 2, 3, 4, 5, 6 ].map( ( i ) => (
                                            <div key={ i } className={ `w-1 bg-white ${ i % 2 === 0 ? 'h-full' : 'h-3' }` } />
                                        ) ) }
                                    </div>
                                    <span className="font-mono text-[8px] uppercase tracking-widest text-white">
                                        Node_Auth_042
                                    </span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}