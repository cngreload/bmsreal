// app/about/ecosystem/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import
{
    LuLandmark,
    LuBuilding2,
    LuGraduationCap,
    LuBriefcase,

} from "react-icons/lu";

export const metadata: Metadata = {
    title: "اکوسیستم همکاری | شبکه شرکای بارمان",
    description: "شبکه گسترده همکاری بارمان با نهادهای حاکمیتی، دانشگاه‌ها و شرکت‌های صنعتی.",
};

const partners = [
    { title: "نهادهای حاکمیتی", icon: LuLandmark, desc: "همکاری با وزارت نفت و شرکت ملی پخش فرآورده‌های نفتی برای استقرار استانداردهای ملی." },
    { title: "بخش خصوصی و صنایع", icon: LuBuilding2, desc: "شراکت با اپراتورهای جایگاه‌های سوخت و هلدینگ‌های بیمارستانی." },
    { title: "دانشگاه‌ها و پژوهشگاه‌ها", icon: LuGraduationCap, desc: "پروژه‌های تحقیق و توسعه (R&D) مشترک در حوزه هوش مصنوعی و اینترنت اشیاء." },
    { title: "شرکت‌های پرداخت (Fintech)", icon: LuBriefcase, desc: "توسعه زیرساخت‌های پرداخت الکترونیک صنعتی و کیف‌پول." },
];

export default function EcosystemPage ()
{
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "خانه", "item": "https://co-bms.ir" },
            { "@type": "ListItem", "position": 2, "name": "درباره ما", "item": "https://co-bms.ir/about" },
            { "@type": "ListItem", "position": 3, "name": "اکوسیستم", "item": "https://co-bms.ir/about/ecosystem" }
        ]
    };

    return (
        <section className="space-y-12">
            <Script id="json-ld-eco" type="application/ld+json" dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } } />

            <div className="max-w-3xl space-y-4 text-right">
                <span className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 border border-blue-100">
                    هم‌افزایی ملی
                </span>
                <h1 className="text-3xl font-bold text-bms-dark md:text-4xl">
                    اکوسیستم همکاری <span className="text-bms-primary">بارمان محور</span>
                </h1>
                <p className="text-sm leading-8 text-slate-600 md:text-base text-justify">
                    هیچ تحول بزرگی به تنهایی ممکن نیست. ما خود را حلقه‌ای از یک زنجیره ارزش بزرگتر می‌دانیم که در آن دولت، صنعت و دانشگاه برای خلق ثروت ملی همکاری می‌کنند.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                { partners.map( ( item, idx ) =>
                {
                    const Icon = item.icon;
                    return (
                        <div key={ idx } className="group flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-blue-200">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                                <Icon className="h-6 w-6" />
                            </div>
                            <div className="space-y-1 text-right">
                                <h3 className="font-bold text-slate-900">{ item.title }</h3>
                                <p className="text-xs leading-6 text-slate-500">{ item.desc }</p>
                            </div>
                        </div>
                    );
                } ) }
            </div>
        </section>
    );
}