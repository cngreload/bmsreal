"use client";

import { useState, useEffect } from "react";

type Tag = { id: string; name: string; slug: string; };

export default function AdminTagsPage ()
{
    const [ tags, setTags ] = useState<Tag[]>( [] );
    const [ isLoading, setIsLoading ] = useState( true );
    const [ name, setName ] = useState( "" );

    const fetchTags = async () =>
    {
        setIsLoading( true );
        const res = await fetch( "/api/admin/blog/tags" );
        if ( res.ok ) setTags( await res.json() );
        setIsLoading( false );
    };

    useEffect( () => { fetchTags(); }, [] );

    const handleCreate = async ( e: React.FormEvent ) =>
    {
        e.preventDefault();
        if ( !name.trim() ) return;
        await fetch( "/api/admin/blog/tags", {
            method: "POST",
            body: JSON.stringify( { name } ),
        } );
        setName( "" );
        fetchTags();
    };

    const handleDelete = async ( id: string ) =>
    {
        if ( !confirm( "حذف شود؟" ) ) return;
        await fetch( `/api/admin/blog/tags/${ id }`, { method: "DELETE" } );
        fetchTags();
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-800">تگ‌ها</h1>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <form onSubmit={ handleCreate } className="flex gap-4">
                    <input
                        className="flex-1 rounded-xl border border-slate-200 px-4 py-2 text-sm"
                        placeholder="نام تگ جدید..."
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
                    <div className="p-6 flex flex-wrap gap-2">
                        { tags.map( ( tag ) => (
                            <span key={ tag.id } className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">
                                <span># { tag.name }</span>
                                <button onClick={ () => handleDelete( tag.id ) } className="text-slate-400 hover:text-red-500 font-bold px-1">×</button>
                            </span>
                        ) ) }
                        { tags.length === 0 && <p className="text-slate-400 w-full text-center">تگی وجود ندارد.</p> }
                    </div>
                ) }
            </div>
        </div>
    );
}