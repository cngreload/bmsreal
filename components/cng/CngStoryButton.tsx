"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
{
    id?: string;
    title: string;
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    containerClass?: string;
    onClick?: () => void;
}

export default function CngStoryButton ( {
    id,
    title,
    rightIcon,
    leftIcon,
    containerClass,
    onClick,
}: ButtonProps )
{
    return (
        <button
            id={ id }
            onClick={ onClick }
            className={ cn(
                // Zentry Style: Violet/White background, Black text
                "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black transition-all hover:bg-emerald-400",
                containerClass
            ) }
        >
            <div className="flex items-center gap-2">
                { rightIcon }

                <span className="relative inline-flex overflow-hidden font-sans text-xs font-bold uppercase tracking-wider">
                    <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                        { title }
                    </div>
                    <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                        { title }
                    </div>
                </span>

                { leftIcon }
            </div>
        </button>
    );
}