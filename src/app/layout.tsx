import type { Metadata } from "next";
import ThemeProvider from "./components/theme-provider";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const ovoFont = Ovo({
  variable: "--font-ovo",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Adit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
