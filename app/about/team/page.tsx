// app/about/team/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { LuCode, LuChartLine, LuHardHat } from "react-icons/lu";

export const metadata: Metadata = {
    title: "تیم راهبر بارمان",
    description: "آشنایی با مدیران و راهبران شرکت بارمان محور اسپادانا.",
};

const roles = [
    { title: "رهبری فناوری و محصول", icon: LuCode, desc: "معماری پلتفرم WIT و نظارت بر استانداردهای امنیتی و توسعه نرم‌افزار." },
    { title: "توسعه بازار و استراتژی", icon: LuChartLine, desc: "طراحی مدل‌های تجاری و همکاری با نهادهای حاکمیتی و سرمایه‌گذاران." },
    { title: "عملیات و استقرار", icon: LuHardHat, desc: "مدیریت پیاده‌سازی میدانی در جایگاه‌ها و کلینیک‌ها و تضمین پایداری سرویس." },
];

export default function TeamPage ()
{
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "خانه", "item": "https://co-bms.ir" },
            { "@type": "ListItem", "position": 2, "name": "درباره ما", "item": "https://co-bms.ir/about" },
            { "@type": "ListItem", "position": 3, "name": "تیم ما", "item": "https://co-bms.ir/about/team" }
        ]
    };

    return (
        <section className="space-y-12">
            <Script id="json-ld-team" type="application/ld+json" dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } } />

            <div className="max-w-3xl space-y-4 text-right">
                <h1 className="text-3xl font-bold text-bms-dark md:text-4xl">
                    تیم راهبر <span className="text-bms-primary">بارمان</span>
                </h1>
                <p className="text-sm leading-8 text-slate-600 md:text-base text-justify">
                    ما ترکیبی از مهندسان نرم‌افزار، مدیران عملیاتی و متخصصان حقوقی هستیم.
                    نقطه اشتراک ما باور به این است که فناوری زمانی ارزش دارد که مشکلی واقعی را در میدان حل کند.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                { roles.map( ( role, idx ) =>
                {
                    const Icon = role.icon;
                    return (
                        <div key={ idx } className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center group hover:border-bms-primary/30 transition-colors">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-slate-500 group-hover:bg-bms-primary group-hover:text-white transition-colors">
                                <Icon className="h-8 w-8" />
                            </div>
                            <h3 className="mb-2 font-bold text-slate-900">{ role.title }</h3>
                            <p className="text-xs leading-6 text-slate-500">{ role.desc }</p>
                        </div>
                    );
                } ) }
            </div>
        </section>
    );
}