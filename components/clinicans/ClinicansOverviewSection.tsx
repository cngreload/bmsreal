// components/clinicans/ClinicansOverviewSection.tsx
import
{
    LuCalendarDays,
    LuFileHeart,
    LuCoins,
    LuTrendingUp,
    LuLayers,
    LuGitMerge,
} from "react-icons/lu";

const overviewItems = [
    {
        id: "scheduling",
        pillar: "Operational Flow",
        title: "نوبت‌دهی و پذیرش",
        icon: LuCalendarDays,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "group-hover:border-blue-200",
        description:
            "هسته نظم عملیاتی کلینیک؛ جایی که برنامه پزشکان، ظرفیت خدمات و جریان مراجعه به‌صورت هماهنگ مدیریت می‌شود و از آشفتگی و تداخل جلوگیری می‌گردد.",
    },
    {
        id: "ehr",
        pillar: "Clinical Intelligence",
        title: "پرونده الکترونیک سلامت (EHR)",
        icon: LuFileHeart,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "group-hover:border-emerald-200",
        description:
            "مرجع یکپارچه اطلاعات درمانی که سوابق، تصاویر و تصمیم‌های بالینی را به‌صورت ساخت‌یافته نگه‌داری می‌کند و پشتوانه تصمیم‌سازی درمانی است.",
    },
    {
        id: "finance",
        pillar: "Financial Transparency",
        title: "مدیریت مالی و تسویه",
        icon: LuCoins,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "group-hover:border-amber-200",
        description:
            "کنترل دقیق جریان مالی کلینیک؛ از ثبت خدمات و پرداخت‌ها تا تحلیل سودآوری، با هدف شفافیت و پایداری اقتصادی.",
    },
    {
        id: "growth",
        pillar: "Sustainable Growth",
        title: "ارتباط با مراجع و رشد",
        icon: LuTrendingUp,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "group-hover:border-purple-200",
        description:
            "تبدیل تجربه درمان به رابطه پایدار؛ با ابزارهایی که بازگشت، وفاداری و معرفی طبیعی مراجعان را تقویت می‌کند.",
    },
];

export default function ClinicansOverviewSection ()
{
    return (
        <section
            id="clinicans-overview"
            className="py-10 md:py-16"
            aria-labelledby="overview-heading"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */ }
                <div className="mb-14 text-right space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 border border-slate-200">
                        <LuLayers className="h-3.5 w-3.5" />
                        <span>معماری اکوسیستمی</span>
                    </div>

                    <h2
                        id="overview-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl lg:text-4xl"
                    >
                        کلینیکانز  در <span className="text-bms-primary">یک نگاه</span>
                    </h2>

                    <p className="max-w-3xl ml-auto text-sm leading-8 text-slate-600 md:text-base text-justify">
                        کلینیکانز  یک ابزار منفرد نیست؛
                        <strong className="text-slate-900">
                            { " " }
                            یک اکوسیستم یکپارچه مدیریت کلینیک{ " " }
                        </strong>
                        است که چهار ستون اصلی عملیات، درمان، مالی و رشد را
                        در یک چرخه منسجم به هم متصل می‌کند.
                    </p>
                </div>

                {/* Pillars Grid */ }
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    { overviewItems.map( ( item ) =>
                    {
                        const Icon = item.icon;
                        return (
                            <article
                                key={ item.id }
                                className={ `group relative flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${ item.border }` }
                            >
                                {/* Icon */ }
                                <div
                                    className={ `flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${ item.bg } ${ item.color } shadow-sm transition-transform group-hover:scale-110` }
                                >
                                    <Icon className="h-7 w-7" />
                                </div>

                                {/* Content */ }
                                <div className="space-y-2 text-right">
                                    <h3 className="text-base font-bold text-slate-900 group-hover:text-bms-primary transition-colors">
                                        { item.title }
                                    </h3>

                                    {/* Pillar Tag */ }
                                    <span className="inline-flex w-fit items-center gap-1 rounded-md bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500 border border-slate-200">
                                        { item.pillar }
                                    </span>

                                    <p className="text-xs md:text-sm leading-6 text-slate-600">
                                        { item.description }
                                    </p>
                                </div>

                                {/* Bottom Accent */ }
                                <div
                                    className={ `absolute bottom-0 inset-x-8 h-1 rounded-t-full ${ item.bg.replace(
                                        "bg-",
                                        "bg-opacity-60 "
                                    ) } scale-x-0 transition-transform duration-300 group-hover:scale-x-100` }
                                />
                            </article>
                        );
                    } ) }
                </div>

                {/* System Summary */ }
                <div className="mt-16 text-right">
                    <div className="inline-flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200">
                        <div className="mt-1 text-bms-primary">
                            <LuGitMerge className="h-5 w-5" />
                        </div>
                        <p className="max-w-3xl text-sm md:text-base text-slate-600 leading-7">
                            ارزش واقعی کلینیکانز  در اتصال این ستون‌ها به یکدیگر است؛
                            داده‌ها در این اکوسیستم جریان دارند، نه اینکه صرفاً ثبت شوند.
                            نتیجه این اتصال، تصمیم‌گیری دقیق‌تر، خطای کمتر
                            و تجربه‌ای حرفه‌ای‌تر برای مراجعان است.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
