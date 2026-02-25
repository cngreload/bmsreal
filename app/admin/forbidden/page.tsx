import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

export const runtime = "nodejs";

export default function AdminForbiddenPage ()
{
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="max-w-xl w-full rounded-2xl border border-odoo-200 bg-white p-6 shadow-sm">
                <h1 className="text-xl font-semibold text-bms-dark mb-2">دسترسی غیرمجاز</h1>
                <p className="text-sm text-odoo-600 mb-5">
                    این حساب اجازه ورود به پنل ادمین را ندارد.
                </p>

                <div className="flex flex-wrap gap-3">
                    <SignOutButton redirectUrl="/admin/sign-in">
                        <button className="rounded-xl border border-odoo-200 px-4 py-2 text-sm hover:bg-odoo-50">
                            خروج و ورود با حساب ادمین
                        </button>
                    </SignOutButton>

                    <Link
                        className="rounded-xl bg-bms-primary text-white px-4 py-2 text-sm"
                        href="/"
                    >
                        برگشت به سایت
                    </Link>
                </div>
            </div>
        </div>
    );
}
