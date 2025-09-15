import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Discover Amazing
                <span className="text-primary"> Products</span>
                <br />
                at Great Prices
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Shop the latest trends and must-have products with fast shipping and excellent customer service.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/categories">
                  Browse Categories
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-sm">Top Rated</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8">
              <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-6xl">🛍️</div>
                  <p className="text-muted-foreground">Hero Image</p>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">50% OFF</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Selected Items</p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">4.8 Rating</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">10k+ Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}