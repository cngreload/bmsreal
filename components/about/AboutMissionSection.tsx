// components/about/AboutMissionSection.tsx

export default function AboutMissionSection ()
{
    return (
        <section
            id="mission"
            className="text-right space-y-4 border-t border-slate-100 pt-10"
        >
            <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    مأموریت ما
                </h2>
                <p className="text-sm font-medium text-emerald-700">
                    پر کردن فاصله‌ی میدان تا تصمیم‌گیری
                </p>
            </div>

            <div className="space-y-4 max-w-4xl text-sm sm:text-base leading-relaxed text-slate-700">
                <p>
                    مأموریت بارمان‌محور اسپادانا، طراحی و توسعه‌ی زیرساخت‌های بومی
                    هوشمندسازی است؛ زیرساخت‌هایی که فاصله‌ی میان «عملیات روزمره در
                    میدان» و «تصمیم‌گیری دقیق در سطح مدیریت و حاکمیت» را پر می‌کنند.
                </p>

                <p>
                    ما خود را صرفاً تولیدکننده‌ی یک نرم‌افزار یا یک دستگاه نمی‌دانیم؛
                    مأموریت ما ایجاد بستری است که در آن:
                </p>

                <ul className="space-y-1 text-sm text-slate-700">
                    <li>زیرساخت‌های حیاتی کشور، امن، شفاف و مبتنی بر داده اداره شوند،</li>
                    <li>
                        کسب‌وکارها بدون تکیه بر سامانه‌های خارجی، از مزایای واقعی
                        هوشمندسازی بهره‌مند شوند،
                    </li>
                    <li>
                        و مردم، نتیجه‌ی این تحول را در قالب ایمنی بیشتر، خدمات منظم‌تر و
                        تجربه‌ای انسانی‌تر لمس کنند.
                    </li>
                </ul>

                <p className="font-medium text-slate-800">
                    در یک جمله: ما برای این‌جا هستیم که «کنترل، پایش و تصمیم‌سازی
                    هوشمند» را از سطح شعار، به واقعیتی قابل لمس در صنعت و زندگی روزمره
                    تبدیل کنیم.
                </p>
            </div>
        </section>
    );
}
