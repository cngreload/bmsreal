// components/clinicans/ClinicansFeaturesSection.tsx
import
{
    LuCalendarClock,
    LuFileText,
    LuWallet,
    LuMegaphone,
    LuChartBar,
    LuSettings2,
    LuCheck,
    LuSparkles,
} from "react-icons/lu";

const featureClusters = [
    {
        id: "scheduling",
        title: "نوبت‌دهی و پذیرش",
        subtitle: "مدیریت جریان مراجعه، بدون اصطکاک",
        capability: "Operational Scheduling",
        icon: LuCalendarClock,
        color: "text-blue-600",
        bg: "bg-blue-50",
        intro:
            "نوبت‌دهی در کلینیکانز  فقط یک تقویم نیست؛ نقطه شروع نظم عملیاتی کلینیک است. این ماژول جریان مراجعه را شفاف، قابل پیش‌بینی و هماهنگ با منابع واقعی کلینیک مدیریت می‌کند.",
        points: [
            "تقویم یکپارچه پزشکان، خدمات و فضاهای درمانی",
            "مدیریت هوشمند جابه‌جایی، تأخیر و کنسلی نوبت‌ها",
            "تعریف نوبت‌های ویژه، VIP و دوره‌ای",
            "کنترل لیست انتظار برای بهینه‌سازی ظرفیت",
        ],
    },
    {
        id: "ehr",
        title: "پرونده الکترونیک سلامت (EHR)",
        subtitle: "مرجع تصمیم‌سازی درمانی",
        capability: "Clinical Records Management",
        icon: LuFileText,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        intro:
            "پرونده سلامت در کلینیکانز  یک ساختار زنده و قابل اتکا است که مسیر درمان، سوابق و تعاملات مراجع را به‌صورت یکپارچه ثبت و نگهداری می‌کند.",
        points: [
            "پروفایل جامع مراجع با سوابق درمانی و رضایت‌نامه‌ها",
            "ثبت طرح درمان، یادداشت‌های پزشک و خدمات انجام‌شده",
            "مدیریت تصاویر، اسناد و Before/After",
            "قالب‌های اختصاصی متناسب با هر تخصص پزشکی",
        ],
    },
    {
        id: "finance",
        title: "مدیریت مالی و تسویه",
        subtitle: "شفافیت مالی در مقیاس کلینیک",
        capability: "Financial Operations",
        icon: LuWallet,
        color: "text-amber-600",
        bg: "bg-amber-50",
        intro:
            "ماژول مالی کلینیکانز  دیدی دقیق و لحظه‌ای از عملکرد اقتصادی کلینیک ارائه می‌دهد و ارتباط مالی میان خدمات، پزشک و مراجع را شفاف می‌سازد.",
        points: [
            "صدور فاکتور و ثبت دریافت‌ها به‌صورت ساخت‌یافته",
            "محاسبه سهم پزشکان و پرسنل بر اساس عملکرد واقعی",
            "مدیریت پرداخت مرحله‌ای و اقساطی",
            "تحلیل سودآوری خدمات و پزشکان",
        ],
    },
    {
        id: "crm",
        title: "ارتباط با مراجع و رشد پایدار",
        subtitle: "رشد از مسیر تجربه، نه تبلیغ",
        capability: "Patient Relationship Ecosystem",
        icon: LuMegaphone,
        color: "text-rose-600",
        bg: "bg-rose-50",
        intro:
            "کلینیکانز  ارتباط با مراجع را از یک تعامل مقطعی به یک رابطه پایدار تبدیل می‌کند؛ رابطه‌ای که بر رضایت، بازگشت و معرفی طبیعی استوار است.",
        points: [
            "یادآوری هوشمند نوبت برای کاهش عدم مراجعه",
            "ارتباط هدفمند بر اساس رفتار و تاریخچه مراجع",
            "باشگاه مراجعان و سیستم وفاداری",
            "نظرسنجی و سنجش رضایت پس از خدمات",
        ],
    },
    {
        id: "analytics",
        title: "تحلیل و هوش مدیریتی",
        subtitle: "تصمیم‌گیری بر پایه داده",
        capability: "Operational Intelligence",
        icon: LuChartBar,
        color: "text-violet-600",
        bg: "bg-violet-50",
        intro:
            "داشبوردهای کلینیکانز  تصویری شفاف از عملکرد کلینیک ارائه می‌دهند و به مدیران امکان می‌دهند تصمیم‌ها را بر اساس واقعیت‌های عملیاتی اتخاذ کنند.",
        points: [
            "شاخص‌های کلیدی عملکرد (KPI) به‌صورت زنده",
            "تحلیل جذب، بازگشت و رفتار مراجعان",
            "مقایسه عملکرد دوره‌ای و روند رشد",
            "گزارش‌های استاندارد برای مدیریت و حسابرسی",
        ],
    },
    {
        id: "admin",
        title: "ساختار سازمانی و دسترسی‌ها",
        subtitle: "کنترل، امنیت و انطباق",
        capability: "Role-Based Governance",
        icon: LuSettings2,
        color: "text-slate-600",
        bg: "bg-slate-100",
        intro:
            "کلینیکانز  برای کلینیک‌های حرفه‌ای و چندبخشی طراحی شده است؛ با ساختار دسترسی دقیق و هماهنگ با نقش‌ها و فرآیندهای سازمانی.",
        points: [
            "تعریف نقش‌ها و سطوح دسترسی مبتنی بر مسئولیت",
            "مدیریت چند شعبه در یک ساختار واحد",
            "شخصی‌سازی فرآیندها و فرم‌های عملیاتی",
            "ثبت و پایش فعالیت کاربران برای امنیت داده",
        ],
    },
];

