"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogPostSchema, type BlogPostInput } from "@/lib/validations/blog";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Types
type Category = { id: string; name: string; };
type Tag = { id: string; name: string; };

interface BlogPostFormProps
{
    mode: "create" | "edit";
    postId?: string;
    initialData?: Partial<BlogPostInput>;
    categories: Category[];
    tags: Tag[];
}

export function BlogPostForm ( {
    mode,
    postId,
    initialData,
    categories,
    tags,
}: BlogPostFormProps )
{
    const router = useRouter();
    const [ isSaving, setIsSaving ] = useState( false );
    const [ serverError, setServerError ] = useState<string | null>( null );

    const form = useForm<BlogPostInput>( {
        resolver: zodResolver( blogPostSchema ),
        defaultValues: {
            title: "",
            slug: "",
            excerpt: "",
            content: "",
            coverImageUrl: "",
            status: "DRAFT",
            categoryId: null,
            tagIds: [],
            seoTitle: "",
            seoDesc: "",
            isFeatured: false,
            ...initialData,
        },
    } );



    const onSubmit: SubmitHandler<BlogPostInput> = async ( data ) =>
    {
        setIsSaving( true );
        setServerError( null );

        try
        {
            const url =
                mode === "create" ? "/api/admin/blog/posts" : `/api/admin/blog/posts/${ postId }`;
            const method = mode === "create" ? "POST" : "PATCH";

            const res = await fetch( url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( data ),
            } );

            if ( !res.ok )
            {
                const err = await res.json();
                throw new Error( err.message || "خطا در ذخیره سازی" );
            }

            router.push( "/admin/blog" );
            router.refresh();
        } catch ( err: unknown )
        {
            setServerError( ( err as Error ).message || "خطای ناشناخته" );
        } finally
        {
            setIsSaving( false );
        }
    };

    return (
        <div className="mx-auto max-w-5xl space-y-6 pb-20">
            {/* Header */ }
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div>
                    <h1 className="text-2xl font-bold text-bms-dark">
                        { mode === "create" ? "نوشتن مقاله جدید" : "ویرایش مقاله" }
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">مدیریت محتوا و اخبار سازمانی</p>
                </div>
                <div className="flex gap-3">
                    <Link href="/admin/blog" className="bms-button-outline px-4 py-2 text-sm">
                        انصراف
                    </Link>
                    <button
                        onClick={ form.handleSubmit( onSubmit ) }
                        disabled={ isSaving }
                        className="bms-button-primary px-6 py-2 text-sm"
                    >
                        { isSaving ? "در حال ذخیره..." : "ثبت و ذخیره" }
                    </button>
                </div>
            </div>

            { serverError && (
                <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600 border border-red-100">
                    { serverError }
                </div>
            ) }

            <form onSubmit={ form.handleSubmit( onSubmit ) } className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */ }
                <div className="lg:col-span-2 space-y-6">
                    {/* ... بقیه فیلدها مثل قبل ... */ }
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">عنوان مقاله</label>
                        <input
                            { ...form.register( "title" ) }
                            className="bms-input text-lg font-semibold"
                            placeholder="مثلاً: تحول دیجیتال در صنعت نفت و گاز"
                        />
                        { form.formState.errors.title && (
                            <span className="text-xs text-red-500">{ form.formState.errors.title.message }</span>
                        ) }
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">محتوای اصلی</label>
                        <textarea
                            { ...form.register( "content" ) }
                            rows={ 15 }
                            className="bms-input font-mono text-sm leading-relaxed"
                            placeholder="متن مقاله را اینجا بنویسید (Markdown پشتیبانی می‌شود)..."
                        />
                        { form.formState.errors.content && (
                            <span className="text-xs text-red-500">{ form.formState.errors.content.message }</span>
                        ) }
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">خلاصه (Excerpt)</label>
                        <textarea
                            { ...form.register( "excerpt" ) }
                            rows={ 3 }
                            className="bms-input"
                            placeholder="متن کوتاهی برای نمایش در لیست اخبار..."
                        />
                        { form.formState.errors.excerpt && (
                            <span className="text-xs text-red-500">{ form.formState.errors.excerpt.message }</span>
                        ) }
                    </div>

                    {/* SEO Section */ }
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
                        <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">
                            تنظیمات SEO
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-xs text-slate-600 mb-1">SEO Title</label>
                                <input { ...form.register( "seoTitle" ) } className="bms-input" />
                            </div>
                            <div>
                                <label className="block text-xs text-slate-600 mb-1">Meta Description</label>
                                <textarea { ...form.register( "seoDesc" ) } rows={ 2 } className="bms-input" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */ }
                <div className="space-y-6">
                    {/* ... سایر بخش‌ها ... */ }

                    <div className="bms-card p-5 space-y-4">
                        <h3 className="text-sm font-bold text-slate-800">دسته‌بندی و تگ‌ها</h3>
                        <div>
                            <label className="block text-xs font-medium text-slate-600 mb-1.5">دسته اصلی</label>
                            <select { ...form.register( "categoryId" ) } className="bms-input">
                                <option value="">انتخاب کنید...</option>
                                { categories.map( ( c ) => (
                                    <option key={ c.id } value={ c.id }>
                                        { c.name }
                                    </option>
                                ) ) }
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-slate-600 mb-2">تگ‌های مرتبط</label>
                            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-1">
                                <Controller
                                    control={ form.control }
                                    name="tagIds"
                                    render={ ( { field } ) => (
                                        <>
                                            { tags.map( ( tag ) =>
                                            {
                                                const currentTags = field.value as string[];
                                                const isSelected = currentTags.includes( tag.id );

                                                return (
                                                    <button
                                                        key={ tag.id }
                                                        type="button"
                                                        onClick={ () =>
                                                        {
                                                            const newValue = isSelected
                                                                ? currentTags.filter( ( id ) => id !== tag.id )
                                                                : [ ...currentTags, tag.id ];
                                                            field.onChange( newValue );
                                                        } }
                                                        className={ cn(
                                                            "rounded-full px-3 py-1 text-[11px] border transition-all",
                                                            isSelected
                                                                ? "bg-bms-primary text-white border-bms-primary"
                                                                : "bg-slate-50 text-slate-600 border-slate-200 hover:border-bms-primary/50"
                                                        ) }
                                                    >
                                                        { tag.name }
                                                    </button>
                                                );
                                            } ) }
                                        </>
                                    ) }
                                />
                            </div>
                        </div>
                    </div>

                    {/* تصویر شاخص و بقیه ... */ }
                </div>
            </form>
        </div>
    );
}