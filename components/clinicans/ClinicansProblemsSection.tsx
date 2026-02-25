// components/clinicans/ClinicansProblemsSection.tsx
import
{
    LuTrendingDown,
    LuStethoscope,
    LuPhoneMissed,
    LuUserX,
    LuCircleX,
    LuOctagonAlert,
    LuTriangleAlert,
} from "react-icons/lu";

const problems = [
    {
        id: "manager",
        title: "مدیران و مالکان کلینیک",
        subtitle: "نبود تصویر جامع از عملکرد واقعی",
        category: "Operational Visibility Gap",
        icon: LuTrendingDown,
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "group-hover:border-rose-200",
        points: [
            "پراکنده بودن داده‌ها بین ابزارهای مالی، نوبت‌دهی و گزارش‌گیری",
            "نبود دید لحظه‌ای و تجمیعی از درآمد، ظرفیت و بهره‌وری",
            "ریسک بالای تصمیم‌گیری و توسعه بدون زیرساخت مدیریتی یکپارچه",
        ],
    },
    {
        id: "doctor",
        title: "پزشکان و درمانگران",
        subtitle: "فاصله گرفتن از تمرکز درمان",
        category: "Clinical Workflow Disruption",
        icon: LuStethoscope,
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "group-hover:border-orange-200",
        points: [
            "دشواری دسترسی سریع به سوابق درمانی و تاریخچه مراجع",
            "وقفه‌های غیرضروری در فرآیند ویزیت و ثبت اطلاعات",
            "نبود مسیر منظم برای پیگیری روند درمان و نتایج قبلی",
        ],
    },
    {
        id: "reception",
        title: "پذیرش و تیم اجرایی",
        subtitle: "حجم عملیات بالا، خطای ناخواسته",
        category: "Process Overload",
        icon: LuPhoneMissed,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "group-hover:border-amber-200",
        points: [
            "ترافیک بالای تماس‌ها برای هماهنگی نوبت و تغییر زمان مراجعه",
            "تداخل نوبت‌ها و ازدحام در سالن انتظار",
            "فرسودگی ناشی از فرآیندهای دستی و تکراری",
        ],
    },
    {
        id: "patient",
        title: "مراجعان و بیماران",
        subtitle: "تجربه‌ای ناپیوسته و غیرقابل پیش‌بینی",
        category: "Patient Experience Gap",
        icon: LuUserX,
        color: "text-red-600",
        bg: "bg-red-50",
        border: "group-hover:border-red-200",
        points: [
            "دشواری دریافت نوبت و وابستگی به تماس تلفنی",
            "اطلاع‌رسانی ناقص در تغییر یا لغو برنامه پزشک",
            "کاهش اعتماد به نظم و حرفه‌ای‌بودن مجموعه درمانی",
        ],
    },
];

export default function ClinicansProblemsSection ()
{
    return (
        <section
            id="clinicans-problems"
            className="py-10 md:py-16"
            aria-labelledby="problems-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-14 text-right space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700 border border-rose-100">
                        <LuOctagonAlert className="h-3.5 w-3.5" />
                        <span>چالش‌های ساختاری مدیریت کلینیک</span>
                    </div>

                    <h2
                        id="problems-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        چرا ساختارهای سنتی
                        <span className="text-rose-600 underline decoration-rose-200 underline-offset-4">
                            { " " }
                            پاسخگوی کلینیک‌های امروز نیستند؟
                        </span>
                    </h2>

                    <p className="max-w-3xl ml-auto text-sm leading-8 text-slate-600 md:text-base">
                        حتی کلینیک‌های موفق نیز با
                        <strong className="font-bold text-rose-700">
                            { " " }
                            گسست اطلاعاتی{ " " }
                        </strong>
                        مواجه‌اند. زمانی که نوبت‌دهی، پرونده درمان و امور مالی
                        در یک ساختار منسجم به هم متصل نباشند، بخش قابل توجهی از
                        انرژی تیم صرف هماهنگی و کنترل بحران می‌شود، نه ارتقای
                        کیفیت درمان و تجربه مراجع.
                    </p>
                </div>

                {/* Problems Grid */ }
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    { problems.map( ( card ) =>
                    {
                        const Icon = card.icon;
                        return (
                            <article
                                key={ card.id }
                                className={ `group relative flex flex-col gap-5 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${ card.border }` }
                            >
                                {/* Header */ }
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div
                                        className={ `flex h-14 w-14 items-center justify-center rounded-2xl ${ card.bg } ${ card.color } shadow-sm transition-transform group-hover:scale-110` }
                                    >
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-slate-900">
                                            { card.title }
                                        </h3>
                                        <p className="text-xs font-medium text-slate-500 mt-1">
                                            { card.subtitle }
                                        </p>
                                    </div>

                                    {/* Category Tag */ }
                                    <span className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-500 border border-slate-200">
                                        <LuTriangleAlert className="h-3 w-3" />
                                        { card.category }
                                    </span>
                                </div>

                                {/* Divider */ }
                                <div className="h-px w-full bg-slate-100" />

                                {/* Pain Points */ }
                                <ul className="space-y-3 text-right flex-1">
                                    { card.points.map( ( point, idx ) => (
                                        <li key={ idx } className="flex items-start gap-2.5">
                                            <LuCircleX
                                                className={ `h-4 w-4 shrink-0 mt-1 ${ card.color } opacity-70` }
                                            />
                                            <span className="text-xs leading-5 text-slate-600">
                                                { point }
                                            </span>
                                        </li>
                                    ) ) }
                                </ul>
                            </article>
                        );
                    } ) }
                </div>

                {/* Bridge to Solution */ }
                <div className="mt-16 text-right">
                    <p className="max-w-3xl ml-auto text-sm md:text-base text-slate-600">
                        این چالش‌ها نشانه ضعف افراد یا تیم درمان نیست؛
                        بلکه حاصل استفاده از ابزارهایی است که برای مدیریت
                        یک کلینیک مدرن طراحی نشده‌اند.
                        <strong className="text-slate-900">
                            { " " }
                            کلینیکانز  برای پر کردن همین شکاف ساختاری شکل گرفته است.
                        </strong>
                    </p>
                </div>
            </div>
        </section>
    );
}
