"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * 🚀 SMOOTH SCROLL ENGINE - REFORMED
 * Strategy: High-fidelity momentum scrolling using Lenis.
 * Requirement: Run `npm install lenis` to resolve module declarations.
 */

interface SmoothScrollProps
{
    children: ReactNode;
}

export const SmoothScroll = ( { children }: SmoothScrollProps ) =>
{
    const lenisRef = useRef<Lenis | null>( null );

    useEffect( () =>
    {
        // Initialize Lenis with mathematical easing for professional "weight"
        const lenis = new Lenis( {
            duration: 1.4, // Slightly slower for more luxurious corporate feel
            easing: ( t: number ) => Math.min( 1, 1.001 - Math.pow( 2, -10 * t ) ), // Explicitly typed 't' to fix Error 7006
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.1, // Improved responsiveness
            touchMultiplier: 2,
            infinite: false,
        } );

        lenisRef.current = lenis;

        // Handle Scroll Events for potential GSAP/Parallax synchronization
        lenis.on( "scroll", () =>
        {
            // Logic for scroll-linked visual elements can be placed here
        } );

        // RequestAnimationFrame Loop
        function raf ( time: number )
        {
            lenis.raf( time );
            requestAnimationFrame( raf );
        }

        const requestID = requestAnimationFrame( raf );

        // Clean up on component unmount to prevent memory leaks and ghost scrolling
        return () =>
        {
            lenis.destroy();
            cancelAnimationFrame( requestID );
        };
    }, [] );

    return (
        <div className="smooth-scroll-wrapper">
            { children }
        </div>
    );
};

export default SmoothScroll;