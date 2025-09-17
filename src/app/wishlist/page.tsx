"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  ShoppingBag, 
  ArrowLeft, 
  Plus,
  Share2,
  Trash2,
  Bell,
  Grid,
  List
} from "lucide-react";

// Mock wishlist data
const wishlistItems = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    comparePrice: 99.99,
    image: "/products/headphones.jpg",
    slug: "wireless-bluetooth-headphones",
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    addedDate: "2024-01-10",
    priceDrop: false
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 189.99,
    comparePrice: 249.99,
    image: "/products/smartwatch.jpg",
    slug: "smart-fitness-watch",
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    addedDate: "2024-01-08",
    priceDrop: true
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
    inStock: false,
    addedDate: "2024-01-05",
    priceDrop: false
  },
  {
    id: "5",
    name: "Bluetooth Speaker",
    price: 54.99,
    comparePrice: 59.99,
    image: "/products/speaker.jpg",
    slug: "bluetooth-speaker",
    rating: 4.4,
    reviewCount: 167,
    inStock: true,
    addedDate: "2024-01-12",
    priceDrop: true
  }
];

export default function WishlistPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [items, setItems] = useState(wishlistItems);

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const shareWishlist = () => {
    if (navigator.share) {
      navigator.share({
  title: 'My Allora mart Wishlist',
        text: 'Check out my wishlist!',
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Wishlist link copied to clipboard!');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
              <Heart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold">Your wishlist is empty</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Save items you love to your wishlist. They'll be waiting for you when you're ready to buy.
            </p>
            <div className="space-y-4">
              <Button size="lg" asChild>
                <Link href="/products">
                  Start Shopping
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/categories">
                  Browse Categories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
              <h1 className="text-2xl font-bold">My Wishlist ({items.length})</h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={shareWishlist}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className="rounded-r-none"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  className="rounded-l-none"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Price Drop Alert */}
        {items.some(item => item.priceDrop) && (
          <Card className="mb-6 border-green-200 bg-green-50 dark:bg-green-900/10">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-green-600" />
                <span className="font-medium text-green-800 dark:text-green-200">
                  Good news! Prices have dropped on {items.filter(item => item.priceDrop).length} item(s) in your wishlist
                </span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Wishlist Items */}
        <div className={`${viewMode === "grid" 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
          : "space-y-4"
        }`}>
          {items.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-200">
              <CardContent className="p-0">
                {viewMode === "grid" ? (
                  // Grid View
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-muted">
                                <div class="text-4xl">📦</div>
                              </div>
                            `;
                          }}
                        />
                      </div>
                      
                      {item.priceDrop && (
                        <Badge className="absolute top-2 left-2 bg-green-600">
                          Price Drop!
                        </Badge>
                      )}
                      
                      {!item.inStock && (
                        <Badge variant="secondary" className="absolute top-2 left-2">
                          Out of Stock
                        </Badge>
                      )}
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Heart className="h-4 w-4 fill-current" />
                      </Button>
                    </div>
                    
                    <div className="p-4 space-y-3">
                      <h3 className="font-semibold text-sm line-clamp-2">
                        <Link 
                          href={`/product/${item.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      </h3>
                      
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-3 w-3 rounded-full ${
                              i < Math.floor(item.rating)
                                ? "bg-yellow-500"
                                : "bg-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground">
                          ({item.reviewCount})
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold">
                          {item.price.toFixed(2)}
                        </span>
                        {item.comparePrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {item.comparePrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Button 
                          className="w-full" 
                          size="sm"
                          disabled={!item.inStock}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          {item.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="p-4">
                    <div className="flex space-x-4">
                      <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-muted">
                                <div class="text-2xl">📦</div>
                              </div>
                            `;
                          }}
                        />
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">
                              <Link 
                                href={`/product/${item.slug}`}
                                className="hover:text-primary transition-colors"
                              >
                                {item.name}
                              </Link>
                            </h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`h-3 w-3 rounded-full ${
                                      i < Math.floor(item.rating)
                                        ? "bg-yellow-500"
                                        : "bg-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">
                                ({item.reviewCount})
                              </span>
                              {item.priceDrop && (
                                <Badge className="bg-green-600 text-white">
                                  Price Drop!
                                </Badge>
                              )}
                              {!item.inStock && (
                                <Badge variant="secondary">
                                  Out of Stock
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold">
                            ${item.price.toFixed(2)}
                          </span>
                          {item.comparePrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${item.comparePrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          Added on {new Date(item.addedDate).toLocaleDateString()}
                        </p>
                        
                        <div className="flex space-x-2">
                          <Button 
                            size="sm"
                            disabled={!item.inStock}
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                          <Button variant="outline" size="sm">
                            <Bell className="h-4 w-4 mr-2" />
                            Price Alert
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Wishlist Summary */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">
                            {items.reduce((total, item) => total + item.price, 0).toFixed(2)}
              </div>
              <div className="text-sm text-muted-foreground">Total Value</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">
                {items.filter(item => item.priceDrop).length}
              </div>
              <div className="text-sm text-muted-foreground">Price Drops</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">
                {items.filter(item => item.inStock).length}
              </div>
              <div className="text-sm text-muted-foreground">In Stock</div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Button size="lg" className="mr-4">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Add All to Cart
            </Button>
            <Button variant="outline" size="lg" onClick={shareWishlist}>
              <Share2 className="h-5 w-5 mr-2" />
              Share Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}