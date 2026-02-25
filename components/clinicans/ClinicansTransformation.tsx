// components/clinicans/ClinicansTransformSection.tsx
"use client";

import Link from "next/link";
import
{
    LuArrowLeft,
    LuLayoutDashboard,
    LuStethoscope,
    LuUsers,
    LuSmile
} from "react-icons/lu";

// 🎨 IBM DESIGN TOKENS
const IBM_BLUE = "text-[#0f62fe]";
const IBM_TEXT_MAIN = "text-[#161616]";
const IBM_TEXT_SEC = "text-[#525252]";

export default function ClinicansTransformSection ()
{
    const items = [
        {
            icon: LuLayoutDashboard,
            title: "مدیریت و مالکان",
            subtitle: "تصمیم‌گیری بدون دید واقعی",
            desc: "پراکندگی داده‌ها بین سیستم‌های نوبت‌دهی و مالی باعث عدم شفافیت در درآمد و ریسک بالا در توسعه کسب‌وکار می‌شود."
        },
        {
            icon: LuStethoscope,
            title: "پزشکان و درمانگران",
            subtitle: "اختلال در تمرکز درمان",
            desc: "دسترسی کند به سوابق پزشکی و وقفه‌های غیرضروری حین ویزیت، کیفیت درمان و تمرکز پزشک را کاهش می‌دهد."
        },
        {
            icon: LuUsers,
            title: "پذیرش و تیم اجرایی",
            subtitle: "فرسودگی عملیاتی",
            desc: "ترافیک بالای تماس‌ها برای تغییر نوبت و خطاهای انسانی در ثبت اطلاعات، منجر به ازدحام و خستگی تیم می‌شود."
        },
        {
            icon: LuSmile,
            title: "مراجعان و بیماران",
            subtitle: "تجربه‌ای ناپایدار",
            desc: "دشواری در دریافت نوبت، وابستگی به تماس تلفنی و عدم اطلاع‌رسانی دقیق، اعتماد مراجعین را سلب می‌کند."
        }
    ];

    return (
        <section className="py-20 bg-white" dir="rtl">
            <div className="container mx-auto max-w-[1580px] px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

                    {/* LEFT: Heading & Context */ }
                    <div className="space-y-8">
                        <h2 className={ `text-3xl md:text-5xl font-light leading-tight ${ IBM_TEXT_MAIN }` }>
                            چرا ساختارهای سنتی <br />
                            دیگر <span className="font-semibold">جوابگو نیستند؟</span>
                        </h2>

                        <div className="space-y-6">
                            <p className={ `text-lg md:text-xl font-light leading-relaxed ${ IBM_TEXT_MAIN }` }>
                                مسئله، ضعف افراد یا تیم درمان نیست. مسئله، ابزارهایی است که برای پیچیدگی کلینیک‌های امروز طراحی نشده‌اند. نتیجه؟ اتلاف انرژی و تجربه‌ای ناپیوسته.
                            </p>
                            <div className="flex flex-col gap-2">
                                <Link href="#solutions" className={ `flex items-center ${ IBM_BLUE } hover:underline text-lg font-medium group` }>
                                    <span>مشاهده راهکارها</span>
                                    <LuArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Icon Grid (Refactored Content) */ }
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                        { items.map( ( item, idx ) => (
                            <div key={ idx } className="space-y-4">
                                <item.icon className={ `h-10 w-10 ${ IBM_BLUE }` } strokeWidth={ 1.5 } />
                                <div>
                                    <h3 className={ `text-lg font-bold ${ IBM_TEXT_MAIN }` }>
                                        { item.title }
                                    </h3>
                                    <span className="text-xs font-mono text-gray-500 block mt-1">
                                        { item.subtitle }
                                    </span>
                                </div>
                                <p className={ `text-sm leading-7 ${ IBM_TEXT_SEC }` }>
                                    { item.desc }
                                </p>
                            </div>
                        ) ) }
                    </div>

                </div>
            </div>
        </section>
    );
}