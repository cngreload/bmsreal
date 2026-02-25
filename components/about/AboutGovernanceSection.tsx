// components/about/AboutGovernanceSection.tsx

export default function AboutGovernanceSection ()
{
    return (
        <section
            id="governance"
            className="text-right space-y-4 border-t border-slate-100 pt-10"
        >
            <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    حاکمیت شرکتی و ساختار تصمیم‌گیری
                </h2>
                <p className="text-sm font-medium text-emerald-700">
                    رشد فناورانه، همراه با انضباط و مسئولیت‌پذیری
                </p>
            </div>

            <div className="space-y-4 max-w-4xl text-sm sm:text-base leading-relaxed text-slate-700">
                <p>
                    بارمان‌محور اسپادانا خود را متعهد به اجرای اصول حاکمیت شرکتی سالم،
                    شفاف و پاسخ‌گو می‌داند. این اصول در ساختار تصمیم‌گیری و مدیریت ریسک
                    شرکت پیاده‌سازی شده‌اند تا اطمینان حاصل شود که رشد و توسعه‌ی
                    فناورانه، در کنار مسئولیت‌پذیری و انضباط حرفه‌ای حرکت می‌کند.
                </p>

                <ul className="space-y-2 text-sm text-slate-700">
                    <li>
                        <span className="font-semibold">
                            تفکیک روشن نقش‌ها و مسئولیت‌ها:
                        </span>{ " " }
                        مرز میان تصمیم‌گیری استراتژیک، مدیریت اجرایی و نظارت تخصصی مشخص
                        است و هر حوزه، سازوکار ویژه‌ای برای گزارش‌دهی و پاسخ‌گویی دارد.
                    </li>
                    <li>
                        <span className="font-semibold">
                            کمیته‌های تخصصی فنی و امنیتی:
                        </span>{ " " }
                        تصمیمات کلیدی در حوزه‌ی معماری سامانه، امنیت سایبری و پدافند
                        غیرعامل، پس از بررسی در کمیته‌های تخصصی و با لحاظ الزامات ملی و
                        صنعتی اتخاذ می‌شود.
                    </li>
                    <li>
                        <span className="font-semibold">
                            فرآیندهای ارزیابی ریسک و انطباق:
                        </span>{ " " }
                        پروژه‌های جدید، پیش از اجرا از منظر ریسک‌های فنی، عملیاتی، امنیتی
                        و حقوقی ارزیابی می‌شوند و سازوکارهای کنترلی متناسب تعریف می‌گردد.
                    </li>
                    <li>
                        <span className="font-semibold">
                            گزارش‌دهی منظم به ذی‌نفعان کلیدی:
                        </span>{ " " }
                        در همکاری با نهادهای حاکمیتی، مشتریان راهبردی و شرکای تجاری،
                        گزارش‌های شفاف از وضعیت پروژه‌ها، پیشرفت کار و نتایج به‌صورت
                        دوره‌ای ارائه می‌شود.
                    </li>
                </ul>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                    حاکمیت شرکتی برای ما یک الزام تشریفاتی نیست؛ پیش‌شرط اعتماد بلندمدت و
                    همکاری پایدار با شرکا و مشتریان است.
                </p>
            </div>
        </section>
    );
}
