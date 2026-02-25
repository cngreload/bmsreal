"use client";

import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function CardMaskText ()
{
    return (
        <MaskContainer
            className="rounded-lg"
            revealText={
                <p className="text-slate-300 text-sm md:text-[15px] leading-8 text-justify font-light">
                    بارمان محور اسپادانا با تمرکز بر توسعه راهکارهای نرم‌افزاری و
                    سامانه‌های هوشمند، خدماتی برای کنترل، پایش و تصمیم‌گیری
                    در سامانه‌ها و دارایی‌های حیاتی ارائه می‌دهد.
                </p>
            }
        >
            <p className="text-white text-3xl md:text-[20px] leading-8 text-justify font-light">
                چشم انداز
            </p>
        </MaskContainer>
    );
}
