"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { CategoryShowcase } from "@/components/category-showcase";

export default function Home() {
  // Middleware ensures only authenticated users reach here; keep minimal in component.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) {
    return <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground">Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CategoryShowcase />
      <ProductGrid />
    </div>
  );
}