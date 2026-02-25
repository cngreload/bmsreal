// app/about/code-of-ethics/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import
{
    LuShieldCheck,
    LuEye,
    LuFileLock,
    LuScale,
    LuHeartHandshake,
    LuGavel
} from "react-icons/lu";

export const metadata: Metadata = {
    title: "منشور اخلاقی و رفتار حرفه‌ای",
    description: "تعهدنامه شرکت بارمان محور اسپادانا در قبال ایمنی، شفافیت، محرمانگی و حقوق ذی‌نفعان.",
};

const principles = [
    {
        title: "تقدم ایمنی بر سود",
        icon: LuShieldCheck,
        color: "text-red-600",
        bg: "bg-red-50",
        desc: "در صنایع پرخطر (سوخت و سلامت)، جان انسان خط قرمز ماست. ما هیچگاه کیفیت و ایمنی را فدای سرعت یا سود اقتصادی نمی‌کنیم."
    },
    {
        title: "شفافیت و صداقت",
        icon: LuEye,
        color: "text-blue-600",
        bg: "bg-blue-50",
        desc: "ما در بیان توانمندی‌ها و گزارش‌دهی پروژه‌ها، واقعیت را می‌گوییم. اعتماد مشتری، سرمایه‌ای است که با یک دروغ از دست می‌رود."
    },
    {
        title: "محرمانگی داده‌ها",
        icon: LuFileLock,
        color: "text-slate-700",
        bg: "bg-slate-100",
        desc: "داده‌های جایگاه‌ها و پرونده‌های پزشکی بیماران، امانت مردم نزد ماست. ما از این داده‌ها بهره‌برداری تجاری غیرمجاز نمی‌کنیم."
    },
    {
        title: "پرهیز از تضاد منافع",
        icon: LuScale,
        color: "text-amber-600",
        bg: "bg-amber-50",
        desc: "در تصمیم‌گیری‌های فنی و تجاری، منافع شخصی یا سازمانی را بر منافع ملی و ایمنی عمومی ترجیح نمی‌دهیم."
    },
    {
        title: "احترام متقابل",
        icon: LuHeartHandshake,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        desc: "ما به تخصص، زمان و سرمایه شرکا و مشتریان خود احترام می‌گذاریم و محیطی حرفه‌ای و دور از حاشیه می‌سازیم."
    },
    {
        title: "قانون‌مداری",
        icon: LuGavel,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        desc: "تمامی فعالیت‌های ما در چارچوب قوانین جمهوری اسلامی ایران و استانداردهای بین‌المللی مرتبط تعریف می‌شود."
    }
];

export default function CodeOfEthicsPage ()
{
    // 🧠 CRAWLER EMPATHY: Breadcrumb Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "خانه", "item": "https://co-bms.ir" },
            { "@type": "ListItem", "position": 2, "name": "درباره ما", "item": "https://co-bms.ir/about" },
            { "@type": "ListItem", "position": 3, "name": "منشور اخلاقی", "item": "https://co-bms.ir/about/code-of-ethics" }
        ]
    };

    return (
        <>
            <Script
                id="json-ld-ethics"
                type="application/ld+json"
                dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
            />

            <section className="space-y-12">
                {/* Header */ }
                <div className="max-w-3xl space-y-4 text-right">
                    <span className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                        DNA سازمانی ما
                    </span>
                    <h1 className="text-3xl font-bold text-bms-dark md:text-4xl">
                        منشور حرفه‌ای و <span className="text-bms-primary">کد اخلاقی</span>
                    </h1>
                    <p className="text-sm leading-8 text-slate-600 md:text-base text-justify">
                        فعالیت در حوزه‌هایی مانند انرژی و سلامت، تنها یک تجارت نیست؛ تعهدی سنگین در برابر جان و اعتماد مردم است.
                        این منشور، قطب‌نمای اخلاقی ماست که مسیر حرکت بارمان را در دوراهی‌های دشوار مشخص می‌کند.
                    </p>
                </div>

                {/* Principles Grid */ }
                <div className="grid gap-6 md:grid-cols-2">
                    { principles.map( ( item ) =>
                    {
                        const Icon = item.icon;
                        return (
                            <article
                                key={ item.title }
                                className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-bms-primary/20"
                            >
                                <div className={ `flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${ item.bg } ${ item.color } transition-transform group-hover:scale-110` }>
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div className="space-y-2 text-right">
                                    <h2 className="text-base font-bold text-slate-900">
                                        { item.title }
                                    </h2>
                                    <p className="text-xs leading-6 text-slate-600 md:text-sm">
                                        { item.desc }
                                    </p>
                                </div>
                            </article>
                        );
                    } ) }
                </div>

                {/* Signature Block */ }
                <div className="rounded-2xl bg-slate-900 p-8 text-center text-white">
                    <p className="text-sm leading-8 md:text-base font-medium opacity-90">
                        &quot;این منشور صرفاً یک متن زیبا روی دیوار نیست؛ بلکه معیار ارزیابی عملکرد تک‌تک اعضای تیم بارمان است.
                        نقض این اصول، خط قرمز ماست.&quot;
                    </p>
                    <div className="mt-4 text-xs text-slate-400">
                        — هیئت مدیره بارمان محور اسپادانا
                    </div>
                </div>
            </section>
        </>
    );
}