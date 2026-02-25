"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type ContactMessage = {
    id: string;
    fullName: string;
    email: string;
    phone: string | null;
    subject: string;
    message: string;
    contactType: string | null;
    status: string;
    createdAt: string | null;
};

function readErrorText ( err: unknown )
{
    if ( err instanceof Error ) return err.message;
    return String( err ?? "Unknown error" );
}

export default function AdminContactMessageClient ( { id }: { id: string; } )
{
    const router = useRouter();

    const [ item, setItem ] = useState<ContactMessage | null>( null );
    const [ loading, setLoading ] = useState( true );
    const [ errText, setErrText ] = useState<string | null>( null );

    const load = useCallback( async () =>
    {
        setLoading( true );
        setErrText( null );
        try
        {
            const r = await fetch( `/api/admin/contact-messages/${ id }`, { cache: "no-store" } );
            if ( !r.ok ) throw new Error( await r.text() );
            const j: unknown = await r.json();
            setItem( j as ContactMessage );
        } catch ( e: unknown )
        {
            setErrText( readErrorText( e ) );
        } finally
        {
            setLoading( false );
        }
    }, [ id ] );

    useEffect( () =>
    {
        void load();
    }, [ load ] );

    async function setStatus ( status: string )
    {
        setErrText( null );
        try
        {
            const r = await fetch( `/api/admin/contact-messages/${ id }`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( { status } ),
            } );
            if ( !r.ok ) throw new Error( await r.text() );
            await load();
            router.refresh();
        } catch ( e: unknown )
        {
            setErrText( readErrorText( e ) );
        }
    }

    if ( loading ) return <div className="text-sm text-odoo-600">در حال بارگذاری…</div>;
    if ( !item ) return <div className="text-sm text-odoo-600">یافت نشد.</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <Link href="/admin/contact-messages" className="text-sm text-bms-primary hover:underline">
                        ← بازگشت
                    </Link>
                    <h1 className="text-xl font-bold text-bms-dark mt-2">{ item.subject }</h1>
                    <p className="text-sm text-odoo-600 mt-1">
                        { item.fullName } • { item.email } { item.phone ? `• ${ item.phone }` : "" } •{ " " }
                        { item.contactType ?? "-" }
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={ () => void setStatus( "READ" ) }
                        className="px-4 py-2 rounded-xl border border-odoo-200 hover:bg-odoo-50 text-sm"
                    >
                        READ
                    </button>
                    <button
                        onClick={ () => void setStatus( "REPLIED" ) }
                        className="px-4 py-2 rounded-xl border border-odoo-200 hover:bg-odoo-50 text-sm"
                    >
                        REPLIED
                    </button>
                    <button
                        onClick={ () => void setStatus( "ARCHIVED" ) }
                        className="px-4 py-2 rounded-xl border border-odoo-200 hover:bg-odoo-50 text-sm"
                    >
                        ARCHIVED
                    </button>
                </div>
            </div>

            { errText ? (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{ errText }</div>
            ) : null }

            <div className="rounded-2xl border border-odoo-200 bg-white p-6 shadow-sm">
                <div className="text-xs text-odoo-600 mb-3">
                    وضعیت: <span className="font-semibold text-bms-dark">{ item.status }</span>
                    { item.createdAt ? ` • ${ new Date( item.createdAt ).toLocaleString( "fa-IR" ) }` : "" }
                </div>

                <div className="text-sm text-odoo-800 leading-8 whitespace-pre-wrap">{ item.message }</div>
            </div>
        </div>
    );
}
