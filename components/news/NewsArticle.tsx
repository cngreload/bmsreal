import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewsBySlug, getRelatedNews } from '@/components/news/data';
import Image from 'next/image';

// Define Props Interface
interface ArticlePageProps
{
    params: { slug: string; };
}

// Generate Metadata for SEO
export async function generateMetadata ( { params }: ArticlePageProps )
{
    const article = getNewsBySlug( params.slug );
    if ( !article ) return { title: 'مطلب یافت نشد' };

    return {
        title: `${ article.title } | اخبار بارمان`,
        description: article.summary,
        openGraph: {
            type: 'article',
            publishedTime: article.publishedAt,
            authors: [ article.author ],
            locale: 'fa_IR',
        },
    };
}

export default function ArticlePage ( { params }: ArticlePageProps )
{
    const article = getNewsBySlug( params.slug );

    if ( !article )
    {
        notFound();
    }

    const related = getRelatedNews( article.relatedIds );

    // Helper for Persian Date
    const formatDate = ( dateString: string ) =>
    {
        return new Date( dateString ).toLocaleDateString( 'fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        } );
    };

    // Structured Data (JSON-LD)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: article.title,
        image: [ article.image ],
        datePublished: article.publishedAt,
        author: [ {
            '@type': 'Person',
            name: article.author,
        } ],
        publisher: {
            '@type': 'Organization',
            name: 'Barman Mehvar Espadana',
        },
        description: article.summary,
    };

    return (
        <article className="min-h-screen bg-white pt-24 pb-24 font-sans text-slate-900" dir="rtl">
            {/* JSON-LD Script */ }
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <div className="container mx-auto px-4">
                {/* Header Section */ }
                <header className="max-w-4xl mx-auto mb-12 text-center md:text-right">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-slate-500 mb-6 font-semibold border-b border-slate-100 pb-6 justify-start">
                        <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{ article.category }</span>
                        <span className="hidden md:inline">&bull;</span>
                        <time dateTime={ article.publishedAt }>
                            { formatDate( article.publishedAt ) }
                        </time>
                        <span className="hidden md:inline">&bull;</span>
                        <span>{ article.readingTime }</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-8 text-slate-900">
                        { article.title }
                    </h1>

                    <div className="text-lg text-slate-600 font-medium">
                        نویسنده: <span className="text-slate-900">{ article.author }</span>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">

                    {/* Main Content */ }
                    <div className="lg:col-span-8">
                        <div className="w-full h-64 md:h-96 bg-slate-200 rounded-lg overflow-hidden mb-10 relative">
                            {/* Replace with next/image in production */ }
                            <Image
                                src={ article.image }
                                alt={ article.title }
                                className="w-full h-full object-cover"
                                width={ 600 }
                                height={ 600 }
                            />
                        </div>

                        {/* Article Body */ }
                        <div
                            className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-p:leading-8 prose-li:marker:text-blue-600 prose-a:text-blue-600 hover:prose-a:text-blue-800 text-justify"
                            dangerouslySetInnerHTML={ { __html: article.content } }
                        />
                    </div>

                    {/* Sidebar */ }
                    <aside className="lg:col-span-4 space-y-8">
                        <div className="sticky top-24">
                            {/* Related News Widget */ }
                            { related.length > 0 && (
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                                    <h3 className="text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                                        اخبار مرتبط
                                    </h3>
                                    <ul className="space-y-4">
                                        { related.map( ( item ) => (
                                            <li key={ item.slug } className="group">
                                                <Link href={ `/news/${ item.slug }` } className="block">
                                                    <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug mb-2 text-sm">
                                                        { item.title }
                                                    </h4>
                                                    <span className="text-xs text-slate-500 block text-left">
                                                        { formatDate( item.publishedAt ) }
                                                    </span>
                                                </Link>
                                            </li>
                                        ) ) }
                                    </ul>
                                </div>
                            ) }

                            {/* Contact Box */ }
                            <div className="mt-8 border-t border-slate-200 pt-8">
                                <h3 className="text-sm font-bold text-slate-900 mb-2">ارتباط با رسانه</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    <strong>دفتر روابط عمومی</strong><br />
                                    info@co-bms.ir<br />
                                    ۰۳۱-۳XXXXXXX
                                </p>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </article>
    );
}