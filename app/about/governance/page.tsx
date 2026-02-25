// app/about/governance/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { LuScale, LuFileSearch, LuShieldAlert, LuUsers } from "react-icons/lu";

export const metadata: Metadata = {
    title: "حاکمیت شرکتی و ساختار تصمیم‌گیری",
    description: "ساختار شفاف مدیریتی و کمیته‌های تخصصی بارمان محور اسپادانا.",
};

const pillars = [
    { title: "تفکیک مسئولیت‌ها", icon: LuUsers, desc: "مرز مشخص میان تصمیم‌گیری استراتژیک (هیئت مدیره) و مدیریت اجرایی." },
    { title: "مدیریت ریسک", icon: LuShieldAlert, desc: "ارزیابی مداوم ریسک‌های فنی، امنیتی و تجاری پیش از شروع هر پروژه." },
    { title: "کمیته‌های تخصصی", icon: LuFileSearch, desc: "بررسی فنی دقیق معماری و امنیت در کمیته‌های مستقل پیش از اجرا." },
    { title: "شفافیت با ذی‌نفعان", icon: LuScale, desc: "گزارش‌دهی منظم و صادقانه به سهامداران، مشتریان و نهادهای نظارتی." },
];

export default function GovernancePage ()
{
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "خانه", "item": "https://co-bms.ir" },
            { "@type": "ListItem", "position": 2, "name": "درباره ما", "item": "https://co-bms.ir/about" },
            { "@type": "ListItem", "position": 3, "name": "حاکمیت شرکتی", "item": "https://co-bms.ir/about/governance" }
        ]
    };

    return (
        <section className="space-y-12">
            <Script id="json-ld-gov" type="application/ld+json" dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } } />

            <div className="max-w-3xl space-y-4 text-right">
                <span className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                    انضباط سازمانی
                </span>
                <h1 className="text-3xl font-bold text-bms-dark md:text-4xl">
                    حاکمیت شرکتی و <span className="text-slate-500">شفافیت</span>
                </h1>
                <p className="text-sm leading-8 text-slate-600 md:text-base text-justify">
                    ما معتقدیم رشد فناورانه بدون انضباط مدیریتی، پایدار نیست. ساختار تصمیم‌گیری ما بر اساس اصول شفافیت، پاسخگویی و مدیریت ریسک بنا شده است.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                { pillars.map( ( item, idx ) =>
                {
                    const Icon = item.icon;
                    return (
                        <div key={ idx } className="relative overflow-hidden rounded-2xl bg-slate-50 p-6 transition-all hover:bg-white hover:shadow-md border border-slate-100">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-700 shadow-sm">
                                <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="mb-2 font-bold text-slate-900">{ item.title }</h3>
                            <p className="text-xs leading-6 text-slate-600">{ item.desc }</p>
                        </div>
                    );
                } ) }
            </div>
        </section>
    );
}