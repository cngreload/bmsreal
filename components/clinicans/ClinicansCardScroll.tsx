"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import { CARDS } from "./constants";
import type { CardData } from "./types";
import { cn } from "@/lib/utils";

interface CardProps
{
  data: CardData;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Card = ( { data, index, total, progress }: CardProps ) =>
{
  // We establish perfectly calculated phases.
  const cardStep = 1 / total;
  const start = index * cardStep;
  const end = start + cardStep;

  /* 
    ANIMATION HOLD MATH: 
    15% entry, 70% dead-stop reading hold, 15% exit.
    This generates the absolute stable pause across multiple wheel clicks.
  */
  const transitionZone = cardStep * 0.15;
  const entrance = start + transitionZone;
  const exit = end - transitionZone;

  const opacity = useTransform(
    progress,
    [ start, entrance, exit, end ],
    [ 0, 1, 1, 0 ]
  );

  const scale = useTransform(
    progress,
    [ start, entrance, exit, end ],
    [ 0.9, 1, 1, 1.1 ]
  );

  const y = useTransform(
    progress,
    [ start, entrance, exit, end ],
    [ "30px", "0px", "0px", "-30px" ]
  );

  const blurValue = useTransform(
    progress,
    [ start, entrance, exit, end ],
    [ 10, 0, 0, 10 ]
  );

  const filter = useTransform( blurValue, ( v ) => ( v === 0 ? "none" : `blur(${ v }px)` ) );

  const display = useTransform( progress, ( v ) =>
    v >= start - 0.05 && v <= end + 0.05 ? "flex" : "none"
  );

  return (
    <motion.div
      style={ {
        opacity,
        scale,
        y,
        filter,
        display,
        zIndex: index,
      } }
      className="absolute inset-0 flex items-center justify-center px-4 perspective-1000 sm:px-6"
    >
      <div
        className={ cn(
          "relative flex w-full max-w-3xl flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-2xl backdrop-blur-xl transition-colors duration-500",
          "aspect-[4/5] p-5 sm:aspect-[4/3] sm:p-8 md:aspect-[16/9] md:p-12"
        ) }
      >
        {/* Subtle Ambient Glow */ }
        <div
          className="pointer-events-none absolute -right-[10%] -top-[10%] h-[40%] w-[40%] rounded-full opacity-20 mix-blend-screen blur-[80px]"
          style={ { backgroundColor: data.color } }
          aria-hidden="true"
        />

        {/* --- Top Row: Profile Header --- */ }
        <div className="relative z-10 flex w-full shrink-0 items-start justify-between border-b border-white/5 pb-4 sm:pb-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5"
              style={ { boxShadow: `0 0 15px ${ data.color }15` } }
              aria-hidden="true"
            >
              <div
                className="h-2 w-2 animate-pulse rounded-full"
                style={ { backgroundColor: data.color } }
              />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
              Expert Profile
            </span>
          </div>
          <span className="font-mono text-xl text-white/40 sm:text-2xl">
            0{ data.id }
          </span>
        </div>

        {/* --- Middle: The Content --- */ }
        <div className="relative z-10 flex flex-1 flex-col justify-center space-y-4 py-2 text-left sm:py-4" dir="ltr">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl">
            { data.title }
          </h2>
          <div className="h-1 w-12 shrink-0 rounded-full bg-white/10" aria-hidden="true" />
          <p className="max-w-xl text-sm font-light leading-relaxed text-slate-300 sm:text-base md:text-xl">
            { data.hook }
          </p>
        </div>

        {/* --- Bottom: Tags & Action --- */ }
        <div
          className="relative z-10 mt-auto flex shrink-0 flex-col gap-5 border-t border-white/5 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-6"
          dir="ltr"
        >
          {/* Tags Wrap safely: Reduced typography on phones guarantees perfect block fits */ }
          <div className="flex w-full flex-wrap gap-1.5 sm:w-auto sm:gap-2 lg:gap-3">
            { data.tags.map( ( tag, i ) => (
              <span
                key={ i }
                className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[9px] font-medium text-slate-300 sm:px-3 sm:py-1.5 sm:text-[10px] md:text-xs"
              >
                { tag }
              </span>
            ) ) }
          </div>

          <div
            className="group relative inline-flex w-fit shrink-0 cursor-default items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-transform"
          >
            <span>View Profile</span>
            <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ClinicansCardScroll ()
{
  const containerRef = useRef<HTMLDivElement>( null );

  const { scrollYProgress } = useScroll( {
    target: containerRef,
    offset: [ "start start", "end end" ],
  } );

  return (
    // Fixed wrapper. Controls its exact total scale matching 100vh intervals natively.
    <section
      id="specialists"
      ref={ containerRef }
      className="relative z-10 w-full bg-slate-950"
      style={ { height: `${ CARDS.length * 100 }vh` } }
    >
      <div className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden">

        {/* Background Atmosphere */ }
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-black opacity-80" />

          { [ ...Array( 15 ) ].map( ( _, i ) => (
            <div
              key={ i }
              className="absolute rounded-full bg-white opacity-10"
              style={ {
                top: `${ Math.random() * 100 }%`,
                left: `${ Math.random() * 100 }%`,
                width: `${ Math.random() * 2 }px`,
                height: `${ Math.random() * 2 }px`,
              } }
            />
          ) ) }
        </div>

        {/* Cards Container */ }
        <div className="relative flex h-full w-full max-w-[1920px] items-center justify-center">
          { CARDS.map( ( card, i ) => (
            <Card
              key={ card.id }
              data={ card }
              index={ i }
              total={ CARDS.length }
              progress={ scrollYProgress }
            />
          ) ) }
        </div>

        {/* Progress Bar Tracker */ }
        <div className="absolute right-4 top-1/2 z-50 hidden h-32 w-0.5 -translate-y-1/2 rounded-full bg-white/5 md:block lg:right-10" aria-hidden="true">
          <motion.div
            className="w-full rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            style={ {
              height: useTransform( scrollYProgress, [ 0, 1 ], [ "0%", "100%" ] ),
              transformOrigin: "top"
            } }
          />
        </div>

      </div>
    </section>
  );
}