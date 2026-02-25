// components/about/AboutLeadershipSection.tsx

export default function AboutLeadershipSection ()
{
    return (
        <section
            id="leadership"
            className="text-right space-y-4 border-t border-slate-100 pt-10"
        >
            <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    تیم راهبر بارمان
                </h2>
                <p className="text-sm font-medium text-emerald-700">
                    ترکیبی از تجربه‌ی میدانی، تخصص فنی و نگاه راهبردی
                </p>
            </div>

            <div className="space-y-4 max-w-4xl text-sm sm:text-base leading-relaxed text-slate-700">
                <p>
                    تیم راهبر بارمان‌محور اسپادانا ترکیبی از تجربه‌ی میدانی، تخصص فنی و
                    نگاه راهبردی است. اعضای اصلی این تیم از حوزه‌هایی مانند مهندسی،
                    فناوری اطلاعات، معماری سامانه، حقوق و آموزش می‌آیند؛ اما یک نقطه‌ی
                    مشترک دارند: باور به این‌که فناوری، زمانی ارزشمند است که یک مسئله‌ی
                    واقعی را در میدان حل کند.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">
                            رهبری فناوری و محصول
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                            مسئول جهت‌دادن به معماری پلتفرم هسته‌ای، نظارت بر توسعه‌ی سامانه‌هایی
                            مانند ICTS و Clinicans و اطمینان از هم‌راستایی آن‌ها با استانداردهای
                            فنی، امنیتی و الزامات زیرساختی کشور.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">
                            رهبری کسب‌وکار و توسعه‌ی بازار
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                            متمرکز بر طراحی مدل‌های همکاری با صنعت، نهادهای حاکمیتی و
                            سرمایه‌گذاران، و ترجمه‌ی ظرفیت‌های فنی به فرصت‌های اقتصادی و ملی
                            که قابلیت پیاده‌سازی و پایش داشته باشند.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">
                            رهبری عملیات و استقرار
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                            مسئول برنامه‌ریزی و مدیریت استقرار سامانه‌ها در میدان – از
                            جایگاه‌های سوخت تا کلینیک‌ها – و اطمینان از این‌که آنچه روی کاغذ و
                            در کد طراحی شده، در عمل نیز به نتیجه‌ی پایدار می‌رسد.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">
                            هیئت راهبردی و مشاوران تخصصی
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                            متشکل از افرادی با سابقه‌ی مدیریتی و تخصص در حوزه‌های انرژی،
                            سلامت، حقوق فناوری و سیاست‌گذاری که جهت‌گیری‌های کلان شرکت و
                            اولویت‌های توسعه‌ای را همراهی و نظارت می‌کنند.
                        </p>
                    </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                    در فرهنگ بارمان، به‌جای تکیه بر عناوین، بر مسئولیت‌پذیری تیمی و حضور
                    مستقیم در کنار پروژه‌ها و مشتریان تأکید می‌شود.
                </p>
            </div>
        </section>
    );
}
