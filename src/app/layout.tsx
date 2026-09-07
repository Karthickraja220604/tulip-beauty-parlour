import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tulip Beauty Parlour | Where Beauty Blooms",
  description:
    "Tulip Beauty Parlour is a ladies-only beauty parlour offering hair care, skin care, makeup, bridal beauty, nail care, threading and waxing services.",
  keywords: [
    "Tulip Beauty Parlour",
    "beauty parlour",
    "ladies beauty parlour",
    "women beauty parlour",
    "hair care",
    "skin care",
    "makeup",
    "bridal makeup",
    "nail care",
    "threading",
    "waxing",
  ],
  openGraph: {
    title: "Tulip Beauty Parlour | Where Beauty Blooms",
    description:
      "A beautiful space created exclusively for women to relax, refresh and feel their best.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
