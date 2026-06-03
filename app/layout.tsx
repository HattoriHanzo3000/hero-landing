import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getLocale } from "@/lib/i18n/get-locale";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GizaTech - Independent iOS Development Studio",
  description: "Creator of the Hero app series.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} bg-[#f7f7f5]`}
    >
      <body className="flex min-h-dvh flex-col font-sans antialiased text-neutral-900 selection:bg-neutral-200">
        {children}
      </body>
    </html>
  );
}
