// components/about/AboutEcosystemSection.tsx

export default function AboutEcosystemSection ()
{
    return (
        <section
            id="ecosystem"
            className="text-right space-y-4 border-t border-slate-100 pt-10"
        >
            <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    اکوسیستم همکاری بارمان
                </h2>
                <p className="text-sm font-medium text-emerald-700">
                    از نهادهای حاکمیتی تا شرکت‌های خصوصی و دانشگاه‌ها
                </p>
            </div>

            <div className="space-y-4 max-w-4xl text-sm sm:text-base leading-relaxed text-slate-700">
                <p>
                    بارمان‌محور اسپادانا معتقد است که هیچ شرکت یا نهادی به تنهایی
                    نمی‌تواند بار تحول دیجیتال در زیرساخت‌های حیاتی را به دوش بکشد. ما خود
                    را بخشی از یک اکوسیستم گسترده‌تر می‌دانیم که در آن دولت، بخش خصوصی،
                    دانشگاه، شرکت‌های فناور و سرمایه‌گذاران، هر یک نقشی مکمل ایفا
                    می‌کنند.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">
                            همکاری با نهادهای حاکمیتی و شرکت‌های ملی
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                            در پروژه‌هایی نظیر هوشمندسازی جایگاه‌های CNG، با وزارتخانه‌ها،
                            شرکت‌های ملی، سازمان‌های استاندارد و نهادهای نظارتی همکاری
                            می‌کنیم تا سامانه‌های بومی، در چارچوب سیاست‌ها و الزامات ملی
                            استقرار یابند.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">
                            همکاری با بخش خصوصی و صنایع پیشرو
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                            از اپراتورهای جایگاه‌های سوخت تا کلینیک‌های خصوصی و شبکه‌های
                            درمانی، بارمان تلاش می‌کند شریک فناوری قابل‌اعتماد آن‌ها در مسیر
                            هوشمندسازی باشد؛ با مدل‌های همکاری که منافع دوطرفه و پایدار را
                            تضمین کند.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">
                            هم‌افزایی با شرکت‌های فناوری و پرداخت
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                            در لایه‌هایی مانند پرداخت صنعتی، پیام‌رسانی، زیرساخت ابری و تحلیل
                            داده، با شرکت‌های متخصص همکاری می‌کنیم تا راهکارهای کامل‌تری به
                            بازار ارائه شود و هر ضلع، کار تخصصی خود را انجام دهد.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">
                            ارتباط با دانشگاه‌ها و سرمایه‌گذاران
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                            موضوعاتی مانند تحلیل داده‌های صنعتی، هوش مصنوعی در لبه و بهینه‌سازی
                            مصرف انرژی، زمینه‌ی طبیعی پروژه‌های مشترک پژوهشی هستند. در کنار
                            آن، پلتفرم هسته‌ای بارمان بستر مناسبی برای مدل‌های مختلف مشارکت و
                            سرمایه‌گذاری در حوزه‌های انرژی، سلامت و خدمات فراهم می‌کند.
                        </p>
                    </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                    ما در بارمان، اکوسیستم همکاری را نه یک شعار، بلکه راهبرد اصلی برای
                    رساندن فناوری بومی به مقیاس ملی و منطقه‌ای می‌دانیم.
                </p>
            </div>
        </section>
    );
}
