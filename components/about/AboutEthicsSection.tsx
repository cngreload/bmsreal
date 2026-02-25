// components/about/AboutEthicsSection.tsx
import { LuShieldCheck, LuCheckCheck } from "react-icons/lu";

export default function AboutEthicsSection ()
{
    const points = [
        "تقدم جان و ایمنی انسان بر هر منفعت اقتصادی",
        "صداقت و شفافیت در تعاملات فنی و مالی",
        "حفظ محرمانگی و حریم خصوصی داده‌های کاربران",
        "پرهیز از تضاد منافع و احترام به حقوق ذی‌نفعان",
        "تعهد به یادگیری مستمر و استانداردسازی"
    ];

    return (
        <section
            id="code-of-ethics"
            className="border-t border-slate-200 pt-12 text-right"
            aria-labelledby="ethics-heading"
        >
            <div className="grid gap-10 lg:grid-cols-12 items-center">

                {/* Visual Anchor */ }
                <div className="lg:col-span-4 order-2 lg:order-1">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white shadow-lg">
                        <div className="absolute top-0 left-0 -ml-10 -mt-10 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
                        <LuShieldCheck className="h-12 w-12 text-emerald-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">تعهد حرفه‌ای</h3>
                        <p className="text-xs text-slate-300 leading-6">
                            در بارمان، اخلاق حرفه‌ای مقدم بر تخصص فنی است. ما معتقدیم فناوری بدون اخلاق، خطرناک است.
                        </p>
                    </div>
                </div>

                {/* Content */ }
                <div className="lg:col-span-8 space-y-6 order-1 lg:order-2">
                    <div className="space-y-3">
                        <h2 id="ethics-heading" className="text-2xl font-bold text-slate-900">
                            منشور اخلاقی ما
                        </h2>
                        <p className="text-sm font-medium text-emerald-700">
                            تعهد در حوزه‌هایی که با جان و اعتماد مردم گره خورده‌اند
                        </p>
                    </div>

                    <p className="text-sm leading-8 text-slate-600 text-justify">
                        فعالیت در صنعت انرژی و سلامت، یک تجارت معمولی نیست. ما چارچوبی سخت‌گیرانه برای رفتار سازمانی خود تعریف کرده‌ایم که شامل اصول زیر است:
                    </p>

                    <ul className="grid gap-3 sm:grid-cols-2">
                        { points.map( ( text, idx ) => (
                            <li key={ idx } className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white p-3 shadow-sm">
                                <LuCheckCheck className="h-5 w-5 shrink-0 text-emerald-500" />
                                <span className="text-xs font-medium text-slate-700">{ text }</span>
                            </li>
                        ) ) }
                    </ul>
                </div>
            </div>
        </section>
    );
}