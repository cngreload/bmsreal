'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import
{
    LuChevronDown,
    LuMenu,
    LuX,
    LuShieldCheck,
    LuUsers,
    LuTarget,
    LuBookOpen,
    LuScale,
    LuNetwork,
    LuCpu,
    LuActivity,
    LuFactory,
    LuPhone,
    LuNewspaper,
    LuHouse,
    LuPlus,
    LuHeartPulse,
} from 'react-icons/lu';
import Image from 'next/image';

/* --- 1. HUMAN-CENTRIC NAV DATA --- */

interface NavItem
{
    label: string;
    href: string;
    icon?: React.ComponentType<{ className?: string; }>;
    desc?: string;
}

interface NavSection
{
    id: string;
    label: string;
    items: NavItem[];
}

const NAV_SECTIONS: NavSection[] = [
    {
        id: 'solutions',
        label: 'راهکارها',
        items: [
            {
                label: 'امنیت انرژی (ICTS)',
                href: '/cng-automation',
                icon: LuCpu,
                desc: 'خیالت راحت، جایگاه امنه',
            },
            {
                label: 'سلامت دیجیتال (Clinicans)',
                href: '/clinicans',
                icon: LuActivity,
                desc: 'زمان برای درمان، نه کاغذبازی',
            },
            {
                label: 'صنعت هوشمند',
                href: '/intelligentautomation',
                icon: LuFactory,
                desc: 'کارخانه زنده و بیدار',
            },
        ],
    },
    {
        id: 'company',
        label: 'درباره ما',
        items: [
            { label: 'داستان ما', href: '/about/story', icon: LuBookOpen },
            { label: 'باورهای ما (ماموریت)', href: '/about/mission', icon: LuTarget },
            { label: 'ارزش‌ها', href: '/about/values', icon: LuShieldCheck },
            { label: 'آدم‌های بارمان', href: '/about/team', icon: LuUsers },
            { label: 'شفافیت (حاکمیت)', href: '/about/governance', icon: LuScale },
            { label: 'هم‌مسیرها (اکوسیستم)', href: '/about/ecosystem', icon: LuNetwork },
        ],
    },
];

/* --- 2. DROPDOWN COMPONENT --- */

interface DropdownProps
{
    section: NavSection;
    open: boolean;
    onToggle: () => void;
    onClose: () => void;
    mobile?: boolean;
}

