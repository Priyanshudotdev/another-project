"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Subheader } from "@/components/subheader";

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuth = pathname?.startsWith("/auth/") ?? false;

  if (isAuth) {
    // Auth pages: only show brand and content; no header/footer/subheader
    return (
      <div className="min-h-screen bg-background">
        <main className="min-h-[60vh]">{children}</main>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Subheader />
      <main className="min-h-[60vh]">{children}</main>
      <Footer />
    </>
  );
}
