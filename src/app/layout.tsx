import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accruwise — Bookkeeping for marketplace sellers",
  description:
    "Bookkeeping and tax support for Etsy, eBay, and marketplace sellers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
