import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Mohammed Imthiyaz A | Healthcare IT Specialist",
    description:
      "10 years. 150+ hospitals. Zero critical production defects. The person who makes sure hospital software works flawlessly.",
    type: "website",
    locale: "en_US",
    siteName: "Mohammed Imthiyaz A",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Imthiyaz A | Healthcare IT Specialist",
    description:
      "10 years. 150+ hospitals. Zero critical production defects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
