// components/clinicans/ClinicansHeroSection.tsx
"use client";

import Link from "next/link";
import
{
    LuTrendingDown,
    LuStethoscope,
    LuPhoneMissed,
    LuUserX,
    LuCircleX,
    LuTarget,
    LuArrowLeft,
    LuZap,
    LuCheck
} from "react-icons/lu";

// 🧠 SEMANTIC DATA: Problem Set (Barriers to Enablement)
const problems = [
    {
        id: "manager",
        title: "مدیریت و مالکان",
        subtitle: "عدم شفافیت در تصمیم‌گیری",
        icon: LuTrendingDown,
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "group-hover:border-rose-200",
        points: [
            "پراکندگی داده‌ها بین ابزارهای نوبت‌دهی و مالی",
            "فقدان بینش لحظه‌ای از ظرفیت و بهره‌وری مجموعه",
            "چالش در توسعه و مقیاس‌پذیری بدون زیرساخت دیجیتال",
        ],
    },
    {
        id: "doctor",
        title: "پزشکان و درمانگران",
        subtitle: "اختلال در تمرکز بالینی",
        icon: LuStethoscope,
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "group-hover:border-orange-200",
        points: [
            "دسترسی دشوار به سوابق یکپارچه و تاریخچه مراجع",
            "اتلاف زمان ارزشمند ویزیت برای هماهنگی‌های اجرایی",
            "گسست در پیگیری روند درمان (Follow-up) و مراقبت",
        ],
    },
    {
        id: "reception",
        title: "تیم پذیرش و عملیات",
        subtitle: "فرسودگی ناشی از فرآیندهای دستی",
        icon: LuPhoneMissed,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "group-hover:border-amber-200",
        points: [
            "حجم بالای تماس‌ها برای هماهنگی و تغییر نوبت",
            "تداخل برنامه‌ها و ازدحام غیرقابل پیش‌بینی",
            "خطای انسانی در ثبت اطلاعات و امور مالی",
        ],
    },
    {
        id: "patient",
        title: "مراجعان و بیماران",
        subtitle: "تجربه‌ای ناپیوسته",
        icon: LuUserX,
        color: "text-red-600",
        bg: "bg-red-50",
        border: "group-hover:border-red-200",
        points: [
            "دشواری در اخذ نوبت و وابستگی به تماس تلفنی",
            "عدم آگاهی از تغییرات برنامه و زمان انتظار",
            "کاهش اعتماد به سطح حرفه‌ای و نظم مرکز درمانی",
        ],
    },
];

