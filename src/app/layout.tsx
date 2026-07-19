import type { Metadata } from "next";
import { Inter, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myportfolio-seven-ruby-43.vercel.app"),
  title: "Mohammed Imthiyaz A | Senior QA & Business Analyst | Healthcare IT | AI Automation",
  description:
    "Senior Quality Analyst & Business Analyst with 10+ years in healthcare IT. Specializing in HMS quality assurance, AI-driven test automation, and vendor implementation across 150+ global deployments. Zero critical production defects.",
  keywords: [
    "Senior Quality Analyst",
    "Business Analyst",
    "Healthcare IT",
    "Hospital Management System",
    "HMS",
    "QA",
    "Software Testing",
    "AI Automation",
    "Python Automation",
    "Hyderabad",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Mohammed Imthiyaz A | Senior QA & Business Analyst | Healthcare IT",
    description:
      "10+ years. 150+ hospitals. Zero critical production defects. AI-driven automation specialist building tools that eliminate manual bottlenecks.",
    type: "website",
    locale: "en_US",
    siteName: "Mohammed Imthiyaz A | Portfolio",
    images: ["/images/profile.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Imthiyaz A | Senior QA & Business Analyst",
    description:
      "10+ years. 150+ hospitals. Zero critical production defects. AI-driven automation specialist.",
    images: ["/images/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${dmSerif.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
