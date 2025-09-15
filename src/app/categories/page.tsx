import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Dumbbell, 
  BookOpen, 
  Gamepad2,
  Car,
  Baby,
  PawPrint,
  Heart,
  Coffee,
  Camera,
  Music,
  Monitor,
  Watch,
  Headphones,
  ShoppingCart,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Electronics",
    icon: Smartphone,
    href: "/category/electronics",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    productCount: 1250,
    subcategories: [
      { name: "Smartphones", count: 320 },
      { name: "Laptops", count: 180 },
      { name: "Tablets", count: 95 },
      { name: "Audio", count: 240 },
      { name: "Gaming", count: 280 },
      { name: "Accessories", count: 135 }
    ]
  },
  {
    name: "Clothing",
    icon: Shirt,
    href: "/category/clothing",
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
    productCount: 3420,
    subcategories: [
      { name: "Men's Clothing", count: 1200 },
      { name: "Women's Clothing", count: 1500 },
      { name: "Kids' Clothing", count: 420 },
      { name: "Shoes", count: 300 }
    ]
  },
  {
    name: "Home & Garden",
    icon: Home,
    href: "/category/home-garden",
    color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    productCount: 890,
    subcategories: [
      { name: "Furniture", count: 280 },
      { name: "Kitchen", count: 220 },
      { name: "Bedroom", count: 150 },
      { name: "Garden", count: 240 }
    ]
  },
  {
    name: "Sports & Outdoors",
    icon: Dumbbell,
    href: "/category/sports",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
    productCount: 650,
    subcategories: [
      { name: "Fitness", count: 200 },
      { name: "Outdoor Recreation", count: 180 },
      { name: "Sports Equipment", count: 270 }
    ]
  },
  {
    name: "Books & Media",
    icon: BookOpen,
    href: "/category/books",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    productCount: 2100,
    subcategories: [
      { name: "Fiction", count: 800 },
      { name: "Non-Fiction", count: 650 },
      { name: "Children's Books", count: 350 },
      { name: "Educational", count: 300 }
    ]
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    href: "/category/gaming",
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400",
    productCount: 480,
    subcategories: [
      { name: "Video Games", count: 280 },
      { name: "Consoles", count: 80 },
      { name: "Gaming Accessories", count: 120 }
    ]
  },
  {
    name: "Automotive",
    icon: Car,
    href: "/category/automotive",
    color: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
    productCount: 320,
    subcategories: [
      { name: "Car Parts", count: 180 },
      { name: "Accessories", count: 90 },
      { name: "Tools", count: 50 }
    ]
  },
  {
    name: "Baby & Kids",
    icon: Baby,
    href: "/category/baby-kids",
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400",
    productCount: 580,
    subcategories: [
      { name: "Baby Gear", count: 220 },
      { name: "Toys", count: 200 },
      { name: "Kids' Clothing", count: 160 }
    ]
  },
  {
    name: "Pet Supplies",
    icon: PawPrint,
    href: "/category/pet-supplies",
    color: "bg-teal-100 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400",
    productCount: 420,
    subcategories: [
      { name: "Dog Supplies", count: 180 },
      { name: "Cat Supplies", count: 150 },
      { name: "Other Pets", count: 90 }
    ]
  },
  {
    name: "Health & Beauty",
    icon: Heart,
    href: "/category/health-beauty",
    color: "bg-rose-100 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400",
    productCount: 750,
    subcategories: [
      { name: "Skincare", count: 280 },
      { name: "Makeup", count: 220 },
      { name: "Health Care", count: 250 }
    ]
  },
  {
    name: "Food & Beverages",
    icon: Coffee,
    href: "/category-food-beverages",
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
    productCount: 380,
    subcategories: [
      { name: "Snacks", count: 150 },
      { name: "Beverages", count: 120 },
      { name: "Gourmet", count: 110 }
    ]
  },
  {
    name: "Photography",
    icon: Camera,
    href: "/category/photography",
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400",
    productCount: 290,
    subcategories: [
      { name: "Cameras", count: 120 },
      { name: "Lenses", count: 80 },
      { name: "Accessories", count: 90 }
    ]
  }
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Shop by Category
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our wide range of products organized by categories to find exactly what you're looking for.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.name} href={category.href}>
                  <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-0 hover:border-primary/20">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className="h-10 w-10" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.productCount.toLocaleString()} products
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                        Shop Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* All Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.name} className="group hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-200`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {category.productCount.toLocaleString()} products
                          </p>
                        </div>
                        
                        {/* Subcategories */}
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-muted-foreground">Popular subcategories:</p>
                          <div className="flex flex-wrap gap-1">
                            {category.subcategories.slice(0, 3).map((sub) => (
                              <Badge key={sub.name} variant="secondary" className="text-xs">
                                {sub.name} ({sub.count})
                              </Badge>
                            ))}
                            {category.subcategories.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{category.subcategories.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:underline" asChild>
                          <Link href={category.href}>
                            Browse all {category.name.toLowerCase()}
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Shopping Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">12,000+</div>
              <div className="text-sm text-muted-foreground">Products Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Brands</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}