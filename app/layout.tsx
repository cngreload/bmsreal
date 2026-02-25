// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import RootChrome from "@/components/layout/RootChrome";
import Script from "next/script";
import { cn } from "@/lib/utils";

const bmsSans = IBM_Plex_Sans_Arabic( {
  subsets: [ "arabic", "latin" ],
  weight: [ "300", "400", "500", "600", "700" ],
  variable: "--font-bms-sans",
  display: "swap",
} );

export const viewport: Viewport = {
  themeColor: "#145C98",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL( "https://co-bms.ir" ),
  title: {
    template: "%s | بارمان محور اسپادانا",
    default: "بارمان | هوشمندسازی و مدیریت دارایی‌های حیاتی",
  },
  description:
    "بارمان محور اسپادانا پیشرو در ارائه راهکارهای هوشمندسازی صنعتی، سامانه ICTS و پلتفرم Clinicans. معماری نوین برای حفاظت از زیرساخت‌های انرژی و سلامت کشور.",
  alternates: {
    canonical: "https://co-bms.ir",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "بارمان محور اسپادانا",
    url: "https://co-bms.ir",
    title: "بارمان | هوشمندسازی دارایی‌های حیاتی",
    description: "تکنولوژی بومی برای محافظت از زیرساخت‌های انرژی و سلامت کشور.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Barman Mehvar Spadana - Intelligent Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "بارمان | هوشمندسازی دارایی‌های حیاتی",
    description: "تکنولوژی بومی برای محافظت از زیرساخت‌های انرژی و سلامت کشور.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout ( {
  children,
}: {
  children: React.ReactNode;
} )
{
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://co-bms.ir/#organization",
        "name": "Barman Mehvar Spadana",
        "alternateName": "بارمان محور اسپادانا",
        "url": "https://co-bms.ir",
        "logo": {
          "@type": "ImageObject",
          "url": "https://co-bms.ir/logo.png"
        },
        "foundingDate": "2021",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+98-31-XXXXXXXX",
          "contactType": "customer service",
          "areaServed": "IR",
          "availableLanguage": [ "Persian", "English" ]
        },
        "description": "Leading provider of Smart Infrastructure and Vital Asset Management solutions.",
      },
    ],
  };

  return (
    <html
      lang="fa"
      dir="rtl"
      className={ cn(
        bmsSans.variable,
        "scroll-smooth selection:bg-bms-primary/10 selection:text-bms-primary"
      ) }
    >
      <head>
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={ { __html: JSON.stringify( jsonLd ) } }
        />
      </head>

      <body className="bg-white font-sans text-slate-900 antialiased min-h-screen flex flex-col overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-6 focus:right-6 focus:z-[100] px-6 py-3 bg-bms-primary text-white rounded-xl font-bold shadow-2xl transition-transform"
        >
          پرش به محتوای اصلی
        </a>

        <RootChrome>
          <main
            id="main-content"
            className="flex-1 w-full relative flex flex-col"
            role="main"
          >
            { children }
          </main>
        </RootChrome>
      </body>
    </html>
  );
}