function Dropdown ( {
    section,
    open,
    onToggle,
    onClose,
    mobile = false,
}: DropdownProps )
{
    if ( mobile )
    {
        return (
            <div className="w-full space-y-1.5">
                <button
                    onClick={ onToggle }
                    aria-expanded={ open }
                    className={ cn(
                        'flex w-full items-center justify-between rounded-2xl px-5 py-4 text-base font-semibold outline-none focus-visible:ring-2 focus-visible:ring-bms-primary/50',
                        open
                            ? 'bg-bms-primary-soft text-bms-primary'
                            : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                    ) }
                >
                    <span>{ section.label }</span>
                    <LuChevronDown
                        className={ cn(
                            'h-5 w-5 shrink-0 transition-transform duration-300 ease-out',
                            open && 'rotate-180'
                        ) }
                        aria-hidden="true"
                    />
                </button>

                <div
                    className={ cn(
                        'grid overflow-hidden transition-all duration-300 ease-in-out',
                        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    ) }
                >
                    <div className="min-h-0 space-y-1 px-2 pb-3 pt-1">
                        { section.items.map( ( item ) =>
                        {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={ item.href }
                                    href={ item.href }
                                    onClick={ onClose }
                                    className="flex items-start gap-3.5 rounded-xl px-5 py-3.5 text-sm transition-all duration-200 hover:bg-bms-primary-soft/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bms-primary/50 active:bg-bms-primary-soft"
                                >
                                    { Icon && (
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-slate-400 shadow-sm">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                    ) }
                                    <div className="flex flex-col">
                                        <span className="font-medium text-slate-800">
                                            { item.label }
                                        </span>
                                        { item.desc && (
                                            <span className="mt-0.5 text-xs font-light leading-tight text-slate-500">
                                                { item.desc }
                                            </span>
                                        ) }
                                    </div>
                                </Link>
                            );
                        } ) }
                    </div>
                </div>
            </div>
        );
    }

    // Desktop Dropdown
    return (
        <div className="relative">
            <button
                onClick={ onToggle }
                className={ cn(
                    'group relative flex h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-5 text-sm font-medium outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-bms-primary/50',
                    open
                        ? 'bg-white shadow-sm ring-1 ring-slate-200 text-slate-900'
                        : 'text-slate-600 hover:bg-white/80 hover:shadow-sm hover:text-slate-900'
                ) }
                aria-expanded={ open }
                aria-haspopup="true"
            >
                <span>{ section.label }</span>
                <LuChevronDown
                    className={ cn(
                        'h-4 w-4 shrink-0 transition-transform duration-300 ease-out',
                        open && 'rotate-180'
                    ) }
                    aria-hidden="true"
                />
            </button>

            { open && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={ onClose }
                        aria-hidden="true"
                    />
                    <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-2xl border border-slate-100 bg-white/95 p-2 shadow-soft-lg ring-1 ring-slate-900/5 backdrop-blur-xl">
                        { section.items.map( ( item ) =>
                        {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={ item.href }
                                    href={ item.href }
                                    onClick={ onClose }
                                    className="group flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-sm outline-none transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-bms-primary/50"
                                >
                                    { Icon && (
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-white text-slate-500 shadow-sm transition-colors group-hover:text-bms-primary">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                    ) }
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-slate-800 transition-colors group-hover:text-bms-primary">
                                            { item.label }
                                        </span>
                                        { item.desc && (
                                            <span className="mt-0.5 text-xs text-slate-500">
                                                { item.desc }
                                            </span>
                                        ) }
                                    </div>
                                </Link>
                            );
                        } ) }
                    </div>
                </>
            ) }
        </div>
    );
}

/* --- 3. MAIN HEADER COMPONENT --- */

export default function Header ()
{
    const pathname = usePathname();
    const [ mobileOpen, setMobileOpen ] = useState( false );
    const [ activeDropdown, setActiveDropdown ] = useState<string | null>( null );

    // Close menus when route changes or component mounts
    useEffect( () =>
    {
        setMobileOpen( false );
        setActiveDropdown( null );
    }, [ pathname ] );

    // Prevent background scrolling when mobile menu is open
    useEffect( () =>
    {
        if ( mobileOpen )
        {
            document.body.style.overflow = 'hidden';
        } else
        {
            document.body.style.overflow = '';
        }
        return () =>
        {
            document.body.style.overflow = '';
        };
    }, [ mobileOpen ] );

    return (
        <>
            <header
                className={ cn(
                    'sticky top-0 z-50 w-full border-b border-slate-200/50 transition-all duration-300',
                    'bg-white/75 backdrop-blur-xl supports-[backdrop-filter]:bg-white/65'
                ) }
            >
                <div className="container mx-auto">
                    <div className="flex h-16 items-center justify-between gap-4 md:h-20">
                        {/* LOGO */ }
                        <Link
                            href="/"
                            className="group flex shrink-0 items-center gap-3.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-bms-primary/50 focus-visible:ring-offset-2"
                            aria-label="صفحه اصلی بارمان"
                        >
                            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-bms-primary to-blue-800 p-0.5 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-600/20 md:h-12 md:w-12">
                                <Image src="/bmslogoclean.webp" alt="bmslogo" width={ 300 } height={ 300 } />
                            </div>
                            <div className="hidden leading-tight md:block">
                                <div className="text-base font-bold tracking-tight text-slate-900">
                                    بارمان محور اسپادانا
                                </div>
                                <div className="mt-0.5 text-xs font-medium text-slate-500">
                                    معماری هوشمند آینده
                                </div>
                            </div>
                        </Link>

                        {/* DESKTOP NAV */ }
                        <nav
                            className="hidden items-center gap-2 lg:flex"
                            role="navigation"
                            aria-label="Desktop Navigation"
                        >
                            <Link
                                href="/"
                                className={ cn(
                                    'flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-medium outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-bms-primary/50',
                                    pathname === '/'
                                        ? 'bg-white shadow-sm ring-1 ring-slate-200 text-slate-900'
                                        : 'text-slate-600 hover:bg-white/80 hover:shadow-sm hover:text-slate-900'
                                ) }
                            >
                                <LuHouse className="h-4 w-4 shrink-0" aria-hidden="true" />
                                <span>خانه</span>
                            </Link>

                            { NAV_SECTIONS.map( ( section ) => (
                                <Dropdown
                                    key={ section.id }
                                    section={ section }
                                    open={ activeDropdown === section.id }
                                    onToggle={ () =>
                                        setActiveDropdown(
                                            activeDropdown === section.id ? null : section.id
                                        )
                                    }
                                    onClose={ () => setActiveDropdown( null ) }
                                />
                            ) ) }

                            <Link
                                href="/news"
                                className={ cn(
                                    'flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-medium outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-bms-primary/50',
                                    pathname.startsWith( '/news' )
                                        ? 'bg-white shadow-sm ring-1 ring-slate-200 text-slate-900'
                                        : 'text-slate-600 hover:bg-white/80 hover:shadow-sm hover:text-slate-900'
                                ) }
                            >
                                <LuNewspaper className="h-4 w-4 shrink-0" aria-hidden="true" />
                                <span>اخبار</span>
                            </Link>
                        </nav>

                        {/* CTA & MOBILE TOGGLE */ }
                        <div className="flex shrink-0 items-center gap-4">
                            <Link
                                href="/contact-us?type=sales"
                                className={ cn(
                                    'hidden h-11 shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-2xl md:inline-flex',
                                    'bg-bms-primary px-7 text-sm font-semibold text-white',
                                    'shadow-lg shadow-bms-primary/20 transition-all duration-300',
                                    'hover:bg-bms-dark hover:shadow-xl active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-bms-primary/50 focus-visible:ring-offset-2'
                                ) }
                            >
                                <span>شروع گفتگو</span>
                                <LuPhone className="h-4 w-4 shrink-0" aria-hidden="true" />
                            </Link>

                            <button
                                onClick={ () => setMobileOpen( true ) }
                                className="flex items-center justify-center rounded-xl p-2.5 text-slate-600 outline-none transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-bms-primary/50 lg:hidden"
                                aria-label="باز کردن منوی اصلی"
                                aria-expanded={ mobileOpen }
                            >
                                <LuMenu className="h-6 w-6 shrink-0" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE DRAWER */ }
            { mobileOpen && (
                <div className="fixed inset-0 z-[100] flex justify-end lg:hidden">
                    {/* Backdrop */ }
                    <div
                        className="animate-in fade-in absolute inset-0 bg-slate-900/60 backdrop-blur-sm duration-300"
                        onClick={ () => setMobileOpen( false ) }
                        aria-hidden="true"
                    />

                    {/* Drawer Panel */ }
                    <div
                        className={ cn(
                            'animate-in slide-in-from-right relative flex h-full w-full max-w-sm flex-col bg-white shadow-2xl duration-300 ease-out'
                        ) }
                        role="dialog"
                        aria-modal="true"
                        aria-label="منوی موبایل"
                    >
                        {/* Drawer Header */ }
                        <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-100 px-6">
                            <span className="text-lg font-bold tracking-tight text-slate-900">
                                بارمان
                            </span>
                            <button
                                onClick={ () => setMobileOpen( false ) }
                                className="rounded-xl p-2.5 text-slate-600 outline-none transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-bms-primary/50"
                                aria-label="بستن منو"
                            >
                                <LuX className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Drawer Content */ }
                        <div className="flex-1 space-y-6 overflow-y-auto px-5 py-6">
                            <nav className="space-y-2" aria-label="Mobile Navigation">
                                <Link
                                    href="/"
                                    className={ cn(
                                        'flex items-center gap-3.5 rounded-2xl px-5 py-4 text-base font-semibold outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-bms-primary/50',
                                        pathname === '/'
                                            ? 'bg-bms-primary-soft text-bms-primary'
                                            : 'text-slate-800 hover:bg-slate-50'
                                    ) }
                                    onClick={ () => setMobileOpen( false ) }
                                >
                                    <LuHouse className="h-5 w-5 shrink-0" aria-hidden="true" />
                                    <span>صفحه اصلی</span>
                                </Link>

                                <Link
                                    href="/news"
                                    className={ cn(
                                        'flex items-center gap-3.5 rounded-2xl px-5 py-4 text-base font-semibold outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-bms-primary/50',
                                        pathname.startsWith( '/news' )
                                            ? 'bg-bms-primary-soft text-bms-primary'
                                            : 'text-slate-800 hover:bg-slate-50'
                                    ) }
                                    onClick={ () => setMobileOpen( false ) }
                                >
                                    <LuNewspaper
                                        className="h-5 w-5 shrink-0"
                                        aria-hidden="true"
                                    />
                                    <span>اخبار
                                    </span>
                                </Link>

                                <Link
                                    href="https://clinicans.ir"
                                    className={ cn(
                                        'flex items-center bg-green-600 gap-3.5 rounded-2xl px-5 py-4 text-base font-semibold outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-bms-primary/50',
                                        pathname.startsWith( '/news' )
                                            ? 'bg-bms-primary-soft text-bms-primary'
                                            : 'text-slate-800 hover:bg-slate-50'
                                    ) }
                                    onClick={ () => setMobileOpen( false ) }
                                >
                                    <LuHeartPulse
                                        className="h-5 w-5 shrink-0"
                                        aria-hidden="true"
                                    />
                                    <span>ورود به کلینیکانز
                                    </span>
                                </Link>
                            </nav>

                            <hr className="my-4 border-slate-100" />

                            <div className="space-y-2">
                                { NAV_SECTIONS.map( ( s ) => (
                                    <Dropdown
                                        key={ s.id }
                                        section={ s }
                                        open={ activeDropdown === s.id }
                                        onToggle={ () =>
                                            setActiveDropdown(
                                                activeDropdown === s.id ? null : s.id
                                            )
                                        }
                                        onClose={ () => setMobileOpen( false ) }
                                        mobile
                                    />
                                ) ) }
                            </div>
                        </div>

                        {/* Drawer Footer CTA */ }
                        <div className="shrink-0 border-t border-slate-100 bg-slate-50 p-6">
                            <Link
                                href="/contact-us?type=sales"
                                className="flex h-12 w-full items-center justify-center gap-2.5 rounded-2xl bg-bms-primary font-semibold text-white shadow-md outline-none transition-all duration-300 hover:bg-bms-dark focus-visible:ring-2 focus-visible:ring-bms-primary/50 focus-visible:ring-offset-2 active:scale-[0.98]"
                                onClick={ () => setMobileOpen( false ) }
                            >
                                <span>شروع گفتگو</span>
                                <LuPhone className="h-5 w-5 shrink-0" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            ) }
        </>
    );
}