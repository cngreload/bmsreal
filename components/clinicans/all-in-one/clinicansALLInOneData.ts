export type ClinicansModule = {
  slug: string;
  title: string;
  subtitle: string;
  iconSrc: string;
  enTitle: string;
  enDescription: string;
  keywords: readonly string[];
};

export type ClinicansCategory = {
  id: string;
  title: string;
  description: string;
  enTitle: string;
  enDescription: string;
  modules: readonly ClinicansModule[];
};

export const CLINICANS_ALL_IN_ONE: readonly ClinicansCategory[] = [
  {
    id: "frontdesk",
    title: "نوبت‌دهی و پذیرش",
    description: "مدیریت جریان ورود بیماران از اولین تماس تا آغاز ویزیت، کاهش No-Show و بهینه‌سازی ظرفیت کلینیک",
    enTitle: "Appointment & Patient Flow Management",
    enDescription: "Complete patient journey management from first contact to visit start",
    modules: [
      {
        slug: "appointments",
        title: "نوبت‌دهی آنلاین",
        subtitle: "رزرو سریع نوبت و مدیریت ظرفیت",
        iconSrc: "/clinicans/modules/appointments/icon.svg",
        enTitle: "Online Appointment Scheduling",
        enDescription: "Fast online booking and capacity management",
        keywords: ["online scheduling", "appointment booking", "clinic management"],
      },
      {
        slug: "calendar",
        title: "تقویم پزشکان",
        subtitle: "برنامه‌ریزی شیفت‌ها و زمان‌های آزاد",
        iconSrc: "/clinicans/modules/calendar/icon.svg",
        enTitle: "Doctor Calendar Management",
        enDescription: "Shift planning and availability management",
        keywords: ["doctor calendar", "shift management", "availability"],
      },
      {
        slug: "reception",
        title: "پذیرش و صف",
        subtitle: "گردش کار پذیرش، نوبت حضوری و صف انتظار",
        iconSrc: "/clinicans/modules/reception/icon.svg",
        enTitle: "Reception & Queue Management",
        enDescription: "Workflow automation for patient intake and waiting lists",
        keywords: ["reception management", "queue system", "patient flow"]
      },
      {
        slug: "waitlist",
        title: "لیست انتظار",
        subtitle: "پر کردن خودکار اسلات‌های خالی و لغوشده",
        iconSrc: "/clinicans/modules/waitlist/icon.svg",
        enTitle: "Smart Waitlist Management",
        enDescription: "Automatic filling of cancelled and empty slots",
        keywords: ["waitlist", "cancellation management", "slot optimization"]
      },
      {
        slug: "reminders",
        title: "یادآوری پیامکی",
        subtitle: "کاهش No-Show با پیامک/واتساپ",
        iconSrc: "/clinicans/modules/reminders/icon.svg",
        enTitle: "SMS & WhatsApp Reminders",
        enDescription: "Reduce no-shows with automated SMS/WhatsApp reminders",
        keywords: ["SMS reminders", "appointment reminders", "no-show reduction"]
      },
      {
        slug: "rooms",
        title: "مدیریت اتاق‌ها",
        subtitle: "هماهنگی اتاق‌ها، تجهیزات و ظرفیت",
        iconSrc: "/clinicans/modules/rooms/icon.svg",
        enTitle: "Room & Equipment Management",
        enDescription: "Room, equipment and capacity coordination",
        keywords: ["room management", "equipment scheduling", "resource optimization"]
      }
    ]
  },
  {
    id: "clinical",
    title: "پرونده و درمان",
    description: "ثبت، پیگیری و مدیریت فرآیند درمان و سوابق بیماران به صورت جامع و ساختاریافته",
    enTitle: "Electronic Health Records & Clinical Management",
    enDescription: "Comprehensive electronic health records and treatment process management",
    modules: [
      {
        slug: "ehr",
        title: "پرونده الکترونیک",
        subtitle: "نمای کامل مراجع، سوابق و یادداشت‌ها",
        iconSrc: "/clinicans/modules/ehr/icon.svg",
        enTitle: "Electronic Health Records",
        enDescription: "Complete patient profile, records and notes",
        keywords: ["EHR", "electronic health records", "patient records"]
      },
      {
        slug: "history",
        title: "سوابق درمانی",
        subtitle: "ثبت خدمات، اقدامات و روند درمان",
        iconSrc: "/clinicans/modules/history/icon.svg",
        enTitle: "Medical History Tracking",
        enDescription: "Service logging, procedures and treatment progress",
        keywords: ["medical history", "treatment tracking", "progress notes"]
      },
      {
        slug: "files",
        title: "فایل‌ها و تصاویر",
        subtitle: "آپلود، آرشیو و دسترسی سریع به اسناد",
        iconSrc: "/clinicans/modules/files/icon.svg",
        enTitle: "Document & Image Management",
        enDescription: "Upload, archive and quick access to medical documents",
        keywords: ["document management", "medical images", "file storage"]
      },
      {
        slug: "checklists",
        title: "پروتکل‌ها و چک‌لیست‌ها",
        subtitle: "استانداردسازی خدمات و کنترل کیفیت",
        iconSrc: "/clinicans/modules/checklists/icon.svg",
        enTitle: "Clinical Protocols & Checklists",
        enDescription: "Service standardization and quality control protocols",
        keywords: ["clinical protocols", "checklists", "quality control"]
      },
      {
        slug: "prescription",
        title: "دستور و نسخه",
        subtitle: "ثبت دستورات و پیگیری درمان",
        iconSrc: "/clinicans/modules/prescription/icon.svg",
        enTitle: "E-Prescription & Treatment Orders",
        enDescription: "Treatment order registration and follow-up",
        keywords: ["e-prescription", "treatment orders", "digital prescriptions"]
      },
      {
        slug: "televisit",
        title: "ویزیت آنلاین ویدیویی",
        subtitle: "مشاوره و پیگیری از راه دور با ویدیو",
        iconSrc: "/clinicans/modules/televisit/icon.svg",
        enTitle: "Video Telemedicine Consultations",
        enDescription: "Remote consultation and follow-up via video",
        keywords: ["telemedicine", "video consultations", "remote visits"]
      }
    ]
  },
  {
    id: "online-consultation",
    title: "مشاوره و ویزیت آنلاین",
    description: "سیستم کامل مشاوره آنلاین، چت متنی و صوتی، و ویزیت از راه دور با تمام امکانات",
    enTitle: "Advanced Online Consultation & Telemedicine",
    enDescription: "Complete online consultation system with text, audio, and video capabilities",
    modules: [
      {
        slug: "text-chat",
        title: "چت متنی آنلاین",
        subtitle: "مشاوره متنی زنده با پزشکان و پشتیبانی",
        iconSrc: "/clinicans/modules/text-chat/icon.svg",
        enTitle: "Real-time Text Chat",
        enDescription: "Live text consultation with doctors and support staff",
        keywords: ["text chat", "online consultation", "live chat"]
      },
      {
        slug: "audio-consultation",
        title: "مشاوره صوتی آنلاین",
        subtitle: "مشاوره صوتی بدون نیاز به ویدیو",
        iconSrc: "/clinicans/modules/audio-consultation/icon.svg",
        enTitle: "Audio Consultation System",
        enDescription: "Audio-only consultation without video requirement",
        keywords: ["audio consultation", "voice chat", "telephone consultation"]
      },
      {
        slug: "video-consultation",
        title: "ویزیت ویدیویی حرفه‌ای",
        subtitle: "ویزیت آنلاین با کیفیت بالا و امکانات کامل",
        iconSrc: "/clinicans/modules/video-consultation/icon.svg",
        enTitle: "Professional Video Consultation",
        enDescription: "High-quality online visits with complete features",
        keywords: ["video consultation", "telemedicine", "virtual visits"]
      },
      {
        slug: "file-sharing",
        title: "اشتراک‌گذاری فایل",
        subtitle: "ارسال و دریافت فایل در حین مشاوره",
        iconSrc: "/clinicans/modules/file-sharing/icon.svg",
        enTitle: "Secure File Sharing",
        enDescription: "Send and receive files during consultations",
        keywords: ["file sharing", "document sharing", "secure transfer"]
      },
      {
        slug: "prescription-online",
        title: "نسخه‌نویسی آنلاین",
        subtitle: "صدور نسخه الکترونیک در مشاوره آنلاین",
        iconSrc: "/clinicans/modules/prescription-online/icon.svg",
        enTitle: "Online Prescription Writing",
        enDescription: "Issue electronic prescriptions during online consultations",
        keywords: ["online prescriptions", "e-prescription", "digital prescription"]
      },
      {
        slug: "consultation-records",
        title: "آرشیو مشاوره‌ها",
        subtitle: "ذخیره و دسترسی به تاریخچه مشاوره‌ها",
        iconSrc: "/clinicans/modules/consultation-records/icon.svg",
        enTitle: "Consultation Archives",
        enDescription: "Storage and access to consultation history",
        keywords: ["consultation records", "visit history", "telemedicine archives"]
      }
    ]
  },
  {
    id: "website-builder",
    title: "سازنده وبسایت کلینیک",
    description: "سازنده وبسایت درون پلتفرم با قالب‌های آماده و امکان سفارشی‌سازی کامل",
    enTitle: "Clinic Website Builder",
    enDescription: "Built-in website builder with ready templates and full customization",
    modules: [
      {
        slug: "drag-drop-builder",
        title: "سازنده کشیدن و رها کردن",
        subtitle: "طراحی سایت بدون کدنویسی با کشیدن و رها کردن",
        iconSrc: "/clinicans/modules/drag-drop-builder/icon.svg",
        enTitle: "Drag & Drop Website Builder",
        enDescription: "Design websites without coding using drag and drop",
        keywords: ["drag and drop", "website builder", "no-code"]
      },
      {
        slug: "clinic-templates",
        title: "قالب‌های آماده کلینیک",
        subtitle: "ده‌ها قالب اختصاصی برای انواع کلینیک‌ها",
        iconSrc: "/clinicans/modules/clinic-templates/icon.svg",
        enTitle: "Pre-designed Clinic Templates",
        enDescription: "Dozens of specialized templates for various clinic types",
        keywords: ["website templates", "clinic templates", "medical templates"]
      },
      {
        slug: "seo-tools",
        title: "ابزارهای سئو",
        subtitle: "بهینه‌سازی سایت برای موتورهای جستجو",
        iconSrc: "/clinicans/modules/seo-tools/icon.svg",
        enTitle: "SEO Optimization Tools",
        enDescription: "Website optimization for search engines",
        keywords: ["SEO tools", "search optimization", "website SEO"]
      },
      {
        slug: "mobile-responsive",
        title: "سازگاری موبایل",
        subtitle: "سایت کاملاً واکنش‌گرا برای موبایل و تبلت",
        iconSrc: "/clinicans/modules/mobile-responsive/icon.svg",
        enTitle: "Mobile Responsive Design",
        enDescription: "Fully responsive website for mobile and tablet",
        keywords: ["mobile responsive", "responsive design", "mobile optimization"]
      },
      {
        slug: "booking-integration",
        title: "یکپارچه‌سازی نوبت‌دهی",
        subtitle: "اتصال مستقیم سیستم نوبت‌دهی به سایت",
        iconSrc: "/clinicans/modules/booking-integration/icon.svg",
        enTitle: "Appointment Booking Integration",
        enDescription: "Direct connection of appointment system to website",
        keywords: ["booking integration", "appointment widget", "online booking"]
      },
      {
        slug: "analytics-dashboard",
        title: "داشبورد تحلیل ترافیک",
        subtitle: "تحلیل بازدیدکنندگان و عملکرد سایت",
        iconSrc: "/clinicans/modules/analytics-dashboard/icon.svg",
        enTitle: "Website Analytics Dashboard",
        enDescription: "Visitor analysis and website performance tracking",
        keywords: ["website analytics", "traffic analysis", "performance tracking"]
      }
    ]
  },
  {
    id: "finance",
    title: "مالی و درآمد",
    description: "مدیریت درآمد، هزینه‌ها، تسویه‌حساب و شفافیت کامل مالی برای تصمیم‌گیری بهتر",
    enTitle: "Financial Management & Revenue Optimization",
    enDescription: "Income, expense, settlement management and full financial transparency",
    modules: [
      {
        slug: "invoicing",
        title: "صورتحساب و فاکتور",
        subtitle: "فاکتور، بدهی/بستانکاری و گزارش‌ها",
        iconSrc: "/clinicans/modules/invoicing/icon.svg",
        enTitle: "Automated Invoicing & Billing",
        enDescription: "Automated invoice generation and billing management",
        keywords: ["invoicing", "billing automation", "invoice management"]
      },
      {
        slug: "payments",
        title: "صندوق و پرداخت",
        subtitle: "پرداخت حضوری/آنلاین و رسیدها",
        iconSrc: "/clinicans/modules/payments/icon.svg",
        enTitle: "Payment Processing & POS",
        enDescription: "In-person/online payment processing and receipts",
        keywords: ["payment processing", "POS system", "payment gateway"]
      },
      {
        slug: "packages",
        title: "پکیج‌ها و پلن‌ها",
        subtitle: "فروش بسته خدمات و مدیریت اعتبار",
        iconSrc: "/clinicans/modules/packages/icon.svg",
        enTitle: "Treatment Packages & Plans",
        enDescription: "Service package sales and credit management",
        keywords: ["treatment packages", "service bundles", "package management"]
      },
      {
        slug: "discounts",
        title: "کد تخفیف",
        subtitle: "کمپین تخفیف و سیاست قیمت‌گذاری",
        iconSrc: "/clinicans/modules/discounts/icon.svg",
        enTitle: "Discount & Promotion Management",
        enDescription: "Discount campaigns and pricing strategies",
        keywords: ["discount management", "promotions", "pricing strategies"]
      },
      {
        slug: "settlements",
        title: "تسویه پزشکان",
        subtitle: "سهم پزشک/کلینیک و تسویه دوره‌ای",
        iconSrc: "/clinicans/modules/settlements/icon.svg",
        enTitle: "Doctor Settlements & Commission",
        enDescription: "Doctor/clinic share and periodic settlements",
        keywords: ["doctor settlements", "commission", "payment distribution"]
      },
      {
        slug: "finance-reports",
        title: "گزارش مالی",
        subtitle: "درآمد، هزینه، سود و روندها",
        iconSrc: "/clinicans/modules/finance-reports/icon.svg",
        enTitle: "Financial Analytics & Reports",
        enDescription: "Income, expense, profit and trend analysis",
        keywords: ["financial reports", "revenue analytics", "profit analysis"]
      }
    ]
  },
  {
    id: "ops",
    title: "عملیات کلینیک",
    description: "مدیریت منابع، تجهیزات، پرسنل و فرآیندهای عملیاتی برای کارایی بیشتر و کاهش هزینه‌ها",
    enTitle: "Clinic Operations & Resource Management",
    enDescription: "Resource, equipment, staff and operational process management",
    modules: [
      {
        slug: "inventory-management",
        title: "مدیریت انبار و مواد مصرفی",
        subtitle: "پیگیری موجودی، سفارش‌دهی خودکار و هشدارهای کمبود",
        iconSrc: "/clinicans/modules/inventory/icon.svg",
        enTitle: "Inventory & Supply Chain Management",
        enDescription: "Stock tracking, automatic ordering and shortage alerts",
        keywords: ["inventory management", "supply chain", "stock control"]
      },
      {
        slug: "equipment-maintenance",
        title: "نگهداری تجهیزات",
        subtitle: "برنامه‌ریزی تعمیرات، سرویس‌های دوره‌ای و تاریخچه دستگاه‌ها",
        iconSrc: "/clinicans/modules/maintenance/icon.svg",
        enTitle: "Equipment Maintenance & Service Tracking",
        enDescription: "Repair planning, periodic services and equipment history",
        keywords: ["equipment maintenance", "service tracking", "preventive maintenance"]
      },
      {
        slug: "procurement",
        title: "تأمین و خرید",
        subtitle: "سفارش خرید، مدیریت تامین‌کنندگان و پیگیری رسیدها",
        iconSrc: "/clinicans/modules/procurement/icon.svg",
        enTitle: "Procurement & Vendor Management",
        enDescription: "Purchase orders, supplier management and receipt tracking",
        keywords: ["procurement", "vendor management", "purchase orders"]
      },
      {
        slug: "multi-branch",
        title: "مدیریت چند شعبه",
        subtitle: "کنترل متمرکز، گزارش‌گیری یکپارچه و تخصیص منابع",
        iconSrc: "/clinicans/modules/branches/icon.svg",
        enTitle: "Multi-Branch Management System",
        enDescription: "Centralized control, unified reporting and resource allocation",
        keywords: ["multi-branch", "clinic chain", "centralized management"]
      },
      {
        slug: "role-management",
        title: "نقش‌ها و دسترسی‌ها",
        subtitle: "سطوح دسترسی دقیق، مجوزهای پرسنل و گزارش فعالیت",
        iconSrc: "/clinicans/modules/roles/icon.svg",
        enTitle: "Role-Based Access Control",
        enDescription: "Precise access levels, staff permissions and activity reporting",
        keywords: ["access control", "role management", "permissions"]
      },
      {
        slug: "workflow-automation",
        title: "اتوماسیون گردش کار",
        subtitle: "خودکارسازی فرآیندهای تکراری و بهبود کارایی",
        iconSrc: "/clinicans/modules/automation/icon.svg",
        enTitle: "Workflow Automation & Process Optimization",
        enDescription: "Automation of repetitive processes and efficiency improvement",
        keywords: ["workflow automation", "process optimization", "automation"]
      }
    ]
  },
  {
    id: "growth",
    title: "بازاریابی و رشد",
    description: "جذب بیمار جدید، وفادارسازی، سیستم معرفی و استراتژی‌های توسعه پایدار کسب‌وکار",
    enTitle: "Clinic Marketing & Patient Growth",
    enDescription: "New patient acquisition, loyalty building, referral system and growth strategies",
    modules: [
      {
        slug: "sms-marketing",
        title: "SMS مارکتینگ",
        subtitle: "ارسال هدفمند پیامک، مدیریت کمپین‌ها و تحلیل نتایج",
        iconSrc: "/clinicans/modules/sms-marketing/icon.svg",
        enTitle: "SMS Marketing Automation",
        enDescription: "Targeted SMS sending, campaign management and result analysis",
        keywords: ["SMS marketing", "text marketing", "mobile marketing"]
      },
      {
        slug: "campaigns",
        title: "کمپین‌های بازاریابی",
        subtitle: "طراحی، اجرا و تحلیل کمپین‌های جذب و بازگشت مشتری",
        iconSrc: "/clinicans/modules/campaigns/icon.svg",
        enTitle: "Marketing Campaign Management",
        enDescription: "Design, execution and analysis of acquisition and retention campaigns",
        keywords: ["marketing campaigns", "campaign management", "ROI tracking"]
      },
      {
        slug: "referral-system",
        title: "سیستم ارجاع و معرفی",
        subtitle: "انگیزه‌دهی به معرف‌ها، ردیابی نتایج و مدیریت پاداش‌ها",
        iconSrc: "/clinicans/modules/referrals/icon.svg",
        enTitle: "Referral & Word-of-Mouth System",
        enDescription: "Incentivizing referrers, tracking results and reward management",
        keywords: ["referral system", "word of mouth", "referral tracking"]
      },
      {
        slug: "loyalty-programs",
        title: "برنامه‌های وفاداری",
        subtitle: "سیستم امتیازدهی، سطح‌بندی و پیشنهادهای شخصی‌سازی شده",
        iconSrc: "/clinicans/modules/loyalty/icon.svg",
        enTitle: "Patient Loyalty Programs",
        enDescription: "Points system, tiering and personalized offers",
        keywords: ["loyalty programs", "patient retention", "rewards system"]
      },
      {
        slug: "patient-feedback",
        title: "نظرسنجی و بازخورد",
        subtitle: "سنجش رضایت بیماران، تحلیل نتایج و بهبود خدمات",
        iconSrc: "/clinicans/modules/surveys/icon.svg",
        enTitle: "Patient Feedback & Satisfaction Surveys",
        enDescription: "Patient satisfaction measurement, result analysis and service improvement",
        keywords: ["patient feedback", "satisfaction surveys", "feedback collection"]
      },
      {
        slug: "ad-integration",
        title: "یکپارچه‌سازی تبلیغات",
        subtitle: "ردیابی کمپین‌های تبلیغاتی، تحلیل ROI و بهینه‌سازی بودجه",
        iconSrc: "/clinicans/modules/ads/icon.svg",
        enTitle: "Ad Campaign Integration & ROI Tracking",
        enDescription: "Ad campaign tracking, ROI analysis and budget optimization",
        keywords: ["ad integration", "ROI tracking", "ad campaign analytics"]
      }
    ]
  },
  {
    id: "analytics",
    title: "گزارش‌گیری و هوش مدیریتی",
    description: "تحلیل داده‌های کلینیک، گزارش‌های مدیریتی پیشرفته و ابزارهای تصمیم‌گیری مبتنی بر داده",
    enTitle: "Advanced Analytics & Business Intelligence",
    enDescription: "Clinic data analysis, advanced management reports and data-driven decision tools",
    modules: [
      {
        slug: "kpi-dashboard",
        title: "داشبورد شاخص‌های کلیدی",
        subtitle: "نمایش لحظه‌ای KPIها، روندها و مقایسه با اهداف",
        iconSrc: "/clinicans/modules/kpi-dashboard/icon.svg",
        enTitle: "Real-time KPI Dashboard",
        enDescription: "Real-time KPI display, trends and goal comparison",
        keywords: ["KPI dashboard", "performance metrics", "real-time analytics"]
      },
      {
        slug: "revenue-analytics",
        title: "تحلیل درآمد و سودآوری",
        subtitle: "شناسایی منابع درآمدی، تحلیل سود هر خدمت و پیش‌بینی مالی",
        iconSrc: "/clinicans/modules/revenue-analysis/icon.svg",
        enTitle: "Revenue & Profitability Analytics",
        enDescription: "Revenue source identification, service profit analysis and financial forecasting",
        keywords: ["revenue analytics", "profitability analysis", "financial forecasting"]
      },
      {
        slug: "doctor-performance",
        title: "تحلیل عملکرد پزشکان",
        subtitle: "مقایسه عملکرد، تحلیل کیفیت خدمات و بهره‌وری زمانی",
        iconSrc: "/clinicans/modules/doctor-performance/icon.svg",
        enTitle: "Doctor Performance Analytics",
        enDescription: "Performance comparison, service quality analysis and time efficiency",
        keywords: ["doctor performance", "physician analytics", "performance metrics"]
      },
      {
        slug: "time-analytics",
        title: "تحلیل زمان‌بندی و ظرفیت",
        subtitle: "شناسایی پیک‌های مراجعه، تحلیل No-Show و بهینه‌سازی برنامه‌ریزی",
        iconSrc: "/clinicans/modules/time-analysis/icon.svg",
        enTitle: "Time & Capacity Analytics",
        enDescription: "Peak visit identification, No-Show analysis and schedule optimization",
        keywords: ["time analytics", "capacity planning", "schedule optimization"]
      },
      {
        slug: "patient-demographics",
        title: "تحلیل جمعیت‌شناسی بیماران",
        subtitle: "درک الگوهای مراجعه، تحلیل مناطق جغرافیایی و رفتار بیماران",
        iconSrc: "/clinicans/modules/patient-demographics/icon.svg",
        enTitle: "Patient Demographics & Behavior Analysis",
        enDescription: "Understanding visit patterns, geographic analysis and patient behavior",
        keywords: ["patient demographics", "behavior analysis", "market segmentation"]
      },
      {
        slug: "custom-reports",
        title: "گزارش‌های سفارشی",
        subtitle: "طراحی گزارش‌های خاص، خروجی اکسل و اشتراک‌گذاری",
        iconSrc: "/clinicans/modules/exports/icon.svg",
        enTitle: "Custom Reporting & Data Export",
        enDescription: "Custom report design, Excel output and sharing",
        keywords: ["custom reports", "data export", "report generation"]
      }
    ]
  },
  {
    id: "advanced-analytics",
    title: "تحلیل پیشرفته و هوش مصنوعی",
    description: "تحلیل‌های پیشرفته، پیش‌بینی روندها و هوش مصنوعی برای تصمیم‌سازی",
    enTitle: "Advanced Analytics & AI-Powered Insights",
    enDescription: "Advanced analysis, trend prediction and AI for decision making",
    modules: [
      {
        slug: "advanced-reports",
        title: "گزارش‌های پیشرفته",
        subtitle: "تحلیل چندبعدی و گزارش‌های سفارشی",
        iconSrc: "/clinicans/modules/advanced-reports/icon.svg",
        enTitle: "Advanced Multi-Dimensional Reports",
        enDescription: "Multi-dimensional analysis and custom reports",
        keywords: ["advanced reports", "multidimensional analysis", "complex reporting"]
      },
      {
        slug: "predictive-analytics",
        title: "تحلیل پیش‌بینی",
        subtitle: "پیش‌بینی روندها و رفتار بیماران",
        iconSrc: "/clinicans/modules/predictive-analytics/icon.svg",
        enTitle: "Predictive Analytics & Forecasting",
        enDescription: "Trend prediction and patient behavior forecasting",
        keywords: ["predictive analytics", "forecasting", "trend prediction"]
      },
      {
        slug: "ai-insights",
        title: "بینش هوش مصنوعی",
        subtitle: "توصیه‌های هوشمند برای بهینه‌سازی",
        iconSrc: "/clinicans/modules/ai-insights/icon.svg",
        enTitle: "AI-Powered Business Insights",
        enDescription: "Smart recommendations for optimization",
        keywords: ["AI insights", "machine learning", "intelligent recommendations"]
      },
      {
        slug: "trend-analysis",
        title: "تحلیل روندها",
        subtitle: "شناسایی الگوها و روندهای کلیدی",
        iconSrc: "/clinicans/modules/trend-analysis/icon.svg",
        enTitle: "Trend Analysis & Pattern Recognition",
        enDescription: "Pattern identification and key trend recognition",
        keywords: ["trend analysis", "pattern recognition", "market trends"]
      },
      {
        slug: "performance-benchmarking",
        title: "بنچمارک عملکرد",
        subtitle: "مقایسه عملکرد با استانداردهای صنعت",
        iconSrc: "/clinicans/modules/performance-benchmarking/icon.svg",
        enTitle: "Performance Benchmarking",
        enDescription: "Performance comparison with industry standards",
        keywords: ["benchmarking", "performance comparison", "industry standards"]
      },
      {
        slug: "data-visualization",
        title: "نمایش داده‌ها",
        subtitle: "گراف‌ها و نمودارهای تعاملی",
        iconSrc: "/clinicans/modules/data-visualization/icon.svg",
        enTitle: "Interactive Data Visualization",
        enDescription: "Interactive graphs and charts for data exploration",
        keywords: ["data visualization", "interactive charts", "data exploration"]
      }
    ]
  },
  {
    id: "customization",
    title: "سفارشی‌سازی و توسعه",
    description: "ابزارهای سفارشی‌سازی پیشرفته و توسعه ماژول‌های اختصاصی برای کلینیک‌ها",
    enTitle: "Customization & Advanced Development",
    enDescription: "Advanced customization tools and custom module development for clinics",
    modules: [
      {
        slug: "module-builder",
        title: "سازنده ماژول",
        subtitle: "ایجاد ماژول‌های سفارشی بدون کدنویسی",
        iconSrc: "/clinicans/modules/module-builder/icon.svg",
        enTitle: "Module Builder & Custom Development",
        enDescription: "Create custom modules without coding",
        keywords: ["module builder", "custom development", "no-code modules"]
      },
      {
        slug: "workflow-designer",
        title: "طراح گردش کار",
        subtitle: "طراحی فرآیندهای اختصاصی کلینیک",
        iconSrc: "/clinicans/modules/workflow-designer/icon.svg",
        enTitle: "Workflow Designer & Process Mapping",
        enDescription: "Design custom clinic processes",
        keywords: ["workflow designer", "process mapping", "workflow automation"]
      },
      {
        slug: "form-builder",
        title: "سازنده فرم",
        subtitle: "ایجاد فرم‌های دلخواه برای جمع‌آوری اطلاعات",
        iconSrc: "/clinicans/modules/form-builder/icon.svg",
        enTitle: "Form Builder & Data Collection",
        enDescription: "Create custom forms for data collection",
        keywords: ["form builder", "data collection", "custom forms"]
      },
      {
        slug: "template-library",
        title: "کتابخانه قالب‌ها",
        subtitle: "قالب‌های آماده برای سریع‌سازی راه‌اندازی",
        iconSrc: "/clinicans/modules/template-library/icon.svg",
        enTitle: "Template Library & Quick Start",
        enDescription: "Ready templates for faster setup",
        keywords: ["template library", "quick start", "pre-built templates"]
      },
      {
        slug: "custom-fields",
        title: "فیلدهای سفارشی",
        subtitle: "افزودن فیلدهای اختصاصی به فرم‌ها و صفحات",
        iconSrc: "/clinicans/modules/custom-fields/icon.svg",
        enTitle: "Custom Fields & Data Structures",
        enDescription: "Add custom fields to forms and pages",
        keywords: ["custom fields", "data structures", "field customization"]
      },
      {
        slug: "api-development",
        title: "توسعه API",
        subtitle: "ایجاد APIهای اختصاصی برای یکپارچه‌سازی",
        iconSrc: "/clinicans/modules/api-development/icon.svg",
        enTitle: "API Development Tools",
        enDescription: "Create custom APIs for integration",
        keywords: ["API development", "custom APIs", "integration tools"]
      }
    ]
  },
  {
    id: "loyalty-referral",
    title: "سیستم وفاداری و معرفی",
    description: "برنامه‌های وفاداری، سیستم معرفی پیشرفته و مدیریت روابط بیماران",
    enTitle: "Loyalty Programs & Referral Marketing",
    enDescription: "Loyalty programs, advanced referral system and patient relationship management",
    modules: [
      {
        slug: "advanced-loyalty",
        title: "برنامه وفاداری پیشرفته",
        subtitle: "امتیازدهی، سطح‌بندی و پاداش‌های هوشمند",
        iconSrc: "/clinicans/modules/advanced-loyalty/icon.svg",
        enTitle: "Advanced Loyalty Programs",
        enDescription: "Points system, tiering and smart rewards",
        keywords: ["loyalty programs", "patient retention", "rewards system"]
      },
      {
        slug: "smart-referral",
        title: "سیستم معرفی هوشمند",
        subtitle: "ردیابی معرفی‌ها و انگیزه‌دهی به معرف‌ها",
        iconSrc: "/clinicans/modules/smart-referral/icon.svg",
        enTitle: "Smart Referral Tracking System",
        enDescription: "Referral tracking and referrer motivation",
        keywords: ["referral system", "word of mouth", "referral tracking"]
      },
      {
        slug: "customer-relationship",
        title: "مدیریت روابط بیماران",
        subtitle: "پیگیری ارتباط و تاریخچه تعاملات",
        iconSrc: "/clinicans/modules/customer-relationship/icon.svg",
        enTitle: "Patient Relationship Management",
        enDescription: "Communication tracking and interaction history",
        keywords: ["patient relationship", "CRM", "interaction tracking"]
      },
      {
        slug: "reward-programs",
        title: "برنامه‌های پاداش",
        subtitle: "طرح‌های تشویقی و برنامه‌های ویژه",
        iconSrc: "/clinicans/modules/reward-programs/icon.svg",
        enTitle: "Reward Programs & Incentives",
        enDescription: "Incentive plans and special programs",
        keywords: ["reward programs", "incentives", "special offers"]
      },
      {
        slug: "retention-tools",
        title: "ابزارهای حفظ بیمار",
        subtitle: "استراتژی‌های کاهش ریزش بیماران",
        iconSrc: "/clinicans/modules/retention-tools/icon.svg",
        enTitle: "Patient Retention Tools",
        enDescription: "Strategies to reduce patient churn",
        keywords: ["patient retention", "churn reduction", "retention strategies"]
      },
      {
        slug: "referral-analytics",
        title: "تحلیل سیستم معرفی",
        subtitle: "گزارش‌گیری از عملکرد سیستم معرفی",
        iconSrc: "/clinicans/modules/referral-analytics/icon.svg",
        enTitle: "Referral Performance Analytics",
        enDescription: "Performance reporting for referral system",
        keywords: ["referral analytics", "performance tracking", "referral ROI"]
      }
    ]
  },
  {
    id: "integrations",
    title: "یکپارچه‌سازی",
    description: "اتصال به سرویس‌های دیگر، APIهای پیشرفته و شخصی‌سازی سیستم برای نیازهای خاص",
    enTitle: "Integration & Customization Platform",
    enDescription: "Connection to other services, advanced APIs and system customization",
    modules: [
      {
        slug: "api-integration",
        title: "API یکپارچه",
        subtitle: "اتصال نرم‌افزارهای دیگر به Clinicans با API کامل",
        iconSrc: "/clinicans/modules/api/icon.svg",
        enTitle: "Comprehensive API Integration",
        enDescription: "Connect other software to Clinicans with full API",
        keywords: ["API integration", "third-party integration", "software integration"]
      },
      {
        slug: "sms-gateway",
        title: "درگاه پیامک و مخابرات",
        subtitle: "اتصال به سامانه‌های پیامکی و سرویس‌های مخابراتی",
        iconSrc: "/clinicans/modules/sms-gateway/icon.svg",
        enTitle: "SMS Gateway & Communication APIs",
        enDescription: "Connection to SMS systems and telecom services",
        keywords: ["SMS gateway", "communication APIs", "telecom integration"]
      },
      {
        slug: "webhooks",
        title: "وب‌هوک‌های هوشمند",
        subtitle: "اتصال رویدادها به سرویس‌های دیگر به صورت لحظه‌ای",
        iconSrc: "/clinicans/modules/webhooks/icon.svg",
        enTitle: "Smart Webhooks & Real-time Integration",
        enDescription: "Connect events to other services in real-time",
        keywords: ["webhooks", "real-time integration", "event triggers"]
      },
      {
        slug: "custom-forms",
        title: "فرم‌های سفارشی",
        subtitle: "ایجاد فرم‌های اختصاصی برای جمع‌آوری اطلاعات خاص",
        iconSrc: "/clinicans/modules/forms/icon.svg",
        enTitle: "Custom Form Builder",
        enDescription: "Create custom forms for specific data collection",
        keywords: ["custom forms", "form builder", "data collection"]
      },
      {
        slug: "plugin-system",
        title: "سیستم افزونه‌ها",
        subtitle: "ماژول‌های قابل توسعه و افزودنی‌های شخصی‌سازی شده",
        iconSrc: "/clinicans/modules/plugins/icon.svg",
        enTitle: "Plugin System & Extensions",
        enDescription: "Extensible modules and customized add-ons",
        keywords: ["plugin system", "extensions", "modular architecture"]
      },
      {
        slug: "security-compliance",
        title: "امنیت و انطباق",
        subtitle: "کنترل دسترسی، رمزنگاری داده و رعایت استانداردها",
        iconSrc: "/clinicans/modules/security/icon.svg",
        enTitle: "Security & Compliance Management",
        enDescription: "Access control, data encryption and standards compliance",
        keywords: ["security", "compliance", "data protection"]
      }
    ]
  }
];