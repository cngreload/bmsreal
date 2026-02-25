'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { NewsItem, NewsCategory } from '@/components/news/data';

export default function NewsSearchFilter ( { initialData }: { initialData: NewsItem[]; } )
{
    const [ searchTerm, setSearchTerm ] = useState( '' );
    // Updated default state to Farsi 'همه' (All)
    const [ activeCategory, setActiveCategory ] = useState<NewsCategory | 'همه'>( 'همه' );

    // FIX: This array must match the Farsi strings in your 'types.ts' exactly.
    const categories: ( NewsCategory | 'همه' )[] = [
        'همه',
        'اخبار شرکتی',
        'اینترنت اشیاء صنعتی',
        'سلامت دیجیتال',
        'فناوری'
    ];

    const filteredNews = useMemo( () =>
    {
        return initialData.filter( item =>
        {
            const matchesSearch = item.title.toLowerCase().includes( searchTerm.toLowerCase() );
            const matchesCategory = activeCategory === 'همه' || item.category === activeCategory;
            return matchesSearch && matchesCategory;
        } );
    }, [ searchTerm, activeCategory, initialData ] );

    // Helper for Persian Date
    const formatDate = ( dateString: string ) =>
    {
        return new Date( dateString ).toLocaleDateString( 'fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        } );
    };

    return (
        <div className="w-full" dir="rtl">
            {/* Controls */ }
            <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-start md:items-center">
                {/* Categories */ }
                <div className="flex flex-wrap gap-2">
                    { categories.map( ( cat ) => (
                        <button
                            key={ cat }
                            onClick={ () => setActiveCategory( cat ) }
                            className={ `px-4 py-2 rounded-full text-sm font-medium transition-all ${ activeCategory === cat
                                ? 'bg-slate-900 text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }` }
                        >
                            { cat }
                        </button>
                    ) ) }
                </div>

                {/* Search */ }
                <div className="relative w-full md:w-80">
                    <input
                        type="text"
                        placeholder="جستجو در اخبار..."
                        value={ searchTerm }
                        onChange={ ( e ) => setSearchTerm( e.target.value ) }
                        className="w-full px-4 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-sans"
                    />
                </div>
            </div>

            {/* Grid */ }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                { filteredNews.length > 0 ? (
                    filteredNews.map( ( item ) => (
                        <article key={ item.slug } className="group flex flex-col h-full border-t border-slate-100 pt-6">
                            <div className="mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
                                    { item.category }
                                </span>
                                <time className="text-xs text-slate-400">
                                    { formatDate( item.publishedAt ) }
                                </time>
                            </div>

                            <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors leading-snug">
                                <Link href={ `/news/${ item.slug }` }>
                                    { item.title }
                                </Link>
                            </h2>

                            <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                { item.summary }
                            </p>

                            <div className="mt-auto pt-4">
                                <Link href={ `/news/${ item.slug }` } className="text-sm font-semibold text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    ادامه مطلب <span className="rotate-180 inline-block">&rarr;</span>
                                </Link>
                            </div>
                        </article>
                    ) )
                ) : (
                    <p className="col-span-full text-center text-slate-500 py-12">نتیجه‌ای یافت نشد.</p>
                ) }
            </div>
        </div>
    );
}