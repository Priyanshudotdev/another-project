"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Eye,
  ArrowRight 
} from "lucide-react";
import { useCartStore } from "@/store/cart-store";

// Mock product data - in a real app, this would come from an API
const featuredProducts = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    comparePrice: 99.99,
    image: "/products/headphones.jpg",
    slug: "wireless-bluetooth-headphones",
    rating: 4.5,
    reviewCount: 128,
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 199.99,
    comparePrice: 249.99,
    image: "/products/smartwatch.jpg",
    slug: "smart-fitness-watch",
    rating: 4.8,
    reviewCount: 89,
    badge: "New",
  },
  {
    id: "3",
    name: "Premium Coffee Maker",
    price: 149.99,
    comparePrice: null,
    image: "/products/coffee-maker.jpg",
    slug: "premium-coffee-maker",
    rating: 4.3,
    reviewCount: 56,
    badge: null,
  },
  {
    id: "4",
    name: "Wireless Charging Pad",
    price: 29.99,
    comparePrice: 39.99,
    image: "/products/charging-pad.jpg",
    slug: "wireless-charging-pad",
    rating: 4.6,
    reviewCount: 203,
    badge: "Hot Deal",
  },
  {
    id: "5",
    name: "Bluetooth Speaker",
    price: 59.99,
    comparePrice: null,
    image: "/products/speaker.jpg",
    slug: "bluetooth-speaker",
    rating: 4.4,
    reviewCount: 167,
    badge: null,
  },
  {
    id: "6",
    name: "Smart Home Hub",
    price: 89.99,
    comparePrice: 119.99,
    image: "/products/smarthome.jpg",
    slug: "smart-home-hub",
    rating: 4.7,
    reviewCount: 94,
    badge: "Limited",
  },
];

function ProductCard({ product }: { product: typeof featuredProducts[0] }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    });
  };

  return (
    <Card className="group overflow-hidden border-0 hover:shadow-lg transition-all duration-200">
      <div className="relative">
        {/* Product image */}
        <div className="aspect-square bg-muted rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-muted">
                  <div class="text-center space-y-2">
                    <div class="text-4xl">📦</div>
                    <p class="text-sm text-muted-foreground">Product Image</p>
                  </div>
                </div>
              `;
            }}
          />
        </div>
        
        {/* Badge */}
        {product.badge && (
          <Badge className="absolute top-2 left-2">
            {product.badge}
          </Badge>
        )}
        
        {/* Action buttons */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 space-y-2">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full"
            asChild
          >
            <Link href={`/product/${product.slug}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        {/* Product info */}
        <div className="space-y-1">
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
            <Link href={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </h3>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-500 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>
        </div>
        
        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">
            {product.price.toFixed(2)}
          </span>
          {product.comparePrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.comparePrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Add to cart button */}
        <Button 
          className="w-full" 
          size="sm"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export function ProductGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of the most popular and trending products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}