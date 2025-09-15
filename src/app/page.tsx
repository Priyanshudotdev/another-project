import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { CategoryShowcase } from "@/components/category-showcase";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const token = (await cookies()).get("auth_token")?.value;
  if (!token) {
    redirect("/auth/signin?callbackUrl=/");
  }
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CategoryShowcase />
      <ProductGrid />
    </div>
  );
}