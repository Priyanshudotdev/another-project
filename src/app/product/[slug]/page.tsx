"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, CATEGORIES, getProductsByCategory } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { formatINR } from "@/lib/currency";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const product = getProductBySlug(slug);
  const addItem = useCartStore((s) => s.addItem);

  if (!product) return notFound();

  const category = CATEGORIES[product.category];
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link href={category.href} className="hover:text-foreground">{category.label}</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{product.reviewCount} reviews</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold">{formatINR(product.price)}</span>
            {product.comparePrice && (
              <span className="text-muted-foreground line-through">{formatINR(product.comparePrice)}</span>
            )}
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Category: <Link href={category.href} className="text-primary hover:underline">{category.label}</Link></p>
            <p>Status: {product.inStock ? 'In stock' : 'Out of stock'}</p>
          </div>

          <div className="flex gap-3">
            <Button size="lg" disabled={!product.inStock} onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image, slug: product.slug })}>
              <ShoppingCart className="h-5 w-5 mr-2" />
              {product.inStock ? 'Add to Cart' : 'Unavailable'}
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">You might also like</h2>
        {related.length === 0 ? (
          <p className="text-sm text-muted-foreground">No related products yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
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
                      <span className="text-sm text-muted-foreground line-through">{formatINR(p.comparePrice)}</span>
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
    </div>
  );
}