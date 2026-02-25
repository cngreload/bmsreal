import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewsBySlug, getRelatedNews } from '@/components/news/data';
import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';
import { LuCalendar, LuClock, LuArrowRight, LuNewspaper, LuShare2 } from 'react-icons/lu';
import { Section } from '@/components/layout/Section';

interface Props
{
    params: Promise<{ slug: string; }>;
}

/**
 * 🧠 SEO METADATA REFORMATION
 * Optimized for Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 */
export async function generateMetadata ( { params }: Props ): Promise<Metadata>
{
    const { slug } = await params;
    const article = getNewsBySlug( slug );
    if ( !article ) return { title: 'مطلب یافت نشد' };

    return {
        title: article.title,
        description: article.summary,
        alternates: {
            canonical: `https://co-bms.ir/news/${ slug }`,
        },
        openGraph: {
            title: article.title,
            description: article.summary,
            type: 'article',
            publishedTime: article.publishedAt,
            authors: [ article.author ],
            images: [ { url: article.image } ],
            locale: 'fa_IR',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export default async function ArticlePage ( { params }: Props )
{
    const { slug } = await params;
    const article = getNewsBySlug( slug );

    if ( !article )
    {
        notFound();
    }

    const related = getRelatedNews( article.relatedIds );

    const formatDate = ( dateString: string ) =>
    {
        return new Date( dateString ).toLocaleDateString( 'fa-IR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        } );
    };

    /**
     * 🧠 STRUCTURED DATA (JSON-LD)
     * Injects corporate authority directly into search results.
     */
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: article.title,
        image: [ article.image ],
        datePublished: article.publishedAt,
        author: [ {
            '@type': 'Organization',
            name: article.author,
        } ],
        publisher: {
            '@type': 'Organization',
            name: 'Barman Mehvar Spadana',
            logo: {
                '@type': 'ImageObject',
                url: 'https://co-bms.ir/logo.png'
            }
        },
        description: article.summary,
    };

    return (
        <main className="min-h-screen bg-white" dir="rtl">
            <Script
                id="article-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            {/* ================= HEADER SECTION (The Command Center) ================= */ }
            {/* FIX: Changed 'background' to 'variant' to match SectionProps */ }
            <Section variant="subtle" spacing="default" className="border-b border-slate-100">
                <header className="max-w-5xl mx-auto space-y-8">
                    {/* Breadcrumbs / Meta */ }
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest">
                        <span className="bg-[#D72638] text-white px-3 py-1 rounded-md shadow-sm">
                            { article.category }
                        </span>
                        <div className="flex items-center gap-2 text-slate-400 border-r border-slate-200 pr-4">
                            <LuCalendar className="text-[#F4C430]" />
                            <time dateTime={ article.publishedAt }>{ formatDate( article.publishedAt ) }</time>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 border-r border-slate-200 pr-4">
                            <LuClock className="text-bms-primary" />
                            <span>{ article.readingTime }</span>
                        </div>
                    </div>

                    <h1 className="text-slate-900 leading-[1.15] text-balance font-black text-4xl md:text-5xl lg:text-6xl tracking-tightest">
                        { article.title }
                    </h1>

                    <div className="flex items-center gap-4 pt-4 border-t border-slate-200/50 w-fit">
                        <div className="h-12 w-12 rounded-full bg-bms-primary flex items-center justify-center text-white font-bold shadow-lg">
                            { article.author.charAt( 0 ) }
                        </div>
                        <div className="text-right">
                            <span className="block text-xs font-black text-slate-400 uppercase tracking-tighter">Author</span>
                            <span className="text-sm font-bold text-slate-900">{ article.author }</span>
                        </div>
                    </div>
                </header>
            </Section>

            {/* ================= CONTENT BODY ================= */ }
            <Section spacing="default" className="overflow-visible">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">

                    {/* MAIN CONTENT AREA */ }
                    <div className="lg:col-span-8 space-y-12">
                        {/* Hero Image with Machined Border */ }
                        <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-slate-50">
                            <Image
                                src={ article.image }
                                alt={ article.title }
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 800px"
                            />
                            {/* Visual HUD overlay */ }
                            <div className="absolute top-6 left-6 flex gap-2">
                                <button className="p-3 rounded-full bg-white/90 backdrop-blur-md text-bms-primary shadow-xl hover:bg-white transition-colors">
                                    <LuShare2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Article Content - Executive Typography */ }
                        <div
                            className="prose prose-lg prose-slate max-w-none 
                            prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tightest
                            prose-p:text-slate-600 prose-p:leading-[1.8] prose-p:text-justify
                            prose-li:text-slate-600 prose-li:marker:text-bms-primary
                            prose-blockquote:border-r-4 prose-blockquote:border-[#F4C430] prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-l-2xl
                            prose-strong:text-slate-900 prose-strong:font-black"
                            dangerouslySetInnerHTML={ { __html: article.content } }
                        />
                    </div>

                    {/* SIDEBAR (Desktop Only) */ }
                    <aside className="lg:col-span-4 sticky top-28 space-y-12">

                        {/* Related News - "Machined" Cards */ }
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="h-1 w-8 bg-[#D72638]" />
                                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                    Related Intelligence
                                </h3>
                            </div>

                            <div className="space-y-4">
                                { related.map( ( item ) => (
                                    <Link
                                        key={ item.slug }
                                        href={ `/news/${ item.slug }` }
                                        className="group block bg-slate-50 p-5 rounded-2xl border border-transparent hover:border-bms-primary/20 hover:bg-white hover:shadow-soft-lg transition-all duration-300"
                                    >
                                        <h4 className="text-sm font-bold text-slate-800 leading-snug mb-3 group-hover:text-bms-primary transition-colors">
                                            { item.title }
                                        </h4>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono font-bold text-slate-400">
                                                { formatDate( item.publishedAt ) }
                                            </span>
                                            <LuArrowRight className="w-4 h-4 text-slate-300 transition-transform group-hover:-translate-x-1 group-hover:text-bms-primary" />
                                        </div>
                                    </Link>
                                ) ) }
                            </div>
                        </div>

                        {/* Media Contact Box - High Authority Dark Blue */ }
                        <div className="bg-bms-dark rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-bms-primary/20 rounded-full blur-3xl" />
                            <div className="relative z-10 space-y-6">
                                <LuNewspaper className="h-10 w-10 text-[#F4C430]" />
                                <div className="space-y-2">
                                    <h4 className="text-lg font-black tracking-tight">ارتباط با رسانه</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                                        برای استعلام گزارش‌های فنی و هماهنگی مصاحبه با تیم روابط عمومی بارمان در تماس باشید.
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-white/10 space-y-2">
                                    <p className="text-sm font-mono tracking-tighter">info@co-bms.ir</p>
                                    <p className="text-sm font-bold text-[#F4C430]">۰۳۱-۳XXXXXXX</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </Section>

            {/* ================= MOBILE UNIQUE UI: Floating Action Bar ================= */ }
            <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
                <div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-4 flex items-center justify-between ring-1 ring-black/5">
                    <Link href="/news" className="flex items-center gap-2 text-xs font-black text-slate-500 hover:text-bms-primary">
                        <LuArrowRight className="w-4 h-4" />
                        <span>بازگشت به آرشیو</span>
                    </Link>
                    <div className="h-8 w-px bg-slate-200" />
                    <button className="flex items-center gap-2 text-xs font-black text-bms-primary">
                        <span>اشتراک‌گذاری</span>
                        <LuShare2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </main>
    );
}