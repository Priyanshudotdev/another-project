import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";
import { AppChrome } from "@/components/app-chrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Allora mart — Your One-Stop Online Shopping Destination",
  description:
    "Discover amazing products at great prices. Shop the latest trends in electronics, fashion, home goods, and more with fast shipping and excellent customer service.",
  keywords: [
    "Allora mart",
    "e-commerce",
    "online shopping",
    "electronics",
    "fashion",
    "home goods",
    "deals",
  ],
  authors: [{ name: "Allora mart" }],
  openGraph: {
    title: "Allora mart — Online Shopping Made Easy",
    description:
      "Shop thousands of products at competitive prices with fast shipping and excellent customer service.",
    url: "https://alloramart.example.com",
    siteName: "Allora mart",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allora mart — Online Shopping Made Easy",
    description:
      "Shop thousands of products at competitive prices with fast shipping and excellent customer service.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Providers>
          <AppChrome>
            {children}
          </AppChrome>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
