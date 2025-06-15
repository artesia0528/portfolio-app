import type { Metadata, Viewport } from "next";
import ThemeProvider from "./components/theme-provider";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ovoFont = Ovo({
  variable: "--font-ovo",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// Metadata utama untuk SEO
export const metadata: Metadata = {
  title: {
    template: "%s | Aditya Krisna - Web Developer",
    default: "Aditya Krisna - Web Developer & Designer Profesional"
  },
  description: "Portfolio profesional Aditya Krisna, web developer dan designer berpengalaman. Spesialisasi dalam pembuatan website responsif, aplikasi web, dan solusi digital kreatif.",
  keywords: [
    "web developer", "frontend developer", "portfolio", "next.js", 
    "react developer", "web design", "javascript expert", "typescript", 
    "responsive design", "UI/UX designer", "website development"
  ],
  authors: [{ name: "Aditya Krisna", url: "https://krisnaaditya-portfolio.vercel.app" }],
  creator: "Aditya Krisna",
  publisher: "Aditya Krisna",
  metadataBase: new URL("https://krisnaaditya-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/id-ID",
    },
  },
  openGraph: {
    title: "Aditya Krisna - Web Developer & Designer Profesional",
    description: "Portfolio profesional Aditya Krisna, web developer dan designer berpengalaman. Spesialisasi dalam pembuatan website responsif, aplikasi web, dan solusi digital kreatif.",
    url: "https://krisnaaditya-portfolio.vercel.app",
    siteName: "Portfolio Aditya",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Aditya Krisna",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      new URL("/favicon.ico", "https://krisnaaditya-portfolio.vercel.app"),
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "technology",
};

// Viewport untuk pengaturan tampilan mobile
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e0f2fe" },
    { media: "(prefers-color-scheme: dark)", color: "#210F37" },
  ],
  colorScheme: "dark light",
};

// Komponen JSON-LD untuk structured data
const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Aditya Krisna",
        url: "https://krisnaaditya-portfolio.vercel.app/",
        sameAs: [
          "https://github.com/artesia0528",
          "https://linkedin.com/in/i-komang-krisna-aditya-kusuma",
        ],
        jobTitle: "Web Developer & Designer",
        worksFor: {
          "@type": "Organization",
          name: "Freelancer"
        },
        description: "Web developer dan designer profesional dengan pengalaman dalam membangun aplikasi web modern menggunakan React, Next.js, dan TypeScript."
      })
    }}
  />
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <JsonLd />
        <link rel="canonical" href="https://krisnaaditya-portfolio.vercel.app" />
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.175392;106.827153" />
        <meta name="ICBM" content="-6.175392, 106.827153" />
        <meta name="apple-mobile-web-app-title" content="aditya Portfolio" />
      </head>
      <body
        className={`${outfitFont.variable} ${ovoFont.variable} antialiased leading-8 overflow-x-hidden text-[#210F37] bg-sky-50 dark:bg-[#210F37] dark:text-[#ECEFCA]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}