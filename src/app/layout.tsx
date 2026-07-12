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
  title: "Mohammed Imthiyaz A | Quality Analyst & Healthcare IT Specialist",
  description:
    "10 years of healthcare IT expertise. Quality Analyst & Business Analysis Specialist ensuring hospital software works flawlessly. 150+ hospitals served globally.",
  keywords: [
    "Quality Analyst",
    "Business Analyst",
    "Healthcare IT",
    "Hospital Management System",
    "HMS",
    "QA",
    "Software Testing",
    "Hyderabad",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Mohammed Imthiyaz A | Healthcare IT Specialist",
    description:
      "10 years. 150+ hospitals. Zero critical production defects. The person who makes sure hospital software works flawlessly.",
    type: "website",
    locale: "en_US",
    siteName: "Mohammed Imthiyaz A | Portfolio",
    images: ["/images/profile.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Imthiyaz A | Healthcare IT Specialist",
    description:
      "10 years. 150+ hospitals. Zero critical production defects.",
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
