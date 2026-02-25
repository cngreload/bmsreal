import {
  LuGlobe,
  LuCpu,
  LuTrendingUp,
  LuBrainCircuit,
} from "react-icons/lu";

export type ClinicansTabId =
  | "digital"
  | "operations"
  | "growth"
  | "ai";

export interface ClinicansTab {
  id: ClinicansTabId;
  label: string;
  subtitle: string;

  title: string;
  description: string;

  icon: React.ComponentType<{ className?: string }>;

  ctaText: string;
  ctaLink: string;

  entityType: "SoftwareApplication" | "Service";
  lastUpdated: string;
  relatedKeywords: string[];

  accent: string; // emerald | blue | violet | rose
}

export const CLINICANS_TABS: ClinicansTab[] = [
  {
    id: "digital",
    label: "حضور دیجیتال",
    subtitle: "Brand & Visibility",
    title: "حضور دیجیتال و برندینگ حرفه‌ای مراکز درمانی",
    description:
      "زیرساخت یکپارچه برای وب‌سایت پزشکی، معرفی خدمات، محتوای تخصصی، سئو سلامت و مدیریت امن حضور آنلاین بدون نیاز به دانش فنی.",
    icon: LuGlobe,
    ctaText: "مشاهده راهکار حضور دیجیتال",
    ctaLink: "/clinicans/digital-builder",
    entityType: "SoftwareApplication",
    lastUpdated: "2024-01-20",
    relatedKeywords: ["وب‌سایت پزشکی", "سئو سلامت", "برندینگ دیجیتال"],
    accent: "blue",
  },
  {
    id: "operations",
    label: "عملیات کلینیک",
    subtitle: "Core Platform",
    title: "اتوماسیون و توانمندسازی عملیاتی",
    description:
      "پرونده الکترونیک سلامت، نوبت‌دهی، CRM، مالی و داشبورد مدیریتی — همه در یک هسته عملیاتی امن و مقیاس‌پذیر.",
    icon: LuCpu,
    ctaText: "بررسی اتوماسیون کلینیک",
    ctaLink: "/clinicans/all-in-one",
    entityType: "SoftwareApplication",
    lastUpdated: "2024-01-18",
    relatedKeywords: ["EHR", "اتوماسیون درمان"],
    accent: "emerald",
  },
  {
    id: "growth",
    label: "رشد و وفاداری",
    subtitle: "Patient Growth",
    title: "رشد پایدار و جذب هوشمند مراجع",
    description:
      "کمپین‌های هدفمند، سیستم وفاداری و رفرال برای افزایش مراجعه مجدد و کاهش هزینه‌های تبلیغاتی.",
    icon: LuTrendingUp,
    ctaText: "مشاهده راهکارهای رشد",
    ctaLink: "/clinicans/marketing",
    entityType: "Service",
    lastUpdated: "2024-01-15",
    relatedKeywords: ["CRM پزشکی", "بازاریابی سلامت"],
    accent: "rose",
  },
  {
    id: "ai",
    label: "هوش مصنوعی",
    subtitle: "Decision Intelligence",
    title: "هوشمندسازی تصمیم‌گیری با هوش مصنوعی",
    description:
      "تحلیل داده‌های درمانی، درآمدی و تصویربرداری پزشکی برای کاهش خطا و افزایش کیفیت درمان.",
    icon: LuBrainCircuit,
    ctaText: "آشنایی با هوش مصنوعی",
    ctaLink: "/clinicans/health-ai",
    entityType: "SoftwareApplication",
    lastUpdated: "2024-01-10",
    relatedKeywords: ["هوش مصنوعی پزشکی"],
    accent: "violet",
  },
];
