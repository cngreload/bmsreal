// app/about/values/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import
{
    LuShieldCheck,
    LuSearchCode,
    LuUsers,
    LuLightbulb,
    LuGlobe,
    LuHammer
} from "react-icons/lu";

export const metadata: Metadata = {
    title: "ارزش‌های محوری بارمان",
    description: "اصولی که تصمیمات و رفتار حرفه‌ای ما را هدایت می‌کنند.",
};

const values = [
    { title: "مسئولیت در میدان", icon: LuHammer, color: "text-amber-600", bg: "bg-amber-50", body: "ما مسئولیت نتیجه واقعی سامانه‌هایمان را می‌پذیریم، نه فقط کد نرم‌افزاری." },
    { title: "بومی‌سازی عمیق", icon: LuSearchCode, color: "text-blue-600", bg: "bg-blue-50", body: "طراحی از صفر بر اساس نیاز بومی، نه ترجمه محصولات خارجی." },
    { title: "شفافیت رادیکال", icon: LuGlobe, color: "text-cyan-600", bg: "bg-cyan-50", body: "دسترسی شفاف به داده‌ها و گزارش‌ها برای همه ذی‌نفعان." },
    { title: "ایمنی مقدم بر همه چیز", icon: LuShieldCheck, color: "text-red-600", bg: "bg-red-50", body: "در تضاد منافع، همیشه ایمنی انسان بر سرعت و سود اولویت دارد." },
    { title: "یادگیری مستمر", icon: LuLightbulb, color: "text-yellow-600", bg: "bg-yellow-50", body: "تکنولوژی متوقف نمی‌شود، ما هم متوقف نمی‌شویم." },
    { title: "هم‌افزایی", icon: LuUsers, color: "text-emerald-600", bg: "bg-emerald-50", body: "پرهیز از کار جزیره‌ای و باور به قدرت اکوسیستم." },
];

export default function ValuesPage ()
{
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "خانه", "item": "https://co-bms.ir" },
            { "@type": "ListItem", "position": 2, "name": "درباره ما", "item": "https://co-bms.ir/about" },
            { "@type": "ListItem", "position": 3, "name": "ارزش‌های محوری", "item": "https://co-bms.ir/about/values" }
        ]
    };

    return (
        <section className="space-y-12">
            <Script id="json-ld-values" type="application/ld+json" dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } } />

            <div className="max-w-3xl space-y-4 text-right">
                <h1 className="text-3xl font-bold text-bms-dark md:text-4xl">
                    ارزش‌های <span className="text-bms-primary">محوری</span>
                </h1>
                <p className="text-sm leading-8 text-slate-600 md:text-base">
                    این‌ها جملات روی دیوار نیستند؛ معیارهایی هستند که در دوراهی‌های سخت، مسیر ما را روشن می‌کنند.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                { values.map( ( v, idx ) =>
                {
                    const Icon = v.icon;
                    return (
                        <div key={ idx } className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-slate-200">
                            <div className={ `flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${ v.bg } ${ v.color }` }>
                                <Icon className="h-6 w-6" />
                            </div>
                            <div className="space-y-1 text-right">
                                <h3 className="font-bold text-slate-900">{ v.title }</h3>
                                <p className="text-xs leading-6 text-slate-600 text-pretty">{ v.body }</p>
                            </div>
                        </div>
                    );
                } ) }
            </div>
        </section>
    );
}