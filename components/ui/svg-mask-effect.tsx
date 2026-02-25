"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface MaskContainerProps
{
    children?: React.ReactNode;
    revealText?: React.ReactNode;
    className?: string;
    /** Control the size of the spotlight */
    maskSize?: number;
}

export function MaskContainer ( {
    children,
    revealText,
    className,
    maskSize = 600, // Increased for a bolder reveal
}: MaskContainerProps )
{
    const [ isActive, setIsActive ] = useState( false );
    const [ mouse, setMouse ] = useState( { x: 0, y: 0 } );
    const containerRef = useRef<HTMLDivElement | null>( null );

    // Handle high-performance mouse tracking
    useEffect( () =>
    {
        const el = containerRef.current;
        if ( !el ) return;

        const updateMouse = ( e: MouseEvent ) =>
        {
            const rect = el.getBoundingClientRect();
            setMouse( {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            } );
        };

        el.addEventListener( "mousemove", updateMouse );
        return () => el.removeEventListener( "mousemove", updateMouse );
    }, [] );

    // Calculate the mask style dynamically for a "Bold" sharp edge
    const maskStyle = useMemo( () =>
    {
        const size = isActive ? maskSize : 0;
        return {
            maskImage: `radial-gradient(${ size / 2 }px circle at ${ mouse.x }px ${ mouse.y }px, black 0%, black 70%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(${ size / 2 }px circle at ${ mouse.x }px ${ mouse.y }px, black 0%, black 70%, transparent 100%)`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
        };
    }, [ mouse, isActive, maskSize ] );

    return (
        <div
            ref={ containerRef }
            className={ cn( "relative overflow-hidden cursor-none", className ) }
            onMouseEnter={ () => setIsActive( true ) }
            onMouseLeave={ () => setIsActive( false ) }
        >
            {/* 1. BACKGROUND LAYER (Base state) */ }
            <div className="relative z-10 w-full h-full bg-slate-900 flex items-center justify-center">
                { revealText }
            </div>

            {/* 2. INACTIVE STATE VISUALS (Pulsing Radar) */ }
            <AnimatePresence>
                { !isActive && (
                    <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                        { [ 0, 1, 2 ].map( ( i ) => (
                            <motion.span
                                key={ i }
                                className="absolute rounded-full border border-[#F4C430]/40 shadow-[0_0_15px_rgba(244,196,48,0.2)]"
                                initial={ { width: 40, height: 40, opacity: 0.8 } }
                                animate={ { width: 220, height: 220, opacity: 0 } }
                                transition={ {
                                    duration: 2.5,
                                    ease: "easeOut",
                                    repeat: Infinity,
                                    delay: i * 0.8,
                                } }
                            />
                        ) ) }
                        <div className="text-[10px] font-bold text-[#F4C430] uppercase tracking-widest animate-pulse">
                            Hover to Scan
                        </div>
                    </div>
                ) }
            </AnimatePresence>

            {/* 3. MASKED LAYER (The Bold Reveal) */ }
            <motion.div
                className="absolute inset-0 z-30 pointer-events-none bg-bms-primary"
                initial={ { opacity: 0 } }
                animate={ {
                    opacity: isActive ? 1 : 0,
                } }
                transition={ { duration: 0.3 } }
                style={ maskStyle }
            >
                {/* Rim Glow Effect - Follows mouse inside the mask */ }
                <div
                    className="absolute inset-0 z-40 transition-opacity duration-300"
                    style={ {
                        background: `radial-gradient(${ maskSize / 2 }px circle at ${ mouse.x }px ${ mouse.y }px, rgba(255,255,255,0.15) 0%, transparent 80%)`,
                        opacity: isActive ? 1 : 0
                    } }
                />

                <div className="relative z-50 w-full h-full flex items-center justify-center bg-white">
                    { children }
                </div>
            </motion.div>

            {/* 4. CUSTOM INDUSTRIAL CURSOR */ }
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#F4C430] z-[100] pointer-events-none flex items-center justify-center shadow-[0_0_10px_rgba(244,196,48,0.5)]"
                animate={ {
                    x: mouse.x - 16,
                    y: mouse.y - 16,
                    scale: isActive ? 1.5 : 0,
                    opacity: isActive ? 1 : 0,
                } }
                transition={ { type: "spring", damping: 20, stiffness: 250, mass: 0.5 } }
            >
                <div className="w-1 h-1 bg-[#F4C430] rounded-full" />
            </motion.div>
        </div>
    );
}