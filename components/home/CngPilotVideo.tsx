"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Script from "next/script";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LuMonitor } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface CngPilotVideoProps
{
    src: string;
    poster?: string;
    ariaLabel?: string;
    title?: string;
    description?: string;
}

export default function CngPilotVideo ( {
    src,
    poster,
    ariaLabel = "ویدیوی گزارش پایلوت بارمان",
    title = "گزارش ویدیویی پایلوت اجرایی سامانه ICTS",
    description = "مستندات تصویری استقرار، بهره‌برداری و پایش لحظه‌ای در فاز عملیاتی جایگاه‌های سوخت کشور.",
}: CngPilotVideoProps )
{
    const videoRef = useRef<HTMLVideoElement | null>( null );
    const containerRef = useRef<HTMLDivElement>( null );
    const [ isPlaying, setIsPlaying ] = useState( false );
    const [ metadata, setMetadata ] = useState( { duration: "0:00", quality: "4K" } );

    const x = useMotionValue( 0 );
    const y = useMotionValue( 0 );
    const mouseXSpring = useSpring( x );
    const mouseYSpring = useSpring( y );
    const rotateX = useTransform( mouseYSpring, [ -0.5, 0.5 ], [ "3deg", "-3deg" ] );
    const rotateY = useTransform( mouseXSpring, [ -0.5, 0.5 ], [ "-3deg", "3deg" ] );

    const handleMouseMove = ( e: React.MouseEvent<HTMLDivElement> ) =>
    {
        if ( !containerRef.current ) return;
        const rect = containerRef.current.getBoundingClientRect();
        x.set( e.clientX / rect.width - 0.5 );
        y.set( e.clientY / rect.height - 0.5 );
    };

    useEffect( () =>
    {
        const v = videoRef.current;
        if ( !v ) return;

        const onPlay = () => setIsPlaying( true );
        const onPause = () => setIsPlaying( false );

        const onLoaded = () =>
        {
            const min = Math.floor( v.duration / 60 );
            const sec = Math.floor( v.duration % 60 );

            setMetadata( p => ( {
                ...p,
                duration: `${ min }:${ sec.toString().padStart( 2, "0" ) }`
            } ) );
        };

        v.addEventListener( "play", onPlay );
        v.addEventListener( "pause", onPause );
        v.addEventListener( "loadedmetadata", onLoaded );

        return () =>
        {
            v.removeEventListener( "play", onPlay );
            v.removeEventListener( "pause", onPause );
            v.removeEventListener( "loadedmetadata", onLoaded );
        };
    }, [] );

    const videoSrc = useMemo(
        () => ( src.includes( "#" ) ? src : `${ src }#t=0.001` ),
        [ src ]
    );

    return (
        <section
            ref={ containerRef }
            aria-label={ ariaLabel }
            onMouseMove={ handleMouseMove }
            onMouseLeave={ () =>
            {
                x.set( 0 );
                y.set( 0 );
            } }
            className="relative w-full py-24 lg:py-40 overflow-hidden bg-[#0A2540]"
            dir="rtl"
        >
            <Script
                id="video-schema-icts"
                type="application/ld+json"
                dangerouslySetInnerHTML={ {
                    __html: JSON.stringify( {
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        name: title,
                        description,
                        thumbnailUrl: [ poster || "" ],
                        uploadDate: "2025-01-01T08:00:00+08:00",
                        contentUrl: src,
                    } ),
                } }
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                <motion.div
                    style={ { rotateX, rotateY, perspective: 1200 } }
                    className="relative"
                >
                    <div className="flex items-center justify-between mb-6 px-4">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-[#D72638] animate-pulse" />
                                <span className="text-[9px] font-mono font-bold text-white/50 uppercase tracking-widest">
                                    Live_Signal
                                </span>
                            </div>

                            <div className="hidden md:flex gap-6 text-[9px] font-mono text-white/40 uppercase tracking-widest border-r border-white/10 pr-6">
                                <span>Duration: { metadata.duration }</span>
                                <span>Quality: { metadata.quality }</span>
                            </div>
                        </div>

                        <LuMonitor className="text-white/20 w-5 h-5" />
                    </div>

                    <div className="relative overflow-hidden rounded-[3rem] bg-black">
                        <video
                            ref={ videoRef }
                            poster={ poster }
                            aria-label={ ariaLabel }
                            playsInline
                            preload="metadata"
                            className={ cn(
                                "w-full h-full object-cover transition-all duration-1000",
                                !isPlaying && "scale-105 saturate-[0.5] blur-[1px] opacity-60"
                            ) }
                        >
                            <source src={ videoSrc } type="video/mp4" />
                        </video>
                    </div>
                </motion.div>

                <div className="mt-16">
                    <h4 className="text-2xl font-black text-white">
                        { title }
                    </h4>
                    <p className="text-base text-blue-100/70">
                        { description }
                    </p>
                </div>

            </div>
        </section>
    );
}
