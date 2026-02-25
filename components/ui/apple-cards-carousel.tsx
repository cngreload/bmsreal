"use client";

import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
} from "react";
import
{
    LuArrowLeft,
    LuArrowRight,
    LuX,
} from "react-icons/lu";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

/* ---------------------------------------------
 * Types
 * -------------------------------------------*/
interface CarouselProps
{
    items: JSX.Element[];
    initialScroll?: number;
}

type CardType = {
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
};

/* ---------------------------------------------
 * Context
 * -------------------------------------------*/
export const CarouselContext = createContext<{
    onCardClose: ( index: number ) => void;
    currentIndex: number;
}>( {
    onCardClose: () => { },
    currentIndex: 0,
} );

/* ---------------------------------------------
 * Carousel
 * -------------------------------------------*/
export const Carousel = ( {
    items,
    initialScroll = 0,
}: CarouselProps ) =>
{
    const carouselRef = useRef<HTMLDivElement>( null );
    const [ canScrollLeft, setCanScrollLeft ] = useState( false );
    const [ canScrollRight, setCanScrollRight ] = useState( true );
    const [ currentIndex, setCurrentIndex ] = useState( 0 );

    useEffect( () =>
    {
        if ( carouselRef.current )
        {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [ initialScroll ] );

    const checkScrollability = () =>
    {
        if ( !carouselRef.current ) return;
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setCanScrollLeft( scrollLeft > 0 );
        setCanScrollRight( scrollLeft < scrollWidth - clientWidth );
    };

    const scrollLeft = () =>
    {
        carouselRef.current?.scrollBy( { left: -320, behavior: "smooth" } );
    };

    const scrollRight = () =>
    {
        carouselRef.current?.scrollBy( { left: 320, behavior: "smooth" } );
    };

    const handleCardClose = ( index: number ) =>
    {
        if ( !carouselRef.current ) return;

        const isMobile = window.innerWidth < 768;
        const cardWidth = isMobile ? 230 : 384;
        const gap = isMobile ? 4 : 8;

        carouselRef.current.scrollTo( {
            left: ( cardWidth + gap ) * ( index + 1 ),
            behavior: "smooth",
        } );

        setCurrentIndex( index );
    };

    return (
        <CarouselContext.Provider
            value={ { onCardClose: handleCardClose, currentIndex } }
        >
            <div className="relative w-full">
                {/* Scroll Area */ }
                <div
                    ref={ carouselRef }
                    onScroll={ checkScrollability }
                    className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 md:py-20 [scrollbar-width:none]"
                >
                    <div
                        className={ cn(
                            "flex flex-row gap-4 pl-4",
                            "mx-auto max-w-7xl",
                        ) }
                    >
                        { items.map( ( item, index ) => (
                            <motion.div
                                key={ `carousel-card-${ index }` }
                                initial={ { opacity: 0, y: 24 } }
                                animate={ {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: index * 0.15,
                                        ease: "easeOut",
                                    },
                                } }
                                className="rounded-3xl last:pr-[30%]"
                            >
                                { item }
                            </motion.div>
                        ) ) }
                    </div>
                </div>

                {/* Controls */ }
                <div className="mr-10 flex justify-end gap-2">
                    <button
                        onClick={ scrollLeft }
                        disabled={ !canScrollLeft }
                        aria-label="Scroll left"
                        className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-40"
                    >
                        <LuArrowLeft className="h-5 w-5 text-gray-600" />
                    </button>

                    <button
                        onClick={ scrollRight }
                        disabled={ !canScrollRight }
                        aria-label="Scroll right"
                        className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-40"
                    >
                        <LuArrowRight className="h-5 w-5 text-gray-600" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

/* ---------------------------------------------
 * Card
 * -------------------------------------------*/
export const Card = ( {
    card,
    index,
}: {
    card: CardType;
    index: number;
} ) =>
{
    const [ open, setOpen ] = useState( false );
    const containerRef = useRef<HTMLDivElement>( null );
    const { onCardClose } = useContext( CarouselContext );

    useEffect( () =>
    {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () =>
        {
            document.body.style.overflow = "auto";
        };
    }, [ open ] );

    useOutsideClick( containerRef, () => open && handleClose() );

    const handleClose = () =>
    {
        setOpen( false );
        onCardClose( index );
    };

    return (
        <>
            <AnimatePresence>
                { open && (
                    <div className="fixed inset-0 z-50">
                        {/* Backdrop */ }
                        <motion.div
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                            className="fixed inset-0 bg-black/80 backdrop-blur-lg"
                        />

                        {/* Modal */ }
                        <motion.div
                            ref={ containerRef }
                            initial={ { opacity: 0, y: 24 } }
                            animate={ { opacity: 1, y: 0 } }
                            exit={ { opacity: 0, y: 24 } }
                            transition={ { duration: 0.3, ease: "easeOut" } }
                            className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-6 md:p-10"
                        >
                            <button
                                onClick={ handleClose }
                                aria-label="Close"
                                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black"
                            >
                                <LuX className="h-5 w-5 text-white" />
                            </button>

                            <p className="text-sm font-bold text-slate-500">
                                { card.category }
                            </p>

                            <h3 className="mt-3 text-2xl md:text-4xl font-bold text-slate-900">
                                { card.title }
                            </h3>

                            <div className="py-10">
                                { card.content }
                            </div>
                        </motion.div>
                    </div>
                ) }
            </AnimatePresence>

            {/* Card Preview */ }
            <motion.button
                onClick={ () => setOpen( true ) }
                className="relative flex h-80 w-56 md:h-[40rem] md:w-96 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100"
            >
                <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

                <div className="relative z-40 p-8 text-left">
                    <p className="text-sm font-medium text-white">
                        { card.category }
                    </p>
                    <p className="mt-2 max-w-xs text-xl md:text-3xl font-semibold text-white">
                        { card.title }
                    </p>
                </div>

                <BlurImage
                    src={ card.src }
                    alt={ card.title }
                    fill
                    className="absolute inset-0 z-10 object-cover"
                />
            </motion.button>
        </>
    );
};

/* ---------------------------------------------
 * BlurImage
 * -------------------------------------------*/
export const BlurImage = ( {
    height,
    width,
    src,
    className,
    alt,
    ...rest
}: ImageProps ) =>
{
    const [ isLoading, setLoading ] = useState( true );

    return (
        <Image
            className={ cn(
                "h-full w-full transition duration-300",
                isLoading ? "blur-sm scale-105" : "blur-0 scale-100",
                className,
            ) }
            onLoad={ () => setLoading( false ) }
            src={ src as string }
            width={ width }
            height={ height }
            loading="lazy"
            decoding="async"
            alt={ alt ?? "" }
            { ...rest }
        />
    );
};
