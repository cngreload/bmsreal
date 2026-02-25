"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, MotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { LuHouse, LuHistory, LuInfo, LuCpu, LuGlobe, LuTrendingUp, LuHandshake, LuChevronUp } from "react-icons/lu";

if ( typeof window !== "undefined" )
{
    gsap.registerPlugin( ScrollTrigger );
}

interface IDockItem
{
    id: string;
    label: string;
    icon: React.ElementType;
}

const DOCK_ITEMS: IDockItem[] = [
    { id: "hero", label: "معرفی", icon: LuHouse },
    { id: "story", label: "داستان BMS", icon: LuHistory },
    { id: "what-is-wit", label: "چیستی WIT", icon: LuInfo },
    { id: "architecture", label: "معماری فنی", icon: LuCpu },
    { id: "domains", label: "قلمروها", icon: LuGlobe },
    { id: "impact", label: "تأثیر اقتصادی", icon: LuTrendingUp },
    { id: "action", label: "مشارکت", icon: LuHandshake },
];

export default function WitMacosDock ()
{
    const [ active, setActive ] = useState( "hero" );
    const [ mounted, setMounted ] = useState( false );
    const dockContainerRef = useRef<HTMLDivElement>( null );
    const mouseX = useMotionValue( Infinity );

    useEffect( () => setMounted( true ), [] );

    useGSAP( () =>
    {
        if ( !mounted || !dockContainerRef.current ) return;

        gsap.set( dockContainerRef.current, { y: 0, opacity: 1 } );

        ScrollTrigger.create( {
            start: "top top",
            end: "bottom bottom",
            onUpdate: ( self ) =>
            {
                if ( self.direction === 1 && self.scroll() > 150 )
                {
                    gsap.to( dockContainerRef.current, { y: 120, opacity: 0, duration: 0.4, ease: "power2.in" } );
                } else if ( self.direction === -1 )
                {
                    gsap.to( dockContainerRef.current, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" } );
                }
            }
        } );

        ScrollTrigger.create( {
            trigger: "footer",
            start: "top bottom",
            onEnter: () => gsap.to( dockContainerRef.current, { y: 120, opacity: 0, duration: 0.3 } ),
            onLeaveBack: () => gsap.to( dockContainerRef.current, { y: 0, opacity: 1, duration: 0.4 } ),
        } );

        DOCK_ITEMS.forEach( ( item ) =>
        {
            ScrollTrigger.create( {
                trigger: `#${ item.id }`,
                start: "top 40%",
                end: "bottom 60%",
                onToggle: ( self ) => { if ( self.isActive ) setActive( item.id ); },
            } );
        } );
    }, { scope: dockContainerRef, dependencies: [ mounted ] } );

    if ( !mounted ) return null;

    return (
        <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
            <motion.div
                onMouseMove={ ( e ) => mouseX.set( e.pageX ) }
                onMouseLeave={ () => mouseX.set( Infinity ) }
                className="flex items-end gap-2 md:gap-3 p-3 md:p-4 rounded-[2rem] md:rounded-[2.5rem] bg-white/80 backdrop-blur-3xl border border-slate-200/50 shadow-2xl ring-1 ring-black/5 pointer-events-auto"
                dir="rtl"
            >
                { DOCK_ITEMS.map( ( item ) => (
                    <DockIcon
                        key={ item.id }
                        mouseX={ mouseX }
                        item={ item }
                        isActive={ active === item.id }
                    />
                ) ) }

                <div className="w-px h-8 md:h-10 bg-slate-200 mx-1 mb-2 opacity-50" />

                <button
                    onClick={ () => window.scrollTo( { top: 0, behavior: 'smooth' } ) }
                    className="group relative flex h-[44px] w-[44px] md:h-[54px] md:w-[54px] items-center justify-center rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 hover:bg-bms-primary hover:text-white transition-all duration-300 mb-0.5"
                >
                    <LuChevronUp className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-y-1 transition-transform" />
                </button>
            </motion.div>
        </div>
    );
}

function DockIcon ( { mouseX, item, isActive }: { mouseX: MotionValue<number>, item: IDockItem, isActive: boolean; } )
{
    const ref = useRef<HTMLDivElement>( null );
    const Icon = item.icon;

    const distance = useTransform( mouseX, ( val: number ) =>
    {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    } );

    const isDesktop = typeof window !== 'undefined' && window.innerWidth > 1024;
    const baseSize = isDesktop ? 54 : 46;
    const magSize = isDesktop ? 84 : 50;

    const widthSync = useTransform( distance, [ -150, 0, 150 ], [ baseSize, magSize, baseSize ] );
    const width = useSpring( widthSync, { mass: 0.1, stiffness: 200, damping: 20 } );

    return (
        <motion.div
            ref={ ref }
            style={ { width } }
            onClick={ () =>
            {
                const el = document.getElementById( item.id );
                if ( el ) window.scrollTo( { top: el.offsetTop - 100, behavior: "smooth" } );
            } }
            className="group relative aspect-square flex flex-col items-center justify-center cursor-pointer"
        >
            <AnimatePresence>
                <div className="absolute -top-16 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0 hidden lg:block">
                    <div className="bg-bms-dark text-white text-[11px] font-black px-4 py-2 rounded-2xl shadow-2xl border border-white/10">
                        { item.label }
                    </div>
                    <div className="w-2.5 h-2.5 bg-bms-dark rotate-45 mx-auto -mt-1.5" />
                </div>
            </AnimatePresence>

            <div className={ cn(
                "flex items-center justify-center w-full h-full rounded-xl md:rounded-2xl transition-all duration-300 border shadow-sm relative overflow-hidden",
                isActive
                    ? "bg-bms-primary text-white border-bms-primary shadow-lg shadow-blue-500/30 scale-105"
                    : "bg-white text-slate-500 border-slate-100 hover:border-bms-primary/40 hover:text-bms-primary"
            ) }>
                <Icon className="w-1/2 h-1/2 relative z-10" />
            </div>

            { isActive && (
                <motion.div
                    layoutId="wit-dock-dot"
                    className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-[#D72638] shadow-[0_0_8px_#D72638]"
                />
            ) }
        </motion.div>
    );
}