export default function ClinicansHeroSection ()
{
    return (
        <section
            id="clinicans-hero"
            className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-16 md:py-24"
        >
            {/* 
         🎨 BACKGROUND FX
      */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent z-10" />

            <div className="relative mx-auto max-w-7xl px-4 space-y-32">

                {/* 
           ================= 1. THE HERO (Vision) ================= 
        */}
                <header className="mx-auto max-w-5xl text-center space-y-10 relative z-20">

                    {/* Badge */ }
                    <div className="flex justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1.5 text-xs font-bold text-emerald-700 shadow-sm transition-transform hover:scale-105 cursor-default">
                            <LuZap className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                            <span>اکوسیستم توانمندسازی دیجیتال مراکز درمانی</span>
                        </span>
                    </div>

                    {/* H1: Canonical Platform Terminology */ }
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.2]">
                        پلتفرم توانمندسازی دیجیتال <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                            ارائه‌دهندگان خدمات سلامت
                        </span>
                    </h1>

                    {/* Description: Canonical Definition */ }
                    <p className="mx-auto max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed text-justify md:text-center">
                        <strong className="text-slate-900 font-semibold">کلینیکانز </strong>{ " " }
                        پلتفرمی یکپارچه برای توانمندسازی دیجیتال، اتوماسیون و هوشمندسازی ارائه‌دهندگان خدمات سلامت است — از مطب‌های کوچک تا مراکز درمانی بزرگ. ما درمان، مدیریت و تجربه مراجع را در یک سیستم امن و مقیاس‌پذیر تجمیع می‌کنیم.
                    </p>

                    {/* Feature Chips */ }
                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                        { [
                            "هوشمندسازی فرآیندهای درمانی",
                            "اتوماسیون اداری و مالی",
                            "توانمندسازی تیم درمان",
                            "تصمیم‌سازی داده‌محور",
                            "رشد پایدار کسب‌وکار",
                        ].map( ( item ) => (
                            <span
                                key={ item }
                                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm hover:border-emerald-200 transition-colors"
                            >
                                <LuCheck className="w-3.5 h-3.5 text-emerald-500" />
                                { item }
                            </span>
                        ) ) }
                    </div>

                    {/* Actions */ }
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Link
                            href="https://clinicans.ir/"
                            target="_blank"
                            className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-8 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-emerald-600/30"
                        >
                            ورود به کلینیکانز
                            <LuArrowLeft className="w-4 h-4" />
                        </Link>

                        <a
                            href="/contact-us"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-2xl border border-emerald-600 bg-white px-8 text-sm font-bold text-emerald-600 transition-colors hover:bg-emerald-50"
                        >
                            مشاوره و استقرار پلتفرم                        </a>
                    </div>
                </header>


                {/* 
           ================= 2. THE PROBLEMS (Reality Check) ================= 
        */}
                <section aria-labelledby="clinicans-problems-heading" className="space-y-12 relative z-20">

                    {/* Section Header */ }
                    <div className="max-w-4xl ml-auto text-right space-y-4 px-2">
                        <h2
                            id="clinicans-problems-heading"
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900"
                        >
                            چرا ابزارهای سنتی مانع <br className="md:hidden" />
                            <span className="text-rose-600 underline decoration-rose-200 underline-offset-8 decoration-4">
                                توانمندسازی دیجیتال هستند؟
                            </span>
                        </h2>

                        <p className="text-sm md:text-base leading-8 text-slate-600 max-w-2xl text-justify">
                            مسئله، ضعف تیم درمان نیست؛ مسئله فقدان زیرساختی است که بتواند
                            <strong className="text-rose-700 font-bold mx-1">
                                پیچیدگی‌های خدمات سلامت مدرن
                            </strong>
                            را مدیریت کند. ابزارهای جزیره‌ای و سنتی، به جای توانمندسازی، باعث اتلاف انرژی و کاهش کیفیت خدمات می‌شوند.
                        </p>
                    </div>

                    {/* Cards Grid */ }
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        { problems.map( ( item ) =>
                        {
                            const Icon = item.icon;
                            return (
                                <article
                                    key={ item.id }
                                    className={ `group relative flex flex-col gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${ item.border }` }
                                >
                                    {/* Card Header */ }
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div
                                            className={ `flex h-16 w-16 items-center justify-center rounded-2xl ${ item.bg } ${ item.color } shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3` }
                                        >
                                            <Icon className="h-8 w-8" />
                                        </div>

                                        <div>
                                            <h3 className="text-base font-bold text-slate-900">
                                                { item.title }
                                            </h3>
                                            <p className="mt-1 text-xs font-medium text-slate-500">
                                                { item.subtitle }
                                            </p>
                                        </div>
                                    </div>

                                    {/* Divider */ }
                                    <div className="h-px w-full bg-slate-100 group-hover:bg-slate-200 transition-colors" />

                                    {/* Points List */ }
                                    <ul className="space-y-3 text-right flex-1">
                                        { item.points.map( ( point, idx ) => (
                                            <li key={ idx } className="flex items-start gap-2.5">
                                                <LuCircleX
                                                    className={ `h-4 w-4 mt-1 shrink-0 ${ item.color } opacity-60` }
                                                />
                                                <span className="text-xs leading-5 text-slate-600 text-pretty">
                                                    { point }
                                                </span>
                                            </li>
                                        ) ) }
                                    </ul>

                                    {/* Bottom Accent */ }
                                    <div className={ `absolute bottom-0 inset-x-8 h-1 rounded-t-full ${ item.bg.replace( 'bg-', 'bg-opacity-100 bg-' ) } scale-x-0 transition-transform duration-300 group-hover:scale-x-100` } />
                                </article>
                            );
                        } ) }
                    </div>
                    {/* 
                        🧠 SYSTEM SUMMARY BLOCK (Platform Core)
                    */}
                    <div className="mt-20 lg:mt-28 flex justify-center">
                        <aside className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50 p-1 shadow-md border border-slate-200 max-w-4xl w-full mx-4">

                            {/* Inner Container */ }
                            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-[2rem] bg-white px-8 py-8 md:px-10">

                                {/* Visual Anchor */ }
                                <div className="flex-shrink-0 relative">
                                    <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-lg" />
                                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100">
                                        <LuTarget className="h-10 w-10" />
                                    </div>
                                </div>

                                {/* Content */ }
                                <div className="flex-1 text-center md:text-right space-y-3">
                                    <h4 className="text-lg font-bold text-slate-900">
                                        پلتفرمی برای عبور از موانع عملیاتی
                                    </h4>
                                    <p className="text-sm md:text-base text-slate-600 leading-8 text-justify">
                                        <strong className="text-slate-900 font-bold">کلینیکانز </strong>
                                        دقیقاً برای پر کردن این خلاء طراحی شده است؛
                                        <span className="text-indigo-700 font-medium">
                                            { " " }
                                            یک پلتفرم توانمندسازی جامع
                                        </span>
                                        برای ارائه‌دهندگان خدمات سلامت که می‌خواهند
                                        <span className="text-indigo-700 font-medium">
                                            { " " }
                                            کیفیت، دقت و رشد
                                        </span>
                                        را هم‌زمان تجربه کنند.
                                    </p>
                                </div>

                            </div>
                        </aside>
                    </div>

                </section>
            </div>
        </section>
    );
}