export default function ClinicansFeaturesSection ()
{
    return (
        <section
            id="clinicans-features"
            className="py-8"
            aria-labelledby="features-heading"
        >
            <div className="mx-auto max-w-6xl space-y-14 px-4">
                {/* Header */ }
                <div className="space-y-4 text-right">
                    <span className="inline-block rounded-lg bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600 border border-emerald-100">
                        اجزای اکوسیستم کلینیکانز
                    </span>
                    <h2
                        id="features-heading"
                        className="text-2xl font-bold text-bms-dark md:text-3xl"
                    >
                        ستون‌های <span className="text-emerald-600">عملیاتی</span> یک کلینیک موفق
                    </h2>
                    <p className="max-w-3xl ml-auto text-sm leading-relaxed text-slate-600 md:text-base">
                        کلینیکانز  مجموعه‌ای از اجزای به‌هم‌پیوسته است که عملیات روزمره،
                        تجربه مراجع و مدیریت کلینیک را در قالب یک اکوسیستم منسجم پوشش می‌دهد.
                    </p>
                </div>

                {/* Features Grid */ }
                <div className="grid gap-6 md:grid-cols-2">
                    { featureClusters.map( ( cluster ) =>
                    {
                        const Icon = cluster.icon;
                        return (
                            <article
                                key={ cluster.id }
                                className="group relative flex flex-col gap-5 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-100/50"
                            >
                                {/* Header */ }
                                <div className="flex items-start gap-4">
                                    <div
                                        className={ `flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${ cluster.bg } ${ cluster.color }` }
                                    >
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <div className="space-y-1 text-right">
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700">
                                            { cluster.title }
                                        </h3>
                                        <p className="text-xs font-medium text-slate-500">
                                            { cluster.subtitle }
                                        </p>
                                    </div>
                                </div>

                                {/* Capability Tag */ }
                                <div className="flex justify-end">
                                    <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-500 border border-slate-200">
                                        <LuSparkles className="h-3 w-3" />
                                        { cluster.capability }
                                    </span>
                                </div>

                                {/* Intro */ }
                                <p className="text-sm leading-7 text-slate-600 border-r-2 border-slate-100 pr-3 mr-1">
                                    { cluster.intro }
                                </p>

                                {/* Points */ }
                                <ul className="space-y-3 mt-auto pt-2">
                                    { cluster.points.map( ( point, idx ) => (
                                        <li
                                            key={ idx }
                                            className="flex items-start gap-3 text-sm text-slate-700"
                                        >
                                            <LuCheck
                                                className={ `h-4 w-4 mt-1 shrink-0 ${ cluster.color } opacity-80` }
                                            />
                                            <span>{ point }</span>
                                        </li>
                                    ) ) }
                                </ul>
                            </article>
                        );
                    } ) }
                </div>

                {/* Closing Philosophy */ }
                <div className="pt-6 text-right">
                    <p className="max-w-3xl ml-auto text-sm text-slate-600">
                        کلینیکانز  یک نرم‌افزار منفرد نیست؛ یک اکوسیستم عملیاتی است که
                        کلینیک، مراجع و تیم درمان را در یک چرخه پایدار ارزش به هم متصل می‌کند.
                    </p>
                </div>
            </div>
        </section>
    );
}
