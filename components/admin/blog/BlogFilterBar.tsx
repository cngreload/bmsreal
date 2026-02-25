// components/blog/BlogFilterBar.tsx
"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, FormEvent } from "react";
import { BlogCategory, BlogTag } from "@/lib/server-api";
import { cn } from "@/lib/utils";

type BlogFilterBarProps = {
    categories: BlogCategory[];
    tags: BlogTag[];
    currentCategorySlug?: string;
    currentTagSlug?: string;
    currentQuery?: string;
};

export function BlogFilterBar ( {
    categories,
    tags,
    currentCategorySlug,
    currentTagSlug,
    currentQuery,
}: BlogFilterBarProps )
{
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [ searchValue, setSearchValue ] = useState( currentQuery ?? "" );

    useEffect( () =>
    {
        setSearchValue( currentQuery ?? "" );
    }, [ currentQuery ] );

    const updateParam = useCallback(
        ( key: string, value?: string | null ) =>
        {
            const params = new URLSearchParams( searchParams?.toString() ?? "" );

            if ( value && value.length > 0 )
            {
                params.set( key, value );
            } else
            {
                params.delete( key );
            }

            // هر بار فیلتر عوض شد، برگرد به صفحه ۱
            params.delete( "page" );

            const qs = params.toString();
            router.push( qs ? `${ pathname }?${ qs }` : pathname );
        },
        [ router, pathname, searchParams ],
    );

    const handleCategoryClick = ( slug?: string ) =>
    {
        updateParam( "category", slug ?? null );
    };

    const handleTagClick = ( slug?: string ) =>
    {
        updateParam( "tag", slug ?? null );
    };

    const handleSearchSubmit = ( e: FormEvent ) =>
    {
        e.preventDefault();
        updateParam( "q", searchValue.trim() || null );
    };

    return (
        <div className="mb-6 space-y-3 rounded-2xl border border-slate-200 bg-white/80 p-3 md:p-4">
            {/* سرچ */ }
            <form
                onSubmit={ handleSearchSubmit }
                className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-3"
            >
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="جستجو در عنوان و متن..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700 outline-none ring-0 transition focus:border-bms-primary focus:bg-white focus:ring-1 focus:ring-bms-primary md:text-sm"
                        value={ searchValue }
                        onChange={ ( e ) => setSearchValue( e.target.value ) }
                    />
                </div>
                <button
                    type="submit"
                    className="rounded-xl bg-bms-primary px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-bms-dark md:text-sm"
                >
                    جستجو
                </button>
            </form>

            {/* دسته‌ها */ }
            { categories.length > 0 && (
                <div className="flex flex-wrap items-center justify-start gap-2">
                    <span className="text-[11px] text-slate-500 md:text-xs">
                        دسته‌ها:
                    </span>

                    <FilterPill
                        active={ !currentCategorySlug }
                        onClick={ () => handleCategoryClick( undefined ) }
                    >
                        همه
                    </FilterPill>

                    { categories.map( ( cat ) => (
                        <FilterPill
                            key={ cat.id }
                            active={ currentCategorySlug === cat.slug }
                            onClick={ () => handleCategoryClick( cat.slug ) }
                        >
                            { cat.name }
                        </FilterPill>
                    ) ) }
                </div>
            ) }

            {/* تگ‌ها */ }
            { tags.length > 0 && (
                <div className="flex flex-wrap items-center justify-start gap-2">
                    <span className="text-[11px] text-slate-500 md:text-xs">تگ‌ها:</span>

                    <FilterPill
                        active={ !currentTagSlug }
                        onClick={ () => handleTagClick( undefined ) }
                    >
                        همه
                    </FilterPill>

                    { tags.map( ( tag ) => (
                        <FilterPill
                            key={ tag.id }
                            active={ currentTagSlug === tag.slug }
                            onClick={ () => handleTagClick( tag.slug ) }
                        >
                            { tag.name }
                        </FilterPill>
                    ) ) }
                </div>
            ) }
        </div>
    );
}

type FilterPillProps = {
    active?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
};

function FilterPill ( { active, children, onClick }: FilterPillProps )
{
    return (
        <button
            type="button"
            onClick={ onClick }
            className={ cn(
                "rounded-full border px-3 py-[4px] text-[11px] md:text-xs transition",
                active
                    ? "border-bms-primary bg-bms-primary-soft text-bms-primary"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-bms-primary/40 hover:bg-white",
            ) }
        >
            { children }
        </button>
    );
}
