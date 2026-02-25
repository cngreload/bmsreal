"use client";

import Link from "next/link";
import
{
    LuMapPin,
    LuPhone,
    LuMail,
    LuLinkedin,
    LuInstagram,
    LuArrowUpLeft,
} from "react-icons/lu";
import type { ElementType } from "react";
import Image from "next/image";

/* --- TYPES --- */

type IconType = ElementType<{ className?: string; }>;

/* --- DATA --- */

const PRODUCT_LINKS = [
    { label: "امنیت انرژی (ICTS)", href: "/cng-automation" },
    { label: "سلامت دیجیتال (Clinicans)", href: "/clinicans" },
    { label: "هوشمندسازی صنعتی", href: "/intelligentautomation" },
];

const COMPANY_LINKS = [
    { label: "داستان ما", href: "/about/story" },
    { label: "تماس و گفتگو", href: "/contact-us" },
    { label: "مجله خبری", href: "/news" },
    { label: "فرصت‌های شغلی", href: "/careers" },
];

/* --- MAIN COMPONENT --- */

export default function Footer ()
{
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="mt-auto border-t border-slate-200 bg-white text-right"
            role="contentinfo"
            dir="rtl"
        >
            <div className="container mx-auto py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

                    {/* ===================== BRAND COLUMN ===================== */ }
                    <div className="flex flex-col space-y-6 sm:col-span-2 lg:col-span-4">
                        <Link
                            href="/"
                            className="flex w-fit items-center gap-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-bms-primary/50"
                            aria-label="صفحه اصلی بارمان"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bms-primary text-xl font-bold text-white shadow-md">
                                <Image src="/bmslogoclean.webp" alt="footorlogo" width={ 600 } height={ 600 } />
                            </div>
                            <span className="text-xl font-black tracking-tight text-slate-900">
                                بارمان محور
                            </span>
                        </Link>

                        <p className="pl-4 text-justify text-sm font-light leading-relaxed text-slate-600 md:text-base">
                            ما اینجا هستیم تا فاصله بین «داده‌های میدانی» و «آرامش مدیریتی» را پر
                            کنیم. تکنولوژی برای ما ابزار است، نه هدف؛ هدف، ساختن زیرساخت‌هایی است
                            که امن، پایدار و انسانی باشند.
                        </p>

                        <div className="flex gap-3 pt-2">
                            <SocialLink
                                href="https://linkedin.com"
                                icon={ LuLinkedin }
                                label="لینکدین بارمان"
                            />
                            <SocialLink
                                href="https://instagram.com"
                                icon={ LuInstagram }
                                label="اینستاگرام بارمان"
                            />
                        </div>
                    </div>

                    {/* ===================== PRODUCTS COLUMN ===================== */ }
                    <div className="lg:col-span-3 lg:col-start-6">
                        <h4 className="mb-6 text-sm font-bold text-slate-900">محصولات</h4>
                        <ul className="space-y-4" role="list">
                            { PRODUCT_LINKS.map( ( link ) => (
                                <li key={ link.href }>
                                    <Link
                                        href={ link.href }
                                        className="group flex w-fit items-center gap-1.5 rounded-md text-sm font-medium text-slate-600 outline-none transition-colors hover:text-bms-primary focus-visible:ring-2 focus-visible:ring-bms-primary/50"
                                    >
                                        <span>{ link.label }</span>
                                        <LuArrowUpLeft
                                            className="h-3 w-3 shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </li>
                            ) ) }
                        </ul>
                    </div>

                    {/* ===================== COMPANY COLUMN ===================== */ }
                    <div className="lg:col-span-2">
                        <h4 className="mb-6 text-sm font-bold text-slate-900">گشت و گذار</h4>
                        <ul className="space-y-4" role="list">
                            { COMPANY_LINKS.map( ( link ) => (
                                <li key={ link.href }>
                                    <Link
                                        href={ link.href }
                                        className="block w-fit rounded-md text-sm font-medium text-slate-600 outline-none transition-colors hover:text-bms-primary focus-visible:ring-2 focus-visible:ring-bms-primary/50"
                                    >
                                        { link.label }
                                    </Link>
                                </li>
                            ) ) }
                        </ul>
                    </div>

                    {/* ===================== CONTACT WIDGET COLUMN ===================== */ }
                    <div className="sm:col-span-2 lg:col-span-4 xl:col-span-3">
                        <div className="space-y-5 rounded-2xl border border-slate-100 bg-slate-50 p-6">
                            <h4 className="text-sm font-bold text-slate-900">هم‌صحبت شویم</h4>

                            <div className="space-y-3">
                                <a
                                    href="tel:02166463924"
                                    className="group flex w-full items-center justify-end gap-3 rounded-md text-slate-600 outline-none transition-colors hover:text-bms-primary focus-visible:ring-2 focus-visible:ring-bms-primary/50"
                                    aria-label="تماس تلفنی با بارمان"
                                >
                                    <span
                                        className="font-mono text-sm font-medium transition-all group-hover:font-bold"
                                        dir="ltr"
                                    >
                                        021-66463924
                                    </span>
                                    <IconBox icon={ LuPhone } />
                                </a>

                                <a
                                    href="mailto:info@co-bms.ir"
                                    className="group flex w-full items-center justify-end gap-3 rounded-md text-slate-600 outline-none transition-colors hover:text-bms-primary focus-visible:ring-2 focus-visible:ring-bms-primary/50"
                                    aria-label="ارسال ایمیل به بارمان"
                                >
                                    <span
                                        className="font-mono text-sm font-medium transition-all group-hover:font-bold"
                                        dir="ltr"
                                    >
                                        info@co-bms.ir
                                    </span>
                                    <IconBox icon={ LuMail } />
                                </a>
                            </div>

                            <div className="border-t border-slate-200 pt-4">
                                <div className="flex items-start justify-end gap-3">
                                    <address className="text-xs font-medium leading-relaxed text-slate-500 not-italic">
                                        تهران، بلوار کشاورز، وصال شیرازی، پلاک ۵۷
                                    </address>
                                    <LuMapPin
                                        className="mt-0.5 h-4 w-4 shrink-0 text-slate-400"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===================== COPYRIGHT BOTTOM BAR ===================== */ }
                <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:gap-6 md:mt-16">
                    <p className="text-center text-[11px] font-medium text-slate-400 sm:text-right">
                        © { currentYear } بارمان محور اسپادانا. تمامی حقوق محفوظ است.
                    </p>

                </div>
            </div>
        </footer>
    );
}

/* ============================================================================
   HELPERS
   ============================================================================ */

interface SocialLinkProps
{
    href: string;
    icon: IconType;
    label: string;
}

function SocialLink ( { href, icon: Icon, label }: SocialLinkProps )
{
    return (
        <a
            href={ href }
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ label }
            className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 outline-none transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white focus-visible:ring-2 focus-visible:ring-bms-primary/50"
        >
            <Icon className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
        </a>
    );
}

interface IconBoxProps
{
    icon: IconType;
}

function IconBox ( { icon: Icon }: IconBoxProps )
{
    return (
        <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 shadow-sm transition-colors group-hover:border-bms-primary group-hover:text-bms-primary"
            aria-hidden="true"
        >
            <Icon className="h-4 w-4 shrink-0" />
        </div>
    );
}