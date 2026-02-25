"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import
{
    LuUser,
    LuMail,
    LuPhone,
    LuMessageSquare,
    LuSend,
    LuLoader,
    LuCircleAlert,
    LuCheck,
} from "react-icons/lu";
import { cn } from "@/lib/utils";

type ContactFormValues = {
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

type InputGroupProps = {
    id: keyof ContactFormValues;
    label: string;
    icon: React.ComponentType<{ className?: string; }>;
    type?: string;
    placeholder: string;
    error?: string;
    value: string;
    onChange: ( e: ChangeEvent<HTMLInputElement> ) => void;
    dir?: "rtl" | "ltr";
    autoComplete?: string;
};

export default function ContactForm ()
{
    const [ values, setValues ] = useState<ContactFormValues>( {
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    } );

    const [ errors, setErrors ] = useState<FieldErrors>( {} );
    const [ submitting, setSubmitting ] = useState( false );
    const [ serverError, setServerError ] = useState<string | null>( null );
    const [ serverSuccess, setServerSuccess ] = useState<string | null>( null );

    const handleChange =
        ( field: keyof ContactFormValues ) =>
            ( e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) =>
            {
                const value = e.target.value;
                setValues( ( prev ) => ( { ...prev, [ field ]: value } ) );

                if ( errors[ field ] )
                {
                    setErrors( ( prev ) => ( { ...prev, [ field ]: undefined } ) );
                }

                setServerError( null );
                setServerSuccess( null );
            };

    const validate = (): boolean =>
    {
        const nextErrors: FieldErrors = {};

        if ( !values.fullName.trim() )
            nextErrors.fullName = "نام و نام خانوادگی را وارد کنید";

        if ( !values.email.trim() )
        {
            nextErrors.email = "ایمیل معتبر الزامی است";
        } else if ( !/^\S+@\S+\.\S+$/.test( values.email.trim() ) )
        {
            nextErrors.email = "فرمت ایمیل واردشده صحیح نیست";
        }

        if ( !values.message.trim() )
            nextErrors.message = "شرح درخواست یا پیام الزامی است";

        setErrors( nextErrors );
        return Object.keys( nextErrors ).length === 0;
    };

    const handleSubmit = async ( e: FormEvent<HTMLFormElement> ) =>
    {
        e.preventDefault();
        setServerError( null );
        setServerSuccess( null );

        if ( !validate() ) return;

        setSubmitting( true );

        try
        {
            const res = await fetch( "/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( values ),
            } );

            if ( !res.ok )
            {
                const data = await res.json();
                throw new Error( data?.message || "خطا در ارسال درخواست" );
            }

            setServerSuccess(
                "درخواست شما با موفقیت ثبت شد. کارشناسان ما پس از بررسی، در کوتاه‌ترین زمان ممکن با شما تماس خواهند گرفت."
            );

            setValues( {
                fullName: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            } );
        } catch ( err: unknown )
        {
            let message =
                "در حال حاضر امکان ارسال پیام وجود ندارد. لطفاً بعداً دوباره تلاش کنید.";
            if ( err instanceof Error ) message = err.message;
            setServerError( message );
        } finally
        {
            setSubmitting( false );
        }
    };

    const InputGroup = ( {
        id,
        label,
        icon: Icon,
        type = "text",
        placeholder,
        error,
        value,
        onChange,
        dir,
        autoComplete,
    }: InputGroupProps ) => (
        <div className="space-y-1.5 text-right">
            <label htmlFor={ id } className="text-xs font-semibold text-slate-700">
                { label } { error && <span className="text-red-500">*</span> }
            </label>

            <div className="relative">
                <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-slate-400">
                    <Icon className="h-5 w-5" />
                </div>

                <input
                    id={ id }
                    name={ id }
                    type={ type }
                    value={ value }
                    onChange={ onChange }
                    dir={ dir }
                    autoComplete={ autoComplete }
                    aria-invalid={ !!error }
                    className={ cn(
                        "w-full rounded-xl border bg-slate-50 py-3 pr-10 pl-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-1",
                        error
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-slate-200 focus:border-bms-primary focus:ring-bms-primary/20"
                    ) }
                    placeholder={ placeholder }
                />
            </div>

            { error && (
                <p className="text-[11px] font-medium text-red-500">{ error }</p>
            ) }
        </div>
    );

    return (
        <form
            onSubmit={ handleSubmit }
            className="space-y-6"
            noValidate
            aria-live="polite"
        >
            {/* Alerts */ }
            { serverError && (
                <div className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 p-4 text-red-800">
                    <LuCircleAlert className="h-5 w-5 shrink-0" />
                    <p className="text-xs font-medium md:text-sm">
                        { serverError }
                    </p>
                </div>
            ) }

            { serverSuccess && (
                <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-emerald-800">
                    <LuCheck className="h-5 w-5 shrink-0" />
                    <p className="text-xs font-medium md:text-sm">
                        { serverSuccess }
                    </p>
                </div>
            ) }

            <div className="grid gap-6 md:grid-cols-2">
                <InputGroup
                    id="fullName"
                    label="نام و نام خانوادگی"
                    icon={ LuUser }
                    placeholder="مثلاً: علی محمدی"
                    value={ values.fullName }
                    onChange={ handleChange( "fullName" ) }
                    error={ errors.fullName }
                    autoComplete="name"
                />

                <InputGroup
                    id="email"
                    label="ایمیل (سازمانی یا شخصی)"
                    icon={ LuMail }
                    type="email"
                    dir="ltr"
                    placeholder="name@company.com"
                    value={ values.email }
                    onChange={ handleChange( "email" ) }
                    error={ errors.email }
                    autoComplete="email"
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <InputGroup
                    id="phone"
                    label="شماره تماس (اختیاری)"
                    icon={ LuPhone }
                    dir="ltr"
                    placeholder="09xxxxxxxxx"
                    value={ values.phone }
                    onChange={ handleChange( "phone" ) }
                    autoComplete="tel"
                />

                <InputGroup
                    id="subject"
                    label="موضوع درخواست"
                    icon={ LuMessageSquare }
                    placeholder="مثلاً: درخواست دمو سامانه ICTS"
                    value={ values.subject }
                    onChange={ handleChange( "subject" ) }
                />
            </div>

            <div className="space-y-1.5 text-right">
                <label htmlFor="message" className="text-xs font-semibold text-slate-700">
                    شرح درخواست یا پیام { errors.message && <span className="text-red-500">*</span> }
                </label>

                <textarea
                    id="message"
                    name="message"
                    rows={ 5 }
                    value={ values.message }
                    onChange={ handleChange( "message" ) }
                    aria-invalid={ !!errors.message }
                    className={ cn(
                        "min-h-[120px] w-full resize-y rounded-xl border bg-slate-50 p-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-1",
                        errors.message
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                            : "border-slate-200 focus:border-bms-primary focus:ring-bms-primary/20"
                    ) }
                    placeholder="لطفاً نیاز، سوال یا سناریوی مدنظر خود را با جزئیات مختصر توضیح دهید…"
                />

                { errors.message && (
                    <p className="text-[11px] font-medium text-red-500">
                        { errors.message }
                    </p>
                ) }
            </div>

            <div className="flex justify-end pt-2">
                <button
                    type="submit"
                    disabled={ submitting }
                    className="inline-flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-xl bg-bms-primary px-6 text-sm font-bold text-white shadow-lg shadow-bms-primary/25 transition-all hover:-translate-y-0.5 hover:bg-bms-dark hover:shadow-xl disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
                >
                    { submitting ? (
                        <>
                            <LuLoader className="h-5 w-5 animate-spin" />
                            <span>در حال ارسال…</span>
                        </>
                    ) : (
                        <>
                            <span>ارسال درخواست</span>
                            <LuSend className="h-4 w-4 rotate-180" />
                        </>
                    ) }
                </button>
            </div>
        </form>
    );
}
