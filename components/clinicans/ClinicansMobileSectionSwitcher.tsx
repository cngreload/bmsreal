"use client";

import Link from "next/link";

const SECTIONS = [
    { id: "overview", label: "معرفی" },
    { id: "features", label: "امکانات" },
    { id: "audience", label: "مخاطبان" },
    { id: "pricing", label: "شروع" },
];

export default function ClinicansMobileSectionSwitcher ()
{
    return (
        <nav className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-white border-t border-slate-200">
            <ul className="flex justify-around py-2 text-xs font-medium">
                { SECTIONS.map( ( s ) => (
                    <li key={ s.id }>
                        <Link
                            href={ `#${ s.id }` }
                            className="px-3 py-2 rounded-lg text-slate-600 hover:text-emerald-600"
                        >
                            { s.label }
                        </Link>
                    </li>
                ) ) }
            </ul>
        </nav>
    );
}
