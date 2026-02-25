"use client";

import { useState, useEffect } from "react";

type Category = { id: string; name: string; slug: string; description: string | null; };

export default function AdminCategoriesPage ()
{
    const [ categories, setCategories ] = useState<Category[]>( [] );
    const [ isLoading, setIsLoading ] = useState( true );
    const [ name, setName ] = useState( "" );

    const fetchCategories = async () =>
    {
        setIsLoading( true );
        const res = await fetch( "/api/admin/blog/categories" );
        if ( res.ok ) setCategories( await res.json() );
        setIsLoading( false );
    };

    useEffect( () => { fetchCategories(); }, [] );

    const handleCreate = async ( e: React.FormEvent ) =>
    {
        e.preventDefault();
        if ( !name.trim() ) return;
        await fetch( "/api/admin/blog/categories", {
            method: "POST",
            body: JSON.stringify( { name } ),
        } );
        setName( "" );
        fetchCategories();
    };

    const handleDelete = async ( id: string ) =>
    {
        if ( !confirm( "حذف شود؟" ) ) return;
        await fetch( `/api/admin/blog/categories/${ id }`, { method: "DELETE" } );
        fetchCategories();
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-800">دسته‌بندی‌ها</h1>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <form onSubmit={ handleCreate } className="flex gap-4">
                    <input
                        className="flex-1 rounded-xl border border-slate-200 px-4 py-2 text-sm"
                        placeholder="نام دسته‌بندی جدید..."
                        value={ name }
                        onChange={ ( e ) => setName( e.target.value ) }
                    />
                    <button type="submit" className="bg-bms-primary text-white px-6 py-2 rounded-xl text-sm font-medium hover:bg-bms-dark transition-colors">
                        افزودن
                    </button>
                </form>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                { isLoading ? (
                    <div className="p-8 text-center text-slate-500">در حال بارگذاری...</div>
                ) : (
                    <table className="w-full text-right">
                        <thead className="bg-slate-50 text-xs text-slate-500 uppercase border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4">نام</th>
                                <th className="px-6 py-4">نامک (Slug)</th>
                                <th className="px-6 py-4 text-left">عملیات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            { categories.map( ( cat ) => (
                                <tr key={ cat.id } className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 font-medium text-slate-800">{ cat.name }</td>
                                    <td className="px-6 py-4 text-slate-500 font-mono text-xs">{ cat.slug }</td>
                                    <td className="px-6 py-4 text-left">
                                        <button onClick={ () => handleDelete( cat.id ) } className="text-red-500 hover:text-red-700 text-sm">
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            ) ) }
                            { categories.length === 0 && (
                                <tr><td colSpan={ 3 } className="p-6 text-center text-slate-400">موردی یافت نشد.</td></tr>
                            ) }
                        </tbody>
                    </table>
                ) }
            </div>
        </div>
    );
}