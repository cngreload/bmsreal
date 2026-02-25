"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const navItems = [
    {
        label: "مدیریت مقالات",
        href: "/admin/blog", // <--- This MUST be /blog
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
        )
    },
    {
        label: "دسته‌بندی‌ها",
        href: "/admin/blog/categories",
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
        )
    },
    {
        label: "پیام‌های تماس",
        href: "/admin/contact-messages",
        icon: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
];

export default function AdminShell ( { children }: { children: React.ReactNode; } )
{
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Top Navigation */ }
            <header className="sticky top-0 z-30 bg-white border-b border-slate-200 h-16">
                <div className="container mx-auto px-4 h-full flex items-center justify-between">

                    {/* Brand */ }
                    <div className="flex items-center gap-3">
                        <div className="bg-bms-primary text-white font-bold h-8 w-8 flex items-center justify-center rounded-lg shadow-sm">
                            B
                        </div>
                        <span className="font-bold text-slate-800 tracking-tight hidden sm:block">
                            پنل مدیریت بارمان
                        </span>
                    </div>

                    {/* Desktop Nav */ }
                    <nav className="hidden md:flex items-center gap-1">
                        { navItems.map( ( item ) =>
                        {
                            const isActive = pathname.startsWith( item.href );
                            return (
                                <Link
                                    key={ item.href }
                                    href={ item.href }
                                    className={ cn(
                                        "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                                        isActive
                                            ? "bg-bms-primary/10 text-bms-primary"
                                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                                    ) }
                                >
                                    { item.icon }
                                    { item.label }
                                </Link>
                            );
                        } ) }
                    </nav>

                    {/* User Profile */ }
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-xs text-slate-500 hover:text-bms-primary font-medium">
                            مشاهده سایت →
                        </Link>
                        <div className="h-5 w-px bg-slate-200 mx-1"></div>
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            </header>

            {/* Main Content */ }
            <main className="flex-1 container mx-auto px-4 py-8">
                { children }
            </main>

            {/* Mobile Bottom Nav */ }
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 pb-safe">
                <div className="flex justify-around p-2">
                    { navItems.map( ( item ) =>
                    {
                        const isActive = pathname.startsWith( item.href );
                        return (
                            <Link
                                key={ item.href }
                                href={ item.href }
                                className={ cn(
                                    "flex flex-col items-center gap-1 p-2 rounded-lg text-[10px] w-full",
                                    isActive ? "text-bms-primary bg-bms-primary/5" : "text-slate-400"
                                ) }
                            >
                                { item.icon }
                                <span>{ item.label }</span>
                            </Link>
                        );
                    } ) }
                </div>
            </div>
        </div>
    );
}