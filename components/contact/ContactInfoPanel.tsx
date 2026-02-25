import Link from "next/link";
import
{
    LuMail,
    LuPhone,
    LuClock,
    LuLink,
} from "react-icons/lu";

export default function ContactInfoPanel ()
{
    return (
        <aside className="flex flex-col gap-6" aria-label="اطلاعات تماس و ارتباطات رسمی">

            {/* Contact Methods */ }
            <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-bold text-slate-900 text-right">
                    راه‌های ارتباط رسمی
                </h3>

                <ul className="space-y-4" role="list">

                    {/* Email */ }
                    <li className="group flex items-start gap-4 rounded-xl bg-slate-50 p-3 transition-colors hover:bg-blue-50">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm border border-slate-100 group-hover:border-blue-100"
                            aria-hidden="true"
                        >
                            <LuMail className="h-5 w-5" />
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-medium text-slate-500">
                                پست الکترونیک رسمی
                            </p>
                            <a
                                href="mailto:contact@barman-example.ir"
                                className="block font-mono text-sm font-bold text-slate-800 hover:text-blue-700"
                                dir="ltr"
                                aria-label="ارسال ایمیل به بارمان محور اسپادانا"
                            >
                                contact@barman-example.ir
                            </a>
                        </div>
                    </li>

                    {/* Phone */ }
                    <li className="group flex items-start gap-4 rounded-xl bg-slate-50 p-3 transition-colors hover:bg-emerald-50">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-600 shadow-sm border border-slate-100 group-hover:border-emerald-100"
                            aria-hidden="true"
                        >
                            <LuPhone className="h-5 w-5" />
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-medium text-slate-500">
                                تماس مستقیم سازمانی
                            </p>
                            <a
                                href="tel:+9831xxxxxxx"
                                className="block font-mono text-sm font-bold text-slate-800 hover:text-emerald-700"
                                dir="ltr"
                                aria-label="تماس تلفنی با واحد فروش و فنی"
                            >
                                ۰۳۱-xxxxxxx
                            </a>
                        </div>
                    </li>

                    {/* Working Hours */ }
                    <li className="flex items-start gap-4 rounded-xl bg-slate-50 p-3">
                        <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm border border-slate-100"
                            aria-hidden="true"
                        >
                            <LuClock className="h-5 w-5" />
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-medium text-slate-500">
                                ساعات پاسخگویی
                            </p>
                            <p className="mt-0.5 text-xs font-medium text-slate-700">
                                شنبه تا چهارشنبه — ۸:۰۰ الی ۱۷:۰۰
                            </p>
                        </div>
                    </li>

                </ul>
            </section>

            {/* Suggested Topics */ }
            <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm text-right">
                <h3 className="mb-3 text-sm font-bold text-slate-900">
                    موضوعات متداول درخواست‌ها
                </h3>

                <ul className="space-y-2" role="list">
                    { [
                        "استعلام قیمت و شرایط استقرار سامانه ICTS",
                        "درخواست دمو و معرفی پلتفرم Clinicans",
                        "همکاری در پروژه‌های صنعتی و اینترنت اشیاء (IoT / IIoT)",
                        "فرصت‌های سرمایه‌گذاری و مشارکت راهبردی",
                    ].map( ( item, i ) => (
                        <li key={ i } className="flex items-center gap-2 text-xs text-slate-600">
                            <span
                                className="h-1.5 w-1.5 rounded-full bg-bms-primary/60"
                                aria-hidden="true"
                            />
                            { item }
                        </li>
                    ) ) }
                </ul>
            </section>

            {/* Cooperation CTA */ }
            <section
                className="rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center text-white shadow-lg"
                aria-labelledby="cooperation-heading"
            >
                <p
                    id="cooperation-heading"
                    className="mb-4 text-xs leading-6 text-slate-300"
                >
                    به‌دنبال همکاری‌های راهبردی، سرمایه‌گذاری یا توسعه مشترک هستید؟
                </p>

                <Link
                    href="/cooperation"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-white/20"
                    aria-label="ورود به صفحه همکاری و سرمایه‌گذاری"
                >
                    <LuLink className="h-3.5 w-3.5" />
                    <span>مشاهده صفحه همکاری و سرمایه‌گذاری</span>
                </Link>
            </section>

        </aside>
    );
}
