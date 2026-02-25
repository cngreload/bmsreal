// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/home/HeroSection";
import DualFeatureCard from "@/components/home/DualFeatureCard";
import TechStrip from "@/components/home/TechStrip";
import WorldsGrid from "@/components/home/WorldsGrid";
import WitSection from "@/components/home/WitSection";
import ProductBands from "@/components/home/ProductBands";
import NewsPreview from "@/components/news/NewsPreview";
import { Section } from "@/components/layout/Section";
import FeaturesGrid from "@/components/home/Features";

export const metadata: Metadata = {
  title: "بارمان | تکنولوژی برای زندگی امن‌تر و هوشمندتر",
  description:
    "توسعه سامانه‌های بومی پایش، کنترل و تصمیم‌سازی هوشمند. زیرساخت‌های بومی که می‌توانید به آن‌ها تکیه کنید.",
};

export default function HomePage ()
{
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white antialiased">
      {/* CHAPTER 1: HERO - Full Viewport Authority */ }
      <Hero />

      {/* CHAPTER 2: THE BENTO GRID (TECHNICAL MOAT) */ }
      <Section variant="white" spacing="large" id="technical-moat">
        <header className="mb-12 space-y-6 text-right lg:mb-16 lg:text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 shadow-sm">
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              Infrastructure_Governance / v4.2
            </span>
          </div>
          <h2 className="text-3xl font-black leading-[1.2] tracking-tightest text-slate-950 md:text-5xl lg:text-6xl">
            حاکمیت داده و <span className="text-bms-primary">تکنولوژی بومی</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-slate-500 md:text-lg">
            تلفیق مهندسی سخت‌افزار و معماری نرم‌افزار برای خلق پایداری مطلق در عملیات‌های حساس صنعتی و درمانی.
          </p>
        </header>

        {/* Using the massive new 3D Bento Grid */ }
        <div className="relative z-30">
          <FeaturesGrid />
        </div>
      </Section>

      {/* CHAPTER 3: STRATEGIC ASSETS
          Desktop: High-impact Dual Cards.
          Mobile: Content is hidden here and served via ProductBands for better ergonomics.
      */}
      <Section
        variant="subtle"
        spacing="large"
        id="primary-platforms"
        className="hidden lg:block"
      >
        <header className="mb-16 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 shadow-sm">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-bms-primary" />
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              Strategic_Solutions / Global_Scale
            </span>
          </div>
          <h2 className="text-4xl font-black leading-[1.2] tracking-tightest text-slate-950 md:text-6xl">
            پیشگام در هوشمندسازی <br />
            <span className="text-bms-primary">زیرساخت‌های ملی</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-slate-500 md:text-lg">
            تجمیع داده‌های میدانی، امنیت پدافندی و تصمیم‌سازی هوشمند در یک اکوسیستم نفوذناپذیر.
          </p>
        </header>

        <DualFeatureCard
          leftCard={ {
            title: "سامانه هوشمند سوخت (ICTS)",
            subtitle:
              "پایش لحظه‌ای، مدیریت هوشمند و امنیت کامل جایگاه‌های CNG با معماری Edge Computing اختصاصی",
            ctaText: "مشاهده مستندات فنی",
            ctaLink: "/cng-automation",
            backgroundImage: "/images/icts-bg.jpg",
            category: "INDUSTRIAL SAFETY",
          } }
          rightCard={ {
            title: "پلتفرم سلامت کلینیکانز",
            subtitle:
              "سیستم یکپارچه مدیریت کلینیک‌های پزشکی با هوش مصنوعی و تحلیل داده‌های سلامت در زمان واقعی",
            ctaText: "آشنایی با پلتفرم",
            ctaLink: "/clinicans",
            backgroundImage: "/ctest.jpg",
            category: "HEALTH TECH",
          } }
          separatorText="BMS"
        />
      </Section>

      {/* CHAPTER 4: PRODUCT PORTFOLIO 
          Serving as the primary information source for Mobile/Tablet.
      */}
      <Section
        variant="white"
        spacing="default"
        id="product-bands"
        className="lg:hidden"
      >
        <ProductBands />
      </Section>

      {/* CHAPTER 5: KNOWLEDGE HUB */ }
      <Section
        variant="subtle"
        spacing="large"
        border
        id="latest-news"
      >
        <NewsPreview />
      </Section>
    </div>
  );
}