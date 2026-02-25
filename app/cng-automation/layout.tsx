import type { ReactNode } from "react";
import CngMacosDock from "@/components/cng/CngMacosDock";

/**
 * 🏗️ UNIVERSAL PRODUCT LAYOUT - REFORMED
 * Strategy: Absolute Navigation (macOS Dock) + Unrestricted Content Flow.
 * Result: No horizontal scroll, maximum readability on mobile.
 */

interface CngProductLayoutProps
{
    children: ReactNode;
}

export default function CngProductLayout ( { children }: CngProductLayoutProps )
{
    return (
        <div className="relative w-full bg-white selection:bg-bms-primary/10 selection:text-bms-primary">
            {/* 
          🚀 UNIVERSAL NAVIGATION
          The macOS Dock sits on a higher Z-index and does not affect the
          DOM flow of the article.
      */}
            <CngMacosDock />

            <div className="relative w-full">
                {/* 
            📄 MAIN CONTENT CORE 
            Uses a centered container that aligns dynamically across devices,
            adhering to our global theme configurations.
        */}
                <article className=" mx-auto min-w-0 pb-2">
                    { children }
                </article>
            </div>

            {/* Visual Hard-Stop Visual Anchor */ }
            <div
                className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"
                aria-hidden="true"
            />
        </div>
    );
}