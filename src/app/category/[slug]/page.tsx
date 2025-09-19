"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, CATEGORIES, CategoryKey, getProductsByCategory } from "@/lib/products";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { formatINR } from "@/lib/currency";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const key = slug as CategoryKey;
  const category = CATEGORIES[key];
  if (!category) return notFound();

  const products = getProductsByCategory(key);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{category.label}</h1>
        <p className="text-muted-foreground">{products.length} items</p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products in this category yet.</p>
          <Button asChild className="mt-4">
            <Link href="/products">Browse All Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <Card key={p.id} className="group overflow-hidden border-0 hover:shadow-lg transition-all duration-200">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold text-sm line-clamp-2">
                  <Link href={`/product/${p.slug}`} className="hover:text-primary transition-colors">
                    {p.name}
                  </Link>
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">{formatINR(p.price)}</span>
                  {p.comparePrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatINR(p.comparePrice)}
                    </span>
                  )}
                </div>
                <Button size="sm" className="w-full" asChild>
                  <Link href={`/product/${p.slug}`}>
                    <ShoppingCart className="h-4 w-4 mr-2" /> View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
