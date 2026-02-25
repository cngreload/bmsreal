// app/about/story/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "داستان بارمان | از میدان تا پلتفرم",
    description: "روایت شکل‌گیری بارمان محور اسپادانا از دل چالش‌های واقعی صنعت سوخت.",
};

const timeline = [
    { year: "آغاز", title: "ریشه در میدان", desc: "داستان ما از پشت میز شروع نشد. بنیان‌گذاران ما سال‌ها درگیر مدیریت مستقیم جایگاه‌های سوخت بودند و چالش‌های ایمنی را با پوست و گوشت لمس کردند." },
    { year: "چالش", title: "طرح ملی هوشمندسازی", desc: "با ابلاغ طرح ملی، کمبود یک راهکار بومی و امن احساس شد. راهکارهای وارداتی با زیرساخت‌های ما همخوانی نداشتند." },
    { year: "تولد", title: "خلق ICTS", desc: "بارمان متولد شد تا این خلاء را پر کند. طراحی اولین سامانه بومی که هم سخت‌افزار و هم نرم‌افزار آن در داخل توسعه یافته بود." },
    { year: "توسعه", title: "ورود به سلامت (Clinicans)", desc: "تجربه موفق در پردازش داده‌های حجیم صنعتی، ما را به سمت حل چالش‌های مدیریت درمان و خلق پلتفرم کلینیکانز سوق داد." },
    { year: "امروز", title: "یک پلتفرم، چند جهان", desc: "امروز ما در نقطه‌ای هستیم که فناوری ما (WIT) همزمان امنیت انرژی و سلامت شهروندان را تضمین می‌کند." },
];

export default function StoryPage ()
{
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "خانه", "item": "https://co-bms.ir" },
            { "@type": "ListItem", "position": 2, "name": "درباره ما", "item": "https://co-bms.ir/about" },
            { "@type": "ListItem", "position": 3, "name": "داستان ما", "item": "https://co-bms.ir/about/story" }
        ]
    };

    return (
        <section className="space-y-12">
            <Script id="json-ld-story" type="application/ld+json" dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } } />

            <div className="max-w-3xl text-right">
                <h1 className="text-3xl font-bold text-bms-dark md:text-4xl mb-6">
                    داستان ما: از <span className="text-bms-primary">کف میدان</span> تا معماری پلتفرم
                </h1>
            </div>

            <div className="relative border-r-2 border-slate-200 pr-8 space-y-12">
                { timeline.map( ( item, idx ) => (
                    <div key={ idx } className="relative">
                        {/* Dot */ }
                        <div className="absolute -right-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-bms-primary shadow-sm" />

                        <div className="space-y-2">
                            <span className="inline-block rounded-md bg-slate-100 px-2 py-1 text-xs font-bold text-slate-500">
                                { item.year }
                            </span>
                            <h3 className="text-lg font-bold text-slate-900">{ item.title }</h3>
                            <p className="text-sm leading-7 text-slate-600 max-w-2xl text-justify">
                                { item.desc }
                            </p>
                        </div>
                    </div>
                ) ) }
            </div>
        </section>
    );
}