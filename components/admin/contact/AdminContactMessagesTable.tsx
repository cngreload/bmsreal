"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AdminContactMessage } from "@/lib/admin-api";
import { cn } from "@/lib/utils";

type Props = {
    messages: AdminContactMessage[];
    page: number;
    totalPages: number;
};

const statusColors = {
    NEW: "bg-blue-50 text-blue-700 border-blue-200",
    READ: "bg-slate-50 text-slate-600 border-slate-200",
    REPLIED: "bg-emerald-50 text-emerald-700 border-emerald-200",
    ARCHIVED: "bg-gray-50 text-gray-400 border-gray-200",
};

export function AdminContactMessagesTable ( { messages, page, totalPages }: Props )
{
    const router = useRouter();
    const [ expandedId, setExpandedId ] = useState<string | null>( null );
    const [ loadingId, setLoadingId ] = useState<string | null>( null );

    const toggleExpand = ( id: string ) =>
    {
        setExpandedId( expandedId === id ? null : id );
    };

    const updateStatus = async ( id: string, newStatus: string ) =>
    {
        setLoadingId( id );
        try
        {
            const res = await fetch( `/api/admin/contact-messages/${ id }`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( { status: newStatus } ),
            } );

            if ( !res.ok ) throw new Error( "Failed" );
            router.refresh();
        } catch
        {
            // عمداً از error استفاده نمی‌کنیم — فقط alert می‌دهیم
            alert( "خطا در تغییر وضعیت" );
        } finally
        {
            setLoadingId( null );
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="font-bold text-slate-800">صندوق پیام‌ها</h2>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                        تعداد: { messages.length }
                    </span>
                </div>

                <div className="divide-y divide-slate-100">
                    { messages.length === 0 ? (
                        <div className="p-10 text-center text-slate-500 text-sm">
                            هیچ پیامی یافت نشد.
                        </div>
                    ) : (
                        messages.map( ( msg ) =>
                        {
                            const isExpanded = expandedId === msg.id;

                            return (
                                <div
                                    key={ msg.id }
                                    className={ cn( "transition-colors", isExpanded ? "bg-slate-50" : "hover:bg-white" ) }
                                >
                                    {/* Row Header */ }
                                    <div
                                        onClick={ () => toggleExpand( msg.id ) }
                                        className="p-4 cursor-pointer grid grid-cols-12 gap-4 items-center"
                                    >
                                        {/* Status Indicator */ }
                                        <div className="col-span-2 sm:col-span-1">
                                            <div
                                                className={ cn(
                                                    "w-2 h-2 rounded-full mx-auto",
                                                    msg.status === "NEW" ? "bg-blue-500 ring-2 ring-blue-100" : "bg-slate-300"
                                                ) }
                                            />
                                        </div>

                                        {/* Name & Subject */ }
                                        <div className="col-span-10 sm:col-span-4 flex flex-col">
                                            <span
                                                className={ cn(
                                                    "text-sm text-slate-900",
                                                    msg.status === "NEW" ? "font-bold" : "font-medium"
                                                ) }
                                            >
                                                { msg.fullName || "ناشناس" }
                                            </span>
                                            <span className="text-xs text-slate-500 truncate">
                                                { msg.subject || "بدون موضوع" }
                                            </span>
                                        </div>

                                        {/* Date (Hidden on mobile) */ }
                                        <div className="hidden sm:block sm:col-span-3 text-xs text-slate-400 text-center">
                                            { new Intl.DateTimeFormat( "fa-IR", {
                                                dateStyle: "medium",
                                                timeStyle: "short",
                                            } ).format( new Date( msg.createdAt ) ) }
                                        </div>

                                        {/* Actions */ }
                                        <div
                                            className="hidden sm:flex sm:col-span-4 justify-end gap-2"
                                            onClick={ ( e ) => e.stopPropagation() }
                                        >
                                            <span
                                                className={ cn(
                                                    "px-2 py-1 rounded-md text-[10px] border",
                                                    statusColors[ msg.status as keyof typeof statusColors ]
                                                ) }
                                            >
                                                { msg.status }
                                            </span>
                                        </div>
                                    </div>

                                    {/* Expanded Content */ }
                                    { isExpanded && (
                                        <div className="px-4 pb-4 sm:px-14 sm:pb-6 animate-fade-in-up">
                                            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-4">
                                                <div className="grid grid-cols-2 gap-4 text-xs text-slate-500 border-b border-slate-100 pb-3">
                                                    <div>
                                                        <span className="block mb-1 font-semibold text-slate-700">ایمیل:</span>
                                                        { msg.email }
                                                    </div>
                                                    <div>
                                                        <span className="block mb-1 font-semibold text-slate-700">تلفن:</span>
                                                        { msg.phone || "---" }
                                                    </div>
                                                </div>

                                                <div className="text-sm text-slate-800 leading-7 whitespace-pre-wrap">
                                                    { msg.message }
                                                </div>

                                                {/* Action Buttons */ }
                                                <div className="flex gap-2 pt-2 border-t border-slate-100 justify-end">
                                                    { msg.status === "NEW" && (
                                                        <button
                                                            onClick={ () => updateStatus( msg.id, "READ" ) }
                                                            disabled={ !!loadingId }
                                                            className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200"
                                                        >
                                                            علامت به عنوان خوانده شده
                                                        </button>
                                                    ) }
                                                    <button
                                                        onClick={ () => updateStatus( msg.id, "REPLIED" ) }
                                                        disabled={ !!loadingId }
                                                        className="px-3 py-1.5 text-xs font-medium text-white bg-bms-primary rounded-lg hover:bg-bms-dark"
                                                    >
                                                        پاسخ داده شد
                                                    </button>
                                                    <button
                                                        onClick={ () => updateStatus( msg.id, "ARCHIVED" ) }
                                                        disabled={ !!loadingId }
                                                        className="px-3 py-1.5 text-xs font-medium text-amber-700 bg-amber-50 rounded-lg hover:bg-amber-100"
                                                    >
                                                        آرشیو
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) }
                                </div>
                            );
                        } )
                    ) }
                </div>

                {/* Pagination */ }
                { totalPages > 1 && (
                    <div className="p-4 border-t border-slate-100 flex justify-center gap-2">
                        <button
                            disabled={ page <= 1 }
                            onClick={ () => router.push( `?page=${ page - 1 }` ) }
                            className="px-3 py-1 text-xs border rounded hover:bg-slate-50 disabled:opacity-50"
                        >
                            قبلی
                        </button>
                        <span className="text-xs self-center text-slate-500">
                            صفحه { page } از { totalPages }
                        </span>
                        <button
                            disabled={ page >= totalPages }
                            onClick={ () => router.push( `?page=${ page + 1 }` ) }
                            className="px-3 py-1 text-xs border rounded hover:bg-slate-50 disabled:opacity-50"
                        >
                            بعدی
                        </button>
                    </div>
                ) }
            </div>
        </div>
    );
}