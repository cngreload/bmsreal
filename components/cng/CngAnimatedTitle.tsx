"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin( ScrollTrigger );

interface AnimatedTitleProps
{
    title: string;
    containerClass?: string;
}

export default function CngAnimatedTitle ( { title, containerClass }: AnimatedTitleProps )
{
    const containerRef = useRef<HTMLDivElement>( null );

    useEffect( () =>
    {
        const ctx = gsap.context( () =>
        {
            const titleAnimation = gsap.timeline( {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                },
            } );

            titleAnimation.to(
                ".animated-word",
                {
                    opacity: 1,
                    transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
                    ease: "power2.inOut",
                    stagger: 0.02,
                },
                0
            );
        }, containerRef );

        return () => ctx.revert();
    }, [] );

    return (
        <div ref={ containerRef } className={ cn( "animated-title w-full z-20 text-center", containerClass ) }>
            { title.split( "<br />" ).map( ( line, index ) => (
                <div
                    key={ index }
                    className="flex flex-wrap justify-center gap-2 px-4 md:gap-3"
                >
                    { line.split( " " ).map( ( word, idx ) => (
                        <span
                            key={ idx }
                            // Added mix-blend-difference text-white to handle overlaps
                            className="animated-word opacity-0 transform translate-y-10 rotate-y-12 inline-block font-black text-white mix-blend-difference text-4xl md:text-6xl lg:text-8xl leading-[1.2]"
                            dangerouslySetInnerHTML={ { __html: word } }
                        />
                    ) ) }
                </div>
            ) ) }
        </div>
    );
}